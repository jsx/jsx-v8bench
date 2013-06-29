# NAME

JSX port of V8 Benchmark Suite

# SYNPSIS

	make # runs jsx-v8bench and original v8bench

# EXAMPLE RESULT

Do `make` three times on MacBook Air (Core i5 1.7 GHz, OSX 10.8.4)

    $ make 3times

    jsx --version
    0.9.48 (2013-06-29 14:28:24 -0700; 694977540e8d28a6c304a6fa2130bc10a4225469)
    node --version
    v0.10.11

    # JSX

    make jsx-build
    jsx --release --executable node --output v8bench.jsx.js run.jsx

    node v8bench.jsx.js
    Richards: 12695
    DeltaBlue: 15677
    Crypto: 11586
    RayTrace: 24765
    RegExp: 2985
    Splay: 3973
    NavierStokes: 16489
    ----
    Score (version 7): 10159

    make jsx

    node v8bench.jsx.js
    Richards: 12419
    DeltaBlue: 15961
    Crypto: 11742
    RayTrace: 22792
    RegExp: 2819
    Splay: 3472
    NavierStokes: 15179
    ----
    Score (version 7): 9665

    make jsx

    node v8bench.jsx.js
    Richards: 11939
    DeltaBlue: 14156
    Crypto: 11215
    RayTrace: 23088
    RegExp: 2765
    Splay: 3463
    NavierStokes: 14781
    ----
    Score (version 7): 9338

    # Original JS

    make original-build
    cat v8bench-v7/{base,richards,deltablue,crypto,raytrace,regexp,splay,navier-stokes,run}.js > original.js

    make original
    node original.js
    Richards: 10181
    DeltaBlue: 12886
    Crypto: 12100
    RayTrace: 11152
    RegExp: 2800
    Splay: 3338
    NavierStokes: 14958
    ----
    Score (version 7): 8191

    make original
    node original.js
    Richards: 10499
    DeltaBlue: 12814
    Crypto: 11881
    RayTrace: 11754
    RegExp: 2784
    Splay: 3419
    NavierStokes: 15683
    ----
    Score (version 7): 8339

    make original
    node original.js
    Richards: 11318
    DeltaBlue: 14447
    Crypto: 13242
    RayTrace: 13072
    RegExp: 2816
    Splay: 3268
    NavierStokes: 16374
    ----
    Score (version 7): 8854

# SEE ALSO

* [http://v8.googlecode.com/svn/data/benchmarks/v7/run.html](V8 Benchmark Suite version 7)
