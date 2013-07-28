
import "js/web.jsx";
import 'console.jsx';

import 'base.jsx';
import 'richards.jsx';
import 'deltablue.jsx';
import 'crypto.jsx';
import 'raytrace.jsx';
//import 'earley-boyer.jsx';
import 'regexp.jsx';
import 'splay.jsx';
import 'navier-stokes.jsx';


class MyBenchmarkRunner extends BenchmarkRunner {

    var success = true;

    var completed = 0;
    var benchmarks = BenchmarkSuite.CountBenchmarks();

    override function NotifyStep(name : string) : void {
        var status = dom.id("status");
        var percentage = (++this.completed / this.benchmarks) * 100;
        status.innerHTML = "Running: " + Math.round(percentage) + "% completed.";
    }

    override function NotifyResult(name : string, result : string) : void {
        dom.id("results").innerHTML += name + ': ' + result + "<br />";
    }

    override function NotifyError(name : string, error : Error) : void {
        this.NotifyResult(name, "<strong>" + error.toString() + "</strong>");
        this.success = false;
    }


    override function NotifyScore(score : string) : void {
        if (this.success) {
            dom.id("status").innerHTML = 'Score: ' + score;
        }
    }
}

class _Main {
    static function run() : void {
        console.log("start v8bench version " + BenchmarkSuite.version);

        new Richards();
        new DeltaBlue();
        new Crypto();
        new RayTrace();
        new RegExpTest();
        new Splay();
        new NavierStokes();

        BenchmarkSuite.RunSuites(new MyBenchmarkRunner());
    }

    static function main(args : string[]) : void {
        dom.id("version").innerHTML = BenchmarkSuite.version;

        dom.window.setTimeout(_Main.run, 200);
    }
}
// vim: set expandtab:
