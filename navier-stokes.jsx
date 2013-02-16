// -*- mode: jsx; jsx-indent-level: 4; indent-tabs-mode: nil; -*-
/**
 * Copyright 2012 the V8 project authors. All rights reserved.
 * Copyright 2009 Oliver Hunt <http://nerget.com>
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

import './base.jsx';

class NavierStokes {
    function constructor() {

        var solver = null : FluidField;

        function addPoints(field : Field) : void {
            var n = 64;
            for (var i = 1; i <= n; i++) {
                field.setVelocity(i, i, n, n);
                field.setDensity(i, i, 5);
                field.setVelocity(i, n - i, -n, -n);
                field.setDensity(i, n - i, 20);
                field.setVelocity(128 - i, n + i, -n, -n);
                field.setDensity(128 - i, n + i, 30);
            }
        }

        var framesTillAddingPoints = 0;
        var framesBetweenAddingPoints = 5;

        function prepareFrame(field : Field) : void
        {
            if (framesTillAddingPoints == 0) {
                addPoints(field);
                framesTillAddingPoints = framesBetweenAddingPoints;
                framesBetweenAddingPoints++;
            } else {
                framesTillAddingPoints--;
            }
        }

        function runNavierStokes() : void
        {
            solver.update();
        }

        function setupNavierStokes() : void
        {
            solver = new FluidField();
            solver.setResolution(128, 128);
            solver.setIterations(20);
            solver.setDisplayFunction(function(f : Field):void{});
            solver.setUICallback(prepareFrame);
            solver.reset();
        }

        function tearDownNavierStokes() : void
        {
            solver = null;
        }

        var navierStokes = new BenchmarkSuite('NavierStokes', 1484000, [
            new Benchmark('NavierStokes',
                runNavierStokes,
                setupNavierStokes,
                tearDownNavierStokes)
            ]);
    }
}


// Code from Oliver Hunt (http://nerget.com/fluidSim/pressure.js) starts here.
class FluidField {

    static var width : number;
    static var height : number;
    static var rowSize : number;

    var setResolution : (number, number) -> boolean;
    var setIterations : (number) -> void;
    var setDisplayFunction : ((Field)->void) -> void;
    var setUICallback : ((Field)->void) -> void;
    var reset : () -> void;
    var update : () -> void;
    var iterations : () -> number;

    function constructor() {

        var iterations = 10;
        var visc = 0.5;
        var dt = 0.1;
        var dens = null : number[];
        var dens_prev = null : number[];
        var u = null : number[];
        var u_prev = null : number[];
        var v = null : number[];
        var v_prev = null : number[];
        var size = -1;
        var displayFunc = null : (Field) -> void;

        function addFields(x : number[], s : number[], dt : number) : void
        {
            for (var i=0; i<size ; i++ ) x[i] += dt*s[i];
        }

        function set_bnd(b : number, x : number[]) : void
        {
            if (b==1) {
                for (var i = 1; i <= FluidField.width; i++) {
                    x[i] =  x[i + FluidField.rowSize];
                    x[i + (FluidField.height+1) *FluidField.rowSize] = x[i + FluidField.height * FluidField.rowSize];
                }

                for (var j = 1; i <= FluidField.height; i++) {
                    x[j * FluidField.rowSize] = -x[1 + j * FluidField.rowSize];
                    x[(FluidField.width + 1) + j * FluidField.rowSize] = -x[FluidField.width + j * FluidField.rowSize];
                }
            } else if (b == 2) {
                for (var i = 1; i <= FluidField.width; i++) {
                    x[i] = -x[i + FluidField.rowSize];
                    x[i + (FluidField.height + 1) * FluidField.rowSize] = -x[i + FluidField.height * FluidField.rowSize];
                }

                for (var j = 1; j <= FluidField.height; j++) {
                    x[j * FluidField.rowSize] =  x[1 + j * FluidField.rowSize];
                    x[(FluidField.width + 1) + j * FluidField.rowSize] =  x[FluidField.width + j * FluidField.rowSize];
                }
            } else {
                for (var i = 1; i <= FluidField.width; i++) {
                    x[i] =  x[i + FluidField.rowSize];
                    x[i + (FluidField.height + 1) * FluidField.rowSize] = x[i + FluidField.height * FluidField.rowSize];
                }

                for (var j = 1; j <= FluidField.height; j++) {
                    x[j * FluidField.rowSize] =  x[1 + j * FluidField.rowSize];
                    x[(FluidField.width + 1) + j * FluidField.rowSize] =  x[FluidField.width + j * FluidField.rowSize];
                }
            }
            var maxEdge = (FluidField.height + 1) * FluidField.rowSize;
            x[0]                 = 0.5 * (x[1] + x[FluidField.rowSize]);
            x[maxEdge]           = 0.5 * (x[1 + maxEdge] + x[FluidField.height * FluidField.rowSize]);
            x[(FluidField.width+1)]         = 0.5 * (x[FluidField.width] + x[(FluidField.width + 1) + FluidField.rowSize]);
            x[(FluidField.width+1)+maxEdge] = 0.5 * (x[FluidField.width + maxEdge] + x[(FluidField.width + 1) + FluidField.height * FluidField.rowSize]);
        }

        function lin_solve(b : number, x : number[], x0 : number[], a : number, c : number) : void
        {
            if (a == 0 && c == 1) {
                for (var j=1 ; j<=FluidField.height; j++) {
                    var currentRow = j * FluidField.rowSize;
                    ++currentRow;
                    for (var i = 0; i < FluidField.width; i++) {
                        x[currentRow] = x0[currentRow];
                        ++currentRow;
                    }
                }
                set_bnd(b, x);
            } else {
                var invC = 1 / c;
                for (var k=0 ; k<iterations; k++) {
                    for (var j=1 ; j<=FluidField.height; j++) {
                        var lastRow = (j - 1) * FluidField.rowSize;
                        var currentRow = j * FluidField.rowSize;
                        var nextRow = (j + 1) * FluidField.rowSize;
                        var lastX = x[currentRow];
                        ++currentRow;
                        for (var i=1; i<=FluidField.width; i++)
                            lastX = x[currentRow] = (x0[currentRow] + a*(lastX+x[++currentRow]+x[++lastRow]+x[++nextRow])) * invC;
                    }
                    set_bnd(b, x);
                }
            }
        }

        function diffuse(b : number, x : number[], x0 : number[], dt : number) : void
        {
            var a = 0;
            lin_solve(b, x, x0, a, 1 + 4*a);
        }

        function lin_solve2(x : number[], x0 : number[], y : number[], y0 : number[], a : number, c : number) : void
        {
            if (a == 0 && c == 1) {
                for (var j=1 ; j <= FluidField.height; j++) {
                    var currentRow = j * FluidField.rowSize;
                    ++currentRow;
                    for (var i = 0; i < FluidField.width; i++) {
                        x[currentRow] = x0[currentRow];
                        y[currentRow] = y0[currentRow];
                        ++currentRow;
                    }
                }
                set_bnd(1, x);
                set_bnd(2, y);
            } else {
                var invC = 1/c;
                for (var k=0 ; k<iterations; k++) {
                    for (var j=1 ; j <= FluidField.height; j++) {
                        var lastRow = (j - 1) * FluidField.rowSize;
                        var currentRow = j * FluidField.rowSize;
                        var nextRow = (j + 1) * FluidField.rowSize;
                        var lastX = x[currentRow];
                        var lastY = y[currentRow];
                        ++currentRow;
                        for (var i = 1; i <= FluidField.width; i++) {
                            lastX = x[currentRow] = (x0[currentRow] + a * (lastX + x[currentRow] + x[lastRow] + x[nextRow])) * invC;
                            lastY = y[currentRow] = (y0[currentRow] + a * (lastY + y[++currentRow] + y[++lastRow] + y[++nextRow])) * invC;
                        }
                    }
                    set_bnd(1, x);
                    set_bnd(2, y);
                }
            }
        }

        function diffuse2(x : number[], x0 : number[], y : number[], y0 : number[], dt : number) : void
        {
            var a = 0;
            lin_solve2(x, x0, y, y0, a, 1 + 4 * a);
        }

        function advect(b : number, d : number[], d0 : number[], u : number[], v : number[], dt : number) : void
        {
            var Wdt0 = dt * FluidField.width;
            var Hdt0 = dt * FluidField.height;
            var Wp5 = FluidField.width + 0.5;
            var Hp5 = FluidField.height + 0.5;
            for (var j = 1; j<= FluidField.height; j++) {
                var pos = j * FluidField.rowSize;
                for (var i = 1; i <= FluidField.width; i++) {
                    var x = i - Wdt0 * u[++pos];
                    var y = j - Hdt0 * v[pos];
                    if (x < 0.5)
                        x = 0.5;
                    else if (x > Wp5)
                        x = Wp5;
                    var i0 = x | 0;
                    var i1 = i0 + 1;
                    if (y < 0.5)
                        y = 0.5;
                    else if (y > Hp5)
                        y = Hp5;
                    var j0 = y | 0;
                    var j1 = j0 + 1;
                    var s1 = x - i0;
                    var s0 = 1 - s1;
                    var t1 = y - j0;
                    var t0 = 1 - t1;
                    var row1 = j0 * FluidField.rowSize;
                    var row2 = j1 * FluidField.rowSize;
                    d[pos] = s0 * (t0 * d0[i0 + row1] + t1 * d0[i0 + row2]) + s1 * (t0 * d0[i1 + row1] + t1 * d0[i1 + row2]);
                }
            }
            set_bnd(b, d);
        }

        function project(u : number[], v : number[], p : number[], div : number[]) : void
        {
            var h = -0.5 / Math.sqrt(FluidField.width * FluidField.height);
            for (var j = 1 ; j <= FluidField.height; j++ ) {
                var row = j * FluidField.rowSize;
                var previousRow = (j - 1) * FluidField.rowSize;
                var prevValue = row - 1;
                var currentRow = row;
                var nextValue = row + 1;
                var nextRow = (j + 1) * FluidField.rowSize;
                for (var i = 1; i <= FluidField.width; i++ ) {
                    div[++currentRow] = h * (u[++nextValue] - u[++prevValue] + v[++nextRow] - v[++previousRow]);
                    p[currentRow] = 0;
                }
            }
            set_bnd(0, div);
            set_bnd(0, p);

            lin_solve(0, p, div, 1, 4 );
            var wScale = 0.5 * FluidField.width;
            var hScale = 0.5 * FluidField.height;
            for (var j = 1; j<= FluidField.height; j++ ) {
                var prevPos = j * FluidField.rowSize - 1;
                var currentPos = j * FluidField.rowSize;
                var nextPos = j * FluidField.rowSize + 1;
                var prevRow = (j - 1) * FluidField.rowSize;
                var currentRow = j * FluidField.rowSize;
                var nextRow = (j + 1) * FluidField.rowSize;

                for (var i = 1; i<= FluidField.width; i++) {
                    u[++currentPos] -= wScale * (p[++nextPos] - p[++prevPos]);
                    v[currentPos]   -= hScale * (p[++nextRow] - p[++prevRow]);
                }
            }
            set_bnd(1, u);
            set_bnd(2, v);
        }

        function dens_step(x : number[], x0 : number[], u : number[], v : number[], dt : number) : void
        {
            addFields(x, x0, dt);
            diffuse(0, x0, x, dt );
            advect(0, x, x0, u, v, dt );
        }

        function vel_step(u : number[], v : number[], u0 : number[], v0 : number[], dt : number) : void
        {
            addFields(u, u0, dt );
            addFields(v, v0, dt );
            var temp = u0; u0 = u; u = temp;
            var temp = v0; v0 = v; v = temp;
            diffuse2(u,u0,v,v0, dt);
            project(u, v, u0, v0);
            var temp = u0; u0 = u; u = temp;
            var temp = v0; v0 = v; v = temp;
            advect(1, u, u0, u0, v0, dt);
            advect(2, v, v0, u0, v0, dt);
            project(u, v, u0, v0 );
        }

        var uiCallback = function(f : Field) : void {};

        function queryUI(d : number[], u : number[], v : number[]) : void
        {
            for (var i = 0; i < size; i++)
                u[i] = v[i] = d[i] = 0.0;
            uiCallback(new Field(d, u, v));
        }

        this.update = function () {
            queryUI(dens_prev, u_prev, v_prev);
            vel_step(u, v, u_prev, v_prev, dt);
            dens_step(dens, dens_prev, u, v, dt);
            displayFunc(new Field(dens, u, v));
        };
        this.setDisplayFunction = function(func) {
            displayFunc = func;
        };

        this.iterations = function() { return iterations; };
        this.setIterations = function(iters) {
            if (iters > 0 && iters <= 100)
                iterations = iters;
        };
        this.setUICallback = function(callback) {
            uiCallback = callback;
        };
        function reset() : void
        {
            FluidField.rowSize = FluidField.width + 2;
            size = (FluidField.width+2)*(FluidField.height+2);
            dens = new Array.<number>(size);
            dens_prev = new Array.<number>(size);
            u = new Array.<number>(size);
            u_prev = new Array.<number>(size);
            v = new Array.<number>(size);
            v_prev = new Array.<number>(size);
            for (var i = 0; i < size; i++)
                dens_prev[i] = u_prev[i] = v_prev[i] = dens[i] = u[i] = v[i] = 0;
        };
        this.reset = reset;
        this.setResolution = function (hRes : number, wRes : number) : boolean
        {
            var res = wRes * hRes;
            if (res > 0 && res < 1000000 && (wRes != FluidField.width || hRes != FluidField.height)) {
                FluidField.width = wRes;
                FluidField.height = hRes;
                reset();
                return true;
            }
            return false;
        };
        this.setResolution(64, 64);
    }
}

class Field {

    var dens : number[];
    var u : number[];
    var v : number[];

    function constructor(dens : number[], u : number[], v : number[]) {
        this.dens = dens;
        this.u = u;
        this.v = v;
    }

    function setDensity(x : number, y : number, d : number) : void {
        this.dens[(x + 1) + (y + 1) * FluidField.rowSize] = d;
    }

    function getDensity(x : number, y : number) : number {
        return this.dens[(x + 1) + (y + 1) * FluidField.rowSize];
    }

    function setVelocity(x : number, y : number, xv : number, yv : number) : void {
        this.u[(x + 1) + (y + 1) * FluidField.rowSize] = xv;
        this.v[(x + 1) + (y + 1) * FluidField.rowSize] = yv;
    }

    function getXVelocity(x : number, y : number) : number {
        return this.u[(x + 1) + (y + 1) * FluidField.rowSize];
    }

    function getYVelocity(x : number, y : number) : number {
        return this.v[(x + 1) + (y + 1) * FluidField.rowSize];
    }

    function width() : number {
	    return FluidField.width;
    }

    function height() : number {
	    return FluidField.height;
    }

}

// vim: set expandtab:
