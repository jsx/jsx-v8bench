// generatedy by JSX compiler 0.9.63 (2013-09-01 14:53:38 +0900; b8d73a00b5921afdac86c7c75dd58b18a88550ef)
var JSX = {};
(function (JSX) {
/**
 * extends the class
 */
function $__jsx_extend(derivations, base) {
	var ctor = function () {};
	ctor.prototype = base.prototype;
	var proto = new ctor();
	for (var i in derivations) {
		derivations[i].prototype = proto;
	}
}

/**
 * copies the implementations from source interface to target
 */
function $__jsx_merge_interface(target, source) {
	for (var k in source.prototype)
		if (source.prototype.hasOwnProperty(k))
			target.prototype[k] = source.prototype[k];
}

/**
 * defers the initialization of the property
 */
function $__jsx_lazy_init(obj, prop, func) {
	function reset(obj, prop, value) {
		delete obj[prop];
		obj[prop] = value;
		return value;
	}

	Object.defineProperty(obj, prop, {
		get: function () {
			return reset(obj, prop, func());
		},
		set: function (v) {
			reset(obj, prop, v);
		},
		enumerable: true,
		configurable: true
	});
}

/**
 * sideeffect().a /= b
 */
function $__jsx_div_assign(obj, prop, divisor) {
	return obj[prop] = (obj[prop] / divisor) | 0;
}

/*
 * global functions, renamed to avoid conflict with local variable names
 */
var $__jsx_parseInt = parseInt;
var $__jsx_parseFloat = parseFloat;
function $__jsx_isNaN(n) { return n !== n; }
var $__jsx_isFinite = isFinite;

var $__jsx_encodeURIComponent = encodeURIComponent;
var $__jsx_decodeURIComponent = decodeURIComponent;
var $__jsx_encodeURI = encodeURI;
var $__jsx_decodeURI = decodeURI;

var $__jsx_ObjectToString = Object.prototype.toString;
var $__jsx_ObjectHasOwnProperty = Object.prototype.hasOwnProperty;

/*
 * profiler object, initialized afterwards
 */
function $__jsx_profiler() {
}

/*
 * public interface to JSX code
 */
JSX.require = function (path) {
	var m = $__jsx_classMap[path];
	return m !== undefined ? m : null;
};

JSX.profilerIsRunning = function () {
	return $__jsx_profiler.getResults != null;
};

JSX.getProfileResults = function () {
	return ($__jsx_profiler.getResults || function () { return {}; })();
};

JSX.postProfileResults = function (url, cb) {
	if ($__jsx_profiler.postResults == null)
		throw new Error("profiler has not been turned on");
	return $__jsx_profiler.postResults(url, cb);
};

JSX.resetProfileResults = function () {
	if ($__jsx_profiler.resetResults == null)
		throw new Error("profiler has not been turned on");
	return $__jsx_profiler.resetResults();
};
JSX.DEBUG = false;
function StopIteration() {
	Error.call(this);
	this.name = "StopIteration";
	if (Error.captureStackTrace) Error.captureStackTrace(this, StopIteration);
};

$__jsx_extend([StopIteration], Error);
function _Main() {
};

$__jsx_extend([_Main], Object);
function _Main$run$() {
	console.log("start v8bench version " + BenchmarkSuite.version);
	new Richards();
	new DeltaBlue();
	new Crypto();
	new RayTrace();
	new RegExpTest();
	new Splay();
	new NavierStokes();
	BenchmarkSuite$RunSuites$LBenchmarkRunner$(new MyBenchmarkRunner());
};

_Main.run$ = _Main$run$;

function _Main$main$AS(args) {
	dom.document.getElementById("version").innerHTML = BenchmarkSuite.version;
	dom.window.setTimeout(_Main$run$, 200);
};

_Main.main = _Main$main$AS;
_Main.main$AS = _Main$main$AS;

function dom() {
};

$__jsx_extend([dom], Object);
function dom$id$S(id) {
	return dom.document.getElementById(id);
};

dom.id$S = dom$id$S;

function dom$getElementById$S(id) {
	return dom.document.getElementById(id);
};

dom.getElementById$S = dom$getElementById$S;

function dom$createElement$S(tag) {
	return dom.document.createElement(tag);
};

dom.createElement$S = dom$createElement$S;

function EventInit() {
	this.bubbles = false;
	this.cancelable = false;
};

$__jsx_extend([EventInit], Object);
function CustomEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.detail = null;
};

$__jsx_extend([CustomEventInit], EventInit);
function MutationObserverInit() {
	this.childList = false;
	this.attributes = false;
	this.characterData = false;
	this.subtree = false;
	this.attributeOldValue = false;
	this.characterDataOldValue = false;
	this.attributeFilter = null;
};

$__jsx_extend([MutationObserverInit], Object);
function UIEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.view = null;
	this.detail = 0;
};

$__jsx_extend([UIEventInit], EventInit);
function FocusEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.view = null;
	this.detail = 0;
	this.relatedTarget = null;
};

$__jsx_extend([FocusEventInit], Object);
function MouseEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.view = null;
	this.detail = 0;
	this.screenX = 0;
	this.screenY = 0;
	this.clientX = 0;
	this.clientY = 0;
	this.ctrlKey = false;
	this.shiftKey = false;
	this.altKey = false;
	this.metaKey = false;
	this.button = 0;
	this.buttons = 0;
	this.relatedTarget = null;
	this.region = null;
};

$__jsx_extend([MouseEventInit], UIEventInit);
function WheelEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.view = null;
	this.detail = 0;
	this.screenX = 0;
	this.screenY = 0;
	this.clientX = 0;
	this.clientY = 0;
	this.ctrlKey = false;
	this.shiftKey = false;
	this.altKey = false;
	this.metaKey = false;
	this.button = 0;
	this.buttons = 0;
	this.relatedTarget = null;
	this.deltaX = 0;
	this.deltaY = 0;
	this.deltaZ = 0;
	this.deltaMode = 0;
};

$__jsx_extend([WheelEventInit], Object);
function KeyboardEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.view = null;
	this.detail = 0;
	this.char = "";
	this.key = "";
	this.location = 0;
	this.ctrlKey = false;
	this.shiftKey = false;
	this.altKey = false;
	this.metaKey = false;
	this.repeat = false;
	this.locale = "";
	this.charCode = 0;
	this.keyCode = 0;
	this.which = 0;
};

$__jsx_extend([KeyboardEventInit], Object);
function CompositionEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.view = null;
	this.detail = 0;
	this.data = null;
	this.locale = "";
};

$__jsx_extend([CompositionEventInit], Object);
function ProgressEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.lengthComputable = false;
	this.loaded = 0;
	this.total = 0;
};

$__jsx_extend([ProgressEventInit], EventInit);
function XMLHttpRequestOptions() {
	this.anon = false;
};

$__jsx_extend([XMLHttpRequestOptions], Object);
function ScrollOptions() {
	this.x = 0;
	this.y = 0;
	this.behavior = "";
};

$__jsx_extend([ScrollOptions], Object);
function TrackEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.track = null;
};

$__jsx_extend([TrackEventInit], EventInit);
function PopStateEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.state = null;
};

$__jsx_extend([PopStateEventInit], EventInit);
function HashChangeEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.oldURL = "";
	this.newURL = "";
};

$__jsx_extend([HashChangeEventInit], EventInit);
function PageTransitionEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.persisted = false;
};

$__jsx_extend([PageTransitionEventInit], EventInit);
function ErrorEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.message = "";
	this.filename = "";
	this.lineno = 0;
	this.column = 0;
};

$__jsx_extend([ErrorEventInit], EventInit);
function DragEventInit() {
	MouseEventInit.call(this);
	this.dataTransfer = null;
};

$__jsx_extend([DragEventInit], MouseEventInit);
function CloseEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.wasClean = false;
	this.code = 0;
	this.reason = "";
};

$__jsx_extend([CloseEventInit], EventInit);
function StorageEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.key = null;
	this.oldValue = null;
	this.newValue = null;
	this.url = "";
	this.storageArea = null;
};

$__jsx_extend([StorageEventInit], EventInit);
function MessageEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.data = null;
	this.origin = "";
	this.lastEventId = "";
	this.source = null;
	this.ports = null;
};

$__jsx_extend([MessageEventInit], EventInit);
function EventSourceInit() {
	this.withCredentials = false;
};

$__jsx_extend([EventSourceInit], Object);
function IDBObjectStoreParameters() {
	this.keyPath = null;
	this.autoIncrement = false;
};

$__jsx_extend([IDBObjectStoreParameters], Object);
function IDBIndexParameters() {
	this.unique = false;
	this.multiEntry = false;
};

$__jsx_extend([IDBIndexParameters], Object);
function IDBVersionChangeEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.oldVersion = 0;
	this.newVersion = null;
};

$__jsx_extend([IDBVersionChangeEventInit], EventInit);
function NotificationOptions() {
	this.titleDir = "";
	this.body = "";
	this.bodyDir = "";
	this.tag = "";
	this.iconUrl = "";
};

$__jsx_extend([NotificationOptions], Object);
function RTCSessionDescriptionInit() {
	this.type = "";
	this.sdp = "";
};

$__jsx_extend([RTCSessionDescriptionInit], Object);
function RTCIceCandidateInit() {
	this.candidate = "";
	this.sdpMid = "";
	this.sdpMLineIndex = 0;
};

$__jsx_extend([RTCIceCandidateInit], Object);
function RTCIceServer() {
	this.url = "";
	this.credential = null;
};

$__jsx_extend([RTCIceServer], Object);
function RTCConfiguration() {
	this.iceServers = null;
};

$__jsx_extend([RTCConfiguration], Object);
function DataChannelInit() {
	this.reliable = false;
};

$__jsx_extend([DataChannelInit], Object);
function RTCPeerConnectionIceEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.candidate = null;
};

$__jsx_extend([RTCPeerConnectionIceEventInit], EventInit);
function MediaStreamEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.stream = null;
};

$__jsx_extend([MediaStreamEventInit], EventInit);
function DataChannelEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.channel = null;
};

$__jsx_extend([DataChannelEventInit], EventInit);
function MediaStreamConstraints() {
	this.video = null;
	this.audio = null;
};

$__jsx_extend([MediaStreamConstraints], Object);
function MediaTrackConstraints() {
	this.mandatory = null;
	this.optional = null;
};

$__jsx_extend([MediaTrackConstraints], Object);
function HitRegionOptions() {
	this.path = null;
	this.id = "";
	this.parentID = null;
	this.cursor = "";
	this.control = null;
	this.label = null;
	this.role = null;
};

$__jsx_extend([HitRegionOptions], Object);
function WebGLContextAttributes() {
	this.alpha = false;
	this.depth = false;
	this.stencil = false;
	this.antialias = false;
	this.premultipliedAlpha = false;
	this.preserveDrawingBuffer = false;
};

$__jsx_extend([WebGLContextAttributes], Object);
function WebGLContextEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.statusMessage = "";
};

$__jsx_extend([WebGLContextEventInit], EventInit);
function DeviceOrientationEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.alpha = null;
	this.beta = null;
	this.gamma = null;
	this.absolute = false;
};

$__jsx_extend([DeviceOrientationEventInit], EventInit);
function DeviceMotionEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.acceleration = null;
	this.accelerationIncludingGravity = null;
	this.rotationRate = null;
	this.interval = null;
};

$__jsx_extend([DeviceMotionEventInit], EventInit);
function Benchmark(name, run) {
	var $this = this;
	this.name = name;
	this.run = run;
	this.Setup = (function () {
	});
	this.TearDown = (function () {
	});
};

function Benchmark$0(name, run, setup, tearDown) {
	this.name = name;
	this.run = run;
	this.Setup = setup;
	this.TearDown = tearDown;
};

$__jsx_extend([Benchmark, Benchmark$0], Object);
function BenchmarkResult(benchmark, time) {
	this.benchmark = benchmark;
	this.time = time;
};

$__jsx_extend([BenchmarkResult], Object);
function BenchmarkResult$valueOf$LBenchmarkResult$($this) {
	return $this.time;
};

BenchmarkResult.valueOf$LBenchmarkResult$ = BenchmarkResult$valueOf$LBenchmarkResult$;

function BenchmarkData(runs, elapsed) {
	this.runs = runs;
	this.elapsed = elapsed;
};

$__jsx_extend([BenchmarkData], Object);
function BenchmarkRunner() {
};

$__jsx_extend([BenchmarkRunner], Object);
BenchmarkRunner.prototype.NotifyStart$S = function (name) {
};


function BenchmarkRunner$NotifyStart$LBenchmarkRunner$S($this, name) {
};

BenchmarkRunner.NotifyStart$LBenchmarkRunner$S = BenchmarkRunner$NotifyStart$LBenchmarkRunner$S;

BenchmarkRunner.prototype.NotifyStep$S = function (name) {
};


BenchmarkRunner.prototype.NotifyResult$SS = function (name, result) {
};


BenchmarkRunner.prototype.NotifyError$SLError$ = function (name, error) {
};


BenchmarkRunner.prototype.NotifyScore$S = function (score) {
};


function MyBenchmarkRunner() {
	var result$0;
	var suites$0;
	var i$0;
	var suites$0$len$0;
	this.success = true;
	this.completed = 0;
	result$0 = 0;
	suites$0 = BenchmarkSuite.suites;
	for ((i$0 = 0, suites$0$len$0 = suites$0.length); i$0 < suites$0$len$0; i$0++) {
		result$0 += suites$0[i$0].benchmarks.length;
	}
	this.benchmarks = (result$0 | 0);
};

$__jsx_extend([MyBenchmarkRunner], BenchmarkRunner);
MyBenchmarkRunner.prototype.NotifyStep$S = function (name) {
	var status;
	var percentage;
	status = dom.document.getElementById("status");
	percentage = ++ this.completed / this.benchmarks * 100;
	status.innerHTML = "Running: " + (Math.round(percentage) + "") + "% completed.";
};


MyBenchmarkRunner.prototype.NotifyResult$SS = function (name, result) {
	dom.document.getElementById("results").innerHTML += name + ': ' + result + "<br />";
};


MyBenchmarkRunner.prototype.NotifyError$SLError$ = function (name, error) {
	var result$0;
	result$0 = "<strong>" + error.toString() + "</strong>";
	dom.document.getElementById("results").innerHTML += name + ': ' + result$0 + "<br />";
	this.success = false;
};


MyBenchmarkRunner.prototype.NotifyScore$S = function (score) {
	if (this.success) {
		dom.document.getElementById("status").innerHTML = 'Score: ' + score;
	}
};


function BenchmarkUtil() {
};

$__jsx_extend([BenchmarkUtil], Object);
function BenchmarkUtil$random$() {
	BenchmarkUtil.seed = BenchmarkUtil.seed + 0x7ed55d16 + (BenchmarkUtil.seed << 12) & 0xffffffff;
	BenchmarkUtil.seed = (BenchmarkUtil.seed ^ 0xc761c23c ^ BenchmarkUtil.seed >>> 19) & 0xffffffff;
	BenchmarkUtil.seed = BenchmarkUtil.seed + 0x165667b1 + (BenchmarkUtil.seed << 5) & 0xffffffff;
	BenchmarkUtil.seed = (BenchmarkUtil.seed + 0xd3a2646c ^ BenchmarkUtil.seed << 9) & 0xffffffff;
	BenchmarkUtil.seed = BenchmarkUtil.seed + 0xfd7046c5 + (BenchmarkUtil.seed << 3) & 0xffffffff;
	BenchmarkUtil.seed = (BenchmarkUtil.seed ^ 0xb55a4f09 ^ BenchmarkUtil.seed >>> 16) & 0xffffffff;
	return (BenchmarkUtil.seed & 0xfffffff) / 0x10000000;
};

BenchmarkUtil.random$ = BenchmarkUtil$random$;

function BenchmarkSuite(name, reference, benchmarks) {
	this.results = [  ];
	this.runner = null;
	this.name = name;
	this.reference = reference;
	this.benchmarks = benchmarks;
	BenchmarkSuite.suites.push(this);
};

$__jsx_extend([BenchmarkSuite], Object);
function BenchmarkSuite$RunSuites$LBenchmarkRunner$(runner) {
	var continuation;
	var suites;
	var length;
	var index;
	var RunStep;
	continuation = null;
	suites = BenchmarkSuite.suites;
	length = suites.length;
	BenchmarkSuite.scores = [  ];
	index = 0;
	function RunStep() {
		var suite;
		var score;
		var formatted;
		var value$0;
		while (continuation || index < length) {
			if (continuation) {
				continuation = continuation();
			} else {
				suite = suites[index++];
				continuation = BenchmarkSuite$RunStep$LBenchmarkSuite$LBenchmarkRunner$(suite, runner);
			}
			if (continuation) {
				js$0.global.setTimeout(RunStep, 25);
				return;
			}
		}
		score = BenchmarkSuite$GeometricMean$AN(BenchmarkSuite.scores);
		value$0 = 100 * score;
		formatted = (value$0 > 100 ? value$0.toFixed(0) : value$0.toPrecision(3));
		runner.NotifyScore$S(formatted);
	}
	RunStep();
};

BenchmarkSuite.RunSuites$LBenchmarkRunner$ = BenchmarkSuite$RunSuites$LBenchmarkRunner$;

function BenchmarkSuite$CountBenchmarks$() {
	var result;
	var suites;
	var i;
	var suites$len$0;
	result = 0;
	suites = BenchmarkSuite.suites;
	for ((i = 0, suites$len$0 = suites.length); i < suites$len$0; i++) {
		result += suites[i].benchmarks.length;
	}
	return (result | 0);
};

BenchmarkSuite.CountBenchmarks$ = BenchmarkSuite$CountBenchmarks$;

function BenchmarkSuite$GeometricMean$AN(numbers) {
	var loga;
	var i;
	var numbers$len$0;
	loga = 0;
	for ((i = 0, numbers$len$0 = numbers.length); i < numbers$len$0; i++) {
		loga += Math.log(numbers[i].valueOf());
	}
	return Math.pow(2.718281828459045, loga / numbers.length);
};

BenchmarkSuite.GeometricMean$AN = BenchmarkSuite$GeometricMean$AN;

function BenchmarkSuite$GeometricMean$ALBenchmarkResult$(numbers) {
	var loga;
	var i;
	var this$0;
	var numbers$len$0;
	loga = 0;
	for ((i = 0, numbers$len$0 = numbers.length); i < numbers$len$0; i++) {
		loga += Math.log((this$0 = numbers[i], this$0.time));
	}
	return Math.pow(2.718281828459045, loga / numbers.length);
};

BenchmarkSuite.GeometricMean$ALBenchmarkResult$ = BenchmarkSuite$GeometricMean$ALBenchmarkResult$;

function BenchmarkSuite$FormatScore$N(value) {
	return (value > 100 ? value.toFixed(0) : value.toPrecision(3));
};

BenchmarkSuite.FormatScore$N = BenchmarkSuite$FormatScore$N;

BenchmarkSuite.prototype.NotifyStep$LBenchmarkResult$ = function (result) {
	this.results.push(result);
	this.runner.NotifyStep$S(result.benchmark.name);
};


function BenchmarkSuite$NotifyStep$LBenchmarkSuite$LBenchmarkResult$($this, result) {
	$this.results.push(result);
	$this.runner.NotifyStep$S(result.benchmark.name);
};

BenchmarkSuite.NotifyStep$LBenchmarkSuite$LBenchmarkResult$ = BenchmarkSuite$NotifyStep$LBenchmarkSuite$LBenchmarkResult$;

BenchmarkSuite.prototype.NotifyResult$ = function () {
	var mean;
	var score;
	var formatted;
	var value$0;
	mean = BenchmarkSuite$GeometricMean$ALBenchmarkResult$(this.results);
	score = this.reference / mean;
	BenchmarkSuite.scores.push(score);
	value$0 = 100 * score;
	formatted = (value$0 > 100 ? value$0.toFixed(0) : value$0.toPrecision(3));
	this.runner.NotifyResult$SS(this.name, formatted);
};


function BenchmarkSuite$NotifyResult$LBenchmarkSuite$($this) {
	var mean;
	var score;
	var formatted;
	var value$0;
	mean = BenchmarkSuite$GeometricMean$ALBenchmarkResult$($this.results);
	score = $this.reference / mean;
	BenchmarkSuite.scores.push(score);
	value$0 = 100 * score;
	formatted = (value$0 > 100 ? value$0.toFixed(0) : value$0.toPrecision(3));
	$this.runner.NotifyResult$SS($this.name, formatted);
};

BenchmarkSuite.NotifyResult$LBenchmarkSuite$ = BenchmarkSuite$NotifyResult$LBenchmarkSuite$;

BenchmarkSuite.prototype.NotifyError$LError$ = function (error) {
	this.runner.NotifyError$SLError$(this.name, error);
	this.runner.NotifyStep$S(this.name);
};


function BenchmarkSuite$NotifyError$LBenchmarkSuite$LError$($this, error) {
	$this.runner.NotifyError$SLError$($this.name, error);
	$this.runner.NotifyStep$S($this.name);
};

BenchmarkSuite.NotifyError$LBenchmarkSuite$LError$ = BenchmarkSuite$NotifyError$LBenchmarkSuite$LError$;

BenchmarkSuite.prototype.RunSingleBenchmark$LBenchmark$LBenchmarkData$ = function (benchmark, data) {
	var $this = this;
	var Measure;
	var usec;
	var result$0;
	function Measure(data) {
		var elapsed;
		var start;
		var n;
		elapsed = 0;
		start = new Date();
		for (n = 0; elapsed < 1000; n++) {
			benchmark.run();
			elapsed = new Date().valueOf() - start.valueOf();
		}
		if (data != null) {
			data.runs += n;
			data.elapsed += elapsed;
		}
	}
	if (data == null) {
		Measure(null);
		return ({runs: 0, elapsed: 0});
	} else {
		Measure(data);
		if (data.runs < 32) {
			return data;
		}
		usec = data.elapsed * 1000 / data.runs;
		result$0 = ({benchmark: benchmark, time: usec});
		this.results.push(result$0);
		this.runner.NotifyStep$S(result$0.benchmark.name);
		return null;
	}
};


function BenchmarkSuite$RunSingleBenchmark$LBenchmarkSuite$LBenchmark$LBenchmarkData$($this, benchmark, data) {
	var Measure;
	var usec;
	var result$0;
	function Measure(data) {
		var elapsed;
		var start;
		var n;
		elapsed = 0;
		start = new Date();
		for (n = 0; elapsed < 1000; n++) {
			benchmark.run();
			elapsed = new Date().valueOf() - start.valueOf();
		}
		if (data != null) {
			data.runs += n;
			data.elapsed += elapsed;
		}
	}
	if (data == null) {
		Measure(null);
		return ({runs: 0, elapsed: 0});
	} else {
		Measure(data);
		if (data.runs < 32) {
			return data;
		}
		usec = data.elapsed * 1000 / data.runs;
		result$0 = ({benchmark: benchmark, time: usec});
		$this.results.push(result$0);
		$this.runner.NotifyStep$S(result$0.benchmark.name);
		return null;
	}
};

BenchmarkSuite.RunSingleBenchmark$LBenchmarkSuite$LBenchmark$LBenchmarkData$ = BenchmarkSuite$RunSingleBenchmark$LBenchmarkSuite$LBenchmark$LBenchmarkData$;

BenchmarkSuite.prototype.RunStep$LBenchmarkRunner$ = function (runner) {
	var $this = this;
	var length;
	var index;
	var suite;
	var data;
	var RunNextSetup;
	var RunNextBenchmark;
	var RunNextTearDown;
	this.results = [  ];
	this.runner = runner;
	length = this.benchmarks.length;
	index = 0;
	suite = this;
	data = null;
	RunNextSetup = (function () {
		if (index < length) {
			try {
				suite.benchmarks[index].Setup();
			} catch ($__jsx_catch_0) {
				if ($__jsx_catch_0 instanceof Error) {
					suite.runner.NotifyError$SLError$(suite.name, $__jsx_catch_0);
					suite.runner.NotifyStep$S(suite.name);
					return null;
				} else {
					throw $__jsx_catch_0;
				}
			}
			return RunNextBenchmark;
		}
		BenchmarkSuite$NotifyResult$LBenchmarkSuite$(suite);
		return null;
	});
	RunNextBenchmark = (function () {
		try {
			data = BenchmarkSuite$RunSingleBenchmark$LBenchmarkSuite$LBenchmark$LBenchmarkData$(suite, suite.benchmarks[index], data);
		} catch ($__jsx_catch_0) {
			if ($__jsx_catch_0 instanceof Error) {
				suite.runner.NotifyError$SLError$(suite.name, $__jsx_catch_0);
				suite.runner.NotifyStep$S(suite.name);
				return null;
			} else {
				throw $__jsx_catch_0;
			}
		}
		return (data == null ? RunNextTearDown : RunNextBenchmark());
	});
	RunNextTearDown = (function () {
		try {
			suite.benchmarks[index++].TearDown();
		} catch ($__jsx_catch_0) {
			if ($__jsx_catch_0 instanceof Error) {
				suite.runner.NotifyError$SLError$(suite.name, $__jsx_catch_0);
				suite.runner.NotifyStep$S(suite.name);
				return null;
			} else {
				throw $__jsx_catch_0;
			}
		}
		return RunNextSetup;
	});
	return RunNextSetup();
};


function BenchmarkSuite$RunStep$LBenchmarkSuite$LBenchmarkRunner$($this, runner) {
	var length;
	var index;
	var suite;
	var data;
	var RunNextSetup;
	var RunNextBenchmark;
	var RunNextTearDown;
	$this.results = [  ];
	$this.runner = runner;
	length = $this.benchmarks.length;
	index = 0;
	suite = $this;
	data = null;
	RunNextSetup = (function () {
		if (index < length) {
			try {
				suite.benchmarks[index].Setup();
			} catch ($__jsx_catch_0) {
				if ($__jsx_catch_0 instanceof Error) {
					suite.runner.NotifyError$SLError$(suite.name, $__jsx_catch_0);
					suite.runner.NotifyStep$S(suite.name);
					return null;
				} else {
					throw $__jsx_catch_0;
				}
			}
			return RunNextBenchmark;
		}
		BenchmarkSuite$NotifyResult$LBenchmarkSuite$(suite);
		return null;
	});
	RunNextBenchmark = (function () {
		try {
			data = BenchmarkSuite$RunSingleBenchmark$LBenchmarkSuite$LBenchmark$LBenchmarkData$(suite, suite.benchmarks[index], data);
		} catch ($__jsx_catch_0) {
			if ($__jsx_catch_0 instanceof Error) {
				suite.runner.NotifyError$SLError$(suite.name, $__jsx_catch_0);
				suite.runner.NotifyStep$S(suite.name);
				return null;
			} else {
				throw $__jsx_catch_0;
			}
		}
		return (data == null ? RunNextTearDown : RunNextBenchmark());
	});
	RunNextTearDown = (function () {
		try {
			suite.benchmarks[index++].TearDown();
		} catch ($__jsx_catch_0) {
			if ($__jsx_catch_0 instanceof Error) {
				suite.runner.NotifyError$SLError$(suite.name, $__jsx_catch_0);
				suite.runner.NotifyStep$S(suite.name);
				return null;
			} else {
				throw $__jsx_catch_0;
			}
		}
		return RunNextSetup;
	});
	return RunNextSetup();
};

BenchmarkSuite.RunStep$LBenchmarkSuite$LBenchmarkRunner$ = BenchmarkSuite$RunStep$LBenchmarkSuite$LBenchmarkRunner$;

function Richards() {
	var $this = this;
	new BenchmarkSuite('Richards', 35302, [ new Benchmark("Richards", (function () {
		Richards$runRichards$LRichards$($this);
	})) ]);
};

$__jsx_extend([Richards], Object);
Richards.prototype.runRichards$ = function () {
	var scheduler;
	var queue;
	var msg;
	scheduler = ({queueCount: 0, holdCount: 0, blocks: new Array(6), list: null, currentTcb: null, currentId: null});
	Scheduler$addIdleTask$LScheduler$IILPacket$I(scheduler, 0, 0, null, 1000);
	queue = new Packet(null, 1, 1);
	queue = new Packet(queue, 1, 1);
	Scheduler$addWorkerTask$LScheduler$IILPacket$(scheduler, 1, 1000, queue);
	queue = new Packet(null, 4, 0);
	queue = new Packet(queue, 4, 0);
	queue = new Packet(queue, 4, 0);
	Scheduler$addHandlerTask$LScheduler$IILPacket$(scheduler, 2, 2000, queue);
	queue = new Packet(null, 5, 0);
	queue = new Packet(queue, 5, 0);
	queue = new Packet(queue, 5, 0);
	Scheduler$addHandlerTask$LScheduler$IILPacket$(scheduler, 3, 3000, queue);
	Scheduler$addDeviceTask$LScheduler$IILPacket$(scheduler, 4, 4000, null);
	Scheduler$addDeviceTask$LScheduler$IILPacket$(scheduler, 5, 5000, null);
	Scheduler$schedule$LScheduler$(scheduler);
	if (scheduler.queueCount !== 2322 || scheduler.holdCount !== 928) {
		msg = "Error during execution: queueCount = " + (scheduler.queueCount + "") + ", holdCount = " + (scheduler.holdCount + "") + ".";
		throw new Error(msg);
	}
};


function Richards$runRichards$LRichards$($this) {
	var scheduler;
	var queue;
	var msg;
	scheduler = ({queueCount: 0, holdCount: 0, blocks: new Array(6), list: null, currentTcb: null, currentId: null});
	Scheduler$addIdleTask$LScheduler$IILPacket$I(scheduler, 0, 0, null, 1000);
	queue = new Packet(null, 1, 1);
	queue = new Packet(queue, 1, 1);
	Scheduler$addWorkerTask$LScheduler$IILPacket$(scheduler, 1, 1000, queue);
	queue = new Packet(null, 4, 0);
	queue = new Packet(queue, 4, 0);
	queue = new Packet(queue, 4, 0);
	Scheduler$addHandlerTask$LScheduler$IILPacket$(scheduler, 2, 2000, queue);
	queue = new Packet(null, 5, 0);
	queue = new Packet(queue, 5, 0);
	queue = new Packet(queue, 5, 0);
	Scheduler$addHandlerTask$LScheduler$IILPacket$(scheduler, 3, 3000, queue);
	Scheduler$addDeviceTask$LScheduler$IILPacket$(scheduler, 4, 4000, null);
	Scheduler$addDeviceTask$LScheduler$IILPacket$(scheduler, 5, 5000, null);
	Scheduler$schedule$LScheduler$(scheduler);
	if (scheduler.queueCount !== 2322 || scheduler.holdCount !== 928) {
		msg = "Error during execution: queueCount = " + (scheduler.queueCount + "") + ", holdCount = " + (scheduler.holdCount + "") + ".";
		throw new Error(msg);
	}
};

Richards.runRichards$LRichards$ = Richards$runRichards$LRichards$;

function Scheduler() {
	this.queueCount = 0;
	this.holdCount = 0;
	this.blocks = new Array(6);
	this.list = null;
	this.currentTcb = null;
	this.currentId = null;
};

$__jsx_extend([Scheduler], Object);
function Scheduler$addIdleTask$LScheduler$IILPacket$I($this, id, priority, queue, count) {
	Scheduler$addRunningTask$LScheduler$IILPacket$LTask$($this, id, priority, queue, new IdleTask($this, 1, count));
};

Scheduler.addIdleTask$LScheduler$IILPacket$I = Scheduler$addIdleTask$LScheduler$IILPacket$I;

function Scheduler$addWorkerTask$LScheduler$IILPacket$($this, id, priority, queue) {
	var task$0;
	var currentTcb$0;
	task$0 = new WorkerTask($this, 2, 0);
	currentTcb$0 = $this.currentTcb = new TaskControlBlock($this.list, id, priority, queue, task$0);
	$this.list = currentTcb$0;
	$this.blocks[id] = $this.currentTcb;
};

Scheduler.addWorkerTask$LScheduler$IILPacket$ = Scheduler$addWorkerTask$LScheduler$IILPacket$;

function Scheduler$addHandlerTask$LScheduler$IILPacket$($this, id, priority, queue) {
	var task$0;
	var currentTcb$0;
	task$0 = new HandlerTask($this);
	currentTcb$0 = $this.currentTcb = new TaskControlBlock($this.list, id, priority, queue, task$0);
	$this.list = currentTcb$0;
	$this.blocks[id] = $this.currentTcb;
};

Scheduler.addHandlerTask$LScheduler$IILPacket$ = Scheduler$addHandlerTask$LScheduler$IILPacket$;

function Scheduler$addDeviceTask$LScheduler$IILPacket$($this, id, priority, queue) {
	var task$0;
	var currentTcb$0;
	task$0 = new DeviceTask($this);
	currentTcb$0 = $this.currentTcb = new TaskControlBlock($this.list, id, priority, queue, task$0);
	$this.list = currentTcb$0;
	$this.blocks[id] = $this.currentTcb;
};

Scheduler.addDeviceTask$LScheduler$IILPacket$ = Scheduler$addDeviceTask$LScheduler$IILPacket$;

function Scheduler$addRunningTask$LScheduler$IILPacket$LTask$($this, id, priority, queue, task) {
	var this$0;
	var currentTcb$0;
	currentTcb$0 = $this.currentTcb = new TaskControlBlock($this.list, id, priority, queue, task);
	$this.list = currentTcb$0;
	$this.blocks[id] = $this.currentTcb;
	this$0 = $this.currentTcb;
	this$0.state = 0;
};

Scheduler.addRunningTask$LScheduler$IILPacket$LTask$ = Scheduler$addRunningTask$LScheduler$IILPacket$LTask$;

function Scheduler$addTask$LScheduler$IILPacket$LTask$($this, id, priority, queue, task) {
	var currentTcb$0;
	currentTcb$0 = $this.currentTcb = new TaskControlBlock($this.list, id, priority, queue, task);
	$this.list = currentTcb$0;
	$this.blocks[id] = $this.currentTcb;
};

Scheduler.addTask$LScheduler$IILPacket$LTask$ = Scheduler$addTask$LScheduler$IILPacket$LTask$;

function Scheduler$schedule$LScheduler$($this) {
	var this$0;
	var currentTcb$0;
	var state$0;
	$this.currentTcb = $this.list;
	while ($this.currentTcb != null) {
		this$0 = $this.currentTcb;
		if (((state$0 = this$0.state) & 4) !== 0 || state$0 === 2) {
			$this.currentTcb = $this.currentTcb.link;
		} else {
			$this.currentId = (currentTcb$0 = $this.currentTcb).id;
			$this.currentTcb = TaskControlBlock$run$LTaskControlBlock$(currentTcb$0);
		}
	}
};

Scheduler.schedule$LScheduler$ = Scheduler$schedule$LScheduler$;

function Scheduler$release$LScheduler$I($this, id) {
	var tcb;
	tcb = $this.blocks[id];
	if (tcb == null) {
		return tcb;
	}
	tcb.state = tcb.state & -5;
	return (tcb.priority > $this.currentTcb.priority ? tcb : $this.currentTcb);
};

Scheduler.release$LScheduler$I = Scheduler$release$LScheduler$I;

function Scheduler$holdCurrent$LScheduler$($this) {
	var this$0;
	var currentTcb$0;
	$this.holdCount++;
	this$0 = currentTcb$0 = $this.currentTcb;
	this$0.state = this$0.state | 4;
	return currentTcb$0.link;
};

Scheduler.holdCurrent$LScheduler$ = Scheduler$holdCurrent$LScheduler$;

function Scheduler$suspendCurrent$LScheduler$($this) {
	var this$0;
	var currentTcb$0;
	this$0 = currentTcb$0 = $this.currentTcb;
	this$0.state = this$0.state | 2;
	return currentTcb$0;
};

Scheduler.suspendCurrent$LScheduler$ = Scheduler$suspendCurrent$LScheduler$;

function Scheduler$queue$LScheduler$LPacket$($this, packet) {
	var t;
	t = $this.blocks[packet.id];
	if (t == null) {
		return t;
	}
	$this.queueCount++;
	packet.link = null;
	packet.id = $this.currentId;
	return TaskControlBlock$checkPriorityAdd$LTaskControlBlock$LTaskControlBlock$LPacket$(t, $this.currentTcb, packet);
};

Scheduler.queue$LScheduler$LPacket$ = Scheduler$queue$LScheduler$LPacket$;

function TaskControlBlock(link, id, priority, queue, task) {
	this.state = 0;
	this.link = link;
	this.id = id;
	this.priority = priority;
	this.queue = queue;
	this.task = task;
	if (queue == null) {
		this.state = 2;
	} else {
		this.state = 3;
	}
};

$__jsx_extend([TaskControlBlock], Object);
TaskControlBlock.prototype.setRunning$ = function () {
	this.state = 0;
};


function TaskControlBlock$setRunning$LTaskControlBlock$($this) {
	$this.state = 0;
};

TaskControlBlock.setRunning$LTaskControlBlock$ = TaskControlBlock$setRunning$LTaskControlBlock$;

TaskControlBlock.prototype.markAsNotHeld$ = function () {
	this.state = this.state & -5;
};


function TaskControlBlock$markAsNotHeld$LTaskControlBlock$($this) {
	$this.state = $this.state & -5;
};

TaskControlBlock.markAsNotHeld$LTaskControlBlock$ = TaskControlBlock$markAsNotHeld$LTaskControlBlock$;

TaskControlBlock.prototype.markAsHeld$ = function () {
	this.state = this.state | 4;
};


function TaskControlBlock$markAsHeld$LTaskControlBlock$($this) {
	$this.state = $this.state | 4;
};

TaskControlBlock.markAsHeld$LTaskControlBlock$ = TaskControlBlock$markAsHeld$LTaskControlBlock$;

TaskControlBlock.prototype.isHeldOrSuspended$ = function () {
	var state$0;
	return ((state$0 = this.state) & 4) !== 0 || state$0 === 2;
};


function TaskControlBlock$isHeldOrSuspended$LTaskControlBlock$($this) {
	var state$0;
	return ((state$0 = $this.state) & 4) !== 0 || state$0 === 2;
};

TaskControlBlock.isHeldOrSuspended$LTaskControlBlock$ = TaskControlBlock$isHeldOrSuspended$LTaskControlBlock$;

TaskControlBlock.prototype.markAsSuspended$ = function () {
	this.state = this.state | 2;
};


function TaskControlBlock$markAsSuspended$LTaskControlBlock$($this) {
	$this.state = $this.state | 2;
};

TaskControlBlock.markAsSuspended$LTaskControlBlock$ = TaskControlBlock$markAsSuspended$LTaskControlBlock$;

TaskControlBlock.prototype.markAsRunnable$ = function () {
	this.state = this.state | 1;
};


function TaskControlBlock$markAsRunnable$LTaskControlBlock$($this) {
	$this.state = $this.state | 1;
};

TaskControlBlock.markAsRunnable$LTaskControlBlock$ = TaskControlBlock$markAsRunnable$LTaskControlBlock$;

TaskControlBlock.prototype.run$ = function () {
	var packet;
	var queue$0;
	if (this.state === 3) {
		packet = this.queue;
		queue$0 = this.queue = packet.link;
		if (queue$0 == null) {
			this.state = 0;
		} else {
			this.state = 1;
		}
	} else {
		packet = null;
	}
	return this.task.run$LPacket$(packet);
};


function TaskControlBlock$run$LTaskControlBlock$($this) {
	var packet;
	var queue$0;
	if ($this.state === 3) {
		packet = $this.queue;
		queue$0 = $this.queue = packet.link;
		if (queue$0 == null) {
			$this.state = 0;
		} else {
			$this.state = 1;
		}
	} else {
		packet = null;
	}
	return $this.task.run$LPacket$(packet);
};

TaskControlBlock.run$LTaskControlBlock$ = TaskControlBlock$run$LTaskControlBlock$;

TaskControlBlock.prototype.checkPriorityAdd$LTaskControlBlock$LPacket$ = function (task, packet) {
	if (this.queue == null) {
		this.queue = packet;
		this.state = this.state | 1;
		if (this.priority > task.priority) {
			return this;
		}
	} else {
		this.queue = Packet$addTo$LPacket$LPacket$(packet, this.queue);
	}
	return task;
};


function TaskControlBlock$checkPriorityAdd$LTaskControlBlock$LTaskControlBlock$LPacket$($this, task, packet) {
	if ($this.queue == null) {
		$this.queue = packet;
		$this.state = $this.state | 1;
		if ($this.priority > task.priority) {
			return $this;
		}
	} else {
		$this.queue = Packet$addTo$LPacket$LPacket$(packet, $this.queue);
	}
	return task;
};

TaskControlBlock.checkPriorityAdd$LTaskControlBlock$LTaskControlBlock$LPacket$ = TaskControlBlock$checkPriorityAdd$LTaskControlBlock$LTaskControlBlock$LPacket$;

TaskControlBlock.prototype.toString = function () {
	return "tcb { " + this.task.toString() + "@" + this.state.toString() + " }";
};


function Task(scheduler) {
	this.scheduler = scheduler;
};

$__jsx_extend([Task], Object);
function IdleTask(scheduler, v1, count) {
	this.scheduler = scheduler;
	this.v1 = v1;
	this.count = count;
};

$__jsx_extend([IdleTask], Task);
IdleTask.prototype.run$LPacket$ = function (packet) {
	var this$0;
	var this$0$0;
	var currentTcb$0;
	this.count--;
	if (this.count === 0) {
		this$0 = this.scheduler;
		this$0.holdCount++;
		this$0$0 = currentTcb$0 = this$0.currentTcb;
		this$0$0.state = this$0$0.state | 4;
		return currentTcb$0.link;
	}
	if ((this.v1 & 1) === 0) {
		this.v1 = this.v1 >> 1;
		return Scheduler$release$LScheduler$I(this.scheduler, 4);
	} else {
		this.v1 = this.v1 >> 1 ^ 0xD008;
		return Scheduler$release$LScheduler$I(this.scheduler, 5);
	}
};


IdleTask.prototype.toString = function () {
	return "IdleTask";
};


function DeviceTask(scheduler) {
	this.scheduler = scheduler;
	this.v1 = null;
};

$__jsx_extend([DeviceTask], Task);
DeviceTask.prototype.run$LPacket$ = function (packet) {
	var v;
	var this$0;
	var this$0$0;
	var this$2;
	var this$0$2;
	var currentTcb$0;
	var currentTcb$1;
	if (packet == null) {
		if (this.v1 == null) {
			this$0 = this.scheduler;
			this$0$0 = currentTcb$0 = this$0.currentTcb;
			this$0$0.state = this$0$0.state | 2;
			return currentTcb$0;
		}
		v = this.v1;
		this.v1 = null;
		return Scheduler$queue$LScheduler$LPacket$(this.scheduler, v);
	} else {
		this.v1 = packet;
		this$2 = this.scheduler;
		this$2.holdCount++;
		this$0$2 = currentTcb$1 = this$2.currentTcb;
		this$0$2.state = this$0$2.state | 4;
		return currentTcb$1.link;
	}
};


DeviceTask.prototype.toString = function () {
	return "DeviceTask";
};


function WorkerTask(scheduler, v1, v2) {
	this.scheduler = scheduler;
	this.v1 = v1;
	this.v2 = v2;
};

$__jsx_extend([WorkerTask], Task);
WorkerTask.prototype.run$LPacket$ = function (packet) {
	var i;
	var this$0;
	var this$0$0;
	var currentTcb$0;
	if (packet == null) {
		this$0 = this.scheduler;
		this$0$0 = currentTcb$0 = this$0.currentTcb;
		this$0$0.state = this$0$0.state | 2;
		return currentTcb$0;
	} else {
		if (this.v1 === 2) {
			this.v1 = 3;
		} else {
			this.v1 = 2;
		}
		packet.id = this.v1;
		packet.a1 = 0;
		for (i = 0; i < 4; i++) {
			this.v2++;
			if (this.v2 > 26) {
				this.v2 = 1;
			}
			packet.a2[i] = this.v2;
		}
		return Scheduler$queue$LScheduler$LPacket$(this.scheduler, packet);
	}
};


WorkerTask.prototype.toString = function () {
	return "WorkerTask";
};


function HandlerTask(scheduler) {
	this.scheduler = scheduler;
	this.v1 = null;
	this.v2 = null;
};

$__jsx_extend([HandlerTask], Task);
HandlerTask.prototype.run$LPacket$ = function (packet) {
	var count;
	var v;
	var this$0;
	var this$0$0;
	var v2$0;
	var v1$0;
	var v1$1;
	var currentTcb$0;
	if (packet != null) {
		if (packet.kind === 1) {
			this.v1 = Packet$addTo$LPacket$LPacket$(packet, this.v1);
		} else {
			this.v2 = Packet$addTo$LPacket$LPacket$(packet, this.v2);
		}
	}
	if (this.v1 != null) {
		count = this.v1.a1;
		if (count < 4) {
			if (this.v2 != null) {
				v = v2$0 = this.v2;
				this.v2 = v2$0.link;
				v.a1 = (v1$0 = this.v1).a2[count];
				v1$0.a1 = (count + 1 | 0);
				return Scheduler$queue$LScheduler$LPacket$(this.scheduler, v);
			}
		} else {
			v = v1$1 = this.v1;
			this.v1 = v1$1.link;
			return Scheduler$queue$LScheduler$LPacket$(this.scheduler, v);
		}
	}
	this$0 = this.scheduler;
	this$0$0 = currentTcb$0 = this$0.currentTcb;
	this$0$0.state = this$0$0.state | 2;
	return currentTcb$0;
};


HandlerTask.prototype.toString = function () {
	return "HandlerTask";
};


function Packet(link, id, kind) {
	this.link = link;
	this.id = id;
	this.kind = kind;
	this.a1 = 0;
	this.a2 = new Array(4);
};

$__jsx_extend([Packet], Object);
Packet.prototype.addTo$LPacket$ = function (queue) {
	var peek;
	var next;
	this.link = null;
	if (queue == null) {
		return this;
	}
	next = queue;
	while ((peek = next.link) != null) {
		next = peek;
	}
	next.link = this;
	return queue;
};


function Packet$addTo$LPacket$LPacket$($this, queue) {
	var peek;
	var next;
	$this.link = null;
	if (queue == null) {
		return $this;
	}
	next = queue;
	while ((peek = next.link) != null) {
		next = peek;
	}
	next.link = $this;
	return queue;
};

Packet.addTo$LPacket$LPacket$ = Packet$addTo$LPacket$LPacket$;

Packet.prototype.toString = function () {
	return "Packet";
};


function DeltaBlue() {
	var $this = this;
	new BenchmarkSuite('DeltaBlue', 66118, [ new Benchmark('DeltaBlue', (function () {
		Main$chainTest$I(100);
		Main$projectionTest$I(100);
	})) ]);
};

$__jsx_extend([DeltaBlue], Object);
function Strength(strengthValue, name) {
	this.strengthValue = strengthValue;
	this.name = name;
};

$__jsx_extend([Strength], Object);
function Strength$stronger$LStrength$LStrength$(s1, s2) {
	return s1.strengthValue < s2.strengthValue;
};

Strength.stronger$LStrength$LStrength$ = Strength$stronger$LStrength$LStrength$;

function Strength$weaker$LStrength$LStrength$(s1, s2) {
	return s1.strengthValue > s2.strengthValue;
};

Strength.weaker$LStrength$LStrength$ = Strength$weaker$LStrength$LStrength$;

function Strength$weakestOf$LStrength$LStrength$(s1, s2) {
	return (s1.strengthValue > s2.strengthValue ? s1 : s2);
};

Strength.weakestOf$LStrength$LStrength$ = Strength$weakestOf$LStrength$LStrength$;

function Strength$strongest$LStrength$LStrength$(s1, s2) {
	return (s1.strengthValue < s2.strengthValue ? s1 : s2);
};

Strength.strongest$LStrength$LStrength$ = Strength$strongest$LStrength$LStrength$;

function Strength$nextWeaker$LStrength$($this) {
	switch ($this.strengthValue) {
	case 0:
		return Strength.WEAKEST;
	case 1:
		return Strength.WEAK_DEFAULT;
	case 2:
		return Strength.NORMAL;
	case 3:
		return Strength.STRONG_DEFAULT;
	case 4:
		return Strength.PREFERRED;
	case 5:
		return Strength.REQUIRED;
	default:
		return null;
	}
};

Strength.nextWeaker$LStrength$ = Strength$nextWeaker$LStrength$;

function Constraint(strength) {
	this.strength = strength;
};

$__jsx_extend([Constraint], Object);
Constraint.prototype.addConstraint$ = function () {
	var this$0;
	var mark$0;
	var overridden$0;
	this.addToGraph$();
	this$0 = Main.planner;
	mark$0 = ++ this$0.currentMark;
	overridden$0 = Constraint$satisfy$LConstraint$I(this, (mark$0 | 0));
	while (overridden$0 != null) {
		overridden$0 = Constraint$satisfy$LConstraint$I(overridden$0, (mark$0 | 0));
	}
};


function Constraint$addConstraint$LConstraint$($this) {
	var this$0;
	var mark$0;
	var overridden$0;
	$this.addToGraph$();
	this$0 = Main.planner;
	mark$0 = ++ this$0.currentMark;
	overridden$0 = Constraint$satisfy$LConstraint$I($this, (mark$0 | 0));
	while (overridden$0 != null) {
		overridden$0 = Constraint$satisfy$LConstraint$I(overridden$0, (mark$0 | 0));
	}
};

Constraint.addConstraint$LConstraint$ = Constraint$addConstraint$LConstraint$;

Constraint.prototype.satisfy$I = function (mark) {
	var out;
	var overridden;
	this.chooseMethod$I(mark);
	if (! this.isSatisfied$()) {
		if (this.strength == Strength.REQUIRED) {
		}
		return null;
	}
	this.markInputs$I(mark);
	out = this.output$();
	overridden = out.determinedBy;
	if (overridden != null) {
		overridden.markUnsatisfied$();
	}
	out.determinedBy = this;
	if (! Planner$addPropagate$LPlanner$LConstraint$I(Main.planner, this, mark)) {
	}
	out.mark = mark;
	return overridden;
};


function Constraint$satisfy$LConstraint$I($this, mark) {
	var out;
	var overridden;
	$this.chooseMethod$I(mark);
	if (! $this.isSatisfied$()) {
		if ($this.strength == Strength.REQUIRED) {
		}
		return null;
	}
	$this.markInputs$I(mark);
	out = $this.output$();
	overridden = out.determinedBy;
	if (overridden != null) {
		overridden.markUnsatisfied$();
	}
	out.determinedBy = $this;
	if (! Planner$addPropagate$LPlanner$LConstraint$I(Main.planner, $this, mark)) {
	}
	out.mark = mark;
	return overridden;
};

Constraint.satisfy$LConstraint$I = Constraint$satisfy$LConstraint$I;

Constraint.prototype.destroyConstraint$ = function () {
	if (this.isSatisfied$()) {
		Planner$incrementalRemove$LPlanner$LConstraint$(Main.planner, this);
	} else {
		this.removeFromGraph$();
	}
};


function Constraint$destroyConstraint$LConstraint$($this) {
	if ($this.isSatisfied$()) {
		Planner$incrementalRemove$LPlanner$LConstraint$(Main.planner, $this);
	} else {
		$this.removeFromGraph$();
	}
};

Constraint.destroyConstraint$LConstraint$ = Constraint$destroyConstraint$LConstraint$;

Constraint.prototype.isInput$ = function () {
	return false;
};


function UnaryConstraint(v, strength) {
	var this$0$0;
	var mark$0$0;
	var overridden$0$0;
	var this$0$0$0;
	var myOutput$0;
	this.strength = strength;
	myOutput$0 = this.myOutput = v;
	this.satisfied = false;
	this$0$0$0 = myOutput$0.constraints;
	this$0$0$0.elms.push(this);
	this.satisfied = false;
	this$0$0 = Main.planner;
	mark$0$0 = ++ this$0$0.currentMark;
	overridden$0$0 = Constraint$satisfy$LConstraint$I(this, (mark$0$0 | 0));
	while (overridden$0$0 != null) {
		overridden$0$0 = Constraint$satisfy$LConstraint$I(overridden$0$0, (mark$0$0 | 0));
	}
};

$__jsx_extend([UnaryConstraint], Constraint);
UnaryConstraint.prototype.addToGraph$ = function () {
	var this$0;
	var this$0$0;
	this$0 = this.myOutput;
	this$0$0 = this$0.constraints;
	this$0$0.elms.push(this);
	this.satisfied = false;
};


UnaryConstraint.prototype.chooseMethod$I = function (mark) {
	var s1$0;
	var s2$0;
	this.satisfied = this.myOutput.mark !== mark && (s1$0 = this.strength, s2$0 = this.myOutput.walkStrength, s1$0.strengthValue < s2$0.strengthValue);
};


UnaryConstraint.prototype.isSatisfied$ = function () {
	return this.satisfied;
};


UnaryConstraint.prototype.markInputs$I = function (mark) {
};


UnaryConstraint.prototype.output$ = function () {
	return this.myOutput;
};


UnaryConstraint.prototype.recalculate$ = function () {
	var myOutput$0;
	(myOutput$0 = this.myOutput).walkStrength = this.strength;
	myOutput$0.stay = ! this.isInput$();
	if (this.myOutput.stay) {
		this.execute$();
	}
};


UnaryConstraint.prototype.markUnsatisfied$ = function () {
	this.satisfied = false;
};


UnaryConstraint.prototype.inputsKnown$I = function (mark) {
	return true;
};


UnaryConstraint.prototype.removeFromGraph$ = function () {
	var this$0;
	if (this.myOutput != null) {
		this$0 = this.myOutput;
		OrderedCollection$x2E$x3CConstraint$x3E$remove$LOrderedCollection$x2E$x3CConstraint$x3E$LConstraint$(this$0.constraints, this);
		if (this$0.determinedBy == this) {
			this$0.determinedBy = null;
		}
	}
	this.satisfied = false;
};


function StayConstraint(v, str) {
	UnaryConstraint.call(this, v, str);
};

$__jsx_extend([StayConstraint], UnaryConstraint);
StayConstraint.prototype.execute$ = function () {
};


function EditConstraint(v, str) {
	UnaryConstraint.call(this, v, str);
};

$__jsx_extend([EditConstraint], UnaryConstraint);
EditConstraint.prototype.isInput$ = function () {
	return true;
};


EditConstraint.prototype.execute$ = function () {
};


function Direction() {
};

$__jsx_extend([Direction], Object);
function BinaryConstraint(var1, var2, strength) {
	var this$0$0;
	var mark$0$0;
	var overridden$0$0;
	this.strength = strength;
	this.v1 = var1;
	this.v2 = var2;
	this.direction = 0;
	this.addToGraph$();
	this$0$0 = Main.planner;
	mark$0$0 = ++ this$0$0.currentMark;
	overridden$0$0 = Constraint$satisfy$LConstraint$I(this, (mark$0$0 | 0));
	while (overridden$0$0 != null) {
		overridden$0$0 = Constraint$satisfy$LConstraint$I(overridden$0$0, (mark$0$0 | 0));
	}
};

function BinaryConstraint$0(strength) {
	this.strength = strength;
	this.v1 = null;
	this.v2 = null;
	this.direction = 0;
};

$__jsx_extend([BinaryConstraint, BinaryConstraint$0], Constraint);
BinaryConstraint.prototype.chooseMethod$I = function (mark) {
	var s1$0;
	var s2$0;
	var s1$1;
	var s2$1;
	var s1$2;
	var s2$2;
	var s1$3;
	var s2$3;
	var s1$4;
	var s2$4;
	if (this.v1.mark === mark) {
		this.direction = ((this.v2.mark !== mark && (s1$0 = this.strength, s2$0 = this.v2.walkStrength, s1$0.strengthValue < s2$0.strengthValue) ? 1 : 0) | 0);
	}
	if (this.v2.mark === mark) {
		this.direction = ((this.v1.mark !== mark && (s1$1 = this.strength, s2$1 = this.v1.walkStrength, s1$1.strengthValue < s2$1.strengthValue) ? -1 : 0) | 0);
	}
	s1$2 = this.v1.walkStrength;
	s2$2 = this.v2.walkStrength;
	if (s1$2.strengthValue > s2$2.strengthValue) {
		this.direction = (((s1$3 = this.strength, s2$3 = this.v1.walkStrength, s1$3.strengthValue < s2$3.strengthValue) ? -1 : 0) | 0);
	} else {
		this.direction = (((s1$4 = this.strength, s2$4 = this.v2.walkStrength, s1$4.strengthValue < s2$4.strengthValue) ? 1 : -1) | 0);
	}
};


BinaryConstraint.prototype.addToGraph$ = function () {
	var this$0;
	var this$0$0;
	var this$2;
	var this$0$2;
	this$0 = this.v1;
	this$0$0 = this$0.constraints;
	this$0$0.elms.push(this);
	this$2 = this.v2;
	this$0$2 = this$2.constraints;
	this$0$2.elms.push(this);
	this.direction = 0;
};


BinaryConstraint.prototype.isSatisfied$ = function () {
	return this.direction !== 0;
};


BinaryConstraint.prototype.markInputs$I = function (mark) {
	(this.direction === 1 ? this.v1 : this.v2).mark = mark;
};


BinaryConstraint.prototype.input$ = function () {
	return (this.direction === 1 ? this.v1 : this.v2);
};


function BinaryConstraint$input$LBinaryConstraint$($this) {
	return ($this.direction === 1 ? $this.v1 : $this.v2);
};

BinaryConstraint.input$LBinaryConstraint$ = BinaryConstraint$input$LBinaryConstraint$;

BinaryConstraint.prototype.output$ = function () {
	return (this.direction === 1 ? this.v2 : this.v1);
};


BinaryConstraint.prototype.recalculate$ = function () {
	var ihn;
	var out;
	var s1$0;
	var s2$0;
	var stay$0;
	(ihn = (this.direction === 1 ? this.v1 : this.v2), out = (this.direction === 1 ? this.v2 : this.v1));
	s1$0 = this.strength;
	s2$0 = ihn.walkStrength;
	out.walkStrength = (s1$0.strengthValue > s2$0.strengthValue ? s1$0 : s2$0);
	stay$0 = out.stay = ihn.stay;
	if (stay$0) {
		this.execute$();
	}
};


BinaryConstraint.prototype.markUnsatisfied$ = function () {
	this.direction = 0;
};


BinaryConstraint.prototype.inputsKnown$I = function (mark) {
	var i;
	i = (this.direction === 1 ? this.v1 : this.v2);
	return i.mark === mark || i.stay || i.determinedBy == null;
};


BinaryConstraint.prototype.removeFromGraph$ = function () {
	var this$0;
	var this$1;
	if (this.v1 != null) {
		this$0 = this.v1;
		OrderedCollection$x2E$x3CConstraint$x3E$remove$LOrderedCollection$x2E$x3CConstraint$x3E$LConstraint$(this$0.constraints, this);
		if (this$0.determinedBy == this) {
			this$0.determinedBy = null;
		}
	}
	if (this.v2 != null) {
		this$1 = this.v2;
		OrderedCollection$x2E$x3CConstraint$x3E$remove$LOrderedCollection$x2E$x3CConstraint$x3E$LConstraint$(this$1.constraints, this);
		if (this$1.determinedBy == this) {
			this$1.determinedBy = null;
		}
	}
	this.direction = 0;
};


function ScaleConstraint(src, scale, offset, dest, strength) {
	var this$0$0;
	var mark$0$0;
	var overridden$0$0;
	this.strength = strength;
	this.v1 = src;
	this.v2 = dest;
	this.direction = 0;
	this.scale = scale;
	this.offset = offset;
	this.addToGraph$();
	this$0$0 = Main.planner;
	mark$0$0 = ++ this$0$0.currentMark;
	overridden$0$0 = Constraint$satisfy$LConstraint$I(this, (mark$0$0 | 0));
	while (overridden$0$0 != null) {
		overridden$0$0 = Constraint$satisfy$LConstraint$I(overridden$0$0, (mark$0$0 | 0));
	}
};

$__jsx_extend([ScaleConstraint], BinaryConstraint);
ScaleConstraint.prototype.addToGraph$ = function () {
	var this$0;
	var this$0$0;
	var this$2;
	var this$0$2;
	BinaryConstraint.prototype.addToGraph$.call(this);
	this$0 = this.scale;
	this$0$0 = this$0.constraints;
	this$0$0.elms.push(this);
	this$2 = this.offset;
	this$0$2 = this$2.constraints;
	this$0$2.elms.push(this);
};


ScaleConstraint.prototype.removeFromGraph$ = function () {
	var this$0;
	var this$1;
	BinaryConstraint.prototype.removeFromGraph$.call(this);
	if (this.scale != null) {
		this$0 = this.scale;
		OrderedCollection$x2E$x3CConstraint$x3E$remove$LOrderedCollection$x2E$x3CConstraint$x3E$LConstraint$(this$0.constraints, this);
		if (this$0.determinedBy == this) {
			this$0.determinedBy = null;
		}
	}
	if (this.offset != null) {
		this$1 = this.offset;
		OrderedCollection$x2E$x3CConstraint$x3E$remove$LOrderedCollection$x2E$x3CConstraint$x3E$LConstraint$(this$1.constraints, this);
		if (this$1.determinedBy == this) {
			this$1.determinedBy = null;
		}
	}
};


ScaleConstraint.prototype.markInputs$I = function (mark) {
	BinaryConstraint.prototype.markInputs$I.call(this, mark);
	this.scale.mark = this.offset.mark = mark;
};


ScaleConstraint.prototype.execute$ = function () {
	if (this.direction === 1) {
		this.v2.value = this.v1.value * this.scale.value + this.offset.value;
	} else {
		this.v1.value = (this.v2.value - this.offset.value) / this.scale.value;
	}
};


ScaleConstraint.prototype.recalculate$ = function () {
	var ihn;
	var out;
	var s1$0;
	var s2$0;
	var stay$0;
	(ihn = (this.direction === 1 ? this.v1 : this.v2), out = (this.direction === 1 ? this.v2 : this.v1));
	s1$0 = this.strength;
	s2$0 = ihn.walkStrength;
	out.walkStrength = (s1$0.strengthValue > s2$0.strengthValue ? s1$0 : s2$0);
	stay$0 = out.stay = ihn.stay && this.scale.stay && this.offset.stay;
	if (stay$0) {
		this.execute$();
	}
};


function EqualityConstraint(var1, var2, strength) {
	BinaryConstraint.call(this, var1, var2, strength);
};

$__jsx_extend([EqualityConstraint], BinaryConstraint);
EqualityConstraint.prototype.execute$ = function () {
	(this.direction === 1 ? this.v2 : this.v1).value = (this.direction === 1 ? this.v1 : this.v2).value;
};


function Variable(name) {
	this.value = 0;
	this.constraints = ({elms: []});
	this.determinedBy = null;
	this.mark = 0;
	this.walkStrength = Strength.WEAKEST;
	this.stay = true;
	this.name = name;
};

function Variable$0(name, initialValue) {
	this.value = initialValue;
	this.constraints = ({elms: []});
	this.determinedBy = null;
	this.mark = 0;
	this.walkStrength = Strength.WEAKEST;
	this.stay = true;
	this.name = name;
};

$__jsx_extend([Variable, Variable$0], Object);
function Variable$addConstraint$LVariable$LConstraint$($this, c) {
	var this$0;
	this$0 = $this.constraints;
	this$0.elms.push(c);
};

Variable.addConstraint$LVariable$LConstraint$ = Variable$addConstraint$LVariable$LConstraint$;

function Variable$removeConstraint$LVariable$LConstraint$($this, c) {
	OrderedCollection$x2E$x3CConstraint$x3E$remove$LOrderedCollection$x2E$x3CConstraint$x3E$LConstraint$($this.constraints, c);
	if ($this.determinedBy == c) {
		$this.determinedBy = null;
	}
};

Variable.removeConstraint$LVariable$LConstraint$ = Variable$removeConstraint$LVariable$LConstraint$;

function Planner() {
	this.currentMark = 0;
};

$__jsx_extend([Planner], Object);
function Planner$incrementalAdd$LPlanner$LConstraint$($this, c) {
	var mark;
	var overridden;
	mark = ++ $this.currentMark;
	overridden = Constraint$satisfy$LConstraint$I(c, (mark | 0));
	while (overridden != null) {
		overridden = Constraint$satisfy$LConstraint$I(overridden, (mark | 0));
	}
};

Planner.incrementalAdd$LPlanner$LConstraint$ = Planner$incrementalAdd$LPlanner$LConstraint$;

function Planner$incrementalRemove$LPlanner$LConstraint$($this, c) {
	var out;
	var unsatisfied;
	var strength;
	var i;
	var u;
	var mark$0;
	var overridden$0;
	out = c.output$();
	c.markUnsatisfied$();
	c.removeFromGraph$();
	unsatisfied = Planner$removePropagateFrom$LPlanner$LVariable$($this, out);
	strength = Strength.REQUIRED;
	do {
		for (i = 0; i < unsatisfied.elms.length; i++) {
			u = OrderedCollection$x2E$x3CConstraint$x3E$at$LOrderedCollection$x2E$x3CConstraint$x3E$I(unsatisfied, (i | 0));
			if (u.strength == strength) {
				mark$0 = ++ $this.currentMark;
				overridden$0 = Constraint$satisfy$LConstraint$I(u, (mark$0 | 0));
				while (overridden$0 != null) {
					overridden$0 = Constraint$satisfy$LConstraint$I(overridden$0, (mark$0 | 0));
				}
			}
		}
		strength = Strength$nextWeaker$LStrength$(strength);
	} while (strength != Strength.WEAKEST);
};

Planner.incrementalRemove$LPlanner$LConstraint$ = Planner$incrementalRemove$LPlanner$LConstraint$;

function Planner$newMark$LPlanner$($this) {
	return ++ $this.currentMark;
};

Planner.newMark$LPlanner$ = Planner$newMark$LPlanner$;

function Planner$makePlan$LPlanner$LOrderedCollection$x2E$x3CConstraint$x3E$($this, sources) {
	var mark;
	var plan;
	var todo;
	var c;
	var this$0$0;
	mark = ++ $this.currentMark;
	plan = ({v: ({elms: []})});
	todo = sources;
	while (todo.elms.length > 0) {
		c = todo.elms.pop();
		if (c.output$().mark !== mark && c.inputsKnown$I((mark | 0))) {
			this$0$0 = plan.v;
			this$0$0.elms.push(c);
			c.output$().mark = (mark | 0);
			Planner$addConstraintsConsumingTo$LPlanner$LVariable$LOrderedCollection$x2E$x3CConstraint$x3E$($this, c.output$(), todo);
		}
	}
	return plan;
};

Planner.makePlan$LPlanner$LOrderedCollection$x2E$x3CConstraint$x3E$ = Planner$makePlan$LPlanner$LOrderedCollection$x2E$x3CConstraint$x3E$;

function Planner$extractPlanFromConstraints$LPlanner$LOrderedCollection$x2E$x3CConstraint$x3E$($this, constraints) {
	var sources;
	var i;
	var c;
	sources = ({elms: []});
	for (i = 0; i < constraints.elms.length; i++) {
		c = OrderedCollection$x2E$x3CConstraint$x3E$at$LOrderedCollection$x2E$x3CConstraint$x3E$I(constraints, (i | 0));
		if (c.isInput$() && c.isSatisfied$()) {
			sources.elms.push(c);
		}
	}
	return Planner$makePlan$LPlanner$LOrderedCollection$x2E$x3CConstraint$x3E$($this, sources);
};

Planner.extractPlanFromConstraints$LPlanner$LOrderedCollection$x2E$x3CConstraint$x3E$ = Planner$extractPlanFromConstraints$LPlanner$LOrderedCollection$x2E$x3CConstraint$x3E$;

function Planner$addPropagate$LPlanner$LConstraint$I($this, c, mark) {
	var todo;
	var d;
	todo = ({elms: []});
	todo.elms.push(c);
	while (todo.elms.length > 0) {
		d = todo.elms.pop();
		if (d.output$().mark === mark) {
			Planner$incrementalRemove$LPlanner$LConstraint$($this, c);
			return false;
		}
		d.recalculate$();
		Planner$addConstraintsConsumingTo$LPlanner$LVariable$LOrderedCollection$x2E$x3CConstraint$x3E$($this, d.output$(), todo);
	}
	return true;
};

Planner.addPropagate$LPlanner$LConstraint$I = Planner$addPropagate$LPlanner$LConstraint$I;

function Planner$removePropagateFrom$LPlanner$LVariable$($this, out) {
	var unsatisfied;
	var v;
	var i;
	var c;
	var determining;
	var next;
	var this$0;
	var elm$0;
	var this$1;
	var todo$elms$0;
	out.determinedBy = null;
	out.walkStrength = Strength.WEAKEST;
	out.stay = true;
	unsatisfied = ({elms: []});
	todo$elms$0 = [];
	todo$elms$0.push(out);
	while (todo$elms$0.length > 0) {
		v = todo$elms$0.pop();
		for (i = 0; i < (this$0 = v.constraints, this$0.elms.length); i++) {
			c = OrderedCollection$x2E$x3CConstraint$x3E$at$LOrderedCollection$x2E$x3CConstraint$x3E$I(v.constraints, (i | 0));
			if (! c.isSatisfied$()) {
				unsatisfied.elms.push(c);
			}
		}
		determining = v.determinedBy;
		for (i = 0; i < (this$1 = v.constraints, this$1.elms.length); i++) {
			next = OrderedCollection$x2E$x3CConstraint$x3E$at$LOrderedCollection$x2E$x3CConstraint$x3E$I(v.constraints, (i | 0));
			if (next != determining && next.isSatisfied$()) {
				next.recalculate$();
				elm$0 = next.output$();
				todo$elms$0.push(elm$0);
			}
		}
	}
	return unsatisfied;
};

Planner.removePropagateFrom$LPlanner$LVariable$ = Planner$removePropagateFrom$LPlanner$LVariable$;

function Planner$addConstraintsConsumingTo$LPlanner$LVariable$LOrderedCollection$x2E$x3CConstraint$x3E$($this, v, coll) {
	var determining;
	var cc;
	var i;
	var c;
	determining = v.determinedBy;
	cc = v.constraints;
	for (i = 0; i < cc.elms.length; i++) {
		c = OrderedCollection$x2E$x3CConstraint$x3E$at$LOrderedCollection$x2E$x3CConstraint$x3E$I(cc, (i | 0));
		if (c != determining && c.isSatisfied$()) {
			coll.elms.push(c);
		}
	}
};

Planner.addConstraintsConsumingTo$LPlanner$LVariable$LOrderedCollection$x2E$x3CConstraint$x3E$ = Planner$addConstraintsConsumingTo$LPlanner$LVariable$LOrderedCollection$x2E$x3CConstraint$x3E$;

function Plan() {
	this.v = ({elms: []});
};

$__jsx_extend([Plan], Object);
function Plan$addConstraint$LPlan$LConstraint$($this, c) {
	var this$0;
	this$0 = $this.v;
	this$0.elms.push(c);
};

Plan.addConstraint$LPlan$LConstraint$ = Plan$addConstraint$LPlan$LConstraint$;

function Plan$size$LPlan$($this) {
	var this$0;
	this$0 = $this.v;
	return (this$0.elms.length | 0);
};

Plan.size$LPlan$ = Plan$size$LPlan$;

function Plan$constraintAt$LPlan$I($this, index) {
	var this$0;
	this$0 = $this.v;
	return this$0.elms[index];
};

Plan.constraintAt$LPlan$I = Plan$constraintAt$LPlan$I;

function Plan$execute$LPlan$($this) {
	var i;
	var c;
	var this$0$0;
	for (i = 0; i < (this$0$0 = $this.v, this$0$0.elms.length); i++) {
		c = Plan$constraintAt$LPlan$I($this, (i | 0));
		c.execute$();
	}
};

Plan.execute$LPlan$ = Plan$execute$LPlan$;

function Main() {
};

$__jsx_extend([Main], Object);
function Main$chainTest$I(n) {
	var prev;
	var first;
	var last;
	var i;
	var name;
	var v;
	var edit;
	var edits;
	var plan;
	var i$0;
	var c$0;
	var this$0$0$0;
	Main.planner = ({currentMark: 0});
	prev = null;
	first = null;
	last = null;
	for (i = 0; i <= n; i++) {
		name = "v" + (i + "");
		v = ({value: 0, constraints: ({elms: []}), determinedBy: null, mark: 0, walkStrength: Strength.WEAKEST, stay: true, name: name});
		if (prev != null) {
			new EqualityConstraint(prev, v, Strength.REQUIRED);
		}
		if (i === 0) {
			first = v;
		}
		if (i === n) {
			last = v;
		}
		prev = v;
	}
	new StayConstraint(last, Strength.STRONG_DEFAULT);
	edit = new EditConstraint(first, Strength.PREFERRED);
	edits = ({elms: []});
	edits.elms.push(edit);
	plan = Planner$extractPlanFromConstraints$LPlanner$LOrderedCollection$x2E$x3CConstraint$x3E$(Main.planner, edits);
	for (i = 0; i < 100; i++) {
		first.value = i;
		for (i$0 = 0; i$0 < (this$0$0$0 = plan.v, this$0$0$0.elms.length); i$0++) {
			c$0 = Plan$constraintAt$LPlan$I(plan, (i$0 | 0));
			c$0.execute$();
		}
		if (last.value !== i) {
		}
	}
};

Main.chainTest$I = Main$chainTest$I;

function Main$projectionTest$I(n) {
	var scale;
	var offset;
	var src;
	var dst;
	var dests;
	var i;
	Main.planner = ({currentMark: 0});
	scale = new Variable$0("scale", 10);
	offset = new Variable$0("offset", 1000);
	src = null;
	dst = null;
	dests = ({elms: []});
	for (i = 0; i < n; i++) {
		src = new Variable$0("src" + (i + ""), i);
		dst = new Variable$0("dst" + (i + ""), i);
		dests.elms.push(dst);
		new StayConstraint(src, Strength.NORMAL);
		new ScaleConstraint(src, scale, offset, dst, Strength.REQUIRED);
	}
	Main$change$LVariable$N(src, 17);
	if (dst.value !== 1170) {
	}
	Main$change$LVariable$N(dst, 1050);
	if (src.value !== 5) {
	}
	Main$change$LVariable$N(scale, 5);
	for (i = 0; i < n - 1; i++) {
		if (OrderedCollection$x2E$x3CVariable$x3E$at$LOrderedCollection$x2E$x3CVariable$x3E$I(dests, (i | 0)).value !== i * 5 + 1000) {
		}
	}
	Main$change$LVariable$N(offset, 2000);
	for (i = 0; i < n - 1; i++) {
		if (OrderedCollection$x2E$x3CVariable$x3E$at$LOrderedCollection$x2E$x3CVariable$x3E$I(dests, (i | 0)).value !== i * 5 + 2000) {
		}
	}
};

Main.projectionTest$I = Main$projectionTest$I;

function Main$change$LVariable$N(v, newValue) {
	var edit;
	var edits;
	var plan;
	var i;
	var i$0;
	var c$0;
	var this$0$0$0;
	var this$0$0;
	edit = new EditConstraint(v, Strength.PREFERRED);
	edits = ({elms: []});
	edits.elms.push(edit);
	plan = Planner$extractPlanFromConstraints$LPlanner$LOrderedCollection$x2E$x3CConstraint$x3E$(Main.planner, edits);
	for (i = 0; i < 10; i++) {
		v.value = newValue;
		for (i$0 = 0; i$0 < (this$0$0$0 = plan.v, this$0$0$0.elms.length); i$0++) {
			c$0 = Plan$constraintAt$LPlan$I(plan, (i$0 | 0));
			c$0.execute$();
		}
	}
	if (edit.satisfied) {
		Planner$incrementalRemove$LPlanner$LConstraint$(Main.planner, edit);
	} else {
		if (edit.myOutput != null) {
			this$0$0 = edit.myOutput;
			OrderedCollection$x2E$x3CConstraint$x3E$remove$LOrderedCollection$x2E$x3CConstraint$x3E$LConstraint$(this$0$0.constraints, edit);
			if (this$0$0.determinedBy == edit) {
				this$0$0.determinedBy = null;
			}
		}
		edit.satisfied = false;
	}
};

Main.change$LVariable$N = Main$change$LVariable$N;

function Main$deltaBlue$() {
	Main$chainTest$I(100);
	Main$projectionTest$I(100);
};

Main.deltaBlue$ = Main$deltaBlue$;

function OrderedCollection$x2E$x3CConstraint$x3E() {
	this.elms = [];
};

$__jsx_extend([OrderedCollection$x2E$x3CConstraint$x3E], Object);
function OrderedCollection$x2E$x3CConstraint$x3E$add$LOrderedCollection$x2E$x3CConstraint$x3E$LConstraint$($this, elm) {
	$this.elms.push(elm);
};

OrderedCollection$x2E$x3CConstraint$x3E.add$LOrderedCollection$x2E$x3CConstraint$x3E$LConstraint$ = OrderedCollection$x2E$x3CConstraint$x3E$add$LOrderedCollection$x2E$x3CConstraint$x3E$LConstraint$;

function OrderedCollection$x2E$x3CConstraint$x3E$at$LOrderedCollection$x2E$x3CConstraint$x3E$I($this, index) {
	return $this.elms[index];
};

OrderedCollection$x2E$x3CConstraint$x3E.at$LOrderedCollection$x2E$x3CConstraint$x3E$I = OrderedCollection$x2E$x3CConstraint$x3E$at$LOrderedCollection$x2E$x3CConstraint$x3E$I;

function OrderedCollection$x2E$x3CConstraint$x3E$size$LOrderedCollection$x2E$x3CConstraint$x3E$($this) {
	return ($this.elms.length | 0);
};

OrderedCollection$x2E$x3CConstraint$x3E.size$LOrderedCollection$x2E$x3CConstraint$x3E$ = OrderedCollection$x2E$x3CConstraint$x3E$size$LOrderedCollection$x2E$x3CConstraint$x3E$;

function OrderedCollection$x2E$x3CConstraint$x3E$removeFirst$LOrderedCollection$x2E$x3CConstraint$x3E$($this) {
	return $this.elms.pop();
};

OrderedCollection$x2E$x3CConstraint$x3E.removeFirst$LOrderedCollection$x2E$x3CConstraint$x3E$ = OrderedCollection$x2E$x3CConstraint$x3E$removeFirst$LOrderedCollection$x2E$x3CConstraint$x3E$;

function OrderedCollection$x2E$x3CConstraint$x3E$remove$LOrderedCollection$x2E$x3CConstraint$x3E$LConstraint$($this, elm) {
	var index;
	var skipped;
	var i;
	var value;
	(index = 0, skipped = 0);
	for (i = 0; i < $this.elms.length; i++) {
		value = $this.elms[i];
		if (value != elm) {
			$this.elms[index] = value;
			index++;
		} else {
			skipped++;
		}
	}
	for (i = 0; i < skipped; i++) {
		$this.elms.pop();
	}
};

OrderedCollection$x2E$x3CConstraint$x3E.remove$LOrderedCollection$x2E$x3CConstraint$x3E$LConstraint$ = OrderedCollection$x2E$x3CConstraint$x3E$remove$LOrderedCollection$x2E$x3CConstraint$x3E$LConstraint$;

function OrderedCollection$x2E$x3CVariable$x3E() {
	this.elms = [];
};

$__jsx_extend([OrderedCollection$x2E$x3CVariable$x3E], Object);
function OrderedCollection$x2E$x3CVariable$x3E$add$LOrderedCollection$x2E$x3CVariable$x3E$LVariable$($this, elm) {
	$this.elms.push(elm);
};

OrderedCollection$x2E$x3CVariable$x3E.add$LOrderedCollection$x2E$x3CVariable$x3E$LVariable$ = OrderedCollection$x2E$x3CVariable$x3E$add$LOrderedCollection$x2E$x3CVariable$x3E$LVariable$;

function OrderedCollection$x2E$x3CVariable$x3E$at$LOrderedCollection$x2E$x3CVariable$x3E$I($this, index) {
	return $this.elms[index];
};

OrderedCollection$x2E$x3CVariable$x3E.at$LOrderedCollection$x2E$x3CVariable$x3E$I = OrderedCollection$x2E$x3CVariable$x3E$at$LOrderedCollection$x2E$x3CVariable$x3E$I;

function OrderedCollection$x2E$x3CVariable$x3E$size$LOrderedCollection$x2E$x3CVariable$x3E$($this) {
	return ($this.elms.length | 0);
};

OrderedCollection$x2E$x3CVariable$x3E.size$LOrderedCollection$x2E$x3CVariable$x3E$ = OrderedCollection$x2E$x3CVariable$x3E$size$LOrderedCollection$x2E$x3CVariable$x3E$;

function OrderedCollection$x2E$x3CVariable$x3E$removeFirst$LOrderedCollection$x2E$x3CVariable$x3E$($this) {
	return $this.elms.pop();
};

OrderedCollection$x2E$x3CVariable$x3E.removeFirst$LOrderedCollection$x2E$x3CVariable$x3E$ = OrderedCollection$x2E$x3CVariable$x3E$removeFirst$LOrderedCollection$x2E$x3CVariable$x3E$;

function OrderedCollection$x2E$x3CVariable$x3E$remove$LOrderedCollection$x2E$x3CVariable$x3E$LVariable$($this, elm) {
	var index;
	var skipped;
	var i;
	var value;
	(index = 0, skipped = 0);
	for (i = 0; i < $this.elms.length; i++) {
		value = $this.elms[i];
		if (value != elm) {
			$this.elms[index] = value;
			index++;
		} else {
			skipped++;
		}
	}
	for (i = 0; i < skipped; i++) {
		$this.elms.pop();
	}
};

OrderedCollection$x2E$x3CVariable$x3E.remove$LOrderedCollection$x2E$x3CVariable$x3E$LVariable$ = OrderedCollection$x2E$x3CVariable$x3E$remove$LOrderedCollection$x2E$x3CVariable$x3E$LVariable$;

function Crypto() {
	var $this = this;
	var TEXT;
	var encrypted;
	var encrypt;
	var decrypt;
	Crypto$setup$();
	TEXT = "The quick brown fox jumped over the extremely lazy frog! Now is the time for all good men to come to the party.";
	encrypted = "";
	function encrypt() {
		var RSA;
		RSA = ({n: null, e: 0, d: null, p: null, q: null, dmp1: null, dmq1: null, coeff: null});
		RSAKey$setPublic$LRSAKey$USUS(RSA, Crypto.nValue, "10001");
		RSAKey$setPrivateEx$LRSAKey$USUSSSSSSS(RSA, Crypto.nValue, "10001", Crypto.dValue, Crypto.pValue, Crypto.qValue, Crypto.dmp1Value, Crypto.dmq1Value, Crypto.coeffValue);
		encrypted = RSAKey$encrypt$LRSAKey$S(RSA, TEXT);
	}
	function decrypt() {
		var RSA;
		var decrypted;
		var c$0;
		var m$0;
		RSA = ({n: null, e: 0, d: null, p: null, q: null, dmp1: null, dmq1: null, coeff: null});
		RSAKey$setPublic$LRSAKey$USUS(RSA, Crypto.nValue, "10001");
		RSAKey$setPrivateEx$LRSAKey$USUSSSSSSS(RSA, Crypto.nValue, "10001", Crypto.dValue, Crypto.pValue, Crypto.qValue, Crypto.dmp1Value, Crypto.dmq1Value, Crypto.coeffValue);
		c$0 = new BigInteger$2(encrypted, 16);
		m$0 = RSAKey$doPrivate$LRSAKey$LBigInteger$(RSA, c$0);
		decrypted = (m$0 == null ? null : RSAKey$pkcs1unpad2$LBigInteger$N(m$0, BigInteger$bitLength$LBigInteger$(RSA.n) + 7 >> 3));
		if (decrypted !== TEXT) {
			throw new Error("Crypto operation failed");
		}
	}
	new BenchmarkSuite('Crypto', 266181, [ new Benchmark("Encrypt", encrypt), new Benchmark("Decrypt", decrypt) ]);
};

$__jsx_extend([Crypto], Object);
function Crypto$setup$() {
	var setupEngine;
	BigInteger$init$();
	function setupEngine(fn, bits) {
		BigInteger.am = fn;
		BigInteger.DB = bits;
		BigInteger.DM = (1 << bits) - 1;
		BigInteger.DV = 1 << bits;
		BigInteger.FP = 52;
		BigInteger.FV = Math.pow(2, BigInteger.FP);
		BigInteger.F1 = BigInteger.FP - bits;
		BigInteger.F2 = 2 * bits - BigInteger.FP;
	}
	setupEngine(Crypto$am3$ANNNLBigInteger$NNN, 28);
};

Crypto.setup$ = Crypto$setup$;

function Crypto$am1$ANNNLBigInteger$NNN(this_array, i, x, w, j, c, n) {
	var w_array;
	var v;
	w_array = w.array;
	while (-- n >= 0) {
		v = x * this_array[i++] + w_array[j] + c;
		c = Math.floor(v / 0x4000000);
		w_array[j++] = v & 0x3ffffff;
	}
	return c;
};

Crypto.am1$ANNNLBigInteger$NNN = Crypto$am1$ANNNLBigInteger$NNN;

function Crypto$am2$ANNNLBigInteger$NNN(this_array, i, x, w, j, c, n) {
	var w_array;
	var xl;
	var xh;
	var l;
	var h;
	var m;
	w_array = w.array;
	(xl = x & 0x7fff, xh = x >> 15);
	while (-- n >= 0) {
		l = this_array[i] & 0x7fff;
		h = this_array[i++] >> 15;
		m = xh * l + h * xl;
		l = xl * l + ((m & 0x7fff) << 15) + w_array[j] + (c & 0x3fffffff);
		c = (l >>> 30) + (m >>> 15) + xh * h + (c >>> 30);
		w_array[j++] = l & 0x3fffffff;
	}
	return c;
};

Crypto.am2$ANNNLBigInteger$NNN = Crypto$am2$ANNNLBigInteger$NNN;

function Crypto$am3$ANNNLBigInteger$NNN(this_array, i, x, w, j, c, n) {
	var w_array;
	var xl;
	var xh;
	var l;
	var h;
	var m;
	w_array = w.array;
	(xl = x & 0x3fff, xh = x >> 14);
	while (-- n >= 0) {
		l = this_array[i] & 0x3fff;
		h = this_array[i++] >> 14;
		m = xh * l + h * xl;
		l = xl * l + ((m & 0x3fff) << 14) + w_array[j] + c;
		c = (l >> 28) + (m >> 14) + xh * h;
		w_array[j++] = l & 0xfffffff;
	}
	return c;
};

Crypto.am3$ANNNLBigInteger$NNN = Crypto$am3$ANNNLBigInteger$NNN;

function Crypto$am4$ANNNLBigInteger$NNN(this_array, i, x, w, j, c, n) {
	var w_array;
	var xl;
	var xh;
	var l;
	var h;
	var m;
	w_array = w.array;
	(xl = x & 0x1fff, xh = x >> 13);
	while (-- n >= 0) {
		l = this_array[i] & 0x1fff;
		h = this_array[i++] >> 13;
		m = xh * l + h * xl;
		l = xl * l + ((m & 0x1fff) << 13) + w_array[j] + c;
		c = (l >> 26) + (m >> 13) + xh * h;
		w_array[j++] = l & 0x3ffffff;
	}
	return c;
};

Crypto.am4$ANNNLBigInteger$NNN = Crypto$am4$ANNNLBigInteger$NNN;

function BigInteger() {
	this.array = [];
	this.s = 0;
	this.t = 0;
};

function BigInteger$0(a, b, c) {
	this.array = [];
	this.s = 0;
	this.t = 0;
	BigInteger$fromNumber$LBigInteger$NNLSecureRandom$(this, a, b, c);
};

function BigInteger$1(a) {
	this.array = [];
	this.s = 0;
	this.t = 0;
	BigInteger$fromRadix$LBigInteger$ANN(this, a, 256);
};

function BigInteger$2(a, b) {
	this.array = [];
	this.s = 0;
	this.t = 0;
	BigInteger$fromString$LBigInteger$SN(this, a, b);
};

$__jsx_extend([BigInteger, BigInteger$0, BigInteger$1, BigInteger$2], Object);
function BigInteger$nbi$() {
	return ({array: [], s: 0, t: 0});
};

BigInteger.nbi$ = BigInteger$nbi$;

function BigInteger$init$() {
	var rr;
	var vv;
	rr = 48;
	for (vv = 0; vv <= 9; ++ vv) {
		BigInteger.RC[rr++] = vv;
	}
	rr = 97;
	for (vv = 10; vv < 36; ++ vv) {
		BigInteger.RC[rr++] = vv;
	}
	rr = 65;
	for (vv = 10; vv < 36; ++ vv) {
		BigInteger.RC[rr++] = vv;
	}
};

BigInteger.init$ = BigInteger$init$;

function BigInteger$int2char$N(n) {
	return "0123456789abcdefghijklmnopqrstuvwxyz".charAt(n);
};

BigInteger.int2char$N = BigInteger$int2char$N;

function BigInteger$intAt$SN(s, i) {
	var c;
	c = BigInteger.RC[s.charCodeAt(i)];
	return (c == null ? -1 : c);
};

BigInteger.intAt$SN = BigInteger$intAt$SN;

function BigInteger$copyTo$LBigInteger$LBigInteger$($this, r) {
	var this_array;
	var r_array;
	var i;
	this_array = $this.array;
	r_array = r.array;
	for (i = $this.t - 1; i >= 0; -- i) {
		r_array[i] = this_array[i];
	}
	r.t = $this.t;
	r.s = $this.s;
};

BigInteger.copyTo$LBigInteger$LBigInteger$ = BigInteger$copyTo$LBigInteger$LBigInteger$;

function BigInteger$parseBigInt$SN(str, r) {
	return new BigInteger$2(str, r);
};

BigInteger.parseBigInt$SN = BigInteger$parseBigInt$SN;

function BigInteger$fromInt$LBigInteger$N($this, x) {
	var this_array;
	this_array = $this.array;
	$this.t = 1;
	$this.s = (x < 0 ? -1 : 0);
	if (x > 0) {
		this_array[0] = x;
	} else if (x < -1) {
		this_array[0] = x + BigInteger.DV;
	} else {
		$this.t = 0;
	}
};

BigInteger.fromInt$LBigInteger$N = BigInteger$fromInt$LBigInteger$N;

function BigInteger$nbv$N(i) {
	var r;
	r = ({array: [], s: 0, t: 0});
	BigInteger$fromInt$LBigInteger$N(r, i);
	return r;
};

BigInteger.nbv$N = BigInteger$nbv$N;

function BigInteger$fromString$LBigInteger$SN($this, s, b) {
	var this_array;
	var k;
	var i;
	var mi;
	var sh;
	var x;
	var c$0;
	var this_array$0;
	var c$1;
	this_array = $this.array;
	if (b === 16) {
		k = 4;
	} else if (b === 8) {
		k = 3;
	} else if (b === 256) {
		k = 8;
	} else if (b === 2) {
		k = 1;
	} else if (b === 32) {
		k = 5;
	} else if (b === 4) {
		k = 2;
	} else {
		BigInteger$fromRadix$LBigInteger$SN($this, s, b);
		return;
	}
	$this.t = 0;
	$this.s = 0;
	(i = s.length, mi = false, sh = 0);
	while (-- i >= 0) {
		x = (k === 8 ? +s.charAt(i) & 0xff : (c$0 = BigInteger.RC[s.charCodeAt(i)], c$0 == null ? -1 : c$0));
		if (x < 0) {
			if (s.charAt(i) === "-") {
				mi = true;
			}
			continue;
		}
		mi = false;
		if (sh === 0) {
			this_array[$this.t++] = x;
		} else if (sh + k > BigInteger.DB) {
			this_array[$this.t - 1] |= (x & (1 << BigInteger.DB - sh) - 1) << sh;
			this_array[$this.t++] = x >> BigInteger.DB - sh;
		} else {
			this_array[$this.t - 1] |= x << sh;
		}
		sh += k;
		if (sh >= BigInteger.DB) {
			sh -= BigInteger.DB;
		}
	}
	if (k === 8 && (+s.charAt(0) & 0x80) !== 0) {
		$this.s = -1;
		if (sh > 0) {
			this_array[$this.t - 1] |= (1 << BigInteger.DB - sh) - 1 << sh;
		}
	}
	this_array$0 = $this.array;
	c$1 = $this.s & BigInteger.DM;
	while ($this.t > 0 && this_array$0[$this.t - 1] === c$1) {
		-- $this.t;
	}
	if (mi) {
		BigInteger$subTo$LBigInteger$LBigInteger$LBigInteger$(BigInteger.ZERO, $this, $this);
	}
};

BigInteger.fromString$LBigInteger$SN = BigInteger$fromString$LBigInteger$SN;

function BigInteger$fromNumberArray$LBigInteger$AN($this, s) {
	BigInteger$fromRadix$LBigInteger$ANN($this, s, 256);
};

BigInteger.fromNumberArray$LBigInteger$AN = BigInteger$fromNumberArray$LBigInteger$AN;

function BigInteger$clamp$LBigInteger$($this) {
	var this_array;
	var c;
	this_array = $this.array;
	c = $this.s & BigInteger.DM;
	while ($this.t > 0 && this_array[$this.t - 1] === c) {
		-- $this.t;
	}
};

BigInteger.clamp$LBigInteger$ = BigInteger$clamp$LBigInteger$;

function BigInteger$toString$LBigInteger$N($this, b) {
	var this_array;
	var k;
	var km;
	var d;
	var m;
	var r;
	var i;
	var p;
	var r$0;
	this_array = $this.array;
	if ($this.s < 0) {
		return "-" + BigInteger$toString$LBigInteger$N((r$0 = ({array: [], s: 0, t: 0}), BigInteger$subTo$LBigInteger$LBigInteger$LBigInteger$(BigInteger.ZERO, $this, r$0), r$0), b);
	}
	if (b === 16) {
		k = 4;
	} else if (b === 8) {
		k = 3;
	} else if (b === 2) {
		k = 1;
	} else if (b === 32) {
		k = 5;
	} else if (b === 4) {
		k = 2;
	} else {
		return BigInteger$toRadix$LBigInteger$N($this, b);
	}
	(km = (1 << k) - 1, m = false, r = "", i = $this.t);
	p = BigInteger.DB - i * BigInteger.DB % k;
	if (i-- > 0) {
		if (p < BigInteger.DB && (d = this_array[i] >> p) > 0) {
			m = true;
			r = "0123456789abcdefghijklmnopqrstuvwxyz".charAt(d);
		}
		while (i >= 0) {
			if (p < k) {
				d = (this_array[i] & (1 << p) - 1) << k - p;
				d |= this_array[-- i] >> (p += BigInteger.DB - k);
			} else {
				d = this_array[i] >> (p -= k) & km;
				if (p <= 0) {
					p += BigInteger.DB;
					-- i;
				}
			}
			if (d > 0) {
				m = true;
			}
			if (m) {
				r += "0123456789abcdefghijklmnopqrstuvwxyz".charAt(d);
			}
		}
	}
	return (m ? r : "0");
};

BigInteger.toString$LBigInteger$N = BigInteger$toString$LBigInteger$N;

function BigInteger$negate$LBigInteger$($this) {
	var r;
	r = ({array: [], s: 0, t: 0});
	BigInteger$subTo$LBigInteger$LBigInteger$LBigInteger$(BigInteger.ZERO, $this, r);
	return r;
};

BigInteger.negate$LBigInteger$ = BigInteger$negate$LBigInteger$;

function BigInteger$abs$LBigInteger$($this) {
	var r$0;
	return ($this.s < 0 ? (r$0 = ({array: [], s: 0, t: 0}), BigInteger$subTo$LBigInteger$LBigInteger$LBigInteger$(BigInteger.ZERO, $this, r$0), r$0) : $this);
};

BigInteger.abs$LBigInteger$ = BigInteger$abs$LBigInteger$;

function BigInteger$compareTo$LBigInteger$LBigInteger$($this, a) {
	var this_array;
	var a_array;
	var r;
	var i;
	this_array = $this.array;
	a_array = a.array;
	r = $this.s - a.s;
	if (r !== 0) {
		return r;
	}
	i = $this.t;
	r = i - a.t;
	if (r !== 0) {
		return r;
	}
	while (-- i >= 0) {
		if ((r = this_array[i] - a_array[i]) !== 0) {
			return r;
		}
	}
	return 0;
};

BigInteger.compareTo$LBigInteger$LBigInteger$ = BigInteger$compareTo$LBigInteger$LBigInteger$;

function BigInteger$nbits$N(x) {
	var r;
	var t;
	r = 1;
	if ((t = x >>> 16) !== 0) {
		x = t;
		r += 16;
	}
	if ((t = x >> 8) !== 0) {
		x = t;
		r += 8;
	}
	if ((t = x >> 4) !== 0) {
		x = t;
		r += 4;
	}
	if ((t = x >> 2) !== 0) {
		x = t;
		r += 2;
	}
	if ((t = x >> 1) !== 0) {
		x = t;
		r += 1;
	}
	return r;
};

BigInteger.nbits$N = BigInteger$nbits$N;

function BigInteger$bitLength$LBigInteger$($this) {
	var this_array;
	this_array = $this.array;
	return ($this.t <= 0 ? 0 : BigInteger.DB * ($this.t - 1) + BigInteger$nbits$N(this_array[$this.t - 1] ^ $this.s & BigInteger.DM));
};

BigInteger.bitLength$LBigInteger$ = BigInteger$bitLength$LBigInteger$;

function BigInteger$dlShiftTo$LBigInteger$NLBigInteger$($this, n, r) {
	var this_array;
	var r_array;
	var i;
	this_array = $this.array;
	r_array = r.array;
	for (i = $this.t - 1; i >= 0; -- i) {
		r_array[i + n] = this_array[i];
	}
	for (i = n - 1; i >= 0; -- i) {
		r_array[i] = 0;
	}
	r.t = $this.t + n;
	r.s = $this.s;
};

BigInteger.dlShiftTo$LBigInteger$NLBigInteger$ = BigInteger$dlShiftTo$LBigInteger$NLBigInteger$;

function BigInteger$drShiftTo$LBigInteger$NLBigInteger$($this, n, r) {
	var this_array;
	var r_array;
	var i;
	var value1$0;
	this_array = $this.array;
	r_array = r.array;
	for (i = n; i < $this.t; ++ i) {
		r_array[i - n] = this_array[i];
	}
	value1$0 = $this.t - n;
	r.t = (value1$0 >= 0 ? value1$0 : 0);
	r.s = $this.s;
};

BigInteger.drShiftTo$LBigInteger$NLBigInteger$ = BigInteger$drShiftTo$LBigInteger$NLBigInteger$;

function BigInteger$lShiftTo$LBigInteger$NLBigInteger$($this, n, r) {
	var this_array;
	var r_array;
	var bs;
	var cbs;
	var bm;
	var ds;
	var c;
	var i;
	var this_array$0;
	var c$0;
	var s$0;
	this_array = $this.array;
	r_array = r.array;
	bs = n % BigInteger.DB;
	cbs = BigInteger.DB - bs;
	bm = (1 << cbs) - 1;
	(ds = Math.floor(n / BigInteger.DB), c = $this.s << bs & BigInteger.DM);
	for (i = $this.t - 1; i >= 0; -- i) {
		r_array[i + ds + 1] = this_array[i] >> cbs | c;
		c = (this_array[i] & bm) << bs;
	}
	for (i = ds - 1; i >= 0; -- i) {
		r_array[i] = 0;
	}
	r_array[ds] = c;
	r.t = $this.t + ds + 1;
	s$0 = r.s = $this.s;
	this_array$0 = r.array;
	c$0 = s$0 & BigInteger.DM;
	while (r.t > 0 && this_array$0[r.t - 1] === c$0) {
		-- r.t;
	}
};

BigInteger.lShiftTo$LBigInteger$NLBigInteger$ = BigInteger$lShiftTo$LBigInteger$NLBigInteger$;

function BigInteger$rShiftTo$LBigInteger$NLBigInteger$($this, n, r) {
	var this_array;
	var r_array;
	var ds;
	var bs;
	var cbs;
	var bm;
	var i;
	var this_array$0;
	var c$0;
	this_array = $this.array;
	r_array = r.array;
	r.s = $this.s;
	ds = Math.floor(n / BigInteger.DB);
	if (ds >= $this.t) {
		r.t = 0;
		return;
	}
	bs = n % BigInteger.DB;
	cbs = BigInteger.DB - bs;
	bm = (1 << bs) - 1;
	r_array[0] = this_array[ds] >> bs;
	for (i = ds + 1; i < $this.t; ++ i) {
		r_array[i - ds - 1] |= (this_array[i] & bm) << cbs;
		r_array[i - ds] = this_array[i] >> bs;
	}
	if (bs > 0) {
		r_array[$this.t - ds - 1] |= ($this.s & bm) << cbs;
	}
	r.t = $this.t - ds;
	this_array$0 = r.array;
	c$0 = r.s & BigInteger.DM;
	while (r.t > 0 && this_array$0[r.t - 1] === c$0) {
		-- r.t;
	}
};

BigInteger.rShiftTo$LBigInteger$NLBigInteger$ = BigInteger$rShiftTo$LBigInteger$NLBigInteger$;

function BigInteger$subTo$LBigInteger$LBigInteger$LBigInteger$($this, a, r) {
	var this_array;
	var r_array;
	var a_array;
	var i;
	var c;
	var m;
	var value1$0;
	var value2$0;
	var this_array$0;
	var c$0;
	this_array = $this.array;
	r_array = r.array;
	a_array = a.array;
	(i = 0, c = 0, m = (value1$0 = a.t, value2$0 = $this.t, value1$0 <= value2$0 ? value1$0 : value2$0));
	while (i < m) {
		c += this_array[i] - a_array[i];
		r_array[i++] = c & BigInteger.DM;
		c >>= BigInteger.DB;
	}
	if (a.t < $this.t) {
		c -= a.s;
		while (i < $this.t) {
			c += this_array[i];
			r_array[i++] = c & BigInteger.DM;
			c >>= BigInteger.DB;
		}
		c += $this.s;
	} else {
		c += $this.s;
		while (i < a.t) {
			c -= a_array[i];
			r_array[i++] = c & BigInteger.DM;
			c >>= BigInteger.DB;
		}
		c -= a.s;
	}
	r.s = (c < 0 ? -1 : 0);
	if (c < -1) {
		r_array[i++] = BigInteger.DV + c;
	} else if (c > 0) {
		r_array[i++] = c;
	}
	r.t = i;
	this_array$0 = r.array;
	c$0 = r.s & BigInteger.DM;
	while (r.t > 0 && this_array$0[r.t - 1] === c$0) {
		-- r.t;
	}
};

BigInteger.subTo$LBigInteger$LBigInteger$LBigInteger$ = BigInteger$subTo$LBigInteger$LBigInteger$LBigInteger$;

function BigInteger$multiplyTo$LBigInteger$LBigInteger$LBigInteger$($this, a, r) {
	var r_array;
	var x;
	var y;
	var y_array;
	var i;
	var r$0$0;
	var r$0$1;
	var this_array$0;
	var c$0;
	var s$0;
	r_array = r.array;
	(x = ($this.s < 0 ? (r$0$0 = ({array: [], s: 0, t: 0}), BigInteger$subTo$LBigInteger$LBigInteger$LBigInteger$(BigInteger.ZERO, $this, r$0$0), r$0$0) : $this), y = (a.s < 0 ? (r$0$1 = ({array: [], s: 0, t: 0}), BigInteger$subTo$LBigInteger$LBigInteger$LBigInteger$(BigInteger.ZERO, a, r$0$1), r$0$1) : a));
	y_array = y.array;
	i = x.t;
	r.t = i + y.t;
	while (-- i >= 0) {
		r_array[i] = 0;
	}
	for (i = 0; i < y.t; ++ i) {
		r_array[i + x.t] = BigInteger.am(x.array, 0, y_array[i], r, i, 0, x.t);
	}
	s$0 = r.s = 0;
	this_array$0 = r.array;
	c$0 = s$0 & BigInteger.DM;
	while (r.t > 0 && this_array$0[r.t - 1] === c$0) {
		-- r.t;
	}
	if ($this.s !== a.s) {
		BigInteger$subTo$LBigInteger$LBigInteger$LBigInteger$(BigInteger.ZERO, r, r);
	}
};

BigInteger.multiplyTo$LBigInteger$LBigInteger$LBigInteger$ = BigInteger$multiplyTo$LBigInteger$LBigInteger$LBigInteger$;

function BigInteger$squareTo$LBigInteger$LBigInteger$($this, r) {
	var x;
	var x_array;
	var r_array;
	var i;
	var c;
	var r$0$0;
	var this_array$0;
	var c$0;
	var s$0;
	x = ($this.s < 0 ? (r$0$0 = ({array: [], s: 0, t: 0}), BigInteger$subTo$LBigInteger$LBigInteger$LBigInteger$(BigInteger.ZERO, $this, r$0$0), r$0$0) : $this);
	x_array = x.array;
	r_array = r.array;
	i = r.t = 2 * x.t;
	while (-- i >= 0) {
		r_array[i] = 0;
	}
	for (i = 0; i < x.t - 1; ++ i) {
		c = BigInteger.am(x.array, i, x_array[i], r, 2 * i, 0, 1);
		if ((r_array[i + x.t] += BigInteger.am(x.array, i + 1, 2 * x_array[i], r, 2 * i + 1, c, x.t - i - 1)) >= BigInteger.DV) {
			r_array[i + x.t] -= BigInteger.DV;
			r_array[i + x.t + 1] = 1;
		}
	}
	if (r.t > 0) {
		r_array[r.t - 1] += BigInteger.am(x.array, i, x_array[i], r, 2 * i, 0, 1);
	}
	s$0 = r.s = 0;
	this_array$0 = r.array;
	c$0 = s$0 & BigInteger.DM;
	while (r.t > 0 && this_array$0[r.t - 1] === c$0) {
		-- r.t;
	}
};

BigInteger.squareTo$LBigInteger$LBigInteger$ = BigInteger$squareTo$LBigInteger$LBigInteger$;

function BigInteger$divRemTo$LBigInteger$LBigInteger$LBigInteger$LBigInteger$($this, m, q, r) {
	var pm;
	var pt;
	var y;
	var ts;
	var ms;
	var pm_array;
	var nsh;
	var ys;
	var y_array;
	var y0;
	var yt;
	var d1;
	var d2;
	var e;
	var i;
	var j;
	var t;
	var r_array;
	var qd;
	var r$0$0;
	var r$0$2;
	var this_array$0;
	var c$0;
	pm = (m.s < 0 ? (r$0$0 = ({array: [], s: 0, t: 0}), BigInteger$subTo$LBigInteger$LBigInteger$LBigInteger$(BigInteger.ZERO, m, r$0$0), r$0$0) : m);
	if (pm.t <= 0) {
		return;
	}
	pt = ($this.s < 0 ? (r$0$2 = ({array: [], s: 0, t: 0}), BigInteger$subTo$LBigInteger$LBigInteger$LBigInteger$(BigInteger.ZERO, $this, r$0$2), r$0$2) : $this);
	if (pt.t < pm.t) {
		if (q != null) {
			BigInteger$fromInt$LBigInteger$N(q, 0);
		}
		if (r != null) {
			BigInteger$copyTo$LBigInteger$LBigInteger$($this, r);
		}
		return;
	}
	if (r == null) {
		r = ({array: [], s: 0, t: 0});
	}
	(y = ({array: [], s: 0, t: 0}), ts = $this.s, ms = m.s);
	pm_array = pm.array;
	nsh = BigInteger.DB - BigInteger$nbits$N(pm_array[pm.t - 1]);
	if (nsh > 0) {
		BigInteger$lShiftTo$LBigInteger$NLBigInteger$(pm, nsh, y);
		BigInteger$lShiftTo$LBigInteger$NLBigInteger$(pt, nsh, r);
	} else {
		BigInteger$copyTo$LBigInteger$LBigInteger$(pm, y);
		BigInteger$copyTo$LBigInteger$LBigInteger$(pt, r);
	}
	ys = y.t;
	y_array = y.array;
	y0 = y_array[ys - 1];
	if (y0 === 0) {
		return;
	}
	yt = y0 * (1 << BigInteger.F1) + (ys > 1 ? y_array[ys - 2] >> BigInteger.F2 : 0);
	(d1 = BigInteger.FV / yt, d2 = (1 << BigInteger.F1) / yt, e = 1 << BigInteger.F2);
	(i = r.t, j = i - ys, t = (q == null ? ({array: [], s: 0, t: 0}) : q));
	BigInteger$dlShiftTo$LBigInteger$NLBigInteger$(y, j, t);
	r_array = r.array;
	if (BigInteger$compareTo$LBigInteger$LBigInteger$(r, t) >= 0) {
		r_array[r.t++] = 1;
		BigInteger$subTo$LBigInteger$LBigInteger$LBigInteger$(r, t, r);
	}
	BigInteger$dlShiftTo$LBigInteger$NLBigInteger$(BigInteger.ONE, ys, t);
	BigInteger$subTo$LBigInteger$LBigInteger$LBigInteger$(t, y, y);
	while (y.t < ys) {
		y_array[y.t++] = 0;
	}
	while (-- j >= 0) {
		qd = (r_array[-- i] === y0 ? BigInteger.DM : Math.floor(r_array[i] * d1 + (r_array[i - 1] + e) * d2));
		if ((r_array[i] += BigInteger.am(y.array, 0, qd, r, j, 0, ys)) < qd) {
			BigInteger$dlShiftTo$LBigInteger$NLBigInteger$(y, j, t);
			BigInteger$subTo$LBigInteger$LBigInteger$LBigInteger$(r, t, r);
			while (r_array[i] < -- qd) {
				BigInteger$subTo$LBigInteger$LBigInteger$LBigInteger$(r, t, r);
			}
		}
	}
	if (q != null) {
		BigInteger$drShiftTo$LBigInteger$NLBigInteger$(r, ys, q);
		if (ts !== ms) {
			BigInteger$subTo$LBigInteger$LBigInteger$LBigInteger$(BigInteger.ZERO, q, q);
		}
	}
	r.t = ys;
	this_array$0 = r.array;
	c$0 = r.s & BigInteger.DM;
	while (r.t > 0 && this_array$0[r.t - 1] === c$0) {
		-- r.t;
	}
	if (nsh > 0) {
		BigInteger$rShiftTo$LBigInteger$NLBigInteger$(r, nsh, r);
	}
	if (ts < 0) {
		BigInteger$subTo$LBigInteger$LBigInteger$LBigInteger$(BigInteger.ZERO, r, r);
	}
};

BigInteger.divRemTo$LBigInteger$LBigInteger$LBigInteger$LBigInteger$ = BigInteger$divRemTo$LBigInteger$LBigInteger$LBigInteger$LBigInteger$;

function BigInteger$mod$LBigInteger$LBigInteger$($this, a) {
	var r;
	var r$0$0;
	r = ({array: [], s: 0, t: 0});
	BigInteger$divRemTo$LBigInteger$LBigInteger$LBigInteger$LBigInteger$($this.s < 0 ? (r$0$0 = ({array: [], s: 0, t: 0}), BigInteger$subTo$LBigInteger$LBigInteger$LBigInteger$(BigInteger.ZERO, $this, r$0$0), r$0$0) : $this, a, null, r);
	if ($this.s < 0 && BigInteger$compareTo$LBigInteger$LBigInteger$(r, BigInteger.ZERO) > 0) {
		BigInteger$subTo$LBigInteger$LBigInteger$LBigInteger$(a, r, r);
	}
	return r;
};

BigInteger.mod$LBigInteger$LBigInteger$ = BigInteger$mod$LBigInteger$LBigInteger$;

function BigInteger$invDigit$LBigInteger$($this) {
	var this_array;
	var x;
	var y;
	this_array = $this.array;
	if ($this.t < 1) {
		return 0;
	}
	x = this_array[0];
	if ((x & 1) === 0) {
		return 0;
	}
	y = x & 3;
	y = y * (2 - (x & 0xf) * y) & 0xf;
	y = y * (2 - (x & 0xff) * y) & 0xff;
	y = y * (2 - ((x & 0xffff) * y & 0xffff)) & 0xffff;
	y = y * (2 - x * y % BigInteger.DV) % BigInteger.DV;
	return (y > 0 ? BigInteger.DV - y : - y);
};

BigInteger.invDigit$LBigInteger$ = BigInteger$invDigit$LBigInteger$;

function BigInteger$isEven$LBigInteger$($this) {
	var this_array;
	this_array = $this.array;
	return ($this.t > 0 ? this_array[0] & 1 : $this.s) === 0;
};

BigInteger.isEven$LBigInteger$ = BigInteger$isEven$LBigInteger$;

function BigInteger$exp$LBigInteger$NLReducer$($this, e, z) {
	var r;
	var r2;
	var g;
	var i;
	var t;
	if (e > 0xffffffff || e < 1) {
		return BigInteger.ONE;
	}
	(r = ({array: [], s: 0, t: 0}), r2 = ({array: [], s: 0, t: 0}), g = z.convert$LBigInteger$($this), i = BigInteger$nbits$N(e) - 1);
	BigInteger$copyTo$LBigInteger$LBigInteger$(g, r);
	while (-- i >= 0) {
		z.sqrTo$LBigInteger$LBigInteger$(r, r2);
		if ((e & 1 << i) > 0) {
			z.mulTo$LBigInteger$LBigInteger$LBigInteger$(r2, g, r);
		} else {
			t = r;
			r = r2;
			r2 = t;
		}
	}
	return z.revert$LBigInteger$(r);
};

BigInteger.exp$LBigInteger$NLReducer$ = BigInteger$exp$LBigInteger$NLReducer$;

function BigInteger$modPowInt$LBigInteger$NLBigInteger$($this, e, m) {
	var z;
	var this_array$0;
	if (e < 256 || (this_array$0 = m.array, (m.t > 0 ? this_array$0[0] & 1 : m.s) === 0)) {
		z = new Classic(m);
	} else {
		z = new Montgomery(m);
	}
	return BigInteger$exp$LBigInteger$NLReducer$($this, e, z);
};

BigInteger.modPowInt$LBigInteger$NLBigInteger$ = BigInteger$modPowInt$LBigInteger$NLBigInteger$;

function BigInteger$clone$LBigInteger$($this) {
	var r;
	r = ({array: [], s: 0, t: 0});
	BigInteger$copyTo$LBigInteger$LBigInteger$($this, r);
	return r;
};

BigInteger.clone$LBigInteger$ = BigInteger$clone$LBigInteger$;

function BigInteger$intValue$LBigInteger$($this) {
	var this_array;
	this_array = $this.array;
	if ($this.s < 0) {
		if ($this.t === 1) {
			return this_array[0] - BigInteger.DV;
		} else if ($this.t === 0) {
			return -1;
		}
	} else if ($this.t === 1) {
		return this_array[0];
	} else if ($this.t === 0) {
		return 0;
	}
	return (this_array[1] & (1 << 32 - BigInteger.DB) - 1) << BigInteger.DB | this_array[0];
};

BigInteger.intValue$LBigInteger$ = BigInteger$intValue$LBigInteger$;

function BigInteger$byteValue$LBigInteger$($this) {
	var this_array;
	this_array = $this.array;
	return ($this.t === 0 ? $this.s : this_array[0] << 24 >> 24);
};

BigInteger.byteValue$LBigInteger$ = BigInteger$byteValue$LBigInteger$;

function BigInteger$shortValue$LBigInteger$($this) {
	var this_array;
	this_array = $this.array;
	return ($this.t === 0 ? $this.s : this_array[0] << 16 >> 16);
};

BigInteger.shortValue$LBigInteger$ = BigInteger$shortValue$LBigInteger$;

function BigInteger$chunkSize$LBigInteger$N($this, r) {
	return Math.floor(0.6931471805599453 * BigInteger.DB / Math.log(r));
};

BigInteger.chunkSize$LBigInteger$N = BigInteger$chunkSize$LBigInteger$N;

function BigInteger$signum$LBigInteger$($this) {
	var this_array;
	this_array = $this.array;
	return ($this.s < 0 ? -1 : $this.t <= 0 || $this.t === 1 && this_array[0] <= 0 ? 0 : 1);
};

BigInteger.signum$LBigInteger$ = BigInteger$signum$LBigInteger$;

function BigInteger$toRadix$LBigInteger$($this) {
	return BigInteger$toRadix$LBigInteger$N($this, 10);
};

BigInteger.toRadix$LBigInteger$ = BigInteger$toRadix$LBigInteger$;

function BigInteger$toRadix$LBigInteger$N($this, b) {
	var cs;
	var a;
	var d;
	var y;
	var z;
	var r;
	var this_array$0;
	var r$0;
	var this_array$1;
	if ((this_array$0 = $this.array, $this.s < 0 ? -1 : $this.t <= 0 || $this.t === 1 && this_array$0[0] <= 0 ? 0 : 1) === 0 || b < 2 || b > 36) {
		return "0";
	}
	cs = Math.floor(0.6931471805599453 * BigInteger.DB / Math.log(b));
	a = Math.pow(b, cs);
	(d = (r$0 = ({array: [], s: 0, t: 0}), BigInteger$fromInt$LBigInteger$N(r$0, a), r$0), y = ({array: [], s: 0, t: 0}), z = ({array: [], s: 0, t: 0}), r = "");
	BigInteger$divRemTo$LBigInteger$LBigInteger$LBigInteger$LBigInteger$($this, d, y, z);
	while ((this_array$1 = y.array, y.s < 0 ? -1 : y.t <= 0 || y.t === 1 && this_array$1[0] <= 0 ? 0 : 1) > 0) {
		r = (a + BigInteger$intValue$LBigInteger$(z)).toString(b).substring(1) + r;
		BigInteger$divRemTo$LBigInteger$LBigInteger$LBigInteger$LBigInteger$(y, d, y, z);
	}
	return BigInteger$intValue$LBigInteger$(z).toString(b) + r;
};

BigInteger.toRadix$LBigInteger$N = BigInteger$toRadix$LBigInteger$N;

function BigInteger$fromRadix$LBigInteger$S($this, s) {
	BigInteger$fromRadix$LBigInteger$SN($this, s, 10);
};

BigInteger.fromRadix$LBigInteger$S = BigInteger$fromRadix$LBigInteger$S;

function BigInteger$fromRadix$LBigInteger$SN($this, s, b) {
	var cs;
	var d;
	var mi;
	var j;
	var w;
	var i;
	var x;
	var c$0;
	var this_array$0;
	BigInteger$fromInt$LBigInteger$N($this, 0);
	cs = Math.floor(0.6931471805599453 * BigInteger.DB / Math.log(b));
	(d = Math.pow(b, cs), mi = false, j = 0, w = 0);
	for (i = 0; i < s.length; ++ i) {
		c$0 = BigInteger.RC[s.charCodeAt(i)];
		x = (c$0 == null ? -1 : c$0);
		if (x < 0) {
			if (s.charAt(i) === "-" && (this_array$0 = $this.array, $this.s < 0 ? -1 : $this.t <= 0 || $this.t === 1 && this_array$0[0] <= 0 ? 0 : 1) === 0) {
				mi = true;
			}
			continue;
		}
		w = b * w + x;
		if (++ j >= cs) {
			BigInteger$dMultiply$LBigInteger$N($this, d);
			BigInteger$dAddOffset$LBigInteger$NN($this, w, 0);
			j = 0;
			w = 0;
		}
	}
	if (j > 0) {
		BigInteger$dMultiply$LBigInteger$N($this, Math.pow(b, j));
		BigInteger$dAddOffset$LBigInteger$NN($this, w, 0);
	}
	if (mi) {
		BigInteger$subTo$LBigInteger$LBigInteger$LBigInteger$(BigInteger.ZERO, $this, $this);
	}
};

BigInteger.fromRadix$LBigInteger$SN = BigInteger$fromRadix$LBigInteger$SN;

function BigInteger$fromRadix$LBigInteger$ANN($this, s, b) {
	var cs;
	var d;
	var mi;
	var j;
	var w;
	var i;
	var x;
	BigInteger$fromInt$LBigInteger$N($this, 0);
	cs = Math.floor(0.6931471805599453 * BigInteger.DB / Math.log(b));
	(d = Math.pow(b, cs), mi = false, j = 0, w = 0);
	for (i = 0; i < s.length; ++ i) {
		x = s[i];
		w = b * w + x;
		if (++ j >= cs) {
			BigInteger$dMultiply$LBigInteger$N($this, d);
			BigInteger$dAddOffset$LBigInteger$NN($this, w, 0);
			j = 0;
			w = 0;
		}
	}
	if (j > 0) {
		BigInteger$dMultiply$LBigInteger$N($this, Math.pow(b, j));
		BigInteger$dAddOffset$LBigInteger$NN($this, w, 0);
	}
	if (mi) {
		BigInteger$subTo$LBigInteger$LBigInteger$LBigInteger$(BigInteger.ZERO, $this, $this);
	}
};

BigInteger.fromRadix$LBigInteger$ANN = BigInteger$fromRadix$LBigInteger$ANN;

function BigInteger$fromNumber$LBigInteger$NNLSecureRandom$($this, a, b, c) {
	var this_array$0;
	if (a < 2) {
		BigInteger$fromInt$LBigInteger$N($this, 1);
	} else {
		BigInteger$fromNumber$LBigInteger$NLSecureRandom$($this, a, c);
		if (! BigInteger$testBit$LBigInteger$N($this, a - 1)) {
			BigInteger$bitwiseTo$LBigInteger$LBigInteger$F$NNN$LBigInteger$($this, BigInteger$shiftLeft$LBigInteger$N(BigInteger.ONE, a - 1), BigInteger$op_or$NN, $this);
		}
		this_array$0 = $this.array;
		if (($this.t > 0 ? this_array$0[0] & 1 : $this.s) === 0) {
			BigInteger$dAddOffset$LBigInteger$NN($this, 1, 0);
		}
		while (! BigInteger$isProbablePrime$LBigInteger$N($this, b)) {
			BigInteger$dAddOffset$LBigInteger$NN($this, 2, 0);
			if (BigInteger$bitLength$LBigInteger$($this) > a) {
				BigInteger$subTo$LBigInteger$LBigInteger$LBigInteger$($this, BigInteger$shiftLeft$LBigInteger$N(BigInteger.ONE, a - 1), $this);
			}
		}
	}
};

BigInteger.fromNumber$LBigInteger$NNLSecureRandom$ = BigInteger$fromNumber$LBigInteger$NNLSecureRandom$;

function BigInteger$fromNumber$LBigInteger$NLSecureRandom$($this, a, b) {
	var x;
	var t;
	var i$0$0;
	(x = [], t = a & 7);
	x.length = (a >> 3) + 1;
	for (i$0$0 = 0; i$0$0 < x.length; ++ i$0$0) {
		x[i$0$0] = RNG$get_byte$();
	}
	if (t > 0) {
		x[0] &= (1 << t) - 1;
	} else {
		x[0] = 0;
	}
	BigInteger$fromRadix$LBigInteger$ANN($this, x, 256);
};

BigInteger.fromNumber$LBigInteger$NLSecureRandom$ = BigInteger$fromNumber$LBigInteger$NLSecureRandom$;

function BigInteger$toByteArray$LBigInteger$($this) {
	var this_array;
	var i;
	var r;
	var p;
	var d;
	var k;
	this_array = $this.array;
	(i = $this.t, r = []);
	r[0] = $this.s;
	(p = BigInteger.DB - i * BigInteger.DB % 8, k = 0);
	if (i-- > 0) {
		if (p < BigInteger.DB && (d = this_array[i] >> p) !== ($this.s & BigInteger.DM) >> p) {
			r[k++] = d | $this.s << BigInteger.DB - p;
		}
		while (i >= 0) {
			if (p < 8) {
				d = (this_array[i] & (1 << p) - 1) << 8 - p;
				d |= this_array[-- i] >> (p += BigInteger.DB - 8);
			} else {
				d = this_array[i] >> (p -= 8) & 0xff;
				if (p <= 0) {
					p += BigInteger.DB;
					-- i;
				}
			}
			if ((d & 0x80) !== 0) {
				d |= -256;
			}
			if (k === 0 && ($this.s & 0x80) !== (d & 0x80)) {
				++ k;
			}
			if (k > 0 || d !== $this.s) {
				r[k++] = d;
			}
		}
	}
	return r;
};

BigInteger.toByteArray$LBigInteger$ = BigInteger$toByteArray$LBigInteger$;

function BigInteger$equals$LBigInteger$LBigInteger$($this, a) {
	return BigInteger$compareTo$LBigInteger$LBigInteger$($this, a) === 0;
};

BigInteger.equals$LBigInteger$LBigInteger$ = BigInteger$equals$LBigInteger$LBigInteger$;

function BigInteger$min$LBigInteger$LBigInteger$($this, a) {
	return (BigInteger$compareTo$LBigInteger$LBigInteger$($this, a) < 0 ? $this : a);
};

BigInteger.min$LBigInteger$LBigInteger$ = BigInteger$min$LBigInteger$LBigInteger$;

function BigInteger$max$LBigInteger$LBigInteger$($this, a) {
	return (BigInteger$compareTo$LBigInteger$LBigInteger$($this, a) > 0 ? $this : a);
};

BigInteger.max$LBigInteger$LBigInteger$ = BigInteger$max$LBigInteger$LBigInteger$;

function BigInteger$bitwiseTo$LBigInteger$LBigInteger$F$NNN$LBigInteger$($this, a, op, r) {
	var this_array;
	var a_array;
	var r_array;
	var i;
	var f;
	var m;
	var value1$0;
	var value2$0;
	var this_array$0;
	var c$0;
	var s$0;
	this_array = $this.array;
	a_array = a.array;
	r_array = r.array;
	value1$0 = a.t;
	value2$0 = $this.t;
	m = (value1$0 <= value2$0 ? value1$0 : value2$0);
	for (i = 0; i < m; ++ i) {
		r_array[i] = op(this_array[i], a_array[i]);
	}
	if (a.t < $this.t) {
		f = a.s & BigInteger.DM;
		for (i = m; i < $this.t; ++ i) {
			r_array[i] = op(this_array[i], f);
		}
		r.t = $this.t;
	} else {
		f = $this.s & BigInteger.DM;
		for (i = m; i < a.t; ++ i) {
			r_array[i] = op(f, a_array[i]);
		}
		r.t = a.t;
	}
	s$0 = r.s = op($this.s, a.s);
	this_array$0 = r.array;
	c$0 = s$0 & BigInteger.DM;
	while (r.t > 0 && this_array$0[r.t - 1] === c$0) {
		-- r.t;
	}
};

BigInteger.bitwiseTo$LBigInteger$LBigInteger$F$NNN$LBigInteger$ = BigInteger$bitwiseTo$LBigInteger$LBigInteger$F$NNN$LBigInteger$;

function BigInteger$op_and$NN(x, y) {
	return x & y;
};

BigInteger.op_and$NN = BigInteger$op_and$NN;

function BigInteger$op_or$NN(x, y) {
	return x | y;
};

BigInteger.op_or$NN = BigInteger$op_or$NN;

function BigInteger$op_xor$NN(x, y) {
	return x ^ y;
};

BigInteger.op_xor$NN = BigInteger$op_xor$NN;

function BigInteger$op_andnot$NN(x, y) {
	return x & ~ y;
};

BigInteger.op_andnot$NN = BigInteger$op_andnot$NN;

function BigInteger$and$LBigInteger$LBigInteger$($this, a) {
	var r;
	r = ({array: [], s: 0, t: 0});
	BigInteger$bitwiseTo$LBigInteger$LBigInteger$F$NNN$LBigInteger$($this, a, BigInteger$op_and$NN, r);
	return r;
};

BigInteger.and$LBigInteger$LBigInteger$ = BigInteger$and$LBigInteger$LBigInteger$;

function BigInteger$or$LBigInteger$LBigInteger$($this, a) {
	var r;
	r = ({array: [], s: 0, t: 0});
	BigInteger$bitwiseTo$LBigInteger$LBigInteger$F$NNN$LBigInteger$($this, a, BigInteger$op_or$NN, r);
	return r;
};

BigInteger.or$LBigInteger$LBigInteger$ = BigInteger$or$LBigInteger$LBigInteger$;

function BigInteger$xor$LBigInteger$LBigInteger$($this, a) {
	var r;
	r = ({array: [], s: 0, t: 0});
	BigInteger$bitwiseTo$LBigInteger$LBigInteger$F$NNN$LBigInteger$($this, a, BigInteger$op_xor$NN, r);
	return r;
};

BigInteger.xor$LBigInteger$LBigInteger$ = BigInteger$xor$LBigInteger$LBigInteger$;

function BigInteger$andNot$LBigInteger$LBigInteger$($this, a) {
	var r;
	r = ({array: [], s: 0, t: 0});
	BigInteger$bitwiseTo$LBigInteger$LBigInteger$F$NNN$LBigInteger$($this, a, BigInteger$op_andnot$NN, r);
	return r;
};

BigInteger.andNot$LBigInteger$LBigInteger$ = BigInteger$andNot$LBigInteger$LBigInteger$;

function BigInteger$not$LBigInteger$($this) {
	var this_array;
	var r;
	var r_array;
	var i;
	this_array = $this.array;
	r = ({array: [], s: 0, t: 0});
	r_array = r.array;
	for (i = 0; i < $this.t; ++ i) {
		r_array[i] = BigInteger.DM & ~ this_array[i];
	}
	r.t = $this.t;
	r.s = ~ $this.s;
	return r;
};

BigInteger.not$LBigInteger$ = BigInteger$not$LBigInteger$;

function BigInteger$shiftLeft$LBigInteger$N($this, n) {
	var r;
	r = ({array: [], s: 0, t: 0});
	if (n < 0) {
		BigInteger$rShiftTo$LBigInteger$NLBigInteger$($this, - n, r);
	} else {
		BigInteger$lShiftTo$LBigInteger$NLBigInteger$($this, n, r);
	}
	return r;
};

BigInteger.shiftLeft$LBigInteger$N = BigInteger$shiftLeft$LBigInteger$N;

function BigInteger$shiftRight$LBigInteger$N($this, n) {
	var r;
	r = ({array: [], s: 0, t: 0});
	if (n < 0) {
		BigInteger$lShiftTo$LBigInteger$NLBigInteger$($this, - n, r);
	} else {
		BigInteger$rShiftTo$LBigInteger$NLBigInteger$($this, n, r);
	}
	return r;
};

BigInteger.shiftRight$LBigInteger$N = BigInteger$shiftRight$LBigInteger$N;

function BigInteger$lbit$N(x) {
	var r;
	if (x === 0) {
		return -1;
	}
	r = 0;
	if ((x & 0xffff) === 0) {
		x >>= 16;
		r += 16;
	}
	if ((x & 0xff) === 0) {
		x >>= 8;
		r += 8;
	}
	if ((x & 0xf) === 0) {
		x >>= 4;
		r += 4;
	}
	if ((x & 3) === 0) {
		x >>= 2;
		r += 2;
	}
	if ((x & 1) === 0) {
		++ r;
	}
	return r;
};

BigInteger.lbit$N = BigInteger$lbit$N;

function BigInteger$getLowestSetBit$LBigInteger$($this) {
	var this_array;
	var i;
	this_array = $this.array;
	for (i = 0; i < $this.t; ++ i) {
		if (this_array[i] !== 0) {
			return i * BigInteger.DB + BigInteger$lbit$N(this_array[i]);
		}
	}
	return ($this.s < 0 ? $this.t * BigInteger.DB : -1);
};

BigInteger.getLowestSetBit$LBigInteger$ = BigInteger$getLowestSetBit$LBigInteger$;

function BigInteger$cbit$N(x) {
	var r;
	r = 0;
	while (x !== 0) {
		x &= x - 1;
		++ r;
	}
	return r;
};

BigInteger.cbit$N = BigInteger$cbit$N;

function BigInteger$bitCount$LBigInteger$($this) {
	var this_array;
	var r;
	var x;
	var i;
	this_array = $this.array;
	(r = 0, x = $this.s & BigInteger.DM);
	for (i = 0; i < $this.t; ++ i) {
		r += BigInteger$cbit$N(this_array[i] ^ x);
	}
	return r;
};

BigInteger.bitCount$LBigInteger$ = BigInteger$bitCount$LBigInteger$;

function BigInteger$testBit$LBigInteger$N($this, n) {
	var this_array;
	var j;
	this_array = $this.array;
	j = Math.floor(n / BigInteger.DB);
	return (j >= $this.t ? $this.s !== 0 : (this_array[j] & 1 << n % BigInteger.DB) !== 0);
};

BigInteger.testBit$LBigInteger$N = BigInteger$testBit$LBigInteger$N;

function BigInteger$changeBit$LBigInteger$NF$NNN$($this, n, op) {
	var this$0;
	var r$0;
	this$0 = BigInteger.ONE;
	r$0 = ({array: [], s: 0, t: 0});
	if (n < 0) {
		BigInteger$rShiftTo$LBigInteger$NLBigInteger$(this$0, - n, r$0);
	} else {
		BigInteger$lShiftTo$LBigInteger$NLBigInteger$(this$0, n, r$0);
	}
	BigInteger$bitwiseTo$LBigInteger$LBigInteger$F$NNN$LBigInteger$($this, r$0, op, r$0);
	return r$0;
};

BigInteger.changeBit$LBigInteger$NF$NNN$ = BigInteger$changeBit$LBigInteger$NF$NNN$;

function BigInteger$setBit$LBigInteger$N($this, n) {
	return BigInteger$changeBit$LBigInteger$NF$NNN$($this, n, BigInteger$op_or$NN);
};

BigInteger.setBit$LBigInteger$N = BigInteger$setBit$LBigInteger$N;

function BigInteger$clearBit$LBigInteger$N($this, n) {
	return BigInteger$changeBit$LBigInteger$NF$NNN$($this, n, BigInteger$op_andnot$NN);
};

BigInteger.clearBit$LBigInteger$N = BigInteger$clearBit$LBigInteger$N;

function BigInteger$flipBit$LBigInteger$N($this, n) {
	return BigInteger$changeBit$LBigInteger$NF$NNN$($this, n, BigInteger$op_xor$NN);
};

BigInteger.flipBit$LBigInteger$N = BigInteger$flipBit$LBigInteger$N;

function BigInteger$addTo$LBigInteger$LBigInteger$LBigInteger$($this, a, r) {
	var this_array;
	var a_array;
	var r_array;
	var i;
	var c;
	var m;
	var value1$0;
	var value2$0;
	var this_array$0;
	var c$0;
	this_array = $this.array;
	a_array = a.array;
	r_array = r.array;
	(i = 0, c = 0, m = (value1$0 = a.t, value2$0 = $this.t, value1$0 <= value2$0 ? value1$0 : value2$0));
	while (i < m) {
		c += this_array[i] + a_array[i];
		r_array[i++] = c & BigInteger.DM;
		c >>= BigInteger.DB;
	}
	if (a.t < $this.t) {
		c += a.s;
		while (i < $this.t) {
			c += this_array[i];
			r_array[i++] = c & BigInteger.DM;
			c >>= BigInteger.DB;
		}
		c += $this.s;
	} else {
		c += $this.s;
		while (i < a.t) {
			c += a_array[i];
			r_array[i++] = c & BigInteger.DM;
			c >>= BigInteger.DB;
		}
		c += a.s;
	}
	r.s = (c < 0 ? -1 : 0);
	if (c > 0) {
		r_array[i++] = c;
	} else if (c < -1) {
		r_array[i++] = BigInteger.DV + c;
	}
	r.t = i;
	this_array$0 = r.array;
	c$0 = r.s & BigInteger.DM;
	while (r.t > 0 && this_array$0[r.t - 1] === c$0) {
		-- r.t;
	}
};

BigInteger.addTo$LBigInteger$LBigInteger$LBigInteger$ = BigInteger$addTo$LBigInteger$LBigInteger$LBigInteger$;

function BigInteger$add$LBigInteger$LBigInteger$($this, a) {
	var r;
	r = ({array: [], s: 0, t: 0});
	BigInteger$addTo$LBigInteger$LBigInteger$LBigInteger$($this, a, r);
	return r;
};

BigInteger.add$LBigInteger$LBigInteger$ = BigInteger$add$LBigInteger$LBigInteger$;

function BigInteger$subtract$LBigInteger$LBigInteger$($this, a) {
	var r;
	r = ({array: [], s: 0, t: 0});
	BigInteger$subTo$LBigInteger$LBigInteger$LBigInteger$($this, a, r);
	return r;
};

BigInteger.subtract$LBigInteger$LBigInteger$ = BigInteger$subtract$LBigInteger$LBigInteger$;

function BigInteger$multiply$LBigInteger$LBigInteger$($this, a) {
	var r;
	r = ({array: [], s: 0, t: 0});
	BigInteger$multiplyTo$LBigInteger$LBigInteger$LBigInteger$($this, a, r);
	return r;
};

BigInteger.multiply$LBigInteger$LBigInteger$ = BigInteger$multiply$LBigInteger$LBigInteger$;

function BigInteger$divide$LBigInteger$LBigInteger$($this, a) {
	var r;
	r = ({array: [], s: 0, t: 0});
	BigInteger$divRemTo$LBigInteger$LBigInteger$LBigInteger$LBigInteger$($this, a, r, null);
	return r;
};

BigInteger.divide$LBigInteger$LBigInteger$ = BigInteger$divide$LBigInteger$LBigInteger$;

function BigInteger$remainder$LBigInteger$LBigInteger$($this, a) {
	var r;
	r = ({array: [], s: 0, t: 0});
	BigInteger$divRemTo$LBigInteger$LBigInteger$LBigInteger$LBigInteger$($this, a, null, r);
	return r;
};

BigInteger.remainder$LBigInteger$LBigInteger$ = BigInteger$remainder$LBigInteger$LBigInteger$;

function BigInteger$divideAndRemainder$LBigInteger$LBigInteger$($this, a) {
	var q;
	var r;
	(q = ({array: [], s: 0, t: 0}), r = ({array: [], s: 0, t: 0}));
	BigInteger$divRemTo$LBigInteger$LBigInteger$LBigInteger$LBigInteger$($this, a, q, r);
	return [ q, r ];
};

BigInteger.divideAndRemainder$LBigInteger$LBigInteger$ = BigInteger$divideAndRemainder$LBigInteger$LBigInteger$;

function BigInteger$dMultiply$LBigInteger$N($this, n) {
	var this_array;
	var this_array$0;
	var c$0;
	this_array = $this.array;
	this_array[$this.t] = BigInteger.am($this.array, 0, n - 1, $this, 0, 0, $this.t);
	++ $this.t;
	this_array$0 = $this.array;
	c$0 = $this.s & BigInteger.DM;
	while ($this.t > 0 && this_array$0[$this.t - 1] === c$0) {
		-- $this.t;
	}
};

BigInteger.dMultiply$LBigInteger$N = BigInteger$dMultiply$LBigInteger$N;

function BigInteger$dAddOffset$LBigInteger$NN($this, n, w) {
	var this_array;
	this_array = $this.array;
	while ($this.t <= w) {
		this_array[$this.t++] = 0;
	}
	this_array[w] += n;
	while (this_array[w] >= BigInteger.DV) {
		this_array[w] -= BigInteger.DV;
		if (++ w >= $this.t) {
			this_array[$this.t++] = 0;
		}
		++ this_array[w];
	}
};

BigInteger.dAddOffset$LBigInteger$NN = BigInteger$dAddOffset$LBigInteger$NN;

function BigInteger$pow$LBigInteger$N($this, e) {
	return BigInteger$exp$LBigInteger$NLReducer$($this, e, new NullExp());
};

BigInteger.pow$LBigInteger$N = BigInteger$pow$LBigInteger$N;

function BigInteger$multiplyLowerTo$LBigInteger$LBigInteger$NLBigInteger$($this, a, n, r) {
	var r_array;
	var a_array;
	var i;
	var j;
	var value1$0;
	var value1$2;
	var this_array$0;
	var c$0;
	r_array = r.array;
	a_array = a.array;
	value1$0 = $this.t + a.t;
	i = (value1$0 <= n ? value1$0 : n);
	r.s = 0;
	r.t = i;
	while (i > 0) {
		r_array[-- i] = 0;
	}
	for (j = r.t - $this.t; i < j; ++ i) {
		r_array[i + $this.t] = BigInteger.am($this.array, 0, a_array[i], r, i, 0, $this.t);
	}
	for (j = (value1$2 = a.t, value1$2 <= n ? value1$2 : n); i < j; ++ i) {
		BigInteger.am($this.array, 0, a_array[i], r, i, 0, n - i);
	}
	this_array$0 = r.array;
	c$0 = r.s & BigInteger.DM;
	while (r.t > 0 && this_array$0[r.t - 1] === c$0) {
		-- r.t;
	}
};

BigInteger.multiplyLowerTo$LBigInteger$LBigInteger$NLBigInteger$ = BigInteger$multiplyLowerTo$LBigInteger$LBigInteger$NLBigInteger$;

function BigInteger$multiplyUpperTo$LBigInteger$LBigInteger$NLBigInteger$($this, a, n, r) {
	var r_array;
	var a_array;
	var i;
	var value1$0;
	var this_array$0;
	var c$0;
	r_array = r.array;
	a_array = a.array;
	-- n;
	i = r.t = $this.t + a.t - n;
	r.s = 0;
	while (-- i >= 0) {
		r_array[i] = 0;
	}
	for (i = (value1$0 = n - $this.t, value1$0 >= 0 ? value1$0 : 0); i < a.t; ++ i) {
		r_array[$this.t + i - n] = BigInteger.am($this.array, n - i, a_array[i], r, 0, 0, $this.t + i - n);
	}
	this_array$0 = r.array;
	c$0 = r.s & BigInteger.DM;
	while (r.t > 0 && this_array$0[r.t - 1] === c$0) {
		-- r.t;
	}
	BigInteger$drShiftTo$LBigInteger$NLBigInteger$(r, 1, r);
};

BigInteger.multiplyUpperTo$LBigInteger$LBigInteger$NLBigInteger$ = BigInteger$multiplyUpperTo$LBigInteger$LBigInteger$NLBigInteger$;

function BigInteger$modPow$LBigInteger$LBigInteger$LBigInteger$($this, e, m) {
	var e_array;
	var i;
	var k;
	var r;
	var z;
	var g;
	var n;
	var k1;
	var km;
	var g2;
	var j;
	var w;
	var is1;
	var r2;
	var t;
	var r$0;
	var this_array$0;
	e_array = e.array;
	(i = BigInteger$bitLength$LBigInteger$(e), r = (r$0 = ({array: [], s: 0, t: 0}), BigInteger$fromInt$LBigInteger$N(r$0, 1), r$0), z = null);
	if (i <= 0) {
		return r;
	} else if (i < 18) {
		k = 1;
	} else if (i < 48) {
		k = 3;
	} else if (i < 144) {
		k = 4;
	} else if (i < 768) {
		k = 5;
	} else {
		k = 6;
	}
	if (i < 8) {
		z = new Classic(m);
	} else {
		this_array$0 = m.array;
		if ((m.t > 0 ? this_array$0[0] & 1 : m.s) === 0) {
			z = new Barrett(m);
		} else {
			z = new Montgomery(m);
		}
	}
	(g = [], n = 3, k1 = k - 1, km = (1 << k) - 1);
	g[1] = z.convert$LBigInteger$($this);
	if (k > 1) {
		g2 = ({array: [], s: 0, t: 0});
		z.sqrTo$LBigInteger$LBigInteger$(g[1], g2);
		while (n <= km) {
			g[n] = ({array: [], s: 0, t: 0});
			z.mulTo$LBigInteger$LBigInteger$LBigInteger$(g2, g[n - 2], g[n]);
			n += 2;
		}
	}
	(j = e.t - 1, is1 = true, r2 = ({array: [], s: 0, t: 0}));
	i = BigInteger$nbits$N(e_array[j]) - 1;
	while (j >= 0) {
		if (i >= k1) {
			w = e_array[j] >> i - k1 & km;
		} else {
			w = (e_array[j] & (1 << i + 1) - 1) << k1 - i;
			if (j > 0) {
				w |= e_array[j - 1] >> BigInteger.DB + i - k1;
			}
		}
		n = k;
		while ((w & 1) === 0) {
			w >>= 1;
			-- n;
		}
		if ((i -= n) < 0) {
			i += BigInteger.DB;
			-- j;
		}
		if (is1) {
			BigInteger$copyTo$LBigInteger$LBigInteger$(g[w], r);
			is1 = false;
		} else {
			while (n > 1) {
				z.sqrTo$LBigInteger$LBigInteger$(r, r2);
				z.sqrTo$LBigInteger$LBigInteger$(r2, r);
				n -= 2;
			}
			if (n > 0) {
				z.sqrTo$LBigInteger$LBigInteger$(r, r2);
			} else {
				t = r;
				r = r2;
				r2 = t;
			}
			z.mulTo$LBigInteger$LBigInteger$LBigInteger$(r2, g[w], r);
		}
		while (j >= 0 && (e_array[j] & 1 << i) === 0) {
			z.sqrTo$LBigInteger$LBigInteger$(r, r2);
			t = r;
			r = r2;
			r2 = t;
			if (-- i < 0) {
				i = BigInteger.DB - 1;
				-- j;
			}
		}
	}
	return z.revert$LBigInteger$(r);
};

BigInteger.modPow$LBigInteger$LBigInteger$LBigInteger$ = BigInteger$modPow$LBigInteger$LBigInteger$LBigInteger$;

function BigInteger$gcd$LBigInteger$LBigInteger$($this, a) {
	var x;
	var y;
	var t;
	var i;
	var g;
	var r$0;
	var r$1;
	var r$2;
	var r$3;
	var this_array$0;
	x = ($this.s < 0 ? (r$0 = ({array: [], s: 0, t: 0}), BigInteger$subTo$LBigInteger$LBigInteger$LBigInteger$(BigInteger.ZERO, $this, r$0), r$0) : (r$1 = ({array: [], s: 0, t: 0}), BigInteger$copyTo$LBigInteger$LBigInteger$($this, r$1), r$1));
	y = (a.s < 0 ? (r$2 = ({array: [], s: 0, t: 0}), BigInteger$subTo$LBigInteger$LBigInteger$LBigInteger$(BigInteger.ZERO, a, r$2), r$2) : (r$3 = ({array: [], s: 0, t: 0}), BigInteger$copyTo$LBigInteger$LBigInteger$(a, r$3), r$3));
	if (BigInteger$compareTo$LBigInteger$LBigInteger$(x, y) < 0) {
		t = x;
		x = y;
		y = t;
	}
	(i = BigInteger$getLowestSetBit$LBigInteger$(x), g = BigInteger$getLowestSetBit$LBigInteger$(y));
	if (g < 0) {
		return x;
	}
	if (i < g) {
		g = i;
	}
	if (g > 0) {
		BigInteger$rShiftTo$LBigInteger$NLBigInteger$(x, g, x);
		BigInteger$rShiftTo$LBigInteger$NLBigInteger$(y, g, y);
	}
	while ((this_array$0 = x.array, x.s < 0 ? -1 : x.t <= 0 || x.t === 1 && this_array$0[0] <= 0 ? 0 : 1) > 0) {
		if ((i = BigInteger$getLowestSetBit$LBigInteger$(x)) > 0) {
			BigInteger$rShiftTo$LBigInteger$NLBigInteger$(x, i, x);
		}
		if ((i = BigInteger$getLowestSetBit$LBigInteger$(y)) > 0) {
			BigInteger$rShiftTo$LBigInteger$NLBigInteger$(y, i, y);
		}
		if (BigInteger$compareTo$LBigInteger$LBigInteger$(x, y) >= 0) {
			BigInteger$subTo$LBigInteger$LBigInteger$LBigInteger$(x, y, x);
			BigInteger$rShiftTo$LBigInteger$NLBigInteger$(x, 1, x);
		} else {
			BigInteger$subTo$LBigInteger$LBigInteger$LBigInteger$(y, x, y);
			BigInteger$rShiftTo$LBigInteger$NLBigInteger$(y, 1, y);
		}
	}
	if (g > 0) {
		BigInteger$lShiftTo$LBigInteger$NLBigInteger$(y, g, y);
	}
	return y;
};

BigInteger.gcd$LBigInteger$LBigInteger$ = BigInteger$gcd$LBigInteger$LBigInteger$;

function BigInteger$modInt$LBigInteger$N($this, n) {
	var this_array;
	var d;
	var r;
	var i;
	this_array = $this.array;
	if (n <= 0) {
		return 0;
	}
	(d = BigInteger.DV % n, r = ($this.s < 0 ? n - 1 : 0));
	if ($this.t > 0) {
		if (d === 0) {
			r = this_array[0] % n;
		} else {
			for (i = $this.t - 1; i >= 0; -- i) {
				r = (d * r + this_array[i]) % n;
			}
		}
	}
	return r;
};

BigInteger.modInt$LBigInteger$N = BigInteger$modInt$LBigInteger$N;

function BigInteger$modInverse$LBigInteger$LBigInteger$($this, m) {
	var ac;
	var u;
	var v;
	var a;
	var b;
	var c;
	var d;
	var this_array$0;
	var this_array$2;
	var this_array$3;
	var r$0;
	var r$1;
	var r$2;
	var r$3;
	var r$4;
	var r$5;
	var this_array$4;
	var this_array$5;
	var this_array$6;
	var this_array$7;
	var this_array$8;
	var this_array$9;
	var this_array$10;
	var this_array$11;
	var this_array$12;
	var r$6;
	var this_array$13;
	var this_array$14;
	var r$8;
	this_array$0 = m.array;
	ac = (m.t > 0 ? this_array$0[0] & 1 : m.s) === 0;
	if ((this_array$2 = $this.array, ($this.t > 0 ? this_array$2[0] & 1 : $this.s) === 0) && ac || (this_array$3 = m.array, m.s < 0 ? -1 : m.t <= 0 || m.t === 1 && this_array$3[0] <= 0 ? 0 : 1) === 0) {
		return BigInteger.ZERO;
	}
	(u = (r$0 = ({array: [], s: 0, t: 0}), BigInteger$copyTo$LBigInteger$LBigInteger$(m, r$0), r$0), v = (r$1 = ({array: [], s: 0, t: 0}), BigInteger$copyTo$LBigInteger$LBigInteger$($this, r$1), r$1));
	(a = (r$2 = ({array: [], s: 0, t: 0}), BigInteger$fromInt$LBigInteger$N(r$2, 1), r$2), b = (r$3 = ({array: [], s: 0, t: 0}), BigInteger$fromInt$LBigInteger$N(r$3, 0), r$3), c = (r$4 = ({array: [], s: 0, t: 0}), BigInteger$fromInt$LBigInteger$N(r$4, 0), r$4), d = (r$5 = ({array: [], s: 0, t: 0}), BigInteger$fromInt$LBigInteger$N(r$5, 1), r$5));
	while ((this_array$12 = u.array, u.s < 0 ? -1 : u.t <= 0 || u.t === 1 && this_array$12[0] <= 0 ? 0 : 1) !== 0) {
		while ((this_array$7 = u.array, (u.t > 0 ? this_array$7[0] & 1 : u.s) === 0)) {
			BigInteger$rShiftTo$LBigInteger$NLBigInteger$(u, 1, u);
			if (ac) {
				if (! (this_array$4 = a.array, (a.t > 0 ? this_array$4[0] & 1 : a.s) === 0) || ! (this_array$5 = b.array, (b.t > 0 ? this_array$5[0] & 1 : b.s) === 0)) {
					BigInteger$addTo$LBigInteger$LBigInteger$LBigInteger$(a, $this, a);
					BigInteger$subTo$LBigInteger$LBigInteger$LBigInteger$(b, m, b);
				}
				BigInteger$rShiftTo$LBigInteger$NLBigInteger$(a, 1, a);
			} else if (! (this_array$6 = b.array, (b.t > 0 ? this_array$6[0] & 1 : b.s) === 0)) {
				BigInteger$subTo$LBigInteger$LBigInteger$LBigInteger$(b, m, b);
			}
			BigInteger$rShiftTo$LBigInteger$NLBigInteger$(b, 1, b);
		}
		while ((this_array$11 = v.array, (v.t > 0 ? this_array$11[0] & 1 : v.s) === 0)) {
			BigInteger$rShiftTo$LBigInteger$NLBigInteger$(v, 1, v);
			if (ac) {
				if (! (this_array$8 = c.array, (c.t > 0 ? this_array$8[0] & 1 : c.s) === 0) || ! (this_array$9 = d.array, (d.t > 0 ? this_array$9[0] & 1 : d.s) === 0)) {
					BigInteger$addTo$LBigInteger$LBigInteger$LBigInteger$(c, $this, c);
					BigInteger$subTo$LBigInteger$LBigInteger$LBigInteger$(d, m, d);
				}
				BigInteger$rShiftTo$LBigInteger$NLBigInteger$(c, 1, c);
			} else if (! (this_array$10 = d.array, (d.t > 0 ? this_array$10[0] & 1 : d.s) === 0)) {
				BigInteger$subTo$LBigInteger$LBigInteger$LBigInteger$(d, m, d);
			}
			BigInteger$rShiftTo$LBigInteger$NLBigInteger$(d, 1, d);
		}
		if (BigInteger$compareTo$LBigInteger$LBigInteger$(u, v) >= 0) {
			BigInteger$subTo$LBigInteger$LBigInteger$LBigInteger$(u, v, u);
			if (ac) {
				BigInteger$subTo$LBigInteger$LBigInteger$LBigInteger$(a, c, a);
			}
			BigInteger$subTo$LBigInteger$LBigInteger$LBigInteger$(b, d, b);
		} else {
			BigInteger$subTo$LBigInteger$LBigInteger$LBigInteger$(v, u, v);
			if (ac) {
				BigInteger$subTo$LBigInteger$LBigInteger$LBigInteger$(c, a, c);
			}
			BigInteger$subTo$LBigInteger$LBigInteger$LBigInteger$(d, b, d);
		}
	}
	if (BigInteger$compareTo$LBigInteger$LBigInteger$(v, BigInteger.ONE) !== 0) {
		return BigInteger.ZERO;
	}
	if (BigInteger$compareTo$LBigInteger$LBigInteger$(d, m) >= 0) {
		r$6 = ({array: [], s: 0, t: 0});
		BigInteger$subTo$LBigInteger$LBigInteger$LBigInteger$(d, m, r$6);
		return r$6;
	}
	if ((this_array$13 = d.array, d.s < 0 ? -1 : d.t <= 0 || d.t === 1 && this_array$13[0] <= 0 ? 0 : 1) < 0) {
		BigInteger$addTo$LBigInteger$LBigInteger$LBigInteger$(d, m, d);
	} else {
		return d;
	}
	return ((this_array$14 = d.array, d.s < 0 ? -1 : d.t <= 0 || d.t === 1 && this_array$14[0] <= 0 ? 0 : 1) < 0 ? (r$8 = ({array: [], s: 0, t: 0}), BigInteger$addTo$LBigInteger$LBigInteger$LBigInteger$(d, m, r$8), r$8) : d);
};

BigInteger.modInverse$LBigInteger$LBigInteger$ = BigInteger$modInverse$LBigInteger$LBigInteger$;

function BigInteger$isProbablePrime$LBigInteger$N($this, t) {
	var i;
	var x;
	var x_array;
	var m;
	var j;
	var r$0$0;
	var this_array$0;
	x = ($this.s < 0 ? (r$0$0 = ({array: [], s: 0, t: 0}), BigInteger$subTo$LBigInteger$LBigInteger$LBigInteger$(BigInteger.ZERO, $this, r$0$0), r$0$0) : $this);
	x_array = x.array;
	if (x.t === 1 && x_array[0] <= BigInteger.lowprimes[BigInteger.lowprimes.length - 1]) {
		for (i = 0; i < BigInteger.lowprimes.length; ++ i) {
			if (x_array[0] === BigInteger.lowprimes[i]) {
				return true;
			}
		}
		return false;
	}
	this_array$0 = x.array;
	if ((x.t > 0 ? this_array$0[0] & 1 : x.s) === 0) {
		return false;
	}
	i = 1;
	while (i < BigInteger.lowprimes.length) {
		(m = BigInteger.lowprimes[i], j = i + 1);
		while (j < BigInteger.lowprimes.length && m < BigInteger.lplim) {
			m *= BigInteger.lowprimes[j++];
		}
		m = BigInteger$modInt$LBigInteger$N(x, m);
		while (i < j) {
			if (m % BigInteger.lowprimes[i++] === 0) {
				return false;
			}
		}
	}
	return BigInteger$millerRabin$LBigInteger$N(x, t);
};

BigInteger.isProbablePrime$LBigInteger$N = BigInteger$isProbablePrime$LBigInteger$N;

function BigInteger$millerRabin$LBigInteger$N($this, t) {
	var n1;
	var k;
	var r;
	var a;
	var i;
	var y;
	var j;
	var a$0;
	var r$0;
	var r$2;
	a$0 = BigInteger.ONE;
	r$0 = ({array: [], s: 0, t: 0});
	BigInteger$subTo$LBigInteger$LBigInteger$LBigInteger$($this, a$0, r$0);
	n1 = r$0;
	k = BigInteger$getLowestSetBit$LBigInteger$(r$0);
	if (k <= 0) {
		return false;
	}
	r$2 = ({array: [], s: 0, t: 0});
	if (k < 0) {
		BigInteger$lShiftTo$LBigInteger$NLBigInteger$(n1, - k, r$2);
	} else {
		BigInteger$rShiftTo$LBigInteger$NLBigInteger$(n1, k, r$2);
	}
	r = r$2;
	t = t + 1 >> 1;
	if (t > BigInteger.lowprimes.length) {
		t = BigInteger.lowprimes.length;
	}
	a = ({array: [], s: 0, t: 0});
	for (i = 0; i < t; ++ i) {
		BigInteger$fromInt$LBigInteger$N(a, BigInteger.lowprimes[i]);
		y = BigInteger$modPow$LBigInteger$LBigInteger$LBigInteger$(a, r, $this);
		if (BigInteger$compareTo$LBigInteger$LBigInteger$(y, BigInteger.ONE) !== 0 && BigInteger$compareTo$LBigInteger$LBigInteger$(y, n1) !== 0) {
			j = 1;
			while (j++ < k && BigInteger$compareTo$LBigInteger$LBigInteger$(y, n1) !== 0) {
				y = BigInteger$modPowInt$LBigInteger$NLBigInteger$(y, 2, $this);
				if (BigInteger$compareTo$LBigInteger$LBigInteger$(y, BigInteger.ONE) === 0) {
					return false;
				}
			}
			if (BigInteger$compareTo$LBigInteger$LBigInteger$(y, n1) !== 0) {
				return false;
			}
		}
	}
	return true;
};

BigInteger.millerRabin$LBigInteger$N = BigInteger$millerRabin$LBigInteger$N;

function Reducer() {
};

$__jsx_extend([Reducer], Object);
Reducer.prototype.$__jsx_implements_Reducer = true;

function Classic(m) {
	this.m = m;
};

$__jsx_extend([Classic], Object);
$__jsx_merge_interface(Classic, Reducer);

Classic.prototype.convert$LBigInteger$ = function (x) {
	return (x.s < 0 || BigInteger$compareTo$LBigInteger$LBigInteger$(x, this.m) >= 0 ? BigInteger$mod$LBigInteger$LBigInteger$(x, this.m) : x);
};


Classic.prototype.revert$LBigInteger$ = function (x) {
	return x;
};


Classic.prototype.reduce$LBigInteger$ = function (x) {
	BigInteger$divRemTo$LBigInteger$LBigInteger$LBigInteger$LBigInteger$(x, this.m, null, x);
};


Classic.prototype.mulTo$LBigInteger$LBigInteger$LBigInteger$ = function (x, y, r) {
	BigInteger$multiplyTo$LBigInteger$LBigInteger$LBigInteger$(x, y, r);
	BigInteger$divRemTo$LBigInteger$LBigInteger$LBigInteger$LBigInteger$(r, this.m, null, r);
};


Classic.prototype.sqrTo$LBigInteger$LBigInteger$ = function (x, r) {
	BigInteger$squareTo$LBigInteger$LBigInteger$(x, r);
	BigInteger$divRemTo$LBigInteger$LBigInteger$LBigInteger$LBigInteger$(r, this.m, null, r);
};


function Montgomery(m) {
	var mp$0;
	this.m = m;
	mp$0 = this.mp = BigInteger$invDigit$LBigInteger$(m);
	this.mpl = mp$0 & 0x7fff;
	this.mph = mp$0 >> 15;
	this.um = (1 << BigInteger.DB - 15) - 1;
	this.mt2 = 2 * m.t;
};

$__jsx_extend([Montgomery], Object);
$__jsx_merge_interface(Montgomery, Reducer);

Montgomery.prototype.convert$LBigInteger$ = function (x) {
	var r;
	var r$0$0;
	r = ({array: [], s: 0, t: 0});
	BigInteger$dlShiftTo$LBigInteger$NLBigInteger$(x.s < 0 ? (r$0$0 = ({array: [], s: 0, t: 0}), BigInteger$subTo$LBigInteger$LBigInteger$LBigInteger$(BigInteger.ZERO, x, r$0$0), r$0$0) : x, this.m.t, r);
	BigInteger$divRemTo$LBigInteger$LBigInteger$LBigInteger$LBigInteger$(r, this.m, null, r);
	if (x.s < 0 && BigInteger$compareTo$LBigInteger$LBigInteger$(r, BigInteger.ZERO) > 0) {
		BigInteger$subTo$LBigInteger$LBigInteger$LBigInteger$(this.m, r, r);
	}
	return r;
};


Montgomery.prototype.revert$LBigInteger$ = function (x) {
	var r;
	r = ({array: [], s: 0, t: 0});
	BigInteger$copyTo$LBigInteger$LBigInteger$(x, r);
	this.reduce$LBigInteger$(r);
	return r;
};


Montgomery.prototype.reduce$LBigInteger$ = function (x) {
	var x_array;
	var i;
	var j;
	var u0;
	var this_array$0;
	var c$0;
	var mpl$0;
	x_array = x.array;
	while (x.t <= this.mt2) {
		x_array[x.t++] = 0;
	}
	for (i = 0; i < this.m.t; ++ i) {
		j = x_array[i] & 0x7fff;
		u0 = j * (mpl$0 = this.mpl) + ((j * this.mph + (x_array[i] >> 15) * mpl$0 & this.um) << 15) & BigInteger.DM;
		j = i + this.m.t;
		x_array[j] += BigInteger.am(this.m.array, 0, u0, x, i, 0, this.m.t);
		while (x_array[j] >= BigInteger.DV) {
			x_array[j] -= BigInteger.DV;
			x_array[++ j]++;
		}
	}
	this_array$0 = x.array;
	c$0 = x.s & BigInteger.DM;
	while (x.t > 0 && this_array$0[x.t - 1] === c$0) {
		-- x.t;
	}
	BigInteger$drShiftTo$LBigInteger$NLBigInteger$(x, this.m.t, x);
	if (BigInteger$compareTo$LBigInteger$LBigInteger$(x, this.m) >= 0) {
		BigInteger$subTo$LBigInteger$LBigInteger$LBigInteger$(x, this.m, x);
	}
};


Montgomery.prototype.sqrTo$LBigInteger$LBigInteger$ = function (x, r) {
	BigInteger$squareTo$LBigInteger$LBigInteger$(x, r);
	this.reduce$LBigInteger$(r);
};


Montgomery.prototype.mulTo$LBigInteger$LBigInteger$LBigInteger$ = function (x, y, r) {
	BigInteger$multiplyTo$LBigInteger$LBigInteger$LBigInteger$(x, y, r);
	this.reduce$LBigInteger$(r);
};


function NullExp() {
};

$__jsx_extend([NullExp], Object);
$__jsx_merge_interface(NullExp, Reducer);

NullExp.prototype.convert$LBigInteger$ = function (x) {
	return x;
};


NullExp.prototype.revert$LBigInteger$ = function (x) {
	return x;
};


NullExp.prototype.reduce$LBigInteger$ = function (x) {
};


NullExp.prototype.mulTo$LBigInteger$LBigInteger$LBigInteger$ = function (x, y, r) {
	BigInteger$multiplyTo$LBigInteger$LBigInteger$LBigInteger$(x, y, r);
};


NullExp.prototype.sqrTo$LBigInteger$LBigInteger$ = function (x, r) {
	BigInteger$squareTo$LBigInteger$LBigInteger$(x, r);
};


function Barrett(m) {
	var this$0;
	var r$0;
	this.mu = null;
	this.m = null;
	this.r2 = ({array: [], s: 0, t: 0});
	this.q3 = ({array: [], s: 0, t: 0});
	BigInteger$dlShiftTo$LBigInteger$NLBigInteger$(BigInteger.ONE, 2 * m.t, this.r2);
	this$0 = this.r2;
	r$0 = ({array: [], s: 0, t: 0});
	BigInteger$divRemTo$LBigInteger$LBigInteger$LBigInteger$LBigInteger$(this$0, m, r$0, null);
	this.mu = r$0;
	this.m = m;
};

$__jsx_extend([Barrett], Object);
$__jsx_merge_interface(Barrett, Reducer);

Barrett.prototype.convert$LBigInteger$ = function (x) {
	var r;
	if (x.s < 0 || x.t > 2 * this.m.t) {
		return BigInteger$mod$LBigInteger$LBigInteger$(x, this.m);
	} else if (BigInteger$compareTo$LBigInteger$LBigInteger$(x, this.m) < 0) {
		return x;
	} else {
		r = ({array: [], s: 0, t: 0});
		BigInteger$copyTo$LBigInteger$LBigInteger$(x, r);
		this.reduce$LBigInteger$(r);
		return r;
	}
};


Barrett.prototype.revert$LBigInteger$ = function (x) {
	return x;
};


Barrett.prototype.reduce$LBigInteger$ = function (x) {
	var this_array$0;
	var c$0;
	var m$0;
	BigInteger$drShiftTo$LBigInteger$NLBigInteger$(x, this.m.t - 1, this.r2);
	if (x.t > this.m.t + 1) {
		x.t = this.m.t + 1;
		this_array$0 = x.array;
		c$0 = x.s & BigInteger.DM;
		while (x.t > 0 && this_array$0[x.t - 1] === c$0) {
			-- x.t;
		}
	}
	BigInteger$multiplyUpperTo$LBigInteger$LBigInteger$NLBigInteger$(this.mu, this.r2, this.m.t + 1, this.q3);
	BigInteger$multiplyLowerTo$LBigInteger$LBigInteger$NLBigInteger$(m$0 = this.m, this.q3, m$0.t + 1, this.r2);
	while (BigInteger$compareTo$LBigInteger$LBigInteger$(x, this.r2) < 0) {
		BigInteger$dAddOffset$LBigInteger$NN(x, 1, this.m.t + 1);
	}
	BigInteger$subTo$LBigInteger$LBigInteger$LBigInteger$(x, this.r2, x);
	while (BigInteger$compareTo$LBigInteger$LBigInteger$(x, this.m) >= 0) {
		BigInteger$subTo$LBigInteger$LBigInteger$LBigInteger$(x, this.m, x);
	}
};


Barrett.prototype.sqrTo$LBigInteger$LBigInteger$ = function (x, r) {
	BigInteger$squareTo$LBigInteger$LBigInteger$(x, r);
	this.reduce$LBigInteger$(r);
};


Barrett.prototype.mulTo$LBigInteger$LBigInteger$LBigInteger$ = function (x, y, r) {
	BigInteger$multiplyTo$LBigInteger$LBigInteger$LBigInteger$(x, y, r);
	this.reduce$LBigInteger$(r);
};


function Arcfour() {
	this.i = 0;
	this.j = 0;
	this.S = [];
};

$__jsx_extend([Arcfour], Object);
function Arcfour$init$LArcfour$AN($this, key) {
	var i;
	var j;
	var t;
	var S$0;
	for (i = 0; i < 256; ++ i) {
		$this.S[i] = i;
	}
	j = 0;
	for (i = 0; i < 256; ++ i) {
		j = j + (S$0 = $this.S)[i] + key[i % key.length] & 255;
		t = S$0[i];
		$this.S[i] = $this.S[j];
		$this.S[j] = t;
	}
	$this.i = 0;
	$this.j = 0;
};

Arcfour.init$LArcfour$AN = Arcfour$init$LArcfour$AN;

function Arcfour$next$LArcfour$($this) {
	var t;
	var i$0;
	var S$0;
	var S$1;
	i$0 = $this.i = $this.i + 1 & 255;
	$this.j = $this.j + (S$0 = $this.S)[i$0] & 255;
	t = S$0[i$0];
	$this.S[$this.i] = $this.S[$this.j];
	$this.S[$this.j] = t;
	return (S$1 = $this.S)[t + S$1[$this.i] & 255];
};

Arcfour.next$LArcfour$ = Arcfour$next$LArcfour$;

function RNG() {
};

$__jsx_extend([RNG], Object);
function RNG$init$() {
	var t;
	if (RNG.pool == null) {
		RNG.pool = [];
		RNG.pptr = 0;
		while (RNG.pptr < 256) {
			t = Math.floor(65536 * Math.random());
			RNG.pool[RNG.pptr++] = t >>> 8;
			RNG.pool[RNG.pptr++] = t & 255;
		}
		RNG.pptr = 0;
		RNG$seed_int$N(1122926989487);
	}
};

RNG.init$ = RNG$init$;

function RNG$newstate$() {
	return ({i: 0, j: 0, S: []});
};

RNG.newstate$ = RNG$newstate$;

function RNG$seed_int$N(x) {
	RNG.pool[RNG.pptr++] ^= x & 255;
	RNG.pool[RNG.pptr++] ^= x >> 8 & 255;
	RNG.pool[RNG.pptr++] ^= x >> 16 & 255;
	RNG.pool[RNG.pptr++] ^= x >> 24 & 255;
	if (RNG.pptr >= 256) {
		RNG.pptr -= 256;
	}
};

RNG.seed_int$N = RNG$seed_int$N;

function RNG$seed_time$() {
	RNG$seed_int$N(1122926989487);
};

RNG.seed_time$ = RNG$seed_time$;

function RNG$get_byte$() {
	if (RNG.state == null) {
		RNG$seed_int$N(1122926989487);
		RNG.state = ({i: 0, j: 0, S: []});
		Arcfour$init$LArcfour$AN(RNG.state, RNG.pool);
		for (RNG.pptr = 0; RNG.pptr < RNG.pool.length; ++ RNG.pptr) {
			RNG.pool[RNG.pptr] = 0;
		}
		RNG.pptr = 0;
	}
	return Arcfour$next$LArcfour$(RNG.state);
};

RNG.get_byte$ = RNG$get_byte$;

function RNG$get_bytes$AN(ba) {
	var i;
	for (i = 0; i < ba.length; ++ i) {
		ba[i] = RNG$get_byte$();
	}
};

RNG.get_bytes$AN = RNG$get_bytes$AN;

function SecureRandom() {
	RNG$init$();
};

$__jsx_extend([SecureRandom], Object);
SecureRandom.prototype.nextBytes$AN = function (ba) {
	var i$0;
	for (i$0 = 0; i$0 < ba.length; ++ i$0) {
		ba[i$0] = RNG$get_byte$();
	}
};


function SecureRandom$nextBytes$LSecureRandom$AN($this, ba) {
	var i$0;
	for (i$0 = 0; i$0 < ba.length; ++ i$0) {
		ba[i$0] = RNG$get_byte$();
	}
};

SecureRandom.nextBytes$LSecureRandom$AN = SecureRandom$nextBytes$LSecureRandom$AN;

function RSAKey() {
	this.n = null;
	this.e = 0;
	this.d = null;
	this.p = null;
	this.q = null;
	this.dmp1 = null;
	this.dmq1 = null;
	this.coeff = null;
};

$__jsx_extend([RSAKey], Object);
function RSAKey$setPublic$LRSAKey$USUS($this, N, E) {
	if (N != null && E != null && N.length > 0 && E.length > 0) {
		$this.n = new BigInteger$2(N, 16);
		$this.e = $__jsx_parseInt(E, 16);
	}
};

RSAKey.setPublic$LRSAKey$USUS = RSAKey$setPublic$LRSAKey$USUS;

function RSAKey$doPublic$LRSAKey$LBigInteger$($this, x) {
	return BigInteger$modPowInt$LBigInteger$NLBigInteger$(x, $this.e, $this.n);
};

RSAKey.doPublic$LRSAKey$LBigInteger$ = RSAKey$doPublic$LRSAKey$LBigInteger$;

function RSAKey$encrypt$LRSAKey$S($this, text) {
	var m;
	var c;
	var h;
	m = RSAKey$pkcs1pad2$SN(text, BigInteger$bitLength$LBigInteger$($this.n) + 7 >> 3);
	if (m == null) {
		return null;
	}
	c = BigInteger$modPowInt$LBigInteger$NLBigInteger$(m, $this.e, $this.n);
	if (c == null) {
		return null;
	}
	h = BigInteger$toString$LBigInteger$N(c, 16);
	return ((h.length & 1) === 0 ? h : "0" + h);
};

RSAKey.encrypt$LRSAKey$S = RSAKey$encrypt$LRSAKey$S;

function RSAKey$setPrivate$LRSAKey$USUSS($this, N, E, D) {
	if (N != null && E != null && N.length > 0 && E.length > 0) {
		$this.n = new BigInteger$2(N, 16);
		$this.e = $__jsx_parseInt(E, 16);
		$this.d = new BigInteger$2(D, 16);
	}
};

RSAKey.setPrivate$LRSAKey$USUSS = RSAKey$setPrivate$LRSAKey$USUSS;

function RSAKey$setPrivateEx$LRSAKey$USUSSSSSSS($this, N, E, D, P, Q, DP, DQ, C) {
	if (N != null && E != null && N.length > 0 && E.length > 0) {
		$this.n = new BigInteger$2(N, 16);
		$this.e = $__jsx_parseInt(E, 16);
		$this.d = new BigInteger$2(D, 16);
		$this.p = new BigInteger$2(P, 16);
		$this.q = new BigInteger$2(Q, 16);
		$this.dmp1 = new BigInteger$2(DP, 16);
		$this.dmq1 = new BigInteger$2(DQ, 16);
		$this.coeff = new BigInteger$2(C, 16);
	}
};

RSAKey.setPrivateEx$LRSAKey$USUSSSSSSS = RSAKey$setPrivateEx$LRSAKey$USUSSSSSSS;

function RSAKey$generate$LRSAKey$NS($this, B, E) {
	var rng;
	var qs;
	var ee;
	var t;
	var p1;
	var q1;
	var phi;
	var this$0;
	var a$0;
	var r$0;
	var this$1;
	var a$1;
	var r$1;
	var this$2;
	var a$2;
	var r$2;
	var this$4;
	var a$4;
	var r$4;
	var r$6;
	var this$6;
	var a$6;
	var r$8;
	var d$0;
	rng = new SecureRandom();
	qs = B >> 1;
	$this.e = $__jsx_parseInt(E, 16);
	ee = new BigInteger$2(E, 16);
	for (; ; ) {
		for (; ; ) {
			$this.p = new BigInteger$0(B - qs, 1, rng);
			if (BigInteger$compareTo$LBigInteger$LBigInteger$(BigInteger$gcd$LBigInteger$LBigInteger$((this$0 = $this.p, a$0 = BigInteger.ONE, r$0 = ({array: [], s: 0, t: 0}), BigInteger$subTo$LBigInteger$LBigInteger$LBigInteger$(this$0, a$0, r$0), r$0), ee), BigInteger.ONE) === 0 && BigInteger$isProbablePrime$LBigInteger$N($this.p, 10)) {
				break;
			}
		}
		for (; ; ) {
			$this.q = new BigInteger$0(qs, 1, rng);
			if (BigInteger$compareTo$LBigInteger$LBigInteger$(BigInteger$gcd$LBigInteger$LBigInteger$((this$1 = $this.q, a$1 = BigInteger.ONE, r$1 = ({array: [], s: 0, t: 0}), BigInteger$subTo$LBigInteger$LBigInteger$LBigInteger$(this$1, a$1, r$1), r$1), ee), BigInteger.ONE) === 0 && BigInteger$isProbablePrime$LBigInteger$N($this.q, 10)) {
				break;
			}
		}
		if (BigInteger$compareTo$LBigInteger$LBigInteger$($this.p, $this.q) <= 0) {
			t = $this.p;
			$this.p = $this.q;
			$this.q = t;
		}
		this$2 = $this.p;
		a$2 = BigInteger.ONE;
		r$2 = ({array: [], s: 0, t: 0});
		BigInteger$subTo$LBigInteger$LBigInteger$LBigInteger$(this$2, a$2, r$2);
		p1 = r$2;
		this$4 = $this.q;
		a$4 = BigInteger.ONE;
		r$4 = ({array: [], s: 0, t: 0});
		BigInteger$subTo$LBigInteger$LBigInteger$LBigInteger$(this$4, a$4, r$4);
		q1 = r$4;
		r$6 = ({array: [], s: 0, t: 0});
		BigInteger$multiplyTo$LBigInteger$LBigInteger$LBigInteger$(p1, q1, r$6);
		phi = r$6;
		if (BigInteger$compareTo$LBigInteger$LBigInteger$(BigInteger$gcd$LBigInteger$LBigInteger$(r$6, ee), BigInteger.ONE) === 0) {
			this$6 = $this.p;
			a$6 = $this.q;
			r$8 = ({array: [], s: 0, t: 0});
			BigInteger$multiplyTo$LBigInteger$LBigInteger$LBigInteger$(this$6, a$6, r$8);
			$this.n = r$8;
			d$0 = $this.d = BigInteger$modInverse$LBigInteger$LBigInteger$(ee, phi);
			$this.dmp1 = BigInteger$mod$LBigInteger$LBigInteger$(d$0, p1);
			$this.dmq1 = BigInteger$mod$LBigInteger$LBigInteger$($this.d, q1);
			$this.coeff = BigInteger$modInverse$LBigInteger$LBigInteger$($this.q, $this.p);
			break;
		}
	}
};

RSAKey.generate$LRSAKey$NS = RSAKey$generate$LRSAKey$NS;

function RSAKey$doPrivate$LRSAKey$LBigInteger$($this, x) {
	var xp;
	var xq;
	var a$0;
	var r$0;
	var this$0;
	var r$2;
	var r$3;
	var this$1;
	var a$2;
	var r$4;
	var this$4;
	var a$4;
	var r$7;
	if ($this.p == null || $this.q == null) {
		return BigInteger$modPow$LBigInteger$LBigInteger$LBigInteger$(x, $this.d, $this.n);
	}
	xp = BigInteger$modPow$LBigInteger$LBigInteger$LBigInteger$(BigInteger$mod$LBigInteger$LBigInteger$(x, $this.p), $this.dmp1, $this.p);
	xq = BigInteger$modPow$LBigInteger$LBigInteger$LBigInteger$(BigInteger$mod$LBigInteger$LBigInteger$(x, $this.q), $this.dmq1, $this.q);
	while (BigInteger$compareTo$LBigInteger$LBigInteger$(xp, xq) < 0) {
		a$0 = $this.p;
		r$0 = ({array: [], s: 0, t: 0});
		BigInteger$addTo$LBigInteger$LBigInteger$LBigInteger$(xp, a$0, r$0);
		xp = r$0;
	}
	this$4 = BigInteger$mod$LBigInteger$LBigInteger$((this$1 = (r$3 = ({array: [], s: 0, t: 0}), BigInteger$subTo$LBigInteger$LBigInteger$LBigInteger$(xp, xq, r$3), r$3), a$2 = $this.coeff, r$4 = ({array: [], s: 0, t: 0}), BigInteger$multiplyTo$LBigInteger$LBigInteger$LBigInteger$(this$1, a$2, r$4), r$4), $this.p);
	a$4 = $this.q;
	r$7 = ({array: [], s: 0, t: 0});
	BigInteger$multiplyTo$LBigInteger$LBigInteger$LBigInteger$(this$4, a$4, r$7);
	this$0 = r$7;
	r$2 = ({array: [], s: 0, t: 0});
	BigInteger$addTo$LBigInteger$LBigInteger$LBigInteger$(this$0, xq, r$2);
	return r$2;
};

RSAKey.doPrivate$LRSAKey$LBigInteger$ = RSAKey$doPrivate$LRSAKey$LBigInteger$;

function RSAKey$decrypt$LRSAKey$S($this, ctext) {
	var c;
	var m;
	c = new BigInteger$2(ctext, 16);
	m = RSAKey$doPrivate$LRSAKey$LBigInteger$($this, c);
	return (m == null ? null : RSAKey$pkcs1unpad2$LBigInteger$N(m, BigInteger$bitLength$LBigInteger$($this.n) + 7 >> 3));
};

RSAKey.decrypt$LRSAKey$S = RSAKey$decrypt$LRSAKey$S;

function RSAKey$pkcs1pad2$SN(s, n) {
	var ba;
	var i;
	var x;
	var i$0$0;
	if (n < s.length + 11) {
		return null;
	}
	ba = [];
	i = s.length - 1;
	while (i >= 0 && n > 0) {
		ba[-- n] = s.charCodeAt(i--);
	}
	ba[-- n] = 0;
	new SecureRandom();
	x = [];
	while (n > 2) {
		x[0] = 0;
		while (x[0] === 0) {
			for (i$0$0 = 0; i$0$0 < x.length; ++ i$0$0) {
				x[i$0$0] = RNG$get_byte$();
			}
		}
		ba[-- n] = x[0];
	}
	ba[-- n] = 2;
	ba[-- n] = 0;
	return new BigInteger$1(ba);
};

RSAKey.pkcs1pad2$SN = RSAKey$pkcs1pad2$SN;

function RSAKey$pkcs1unpad2$LBigInteger$N(d, n) {
	var b;
	var i;
	var ret;
	b = BigInteger$toByteArray$LBigInteger$(d);
	i = 0;
	while (i < b.length && b[i] === 0) {
		++ i;
	}
	if (b.length - i !== n - 1 || b[i] !== 2) {
		return null;
	}
	++ i;
	while (b[i] !== 0) {
		if (++ i >= b.length) {
			return null;
		}
	}
	ret = "";
	while (++ i < b.length) {
		ret += String.fromCharCode(b[i]);
	}
	return ret;
};

RSAKey.pkcs1unpad2$LBigInteger$N = RSAKey$pkcs1unpad2$LBigInteger$N;

function RayTrace() {
	var $this = this;
	new BenchmarkSuite('RayTrace', 739989, [ new Benchmark('RayTrace', (function () {
		Main$0$renderScene$();
	})) ]);
};

$__jsx_extend([RayTrace], Object);
function Color() {
	this.red = 0.0;
	this.green = 0.0;
	this.blue = 0.0;
};

function Color$0(r, g, b) {
	this.red = r;
	this.green = g;
	this.blue = b;
};

$__jsx_extend([Color, Color$0], Object);
function Color$add$LColor$LColor$(c1, c2) {
	var result;
	result = new Color$0(0, 0, 0);
	result.red = c1.red + c2.red;
	result.green = c1.green + c2.green;
	result.blue = c1.blue + c2.blue;
	return result;
};

Color.add$LColor$LColor$ = Color$add$LColor$LColor$;

function Color$addScalar$LColor$N(c1, s) {
	var result;
	result = new Color$0(0, 0, 0);
	result.red = c1.red + s;
	result.green = c1.green + s;
	result.blue = c1.blue + s;
	Color$limit$LColor$(result);
	return result;
};

Color.addScalar$LColor$N = Color$addScalar$LColor$N;

function Color$subtract$LColor$LColor$(c1, c2) {
	var result;
	result = new Color$0(0, 0, 0);
	result.red = c1.red - c2.red;
	result.green = c1.green - c2.green;
	result.blue = c1.blue - c2.blue;
	return result;
};

Color.subtract$LColor$LColor$ = Color$subtract$LColor$LColor$;

function Color$multiply$LColor$LColor$(c1, c2) {
	var result;
	result = new Color$0(0, 0, 0);
	result.red = c1.red * c2.red;
	result.green = c1.green * c2.green;
	result.blue = c1.blue * c2.blue;
	return result;
};

Color.multiply$LColor$LColor$ = Color$multiply$LColor$LColor$;

function Color$multiplyScalar$LColor$N(c1, f) {
	var result;
	result = new Color$0(0, 0, 0);
	result.red = c1.red * f;
	result.green = c1.green * f;
	result.blue = c1.blue * f;
	return result;
};

Color.multiplyScalar$LColor$N = Color$multiplyScalar$LColor$N;

function Color$divideFactor$LColor$N(c1, f) {
	var result;
	result = new Color$0(0, 0, 0);
	result.red = c1.red / f;
	result.green = c1.green / f;
	result.blue = c1.blue / f;
	return result;
};

Color.divideFactor$LColor$N = Color$divideFactor$LColor$N;

Color.prototype.limit$ = function () {
	this.red = (this.red > 0.0 ? this.red > 1.0 ? 1.0 : this.red : 0.0);
	this.green = (this.green > 0.0 ? this.green > 1.0 ? 1.0 : this.green : 0.0);
	this.blue = (this.blue > 0.0 ? this.blue > 1.0 ? 1.0 : this.blue : 0.0);
};


function Color$limit$LColor$($this) {
	$this.red = ($this.red > 0.0 ? $this.red > 1.0 ? 1.0 : $this.red : 0.0);
	$this.green = ($this.green > 0.0 ? $this.green > 1.0 ? 1.0 : $this.green : 0.0);
	$this.blue = ($this.blue > 0.0 ? $this.blue > 1.0 ? 1.0 : $this.blue : 0.0);
};

Color.limit$LColor$ = Color$limit$LColor$;

Color.prototype.distance$LColor$ = function (color) {
	var d;
	var x$0;
	var x$1;
	var x$2;
	d = (x$0 = this.red - color.red, x$0 >= 0 ? x$0 : - x$0) + (x$1 = this.green - color.green, x$1 >= 0 ? x$1 : - x$1) + (x$2 = this.blue - color.blue, x$2 >= 0 ? x$2 : - x$2);
	return d;
};


function Color$distance$LColor$LColor$($this, color) {
	var d;
	var x$0;
	var x$1;
	var x$2;
	d = (x$0 = $this.red - color.red, x$0 >= 0 ? x$0 : - x$0) + (x$1 = $this.green - color.green, x$1 >= 0 ? x$1 : - x$1) + (x$2 = $this.blue - color.blue, x$2 >= 0 ? x$2 : - x$2);
	return d;
};

Color.distance$LColor$LColor$ = Color$distance$LColor$LColor$;

function Color$blend$LColor$LColor$N(c1, c2, w) {
	var result;
	var f$0;
	var result$0;
	var result$1;
	result = new Color$0(0, 0, 0);
	result = Color$add$LColor$LColor$((f$0 = 1 - w, result$0 = new Color$0(0, 0, 0), result$0.red = c1.red * f$0, result$0.green = c1.green * f$0, result$0.blue = c1.blue * f$0, result$0), (result$1 = new Color$0(0, 0, 0), result$1.red = c2.red * w, result$1.green = c2.green * w, result$1.blue = c2.blue * w, result$1));
	return result;
};

Color.blend$LColor$LColor$N = Color$blend$LColor$LColor$N;

Color.prototype.brightness$ = function () {
	var r;
	var g;
	var b;
	r = Math.floor(this.red * 255);
	g = Math.floor(this.green * 255);
	b = Math.floor(this.blue * 255);
	return r * 77 + g * 150 + b * 29 >> 8;
};


function Color$brightness$LColor$($this) {
	var r;
	var g;
	var b;
	r = Math.floor($this.red * 255);
	g = Math.floor($this.green * 255);
	b = Math.floor($this.blue * 255);
	return r * 77 + g * 150 + b * 29 >> 8;
};

Color.brightness$LColor$ = Color$brightness$LColor$;

Color.prototype.toString = function () {
	var r;
	var g;
	var b;
	r = Math.floor(this.red * 255);
	g = Math.floor(this.green * 255);
	b = Math.floor(this.blue * 255);
	return "rgb(" + (r + "") + "," + (g + "") + "," + (b + "") + ")";
};


function Light(pos, color) {
	this.position = pos;
	this.color = color;
	this.intensity = 10.0;
};

function Light$0(pos, color, intensity) {
	this.position = pos;
	this.color = color;
	this.intensity = intensity;
};

$__jsx_extend([Light, Light$0], Object);
Light.prototype.toString = function () {
	var position$0;
	return 'Light [' + ((position$0 = this.position).x + "") + ',' + (position$0.y + "") + ',' + (position$0.z + "") + ']';
};


function Vector() {
	this.x = 0;
	this.y = 0;
	this.z = 0;
};

function Vector$0(x, y, z) {
	this.x = x;
	this.y = y;
	this.z = z;
};

$__jsx_extend([Vector, Vector$0], Object);
Vector.prototype.copy$LVector$ = function (vector) {
	this.x = vector.x;
	this.y = vector.y;
	this.z = vector.z;
};


function Vector$copy$LVector$LVector$($this, vector) {
	$this.x = vector.x;
	$this.y = vector.y;
	$this.z = vector.z;
};

Vector.copy$LVector$LVector$ = Vector$copy$LVector$LVector$;

Vector.prototype.normalize$ = function () {
	var m;
	var x$0;
	var y$0;
	var z$0;
	m = Math.sqrt((x$0 = this.x) * x$0 + (y$0 = this.y) * y$0 + (z$0 = this.z) * z$0);
	return new Vector$0(this.x / m, this.y / m, this.z / m);
};


function Vector$normalize$LVector$($this) {
	var m;
	var x$0;
	var y$0;
	var z$0;
	m = Math.sqrt((x$0 = $this.x) * x$0 + (y$0 = $this.y) * y$0 + (z$0 = $this.z) * z$0);
	return new Vector$0($this.x / m, $this.y / m, $this.z / m);
};

Vector.normalize$LVector$ = Vector$normalize$LVector$;

Vector.prototype.magnitude$ = function () {
	var x$0;
	var y$0;
	var z$0;
	return Math.sqrt((x$0 = this.x) * x$0 + (y$0 = this.y) * y$0 + (z$0 = this.z) * z$0);
};


function Vector$magnitude$LVector$($this) {
	var x$0;
	var y$0;
	var z$0;
	return Math.sqrt((x$0 = $this.x) * x$0 + (y$0 = $this.y) * y$0 + (z$0 = $this.z) * z$0);
};

Vector.magnitude$LVector$ = Vector$magnitude$LVector$;

Vector.prototype.cross$LVector$ = function (w) {
	var z$0;
	var z$1;
	var y$0;
	var x$0;
	var x$1;
	var y$1;
	return new Vector$0(- (z$0 = this.z) * (y$1 = w.y) + (y$0 = this.y) * (z$1 = w.z), z$0 * (x$0 = w.x) - (x$1 = this.x) * z$1, - y$0 * x$0 + x$1 * y$1);
};


function Vector$cross$LVector$LVector$($this, w) {
	var z$0;
	var z$1;
	var y$0;
	var x$0;
	var x$1;
	var y$1;
	return new Vector$0(- (z$0 = $this.z) * (y$1 = w.y) + (y$0 = $this.y) * (z$1 = w.z), z$0 * (x$0 = w.x) - (x$1 = $this.x) * z$1, - y$0 * x$0 + x$1 * y$1);
};

Vector.cross$LVector$LVector$ = Vector$cross$LVector$LVector$;

Vector.prototype.dot$LVector$ = function (w) {
	return this.x * w.x + this.y * w.y + this.z * w.z;
};


function Vector$dot$LVector$LVector$($this, w) {
	return $this.x * w.x + $this.y * w.y + $this.z * w.z;
};

Vector.dot$LVector$LVector$ = Vector$dot$LVector$LVector$;

function Vector$add$LVector$LVector$(v, w) {
	return new Vector$0(w.x + v.x, w.y + v.y, w.z + v.z);
};

Vector.add$LVector$LVector$ = Vector$add$LVector$LVector$;

function Vector$subtract$LVector$LVector$(v, w) {
	if (! w || ! v) {
		throw 'Vectors must be defined [' + ('Vector [' + (v.x + "") + ',' + (v.y + "") + ',' + (v.z + "") + ']') + ',' + ('Vector [' + (w.x + "") + ',' + (w.y + "") + ',' + (w.z + "") + ']') + ']';
	}
	return new Vector$0(v.x - w.x, v.y - w.y, v.z - w.z);
};

Vector.subtract$LVector$LVector$ = Vector$subtract$LVector$LVector$;

function Vector$multiplyVector$LVector$LVector$(v, w) {
	return new Vector$0(v.x * w.x, v.y * w.y, v.z * w.z);
};

Vector.multiplyVector$LVector$LVector$ = Vector$multiplyVector$LVector$LVector$;

function Vector$multiplyScalar$LVector$N(v, w) {
	return new Vector$0(v.x * w, v.y * w, v.z * w);
};

Vector.multiplyScalar$LVector$N = Vector$multiplyScalar$LVector$N;

Vector.prototype.toString = function () {
	return 'Vector [' + (this.x + "") + ',' + (this.y + "") + ',' + (this.z + "") + ']';
};


function Ray(pos, dir) {
	this.position = pos;
	this.direction = dir;
};

$__jsx_extend([Ray], Object);
Ray.prototype.toString = function () {
	var this$0;
	var this$1;
	return 'Ray [' + (this$0 = this.position, 'Vector [' + (this$0.x + "") + ',' + (this$0.y + "") + ',' + (this$0.z + "") + ']') + ',' + (this$1 = this.direction, 'Vector [' + (this$1.x + "") + ',' + (this$1.y + "") + ',' + (this$1.z + "") + ']') + ']';
};


function Scene() {
	this.camera = new Camera(new Vector$0(0, 0, -5), new Vector$0(0, 0, 1), new Vector$0(0, 1, 0));
	this.shapes = [];
	this.lights = [];
	this.background = ({color: new Color$0(0, 0, 0.5), ambience: 0.2});
};

$__jsx_extend([Scene], Object);
function BaseMaterial() {
	this.gloss = 2.0;
	this.transparency = 0.0;
	this.reflection = 0.0;
	this.refraction = 0.50;
	this.hasTexture = false;
};

$__jsx_extend([BaseMaterial], Object);
BaseMaterial.prototype.wrapUp$N = function (t) {
	t = t % 2.0;
	if (t < -1) {
		t += 2.0;
	}
	if (t >= 1) {
		t -= 2.0;
	}
	return t;
};


function BaseMaterial$wrapUp$LBaseMaterial$N($this, t) {
	t = t % 2.0;
	if (t < -1) {
		t += 2.0;
	}
	if (t >= 1) {
		t -= 2.0;
	}
	return t;
};

BaseMaterial.wrapUp$LBaseMaterial$N = BaseMaterial$wrapUp$LBaseMaterial$N;

BaseMaterial.prototype.toString = function () {
	return 'Material [gloss=' + (this.gloss + "") + ', transparency=' + (this.transparency + "") + ', hasTexture=' + (this.hasTexture + "") + ']';
};


function Solid(color, reflection, refraction, transparency, gloss) {
	this.refraction = 0.50;
	this.color = color;
	this.reflection = reflection;
	this.transparency = transparency;
	this.gloss = gloss;
	this.hasTexture = false;
};

$__jsx_extend([Solid], BaseMaterial);
Solid.prototype.getColor$NN = function (u, v) {
	return this.color;
};


Solid.prototype.toString = function () {
	return 'SolidMaterial [gloss=' + (this.gloss + "") + ', transparency=' + (this.transparency + "") + ', hasTexture=' + (this.hasTexture + "") + ']';
};


function Chessboard(colorEven, colorOdd, reflection, transparency, gloss, density) {
	this.refraction = 0.50;
	this.colorEven = colorEven;
	this.colorOdd = colorOdd;
	this.reflection = reflection;
	this.transparency = transparency;
	this.gloss = gloss;
	this.density = density;
	this.hasTexture = true;
};

$__jsx_extend([Chessboard], BaseMaterial);
Chessboard.prototype.getColor$NN = function (u, v) {
	var t;
	t = BaseMaterial$wrapUp$LBaseMaterial$N(this, u * this.density) * BaseMaterial$wrapUp$LBaseMaterial$N(this, v * this.density);
	return (t < 0.0 ? this.colorEven : this.colorOdd);
};


Chessboard.prototype.toString = function () {
	return 'ChessMaterial [gloss=' + (this.gloss + "") + ', transparency=' + (this.transparency + "") + ', hasTexture=' + (this.hasTexture + "") + ']';
};


function Shape() {
	this.position = null;
	this.material = null;
};

$__jsx_extend([Shape], Object);
function Sphere(pos, radius, material) {
	this.radius = radius;
	this.position = pos;
	this.material = material;
};

$__jsx_extend([Sphere], Shape);
Sphere.prototype.intersect$LRay$ = function (ray) {
	var info;
	var dst;
	var B;
	var C;
	var D;
	var w$0;
	var v$0;
	var v$3;
	var w$5;
	var w$2$x$0;
	var w$2$y$0;
	var w$2$z$0;
	var distance$0;
	var position$0;
	var x$0;
	var y$0;
	var z$0;
	var radius$0;
	info = new IntersectionInfo();
	info.shape = this;
	dst = Vector$subtract$LVector$LVector$(ray.position, this.position);
	w$0 = ray.direction;
	B = (x$0 = dst.x) * w$0.x + (y$0 = dst.y) * w$0.y + (z$0 = dst.z) * w$0.z;
	C = x$0 * x$0 + y$0 * y$0 + z$0 * z$0 - (radius$0 = this.radius) * radius$0;
	D = B * B - C;
	if (D > 0) {
		info.isHit = true;
		distance$0 = info.distance = - B - Math.sqrt(D);
		v$0 = ray.position;
		v$3 = ray.direction;
		w$5 = distance$0;
		w$2$x$0 = v$3.x * w$5;
		w$2$y$0 = v$3.y * w$5;
		w$2$z$0 = v$3.z * w$5;
		position$0 = info.position = new Vector$0(w$2$x$0 + v$0.x, w$2$y$0 + v$0.y, w$2$z$0 + v$0.z);
		info.normal = Vector$normalize$LVector$(Vector$subtract$LVector$LVector$(position$0, this.position));
		info.color = this.material.getColor$NN(0, 0);
	} else {
		info.isHit = false;
	}
	return info;
};


Sphere.prototype.toString = function () {
	var this$0;
	return 'Sphere [position=' + (this$0 = this.position, 'Vector [' + (this$0.x + "") + ',' + (this$0.y + "") + ',' + (this$0.z + "") + ']') + ', radius=' + (this.radius + "") + ']';
};


function Plane(pos, d, material) {
	this.position = pos;
	this.d = d;
	this.material = material;
};

$__jsx_extend([Plane], Shape);
Plane.prototype.intersect$LRay$ = function (ray) {
	var info;
	var Vd;
	var t;
	var vU;
	var vV;
	var u;
	var v;
	var this$0;
	var w$0;
	var this$2;
	var w$2;
	var v$0;
	var this$3;
	var v$3;
	var w$3$x$0;
	var w$3$y$0;
	var w$3$z$0;
	var position$0;
	var position$1;
	info = new IntersectionInfo();
	this$0 = this.position;
	w$0 = ray.direction;
	Vd = this$0.x * w$0.x + this$0.y * w$0.y + this$0.z * w$0.z;
	if (Vd === 0) {
		return info;
	}
	t = - ((this$2 = this.position, w$2 = ray.position, this$2.x * w$2.x + this$2.y * w$2.y + this$2.z * w$2.z) + this.d) / Vd;
	if (t <= 0) {
		return info;
	}
	info.shape = this;
	info.isHit = true;
	v$0 = ray.position;
	v$3 = ray.direction;
	w$3$x$0 = v$3.x * t;
	w$3$y$0 = v$3.y * t;
	w$3$z$0 = v$3.z * t;
	info.position = new Vector$0(w$3$x$0 + v$0.x, w$3$y$0 + v$0.y, w$3$z$0 + v$0.z);
	info.normal = this.position;
	info.distance = t;
	if (this.material.hasTexture) {
		vU = new Vector$0((position$0 = this.position).y, position$0.z, - position$0.x);
		vV = Vector$cross$LVector$LVector$(vU, this.position);
		this$3 = position$1 = info.position;
		u = this$3.x * vU.x + this$3.y * vU.y + this$3.z * vU.z;
		v = position$1.x * vV.x + position$1.y * vV.y + position$1.z * vV.z;
		info.color = this.material.getColor$NN(u, v);
	} else {
		info.color = this.material.getColor$NN(0, 0);
	}
	return info;
};


Plane.prototype.toString = function () {
	var this$0;
	return 'Plane [' + (this$0 = this.position, 'Vector [' + (this$0.x + "") + ',' + (this$0.y + "") + ',' + (this$0.z + "") + ']') + ', d=' + (this.d + "") + ']';
};


function IntersectionInfo() {
	this.isHit = false;
	this.hitCount = 0;
	this.shape = null;
	this.position = null;
	this.normal = null;
	this.distance = null;
	this.color = new Color$0(0, 0, 0);
};

$__jsx_extend([IntersectionInfo], Object);
IntersectionInfo.prototype.toString = function () {
	var this$0;
	return 'Intersection [' + (this$0 = this.position, 'Vector [' + (this$0.x + "") + ',' + (this$0.y + "") + ',' + (this$0.z + "") + ']') + ']';
};


function Camera(pos, lookAt, up) {
	var v$0;
	var w$0;
	this.position = pos;
	this.lookAt = lookAt;
	this.up = up;
	this.equator = Vector$cross$LVector$LVector$(Vector$normalize$LVector$(lookAt), this.up);
	v$0 = this.position;
	w$0 = this.lookAt;
	this.screen = new Vector$0(w$0.x + v$0.x, w$0.y + v$0.y, w$0.z + v$0.z);
};

$__jsx_extend([Camera], Object);
Camera.prototype.getRay$NN = function (vx, vy) {
	var pos;
	var dir;
	var ray;
	var v$0;
	var v$1;
	pos = Vector$subtract$LVector$LVector$(this.screen, Vector$subtract$LVector$LVector$((v$0 = this.equator, new Vector$0(v$0.x * vx, v$0.y * vx, v$0.z * vx)), (v$1 = this.up, new Vector$0(v$1.x * vy, v$1.y * vy, v$1.z * vy))));
	pos.y = pos.y * -1;
	dir = Vector$subtract$LVector$LVector$(pos, this.position);
	ray = new Ray(pos, Vector$normalize$LVector$(dir));
	return ray;
};


function Camera$getRay$LCamera$NN($this, vx, vy) {
	var pos;
	var dir;
	var ray;
	var v$0;
	var v$1;
	pos = Vector$subtract$LVector$LVector$($this.screen, Vector$subtract$LVector$LVector$((v$0 = $this.equator, new Vector$0(v$0.x * vx, v$0.y * vx, v$0.z * vx)), (v$1 = $this.up, new Vector$0(v$1.x * vy, v$1.y * vy, v$1.z * vy))));
	pos.y = pos.y * -1;
	dir = Vector$subtract$LVector$LVector$(pos, $this.position);
	ray = new Ray(pos, Vector$normalize$LVector$(dir));
	return ray;
};

Camera.getRay$LCamera$NN = Camera$getRay$LCamera$NN;

Camera.prototype.toString = function () {
	return 'Ray []';
};


function Background(color, ambience) {
	this.color = color;
	this.ambience = ambience;
};

$__jsx_extend([Background], Object);
function Options() {
	this.canvasHeight = 100;
	this.canvasWidth = 100;
	this.pixelWidth = 2;
	this.pixelHeight = 2;
	this.renderDiffuse = false;
	this.renderShadows = false;
	this.renderHighlights = false;
	this.renderReflections = false;
	this.rayDepth = 2;
};

$__jsx_extend([Options], Object);
function Engine(options) {
	var options$0;
	this.canvas = null;
	options$0 = this.options = options;
	options$0.canvasHeight /= options$0.pixelHeight;
	options$0.canvasWidth /= options$0.pixelWidth;
};

$__jsx_extend([Engine], Object);
Engine.prototype.setPixel$NNLColor$ = function (x, y, color) {
	var pxW;
	var pxH;
	var options$0;
	pxW = (options$0 = this.options).pixelWidth;
	pxH = options$0.pixelHeight;
	if (this.canvas) {
		this.canvas.fillStyle = color.toString();
		this.canvas.fillRect(x * pxW, y * pxH, pxW, pxH);
	} else if (x === y) {
		Main$0.checkNumber += Color$brightness$LColor$(color);
	}
};


function Engine$setPixel$LEngine$NNLColor$($this, x, y, color) {
	var pxW;
	var pxH;
	var options$0;
	pxW = (options$0 = $this.options).pixelWidth;
	pxH = options$0.pixelHeight;
	if ($this.canvas) {
		$this.canvas.fillStyle = color.toString();
		$this.canvas.fillRect(x * pxW, y * pxH, pxW, pxH);
	} else if (x === y) {
		Main$0.checkNumber += Color$brightness$LColor$(color);
	}
};

Engine.setPixel$LEngine$NNLColor$ = Engine$setPixel$LEngine$NNLColor$;

Engine.prototype.renderScene$LScene$LHTMLCanvasElement$ = function (scene, canvas) {
	var canvasHeight;
	var canvasWidth;
	var y;
	var x;
	var yp;
	var xp;
	var ray;
	var color;
	var options$0;
	Main$0.checkNumber = 0;
	if (canvas) {
		this.canvas = canvas.getContext("2d");
	} else {
		this.canvas = null;
	}
	canvasHeight = (options$0 = this.options).canvasHeight;
	canvasWidth = options$0.canvasWidth;
	for (y = 0; y < canvasHeight; y++) {
		for (x = 0; x < canvasWidth; x++) {
			yp = y / canvasHeight * 2 - 1;
			xp = x / canvasWidth * 2 - 1;
			ray = Camera$getRay$LCamera$NN(scene.camera, xp, yp);
			color = Engine$getPixelColor$LEngine$LRay$LScene$(this, ray, scene);
			Engine$setPixel$LEngine$NNLColor$(this, x, y, color);
		}
	}
	if (Main$0.checkNumber !== 2321) {
		throw new Error("Scene rendered incorrectly");
	}
};


function Engine$renderScene$LEngine$LScene$LHTMLCanvasElement$($this, scene, canvas) {
	var canvasHeight;
	var canvasWidth;
	var y;
	var x;
	var yp;
	var xp;
	var ray;
	var color;
	var options$0;
	Main$0.checkNumber = 0;
	if (canvas) {
		$this.canvas = canvas.getContext("2d");
	} else {
		$this.canvas = null;
	}
	canvasHeight = (options$0 = $this.options).canvasHeight;
	canvasWidth = options$0.canvasWidth;
	for (y = 0; y < canvasHeight; y++) {
		for (x = 0; x < canvasWidth; x++) {
			yp = y / canvasHeight * 2 - 1;
			xp = x / canvasWidth * 2 - 1;
			ray = Camera$getRay$LCamera$NN(scene.camera, xp, yp);
			color = Engine$getPixelColor$LEngine$LRay$LScene$($this, ray, scene);
			Engine$setPixel$LEngine$NNLColor$($this, x, y, color);
		}
	}
	if (Main$0.checkNumber !== 2321) {
		throw new Error("Scene rendered incorrectly");
	}
};

Engine.renderScene$LEngine$LScene$LHTMLCanvasElement$ = Engine$renderScene$LEngine$LScene$LHTMLCanvasElement$;

Engine.prototype.getPixelColor$LRay$LScene$ = function (ray, scene) {
	var info;
	var color;
	info = Engine$testIntersection$LEngine$LRay$LScene$LShape$(this, ray, scene, null);
	if (info.isHit) {
		color = Engine$rayTrace$LEngine$LIntersectionInfo$LRay$LScene$N(this, info, ray, scene, 0);
		return color;
	}
	return scene.background.color;
};


function Engine$getPixelColor$LEngine$LRay$LScene$($this, ray, scene) {
	var info;
	var color;
	info = Engine$testIntersection$LEngine$LRay$LScene$LShape$($this, ray, scene, null);
	if (info.isHit) {
		color = Engine$rayTrace$LEngine$LIntersectionInfo$LRay$LScene$N($this, info, ray, scene, 0);
		return color;
	}
	return scene.background.color;
};

Engine.getPixelColor$LEngine$LRay$LScene$ = Engine$getPixelColor$LEngine$LRay$LScene$;

Engine.prototype.testIntersection$LRay$LScene$LShape$ = function (ray, scene, exclude) {
	var hits;
	var best;
	var i;
	var shape;
	var info;
	var distance$0;
	hits = 0;
	best = new IntersectionInfo();
	best.distance = 2000;
	for (i = 0; i < scene.shapes.length; i++) {
		shape = scene.shapes[i];
		if (shape != exclude) {
			info = shape.intersect$LRay$(ray);
			if (info.isHit && (distance$0 = info.distance) >= 0 && distance$0 < best.distance) {
				best = info;
				hits++;
			}
		}
	}
	best.hitCount = hits;
	return best;
};


function Engine$testIntersection$LEngine$LRay$LScene$LShape$($this, ray, scene, exclude) {
	var hits;
	var best;
	var i;
	var shape;
	var info;
	var distance$0;
	hits = 0;
	best = new IntersectionInfo();
	best.distance = 2000;
	for (i = 0; i < scene.shapes.length; i++) {
		shape = scene.shapes[i];
		if (shape != exclude) {
			info = shape.intersect$LRay$(ray);
			if (info.isHit && (distance$0 = info.distance) >= 0 && distance$0 < best.distance) {
				best = info;
				hits++;
			}
		}
	}
	best.hitCount = hits;
	return best;
};

Engine.testIntersection$LEngine$LRay$LScene$LShape$ = Engine$testIntersection$LEngine$LRay$LScene$LShape$;

Engine.prototype.getReflectionRay$LVector$LVector$LVector$ = function (P, N, V) {
	var c1;
	var R1;
	var w$1;
	var v$0$x$0;
	var v$0$y$0;
	var v$0$z$0;
	var x$0;
	var y$0;
	var z$0;
	var x$1;
	var y$1;
	var z$1;
	c1 = - ((x$0 = N.x) * (x$1 = V.x) + (y$0 = N.y) * (y$1 = V.y) + (z$0 = N.z) * (z$1 = V.z));
	w$1 = 2 * c1;
	v$0$x$0 = x$0 * w$1;
	v$0$y$0 = y$0 * w$1;
	v$0$z$0 = z$0 * w$1;
	R1 = new Vector$0(x$1 + v$0$x$0, y$1 + v$0$y$0, z$1 + v$0$z$0);
	return new Ray(P, R1);
};


function Engine$getReflectionRay$LEngine$LVector$LVector$LVector$($this, P, N, V) {
	var c1;
	var R1;
	var w$1;
	var v$0$x$0;
	var v$0$y$0;
	var v$0$z$0;
	var x$0;
	var y$0;
	var z$0;
	var x$1;
	var y$1;
	var z$1;
	c1 = - ((x$0 = N.x) * (x$1 = V.x) + (y$0 = N.y) * (y$1 = V.y) + (z$0 = N.z) * (z$1 = V.z));
	w$1 = 2 * c1;
	v$0$x$0 = x$0 * w$1;
	v$0$y$0 = y$0 * w$1;
	v$0$z$0 = z$0 * w$1;
	R1 = new Vector$0(x$1 + v$0$x$0, y$1 + v$0$y$0, z$1 + v$0$z$0);
	return new Ray(P, R1);
};

Engine.getReflectionRay$LEngine$LVector$LVector$LVector$ = Engine$getReflectionRay$LEngine$LVector$LVector$LVector$;

Engine.prototype.rayTrace$LIntersectionInfo$LRay$LScene$N = function (info, ray, scene, depth) {
	var color;
	var shininess;
	var i;
	var light;
	var v;
	var L;
	var reflectionRay;
	var refl;
	var shadowInfo;
	var shadowRay;
	var dB;
	var Lv;
	var E;
	var H;
	var glossWeight;
	var c1$0;
	var f$0;
	var result$0;
	var w$0;
	var c1$2;
	var result$2;
	var result$3;
	var this$0;
	var value1$0;
	var c1$3;
	var result$5;
	c1$0 = info.color;
	f$0 = scene.background.ambience;
	result$0 = new Color$0(0, 0, 0);
	result$0.red = c1$0.red * f$0;
	result$0.green = c1$0.green * f$0;
	result$0.blue = c1$0.blue * f$0;
	color = result$0;
	shininess = Math.pow(10, info.shape.material.gloss + 1);
	for (i = 0; i < scene.lights.length; i++) {
		light = scene.lights[i];
		v = Vector$normalize$LVector$(Vector$subtract$LVector$LVector$(light.position, info.position));
		if (this.options.renderDiffuse) {
			w$0 = info.normal;
			L = v.x * w$0.x + v.y * w$0.y + v.z * w$0.z;
			if (L > 0.0) {
				color = Color$add$LColor$LColor$(color, Color$multiply$LColor$LColor$(info.color, (c1$2 = light.color, result$2 = new Color$0(0, 0, 0), result$2.red = c1$2.red * L, result$2.green = c1$2.green * L, result$2.blue = c1$2.blue * L, result$2)));
			}
		}
		if (depth <= this.options.rayDepth) {
			if (this.options.renderReflections && info.shape.material.reflection > 0) {
				reflectionRay = Engine$getReflectionRay$LEngine$LVector$LVector$LVector$(this, info.position, info.normal, ray.direction);
				refl = Engine$testIntersection$LEngine$LRay$LScene$LShape$(this, reflectionRay, scene, info.shape);
				if (refl.isHit && refl.distance > 0) {
					refl.color = Engine$rayTrace$LEngine$LIntersectionInfo$LRay$LScene$N(this, refl, reflectionRay, scene, depth + 1);
				} else {
					refl.color = scene.background.color;
				}
				color = Color$blend$LColor$LColor$N(color, refl.color, info.shape.material.reflection);
			}
		}
		shadowInfo = new IntersectionInfo();
		if (this.options.renderShadows) {
			shadowRay = new Ray(info.position, v);
			shadowInfo = Engine$testIntersection$LEngine$LRay$LScene$LShape$(this, shadowRay, scene, info.shape);
			if (shadowInfo.isHit && shadowInfo.shape != info.shape) {
				result$3 = new Color$0(0, 0, 0);
				result$3.red = color.red * 0.5;
				result$3.green = color.green * 0.5;
				result$3.blue = color.blue * 0.5;
				dB = 0.5 * Math.pow(shadowInfo.shape.material.transparency, 0.5);
				color = Color$addScalar$LColor$N(result$3, dB);
			}
		}
		if (this.options.renderHighlights && ! shadowInfo.isHit && info.shape.material.gloss > 0) {
			Lv = Vector$normalize$LVector$(Vector$subtract$LVector$LVector$(info.shape.position, light.position));
			E = Vector$normalize$LVector$(Vector$subtract$LVector$LVector$(scene.camera.position, info.shape.position));
			H = Vector$normalize$LVector$(Vector$subtract$LVector$LVector$(E, Lv));
			glossWeight = Math.pow((value1$0 = (this$0 = info.normal, this$0.x * H.x + this$0.y * H.y + this$0.z * H.z), value1$0 >= 0 ? value1$0 : 0), shininess);
			color = Color$add$LColor$LColor$((c1$3 = light.color, result$5 = new Color$0(0, 0, 0), result$5.red = c1$3.red * glossWeight, result$5.green = c1$3.green * glossWeight, result$5.blue = c1$3.blue * glossWeight, result$5), color);
		}
	}
	Color$limit$LColor$(color);
	return color;
};


function Engine$rayTrace$LEngine$LIntersectionInfo$LRay$LScene$N($this, info, ray, scene, depth) {
	var color;
	var shininess;
	var i;
	var light;
	var v;
	var L;
	var reflectionRay;
	var refl;
	var shadowInfo;
	var shadowRay;
	var dB;
	var Lv;
	var E;
	var H;
	var glossWeight;
	var c1$0;
	var f$0;
	var result$0;
	var w$0;
	var c1$2;
	var result$2;
	var result$3;
	var this$0;
	var value1$0;
	var c1$3;
	var result$5;
	c1$0 = info.color;
	f$0 = scene.background.ambience;
	result$0 = new Color$0(0, 0, 0);
	result$0.red = c1$0.red * f$0;
	result$0.green = c1$0.green * f$0;
	result$0.blue = c1$0.blue * f$0;
	color = result$0;
	shininess = Math.pow(10, info.shape.material.gloss + 1);
	for (i = 0; i < scene.lights.length; i++) {
		light = scene.lights[i];
		v = Vector$normalize$LVector$(Vector$subtract$LVector$LVector$(light.position, info.position));
		if ($this.options.renderDiffuse) {
			w$0 = info.normal;
			L = v.x * w$0.x + v.y * w$0.y + v.z * w$0.z;
			if (L > 0.0) {
				color = Color$add$LColor$LColor$(color, Color$multiply$LColor$LColor$(info.color, (c1$2 = light.color, result$2 = new Color$0(0, 0, 0), result$2.red = c1$2.red * L, result$2.green = c1$2.green * L, result$2.blue = c1$2.blue * L, result$2)));
			}
		}
		if (depth <= $this.options.rayDepth) {
			if ($this.options.renderReflections && info.shape.material.reflection > 0) {
				reflectionRay = Engine$getReflectionRay$LEngine$LVector$LVector$LVector$($this, info.position, info.normal, ray.direction);
				refl = Engine$testIntersection$LEngine$LRay$LScene$LShape$($this, reflectionRay, scene, info.shape);
				if (refl.isHit && refl.distance > 0) {
					refl.color = Engine$rayTrace$LEngine$LIntersectionInfo$LRay$LScene$N($this, refl, reflectionRay, scene, depth + 1);
				} else {
					refl.color = scene.background.color;
				}
				color = Color$blend$LColor$LColor$N(color, refl.color, info.shape.material.reflection);
			}
		}
		shadowInfo = new IntersectionInfo();
		if ($this.options.renderShadows) {
			shadowRay = new Ray(info.position, v);
			shadowInfo = Engine$testIntersection$LEngine$LRay$LScene$LShape$($this, shadowRay, scene, info.shape);
			if (shadowInfo.isHit && shadowInfo.shape != info.shape) {
				result$3 = new Color$0(0, 0, 0);
				result$3.red = color.red * 0.5;
				result$3.green = color.green * 0.5;
				result$3.blue = color.blue * 0.5;
				dB = 0.5 * Math.pow(shadowInfo.shape.material.transparency, 0.5);
				color = Color$addScalar$LColor$N(result$3, dB);
			}
		}
		if ($this.options.renderHighlights && ! shadowInfo.isHit && info.shape.material.gloss > 0) {
			Lv = Vector$normalize$LVector$(Vector$subtract$LVector$LVector$(info.shape.position, light.position));
			E = Vector$normalize$LVector$(Vector$subtract$LVector$LVector$(scene.camera.position, info.shape.position));
			H = Vector$normalize$LVector$(Vector$subtract$LVector$LVector$(E, Lv));
			glossWeight = Math.pow((value1$0 = (this$0 = info.normal, this$0.x * H.x + this$0.y * H.y + this$0.z * H.z), value1$0 >= 0 ? value1$0 : 0), shininess);
			color = Color$add$LColor$LColor$((c1$3 = light.color, result$5 = new Color$0(0, 0, 0), result$5.red = c1$3.red * glossWeight, result$5.green = c1$3.green * glossWeight, result$5.blue = c1$3.blue * glossWeight, result$5), color);
		}
	}
	Color$limit$LColor$(color);
	return color;
};

Engine.rayTrace$LEngine$LIntersectionInfo$LRay$LScene$N = Engine$rayTrace$LEngine$LIntersectionInfo$LRay$LScene$N;

function Main$0() {
};

$__jsx_extend([Main$0], Object);
function Main$0$renderScene$() {
	var scene;
	var sphere;
	var sphere1;
	var plane;
	var light;
	var light1;
	var imageWidth;
	var imageHeight;
	var pixelSize;
	var renderDiffuse;
	var renderShadows;
	var renderHighlights;
	var renderReflections;
	var rayDepth;
	var options;
	var raytracer;
	scene = ({camera: new Camera(new Vector$0(0, 0, -5), new Vector$0(0, 0, 1), new Vector$0(0, 1, 0)), shapes: [], lights: [], background: ({color: new Color$0(0, 0, 0.5), ambience: 0.2})});
	scene.camera = new Camera(new Vector$0(0, 0, -15), new Vector$0(-0.2, 0, 5), new Vector$0(0, 1, 0));
	scene.background = ({color: new Color$0(0.5, 0.5, 0.5), ambience: 0.4});
	sphere = new Sphere(new Vector$0(-1.5, 1.5, 2), 1.5, new Solid(new Color$0(0, 0.5, 0.5), 0.3, 0.0, 0.0, 2.0));
	sphere1 = new Sphere(new Vector$0(1, 0.25, 1), 0.5, new Solid(new Color$0(0.9, 0.9, 0.9), 0.1, 0.0, 0.0, 1.5));
	plane = new Plane(Vector$normalize$LVector$(new Vector$0(0.1, 0.9, -0.5)), 1.2, new Chessboard(new Color$0(1, 1, 1), new Color$0(0, 0, 0), 0.2, 0.0, 1.0, 0.7));
	scene.shapes.push(plane);
	scene.shapes.push(sphere);
	scene.shapes.push(sphere1);
	light = new Light(new Vector$0(5, 10, -1), new Color$0(0.8, 0.8, 0.8));
	light1 = new Light$0(new Vector$0(-3, 5, -15), new Color$0(0.8, 0.8, 0.8), 100);
	scene.lights.push(light);
	scene.lights.push(light1);
	imageWidth = 100;
	imageHeight = 100;
	pixelSize = "5,5".split(',');
	renderDiffuse = true;
	renderShadows = true;
	renderHighlights = true;
	renderReflections = true;
	rayDepth = 2;
	options = ({canvasHeight: 100, canvasWidth: 100, pixelWidth: 2, pixelHeight: 2, renderDiffuse: false, renderShadows: false, renderHighlights: false, renderReflections: false, rayDepth: 2});
	options.canvasWidth = imageWidth;
	options.canvasHeight = imageHeight;
	options.pixelWidth = +pixelSize[0];
	options.pixelHeight = +pixelSize[1];
	options.renderDiffuse = renderDiffuse;
	options.renderHighlights = renderHighlights;
	options.renderShadows = renderShadows;
	options.renderReflections = renderReflections;
	options.rayDepth = rayDepth;
	raytracer = new Engine(options);
	Engine$renderScene$LEngine$LScene$LHTMLCanvasElement$(raytracer, scene, null);
};

Main$0.renderScene$ = Main$0$renderScene$;

function RegExpTest() {
	var $this = this;
	var regExpBenchmark;
	var RegExpRun;
	var RegExpSetup;
	var RegExpTearDown;
	regExpBenchmark = null;
	function RegExpRun() {
		RegExpBenchmark$run$LRegExpBenchmark$(regExpBenchmark);
	}
	function RegExpSetup() {
		regExpBenchmark = new RegExpBenchmark();
		RegExpRun();
	}
	function RegExpTearDown() {
		regExpBenchmark = null;
	}
	new BenchmarkSuite('RegExp', 910985, [ ({name: "RegExp", run: RegExpRun, Setup: RegExpSetup, TearDown: RegExpTearDown}) ]);
};

$__jsx_extend([RegExpTest], Object);
function RegExpBenchmark() {
	var $this = this;
	var re0;
	var re1;
	var re2;
	var re3;
	var re4;
	var re5;
	var re6;
	var re7;
	var re8;
	var re9;
	var str0;
	var re10;
	var re11;
	var re12;
	var re13;
	var str1;
	var re14;
	var re15;
	var re16;
	var s0;
	var s1;
	var s2;
	var s3;
	var s4;
	var s5;
	var s6;
	var s7;
	var s8;
	var s9;
	var s10;
	var s11;
	var s12;
	var s13;
	var s14;
	var s15;
	var s16;
	var s17;
	var s18;
	var s19;
	var s20;
	var s21;
	var s22;
	var s23;
	var s24;
	var s25;
	var re17;
	var str2;
	var str3;
	var str4;
	var str5;
	var re18;
	var str6;
	var re19;
	var re20;
	var re21;
	var str7;
	var str8;
	var str9;
	var s26;
	var s27;
	var s28;
	var s29;
	var s30;
	var s31;
	var s32;
	var s33;
	var s34;
	var s35;
	var s36;
	var s37;
	var s38;
	var s39;
	var s41;
	var s42;
	var s43;
	var s44;
	var s45;
	var s46;
	var s47;
	var s48;
	var s49;
	var s50;
	var s51;
	var s52;
	var s53;
	var s54;
	var s55;
	var s56;
	var s57;
	var re22;
	var re23;
	var re24;
	var re25;
	var re26;
	var s57a;
	var s58;
	var s59;
	var s60;
	var s61;
	var s62;
	var s63;
	var s64;
	var s65;
	var s66;
	var re27;
	var re28;
	var re29;
	var re30;
	var re31;
	var re32;
	var re33;
	var re34;
	var str10;
	var str11;
	var str12;
	var str13;
	var str14;
	var re35;
	var str15;
	var str16;
	var str17;
	var str18;
	var str19;
	var str20;
	var s67;
	var s68;
	var s69;
	var s70;
	var s71;
	var s72;
	var s73;
	var s74;
	var s75;
	var s76;
	var s77;
	var s78;
	var re36;
	var re37;
	var re38;
	var str22;
	var str23;
	var str24;
	var str25;
	var str26;
	var re39;
	var re40;
	var re41;
	var re42;
	var re43;
	var re44;
	var re45;
	var re46;
	var re47;
	var re48;
	var re49;
	var s79;
	var s80;
	var s81;
	var s82;
	var re50;
	var re51;
	var re52;
	var re53;
	var re54;
	var re55;
	var re56;
	var re57;
	var re58;
	var re59;
	var str28;
	var str29;
	var str30;
	var str31;
	var str32;
	var str33;
	var re60;
	var re61;
	var re62;
	var str34;
	var str35;
	var s83;
	var s84;
	var s85;
	var s86;
	var s87;
	var s88;
	var s89;
	var s90;
	var re63;
	var str37;
	var str38;
	var str39;
	var str40;
	var s91;
	var s92;
	var s93;
	var re64;
	var re65;
	var re66;
	var str41;
	var re67;
	var str43;
	var str44;
	var str45;
	var str46;
	var re68;
	var re69;
	var re70;
	var re71;
	var re72;
	var re73;
	var re74;
	var re75;
	var re76;
	var re77;
	var re78;
	var re79;
	var re80;
	var re81;
	var re82;
	var re83;
	var re84;
	var str47;
	var str48;
	var str49;
	var str50;
	var str51;
	var str52;
	var str53;
	var str54;
	var str55;
	var str56;
	var str57;
	var str58;
	var str59;
	var str60;
	var str61;
	var str62;
	var str63;
	var s94;
	var s95;
	var s96;
	var s97;
	var s98;
	var s99;
	var s100;
	var s101;
	var s102;
	var s103;
	var re85;
	var str64;
	var str65;
	var str66;
	var str67;
	var str68;
	var str69;
	var str70;
	var str71;
	var str72;
	var str73;
	var str74;
	var str75;
	var str76;
	var re86;
	var re87;
	var re88;
	var re89;
	var re90;
	var re91;
	var re92;
	var re93;
	var re94;
	var str77;
	var str78;
	var str79;
	var str80;
	var str81;
	var str82;
	var str83;
	var str84;
	var str85;
	var str86;
	var str87;
	var str88;
	var str89;
	var str90;
	var str91;
	var str92;
	var str93;
	var str94;
	var str95;
	var str96;
	var str97;
	var str98;
	re0 = /^ba/;
	re1 = /(((\w+):\/\/)([^\/:]*)(:(\d+))?)?([^#?]*)(\?([^#]*))?(#(.*))?/;
	re2 = /^\s*|\s*$/g;
	re3 = /\bQBZPbageby_cynprubyqre\b/;
	re4 = /,/;
	re5 = /\bQBZPbageby_cynprubyqre\b/g;
	re6 = /^[\s\xa0]+|[\s\xa0]+$/g;
	re7 = /(\d*)(\D*)/g;
	re8 = /=/;
	re9 = /(^|\s)lhv\-h(\s|$)/;
	str0 = 'Zbmvyyn/5.0 (Jvaqbjf; H; Jvaqbjf AG 5.1; ra-HF) NccyrJroXvg/528.9 (XUGZY, yvxr Trpxb) Puebzr/2.0.157.0 Fnsnev/528.9';
	re10 = /\#/g;
	re11 = /\./g;
	re12 = /'/g;
	re13 = /\?[\w\W]*(sevraqvq|punaaryvq|tebhcvq)=([^\&\?#]*)/i;
	str1 = 'Fubpxjnir Synfu 9.0  e115';
	re14 = /\s+/g;
	re15 = /^\s*(\S*(\s+\S+)*)\s*$/;
	re16 = /(-[a-z])/i;
	s0 = RegExpBenchmark$computeInputVariants$SN('pyvpx', 6511);
	s1 = RegExpBenchmark$computeInputVariants$SN('uggc://jjj.snprobbx.pbz/ybtva.cuc', 1844);
	s2 = RegExpBenchmark$computeInputVariants$SN('QBZPbageby_cynprubyqre', 739);
	s3 = RegExpBenchmark$computeInputVariants$SN('uggc://jjj.snprobbx.pbz/', 598);
	s4 = RegExpBenchmark$computeInputVariants$SN('uggc://jjj.snprobbx.pbz/fepu.cuc', 454);
	s5 = RegExpBenchmark$computeInputVariants$SN('qqqq, ZZZ q, llll', 352);
	s6 = RegExpBenchmark$computeInputVariants$SN('vachggrkg QBZPbageby_cynprubyqre', 312);
	s7 = RegExpBenchmark$computeInputVariants$SN('/ZlFcnprUbzrcntr/Vaqrk-FvgrUbzr,10000000', 282);
	s8 = RegExpBenchmark$computeInputVariants$SN('vachggrkg', 177);
	s9 = RegExpBenchmark$computeInputVariants$SN('528.9', 170);
	s10 = RegExpBenchmark$computeInputVariants$SN('528', 170);
	s11 = RegExpBenchmark$computeInputVariants$SN('VCPhygher=ra-HF', 156);
	s12 = RegExpBenchmark$computeInputVariants$SN('CersreerqPhygher=ra-HF', 156);
	s13 = RegExpBenchmark$computeInputVariants$SN('xrlcerff', 144);
	s14 = RegExpBenchmark$computeInputVariants$SN('521', 139);
	s15 = RegExpBenchmark$computeInputVariants$SN(str0, 139);
	s16 = RegExpBenchmark$computeInputVariants$SN('qvi .so_zrah', 137);
	s17 = RegExpBenchmark$computeInputVariants$SN('qvi.so_zrah', 137);
	s18 = RegExpBenchmark$computeInputVariants$SN('uvqqra_ryrz', 117);
	s19 = RegExpBenchmark$computeInputVariants$SN('sevraqfgre_naba=nvq%3Qn6ss9p85n868ro9s059pn854735956o3%26ers%3Q%26df%3Q%26vpgl%3QHF', 95);
	s20 = RegExpBenchmark$computeInputVariants$SN('uggc://ubzr.zlfcnpr.pbz/vaqrk.psz', 93);
	s21 = RegExpBenchmark$computeInputVariants$SN(str1, 92);
	s22 = RegExpBenchmark$computeInputVariants$SN('svefg', 85);
	s23 = RegExpBenchmark$computeInputVariants$SN('uggc://cebsvyr.zlfcnpr.pbz/vaqrk.psz', 85);
	s24 = RegExpBenchmark$computeInputVariants$SN('ynfg', 85);
	s25 = RegExpBenchmark$computeInputVariants$SN('qvfcynl', 85);
	this.runBlock0 = (function () {
		var i;
		for (i = 0; i < 6511; i++) {
			re0.exec(s0[i]);
		}
		for (i = 0; i < 1844; i++) {
			re1.exec(s1[i]);
		}
		for (i = 0; i < 739; i++) {
			s2[i].replace(re2, '');
		}
		for (i = 0; i < 598; i++) {
			re1.exec(s3[i]);
		}
		for (i = 0; i < 454; i++) {
			re1.exec(s4[i]);
		}
		for (i = 0; i < 352; i++) {
			/qqqq|qqq|qq|q|ZZZZ|ZZZ|ZZ|Z|llll|ll|l|uu|u|UU|U|zz|z|ff|f|gg|g|sss|ss|s|mmm|mm|m/g.exec(s5[i]);
		}
		for (i = 0; i < 312; i++) {
			re3.exec(s6[i]);
		}
		for (i = 0; i < 282; i++) {
			re4.exec(s7[i]);
		}
		for (i = 0; i < 177; i++) {
			s8[i].replace(re5, '');
		}
		for (i = 0; i < 170; i++) {
			s9[i].replace(re6, '');
			re7.exec(s10[i]);
		}
		for (i = 0; i < 156; i++) {
			re8.exec(s11[i]);
			re8.exec(s12[i]);
		}
		for (i = 0; i < 144; i++) {
			re0.exec(s13[i]);
		}
		for (i = 0; i < 139; i++) {
			s14[i].replace(re6, '');
			re7.exec(s14[i]);
			re9.exec('');
			/JroXvg\/(\S+)/.exec(s15[i]);
		}
		for (i = 0; i < 137; i++) {
			s16[i].replace(re10, '');
			s16[i].replace(/\[/g, '');
			s17[i].replace(re11, '');
		}
		for (i = 0; i < 117; i++) {
			s18[i].replace(re2, '');
		}
		for (i = 0; i < 95; i++) {
			/(?:^|;)\s*sevraqfgre_ynat=([^;]*)/.exec(s19[i]);
		}
		for (i = 0; i < 93; i++) {
			s20[i].replace(re12, '');
			re13.exec(s20[i]);
		}
		for (i = 0; i < 92; i++) {
			s21[i].replace(/([a-zA-Z]|\s)+/, '');
		}
		for (i = 0; i < 85; i++) {
			s22[i].replace(re14, '');
			s22[i].replace(re15, '');
			s23[i].replace(re12, '');
			s24[i].replace(re14, '');
			s24[i].replace(re15, '');
			re16.exec(s25[i]);
			re13.exec(s23[i]);
		}
	});
	re17 = /(^|[^\\])\"\\\/Qngr\((-?[0-9]+)\)\\\/\"/g;
	str2 = '{"anzr":"","ahzoreSbezng":{"PheeraplQrpvznyQvtvgf":2,"PheeraplQrpvznyFrcnengbe":".","VfErnqBayl":gehr,"PheeraplTebhcFvmrf":[3],"AhzoreTebhcFvmrf":[3],"CrepragTebhcFvmrf":[3],"PheeraplTebhcFrcnengbe":",","PheeraplFlzoby":"\xa4","AnAFlzoby":"AnA","PheeraplArtngvirCnggrea":0,"AhzoreArtngvirCnggrea":1,"CrepragCbfvgvirCnggrea":0,"CrepragArtngvirCnggrea":0,"ArtngvirVasvavglFlzoby":"-Vasvavgl","ArtngvirFvta":"-","AhzoreQrpvznyQvtvgf":2,"AhzoreQrpvznyFrcnengbe":".","AhzoreTebhcFrcnengbe":",","PheeraplCbfvgvirCnggrea":0,"CbfvgvirVasvavglFlzoby":"Vasvavgl","CbfvgvirFvta":"+","CrepragQrpvznyQvtvgf":2,"CrepragQrpvznyFrcnengbe":".","CrepragTebhcFrcnengbe":",","CrepragFlzoby":"%","CreZvyyrFlzoby":"\u2030","AngvirQvtvgf":["0","1","2","3","4","5","6","7","8","9"],"QvtvgFhofgvghgvba":1},"qngrGvzrSbezng":{"NZQrfvtangbe":"NZ","Pnyraqne":{"ZvaFhccbegrqQngrGvzr":"@-62135568000000@","ZnkFhccbegrqQngrGvzr":"@253402300799999@","NytbevguzGlcr":1,"PnyraqneGlcr":1,"Renf":[1],"GjbQvtvgLrneZnk":2029,"VfErnqBayl":gehr},"QngrFrcnengbe":"/","SvefgQnlBsJrrx":0,"PnyraqneJrrxEhyr":0,"ShyyQngrGvzrCnggrea":"qqqq, qq ZZZZ llll UU:zz:ff","YbatQngrCnggrea":"qqqq, qq ZZZZ llll","YbatGvzrCnggrea":"UU:zz:ff","ZbaguQnlCnggrea":"ZZZZ qq","CZQrfvtangbe":"CZ","ESP1123Cnggrea":"qqq, qq ZZZ llll UU\':\'zz\':\'ff \'TZG\'","FubegQngrCnggrea":"ZZ/qq/llll","FubegGvzrCnggrea":"UU:zz","FbegnoyrQngrGvzrCnggrea":"llll\'-\'ZZ\'-\'qq\'G\'UU\':\'zz\':\'ff","GvzrFrcnengbe":":","HavirefnyFbegnoyrQngrGvzrCnggrea":"llll\'-\'ZZ\'-\'qq UU\':\'zz\':\'ff\'M\'","LrneZbaguCnggrea":"llll ZZZZ","NooerivngrqQnlAnzrf":["Fha","Zba","Ghr","Jrq","Guh","Sev","Fng"],"FubegrfgQnlAnzrf":["Fh","Zb","Gh","Jr","Gu","Se","Fn"],"QnlAnzrf":["Fhaqnl","Zbaqnl","Ghrfqnl","Jrqarfqnl","Guhefqnl","Sevqnl","Fngheqnl"],"NooerivngrqZbaguAnzrf":["Wna","Sro","Zne","Nce","Znl","Wha","Why","Nht","Frc","Bpg","Abi","Qrp",""],"ZbaguAnzrf":["Wnahnel","Sroehnel","Znepu","Ncevy","Znl","Whar","Whyl","Nhthfg","Frcgrzore","Bpgbore","Abirzore","Qrprzore",""],"VfErnqBayl":gehr,"AngvirPnyraqneAnzr":"Tertbevna Pnyraqne","NooerivngrqZbaguTravgvirAnzrf":["Wna","Sro","Zne","Nce","Znl","Wha","Why","Nht","Frc","Bpg","Abi","Qrp",""],"ZbaguTravgvirAnzrf":["Wnahnel","Sroehnel","Znepu","Ncevy","Znl","Whar","Whyl","Nhthfg","Frcgrzore","Bpgbore","Abirzore","Qrprzore",""]}}';
	str3 = '{"anzr":"ra-HF","ahzoreSbezng":{"PheeraplQrpvznyQvtvgf":2,"PheeraplQrpvznyFrcnengbe":".","VfErnqBayl":snyfr,"PheeraplTebhcFvmrf":[3],"AhzoreTebhcFvmrf":[3],"CrepragTebhcFvmrf":[3],"PheeraplTebhcFrcnengbe":",","PheeraplFlzoby":"$","AnAFlzoby":"AnA","PheeraplArtngvirCnggrea":0,"AhzoreArtngvirCnggrea":1,"CrepragCbfvgvirCnggrea":0,"CrepragArtngvirCnggrea":0,"ArtngvirVasvavglFlzoby":"-Vasvavgl","ArtngvirFvta":"-","AhzoreQrpvznyQvtvgf":2,"AhzoreQrpvznyFrcnengbe":".","AhzoreTebhcFrcnengbe":",","PheeraplCbfvgvirCnggrea":0,"CbfvgvirVasvavglFlzoby":"Vasvavgl","CbfvgvirFvta":"+","CrepragQrpvznyQvtvgf":2,"CrepragQrpvznyFrcnengbe":".","CrepragTebhcFrcnengbe":",","CrepragFlzoby":"%","CreZvyyrFlzoby":"\u2030","AngvirQvtvgf":["0","1","2","3","4","5","6","7","8","9"],"QvtvgFhofgvghgvba":1},"qngrGvzrSbezng":{"NZQrfvtangbe":"NZ","Pnyraqne":{"ZvaFhccbegrqQngrGvzr":"@-62135568000000@","ZnkFhccbegrqQngrGvzr":"@253402300799999@","NytbevguzGlcr":1,"PnyraqneGlcr":1,"Renf":[1],"GjbQvtvgLrneZnk":2029,"VfErnqBayl":snyfr},"QngrFrcnengbe":"/","SvefgQnlBsJrrx":0,"PnyraqneJrrxEhyr":0,"ShyyQngrGvzrCnggrea":"qqqq, ZZZZ qq, llll u:zz:ff gg","YbatQngrCnggrea":"qqqq, ZZZZ qq, llll","YbatGvzrCnggrea":"u:zz:ff gg","ZbaguQnlCnggrea":"ZZZZ qq","CZQrfvtangbe":"CZ","ESP1123Cnggrea":"qqq, qq ZZZ llll UU\':\'zz\':\'ff \'TZG\'","FubegQngrCnggrea":"Z/q/llll","FubegGvzrCnggrea":"u:zz gg","FbegnoyrQngrGvzrCnggrea":"llll\'-\'ZZ\'-\'qq\'G\'UU\':\'zz\':\'ff","GvzrFrcnengbe":":","HavirefnyFbegnoyrQngrGvzrCnggrea":"llll\'-\'ZZ\'-\'qq UU\':\'zz\':\'ff\'M\'","LrneZbaguCnggrea":"ZZZZ, llll","NooerivngrqQnlAnzrf":["Fha","Zba","Ghr","Jrq","Guh","Sev","Fng"],"FubegrfgQnlAnzrf":["Fh","Zb","Gh","Jr","Gu","Se","Fn"],"QnlAnzrf":["Fhaqnl","Zbaqnl","Ghrfqnl","Jrqarfqnl","Guhefqnl","Sevqnl","Fngheqnl"],"NooerivngrqZbaguAnzrf":["Wna","Sro","Zne","Nce","Znl","Wha","Why","Nht","Frc","Bpg","Abi","Qrp",""],"ZbaguAnzrf":["Wnahnel","Sroehnel","Znepu","Ncevy","Znl","Whar","Whyl","Nhthfg","Frcgrzore","Bpgbore","Abirzore","Qrprzore",""],"VfErnqBayl":snyfr,"AngvirPnyraqneAnzr":"Tertbevna Pnyraqne","NooerivngrqZbaguTravgvirAnzrf":["Wna","Sro","Zne","Nce","Znl","Wha","Why","Nht","Frc","Bpg","Abi","Qrp",""],"ZbaguTravgvirAnzrf":["Wnahnel","Sroehnel","Znepu","Ncevy","Znl","Whar","Whyl","Nhthfg","Frcgrzore","Bpgbore","Abirzore","Qrprzore",""]}}';
	str4 = 'HFEYBP=DKWyLHAiMTH9AwHjWxAcqUx9GJ91oaEunJ4tIzyyqlMQo3IhqUW5D29xMG1IHlMQo3IhqUW5GzSgMG1Iozy0MJDtH3EuqTImWxEgLHAiMTH9BQN3WxkuqTy0qJEyCGZ3YwDkBGVzGT9hM2y0qJEyCF0kZwVhZQH3APMDo3A0LJkQo2EyCGx0ZQDmWyWyM2yiox5uoJH9D0R%3Q';
	str5 = 'HFEYBP=DKWyLHAiMTH9AwHjWxAcqUx9GJ91oaEunJ4tIzyyqlMQo3IhqUW5D29xMG1IHlMQo3IhqUW5GzSgMG1Iozy0MJDtH3EuqTImWxEgLHAiMTH9BQN3WxkuqTy0qJEyCGZ3YwDkBGVzGT9hM2y0qJEyCF0kZwVhZQH3APMDo3A0LJkQo2EyCGx0ZQDmWyWyM2yiox5uoJH9D0R=';
	re18 = /^\s+|\s+$/g;
	str6 = 'uggc://jjj.snprobbx.pbz/vaqrk.cuc';
	re19 = /(?:^|\s+)ba(?:\s+|$)/;
	re20 = /[+, ]/;
	re21 = /ybnqrq|pbzcyrgr/;
	str7 = ';;jvaqbj.IjPurpxZbhfrCbfvgvbaNQ_VQ=shapgvba(r){vs(!r)ine r=jvaqbj.rirag;ine c=-1;vs(d1)c=d1.EbyybssCnary;ine bo=IjTrgBow("IjCnayNQ_VQ_"+c);vs(bo&&bo.fglyr.ivfvovyvgl=="ivfvoyr"){ine fns=IjFns?8:0;ine pheK=r.pyvragK+IjBOFpe("U")+fns,pheL=r.pyvragL+IjBOFpe("I")+fns;ine y=IjBOEC(NQ_VQ,bo,"Y"),g=IjBOEC(NQ_VQ,bo,"G");ine e=y+d1.Cnaryf[c].Jvqgu,o=g+d1.Cnaryf[c].Urvtug;vs((pheK<y)||(pheK>e)||(pheL<g)||(pheL>o)){vs(jvaqbj.IjBaEbyybssNQ_VQ)IjBaEbyybssNQ_VQ(c);ryfr IjPybfrNq(NQ_VQ,c,gehr,"");}ryfr erghea;}IjPnapryZbhfrYvfgrareNQ_VQ();};;jvaqbj.IjFrgEbyybssCnaryNQ_VQ=shapgvba(c){ine z="zbhfrzbir",q=qbphzrag,s=IjPurpxZbhfrCbfvgvbaNQ_VQ;c=IjTc(NQ_VQ,c);vs(d1&&d1.EbyybssCnary>-1)IjPnapryZbhfrYvfgrareNQ_VQ();vs(d1)d1.EbyybssCnary=c;gel{vs(q.nqqRiragYvfgrare)q.nqqRiragYvfgrare(z,s,snyfr);ryfr vs(q.nggnpuRirag)q.nggnpuRirag("ba"+z,s);}pngpu(r){}};;jvaqbj.IjPnapryZbhfrYvfgrareNQ_VQ=shapgvba(){ine z="zbhfrzbir",q=qbphzrag,s=IjPurpxZbhfrCbfvgvbaNQ_VQ;vs(d1)d1.EbyybssCnary=-1;gel{vs(q.erzbirRiragYvfgrare)q.erzbirRiragYvfgrare(z,s,snyfr);ryfr vs(q.qrgnpuRirag)q.qrgnpuRirag("ba"+z,s);}pngpu(r){}};;d1.IjTc=d2(n,c){ine nq=d1;vs(vfAnA(c)){sbe(ine v=0;v<nq.Cnaryf.yratgu;v++)vs(nq.Cnaryf[v].Anzr==c)erghea v;erghea 0;}erghea c;};;d1.IjTpy=d2(n,c,p){ine cn=d1.Cnaryf[IjTc(n,c)];vs(!cn)erghea 0;vs(vfAnA(p)){sbe(ine v=0;v<cn.Pyvpxguehf.yratgu;v++)vs(cn.Pyvpxguehf[v].Anzr==p)erghea v;erghea 0;}erghea p;};;d1.IjGenpr=d2(n,f){gel{vs(jvaqbj["Ij"+"QtQ"])jvaqbj["Ij"+"QtQ"](n,1,f);}pngpu(r){}};;d1.IjYvzvg1=d2(n,f){ine nq=d1,vh=f.fcyvg("/");sbe(ine v=0,p=0;v<vh.yratgu;v++){vs(vh[v].yratgu>0){vs(nq.FzV.yratgu>0)nq.FzV+="/";nq.FzV+=vh[v];nq.FtZ[nq.FtZ.yratgu]=snyfr;}}};;d1.IjYvzvg0=d2(n,f){ine nq=d1,vh=f.fcyvg("/");sbe(ine v=0;v<vh.yratgu;v++){vs(vh[v].yratgu>0){vs(nq.OvC.yratgu>0)nq.OvC+="/";nq.OvC+=vh[v];}}};;d1.IjRVST=d2(n,c){jvaqbj["IjCnayNQ_VQ_"+c+"_Bow"]=IjTrgBow("IjCnayNQ_VQ_"+c+"_Bow");vs(jvaqbj["IjCnayNQ_VQ_"+c+"_Bow"]==ahyy)frgGvzrbhg("IjRVST(NQ_VQ,"+c+")",d1.rvsg);};;d1.IjNavzSHC=d2(n,c){ine nq=d1;vs(c>nq.Cnaryf.yratgu)erghea;ine cna=nq.Cnaryf[c],nn=gehr,on=gehr,yn=gehr,en=gehr,cn=nq.Cnaryf[0],sf=nq.ShF,j=cn.Jvqgu,u=cn.Urvtug;vs(j=="100%"){j=sf;en=snyfr;yn=snyfr;}vs(u=="100%"){u=sf;nn=snyfr;on=snyfr;}vs(cn.YnY=="Y")yn=snyfr;vs(cn.YnY=="E")en=snyfr;vs(cn.GnY=="G")nn=snyfr;vs(cn.GnY=="O")on=snyfr;ine k=0,l=0;fjvgpu(nq.NshP%8){pnfr 0:oernx;pnfr 1:vs(nn)l=-sf;oernx;pnfr 2:k=j-sf;oernx;pnfr 3:vs(en)k=j;oernx;pnfr 4:k=j-sf;l=u-sf;oernx;pnfr 5:k=j-sf;vs(on)l=u;oernx;pnfr 6:l=u-sf;oernx;pnfr 7:vs(yn)k=-sf;l=u-sf;oernx;}vs(nq.NshP++ <nq.NshG)frgGvzrbhg(("IjNavzSHC(NQ_VQ,"+c+")"),nq.NshC);ryfr{k=-1000;l=k;}cna.YrsgBssfrg=k;cna.GbcBssfrg=l;IjNhErcb(n,c);};;d1.IjTrgErnyCbfvgvba=d2(n,b,j){erghea IjBOEC.nccyl(guvf,nethzragf);};;d1.IjPnapryGvzrbhg=d2(n,c){c=IjTc(n,c);ine cay=d1.Cnaryf[c];vs(cay&&cay.UgU!=""){pyrneGvzrbhg(cay.UgU);}};;d1.IjPnapryNyyGvzrbhgf=d2(n){vs(d1.YbpxGvzrbhgPunatrf)erghea;sbe(ine c=0;c<d1.bac;c++)IjPnapryGvzrbhg(n,c);};;d1.IjFgnegGvzrbhg=d2(n,c,bG){c=IjTc(n,c);ine cay=d1.Cnaryf[c];vs(cay&&((cay.UvqrGvzrbhgInyhr>0)||(nethzragf.yratgu==3&&bG>0))){pyrneGvzrbhg(cay.UgU);cay.UgU=frgGvzrbhg(cay.UvqrNpgvba,(nethzragf.yratgu==3?bG:cay.UvqrGvzrbhgInyhr));}};;d1.IjErfrgGvzrbhg=d2(n,c,bG){c=IjTc(n,c);IjPnapryGvzrbhg(n,c);riny("IjFgnegGvzrbhg(NQ_VQ,c"+(nethzragf.yratgu==3?",bG":"")+")");};;d1.IjErfrgNyyGvzrbhgf=d2(n){sbe(ine c=0;c<d1.bac;c++)IjErfrgGvzrbhg(n,c);};;d1.IjQrgnpure=d2(n,rig,sap){gel{vs(IjQVR5)riny("jvaqbj.qrgnpuRirag(\'ba"+rig+"\',"+sap+"NQ_VQ)");ryfr vs(!IjQVRZnp)riny("jvaqbj.erzbirRiragYvfgrare(\'"+rig+"\',"+sap+"NQ_VQ,snyfr)");}pngpu(r){}};;d1.IjPyrnaHc=d2(n){IjCvat(n,"G");ine nq=d1;sbe(ine v=0;v<nq.Cnaryf.yratgu;v++){IjUvqrCnary(n,v,gehr);}gel{IjTrgBow(nq.gya).vaareUGZY="";}pngpu(r){}vs(nq.gya!=nq.gya2)gel{IjTrgBow(nq.gya2).vaareUGZY="";}pngpu(r){}gel{d1=ahyy;}pngpu(r){}gel{IjQrgnpure(n,"haybnq","IjHayNQ_VQ");}pngpu(r){}gel{jvaqbj.IjHayNQ_VQ=ahyy;}pngpu(r){}gel{IjQrgnpure(n,"fpebyy","IjFeNQ_VQ");}pngpu(r){}gel{jvaqbj.IjFeNQ_VQ=ahyy;}pngpu(r){}gel{IjQrgnpure(n,"erfvmr","IjEmNQ_VQ");}pngpu(r){}gel{jvaqbj.IjEmNQ_VQ=ahyy;}pngpu(r){}gel{IjQrgnpure(n';
	str8 = ';;jvaqbj.IjPurpxZbhfrCbfvgvbaNQ_VQ=shapgvba(r){vs(!r)ine r=jvaqbj.rirag;ine c=-1;vs(jvaqbj.IjNqNQ_VQ)c=jvaqbj.IjNqNQ_VQ.EbyybssCnary;ine bo=IjTrgBow("IjCnayNQ_VQ_"+c);vs(bo&&bo.fglyr.ivfvovyvgl=="ivfvoyr"){ine fns=IjFns?8:0;ine pheK=r.pyvragK+IjBOFpe("U")+fns,pheL=r.pyvragL+IjBOFpe("I")+fns;ine y=IjBOEC(NQ_VQ,bo,"Y"),g=IjBOEC(NQ_VQ,bo,"G");ine e=y+jvaqbj.IjNqNQ_VQ.Cnaryf[c].Jvqgu,o=g+jvaqbj.IjNqNQ_VQ.Cnaryf[c].Urvtug;vs((pheK<y)||(pheK>e)||(pheL<g)||(pheL>o)){vs(jvaqbj.IjBaEbyybssNQ_VQ)IjBaEbyybssNQ_VQ(c);ryfr IjPybfrNq(NQ_VQ,c,gehr,"");}ryfr erghea;}IjPnapryZbhfrYvfgrareNQ_VQ();};;jvaqbj.IjFrgEbyybssCnaryNQ_VQ=shapgvba(c){ine z="zbhfrzbir",q=qbphzrag,s=IjPurpxZbhfrCbfvgvbaNQ_VQ;c=IjTc(NQ_VQ,c);vs(jvaqbj.IjNqNQ_VQ&&jvaqbj.IjNqNQ_VQ.EbyybssCnary>-1)IjPnapryZbhfrYvfgrareNQ_VQ();vs(jvaqbj.IjNqNQ_VQ)jvaqbj.IjNqNQ_VQ.EbyybssCnary=c;gel{vs(q.nqqRiragYvfgrare)q.nqqRiragYvfgrare(z,s,snyfr);ryfr vs(q.nggnpuRirag)q.nggnpuRirag("ba"+z,s);}pngpu(r){}};;jvaqbj.IjPnapryZbhfrYvfgrareNQ_VQ=shapgvba(){ine z="zbhfrzbir",q=qbphzrag,s=IjPurpxZbhfrCbfvgvbaNQ_VQ;vs(jvaqbj.IjNqNQ_VQ)jvaqbj.IjNqNQ_VQ.EbyybssCnary=-1;gel{vs(q.erzbirRiragYvfgrare)q.erzbirRiragYvfgrare(z,s,snyfr);ryfr vs(q.qrgnpuRirag)q.qrgnpuRirag("ba"+z,s);}pngpu(r){}};;jvaqbj.IjNqNQ_VQ.IjTc=shapgvba(n,c){ine nq=jvaqbj.IjNqNQ_VQ;vs(vfAnA(c)){sbe(ine v=0;v<nq.Cnaryf.yratgu;v++)vs(nq.Cnaryf[v].Anzr==c)erghea v;erghea 0;}erghea c;};;jvaqbj.IjNqNQ_VQ.IjTpy=shapgvba(n,c,p){ine cn=jvaqbj.IjNqNQ_VQ.Cnaryf[IjTc(n,c)];vs(!cn)erghea 0;vs(vfAnA(p)){sbe(ine v=0;v<cn.Pyvpxguehf.yratgu;v++)vs(cn.Pyvpxguehf[v].Anzr==p)erghea v;erghea 0;}erghea p;};;jvaqbj.IjNqNQ_VQ.IjGenpr=shapgvba(n,f){gel{vs(jvaqbj["Ij"+"QtQ"])jvaqbj["Ij"+"QtQ"](n,1,f);}pngpu(r){}};;jvaqbj.IjNqNQ_VQ.IjYvzvg1=shapgvba(n,f){ine nq=jvaqbj.IjNqNQ_VQ,vh=f.fcyvg("/");sbe(ine v=0,p=0;v<vh.yratgu;v++){vs(vh[v].yratgu>0){vs(nq.FzV.yratgu>0)nq.FzV+="/";nq.FzV+=vh[v];nq.FtZ[nq.FtZ.yratgu]=snyfr;}}};;jvaqbj.IjNqNQ_VQ.IjYvzvg0=shapgvba(n,f){ine nq=jvaqbj.IjNqNQ_VQ,vh=f.fcyvg("/");sbe(ine v=0;v<vh.yratgu;v++){vs(vh[v].yratgu>0){vs(nq.OvC.yratgu>0)nq.OvC+="/";nq.OvC+=vh[v];}}};;jvaqbj.IjNqNQ_VQ.IjRVST=shapgvba(n,c){jvaqbj["IjCnayNQ_VQ_"+c+"_Bow"]=IjTrgBow("IjCnayNQ_VQ_"+c+"_Bow");vs(jvaqbj["IjCnayNQ_VQ_"+c+"_Bow"]==ahyy)frgGvzrbhg("IjRVST(NQ_VQ,"+c+")",jvaqbj.IjNqNQ_VQ.rvsg);};;jvaqbj.IjNqNQ_VQ.IjNavzSHC=shapgvba(n,c){ine nq=jvaqbj.IjNqNQ_VQ;vs(c>nq.Cnaryf.yratgu)erghea;ine cna=nq.Cnaryf[c],nn=gehr,on=gehr,yn=gehr,en=gehr,cn=nq.Cnaryf[0],sf=nq.ShF,j=cn.Jvqgu,u=cn.Urvtug;vs(j=="100%"){j=sf;en=snyfr;yn=snyfr;}vs(u=="100%"){u=sf;nn=snyfr;on=snyfr;}vs(cn.YnY=="Y")yn=snyfr;vs(cn.YnY=="E")en=snyfr;vs(cn.GnY=="G")nn=snyfr;vs(cn.GnY=="O")on=snyfr;ine k=0,l=0;fjvgpu(nq.NshP%8){pnfr 0:oernx;pnfr 1:vs(nn)l=-sf;oernx;pnfr 2:k=j-sf;oernx;pnfr 3:vs(en)k=j;oernx;pnfr 4:k=j-sf;l=u-sf;oernx;pnfr 5:k=j-sf;vs(on)l=u;oernx;pnfr 6:l=u-sf;oernx;pnfr 7:vs(yn)k=-sf;l=u-sf;oernx;}vs(nq.NshP++ <nq.NshG)frgGvzrbhg(("IjNavzSHC(NQ_VQ,"+c+")"),nq.NshC);ryfr{k=-1000;l=k;}cna.YrsgBssfrg=k;cna.GbcBssfrg=l;IjNhErcb(n,c);};;jvaqbj.IjNqNQ_VQ.IjTrgErnyCbfvgvba=shapgvba(n,b,j){erghea IjBOEC.nccyl(guvf,nethzragf);};;jvaqbj.IjNqNQ_VQ.IjPnapryGvzrbhg=shapgvba(n,c){c=IjTc(n,c);ine cay=jvaqbj.IjNqNQ_VQ.Cnaryf[c];vs(cay&&cay.UgU!=""){pyrneGvzrbhg(cay.UgU);}};;jvaqbj.IjNqNQ_VQ.IjPnapryNyyGvzrbhgf=shapgvba(n){vs(jvaqbj.IjNqNQ_VQ.YbpxGvzrbhgPunatrf)erghea;sbe(ine c=0;c<jvaqbj.IjNqNQ_VQ.bac;c++)IjPnapryGvzrbhg(n,c);};;jvaqbj.IjNqNQ_VQ.IjFgnegGvzrbhg=shapgvba(n,c,bG){c=IjTc(n,c);ine cay=jvaqbj.IjNqNQ_VQ.Cnaryf[c];vs(cay&&((cay.UvqrGvzrbhgInyhr>0)||(nethzragf.yratgu==3&&bG>0))){pyrneGvzrbhg(cay.UgU);cay.UgU=frgGvzrbhg(cay.UvqrNpgvba,(nethzragf.yratgu==3?bG:cay.UvqrGvzrbhgInyhr));}};;jvaqbj.IjNqNQ_VQ.IjErfrgGvzrbhg=shapgvba(n,c,bG){c=IjTc(n,c);IjPnapryGvzrbhg(n,c);riny("IjFgnegGvzrbhg(NQ_VQ,c"+(nethzragf.yratgu==3?",bG":"")+")");};;jvaqbj.IjNqNQ_VQ.IjErfrgNyyGvzrbhgf=shapgvba(n){sbe(ine c=0;c<jvaqbj.IjNqNQ_VQ.bac;c++)IjErfrgGvzrbhg(n,c);};;jvaqbj.IjNqNQ_VQ.IjQrgnpure=shapgvba(n,rig,sap){gel{vs(IjQVR5)riny("jvaqbj.qrgnpuRirag(\'ba"+rig+"\',"+sap+"NQ_VQ)");ryfr vs(!IjQVRZnp)riny("jvaqbj.erzbir';
	str9 = ';;jvaqbj.IjPurpxZbhfrCbfvgvbaNQ_VQ=shapgvba(r){vs(!r)ine r=jvaqbj.rirag;ine c=-1;vs(jvaqbj.IjNqNQ_VQ)c=jvaqbj.IjNqNQ_VQ.EbyybssCnary;ine bo=IjTrgBow("IjCnayNQ_VQ_"+c);vs(bo&&bo.fglyr.ivfvovyvgl=="ivfvoyr"){ine fns=IjFns?8:0;ine pheK=r.pyvragK+IjBOFpe("U")+fns,pheL=r.pyvragL+IjBOFpe("I")+fns;ine y=IjBOEC(NQ_VQ,bo,"Y"),g=IjBOEC(NQ_VQ,bo,"G");ine e=y+jvaqbj.IjNqNQ_VQ.Cnaryf[c].Jvqgu,o=g+jvaqbj.IjNqNQ_VQ.Cnaryf[c].Urvtug;vs((pheK<y)||(pheK>e)||(pheL<g)||(pheL>o)){vs(jvaqbj.IjBaEbyybssNQ_VQ)IjBaEbyybssNQ_VQ(c);ryfr IjPybfrNq(NQ_VQ,c,gehr,"");}ryfr erghea;}IjPnapryZbhfrYvfgrareNQ_VQ();};;jvaqbj.IjFrgEbyybssCnaryNQ_VQ=shapgvba(c){ine z="zbhfrzbir",q=qbphzrag,s=IjPurpxZbhfrCbfvgvbaNQ_VQ;c=IjTc(NQ_VQ,c);vs(jvaqbj.IjNqNQ_VQ&&jvaqbj.IjNqNQ_VQ.EbyybssCnary>-1)IjPnapryZbhfrYvfgrareNQ_VQ();vs(jvaqbj.IjNqNQ_VQ)jvaqbj.IjNqNQ_VQ.EbyybssCnary=c;gel{vs(q.nqqRiragYvfgrare)q.nqqRiragYvfgrare(z,s,snyfr);ryfr vs(q.nggnpuRirag)q.nggnpuRirag("ba"+z,s);}pngpu(r){}};;jvaqbj.IjPnapryZbhfrYvfgrareNQ_VQ=shapgvba(){ine z="zbhfrzbir",q=qbphzrag,s=IjPurpxZbhfrCbfvgvbaNQ_VQ;vs(jvaqbj.IjNqNQ_VQ)jvaqbj.IjNqNQ_VQ.EbyybssCnary=-1;gel{vs(q.erzbirRiragYvfgrare)q.erzbirRiragYvfgrare(z,s,snyfr);ryfr vs(q.qrgnpuRirag)q.qrgnpuRirag("ba"+z,s);}pngpu(r){}};;jvaqbj.IjNqNQ_VQ.IjTc=d2(n,c){ine nq=jvaqbj.IjNqNQ_VQ;vs(vfAnA(c)){sbe(ine v=0;v<nq.Cnaryf.yratgu;v++)vs(nq.Cnaryf[v].Anzr==c)erghea v;erghea 0;}erghea c;};;jvaqbj.IjNqNQ_VQ.IjTpy=d2(n,c,p){ine cn=jvaqbj.IjNqNQ_VQ.Cnaryf[IjTc(n,c)];vs(!cn)erghea 0;vs(vfAnA(p)){sbe(ine v=0;v<cn.Pyvpxguehf.yratgu;v++)vs(cn.Pyvpxguehf[v].Anzr==p)erghea v;erghea 0;}erghea p;};;jvaqbj.IjNqNQ_VQ.IjGenpr=d2(n,f){gel{vs(jvaqbj["Ij"+"QtQ"])jvaqbj["Ij"+"QtQ"](n,1,f);}pngpu(r){}};;jvaqbj.IjNqNQ_VQ.IjYvzvg1=d2(n,f){ine nq=jvaqbj.IjNqNQ_VQ,vh=f.fcyvg("/");sbe(ine v=0,p=0;v<vh.yratgu;v++){vs(vh[v].yratgu>0){vs(nq.FzV.yratgu>0)nq.FzV+="/";nq.FzV+=vh[v];nq.FtZ[nq.FtZ.yratgu]=snyfr;}}};;jvaqbj.IjNqNQ_VQ.IjYvzvg0=d2(n,f){ine nq=jvaqbj.IjNqNQ_VQ,vh=f.fcyvg("/");sbe(ine v=0;v<vh.yratgu;v++){vs(vh[v].yratgu>0){vs(nq.OvC.yratgu>0)nq.OvC+="/";nq.OvC+=vh[v];}}};;jvaqbj.IjNqNQ_VQ.IjRVST=d2(n,c){jvaqbj["IjCnayNQ_VQ_"+c+"_Bow"]=IjTrgBow("IjCnayNQ_VQ_"+c+"_Bow");vs(jvaqbj["IjCnayNQ_VQ_"+c+"_Bow"]==ahyy)frgGvzrbhg("IjRVST(NQ_VQ,"+c+")",jvaqbj.IjNqNQ_VQ.rvsg);};;jvaqbj.IjNqNQ_VQ.IjNavzSHC=d2(n,c){ine nq=jvaqbj.IjNqNQ_VQ;vs(c>nq.Cnaryf.yratgu)erghea;ine cna=nq.Cnaryf[c],nn=gehr,on=gehr,yn=gehr,en=gehr,cn=nq.Cnaryf[0],sf=nq.ShF,j=cn.Jvqgu,u=cn.Urvtug;vs(j=="100%"){j=sf;en=snyfr;yn=snyfr;}vs(u=="100%"){u=sf;nn=snyfr;on=snyfr;}vs(cn.YnY=="Y")yn=snyfr;vs(cn.YnY=="E")en=snyfr;vs(cn.GnY=="G")nn=snyfr;vs(cn.GnY=="O")on=snyfr;ine k=0,l=0;fjvgpu(nq.NshP%8){pnfr 0:oernx;pnfr 1:vs(nn)l=-sf;oernx;pnfr 2:k=j-sf;oernx;pnfr 3:vs(en)k=j;oernx;pnfr 4:k=j-sf;l=u-sf;oernx;pnfr 5:k=j-sf;vs(on)l=u;oernx;pnfr 6:l=u-sf;oernx;pnfr 7:vs(yn)k=-sf;l=u-sf;oernx;}vs(nq.NshP++ <nq.NshG)frgGvzrbhg(("IjNavzSHC(NQ_VQ,"+c+")"),nq.NshC);ryfr{k=-1000;l=k;}cna.YrsgBssfrg=k;cna.GbcBssfrg=l;IjNhErcb(n,c);};;jvaqbj.IjNqNQ_VQ.IjTrgErnyCbfvgvba=d2(n,b,j){erghea IjBOEC.nccyl(guvf,nethzragf);};;jvaqbj.IjNqNQ_VQ.IjPnapryGvzrbhg=d2(n,c){c=IjTc(n,c);ine cay=jvaqbj.IjNqNQ_VQ.Cnaryf[c];vs(cay&&cay.UgU!=""){pyrneGvzrbhg(cay.UgU);}};;jvaqbj.IjNqNQ_VQ.IjPnapryNyyGvzrbhgf=d2(n){vs(jvaqbj.IjNqNQ_VQ.YbpxGvzrbhgPunatrf)erghea;sbe(ine c=0;c<jvaqbj.IjNqNQ_VQ.bac;c++)IjPnapryGvzrbhg(n,c);};;jvaqbj.IjNqNQ_VQ.IjFgnegGvzrbhg=d2(n,c,bG){c=IjTc(n,c);ine cay=jvaqbj.IjNqNQ_VQ.Cnaryf[c];vs(cay&&((cay.UvqrGvzrbhgInyhr>0)||(nethzragf.yratgu==3&&bG>0))){pyrneGvzrbhg(cay.UgU);cay.UgU=frgGvzrbhg(cay.UvqrNpgvba,(nethzragf.yratgu==3?bG:cay.UvqrGvzrbhgInyhr));}};;jvaqbj.IjNqNQ_VQ.IjErfrgGvzrbhg=d2(n,c,bG){c=IjTc(n,c);IjPnapryGvzrbhg(n,c);riny("IjFgnegGvzrbhg(NQ_VQ,c"+(nethzragf.yratgu==3?",bG":"")+")");};;jvaqbj.IjNqNQ_VQ.IjErfrgNyyGvzrbhgf=d2(n){sbe(ine c=0;c<jvaqbj.IjNqNQ_VQ.bac;c++)IjErfrgGvzrbhg(n,c);};;jvaqbj.IjNqNQ_VQ.IjQrgnpure=d2(n,rig,sap){gel{vs(IjQVR5)riny("jvaqbj.qrgnpuRirag(\'ba"+rig+"\',"+sap+"NQ_VQ)");ryfr vs(!IjQVRZnp)riny("jvaqbj.erzbirRiragYvfgrare(\'"+rig+"\',"+sap+"NQ_VQ,snyfr)");}pngpu(r){}};;jvaqbj.IjNqNQ_VQ.IjPyrna';
	s26 = RegExpBenchmark$computeInputVariants$SN('VC=74.125.75.1', 81);
	s27 = RegExpBenchmark$computeInputVariants$SN('9.0  e115', 78);
	s28 = RegExpBenchmark$computeInputVariants$SN('k', 78);
	s29 = RegExpBenchmark$computeInputVariants$SN(str2, 81);
	s30 = RegExpBenchmark$computeInputVariants$SN(str3, 81);
	s31 = RegExpBenchmark$computeInputVariants$SN('144631658', 78);
	s32 = RegExpBenchmark$computeInputVariants$SN('Pbhagel=IIZ%3Q', 78);
	s33 = RegExpBenchmark$computeInputVariants$SN('Pbhagel=IIZ=', 78);
	s34 = RegExpBenchmark$computeInputVariants$SN('CersreerqPhygherCraqvat=', 78);
	s35 = RegExpBenchmark$computeInputVariants$SN(str4, 78);
	s36 = RegExpBenchmark$computeInputVariants$SN(str5, 78);
	s37 = RegExpBenchmark$computeInputVariants$SN('__hgzp=144631658', 78);
	s38 = RegExpBenchmark$computeInputVariants$SN('gvzrMbar=-8', 78);
	s39 = RegExpBenchmark$computeInputVariants$SN('gvzrMbar=0', 78);
	s41 = RegExpBenchmark$computeInputVariants$SN('vachggrkg  QBZPbageby_cynprubyqre', 78);
	s42 = RegExpBenchmark$computeInputVariants$SN('xrlqbja', 78);
	s43 = RegExpBenchmark$computeInputVariants$SN('xrlhc', 78);
	s44 = RegExpBenchmark$computeInputVariants$SN('uggc://zrffntvat.zlfcnpr.pbz/vaqrk.psz', 77);
	s45 = RegExpBenchmark$computeInputVariants$SN('FrffvbaFgbentr=%7O%22GnoThvq%22%3N%7O%22thvq%22%3N1231367125017%7Q%7Q', 73);
	s46 = RegExpBenchmark$computeInputVariants$SN(str6, 72);
	s47 = RegExpBenchmark$computeInputVariants$SN('3.5.0.0', 70);
	s48 = RegExpBenchmark$computeInputVariants$SN(str7, 70);
	s49 = RegExpBenchmark$computeInputVariants$SN(str8, 70);
	s50 = RegExpBenchmark$computeInputVariants$SN(str9, 70);
	s51 = RegExpBenchmark$computeInputVariants$SN('NI%3Q1_CI%3Q1_PI%3Q1_EI%3Q1_HI%3Q1_HP%3Q1_IC%3Q0.0.0.0_IH%3Q0', 70);
	s52 = RegExpBenchmark$computeInputVariants$SN('svz_zlfcnpr_ubzrcntr_abgybttrqva,svz_zlfcnpr_aba_HTP,svz_zlfcnpr_havgrq-fgngrf', 70);
	s53 = RegExpBenchmark$computeInputVariants$SN('ybnqvat', 70);
	s54 = RegExpBenchmark$computeInputVariants$SN('#', 68);
	s55 = RegExpBenchmark$computeInputVariants$SN('ybnqrq', 68);
	s56 = RegExpBenchmark$computeInputVariants$SN('pbybe', 49);
	s57 = RegExpBenchmark$computeInputVariants$SN('uggc://sevraqf.zlfcnpr.pbz/vaqrk.psz', 44);
	this.runBlock1 = (function () {
		var i;
		for (i = 0; i < 81; i++) {
			re8.exec(s26[i]);
		}
		for (i = 0; i < 78; i++) {
			s27[i].replace(/(\s)+e/, '');
			s28[i].replace(/./, '');
			s29[i].replace(re17, '');
			s30[i].replace(re17, '');
			re8.exec(s31[i]);
			re8.exec(s32[i]);
			re8.exec(s33[i]);
			re8.exec(s34[i]);
			re8.exec(s35[i]);
			re8.exec(s36[i]);
			re8.exec(s37[i]);
			re8.exec(s38[i]);
			re8.exec(s39[i]);
			/Fnsnev\/(\d+\.\d+)/.exec(s15[i]);
			re3.exec(s41[i]);
			re0.exec(s42[i]);
			re0.exec(s43[i]);
		}
		for (i = 0; i < 77; i++) {
			s44[i].replace(re12, '');
			re13.exec(s44[i]);
		}
		for (i = 0; i < 73; i++) {
			s45[i].replace(re18, '');
		}
		for (i = 0; i < 72; i++) {
			re1.exec(s46[i]);
		}
		for (i = 0; i < 71; i++) {
			re19.exec('');
		}
		for (i = 0; i < 70; i++) {
			s47[i].replace(re11, '');
			s48[i].replace(/d1/g, '');
			s49[i].replace(/NQ_VQ/g, '');
			s50[i].replace(/d2/g, '');
			s51[i].replace(/_/g, '');
			s52[i].split(re20);
			re21.exec(s53[i]);
		}
		for (i = 0; i < 68; i++) {
			re1.exec(s54[i]);
			/(?:ZFVR.(\d+\.\d+))|(?:(?:Sversbk|TenaCnenqvfb|Vprjrnfry).(\d+\.\d+))|(?:Bcren.(\d+\.\d+))|(?:NccyrJroXvg.(\d+(?:\.\d+)?))/.exec(s15[i]);
			/(Znp BF K)|(Jvaqbjf;)/.exec(s15[i]);
			/Trpxb\/([0-9]+)/.exec(s15[i]);
			re21.exec(s55[i]);
		}
		for (i = 0; i < 49; i++) {
			re16.exec(s56[i]);
		}
		for (i = 0; i < 44; i++) {
			s57[i].replace(re12, '');
			re13.exec(s57[i]);
		}
	});
	re22 = /\bso_zrah\b/;
	re23 = /^(?:(?:[^:\/?#]+):)?(?:\/\/(?:[^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/;
	re24 = /uggcf?:\/\/([^\/]+\.)?snprobbx\.pbz\//;
	re25 = /"/g;
	re26 = /^([^?#]+)(?:\?([^#]*))?(#.*)?/;
	s57a = RegExpBenchmark$computeInputVariants$SN('fryrpgrq', 40);
	s58 = RegExpBenchmark$computeInputVariants$SN('vachggrkg uvqqra_ryrz', 40);
	s59 = RegExpBenchmark$computeInputVariants$SN('vachggrkg ', 40);
	s60 = RegExpBenchmark$computeInputVariants$SN('vachggrkg', 40);
	s61 = RegExpBenchmark$computeInputVariants$SN('uggc://jjj.snprobbx.pbz/', 40);
	s62 = RegExpBenchmark$computeInputVariants$SN('uggc://jjj.snprobbx.pbz/ybtva.cuc', 40);
	s63 = RegExpBenchmark$computeInputVariants$SN('Funer guvf tnqtrg', 40);
	s64 = RegExpBenchmark$computeInputVariants$SN('uggc://jjj.tbbtyr.pbz/vt/qverpgbel', 40);
	s65 = RegExpBenchmark$computeInputVariants$SN('419', 40);
	s66 = RegExpBenchmark$computeInputVariants$SN('gvzrfgnzc', 40);
	this.runBlock2 = (function () {
		var i;
		for (i = 0; i < 40; i++) {
			s57a[i].replace(re14, '');
			s57a[i].replace(re15, '');
		}
		for (i = 0; i < 39; i++) {
			s58[i].replace(/\buvqqra_ryrz\b/g, '');
			re3.exec(s59[i]);
			re3.exec(s60[i]);
			re22.exec('HVYvaxOhggba');
			re22.exec('HVYvaxOhggba_E');
			re22.exec('HVYvaxOhggba_EJ');
			re22.exec('zrah_ybtva_pbagnvare');
			/\buvqqra_ryrz\b/.exec('vachgcnffjbeq');
		}
		for (i = 0; i < 37; i++) {
			re8.exec('111soqs57qo8o8480qo18sor2011r3n591q7s6s37r120904');
			re8.exec('SbeprqRkcvengvba=633669315660164980');
			re8.exec('FrffvbaQQS2=111soqs57qo8o8480qo18sor2011r3n591q7s6s37r120904');
		}
		for (i = 0; i < 35; i++) {
			'puvyq p1 svefg'.replace(re14, '');
			'puvyq p1 svefg'.replace(re15, '');
			'sylbhg pybfrq'.replace(re14, '');
			'sylbhg pybfrq'.replace(re15, '');
		}
		for (i = 0; i < 34; i++) {
			re19.exec('gno2');
			re19.exec('gno3');
			re8.exec('44132r503660');
			re8.exec('SbeprqRkcvengvba=633669316860113296');
			re8.exec('AFP_zp_dfctwzs-aowb_80=44132r503660');
			re8.exec('FrffvbaQQS2=s6r4579npn4rn2135s904r0s75pp1o5334p6s6pospo12696');
			re8.exec('s6r4579npn4rn2135s904r0s75pp1o5334p6s6pospo12696');
		}
		for (i = 0; i < 32; i++) {
			/puebzr/i.exec(s15[i]);
		}
		for (i = 0; i < 31; i++) {
			s61[i].replace(re23, '');
			re8.exec('SbeprqRkcvengvba=633669358527244818');
			re8.exec('VC=66.249.85.130');
			re8.exec('FrffvbaQQS2=s15q53p9n372sn76npr13o271n4s3p5r29p235746p908p58');
			re8.exec('s15q53p9n372sn76npr13o271n4s3p5r29p235746p908p58');
			re24.exec(s61[i]);
		}
		for (i = 0; i < 30; i++) {
			s65[i].replace(re6, '');
			/(?:^|\s+)gvzrfgnzc(?:\s+|$)/.exec(s66[i]);
			re7.exec(s65[i]);
		}
		for (i = 0; i < 29; i++) {
			s62[i].replace(re23, '');
		}
		for (i = 0; i < 28; i++) {
			s63[i].replace(re25, '');
			s63[i].replace(re12, '');
			re26.exec(s64[i]);
		}
	});
	re27 = /-\D/g;
	re28 = /\bnpgvingr\b/;
	re29 = /%2R/gi;
	re30 = /%2S/gi;
	re31 = /^(mu-(PA|GJ)|wn|xb)$/;
	re32 = /\s?;\s?/;
	re33 = /%\w?$/;
	re34 = /TNQP=([^;]*)/i;
	str10 = 'FrffvbaQQS2=111soqs57qo8o8480qo18sor2011r3n591q7s6s37r120904; ZFPhygher=VC=74.125.75.1&VCPhygher=ra-HF&CersreerqPhygher=ra-HF&CersreerqPhygherCraqvat=&Pbhagel=IIZ=&SbeprqRkcvengvba=633669315660164980&gvzrMbar=0&HFEYBP=DKWyLHAiMTH9AwHjWxAcqUx9GJ91oaEunJ4tIzyyqlMQo3IhqUW5D29xMG1IHlMQo3IhqUW5GzSgMG1Iozy0MJDtH3EuqTImWxEgLHAiMTH9BQN3WxkuqTy0qJEyCGZ3YwDkBGVzGT9hM2y0qJEyCF0kZwVhZQH3APMDo3A0LJkQo2EyCGx0ZQDmWyWyM2yiox5uoJH9D0R=';
	str11 = 'FrffvbaQQS2=111soqs57qo8o8480qo18sor2011r3n591q7s6s37r120904; __hgzm=144631658.1231363570.1.1.hgzpfe=(qverpg)|hgzppa=(qverpg)|hgzpzq=(abar); __hgzn=144631658.3426875219718084000.1231363570.1231363570.1231363570.1; __hgzo=144631658.0.10.1231363570; __hgzp=144631658; ZFPhygher=VC=74.125.75.1&VCPhygher=ra-HF&CersreerqPhygher=ra-HF&Pbhagel=IIZ%3Q&SbeprqRkcvengvba=633669315660164980&gvzrMbar=-8&HFEYBP=DKWyLHAiMTH9AwHjWxAcqUx9GJ91oaEunJ4tIzyyqlMQo3IhqUW5D29xMG1IHlMQo3IhqUW5GzSgMG1Iozy0MJDtH3EuqTImWxEgLHAiMTH9BQN3WxkuqTy0qJEyCGZ3YwDkBGVzGT9hM2y0qJEyCF0kZwVhZQH3APMDo3A0LJkQo2EyCGx0ZQDmWyWyM2yiox5uoJH9D0R%3Q';
	str12 = 'uggc://tbbtyrnqf.t.qbhoyrpyvpx.arg/cntrnq/nqf?pyvrag=pn-svz_zlfcnpr_zlfcnpr-ubzrcntr_wf&qg=1231363514065&uy=ra&nqfnsr=uvtu&br=hgs8&ahz_nqf=4&bhgchg=wf&nqgrfg=bss&pbeeryngbe=1231363514065&punaary=svz_zlfcnpr_ubzrcntr_abgybttrqva%2Psvz_zlfcnpr_aba_HTP%2Psvz_zlfcnpr_havgrq-fgngrf&hey=uggc%3N%2S%2Subzr.zlfcnpr.pbz%2Svaqrk.psz&nq_glcr=grkg&rvq=6083027&rn=0&sez=0&tn_ivq=1326469221.1231363557&tn_fvq=1231363557&tn_uvq=1114636509&synfu=9.0.115&h_u=768&h_j=1024&h_nu=738&h_nj=1024&h_pq=24&h_gm=-480&h_uvf=2&h_wnin=gehr&h_acyht=7&h_azvzr=22';
	str13 = 'ZFPhygher=VC=74.125.75.1&VCPhygher=ra-HF&CersreerqPhygher=ra-HF&Pbhagel=IIZ%3Q&SbeprqRkcvengvba=633669315660164980&gvzrMbar=-8&HFEYBP=DKWyLHAiMTH9AwHjWxAcqUx9GJ91oaEunJ4tIzyyqlMQo3IhqUW5D29xMG1IHlMQo3IhqUW5GzSgMG1Iozy0MJDtH3EuqTImWxEgLHAiMTH9BQN3WxkuqTy0qJEyCGZ3YwDkBGVzGT9hM2y0qJEyCF0kZwVhZQH3APMDo3A0LJkQo2EyCGx0ZQDmWyWyM2yiox5uoJH9D0R%3Q';
	str14 = 'ZFPhygher=VC=74.125.75.1&VCPhygher=ra-HF&CersreerqPhygher=ra-HF&CersreerqPhygherCraqvat=&Pbhagel=IIZ=&SbeprqRkcvengvba=633669315660164980&gvzrMbar=0&HFEYBP=DKWyLHAiMTH9AwHjWxAcqUx9GJ91oaEunJ4tIzyyqlMQo3IhqUW5D29xMG1IHlMQo3IhqUW5GzSgMG1Iozy0MJDtH3EuqTImWxEgLHAiMTH9BQN3WxkuqTy0qJEyCGZ3YwDkBGVzGT9hM2y0qJEyCF0kZwVhZQH3APMDo3A0LJkQo2EyCGx0ZQDmWyWyM2yiox5uoJH9D0R=';
	re35 = /[<>]/g;
	str15 = 'FrffvbaQQS2=s6r4579npn4rn2135s904r0s75pp1o5334p6s6pospo12696; ZFPhygher=VC=74.125.75.1&VCPhygher=ra-HF&CersreerqPhygher=ra-HF&CersreerqPhygherCraqvat=&Pbhagel=IIZ=&SbeprqRkcvengvba=633669316860113296&gvzrMbar=0&HFEYBP=DKWyLHAiMTH9AwHjWxAcqUx9GJ91oaEunJ4tIzyyqlMQo3IhqUW5D29xMG1IHlMQo3IhqUW5GzSgMG1Iozy0MJDtH3EuqTImWxEgLHAiMTH9BQN3WxkuqTy0qJEyCGZ3YwDkBGVzGT9hM2y0qJEyCF0kZwVhZQH3APMDo3A0LJkQo2EyCGx0ZQDmWyWyM2yiox5uoJH9D0R=; AFP_zp_dfctwzs-aowb_80=44132r503660';
	str16 = 'FrffvbaQQS2=s6r4579npn4rn2135s904r0s75pp1o5334p6s6pospo12696; AFP_zp_dfctwzs-aowb_80=44132r503660; __hgzm=144631658.1231363638.1.1.hgzpfe=(qverpg)|hgzppa=(qverpg)|hgzpzq=(abar); __hgzn=144631658.965867047679498800.1231363638.1231363638.1231363638.1; __hgzo=144631658.0.10.1231363638; __hgzp=144631658; ZFPhygher=VC=74.125.75.1&VCPhygher=ra-HF&CersreerqPhygher=ra-HF&Pbhagel=IIZ%3Q&SbeprqRkcvengvba=633669316860113296&gvzrMbar=-8&HFEYBP=DKWyLHAiMTH9AwHjWxAcqUx9GJ91oaEunJ4tIzyyqlMQo3IhqUW5D29xMG1IHlMQo3IhqUW5GzSgMG1Iozy0MJDtH3EuqTImWxEgLHAiMTH9BQN3WxkuqTy0qJEyCGZ3YwDkBGVzGT9hM2y0qJEyCF0kZwVhZQH3APMDo3A0LJkQo2EyCGx0ZQDmWyWyM2yiox5uoJH9D0R%3Q';
	str17 = 'uggc://tbbtyrnqf.t.qbhoyrpyvpx.arg/cntrnq/nqf?pyvrag=pn-svz_zlfcnpr_zlfcnpr-ubzrcntr_wf&qg=1231363621014&uy=ra&nqfnsr=uvtu&br=hgs8&ahz_nqf=4&bhgchg=wf&nqgrfg=bss&pbeeryngbe=1231363621014&punaary=svz_zlfcnpr_ubzrcntr_abgybttrqva%2Psvz_zlfcnpr_aba_HTP%2Psvz_zlfcnpr_havgrq-fgngrf&hey=uggc%3N%2S%2Scebsvyr.zlfcnpr.pbz%2Svaqrk.psz&nq_glcr=grkg&rvq=6083027&rn=0&sez=0&tn_ivq=348699119.1231363624&tn_fvq=1231363624&tn_uvq=895511034&synfu=9.0.115&h_u=768&h_j=1024&h_nu=738&h_nj=1024&h_pq=24&h_gm=-480&h_uvf=2&h_wnin=gehr&h_acyht=7&h_azvzr=22';
	str18 = 'uggc://jjj.yrobapbva.se/yv';
	str19 = 'ZFPhygher=VC=74.125.75.1&VCPhygher=ra-HF&CersreerqPhygher=ra-HF&Pbhagel=IIZ%3Q&SbeprqRkcvengvba=633669316860113296&gvzrMbar=-8&HFEYBP=DKWyLHAiMTH9AwHjWxAcqUx9GJ91oaEunJ4tIzyyqlMQo3IhqUW5D29xMG1IHlMQo3IhqUW5GzSgMG1Iozy0MJDtH3EuqTImWxEgLHAiMTH9BQN3WxkuqTy0qJEyCGZ3YwDkBGVzGT9hM2y0qJEyCF0kZwVhZQH3APMDo3A0LJkQo2EyCGx0ZQDmWyWyM2yiox5uoJH9D0R%3Q';
	str20 = 'ZFPhygher=VC=74.125.75.1&VCPhygher=ra-HF&CersreerqPhygher=ra-HF&CersreerqPhygherCraqvat=&Pbhagel=IIZ=&SbeprqRkcvengvba=633669316860113296&gvzrMbar=0&HFEYBP=DKWyLHAiMTH9AwHjWxAcqUx9GJ91oaEunJ4tIzyyqlMQo3IhqUW5D29xMG1IHlMQo3IhqUW5GzSgMG1Iozy0MJDtH3EuqTImWxEgLHAiMTH9BQN3WxkuqTy0qJEyCGZ3YwDkBGVzGT9hM2y0qJEyCF0kZwVhZQH3APMDo3A0LJkQo2EyCGx0ZQDmWyWyM2yiox5uoJH9D0R=';
	s67 = RegExpBenchmark$computeInputVariants$SN('e115', 27);
	s68 = RegExpBenchmark$computeInputVariants$SN('qvfcynl', 27);
	s69 = RegExpBenchmark$computeInputVariants$SN('cbfvgvba', 27);
	s70 = RegExpBenchmark$computeInputVariants$SN('uggc://jjj.zlfcnpr.pbz/', 27);
	s71 = RegExpBenchmark$computeInputVariants$SN('cntrivrj', 27);
	s72 = RegExpBenchmark$computeInputVariants$SN('VC=74.125.75.3', 27);
	s73 = RegExpBenchmark$computeInputVariants$SN('ra', 27);
	s74 = RegExpBenchmark$computeInputVariants$SN(str10, 27);
	s75 = RegExpBenchmark$computeInputVariants$SN(str11, 27);
	s76 = RegExpBenchmark$computeInputVariants$SN(str12, 27);
	s77 = RegExpBenchmark$computeInputVariants$SN(str17, 27);
	s78 = RegExpBenchmark$computeInputVariants$SN(str18, 27);
	this.runBlock3 = (function () {
		var i;
		for (i = 0; i < 27; i++) {
			s67[i].replace(/[A-Za-z]/g, '');
		}
		for (i = 0; i < 23; i++) {
			s68[i].replace(re27, '');
			s69[i].replace(re27, '');
		}
		for (i = 0; i < 22; i++) {
			'unaqyr'.replace(re14, '');
			'unaqyr'.replace(re15, '');
			'yvar'.replace(re14, '');
			'yvar'.replace(re15, '');
			'cnerag puebzr6 fvatyr1 gno'.replace(re14, '');
			'cnerag puebzr6 fvatyr1 gno'.replace(re15, '');
			'fyvqre'.replace(re14, '');
			'fyvqre'.replace(re15, '');
			re28.exec('');
		}
		for (i = 0; i < 21; i++) {
			s70[i].replace(re12, '');
			re13.exec(s70[i]);
		}
		for (i = 0; i < 20; i++) {
			s71[i].replace(re29, '');
			s71[i].replace(re30, '');
			re19.exec('ynfg');
			re19.exec('ba svefg');
			re8.exec(s72[i]);
		}
		for (i = 0; i < 19; i++) {
			re31.exec(s73[i]);
		}
		for (i = 0; i < 18; i++) {
			s74[i].split(re32);
			s75[i].split(re32);
			s76[i].replace(re33, '');
			re8.exec('144631658.0.10.1231363570');
			re8.exec('144631658.1231363570.1.1.hgzpfe=(qverpg)|hgzppa=(qverpg)|hgzpzq=(abar)');
			re8.exec('144631658.3426875219718084000.1231363570.1231363570.1231363570.1');
			re8.exec(str13);
			re8.exec(str14);
			re8.exec('__hgzn=144631658.3426875219718084000.1231363570.1231363570.1231363570.1');
			re8.exec('__hgzo=144631658.0.10.1231363570');
			re8.exec('__hgzm=144631658.1231363570.1.1.hgzpfe=(qverpg)|hgzppa=(qverpg)|hgzpzq=(abar)');
			re34.exec(s74[i]);
			re34.exec(s75[i]);
		}
		for (i = 0; i < 17; i++) {
			s15[i].match(/zfvr/gi);
			s15[i].match(/bcren/gi);
			str15.split(re32);
			str16.split(re32);
			'ohggba'.replace(re14, '');
			'ohggba'.replace(re15, '');
			'puvyq p1 svefg sylbhg pybfrq'.replace(re14, '');
			'puvyq p1 svefg sylbhg pybfrq'.replace(re15, '');
			'pvgvrf'.replace(re14, '');
			'pvgvrf'.replace(re15, '');
			'pybfrq'.replace(re14, '');
			'pybfrq'.replace(re15, '');
			'qry'.replace(re14, '');
			'qry'.replace(re15, '');
			'uqy_zba'.replace(re14, '');
			'uqy_zba'.replace(re15, '');
			s77[i].replace(re33, '');
			s78[i].replace(/%3P/g, '');
			s78[i].replace(/%3R/g, '');
			s78[i].replace(/%3q/g, '');
			s78[i].replace(re35, '');
			'yvaxyvfg16'.replace(re14, '');
			'yvaxyvfg16'.replace(re15, '');
			'zvahf'.replace(re14, '');
			'zvahf'.replace(re15, '');
			'bcra'.replace(re14, '');
			'bcra'.replace(re15, '');
			'cnerag puebzr5 fvatyr1 ps NU'.replace(re14, '');
			'cnerag puebzr5 fvatyr1 ps NU'.replace(re15, '');
			'cynlre'.replace(re14, '');
			'cynlre'.replace(re15, '');
			'cyhf'.replace(re14, '');
			'cyhf'.replace(re15, '');
			'cb_uqy'.replace(re14, '');
			'cb_uqy'.replace(re15, '');
			'hyJVzt'.replace(re14, '');
			'hyJVzt'.replace(re15, '');
			re8.exec('144631658.0.10.1231363638');
			re8.exec('144631658.1231363638.1.1.hgzpfe=(qverpg)|hgzppa=(qverpg)|hgzpzq=(abar)');
			re8.exec('144631658.965867047679498800.1231363638.1231363638.1231363638.1');
			re8.exec('4413268q3660');
			re8.exec('4ss747o77904333q374or84qrr1s9r0nprp8r5q81534o94n');
			re8.exec('SbeprqRkcvengvba=633669321699093060');
			re8.exec('VC=74.125.75.20');
			re8.exec(str19);
			re8.exec(str20);
			re8.exec('AFP_zp_tfwsbrg-aowb_80=4413268q3660');
			re8.exec('FrffvbaQQS2=4ss747o77904333q374or84qrr1s9r0nprp8r5q81534o94n');
			re8.exec('__hgzn=144631658.965867047679498800.1231363638.1231363638.1231363638.1');
			re8.exec('__hgzo=144631658.0.10.1231363638');
			re8.exec('__hgzm=144631658.1231363638.1.1.hgzpfe=(qverpg)|hgzppa=(qverpg)|hgzpzq=(abar)');
			re34.exec(str15);
			re34.exec(str16);
		}
	});
	re36 = /uers|fep|fryrpgrq/;
	re37 = /\s*([+>~\s])\s*([a-zA-Z#.*:\[])/g;
	re38 = /^(\w+|\*)$/;
	str22 = 'FrffvbaQQS2=s15q53p9n372sn76npr13o271n4s3p5r29p235746p908p58; __hgzm=144631658.1231367822.1.1.hgzpfe=(qverpg)|hgzppa=(qverpg)|hgzpzq=(abar); __hgzn=144631658.4127520630321984500.1231367822.1231367822.1231367822.1; __hgzo=144631658.0.10.1231367822; __hgzp=144631658; ZFPhygher=VC=66.249.85.130&VCPhygher=ra-HF&CersreerqPhygher=ra-HF&Pbhagel=IIZ%3Q&SbeprqRkcvengvba=633669358527244818&gvzrMbar=-8&HFEYBP=DKWyLHAiMTH9AwHjWxAcqUx9GJ91oaEunJ4tIzyyqlMQo3IhqUW5D29xMG1IHlMQo3IhqUW5GzSgMG1Iozy0MJDtH3EuqTImWxEgLHAiMTH9BQN3WxkuqTy0qJEyCGZ3YwDkBGVzGT9hM2y0qJEyCF0kZwVhZQH3APMDo3A0LJkQo2EyCGx0ZQDmWyWyM2yiox5uoJH9D0R%3Q';
	str23 = 'uggc://tbbtyrnqf.t.qbhoyrpyvpx.arg/cntrnq/nqf?pyvrag=pn-svz_zlfcnpr_zlfcnpr-ubzrcntr_wf&qg=1231367803797&uy=ra&nqfnsr=uvtu&br=hgs8&ahz_nqf=4&bhgchg=wf&nqgrfg=bss&pbeeryngbe=1231367803797&punaary=svz_zlfcnpr_ubzrcntr_abgybttrqva%2Psvz_zlfcnpr_aba_HTP%2Psvz_zlfcnpr_havgrq-fgngrf&hey=uggc%3N%2S%2Szrffntvat.zlfcnpr.pbz%2Svaqrk.psz&nq_glcr=grkg&rvq=6083027&rn=0&sez=0&tn_ivq=1192552091.1231367807&tn_fvq=1231367807&tn_uvq=1155446857&synfu=9.0.115&h_u=768&h_j=1024&h_nu=738&h_nj=1024&h_pq=24&h_gm=-480&h_uvf=2&h_wnin=gehr&h_acyht=7&h_azvzr=22';
	str24 = 'ZFPhygher=VC=66.249.85.130&VCPhygher=ra-HF&CersreerqPhygher=ra-HF&Pbhagel=IIZ%3Q&SbeprqRkcvengvba=633669358527244818&gvzrMbar=-8&HFEYBP=DKWyLHAiMTH9AwHjWxAcqUx9GJ91oaEunJ4tIzyyqlMQo3IhqUW5D29xMG1IHlMQo3IhqUW5GzSgMG1Iozy0MJDtH3EuqTImWxEgLHAiMTH9BQN3WxkuqTy0qJEyCGZ3YwDkBGVzGT9hM2y0qJEyCF0kZwVhZQH3APMDo3A0LJkQo2EyCGx0ZQDmWyWyM2yiox5uoJH9D0R%3Q';
	str25 = 'ZFPhygher=VC=66.249.85.130&VCPhygher=ra-HF&CersreerqPhygher=ra-HF&CersreerqPhygherCraqvat=&Pbhagel=IIZ=&SbeprqRkcvengvba=633669358527244818&gvzrMbar=0&HFEYBP=DKWyLHAiMTH9AwHjWxAcqUx9GJ91oaEunJ4tIzyyqlMQo3IhqUW5D29xMG1IHlMQo3IhqUW5GzSgMG1Iozy0MJDtH3EuqTImWxEgLHAiMTH9BQN3WxkuqTy0qJEyCGZ3YwDkBGVzGT9hM2y0qJEyCF0kZwVhZQH3APMDo3A0LJkQo2EyCGx0ZQDmWyWyM2yiox5uoJH9D0R=';
	str26 = 'hy.ynat-fryrpgbe';
	re39 = /\\/g;
	re40 = / /g;
	re41 = /\/\xc4\/t/;
	re42 = /\/\xd6\/t/;
	re43 = /\/\xdc\/t/;
	re44 = /\/\xdf\/t/;
	re45 = /\/\xe4\/t/;
	re46 = /\/\xf6\/t/;
	re47 = /\/\xfc\/t/;
	re48 = /\W/g;
	re49 = /uers|fep|fglyr/;
	s79 = RegExpBenchmark$computeInputVariants$SN('FrffvbaQQS2=s15q53p9n372sn76npr13o271n4s3p5r29p235746p908p58; ZFPhygher=VC=66.249.85.130&VCPhygher=ra-HF&CersreerqPhygher=ra-HF&CersreerqPhygherCraqvat=&Pbhagel=IIZ=&SbeprqRkcvengvba=633669358527244818&gvzrMbar=0&HFEYBP=DKWyLHAiMTH9AwHjWxAcqUx9GJ91oaEunJ4tIzyyqlMQo3IhqUW5D29xMG1IHlMQo3IhqUW5GzSgMG1Iozy0MJDtH3EuqTImWxEgLHAiMTH9BQN3WxkuqTy0qJEyCGZ3YwDkBGVzGT9hM2y0qJEyCF0kZwVhZQH3APMDo3A0LJkQo2EyCGx0ZQDmWyWyM2yiox5uoJH9D0R=', 16);
	s80 = RegExpBenchmark$computeInputVariants$SN(str22, 16);
	s81 = RegExpBenchmark$computeInputVariants$SN(str23, 16);
	s82 = RegExpBenchmark$computeInputVariants$SN(str26, 16);
	this.runBlock4 = (function () {
		var i;
		for (i = 0; i < 16; i++) {
			''.replace(/\*/g, '');
			/\bnpgvir\b/.exec('npgvir');
			/sversbk/i.exec(s15[i]);
			re36.exec('glcr');
			/zfvr/i.exec(s15[i]);
			/bcren/i.exec(s15[i]);
		}
		for (i = 0; i < 15; i++) {
			s79[i].split(re32);
			s80[i].split(re32);
			'uggc://ohyyrgvaf.zlfcnpr.pbz/vaqrk.psz'.replace(re12, '');
			s81[i].replace(re33, '');
			'yv'.replace(re37, '');
			'yv'.replace(re18, '');
			re8.exec('144631658.0.10.1231367822');
			re8.exec('144631658.1231367822.1.1.hgzpfe=(qverpg)|hgzppa=(qverpg)|hgzpzq=(abar)');
			re8.exec('144631658.4127520630321984500.1231367822.1231367822.1231367822.1');
			re8.exec(str24);
			re8.exec(str25);
			re8.exec('__hgzn=144631658.4127520630321984500.1231367822.1231367822.1231367822.1');
			re8.exec('__hgzo=144631658.0.10.1231367822');
			re8.exec('__hgzm=144631658.1231367822.1.1.hgzpfe=(qverpg)|hgzppa=(qverpg)|hgzpzq=(abar)');
			re34.exec(s79[i]);
			re34.exec(s80[i]);
			/\.([\w-]+)|\[(\w+)(?:([!*^$~|]?=)["']?(.*?)["']?)?\]|:([\w-]+)(?:\(["']?(.*?)?["']?\)|$)/g.exec(s82[i]);
			re13.exec('uggc://ohyyrgvaf.zlfcnpr.pbz/vaqrk.psz');
			re38.exec('yv');
		}
		for (i = 0; i < 14; i++) {
			''.replace(re18, '');
			'9.0  e115'.replace(/(\s+e|\s+o[0-9]+)/, '');
			'Funer guvf tnqtrg'.replace(/</g, '');
			'Funer guvf tnqtrg'.replace(/>/g, '');
			'Funer guvf tnqtrg'.replace(re39, '');
			'uggc://cebsvyrrqvg.zlfcnpr.pbz/vaqrk.psz'.replace(re12, '');
			'grnfre'.replace(re40, '');
			'grnfre'.replace(re41, '');
			'grnfre'.replace(re42, '');
			'grnfre'.replace(re43, '');
			'grnfre'.replace(re44, '');
			'grnfre'.replace(re45, '');
			'grnfre'.replace(re46, '');
			'grnfre'.replace(re47, '');
			'grnfre'.replace(re48, '');
			re16.exec('znetva-gbc');
			re16.exec('cbfvgvba');
			re19.exec('gno1');
			re9.exec('qz');
			re9.exec('qg');
			re9.exec('zbqobk');
			re9.exec('zbqobkva');
			re9.exec('zbqgvgyr');
			re13.exec('uggc://cebsvyrrqvg.zlfcnpr.pbz/vaqrk.psz');
			re26.exec('/vt/znvytnqtrg');
			re49.exec('glcr');
		}
	});
	re50 = /(?:^|\s+)fryrpgrq(?:\s+|$)/;
	re51 = /\&/g;
	re52 = /\+/g;
	re53 = /\?/g;
	re54 = /\t/g;
	re55 = /(\$\{nqiHey\})|(\$nqiHey\b)/g;
	re56 = /(\$\{cngu\})|(\$cngu\b)/g;
	this.runBlock5 = (function () {
		var i;
		for (i = 0; i < 13; i++) {
			'purpx'.replace(re14, '');
			'purpx'.replace(re15, '');
			'pvgl'.replace(re14, '');
			'pvgl'.replace(re15, '');
			'qrpe fyvqrgrkg'.replace(re14, '');
			'qrpe fyvqrgrkg'.replace(re15, '');
			'svefg fryrpgrq'.replace(re14, '');
			'svefg fryrpgrq'.replace(re15, '');
			'uqy_rag'.replace(re14, '');
			'uqy_rag'.replace(re15, '');
			'vape fyvqrgrkg'.replace(re14, '');
			'vape fyvqrgrkg'.replace(re15, '');
			'vachggrkg QBZPbageby_cynprubyqre'.replace(re5, '');
			'cnerag puebzr6 fvatyr1 gno fryrpgrq'.replace(re14, '');
			'cnerag puebzr6 fvatyr1 gno fryrpgrq'.replace(re15, '');
			'cb_guz'.replace(re14, '');
			'cb_guz'.replace(re15, '');
			'fhozvg'.replace(re14, '');
			'fhozvg'.replace(re15, '');
			re50.exec('');
			/NccyrJroXvg\/([^\s]*)/.exec(s15[i]);
			/XUGZY/.exec(s15[i]);
		}
		for (i = 0; i < 12; i++) {
			'${cebg}://${ubfg}${cngu}/${dz}'.replace(/(\$\{cebg\})|(\$cebg\b)/g, '');
			'1'.replace(re40, '');
			'1'.replace(re10, '');
			'1'.replace(re51, '');
			'1'.replace(re52, '');
			'1'.replace(re53, '');
			'1'.replace(re39, '');
			'1'.replace(re54, '');
			'9.0  e115'.replace(/^(.*)\..*$/, '');
			'9.0  e115'.replace(/^.*e(.*)$/, '');
			'<!-- ${nqiHey} -->'.replace(re55, '');
			'<fpevcg glcr="grkg/wninfpevcg" fep="${nqiHey}"></fpevcg>'.replace(re55, '');
			s21[i].replace(/^.*\s+(\S+\s+\S+$)/, '');
			'tzk%2Subzrcntr%2Sfgneg%2Sqr%2S'.replace(re30, '');
			'tzk'.replace(re30, '');
			'uggc://${ubfg}${cngu}/${dz}'.replace(/(\$\{ubfg\})|(\$ubfg\b)/g, '');
			'uggc://nqpyvrag.hvzfrei.arg${cngu}/${dz}'.replace(re56, '');
			'uggc://nqpyvrag.hvzfrei.arg/wf.at/${dz}'.replace(/(\$\{dz\})|(\$dz\b)/g, '');
			'frpgvba'.replace(re29, '');
			'frpgvba'.replace(re30, '');
			'fvgr'.replace(re29, '');
			'fvgr'.replace(re30, '');
			'fcrpvny'.replace(re29, '');
			'fcrpvny'.replace(re30, '');
			re36.exec('anzr');
			/e/.exec('9.0  e115');
		}
	});
	re57 = /##yv4##/gi;
	re58 = /##yv16##/gi;
	re59 = /##yv19##/gi;
	str28 = '<hy pynff="nqi"><yv vq="YvOYG4" fglyr="onpxtebhaq-vzntr:hey(uggc://vzt.jykef.pbz/~Yvir.FvgrPbagrag.VQ/~14.2.1230/~/~/~/oyg4.cat)">Cbjreshy Zvpebfbsg grpuabybtl urycf svtug fcnz naq vzcebir frphevgl.##yv19##Trg zber qbar gunaxf gb terngre rnfr naq fcrrq.##yv16##Ybgf bs fgbentr &#40;5 TO&#41; - zber pbby fghss ba gur jnl.##OE## ##OE## ##N##Yrnea zber##/N##</hy>';
	str29 = '<hy pynff="nqi"><yv vq="YvOYG4" fglyr="onpxtebhaq-vzntr:hey(uggc://vzt.jykef.pbz/~Yvir.FvgrPbagrag.VQ/~14.2.1230/~/~/~/oyg4.cat)">Cbjreshy Zvpebfbsg grpuabybtl urycf svtug fcnz naq vzcebir frphevgl.##yv19##Trg zber qbar gunaxf gb terngre rnfr naq fcrrq.<yv vq="YvOYG16" fglyr="onpxtebhaq-vzntr:hey(uggc://vzt.jykef.pbz/~Yvir.FvgrPbagrag.VQ/~14.2.1230/~/~/~/oyg16.cat)">Ybgf bs fgbentr &#40;5 TO&#41; - zber pbby fghss ba gur jnl.##OE## ##OE## ##N##Yrnea zber##/N##</hy>';
	str30 = '<hy pynff="nqi"><yv vq="YvOYG4" fglyr="onpxtebhaq-vzntr:hey(uggc://vzt.jykef.pbz/~Yvir.FvgrPbagrag.VQ/~14.2.1230/~/~/~/oyg4.cat)">Cbjreshy Zvpebfbsg grpuabybtl urycf svtug fcnz naq vzcebir frphevgl.<yv vq="YvOYG19" fglyr="onpxtebhaq-vzntr:hey(uggc://vzt.jykef.pbz/~Yvir.FvgrPbagrag.VQ/~14.2.1230/~/~/~/oyg19.cat)">Trg zber qbar gunaxf gb terngre rnfr naq fcrrq.<yv vq="YvOYG16" fglyr="onpxtebhaq-vzntr:hey(uggc://vzt.jykef.pbz/~Yvir.FvgrPbagrag.VQ/~14.2.1230/~/~/~/oyg16.cat)">Ybgf bs fgbentr &#40;5 TO&#41; - zber pbby fghss ba gur jnl.##OE## ##OE## ##N##Yrnea zber##/N##</hy>';
	str31 = '<hy pynff="nqi"><yv vq="YvOYG4" fglyr="onpxtebhaq-vzntr:hey(uggc://vzt.jykef.pbz/~Yvir.FvgrPbagrag.VQ/~14.2.1230/~/~/~/oyg4.cat)">Cbjreshy Zvpebfbsg grpuabybtl urycf svtug fcnz naq vzcebir frphevgl.<yv vq="YvOYG19" fglyr="onpxtebhaq-vzntr:hey(uggc://vzt.jykef.pbz/~Yvir.FvgrPbagrag.VQ/~14.2.1230/~/~/~/oyg19.cat)">Trg zber qbar gunaxf gb terngre rnfr naq fcrrq.<yv vq="YvOYG16" fglyr="onpxtebhaq-vzntr:hey(uggc://vzt.jykef.pbz/~Yvir.FvgrPbagrag.VQ/~14.2.1230/~/~/~/oyg16.cat)">Ybgf bs fgbentr &#40;5 TO&#41; - zber pbby fghss ba gur jnl.<oe> <oe> ##N##Yrnea zber##/N##</hy>';
	str32 = '<hy pynff="nqi"><yv vq="YvOYG4" fglyr="onpxtebhaq-vzntr:hey(uggc://vzt.jykef.pbz/~Yvir.FvgrPbagrag.VQ/~14.2.1230/~/~/~/oyg4.cat)">Cbjreshy Zvpebfbsg grpuabybtl urycf svtug fcnz naq vzcebir frphevgl.<yv vq="YvOYG19" fglyr="onpxtebhaq-vzntr:hey(uggc://vzt.jykef.pbz/~Yvir.FvgrPbagrag.VQ/~14.2.1230/~/~/~/oyg19.cat)">Trg zber qbar gunaxf gb terngre rnfr naq fcrrq.<yv vq="YvOYG16" fglyr="onpxtebhaq-vzntr:hey(uggc://vzt.jykef.pbz/~Yvir.FvgrPbagrag.VQ/~14.2.1230/~/~/~/oyg16.cat)">Ybgf bs fgbentr &#40;5 TO&#41; - zber pbby fghss ba gur jnl.<oe> <oe> <n uers="uggc://znvy.yvir.pbz/znvy/nobhg.nfck" gnetrg="_oynax">Yrnea zber##/N##</hy>';
	str33 = 'Bar Jvaqbjf Yvir VQ trgf lbh vagb <o>Ubgznvy</o>, <o>Zrffratre</o>, <o>Kobk YVIR</o> \u2014 naq bgure cynprf lbh frr #~#argjbexybtb#~#';
	re60 = /(?:^|\s+)bss(?:\s+|$)/;
	re61 = /^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/;
	re62 = /^[^<]*(<(.|\s)+>)[^>]*$|^#(\w+)$/;
	str34 = '${1}://${2}${3}${4}${5}';
	str35 = ' O=6gnyg0g4znrrn&o=3&f=gc; Q=_lyu=K3bQZGSxnT4lZzD3OS9GNmV3ZGLkAQxRpTyxNmRlZmRmAmNkAQLRqTImqNZjOUEgpTjQnJ5xMKtgoN--; SCF=qy';
	s83 = RegExpBenchmark$computeInputVariants$SN('<hy pynff="nqi">##yv4##Cbjreshy Zvpebfbsg grpuabybtl urycf svtug fcnz naq vzcebir frphevgl.##yv19##Trg zber qbar gunaxf gb terngre rnfr naq fcrrq.##yv16##Ybgf bs fgbentr &#40;5 TO&#41; - zber pbby fghss ba gur jnl.##OE## ##OE## ##N##Yrnea zber##/N##</hy>', 11);
	s84 = RegExpBenchmark$computeInputVariants$SN(str28, 11);
	s85 = RegExpBenchmark$computeInputVariants$SN(str29, 11);
	s86 = RegExpBenchmark$computeInputVariants$SN(str30, 11);
	s87 = RegExpBenchmark$computeInputVariants$SN(str31, 11);
	s88 = RegExpBenchmark$computeInputVariants$SN(str32, 11);
	s89 = RegExpBenchmark$computeInputVariants$SN(str33, 11);
	s90 = RegExpBenchmark$computeInputVariants$SN(str34, 11);
	this.runBlock6 = (function () {
		var i;
		for (i = 0; i < 11; i++) {
			s83[i].replace(/##yv0##/gi, '');
			s83[i].replace(re57, '');
			s84[i].replace(re58, '');
			s85[i].replace(re59, '');
			s86[i].replace(/##\/o##/gi, '');
			s86[i].replace(/##\/v##/gi, '');
			s86[i].replace(/##\/h##/gi, '');
			s86[i].replace(/##o##/gi, '');
			s86[i].replace(/##oe##/gi, '');
			s86[i].replace(/##v##/gi, '');
			s86[i].replace(/##h##/gi, '');
			s87[i].replace(/##n##/gi, '');
			s88[i].replace(/##\/n##/gi, '');
			s89[i].replace(/#~#argjbexybtb#~#/g, '');
			/ Zbovyr\//.exec(s15[i]);
			/##yv1##/gi.exec(s83[i]);
			/##yv10##/gi.exec(s84[i]);
			/##yv11##/gi.exec(s84[i]);
			/##yv12##/gi.exec(s84[i]);
			/##yv13##/gi.exec(s84[i]);
			/##yv14##/gi.exec(s84[i]);
			/##yv15##/gi.exec(s84[i]);
			re58.exec(s84[i]);
			/##yv17##/gi.exec(s85[i]);
			/##yv18##/gi.exec(s85[i]);
			re59.exec(s85[i]);
			/##yv2##/gi.exec(s83[i]);
			/##yv20##/gi.exec(s86[i]);
			/##yv21##/gi.exec(s86[i]);
			/##yv22##/gi.exec(s86[i]);
			/##yv23##/gi.exec(s86[i]);
			/##yv3##/gi.exec(s83[i]);
			re57.exec(s83[i]);
			/##yv5##/gi.exec(s84[i]);
			/##yv6##/gi.exec(s84[i]);
			/##yv7##/gi.exec(s84[i]);
			/##yv8##/gi.exec(s84[i]);
			/##yv9##/gi.exec(s84[i]);
			re8.exec('473qq1rs0n2r70q9qo1pq48n021s9468ron90nps048p4p29');
			re8.exec('SbeprqRkcvengvba=633669325184628362');
			re8.exec('FrffvbaQQS2=473qq1rs0n2r70q9qo1pq48n021s9468ron90nps048p4p29');
			/AbxvnA[^\/]*/.exec(s15[i]);
		}
		for (i = 0; i < 10; i++) {
			' bss'.replace(/(?:^|\s+)bss(?:\s+|$)/g, '');
			s90[i].replace(/(\$\{0\})|(\$0\b)/g, '');
			s90[i].replace(/(\$\{1\})|(\$1\b)/g, '');
			s90[i].replace(/(\$\{pbzcyrgr\})|(\$pbzcyrgr\b)/g, '');
			s90[i].replace(/(\$\{sentzrag\})|(\$sentzrag\b)/g, '');
			s90[i].replace(/(\$\{ubfgcbeg\})|(\$ubfgcbeg\b)/g, '');
			s90[i].replace(re56, '');
			s90[i].replace(/(\$\{cebgbpby\})|(\$cebgbpby\b)/g, '');
			s90[i].replace(/(\$\{dhrel\})|(\$dhrel\b)/g, '');
			'nqfvmr'.replace(re29, '');
			'nqfvmr'.replace(re30, '');
			'uggc://${2}${3}${4}${5}'.replace(/(\$\{2\})|(\$2\b)/g, '');
			'uggc://wf.hv-cbegny.qr${3}${4}${5}'.replace(/(\$\{3\})|(\$3\b)/g, '');
			'arjf'.replace(re40, '');
			'arjf'.replace(re41, '');
			'arjf'.replace(re42, '');
			'arjf'.replace(re43, '');
			'arjf'.replace(re44, '');
			'arjf'.replace(re45, '');
			'arjf'.replace(re46, '');
			'arjf'.replace(re47, '');
			'arjf'.replace(re48, '');
			/ PC=i=(\d+)&oe=(.)/.exec(str35);
			re60.exec(' ');
			re60.exec(' bss');
			re60.exec('');
			re19.exec(' ');
			re19.exec('svefg ba');
			re19.exec('ynfg vtaber');
			re19.exec('ba');
			re9.exec('scnq so ');
			re9.exec('zrqvgobk');
			re9.exec('hsgy');
			re9.exec('lhv-h');
			/Fnsnev|Xbadhrebe|XUGZY/gi.exec(s15[i]);
			re61.exec('uggc://wf.hv-cbegny.qr/tzk/ubzr/wf/20080602/onfr.wf');
			re62.exec('#Ybtva_rznvy');
		}
	});
	re63 = /\{0\}/g;
	str37 = 'FrffvbaQQS2=4ss747o77904333q374or84qrr1s9r0nprp8r5q81534o94n; AFP_zp_tfwsbrg-aowb_80=4413268q3660; __hgzm=144631658.1231364074.1.1.hgzpfe=(qverpg)|hgzppa=(qverpg)|hgzpzq=(abar); __hgzn=144631658.2294274870215848400.1231364074.1231364074.1231364074.1; __hgzo=144631658.0.10.1231364074; __hgzp=144631658; ZFPhygher=VC=74.125.75.20&VCPhygher=ra-HF&CersreerqPhygher=ra-HF&Pbhagel=IIZ%3Q&SbeprqRkcvengvba=633669321699093060&gvzrMbar=-8&HFEYBP=DKWyLHAiMTH9AwHjWxAcqUx9GJ91oaEunJ4tIzyyqlMQo3IhqUW5D29xMG1IHlMQo3IhqUW5GzSgMG1Iozy0MJDtH3EuqTImWxEgLHAiMTH9BQN3WxkuqTy0qJEyCGZ3YwDkBGVzGT9hM2y0qJEyCF0kZwVhZQH3APMDo3A0LJkQo2EyCGx0ZQDmWyWyM2yiox5uoJH9D0R%3Q';
	str38 = 'uggc://tbbtyrnqf.t.qbhoyrpyvpx.arg/cntrnq/nqf?pyvrag=pn-svz_zlfcnpr_zlfcnpr-ubzrcntr_wf&qg=1231364057761&uy=ra&nqfnsr=uvtu&br=hgs8&ahz_nqf=4&bhgchg=wf&nqgrfg=bss&pbeeryngbe=1231364057761&punaary=svz_zlfcnpr_ubzrcntr_abgybttrqva%2Psvz_zlfcnpr_aba_HTP%2Psvz_zlfcnpr_havgrq-fgngrf&hey=uggc%3N%2S%2Ssevraqf.zlfcnpr.pbz%2Svaqrk.psz&nq_glcr=grkg&rvq=6083027&rn=0&sez=0&tn_ivq=1667363813.1231364061&tn_fvq=1231364061&tn_uvq=1917563877&synfu=9.0.115&h_u=768&h_j=1024&h_nu=738&h_nj=1024&h_pq=24&h_gm=-480&h_uvf=2&h_wnin=gehr&h_acyht=7&h_azvzr=22';
	str39 = 'ZFPhygher=VC=74.125.75.20&VCPhygher=ra-HF&CersreerqPhygher=ra-HF&Pbhagel=IIZ%3Q&SbeprqRkcvengvba=633669321699093060&gvzrMbar=-8&HFEYBP=DKWyLHAiMTH9AwHjWxAcqUx9GJ91oaEunJ4tIzyyqlMQo3IhqUW5D29xMG1IHlMQo3IhqUW5GzSgMG1Iozy0MJDtH3EuqTImWxEgLHAiMTH9BQN3WxkuqTy0qJEyCGZ3YwDkBGVzGT9hM2y0qJEyCF0kZwVhZQH3APMDo3A0LJkQo2EyCGx0ZQDmWyWyM2yiox5uoJH9D0R%3Q';
	str40 = 'ZFPhygher=VC=74.125.75.20&VCPhygher=ra-HF&CersreerqPhygher=ra-HF&CersreerqPhygherCraqvat=&Pbhagel=IIZ=&SbeprqRkcvengvba=633669321699093060&gvzrMbar=0&HFEYBP=DKWyLHAiMTH9AwHjWxAcqUx9GJ91oaEunJ4tIzyyqlMQo3IhqUW5D29xMG1IHlMQo3IhqUW5GzSgMG1Iozy0MJDtH3EuqTImWxEgLHAiMTH9BQN3WxkuqTy0qJEyCGZ3YwDkBGVzGT9hM2y0qJEyCF0kZwVhZQH3APMDo3A0LJkQo2EyCGx0ZQDmWyWyM2yiox5uoJH9D0R=';
	s91 = RegExpBenchmark$computeInputVariants$SN('FrffvbaQQS2=4ss747o77904333q374or84qrr1s9r0nprp8r5q81534o94n; ZFPhygher=VC=74.125.75.20&VCPhygher=ra-HF&CersreerqPhygher=ra-HF&CersreerqPhygherCraqvat=&Pbhagel=IIZ=&SbeprqRkcvengvba=633669321699093060&gvzrMbar=0&HFEYBP=DKWyLHAiMTH9AwHjWxAcqUx9GJ91oaEunJ4tIzyyqlMQo3IhqUW5D29xMG1IHlMQo3IhqUW5GzSgMG1Iozy0MJDtH3EuqTImWxEgLHAiMTH9BQN3WxkuqTy0qJEyCGZ3YwDkBGVzGT9hM2y0qJEyCF0kZwVhZQH3APMDo3A0LJkQo2EyCGx0ZQDmWyWyM2yiox5uoJH9D0R=; AFP_zp_tfwsbrg-aowb_80=4413268q3660', 9);
	s92 = RegExpBenchmark$computeInputVariants$SN(str37, 9);
	s93 = RegExpBenchmark$computeInputVariants$SN(str38, 9);
	this.runBlock7 = (function () {
		var i;
		for (i = 0; i < 9; i++) {
			'0'.replace(re40, '');
			'0'.replace(re10, '');
			'0'.replace(re51, '');
			'0'.replace(re52, '');
			'0'.replace(re53, '');
			'0'.replace(re39, '');
			'0'.replace(re54, '');
			'Lrf'.replace(re40, '');
			'Lrf'.replace(re10, '');
			'Lrf'.replace(re51, '');
			'Lrf'.replace(re52, '');
			'Lrf'.replace(re53, '');
			'Lrf'.replace(re39, '');
			'Lrf'.replace(re54, '');
		}
		for (i = 0; i < 8; i++) {
			'Pybfr {0}'.replace(re63, '');
			'Bcra {0}'.replace(re63, '');
			s91[i].split(re32);
			s92[i].split(re32);
			'puvyq p1 svefg gnournqref'.replace(re14, '');
			'puvyq p1 svefg gnournqref'.replace(re15, '');
			'uqy_fcb'.replace(re14, '');
			'uqy_fcb'.replace(re15, '');
			'uvag'.replace(re14, '');
			'uvag'.replace(re15, '');
			s93[i].replace(re33, '');
			'yvfg'.replace(re14, '');
			'yvfg'.replace(re15, '');
			'at_bhgre'.replace(re30, '');
			'cnerag puebzr5 qbhoyr2 NU'.replace(re14, '');
			'cnerag puebzr5 qbhoyr2 NU'.replace(re15, '');
			'cnerag puebzr5 dhnq5 ps NU osyvax zbarl'.replace(re14, '');
			'cnerag puebzr5 dhnq5 ps NU osyvax zbarl'.replace(re15, '');
			'cnerag puebzr6 fvatyr1'.replace(re14, '');
			'cnerag puebzr6 fvatyr1'.replace(re15, '');
			'cb_qrs'.replace(re14, '');
			'cb_qrs'.replace(re15, '');
			'gnopbagrag'.replace(re14, '');
			'gnopbagrag'.replace(re15, '');
			'iv_svefg_gvzr'.replace(re30, '');
			/(^|.)(ronl|qri-ehf3.wbg)(|fgberf|zbgbef|yvirnhpgvbaf|jvxv|rkcerff|punggre).(pbz(|.nh|.pa|.ux|.zl|.ft|.oe|.zk)|pb(.hx|.xe|.am)|pn|qr|se|vg|ay|or|ng|pu|vr|va|rf|cy|cu|fr)$/i.exec('cntrf.ronl.pbz');
			re8.exec('144631658.0.10.1231364074');
			re8.exec('144631658.1231364074.1.1.hgzpfe=(qverpg)|hgzppa=(qverpg)|hgzpzq=(abar)');
			re8.exec('144631658.2294274870215848400.1231364074.1231364074.1231364074.1');
			re8.exec('4413241q3660');
			re8.exec('SbeprqRkcvengvba=633669357391353591');
			re8.exec(str39);
			re8.exec(str40);
			re8.exec('AFP_zp_kkk-gdzogv_80=4413241q3660');
			re8.exec('FrffvbaQQS2=p98s8o9q42nr21or1r61pqorn1n002nsss569635984s6qp7');
			re8.exec('__hgzn=144631658.2294274870215848400.1231364074.1231364074.1231364074.1');
			re8.exec('__hgzo=144631658.0.10.1231364074');
			re8.exec('__hgzm=144631658.1231364074.1.1.hgzpfe=(qverpg)|hgzppa=(qverpg)|hgzpzq=(abar)');
			re8.exec('p98s8o9q42nr21or1r61pqorn1n002nsss569635984s6qp7');
			re34.exec(s91[i]);
			re34.exec(s92[i]);
		}
	});
	re64 = /\b[a-z]/g;
	re65 = /^uggc:\/\//;
	re66 = /(?:^|\s+)qvfnoyrq(?:\s+|$)/;
	str41 = 'uggc://cebsvyr.zlfcnpr.pbz/Zbqhyrf/Nccyvpngvbaf/Cntrf/Pnainf.nfck';
	this.runBlock8 = (function () {
		var i;
		for (i = 0; i < 7; i++) {
			s21[i].match(/\d+/g);
			'nsgre'.replace(re64, '');
			'orsber'.replace(re64, '');
			'obggbz'.replace(re64, '');
			'ohvygva_jrngure.kzy'.replace(re65, '');
			'ohggba'.replace(re37, '');
			'ohggba'.replace(re18, '');
			'qngrgvzr.kzy'.replace(re65, '');
			'uggc://eff.paa.pbz/eff/paa_gbcfgbevrf.eff'.replace(re65, '');
			'vachg'.replace(re37, '');
			'vachg'.replace(re18, '');
			'vafvqr'.replace(re64, '');
			'cbvagre'.replace(re27, '');
			'cbfvgvba'.replace(/[A-Z]/g, '');
			'gbc'.replace(re27, '');
			'gbc'.replace(re64, '');
			'hy'.replace(re37, '');
			'hy'.replace(re18, '');
			str26.replace(re37, '');
			str26.replace(re18, '');
			'lbhghor_vtbbtyr/i2/lbhghor.kzy'.replace(re65, '');
			'm-vaqrk'.replace(re27, '');
			/#([\w-]+)/.exec(str26);
			re16.exec('urvtug');
			re16.exec('znetvaGbc');
			re16.exec('jvqgu');
			re19.exec('gno0 svefg ba');
			re19.exec('gno0 ba');
			re19.exec('gno4 ynfg');
			re19.exec('gno4');
			re19.exec('gno5');
			re19.exec('gno6');
			re19.exec('gno7');
			re19.exec('gno8');
			/NqborNVE\/([^\s]*)/.exec(s15[i]);
			/NccyrJroXvg\/([^ ]*)/.exec(s15[i]);
			/XUGZY/gi.exec(s15[i]);
			/^(?:obql|ugzy)$/i.exec('YV');
			re38.exec('ohggba');
			re38.exec('vachg');
			re38.exec('hy');
			re38.exec(str26);
			/^(\w+|\*)/.exec(str26);
			/znp|jva|yvahk/i.exec('Jva32');
			/eton?\([\d\s,]+\)/.exec('fgngvp');
		}
		for (i = 0; i < 6; i++) {
			''.replace(/\r/g, '');
			'/'.replace(re40, '');
			'/'.replace(re10, '');
			'/'.replace(re51, '');
			'/'.replace(re52, '');
			'/'.replace(re53, '');
			'/'.replace(re39, '');
			'/'.replace(re54, '');
			'uggc://zfacbegny.112.2b7.arg/o/ff/zfacbegnyubzr/1/U.7-cqi-2/{0}?[NDO]&{1}&{2}&[NDR]'.replace(re63, '');
			str41.replace(re12, '');
			'uggc://jjj.snprobbx.pbz/fepu.cuc'.replace(re23, '');
			'freivpr'.replace(re40, '');
			'freivpr'.replace(re41, '');
			'freivpr'.replace(re42, '');
			'freivpr'.replace(re43, '');
			'freivpr'.replace(re44, '');
			'freivpr'.replace(re45, '');
			'freivpr'.replace(re46, '');
			'freivpr'.replace(re47, '');
			'freivpr'.replace(re48, '');
			/((ZFVR\s+([6-9]|\d\d)\.))/.exec(s15[i]);
			re66.exec('');
			re50.exec('fryrpgrq');
			re8.exec('8sqq78r9n442851q565599o401385sp3s04r92rnn7o19ssn');
			re8.exec('SbeprqRkcvengvba=633669340386893867');
			re8.exec('VC=74.125.75.17');
			re8.exec('FrffvbaQQS2=8sqq78r9n442851q565599o401385sp3s04r92rnn7o19ssn');
			/Xbadhrebe|Fnsnev|XUGZY/.exec(s15[i]);
			re13.exec(str41);
			re49.exec('unfsbphf');
		}
	});
	re67 = /zrah_byq/g;
	str43 = 'FrffvbaQQS2=473qq1rs0n2r70q9qo1pq48n021s9468ron90nps048p4p29; __hgzm=144631658.1231364380.1.1.hgzpfe=(qverpg)|hgzppa=(qverpg)|hgzpzq=(abar); __hgzn=144631658.3931862196947939300.1231364380.1231364380.1231364380.1; __hgzo=144631658.0.10.1231364380; __hgzp=144631658; ZFPhygher=VC=74.125.75.3&VCPhygher=ra-HF&CersreerqPhygher=ra-HF&Pbhagel=IIZ%3Q&SbeprqRkcvengvba=633669325184628362&gvzrMbar=-8&HFEYBP=DKWyLHAiMTH9AwHjWxAcqUx9GJ91oaEunJ4tIzyyqlMQo3IhqUW5D29xMG1IHlMQo3IhqUW5GzSgMG1Iozy0MJDtH3EuqTImWxEgLHAiMTH9BQN3WxkuqTy0qJEyCGZ3YwDkBGVzGT9hM2y0qJEyCF0kZwVhZQH3APMDo3A0LJkQo2EyCGx0ZQDmWyWyM2yiox5uoJH9D0R%3Q';
	str44 = 'uggc://tbbtyrnqf.t.qbhoyrpyvpx.arg/cntrnq/nqf?pyvrag=pn-svz_zlfcnpr_vzntrf_wf&qg=1231364373088&uy=ra&nqfnsr=uvtu&br=hgs8&ahz_nqf=4&bhgchg=wf&nqgrfg=bss&pbeeryngbe=1231364373088&punaary=svz_zlfcnpr_hfre-ivrj-pbzzragf%2Psvz_zlfcnpr_havgrq-fgngrf&hey=uggc%3N%2S%2Spbzzrag.zlfcnpr.pbz%2Svaqrk.psz&nq_glcr=grkg&rvq=6083027&rn=0&sez=0&tn_ivq=1158737789.1231364375&tn_fvq=1231364375&tn_uvq=415520832&synfu=9.0.115&h_u=768&h_j=1024&h_nu=738&h_nj=1024&h_pq=24&h_gm=-480&h_uvf=2&h_wnin=gehr&h_acyht=7&h_azvzr=22';
	str45 = 'ZFPhygher=VC=74.125.75.3&VCPhygher=ra-HF&CersreerqPhygher=ra-HF&Pbhagel=IIZ%3Q&SbeprqRkcvengvba=633669325184628362&gvzrMbar=-8&HFEYBP=DKWyLHAiMTH9AwHjWxAcqUx9GJ91oaEunJ4tIzyyqlMQo3IhqUW5D29xMG1IHlMQo3IhqUW5GzSgMG1Iozy0MJDtH3EuqTImWxEgLHAiMTH9BQN3WxkuqTy0qJEyCGZ3YwDkBGVzGT9hM2y0qJEyCF0kZwVhZQH3APMDo3A0LJkQo2EyCGx0ZQDmWyWyM2yiox5uoJH9D0R%3Q';
	str46 = 'ZFPhygher=VC=74.125.75.3&VCPhygher=ra-HF&CersreerqPhygher=ra-HF&CersreerqPhygherCraqvat=&Pbhagel=IIZ=&SbeprqRkcvengvba=633669325184628362&gvzrMbar=0&HFEYBP=DKWyLHAiMTH9AwHjWxAcqUx9GJ91oaEunJ4tIzyyqlMQo3IhqUW5D29xMG1IHlMQo3IhqUW5GzSgMG1Iozy0MJDtH3EuqTImWxEgLHAiMTH9BQN3WxkuqTy0qJEyCGZ3YwDkBGVzGT9hM2y0qJEyCF0kZwVhZQH3APMDo3A0LJkQo2EyCGx0ZQDmWyWyM2yiox5uoJH9D0R=';
	re68 = /^([#.]?)((?:[\w\u0128-\uffff*_-]|\\.)*)/;
	re69 = /\{1\}/g;
	re70 = /\s+/;
	re71 = /(\$\{4\})|(\$4\b)/g;
	re72 = /(\$\{5\})|(\$5\b)/g;
	re73 = /\{2\}/g;
	re74 = /[^+>] [^+>]/;
	re75 = /\bucpyv\s*=\s*([^;]*)/i;
	re76 = /\bucuvqr\s*=\s*([^;]*)/i;
	re77 = /\bucfie\s*=\s*([^;]*)/i;
	re78 = /\bhfucjrn\s*=\s*([^;]*)/i;
	re79 = /\bmvc\s*=\s*([^;]*)/i;
	re80 = /^((?:[\w\u0128-\uffff*_-]|\\.)+)(#)((?:[\w\u0128-\uffff*_-]|\\.)+)/;
	re81 = /^([>+~])\s*(\w*)/i;
	re82 = /^>\s*((?:[\w\u0128-\uffff*_-]|\\.)+)/;
	re83 = /^[\s[]?shapgvba/;
	re84 = /v\/g.tvs#(.*)/i;
	str47 = '#Zbq-Vasb-Vasb-WninFpevcgUvag';
	str48 = ',n.svryqOgaPnapry';
	str49 = 'FrffvbaQQS2=p98s8o9q42nr21or1r61pqorn1n002nsss569635984s6qp7; ZFPhygher=VC=74.125.75.3&VCPhygher=ra-HF&CersreerqPhygher=ra-HF&CersreerqPhygherCraqvat=&Pbhagel=IIZ=&SbeprqRkcvengvba=633669357391353591&gvzrMbar=0&HFEYBP=DKWyLHAiMTH9AwHjWxAcqUx9GJ91oaEunJ4tIzyyqlMQo3IhqUW5D29xMG1IHlMQo3IhqUW5GzSgMG1Iozy0MJDtH3EuqTImWxEgLHAiMTH9BQN3WxkuqTy0qJEyCGZ3YwDkBGVzGT9hM2y0qJEyCF0kZwVhZQH3APMDo3A0LJkQo2EyCGx0ZQDmWyWyM2yiox5uoJH9D0R=; AFP_zp_kkk-gdzogv_80=4413241q3660';
	str50 = 'FrffvbaQQS2=p98s8o9q42nr21or1r61pqorn1n002nsss569635984s6qp7; AFP_zp_kkk-gdzogv_80=4413241q3660; AFP_zp_kkk-aowb_80=4413235p3660; __hgzm=144631658.1231367708.1.1.hgzpfe=(qverpg)|hgzppa=(qverpg)|hgzpzq=(abar); __hgzn=144631658.2770915348920628700.1231367708.1231367708.1231367708.1; __hgzo=144631658.0.10.1231367708; __hgzp=144631658; ZFPhygher=VC=74.125.75.3&VCPhygher=ra-HF&CersreerqPhygher=ra-HF&Pbhagel=IIZ%3Q&SbeprqRkcvengvba=633669357391353591&gvzrMbar=-8&HFEYBP=DKWyLHAiMTH9AwHjWxAcqUx9GJ91oaEunJ4tIzyyqlMQo3IhqUW5D29xMG1IHlMQo3IhqUW5GzSgMG1Iozy0MJDtH3EuqTImWxEgLHAiMTH9BQN3WxkuqTy0qJEyCGZ3YwDkBGVzGT9hM2y0qJEyCF0kZwVhZQH3APMDo3A0LJkQo2EyCGx0ZQDmWyWyM2yiox5uoJH9D0R%3Q';
	str51 = 'uggc://tbbtyrnqf.t.qbhoyrpyvpx.arg/cntrnq/nqf?pyvrag=pn-svz_zlfcnpr_zlfcnpr-ubzrcntr_wf&qg=1231367691141&uy=ra&nqfnsr=uvtu&br=hgs8&ahz_nqf=4&bhgchg=wf&nqgrfg=bss&pbeeryngbe=1231367691141&punaary=svz_zlfcnpr_ubzrcntr_abgybttrqva%2Psvz_zlfcnpr_aba_HTP%2Psvz_zlfcnpr_havgrq-fgngrf&hey=uggc%3N%2S%2Sjjj.zlfcnpr.pbz%2S&nq_glcr=grkg&rvq=6083027&rn=0&sez=0&tn_ivq=320757904.1231367694&tn_fvq=1231367694&tn_uvq=1758792003&synfu=9.0.115&h_u=768&h_j=1024&h_nu=738&h_nj=1024&h_pq=24&h_gm=-480&h_uvf=2&h_wnin=gehr&h_acyht=7&h_azvzr=22';
	str52 = 'uggc://zfacbegny.112.2b7.arg/o/ff/zfacbegnyubzr/1/U.7-cqi-2/f55332979829981?[NDO]&aqu=1&g=7%2S0%2S2009%2014%3N38%3N42%203%20480&af=zfacbegny&cntrAnzr=HF%20UCZFSGJ&t=uggc%3N%2S%2Sjjj.zfa.pbz%2S&f=1024k768&p=24&x=L&oj=994&ou=634&uc=A&{2}&[NDR]';
	str53 = 'cnerag puebzr6 fvatyr1 gno fryrpgrq ovaq qbhoyr2 ps';
	str54 = 'ZFPhygher=VC=74.125.75.3&VCPhygher=ra-HF&CersreerqPhygher=ra-HF&Pbhagel=IIZ%3Q&SbeprqRkcvengvba=633669357391353591&gvzrMbar=-8&HFEYBP=DKWyLHAiMTH9AwHjWxAcqUx9GJ91oaEunJ4tIzyyqlMQo3IhqUW5D29xMG1IHlMQo3IhqUW5GzSgMG1Iozy0MJDtH3EuqTImWxEgLHAiMTH9BQN3WxkuqTy0qJEyCGZ3YwDkBGVzGT9hM2y0qJEyCF0kZwVhZQH3APMDo3A0LJkQo2EyCGx0ZQDmWyWyM2yiox5uoJH9D0R%3Q';
	str55 = 'ZFPhygher=VC=74.125.75.3&VCPhygher=ra-HF&CersreerqPhygher=ra-HF&CersreerqPhygherCraqvat=&Pbhagel=IIZ=&SbeprqRkcvengvba=633669357391353591&gvzrMbar=0&HFEYBP=DKWyLHAiMTH9AwHjWxAcqUx9GJ91oaEunJ4tIzyyqlMQo3IhqUW5D29xMG1IHlMQo3IhqUW5GzSgMG1Iozy0MJDtH3EuqTImWxEgLHAiMTH9BQN3WxkuqTy0qJEyCGZ3YwDkBGVzGT9hM2y0qJEyCF0kZwVhZQH3APMDo3A0LJkQo2EyCGx0ZQDmWyWyM2yiox5uoJH9D0R=';
	str56 = 'ne;ng;nh;or;oe;pn;pu;py;pa;qr;qx;rf;sv;se;to;ux;vq;vr;va;vg;wc;xe;zk;zl;ay;ab;am;cu;cy;cg;eh;fr;ft;gu;ge;gj;mn;';
	str57 = 'ZP1=I=3&THVQ=6nnpr9q661804s33nnop45nosqp17q85; zu=ZFSG; PHYGHER=RA-HF; SyvtugTebhcVq=97; SyvtugVq=OnfrCntr; ucfie=Z:5|S:5|G:5|R:5|Q:oyh|J:S; ucpyv=J.U|Y.|F.|E.|H.Y|P.|U.; hfucjrn=jp:HFPN0746; ZHVQ=Q783SN9O14054831N4869R51P0SO8886&GHVQ=1';
	str58 = 'ZP1=I=3&THVQ=6nnpr9q661804s33nnop45nosqp17q85; zu=ZFSG; PHYGHER=RA-HF; SyvtugTebhcVq=97; SyvtugVq=OnfrCntr; ucfie=Z:5|S:5|G:5|R:5|Q:oyh|J:S; ucpyv=J.U|Y.|F.|E.|H.Y|P.|U.; hfucjrn=jp:HFPN0746; ZHVQ=Q783SN9O14054831N4869R51P0SO8886';
	str59 = 'ZP1=I=3&THVQ=6nnpr9q661804s33nnop45nosqp17q85; zu=ZFSG; PHYGHER=RA-HF; SyvtugTebhcVq=97; SyvtugVq=OnfrCntr; ucfie=Z:5|S:5|G:5|R:5|Q:oyh|J:S; ucpyv=J.U|Y.|F.|E.|H.Y|P.|U.; hfucjrn=jp:HFPN0746; ZHVQ=Q783SN9O14054831N4869R51P0SO8886; mvc=m:94043|yn:37.4154|yb:-122.0585|p:HF|ue:1';
	str60 = 'ZP1=I=3&THVQ=6nnpr9q661804s33nnop45nosqp17q85; zu=ZFSG; PHYGHER=RA-HF; SyvtugTebhcVq=97; SyvtugVq=OnfrCntr; ucfie=Z:5|S:5|G:5|R:5|Q:oyh|J:S; ucpyv=J.U|Y.|F.|E.|H.Y|P.|U.; hfucjrn=jp:HFPN0746; ZHVQ=Q783SN9O14054831N4869R51P0SO8886; mvc=m:94043|yn:37.4154|yb:-122.0585|p:HF';
	str61 = 'uggc://gx2.fgp.f-zfa.pbz/oe/uc/11/ra-hf/pff/v/g.tvs#uggc://gx2.fgo.f-zfa.pbz/v/29/4RQP4969777N048NPS4RRR3PO2S7S.wct';
	str62 = 'uggc://gx2.fgp.f-zfa.pbz/oe/uc/11/ra-hf/pff/v/g.tvs#uggc://gx2.fgo.f-zfa.pbz/v/OQ/63NP9O94NS5OQP1249Q9S1ROP7NS3.wct';
	str63 = 'zbmvyyn/5.0 (jvaqbjf; h; jvaqbjf ag 5.1; ra-hf) nccyrjroxvg/528.9 (xugzy, yvxr trpxb) puebzr/2.0.157.0 fnsnev/528.9';
	s94 = RegExpBenchmark$computeInputVariants$SN('FrffvbaQQS2=473qq1rs0n2r70q9qo1pq48n021s9468ron90nps048p4p29; ZFPhygher=VC=74.125.75.3&VCPhygher=ra-HF&CersreerqPhygher=ra-HF&CersreerqPhygherCraqvat=&Pbhagel=IIZ=&SbeprqRkcvengvba=633669325184628362&gvzrMbar=0&HFEYBP=DKWyLHAiMTH9AwHjWxAcqUx9GJ91oaEunJ4tIzyyqlMQo3IhqUW5D29xMG1IHlMQo3IhqUW5GzSgMG1Iozy0MJDtH3EuqTImWxEgLHAiMTH9BQN3WxkuqTy0qJEyCGZ3YwDkBGVzGT9hM2y0qJEyCF0kZwVhZQH3APMDo3A0LJkQo2EyCGx0ZQDmWyWyM2yiox5uoJH9D0R=', 5);
	s95 = RegExpBenchmark$computeInputVariants$SN(str43, 5);
	s96 = RegExpBenchmark$computeInputVariants$SN(str44, 5);
	s97 = RegExpBenchmark$computeInputVariants$SN(str47, 5);
	s98 = RegExpBenchmark$computeInputVariants$SN(str48, 5);
	s99 = RegExpBenchmark$computeInputVariants$SN(str49, 5);
	s100 = RegExpBenchmark$computeInputVariants$SN(str50, 5);
	s101 = RegExpBenchmark$computeInputVariants$SN(str51, 5);
	s102 = RegExpBenchmark$computeInputVariants$SN(str52, 5);
	s103 = RegExpBenchmark$computeInputVariants$SN(str53, 5);
	this.runBlock9 = (function () {
		var i;
		for (i = 0; i < 5; i++) {
			s94[i].split(re32);
			s95[i].split(re32);
			'svz_zlfcnpr_hfre-ivrj-pbzzragf,svz_zlfcnpr_havgrq-fgngrf'.split(re20);
			s96[i].replace(re33, '');
			'zrah_arj zrah_arj_gbttyr zrah_gbttyr'.replace(re67, '');
			'zrah_byq zrah_byq_gbttyr zrah_gbttyr'.replace(re67, '');
			re8.exec('102n9o0o9pq60132qn0337rr867p75953502q2s27s2s5r98');
			re8.exec('144631658.0.10.1231364380');
			re8.exec('144631658.1231364380.1.1.hgzpfe=(qverpg)|hgzppa=(qverpg)|hgzpzq=(abar)');
			re8.exec('144631658.3931862196947939300.1231364380.1231364380.1231364380.1');
			re8.exec('441326q33660');
			re8.exec('SbeprqRkcvengvba=633669341278771470');
			re8.exec(str45);
			re8.exec(str46);
			re8.exec('AFP_zp_dfctwzssrwh-aowb_80=441326q33660');
			re8.exec('FrffvbaQQS2=102n9o0o9pq60132qn0337rr867p75953502q2s27s2s5r98');
			re8.exec('__hgzn=144631658.3931862196947939300.1231364380.1231364380.1231364380.1');
			re8.exec('__hgzo=144631658.0.10.1231364380');
			re8.exec('__hgzm=144631658.1231364380.1.1.hgzpfe=(qverpg)|hgzppa=(qverpg)|hgzpzq=(abar)');
		}
		for (i = 0; i < 4; i++) {
			' yvfg1'.replace(re14, '');
			' yvfg1'.replace(re15, '');
			' yvfg2'.replace(re14, '');
			' yvfg2'.replace(re15, '');
			' frneputebhc1'.replace(re14, '');
			' frneputebhc1'.replace(re15, '');
			s97[i].replace(re68, '');
			s97[i].replace(re18, '');
			''.replace(/&/g, '');
			''.replace(re35, '');
			'(..-{0})(\|(\d+)|)'.replace(re63, '');
			s98[i].replace(re18, '');
			'//vzt.jro.qr/vij/FC/${cngu}/${anzr}/${inyhr}?gf=${abj}'.replace(re56, '');
			'//vzt.jro.qr/vij/FC/tzk_uc/${anzr}/${inyhr}?gf=${abj}'.replace(/(\$\{anzr\})|(\$anzr\b)/g, '');
			'<fcna pynff="urnq"><o>Jvaqbjf Yvir Ubgznvy</o></fcna><fcna pynff="zft">{1}</fcna>'.replace(re69, '');
			'<fcna pynff="urnq"><o>{0}</o></fcna><fcna pynff="zft">{1}</fcna>'.replace(re63, '');
			'<fcna pynff="fvtahc"><n uers=uggc://jjj.ubgznvy.pbz><o>{1}</o></n></fcna>'.replace(re69, '');
			'<fcna pynff="fvtahc"><n uers={0}><o>{1}</o></n></fcna>'.replace(re63, '');
			'Vzntrf'.replace(re15, '');
			'ZFA'.replace(re15, '');
			'Zncf'.replace(re15, '');
			'Zbq-Vasb-Vasb-WninFpevcgUvag'.replace(re39, '');
			'Arjf'.replace(re15, '');
			s99[i].split(re32);
			s100[i].split(re32);
			'Ivqrb'.replace(re15, '');
			'Jro'.replace(re15, '');
			'n'.replace(re39, '');
			'nwnkFgneg'.split(re70);
			'nwnkFgbc'.split(re70);
			'ovaq'.replace(re14, '');
			'ovaq'.replace(re15, '');
			'oevatf lbh zber. Zber fcnpr (5TO), zber frphevgl, fgvyy serr.'.replace(re63, '');
			'puvyq p1 svefg qrpx'.replace(re14, '');
			'puvyq p1 svefg qrpx'.replace(re15, '');
			'puvyq p1 svefg qbhoyr2'.replace(re14, '');
			'puvyq p1 svefg qbhoyr2'.replace(re15, '');
			'puvyq p2 ynfg'.replace(re14, '');
			'puvyq p2 ynfg'.replace(re15, '');
			'puvyq p2'.replace(re14, '');
			'puvyq p2'.replace(re15, '');
			'puvyq p3'.replace(re14, '');
			'puvyq p3'.replace(re15, '');
			'puvyq p4 ynfg'.replace(re14, '');
			'puvyq p4 ynfg'.replace(re15, '');
			'pbclevtug'.replace(re14, '');
			'pbclevtug'.replace(re15, '');
			'qZFAZR_1'.replace(re14, '');
			'qZFAZR_1'.replace(re15, '');
			'qbhoyr2 ps'.replace(re14, '');
			'qbhoyr2 ps'.replace(re15, '');
			'qbhoyr2'.replace(re14, '');
			'qbhoyr2'.replace(re15, '');
			'uqy_arj'.replace(re14, '');
			'uqy_arj'.replace(re15, '');
			'uc_fubccvatobk'.replace(re30, '');
			'ugzy%2Rvq'.replace(re29, '');
			'ugzy%2Rvq'.replace(re30, '');
			s101[i].replace(re33, '');
			'uggc://wf.hv-cbegny.qr/tzk/ubzr/wf/20080602/cebgbglcr.wf${4}${5}'.replace(re71, '');
			'uggc://wf.hv-cbegny.qr/tzk/ubzr/wf/20080602/cebgbglcr.wf${5}'.replace(re72, '');
			s102[i].replace(re73, '');
			'uggc://zfacbegny.112.2b7.arg/o/ff/zfacbegnyubzr/1/U.7-cqi-2/f55332979829981?[NDO]&{1}&{2}&[NDR]'.replace(re69, '');
			'vztZFSG'.replace(re14, '');
			'vztZFSG'.replace(re15, '');
			'zfasbbg1 ps'.replace(re14, '');
			'zfasbbg1 ps'.replace(re15, '');
			s103[i].replace(re14, '');
			s103[i].replace(re15, '');
			'cnerag puebzr6 fvatyr1 gno fryrpgrq ovaq'.replace(re14, '');
			'cnerag puebzr6 fvatyr1 gno fryrpgrq ovaq'.replace(re15, '');
			'cevznel'.replace(re14, '');
			'cevznel'.replace(re15, '');
			'erpgnatyr'.replace(re30, '');
			'frpbaqnel'.replace(re14, '');
			'frpbaqnel'.replace(re15, '');
			'haybnq'.split(re70);
			'{0}{1}1'.replace(re63, '');
			'|{1}1'.replace(re69, '');
			/(..-HF)(\|(\d+)|)/i.exec('xb-xe,ra-va,gu-gu');
			re4.exec('/ZlFcnprNccf/NccPnainf,45000012');
			re8.exec('144631658.0.10.1231367708');
			re8.exec('144631658.1231367708.1.1.hgzpfe=(qverpg)|hgzppa=(qverpg)|hgzpzq=(abar)');
			re8.exec('144631658.2770915348920628700.1231367708.1231367708.1231367708.1');
			re8.exec('4413235p3660');
			re8.exec('441327q73660');
			re8.exec('9995p6rp12rrnr893334ro7nq70o7p64p69rqn844prs1473');
			re8.exec('SbeprqRkcvengvba=633669350559478880');
			re8.exec(str54);
			re8.exec(str55);
			re8.exec('AFP_zp_dfctwzs-aowb_80=441327q73660');
			re8.exec('AFP_zp_kkk-aowb_80=4413235p3660');
			re8.exec('FrffvbaQQS2=9995p6rp12rrnr893334ro7nq70o7p64p69rqn844prs1473');
			re8.exec('__hgzn=144631658.2770915348920628700.1231367708.1231367708.1231367708.1');
			re8.exec('__hgzo=144631658.0.10.1231367708');
			re8.exec('__hgzm=144631658.1231367708.1.1.hgzpfe=(qverpg)|hgzppa=(qverpg)|hgzpzq=(abar)');
			re34.exec(s99[i]);
			re34.exec(s100[i]);
			/ZFVR\s+5[.]01/.exec(s15[i]);
			/HF(?=;)/i.exec(str56);
			re74.exec(s97[i]);
			re28.exec('svefg npgvir svefgNpgvir');
			re28.exec('ynfg');
			/\bp:(..)/i.exec('m:94043|yn:37.4154|yb:-122.0585|p:HF');
			re75.exec(str57);
			re75.exec(str58);
			re76.exec(str57);
			re76.exec(str58);
			re77.exec(str57);
			re77.exec(str58);
			/\bhfucce\s*=\s*([^;]*)/i.exec(str59);
			re78.exec(str57);
			re78.exec(str58);
			/\bjci\s*=\s*([^;]*)/i.exec(str59);
			re79.exec(str58);
			re79.exec(str60);
			re79.exec(str59);
			/\|p:([a-z]{2})/i.exec('m:94043|yn:37.4154|yb:-122.0585|p:HF|ue:1');
			re80.exec(s97[i]);
			re61.exec('cebgbglcr.wf');
			re68.exec(s97[i]);
			re81.exec(s97[i]);
			re82.exec(s97[i]);
			/^Fubpxjnir Synfu (\d)/.exec(s21[i]);
			/^Fubpxjnir Synfu (\d+)/.exec(s21[i]);
			re83.exec('[bowrpg tybony]');
			re62.exec(s97[i]);
			re84.exec(str61);
			re84.exec(str62);
			/jroxvg/.exec(str63);
		}
	});
	re85 = /eaq_zbqobkva/;
	str64 = '1231365729213';
	str65 = '74.125.75.3-1057165600.29978900';
	str66 = '74.125.75.3-1057165600.29978900.1231365730214';
	str67 = 'Frnepu%20Zvpebfbsg.pbz';
	str68 = 'FrffvbaQQS2=8sqq78r9n442851q565599o401385sp3s04r92rnn7o19ssn; ZFPhygher=VC=74.125.75.17&VCPhygher=ra-HF&CersreerqPhygher=ra-HF&CersreerqPhygherCraqvat=&Pbhagel=IIZ=&SbeprqRkcvengvba=633669340386893867&gvzrMbar=0&HFEYBP=DKWyLHAiMTH9AwHjWxAcqUx9GJ91oaEunJ4tIzyyqlMQo3IhqUW5D29xMG1IHlMQo3IhqUW5GzSgMG1Iozy0MJDtH3EuqTImWxEgLHAiMTH9BQN3WxkuqTy0qJEyCGZ3YwDkBGVzGT9hM2y0qJEyCF0kZwVhZQH3APMDo3A0LJkQo2EyCGx0ZQDmWyWyM2yiox5uoJH9D0R=';
	str69 = 'FrffvbaQQS2=8sqq78r9n442851q565599o401385sp3s04r92rnn7o19ssn; __hgzm=144631658.1231365779.1.1.hgzpfe=(qverpg)|hgzppa=(qverpg)|hgzpzq=(abar); __hgzn=144631658.1877536177953918500.1231365779.1231365779.1231365779.1; __hgzo=144631658.0.10.1231365779; __hgzp=144631658; ZFPhygher=VC=74.125.75.17&VCPhygher=ra-HF&CersreerqPhygher=ra-HF&Pbhagel=IIZ%3Q&SbeprqRkcvengvba=633669340386893867&gvzrMbar=-8&HFEYBP=DKWyLHAiMTH9AwHjWxAcqUx9GJ91oaEunJ4tIzyyqlMQo3IhqUW5D29xMG1IHlMQo3IhqUW5GzSgMG1Iozy0MJDtH3EuqTImWxEgLHAiMTH9BQN3WxkuqTy0qJEyCGZ3YwDkBGVzGT9hM2y0qJEyCF0kZwVhZQH3APMDo3A0LJkQo2EyCGx0ZQDmWyWyM2yiox5uoJH9D0R%3Q';
	str70 = 'I=3%26THVQ=757q3ss871q44o7o805n8113n5p72q52';
	str71 = 'I=3&THVQ=757q3ss871q44o7o805n8113n5p72q52';
	str72 = 'uggc://tbbtyrnqf.t.qbhoyrpyvpx.arg/cntrnq/nqf?pyvrag=pn-svz_zlfcnpr_zlfcnpr-ubzrcntr_wf&qg=1231365765292&uy=ra&nqfnsr=uvtu&br=hgs8&ahz_nqf=4&bhgchg=wf&nqgrfg=bss&pbeeryngbe=1231365765292&punaary=svz_zlfcnpr_ubzrcntr_abgybttrqva%2Psvz_zlfcnpr_aba_HTP%2Psvz_zlfcnpr_havgrq-fgngrf&hey=uggc%3N%2S%2Sohyyrgvaf.zlfcnpr.pbz%2Svaqrk.psz&nq_glcr=grkg&rvq=6083027&rn=0&sez=0&tn_ivq=1579793869.1231365768&tn_fvq=1231365768&tn_uvq=2056210897&synfu=9.0.115&h_u=768&h_j=1024&h_nu=738&h_nj=1024&h_pq=24&h_gm=-480&h_uvf=2&h_wnin=gehr&h_acyht=7&h_azvzr=22';
	str73 = 'frnepu.zvpebfbsg.pbz';
	str74 = 'frnepu.zvpebfbsg.pbz/';
	str75 = 'ZFPhygher=VC=74.125.75.17&VCPhygher=ra-HF&CersreerqPhygher=ra-HF&Pbhagel=IIZ%3Q&SbeprqRkcvengvba=633669340386893867&gvzrMbar=-8&HFEYBP=DKWyLHAiMTH9AwHjWxAcqUx9GJ91oaEunJ4tIzyyqlMQo3IhqUW5D29xMG1IHlMQo3IhqUW5GzSgMG1Iozy0MJDtH3EuqTImWxEgLHAiMTH9BQN3WxkuqTy0qJEyCGZ3YwDkBGVzGT9hM2y0qJEyCF0kZwVhZQH3APMDo3A0LJkQo2EyCGx0ZQDmWyWyM2yiox5uoJH9D0R%3Q';
	str76 = 'ZFPhygher=VC=74.125.75.17&VCPhygher=ra-HF&CersreerqPhygher=ra-HF&CersreerqPhygherCraqvat=&Pbhagel=IIZ=&SbeprqRkcvengvba=633669340386893867&gvzrMbar=0&HFEYBP=DKWyLHAiMTH9AwHjWxAcqUx9GJ91oaEunJ4tIzyyqlMQo3IhqUW5D29xMG1IHlMQo3IhqUW5GzSgMG1Iozy0MJDtH3EuqTImWxEgLHAiMTH9BQN3WxkuqTy0qJEyCGZ3YwDkBGVzGT9hM2y0qJEyCF0kZwVhZQH3APMDo3A0LJkQo2EyCGx0ZQDmWyWyM2yiox5uoJH9D0R=';
	this.runBlock10 = (function () {
		var i;
		for (i = 0; i < 3; i++) {
			'%3Szxg=ra-HF'.replace(re39, '');
			'-8'.replace(re40, '');
			'-8'.replace(re10, '');
			'-8'.replace(re51, '');
			'-8'.replace(re52, '');
			'-8'.replace(re53, '');
			'-8'.replace(re39, '');
			'-8'.replace(re54, '');
			'1.5'.replace(re40, '');
			'1.5'.replace(re10, '');
			'1.5'.replace(re51, '');
			'1.5'.replace(re52, '');
			'1.5'.replace(re53, '');
			'1.5'.replace(re39, '');
			'1.5'.replace(re54, '');
			'1024k768'.replace(re40, '');
			'1024k768'.replace(re10, '');
			'1024k768'.replace(re51, '');
			'1024k768'.replace(re52, '');
			'1024k768'.replace(re53, '');
			'1024k768'.replace(re39, '');
			'1024k768'.replace(re54, '');
			str64.replace(re40, '');
			str64.replace(re10, '');
			str64.replace(re51, '');
			str64.replace(re52, '');
			str64.replace(re53, '');
			str64.replace(re39, '');
			str64.replace(re54, '');
			'14'.replace(re40, '');
			'14'.replace(re10, '');
			'14'.replace(re51, '');
			'14'.replace(re52, '');
			'14'.replace(re53, '');
			'14'.replace(re39, '');
			'14'.replace(re54, '');
			'24'.replace(re40, '');
			'24'.replace(re10, '');
			'24'.replace(re51, '');
			'24'.replace(re52, '');
			'24'.replace(re53, '');
			'24'.replace(re39, '');
			'24'.replace(re54, '');
			str65.replace(re40, '');
			str65.replace(re10, '');
			str65.replace(re51, '');
			str65.replace(re52, '');
			str65.replace(re53, '');
			str65.replace(re39, '');
			str65.replace(re54, '');
			str66.replace(re40, '');
			str66.replace(re10, '');
			str66.replace(re51, '');
			str66.replace(re52, '');
			str66.replace(re53, '');
			str66.replace(re39, '');
			str66.replace(re54, '');
			'9.0'.replace(re40, '');
			'9.0'.replace(re10, '');
			'9.0'.replace(re51, '');
			'9.0'.replace(re52, '');
			'9.0'.replace(re53, '');
			'9.0'.replace(re39, '');
			'9.0'.replace(re54, '');
			'994k634'.replace(re40, '');
			'994k634'.replace(re10, '');
			'994k634'.replace(re51, '');
			'994k634'.replace(re52, '');
			'994k634'.replace(re53, '');
			'994k634'.replace(re39, '');
			'994k634'.replace(re54, '');
			'?zxg=ra-HF'.replace(re40, '');
			'?zxg=ra-HF'.replace(re10, '');
			'?zxg=ra-HF'.replace(re51, '');
			'?zxg=ra-HF'.replace(re52, '');
			'?zxg=ra-HF'.replace(re53, '');
			'?zxg=ra-HF'.replace(re54, '');
			'PAA.pbz'.replace(re25, '');
			'PAA.pbz'.replace(re12, '');
			'PAA.pbz'.replace(re39, '');
			'Qngr & Gvzr'.replace(re25, '');
			'Qngr & Gvzr'.replace(re12, '');
			'Qngr & Gvzr'.replace(re39, '');
			'Frnepu Zvpebfbsg.pbz'.replace(re40, '');
			'Frnepu Zvpebfbsg.pbz'.replace(re54, '');
			str67.replace(re10, '');
			str67.replace(re51, '');
			str67.replace(re52, '');
			str67.replace(re53, '');
			str67.replace(re39, '');
			str68.split(re32);
			str69.split(re32);
			str70.replace(re52, '');
			str70.replace(re53, '');
			str70.replace(re39, '');
			str71.replace(re40, '');
			str71.replace(re10, '');
			str71.replace(re51, '');
			str71.replace(re54, '');
			'Jrngure'.replace(re25, '');
			'Jrngure'.replace(re12, '');
			'Jrngure'.replace(re39, '');
			'LbhGhor'.replace(re25, '');
			'LbhGhor'.replace(re12, '');
			'LbhGhor'.replace(re39, '');
			str72.replace(re33, '');
			'erzbgr_vsenzr_1'.replace(/^erzbgr_vsenzr_/, '');
			str73.replace(re40, '');
			str73.replace(re10, '');
			str73.replace(re51, '');
			str73.replace(re52, '');
			str73.replace(re53, '');
			str73.replace(re39, '');
			str73.replace(re54, '');
			str74.replace(re40, '');
			str74.replace(re10, '');
			str74.replace(re51, '');
			str74.replace(re52, '');
			str74.replace(re53, '');
			str74.replace(re39, '');
			str74.replace(re54, '');
			'lhv-h'.replace(/\-/g, '');
			re9.exec('p');
			re9.exec('qz p');
			re9.exec('zbqynory');
			re9.exec('lhv-h svefg');
			re8.exec('144631658.0.10.1231365779');
			re8.exec('144631658.1231365779.1.1.hgzpfe=(qverpg)|hgzppa=(qverpg)|hgzpzq=(abar)');
			re8.exec('144631658.1877536177953918500.1231365779.1231365779.1231365779.1');
			re8.exec(str75);
			re8.exec(str76);
			re8.exec('__hgzn=144631658.1877536177953918500.1231365779.1231365779.1231365779.1');
			re8.exec('__hgzo=144631658.0.10.1231365779');
			re8.exec('__hgzm=144631658.1231365779.1.1.hgzpfe=(qverpg)|hgzppa=(qverpg)|hgzpzq=(abar)');
			re34.exec(str68);
			re34.exec(str69);
			/^$/.exec('');
			re31.exec('qr');
			/^znk\d+$/.exec('');
			/^zva\d+$/.exec('');
			/^erfgber$/.exec('');
			re85.exec('zbqobkva zbqobk_abcnqqvat ');
			re85.exec('zbqgvgyr');
			re85.exec('eaq_zbqobkva ');
			re85.exec('eaq_zbqgvgyr ');
			/frpgvba\d+_pbagragf/.exec('obggbz_ani');
		}
	});
	re86 = /;\s*/;
	re87 = /(\$\{inyhr\})|(\$inyhr\b)/g;
	re88 = /(\$\{abj\})|(\$abj\b)/g;
	re89 = /\s+$/;
	re90 = /^\s+/;
	re91 = /(\\\"|\x00-|\x1f|\x7f-|\x9f|\u00ad|\u0600-|\u0604|\u070f|\u17b4|\u17b5|\u200c-|\u200f|\u2028-|\u202f|\u2060-|\u206f|\ufeff|\ufff0-|\uffff)/g;
	re92 = /^(:)([\w-]+)\("?'?(.*?(\(.*?\))?[^(]*?)"?'?\)/;
	re93 = /^([:.#]*)((?:[\w\u0128-\uffff*_-]|\\.)+)/;
	re94 = /^(\[) *@?([\w-]+) *([!*$^~=]*) *('?"?)(.*?)\4 *\]/;
	str77 = '#fubhgobk .pybfr';
	str78 = 'FrffvbaQQS2=102n9o0o9pq60132qn0337rr867p75953502q2s27s2s5r98; ZFPhygher=VC=74.125.75.1&VCPhygher=ra-HF&CersreerqPhygher=ra-HF&CersreerqPhygherCraqvat=&Pbhagel=IIZ=&SbeprqRkcvengvba=633669341278771470&gvzrMbar=0&HFEYBP=DKWyLHAiMTH9AwHjWxAcqUx9GJ91oaEunJ4tIzyyqlMQo3IhqUW5D29xMG1IHlMQo3IhqUW5GzSgMG1Iozy0MJDtH3EuqTImWxEgLHAiMTH9BQN3WxkuqTy0qJEyCGZ3YwDkBGVzGT9hM2y0qJEyCF0kZwVhZQH3APMDo3A0LJkQo2EyCGx0ZQDmWyWyM2yiox5uoJH9D0R=; AFP_zp_dfctwzssrwh-aowb_80=441326q33660';
	str79 = 'FrffvbaQQS2=102n9o0o9pq60132qn0337rr867p75953502q2s27s2s5r98; AFP_zp_dfctwzssrwh-aowb_80=441326q33660; __hgzm=144631658.1231365869.1.1.hgzpfe=(qverpg)|hgzppa=(qverpg)|hgzpzq=(abar); __hgzn=144631658.1670816052019209000.1231365869.1231365869.1231365869.1; __hgzo=144631658.0.10.1231365869; __hgzp=144631658; ZFPhygher=VC=74.125.75.1&VCPhygher=ra-HF&CersreerqPhygher=ra-HF&Pbhagel=IIZ%3Q&SbeprqRkcvengvba=633669341278771470&gvzrMbar=-8&HFEYBP=DKWyLHAiMTH9AwHjWxAcqUx9GJ91oaEunJ4tIzyyqlMQo3IhqUW5D29xMG1IHlMQo3IhqUW5GzSgMG1Iozy0MJDtH3EuqTImWxEgLHAiMTH9BQN3WxkuqTy0qJEyCGZ3YwDkBGVzGT9hM2y0qJEyCF0kZwVhZQH3APMDo3A0LJkQo2EyCGx0ZQDmWyWyM2yiox5uoJH9D0R%3Q';
	str80 = 'FrffvbaQQS2=9995p6rp12rrnr893334ro7nq70o7p64p69rqn844prs1473; ZFPhygher=VC=74.125.75.1&VCPhygher=ra-HF&CersreerqPhygher=ra-HF&CersreerqPhygherCraqvat=&Pbhagel=IIZ=&SbeprqRkcvengvba=633669350559478880&gvzrMbar=0&HFEYBP=DKWyLHAiMTH9AwHjWxAcqUx9GJ91oaEunJ4tIzyyqlMQo3IhqUW5D29xMG1IHlMQo3IhqUW5GzSgMG1Iozy0MJDtH3EuqTImWxEgLHAiMTH9BQN3WxkuqTy0qJEyCGZ3YwDkBGVzGT9hM2y0qJEyCF0kZwVhZQH3APMDo3A0LJkQo2EyCGx0ZQDmWyWyM2yiox5uoJH9D0R=; AFP_zp_dfctwzs-aowb_80=441327q73660';
	str81 = 'FrffvbaQQS2=9995p6rp12rrnr893334ro7nq70o7p64p69rqn844prs1473; AFP_zp_dfctwzs-aowb_80=441327q73660; __hgzm=144631658.1231367054.1.1.hgzpfe=(qverpg)|hgzppa=(qverpg)|hgzpzq=(abar); __hgzn=144631658.1796080716621419500.1231367054.1231367054.1231367054.1; __hgzo=144631658.0.10.1231367054; __hgzp=144631658; ZFPhygher=VC=74.125.75.1&VCPhygher=ra-HF&CersreerqPhygher=ra-HF&Pbhagel=IIZ%3Q&SbeprqRkcvengvba=633669350559478880&gvzrMbar=-8&HFEYBP=DKWyLHAiMTH9AwHjWxAcqUx9GJ91oaEunJ4tIzyyqlMQo3IhqUW5D29xMG1IHlMQo3IhqUW5GzSgMG1Iozy0MJDtH3EuqTImWxEgLHAiMTH9BQN3WxkuqTy0qJEyCGZ3YwDkBGVzGT9hM2y0qJEyCF0kZwVhZQH3APMDo3A0LJkQo2EyCGx0ZQDmWyWyM2yiox5uoJH9D0R%3Q';
	str82 = '[glcr=fhozvg]';
	str83 = 'n.svryqOga,n.svryqOgaPnapry';
	str84 = 'n.svryqOgaPnapry';
	str85 = 'oyvpxchaxg';
	str86 = 'qvi.bow-nppbeqvba qg';
	str87 = 'uggc://tbbtyrnqf.t.qbhoyrpyvpx.arg/cntrnq/nqf?pyvrag=pn-svz_zlfcnpr_nccf_wf&qg=1231367052227&uy=ra&nqfnsr=uvtu&br=hgs8&ahz_nqf=4&bhgchg=wf&nqgrfg=bss&pbeeryngbe=1231367052227&punaary=svz_zlfcnpr_nccf-pnainf%2Psvz_zlfcnpr_havgrq-fgngrf&hey=uggc%3N%2S%2Scebsvyr.zlfcnpr.pbz%2SZbqhyrf%2SNccyvpngvbaf%2SCntrf%2SPnainf.nfck&nq_glcr=grkg&rvq=6083027&rn=0&sez=1&tn_ivq=716357910.1231367056&tn_fvq=1231367056&tn_uvq=1387206491&synfu=9.0.115&h_u=768&h_j=1024&h_nu=738&h_nj=1024&h_pq=24&h_gm=-480&h_uvf=2&h_wnin=gehr&h_acyht=7&h_azvzr=22';
	str88 = 'uggc://tbbtyrnqf.t.qbhoyrpyvpx.arg/cntrnq/nqf?pyvrag=pn-svz_zlfcnpr_zlfcnpr-ubzrcntr_wf&qg=1231365851658&uy=ra&nqfnsr=uvtu&br=hgs8&ahz_nqf=4&bhgchg=wf&nqgrfg=bss&pbeeryngbe=1231365851658&punaary=svz_zlfcnpr_ubzrcntr_abgybttrqva%2Psvz_zlfcnpr_aba_HTP%2Psvz_zlfcnpr_havgrq-fgngrf&hey=uggc%3N%2S%2Scebsvyrrqvg.zlfcnpr.pbz%2Svaqrk.psz&nq_glcr=grkg&rvq=6083027&rn=0&sez=0&tn_ivq=1979828129.1231365855&tn_fvq=1231365855&tn_uvq=2085229649&synfu=9.0.115&h_u=768&h_j=1024&h_nu=738&h_nj=1024&h_pq=24&h_gm=-480&h_uvf=2&h_wnin=gehr&h_acyht=7&h_azvzr=22';
	str89 = 'uggc://zfacbegny.112.2b7.arg/o/ff/zfacbegnyubzr/1/U.7-cqi-2/f55023338617756?[NDO]&aqu=1&g=7%2S0%2S2009%2014%3N12%3N47%203%20480&af=zfacbegny&cntrAnzr=HF%20UCZFSGJ&t=uggc%3N%2S%2Sjjj.zfa.pbz%2S&f=0k0&p=43835816&x=A&oj=994&ou=634&uc=A&{2}&[NDR]';
	str90 = 'zrgn[anzr=nwnkHey]';
	str91 = 'anpuevpugra';
	str92 = 'b oS={\'oT\':1.1};x $8n(B){z(B!=o9)};x $S(B){O(!$8n(B))z A;O(B.4L)z\'T\';b S=7t B;O(S==\'2P\'&&B.p4){23(B.7f){12 1:z\'T\';12 3:z/\S/.2g(B.8M)?\'ox\':\'oh\'}}O(S==\'2P\'||S==\'x\'){23(B.nE){12 2V:z\'1O\';12 7I:z\'5a\';12 18:z\'4B\'}O(7t B.I==\'4F\'){O(B.3u)z\'pG\';O(B.8e)z\'1p\'}}z S};x $2p(){b 4E={};Z(b v=0;v<1p.I;v++){Z(b X 1o 1p[v]){b nc=1p[v][X];b 6E=4E[X];O(6E&&$S(nc)==\'2P\'&&$S(6E)==\'2P\')4E[X]=$2p(6E,nc);17 4E[X]=nc}}z 4E};b $E=7p.E=x(){b 1d=1p;O(!1d[1])1d=[p,1d[0]];Z(b X 1o 1d[1])1d[0][X]=1d[1][X];z 1d[0]};b $4D=7p.pJ=x(){Z(b v=0,y=1p.I;v<y;v++){1p[v].E=x(1J){Z(b 1I 1o 1J){O(!p.1Y[1I])p.1Y[1I]=1J[1I];O(!p[1I])p[1I]=$4D.6C(1I)}}}};$4D.6C=x(1I){z x(L){z p.1Y[1I].3H(L,2V.1Y.nV.1F(1p,1))}};$4D(7F,2V,6J,nb);b 3l=x(B){B=B||{};B.E=$E;z B};b pK=Y 3l(H);b pZ=Y 3l(C);C.6f=C.35(\'6f\')[0];x $2O(B){z!!(B||B===0)};x $5S(B,n8){z $8n(B)?B:n8};x $7K(3c,1m){z 1q.na(1q.7K()*(1m-3c+1)+3c)};x $3N(){z Y 97().os()};x $4M(1U){pv(1U);pa(1U);z 1S};H.43=!!(C.5Z);O(H.nB)H.31=H[H.7q?\'py\':\'nL\']=1r;17 O(C.9N&&!C.om&&!oy.oZ)H.pF=H.4Z=H[H.43?\'pt\':\'65\']=1r;17 O(C.po!=1S)H.7J=1r;O(7t 5B==\'o9\'){b 5B=x(){};O(H.4Z)C.nd("pW");5B.1Y=(H.4Z)?H["[[oN.1Y]]"]:{}}5B.1Y.4L=1r;O(H.nL)5s{C.oX("pp",A,1r)}4K(r){};b 18=x(1X){b 63=x(){z(1p[0]!==1S&&p.1w&&$S(p.1w)==\'x\')?p.1w.3H(p,1p):p};$E(63,p);63.1Y=1X;63.nE=18;z 63};18.1z=x(){};18.1Y={E:x(1X){b 7x=Y p(1S);Z(b X 1o 1X){b nC=7x[X];7x[X]=18.nY(nC,1X[X])}z Y 18(7x)},3d:x(){Z(b v=0,y=1p.I;v<y;v++)$E(p.1Y,1p[v])}};18.nY=x(2b,2n){O(2b&&2b!=2n){b S=$S(2n);O(S!=$S(2b))z 2n;23(S){12\'x\':b 7R=x(){p.1e=1p.8e.1e;z 2n.3H(p,1p)};7R.1e=2b;z 7R;12\'2P\':z $2p(2b,2n)}}z 2n};b 8o=Y 18({oQ:x(J){p.4w=p.4w||[];p.4w.1x(J);z p},7g:x(){O(p.4w&&p.4w.I)p.4w.9J().2x(10,p)},oP:x(){p.4w=[]}});b 2d=Y 18({1V:x(S,J){O(J!=18.1z){p.$19=p.$19||{};p.$19[S]=p.$19[S]||[];p.$19[S].5j(J)}z p},1v:x(S,1d,2x){O(p.$19&&p.$19[S]){p.$19[S].1b(x(J){J.3n({\'L\':p,\'2x\':2x,\'1p\':1d})()},p)}z p},3M:x(S,J){O(p.$19&&p.$19[S])p.$19[S].2U(J);z p}});b 4v=Y 18({2H:x(){p.P=$2p.3H(1S,[p.P].E(1p));O(!p.1V)z p;Z(b 3O 1o p.P){O($S(p.P[3O]==\'x\')&&3O.2g(/^5P[N-M]/))p.1V(3O,p.P[3O])}z p}});2V.E({7y:x(J,L){Z(b v=0,w=p.I;v<w;v++)J.1F(L,p[v],v,p)},3s:x(J,L){b 54=[];Z(b v=0,w=p.I;v<w;v++){O(J.1F(L,p[v],v,p))54.1x(p[v])}z 54},2X:x(J,L){b 54=[];Z(b v=0,w=p.I;v<w;v++)54[v]=J.1F(L,p[v],v,p);z 54},4i:x(J,L){Z(b v=0,w=p.I;v<w;v++){O(!J.1F(L,p[v],v,p))z A}z 1r},ob:x(J,L){Z(b v=0,w=p.I;v<w;v++){O(J.1F(L,p[v],v,p))z 1r}z A},3F:x(3u,15){b 3A=p.I;Z(b v=(15<0)?1q.1m(0,3A+15):15||0;v<3A;v++){O(p[v]===3u)z v}z-1},8z:x(1u,I){1u=1u||0;O(1u<0)1u=p.I+1u;I=I||(p.I-1u);b 89=[];Z(b v=0;v<I;v++)89[v]=p[1u++];z 89},2U:x(3u){b v=0;b 3A=p.I;6L(v<3A){O(p[v]===3u){p.6l(v,1);3A--}17{v++}}z p},1y:x(3u,15){z p.3F(3u,15)!=-1},oz:x(1C){b B={},I=1q.3c(p.I,1C.I);Z(b v=0;v<I;v++)B[1C[v]]=p[v];z B},E:x(1O){Z(b v=0,w=1O.I;v<w;v++)p.1x(1O[v]);z p},2p:x(1O){Z(b v=0,y=1O.I;v<y;v++)p.5j(1O[v]);z p},5j:x(3u){O(!p.1y(3u))p.1x(3u);z p},oc:x(){z p[$7K(0,p.I-1)]||A},7L:x(){z p[p.I-1]||A}});2V.1Y.1b=2V.1Y.7y;2V.1Y.2g=2V.1Y.1y;x $N(1O){z 2V.8z(1O)};x $1b(3J,J,L){O(3J&&7t 3J.I==\'4F\'&&$S(3J)!=\'2P\')2V.7y(3J,J,L);17 Z(b 1j 1o 3J)J.1F(L||3J,3J[1j],1j)};6J.E({2g:x(6b,2F){z(($S(6b)==\'2R\')?Y 7I(6b,2F):6b).2g(p)},3p:x(){z 5K(p,10)},o4:x(){z 69(p)},7A:x(){z p.3y(/-\D/t,x(2G){z 2G.7G(1).nW()})},9b:x(){z p.3y(/\w[N-M]/t,x(2G){z(2G.7G(0)+\'-\'+2G.7G(1).5O())})},8V:x(){z p.3y(/\b[n-m]/t,x(2G){z 2G.nW()})},5L:x(){z p.3y(/^\s+|\s+$/t,\'\')},7j:x(){z p.3y(/\s{2,}/t,\' \').5L()},5V:x(1O){b 1i=p.2G(/\d{1,3}/t);z(1i)?1i.5V(1O):A},5U:x(1O){b 3P=p.2G(/^#?(\w{1,2})(\w{1,2})(\w{1,2})$/);z(3P)?3P.nV(1).5U(1O):A},1y:x(2R,f){z(f)?(f+p+f).3F(f+2R+f)>-1:p.3F(2R)>-1},nX:x(){z p.3y(/([.*+?^${}()|[\]\/\\])/t,\'\\$1\')}});2V.E({5V:x(1O){O(p.I<3)z A;O(p.I==4&&p[3]==0&&!1O)z\'p5\';b 3P=[];Z(b v=0;v<3;v++){b 52=(p[v]-0).4h(16);3P.1x((52.I==1)?\'0\'+52:52)}z 1O?3P:\'#\'+3P.2u(\'\')},5U:x(1O){O(p.I!=3)z A;b 1i=[];Z(b v=0;v<3;v++){1i.1x(5K((p[v].I==1)?p[v]+p[v]:p[v],16))}z 1O?1i:\'1i(\'+1i.2u(\',\')+\')\'}});7F.E({3n:x(P){b J=p;P=$2p({\'L\':J,\'V\':A,\'1p\':1S,\'2x\':A,\'4s\':A,\'6W\':A},P);O($2O(P.1p)&&$S(P.1p)!=\'1O\')P.1p=[P.1p];z x(V){b 1d;O(P.V){V=V||H.V;1d=[(P.V===1r)?V:Y P.V(V)];O(P.1p)1d.E(P.1p)}17 1d=P.1p||1p;b 3C=x(){z J.3H($5S(P';
	str93 = 'hagreunyghat';
	str94 = 'ZFPhygher=VC=74.125.75.1&VCPhygher=ra-HF&CersreerqPhygher=ra-HF&Pbhagel=IIZ%3Q&SbeprqRkcvengvba=633669341278771470&gvzrMbar=-8&HFEYBP=DKWyLHAiMTH9AwHjWxAcqUx9GJ91oaEunJ4tIzyyqlMQo3IhqUW5D29xMG1IHlMQo3IhqUW5GzSgMG1Iozy0MJDtH3EuqTImWxEgLHAiMTH9BQN3WxkuqTy0qJEyCGZ3YwDkBGVzGT9hM2y0qJEyCF0kZwVhZQH3APMDo3A0LJkQo2EyCGx0ZQDmWyWyM2yiox5uoJH9D0R%3Q';
	str95 = 'ZFPhygher=VC=74.125.75.1&VCPhygher=ra-HF&CersreerqPhygher=ra-HF&Pbhagel=IIZ%3Q&SbeprqRkcvengvba=633669350559478880&gvzrMbar=-8&HFEYBP=DKWyLHAiMTH9AwHjWxAcqUx9GJ91oaEunJ4tIzyyqlMQo3IhqUW5D29xMG1IHlMQo3IhqUW5GzSgMG1Iozy0MJDtH3EuqTImWxEgLHAiMTH9BQN3WxkuqTy0qJEyCGZ3YwDkBGVzGT9hM2y0qJEyCF0kZwVhZQH3APMDo3A0LJkQo2EyCGx0ZQDmWyWyM2yiox5uoJH9D0R%3Q';
	str96 = 'ZFPhygher=VC=74.125.75.1&VCPhygher=ra-HF&CersreerqPhygher=ra-HF&CersreerqPhygherCraqvat=&Pbhagel=IIZ=&SbeprqRkcvengvba=633669341278771470&gvzrMbar=0&HFEYBP=DKWyLHAiMTH9AwHjWxAcqUx9GJ91oaEunJ4tIzyyqlMQo3IhqUW5D29xMG1IHlMQo3IhqUW5GzSgMG1Iozy0MJDtH3EuqTImWxEgLHAiMTH9BQN3WxkuqTy0qJEyCGZ3YwDkBGVzGT9hM2y0qJEyCF0kZwVhZQH3APMDo3A0LJkQo2EyCGx0ZQDmWyWyM2yiox5uoJH9D0R=';
	str97 = 'ZFPhygher=VC=74.125.75.1&VCPhygher=ra-HF&CersreerqPhygher=ra-HF&CersreerqPhygherCraqvat=&Pbhagel=IIZ=&SbeprqRkcvengvba=633669350559478880&gvzrMbar=0&HFEYBP=DKWyLHAiMTH9AwHjWxAcqUx9GJ91oaEunJ4tIzyyqlMQo3IhqUW5D29xMG1IHlMQo3IhqUW5GzSgMG1Iozy0MJDtH3EuqTImWxEgLHAiMTH9BQN3WxkuqTy0qJEyCGZ3YwDkBGVzGT9hM2y0qJEyCF0kZwVhZQH3APMDo3A0LJkQo2EyCGx0ZQDmWyWyM2yiox5uoJH9D0R=';
	str98 = 'shapgvba (){Cuk.Nccyvpngvba.Frghc.Pber();Cuk.Nccyvpngvba.Frghc.Nwnk();Cuk.Nccyvpngvba.Frghc.Synfu();Cuk.Nccyvpngvba.Frghc.Zbqhyrf()}';
	this.runBlock11 = (function () {
		var i;
		for (i = 0; i < 2; i++) {
			' .pybfr'.replace(re18, '');
			' n.svryqOgaPnapry'.replace(re18, '');
			' qg'.replace(re18, '');
			str77.replace(re68, '');
			str77.replace(re18, '');
			''.replace(re39, '');
			''.replace(/^/, '');
			''.split(re86);
			'*'.replace(re39, '');
			'*'.replace(re68, '');
			'*'.replace(re18, '');
			'.pybfr'.replace(re68, '');
			'.pybfr'.replace(re18, '');
			'//vzt.jro.qr/vij/FC/tzk_uc/fperra/${inyhr}?gf=${abj}'.replace(re87, '');
			'//vzt.jro.qr/vij/FC/tzk_uc/fperra/1024?gf=${abj}'.replace(re88, '');
			'//vzt.jro.qr/vij/FC/tzk_uc/jvafvmr/${inyhr}?gf=${abj}'.replace(re87, '');
			'//vzt.jro.qr/vij/FC/tzk_uc/jvafvmr/992/608?gf=${abj}'.replace(re88, '');
			'300k120'.replace(re30, '');
			'300k250'.replace(re30, '');
			'310k120'.replace(re30, '');
			'310k170'.replace(re30, '');
			'310k250'.replace(re30, '');
			'9.0  e115'.replace(/^.*\.(.*)\s.*$/, '');
			'Nppbeqvba'.replace(re2, '');
			'Nxghryy\x0a'.replace(re89, '');
			'Nxghryy\x0a'.replace(re90, '');
			'Nccyvpngvba'.replace(re2, '');
			'Oyvpxchaxg\x0a'.replace(re89, '');
			'Oyvpxchaxg\x0a'.replace(re90, '');
			'Svanamra\x0a'.replace(re89, '');
			'Svanamra\x0a'.replace(re90, '');
			'Tnzrf\x0a'.replace(re89, '');
			'Tnzrf\x0a'.replace(re90, '');
			'Ubebfxbc\x0a'.replace(re89, '');
			'Ubebfxbc\x0a'.replace(re90, '');
			'Xvab\x0a'.replace(re89, '');
			'Xvab\x0a'.replace(re90, '');
			'Zbqhyrf'.replace(re2, '');
			'Zhfvx\x0a'.replace(re89, '');
			'Zhfvx\x0a'.replace(re90, '');
			'Anpuevpugra\x0a'.replace(re89, '');
			'Anpuevpugra\x0a'.replace(re90, '');
			'Cuk'.replace(re2, '');
			'ErdhrfgSvavfu'.split(re70);
			'ErdhrfgSvavfu.NWNK.Cuk'.split(re70);
			'Ebhgr\x0a'.replace(re89, '');
			'Ebhgr\x0a'.replace(re90, '');
			str78.split(re32);
			str79.split(re32);
			str80.split(re32);
			str81.split(re32);
			'Fcbeg\x0a'.replace(re89, '');
			'Fcbeg\x0a'.replace(re90, '');
			'GI-Fcbg\x0a'.replace(re89, '');
			'GI-Fcbg\x0a'.replace(re90, '');
			'Gbhe\x0a'.replace(re89, '');
			'Gbhe\x0a'.replace(re90, '');
			'Hagreunyghat\x0a'.replace(re89, '');
			'Hagreunyghat\x0a'.replace(re90, '');
			'Ivqrb\x0a'.replace(re89, '');
			'Ivqrb\x0a'.replace(re90, '');
			'Jrggre\x0a'.replace(re89, '');
			'Jrggre\x0a'.replace(re90, '');
			str82.replace(re68, '');
			str82.replace(re18, '');
			str83.replace(re68, '');
			str83.replace(re18, '');
			str84.replace(re68, '');
			str84.replace(re18, '');
			'nqiFreivprObk'.replace(re30, '');
			'nqiFubccvatObk'.replace(re30, '');
			'nwnk'.replace(re39, '');
			'nxghryy'.replace(re40, '');
			'nxghryy'.replace(re41, '');
			'nxghryy'.replace(re42, '');
			'nxghryy'.replace(re43, '');
			'nxghryy'.replace(re44, '');
			'nxghryy'.replace(re45, '');
			'nxghryy'.replace(re46, '');
			'nxghryy'.replace(re47, '');
			'nxghryy'.replace(re48, '');
			str85.replace(re40, '');
			str85.replace(re41, '');
			str85.replace(re42, '');
			str85.replace(re43, '');
			str85.replace(re44, '');
			str85.replace(re45, '');
			str85.replace(re46, '');
			str85.replace(re47, '');
			str85.replace(re48, '');
			'pngrtbel'.replace(re29, '');
			'pngrtbel'.replace(re30, '');
			'pybfr'.replace(re39, '');
			'qvi'.replace(re39, '');
			str86.replace(re68, '');
			str86.replace(re18, '');
			'qg'.replace(re39, '');
			'qg'.replace(re68, '');
			'qg'.replace(re18, '');
			'rzorq'.replace(re39, '');
			'rzorq'.replace(re68, '');
			'rzorq'.replace(re18, '');
			'svryqOga'.replace(re39, '');
			'svryqOgaPnapry'.replace(re39, '');
			'svz_zlfcnpr_nccf-pnainf,svz_zlfcnpr_havgrq-fgngrf'.split(re20);
			'svanamra'.replace(re40, '');
			'svanamra'.replace(re41, '');
			'svanamra'.replace(re42, '');
			'svanamra'.replace(re43, '');
			'svanamra'.replace(re44, '');
			'svanamra'.replace(re45, '');
			'svanamra'.replace(re46, '');
			'svanamra'.replace(re47, '');
			'svanamra'.replace(re48, '');
			'sbphf'.split(re70);
			'sbphf.gno sbphfva.gno'.split(re70);
			'sbphfva'.split(re70);
			'sbez'.replace(re39, '');
			'sbez.nwnk'.replace(re68, '');
			'sbez.nwnk'.replace(re18, '');
			'tnzrf'.replace(re40, '');
			'tnzrf'.replace(re41, '');
			'tnzrf'.replace(re42, '');
			'tnzrf'.replace(re43, '');
			'tnzrf'.replace(re44, '');
			'tnzrf'.replace(re45, '');
			'tnzrf'.replace(re46, '');
			'tnzrf'.replace(re47, '');
			'tnzrf'.replace(re48, '');
			'ubzrcntr'.replace(re30, '');
			'ubebfxbc'.replace(re40, '');
			'ubebfxbc'.replace(re41, '');
			'ubebfxbc'.replace(re42, '');
			'ubebfxbc'.replace(re43, '');
			'ubebfxbc'.replace(re44, '');
			'ubebfxbc'.replace(re45, '');
			'ubebfxbc'.replace(re46, '');
			'ubebfxbc'.replace(re47, '');
			'ubebfxbc'.replace(re48, '');
			'uc_cebzbobk_ugzy%2Puc_cebzbobk_vzt'.replace(re30, '');
			'uc_erpgnatyr'.replace(re30, '');
			str87.replace(re33, '');
			str88.replace(re33, '');
			'uggc://wf.hv-cbegny.qr/tzk/ubzr/wf/20080602/onfr.wf${4}${5}'.replace(re71, '');
			'uggc://wf.hv-cbegny.qr/tzk/ubzr/wf/20080602/onfr.wf${5}'.replace(re72, '');
			'uggc://wf.hv-cbegny.qr/tzk/ubzr/wf/20080602/qlaYvo.wf${4}${5}'.replace(re71, '');
			'uggc://wf.hv-cbegny.qr/tzk/ubzr/wf/20080602/qlaYvo.wf${5}'.replace(re72, '');
			'uggc://wf.hv-cbegny.qr/tzk/ubzr/wf/20080602/rssrpgYvo.wf${4}${5}'.replace(re71, '');
			'uggc://wf.hv-cbegny.qr/tzk/ubzr/wf/20080602/rssrpgYvo.wf${5}'.replace(re72, '');
			str89.replace(re73, '');
			'uggc://zfacbegny.112.2b7.arg/o/ff/zfacbegnyubzr/1/U.7-cqi-2/f55023338617756?[NDO]&{1}&{2}&[NDR]'.replace(re69, '');
			str6.replace(re23, '');
			'xvab'.replace(re40, '');
			'xvab'.replace(re41, '');
			'xvab'.replace(re42, '');
			'xvab'.replace(re43, '');
			'xvab'.replace(re44, '');
			'xvab'.replace(re45, '');
			'xvab'.replace(re46, '');
			'xvab'.replace(re47, '');
			'xvab'.replace(re48, '');
			'ybnq'.split(re70);
			'zrqvnzbqgno lhv-anifrg lhv-anifrg-gbc'.replace(re18, '');
			'zrgn'.replace(re39, '');
			str90.replace(re68, '');
			str90.replace(re18, '');
			'zbhfrzbir'.split(re70);
			'zbhfrzbir.gno'.split(re70);
			str63.replace(/^.*jroxvg\/(\d+(\.\d+)?).*$/, '');
			'zhfvx'.replace(re40, '');
			'zhfvx'.replace(re41, '');
			'zhfvx'.replace(re42, '');
			'zhfvx'.replace(re43, '');
			'zhfvx'.replace(re44, '');
			'zhfvx'.replace(re45, '');
			'zhfvx'.replace(re46, '');
			'zhfvx'.replace(re47, '');
			'zhfvx'.replace(re48, '');
			'zlfcnpr_nccf_pnainf'.replace(re52, '');
			str91.replace(re40, '');
			str91.replace(re41, '');
			str91.replace(re42, '');
			str91.replace(re43, '');
			str91.replace(re44, '');
			str91.replace(re45, '');
			str91.replace(re46, '');
			str91.replace(re47, '');
			str91.replace(re48, '');
			'anzr'.replace(re39, '');
			str92.replace(/\b\w+\b/g, '');
			'bow-nppbeqvba'.replace(re39, '');
			'bowrpg'.replace(re39, '');
			'bowrpg'.replace(re68, '');
			'bowrpg'.replace(re18, '');
			'cnenzf%2Rfglyrf'.replace(re29, '');
			'cnenzf%2Rfglyrf'.replace(re30, '');
			'cbchc'.replace(re30, '');
			'ebhgr'.replace(re40, '');
			'ebhgr'.replace(re41, '');
			'ebhgr'.replace(re42, '');
			'ebhgr'.replace(re43, '');
			'ebhgr'.replace(re44, '');
			'ebhgr'.replace(re45, '');
			'ebhgr'.replace(re46, '');
			'ebhgr'.replace(re47, '');
			'ebhgr'.replace(re48, '');
			'freivprobk_uc'.replace(re30, '');
			'fubccvatobk_uc'.replace(re30, '');
			'fubhgobk'.replace(re39, '');
			'fcbeg'.replace(re40, '');
			'fcbeg'.replace(re41, '');
			'fcbeg'.replace(re42, '');
			'fcbeg'.replace(re43, '');
			'fcbeg'.replace(re44, '');
			'fcbeg'.replace(re45, '');
			'fcbeg'.replace(re46, '');
			'fcbeg'.replace(re47, '');
			'fcbeg'.replace(re48, '');
			'gbhe'.replace(re40, '');
			'gbhe'.replace(re41, '');
			'gbhe'.replace(re42, '');
			'gbhe'.replace(re43, '');
			'gbhe'.replace(re44, '');
			'gbhe'.replace(re45, '');
			'gbhe'.replace(re46, '');
			'gbhe'.replace(re47, '');
			'gbhe'.replace(re48, '');
			'gi-fcbg'.replace(re40, '');
			'gi-fcbg'.replace(re41, '');
			'gi-fcbg'.replace(re42, '');
			'gi-fcbg'.replace(re43, '');
			'gi-fcbg'.replace(re44, '');
			'gi-fcbg'.replace(re45, '');
			'gi-fcbg'.replace(re46, '');
			'gi-fcbg'.replace(re47, '');
			'gi-fcbg'.replace(re48, '');
			'glcr'.replace(re39, '');
			'haqrsvarq'.replace(/\//g, '');
			str93.replace(re40, '');
			str93.replace(re41, '');
			str93.replace(re42, '');
			str93.replace(re43, '');
			str93.replace(re44, '');
			str93.replace(re45, '');
			str93.replace(re46, '');
			str93.replace(re47, '');
			str93.replace(re48, '');
			'ivqrb'.replace(re40, '');
			'ivqrb'.replace(re41, '');
			'ivqrb'.replace(re42, '');
			'ivqrb'.replace(re43, '');
			'ivqrb'.replace(re44, '');
			'ivqrb'.replace(re45, '');
			'ivqrb'.replace(re46, '');
			'ivqrb'.replace(re47, '');
			'ivqrb'.replace(re48, '');
			'ivfvgf=1'.split(re86);
			'jrggre'.replace(re40, '');
			'jrggre'.replace(re41, '');
			'jrggre'.replace(re42, '');
			'jrggre'.replace(re43, '');
			'jrggre'.replace(re44, '');
			'jrggre'.replace(re45, '');
			'jrggre'.replace(re46, '');
			'jrggre'.replace(re47, '');
			'jrggre'.replace(re48, '');
			/#[a-z0-9]+$/i.exec('uggc://jjj.fpuhryreim.arg/Qrsnhyg');
			re66.exec('fryrpgrq');
			/(?:^|\s+)lhv-ani(?:\s+|$)/.exec('sff lhv-ani');
			/(?:^|\s+)lhv-anifrg(?:\s+|$)/.exec('zrqvnzbqgno lhv-anifrg');
			/(?:^|\s+)lhv-anifrg-gbc(?:\s+|$)/.exec('zrqvnzbqgno lhv-anifrg');
			re91.exec('GnoThvq');
			re91.exec('thvq');
			/(pbzcngvoyr|jroxvg)/.exec(str63);
			/.+(?:ei|vg|en|vr)[\/: ]([\d.]+)/.exec(str63);
			re8.exec('144631658.0.10.1231365869');
			re8.exec('144631658.0.10.1231367054');
			re8.exec('144631658.1231365869.1.1.hgzpfe=(qverpg)|hgzppa=(qverpg)|hgzpzq=(abar)');
			re8.exec('144631658.1231367054.1.1.hgzpfe=(qverpg)|hgzppa=(qverpg)|hgzpzq=(abar)');
			re8.exec('144631658.1670816052019209000.1231365869.1231365869.1231365869.1');
			re8.exec('144631658.1796080716621419500.1231367054.1231367054.1231367054.1');
			re8.exec(str94);
			re8.exec(str95);
			re8.exec(str96);
			re8.exec(str97);
			re8.exec('__hgzn=144631658.1670816052019209000.1231365869.1231365869.1231365869.1');
			re8.exec('__hgzn=144631658.1796080716621419500.1231367054.1231367054.1231367054.1');
			re8.exec('__hgzo=144631658.0.10.1231365869');
			re8.exec('__hgzo=144631658.0.10.1231367054');
			re8.exec('__hgzm=144631658.1231365869.1.1.hgzpfe=(qverpg)|hgzppa=(qverpg)|hgzpzq=(abar)');
			re8.exec('__hgzm=144631658.1231367054.1.1.hgzpfe=(qverpg)|hgzppa=(qverpg)|hgzpzq=(abar)');
			re34.exec(str78);
			re34.exec(str79);
			re34.exec(str81);
			re74.exec(str77);
			re74.exec('*');
			re74.exec(str82);
			re74.exec(str83);
			re74.exec(str86);
			re74.exec('rzorq');
			re74.exec('sbez.nwnk');
			re74.exec(str90);
			re74.exec('bowrpg');
			/\/onfr.wf(\?.+)?$/.exec('/uggc://wf.hv-cbegny.qr/tzk/ubzr/wf/20080602/onfr.wf');
			re28.exec('uvag ynfgUvag ynfg');
			re75.exec('');
			re76.exec('');
			re77.exec('');
			re78.exec('');
			re80.exec(str77);
			re80.exec('*');
			re80.exec('.pybfr');
			re80.exec(str82);
			re80.exec(str83);
			re80.exec(str84);
			re80.exec(str86);
			re80.exec('qg');
			re80.exec('rzorq');
			re80.exec('sbez.nwnk');
			re80.exec(str90);
			re80.exec('bowrpg');
			re61.exec('qlaYvo.wf');
			re61.exec('rssrpgYvo.wf');
			re61.exec('uggc://jjj.tzk.arg/qr/?fgnghf=uvajrvf');
			re92.exec(' .pybfr');
			re92.exec(' n.svryqOgaPnapry');
			re92.exec(' qg');
			re92.exec(str48);
			re92.exec('.nwnk');
			re92.exec('.svryqOga,n.svryqOgaPnapry');
			re92.exec('.svryqOgaPnapry');
			re92.exec('.bow-nppbeqvba qg');
			re68.exec(str77);
			re68.exec('*');
			re68.exec('.pybfr');
			re68.exec(str82);
			re68.exec(str83);
			re68.exec(str84);
			re68.exec(str86);
			re68.exec('qg');
			re68.exec('rzorq');
			re68.exec('sbez.nwnk');
			re68.exec(str90);
			re68.exec('bowrpg');
			re93.exec(' .pybfr');
			re93.exec(' n.svryqOgaPnapry');
			re93.exec(' qg');
			re93.exec(str48);
			re93.exec('.nwnk');
			re93.exec('.svryqOga,n.svryqOgaPnapry');
			re93.exec('.svryqOgaPnapry');
			re93.exec('.bow-nppbeqvba qg');
			re81.exec(str77);
			re81.exec('*');
			re81.exec(str48);
			re81.exec('.pybfr');
			re81.exec(str82);
			re81.exec(str83);
			re81.exec(str84);
			re81.exec(str86);
			re81.exec('qg');
			re81.exec('rzorq');
			re81.exec('sbez.nwnk');
			re81.exec(str90);
			re81.exec('bowrpg');
			re94.exec(' .pybfr');
			re94.exec(' n.svryqOgaPnapry');
			re94.exec(' qg');
			re94.exec(str48);
			re94.exec('.nwnk');
			re94.exec('.svryqOga,n.svryqOgaPnapry');
			re94.exec('.svryqOgaPnapry');
			re94.exec('.bow-nppbeqvba qg');
			re94.exec('[anzr=nwnkHey]');
			re94.exec(str82);
			re31.exec('rf');
			re31.exec('wn');
			re82.exec(str77);
			re82.exec('*');
			re82.exec(str48);
			re82.exec('.pybfr');
			re82.exec(str82);
			re82.exec(str83);
			re82.exec(str84);
			re82.exec(str86);
			re82.exec('qg');
			re82.exec('rzorq');
			re82.exec('sbez.nwnk');
			re82.exec(str90);
			re82.exec('bowrpg');
			re83.exec(str98);
			re83.exec('shapgvba sbphf() { [angvir pbqr] }');
			re62.exec('#Ybtva');
			re62.exec('#Ybtva_cnffjbeq');
			re62.exec(str77);
			re62.exec('#fubhgobkWf');
			re62.exec('#fubhgobkWfReebe');
			re62.exec('#fubhgobkWfFhpprff');
			re62.exec('*');
			re62.exec(str82);
			re62.exec(str83);
			re62.exec(str86);
			re62.exec('rzorq');
			re62.exec('sbez.nwnk');
			re62.exec(str90);
			re62.exec('bowrpg');
			re49.exec('pbagrag');
			re24.exec(str6);
			/xbadhrebe/.exec(str63);
			/znp/.exec('jva32');
			/zbmvyyn/.exec(str63);
			/zfvr/.exec(str63);
			/ag\s5\.1/.exec(str63);
			/bcren/.exec(str63);
			/fnsnev/.exec(str63);
			/jva/.exec('jva32');
			/jvaqbjf/.exec(str63);
		}
	});
};

$__jsx_extend([RegExpBenchmark], Object);
function RegExpBenchmark$computeInputVariants$SN(str, n) {
	var variants;
	var i;
	var pos;
	var chr;
	variants = [ str ];
	for (i = 1; i < n; i++) {
		pos = Math.floor(BenchmarkUtil$random$() * str.length);
		chr = String.fromCharCode((str.charCodeAt(pos) + Math.floor(Math.random() * 128)) % 128);
		variants[i] = str.substring(0, pos) + chr + str.substring(pos + 1, str.length);
	}
	return variants;
};

RegExpBenchmark.computeInputVariants$SN = RegExpBenchmark$computeInputVariants$SN;

RegExpBenchmark.prototype.run$ = function () {
	var i;
	for (i = 0; i < 5; i++) {
		this.runBlock0();
		this.runBlock1();
		this.runBlock2();
		this.runBlock3();
		this.runBlock4();
		this.runBlock5();
		this.runBlock6();
		this.runBlock7();
		this.runBlock8();
		this.runBlock9();
		this.runBlock10();
		this.runBlock11();
	}
};


function RegExpBenchmark$run$LRegExpBenchmark$($this) {
	var i;
	for (i = 0; i < 5; i++) {
		$this.runBlock0();
		$this.runBlock1();
		$this.runBlock2();
		$this.runBlock3();
		$this.runBlock4();
		$this.runBlock5();
		$this.runBlock6();
		$this.runBlock7();
		$this.runBlock8();
		$this.runBlock9();
		$this.runBlock10();
		$this.runBlock11();
	}
};

RegExpBenchmark.run$LRegExpBenchmark$ = RegExpBenchmark$run$LRegExpBenchmark$;

function Splay() {
	var $this = this;
	var splayTree;
	var GeneratePayloadTree;
	var GenerateKey;
	var InsertNewNode;
	var SplaySetup;
	var SplayTearDown;
	var SplayRun;
	splayTree = null;
	function GeneratePayloadTree(depth, tag) {
		return (depth === 0 ? ({ array: [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ], string: 'String for key ' + (tag + "") + ' in leaf node' }) : ({ left: GeneratePayloadTree((depth - 1 | 0), tag), right: GeneratePayloadTree((depth - 1 | 0), tag) }));
	}
	function GenerateKey() {
		return BenchmarkUtil$random$();
	}
	function InsertNewNode() {
		var key;
		var payload;
		do {
			key = GenerateKey();
		} while (SplayTree$find$LSplayTree$N(splayTree, key) != null);
		payload = GeneratePayloadTree(5, key);
		SplayTree$insert$LSplayTree$NX(splayTree, key, payload);
		return key;
	}
	function SplaySetup() {
		var i;
		splayTree = ({root_: null});
		for (i = 0; i < 8000; i++) {
			InsertNewNode();
		}
	}
	function SplayTearDown() {
		var keys;
		var length;
		var i;
		keys = SplayTree$exportKeys$LSplayTree$(splayTree);
		splayTree = null;
		length = keys.length;
		if (length !== 8000) {
			throw new Error("Splay tree has wrong size");
		}
		for (i = 0; i < length - 1; i++) {
			if (keys[i] >= keys[i + 1]) {
				throw new Error("Splay tree not sorted");
			}
		}
	}
	function SplayRun() {
		var i;
		var key;
		var greatest;
		for (i = 0; i < 80; i++) {
			key = InsertNewNode();
			greatest = SplayTree$findGreatestLessThan$LSplayTree$N(splayTree, key);
			if (greatest == null) {
				SplayTree$remove$LSplayTree$N(splayTree, key);
			} else {
				SplayTree$remove$LSplayTree$N(splayTree, greatest.key);
			}
		}
	}
	new BenchmarkSuite('Splay', 81491, [ ({name: "Splay", run: SplayRun, Setup: SplaySetup, TearDown: SplayTearDown}) ]);
};

$__jsx_extend([Splay], Object);
function SplayTree() {
	this.root_ = null;
};

$__jsx_extend([SplayTree], Object);
function SplayTree$isEmpty$LSplayTree$($this) {
	return ! $this.root_;
};

SplayTree.isEmpty$LSplayTree$ = SplayTree$isEmpty$LSplayTree$;

function SplayTree$insert$LSplayTree$NX($this, key, value) {
	var node;
	var root_$0;
	var root_$1;
	if (! $this.root_) {
		$this.root_ = ({key: key, value: value, left: null, right: null});
		return;
	}
	SplayTree$splay_$LSplayTree$N($this, key);
	if ($this.root_.key === key) {
		return;
	}
	node = ({key: key, value: value, left: null, right: null});
	if (key > $this.root_.key) {
		node.left = root_$0 = $this.root_;
		node.right = root_$0.right;
		root_$0.right = null;
	} else {
		node.right = root_$1 = $this.root_;
		node.left = root_$1.left;
		root_$1.left = null;
	}
	$this.root_ = node;
};

SplayTree.insert$LSplayTree$NX = SplayTree$insert$LSplayTree$NX;

function SplayTree$remove$LSplayTree$N($this, key) {
	var removed;
	var right;
	var root_$0;
	var root_$1;
	if (! $this.root_) {
		throw new Error('Key not found: ' + (key + ""));
	}
	SplayTree$splay_$LSplayTree$N($this, key);
	if ($this.root_.key !== key) {
		throw new Error('Key not found: ' + (key + ""));
	}
	removed = root_$1 = $this.root_;
	if (! root_$1.left) {
		$this.root_ = $this.root_.right;
	} else {
		right = (root_$0 = $this.root_).right;
		$this.root_ = root_$0.left;
		SplayTree$splay_$LSplayTree$N($this, key);
		$this.root_.right = right;
	}
	return removed;
};

SplayTree.remove$LSplayTree$N = SplayTree$remove$LSplayTree$N;

function SplayTree$find$LSplayTree$N($this, key) {
	if (! $this.root_) {
		return null;
	}
	SplayTree$splay_$LSplayTree$N($this, key);
	return ($this.root_.key === key ? $this.root_ : null);
};

SplayTree.find$LSplayTree$N = SplayTree$find$LSplayTree$N;

function SplayTree$findMax$LSplayTree$LSplayTreeNode$($this, opt_startNode) {
	var current;
	if (! $this.root_) {
		return null;
	}
	current = (opt_startNode == null ? $this.root_ : opt_startNode);
	while (current.right) {
		current = current.right;
	}
	return current;
};

SplayTree.findMax$LSplayTree$LSplayTreeNode$ = SplayTree$findMax$LSplayTree$LSplayTreeNode$;

function SplayTree$findGreatestLessThan$LSplayTree$N($this, key) {
	if (! $this.root_) {
		return null;
	}
	SplayTree$splay_$LSplayTree$N($this, key);
	return ($this.root_.key < key ? $this.root_ : $this.root_.left ? SplayTree$findMax$LSplayTree$LSplayTreeNode$($this, $this.root_.left) : null);
};

SplayTree.findGreatestLessThan$LSplayTree$N = SplayTree$findGreatestLessThan$LSplayTree$N;

function SplayTree$exportKeys$LSplayTree$($this) {
	var result;
	result = [  ];
	if (! ! $this.root_) {
		SplayTreeNode$traverse_$LSplayTreeNode$F$LSplayTreeNode$V$($this.root_, (function (node) {
			result.push(node.key);
		}));
	}
	return result;
};

SplayTree.exportKeys$LSplayTree$ = SplayTree$exportKeys$LSplayTree$;

function SplayTree$splay_$LSplayTree$N($this, key) {
	var dummy;
	var left;
	var right;
	var current;
	var tmp;
	if (! $this.root_) {
		return;
	}
	dummy = left = right = ({key: NaN, value: null, left: null, right: null});
	current = $this.root_;
	while (true) {
		if (key < current.key) {
			if (! current.left) {
				break;
			}
			if (key < current.left.key) {
				tmp = current.left;
				current.left = tmp.right;
				tmp.right = current;
				current = tmp;
				if (! tmp.left) {
					break;
				}
			}
			right.left = current;
			right = current;
			current = current.left;
		} else if (key > current.key) {
			if (! current.right) {
				break;
			}
			if (key > current.right.key) {
				tmp = current.right;
				current.right = tmp.left;
				tmp.left = current;
				current = tmp;
				if (! tmp.right) {
					break;
				}
			}
			left.right = current;
			left = current;
			current = current.right;
		} else {
			break;
		}
	}
	left.right = current.left;
	right.left = current.right;
	current.left = dummy.right;
	current.right = dummy.left;
	$this.root_ = current;
};

SplayTree.splay_$LSplayTree$N = SplayTree$splay_$LSplayTree$N;

function SplayTreeNode(key, value) {
	this.left = null;
	this.right = null;
	this.key = key;
	this.value = value;
};

$__jsx_extend([SplayTreeNode], Object);
function SplayTreeNode$traverse_$LSplayTreeNode$F$LSplayTreeNode$V$($this, f) {
	var current;
	var left;
	current = $this;
	while (current) {
		left = current.left;
		if (left) {
			SplayTreeNode$traverse_$LSplayTreeNode$F$LSplayTreeNode$V$(left, f);
		}
		f(current);
		current = current.right;
	}
};

SplayTreeNode.traverse_$LSplayTreeNode$F$LSplayTreeNode$V$ = SplayTreeNode$traverse_$LSplayTreeNode$F$LSplayTreeNode$V$;

function NavierStokes() {
	var $this = this;
	var solver;
	var addPoints;
	var framesTillAddingPoints;
	var framesBetweenAddingPoints;
	var prepareFrame;
	var runNavierStokes;
	var setupNavierStokes;
	var tearDownNavierStokes;
	solver = null;
	function addPoints(field) {
		var n;
		var i;
		var y$0;
		var x$0;
		var y$2;
		n = 64;
		for (i = 1; i <= n; i++) {
			Field$setVelocity$LField$NNNN(field, i, i, n, n);
			field.dens[i + 1 + (i + 1) * field.fluid._rowSize] = 5;
			Field$setVelocity$LField$NNNN(field, i, n - i, - n, - n);
			y$0 = n - i;
			field.dens[i + 1 + (y$0 + 1) * field.fluid._rowSize] = 20;
			Field$setVelocity$LField$NNNN(field, 128 - i, n + i, - n, - n);
			x$0 = 128 - i;
			y$2 = n + i;
			field.dens[x$0 + 1 + (y$2 + 1) * field.fluid._rowSize] = 30;
		}
	}
	framesTillAddingPoints = 0;
	framesBetweenAddingPoints = 5;
	function prepareFrame(field) {
		if (framesTillAddingPoints === 0) {
			addPoints(field);
			framesTillAddingPoints = framesBetweenAddingPoints;
			framesBetweenAddingPoints++;
		} else {
			framesTillAddingPoints--;
		}
	}
	function runNavierStokes() {
		FluidField$update$LFluidField$(solver);
	}
	function setupNavierStokes() {
		solver = new FluidField();
		FluidField$setResolution$LFluidField$NN(solver, 128, 128);
		solver._iterations = 20;
		solver._displayFunc = (function (f) {
		});
		solver._uiCallback = prepareFrame;
		FluidField$reset$LFluidField$(solver);
	}
	function tearDownNavierStokes() {
		solver = null;
	}
	new BenchmarkSuite('NavierStokes', 1484000, [ ({name: 'NavierStokes', run: runNavierStokes, Setup: setupNavierStokes, TearDown: tearDownNavierStokes}) ]);
};

$__jsx_extend([NavierStokes], Object);
function FluidField() {
	this._width = 0;
	this._height = 0;
	this._rowSize = 0;
	this._iterations = 10;
	this._uiCallback = (function (f) {
	});
	this._displayFunc = null;
	this._visc = 0.5;
	this._dt = 0.1;
	this._dens = null;
	this._dens_prev = null;
	this._u = null;
	this._u_prev = null;
	this._v = null;
	this._v_prev = null;
	this._size = -1;
	FluidField$setResolution$LFluidField$NN(this, 64, 64);
};

$__jsx_extend([FluidField], Object);
FluidField.prototype._add_fields$ANANN = function (x, s, dt) {
	var i;
	for (i = 0; i < this._size; i++) {
		x[i] += dt * s[i];
	}
};


function FluidField$_add_fields$LFluidField$ANANN($this, x, s, dt) {
	var i;
	for (i = 0; i < $this._size; i++) {
		x[i] += dt * s[i];
	}
};

FluidField._add_fields$LFluidField$ANANN = FluidField$_add_fields$LFluidField$ANANN;

FluidField.prototype._set_bnd$NAN = function (b, x) {
	var i;
	var j;
	var maxEdge;
	if (b === 1) {
		for (i = 1; i <= this._width; i++) {
			x[i] = x[i + this._rowSize];
			x[i + (this._height + 1) * this._rowSize] = x[i + this._height * this._rowSize];
		}
		for (j = 1; i <= this._height; i++) {
			x[j * this._rowSize] = - x[1 + j * this._rowSize];
			x[this._width + 1 + j * this._rowSize] = - x[this._width + j * this._rowSize];
		}
	} else if (b === 2) {
		for (i = 1; i <= this._width; i++) {
			x[i] = - x[i + this._rowSize];
			x[i + (this._height + 1) * this._rowSize] = - x[i + this._height * this._rowSize];
		}
		for (j = 1; j <= this._height; j++) {
			x[j * this._rowSize] = x[1 + j * this._rowSize];
			x[this._width + 1 + j * this._rowSize] = x[this._width + j * this._rowSize];
		}
	} else {
		for (i = 1; i <= this._width; i++) {
			x[i] = x[i + this._rowSize];
			x[i + (this._height + 1) * this._rowSize] = x[i + this._height * this._rowSize];
		}
		for (j = 1; j <= this._height; j++) {
			x[j * this._rowSize] = x[1 + j * this._rowSize];
			x[this._width + 1 + j * this._rowSize] = x[this._width + j * this._rowSize];
		}
	}
	maxEdge = (this._height + 1) * this._rowSize;
	x[0] = 0.5 * (x[1] + x[this._rowSize]);
	x[maxEdge] = 0.5 * (x[1 + maxEdge] + x[this._height * this._rowSize]);
	x[this._width + 1] = 0.5 * (x[this._width] + x[this._width + 1 + this._rowSize]);
	x[this._width + 1 + maxEdge] = 0.5 * (x[this._width + maxEdge] + x[this._width + 1 + this._height * this._rowSize]);
};


function FluidField$_set_bnd$LFluidField$NAN($this, b, x) {
	var i;
	var j;
	var maxEdge;
	if (b === 1) {
		for (i = 1; i <= $this._width; i++) {
			x[i] = x[i + $this._rowSize];
			x[i + ($this._height + 1) * $this._rowSize] = x[i + $this._height * $this._rowSize];
		}
		for (j = 1; i <= $this._height; i++) {
			x[j * $this._rowSize] = - x[1 + j * $this._rowSize];
			x[$this._width + 1 + j * $this._rowSize] = - x[$this._width + j * $this._rowSize];
		}
	} else if (b === 2) {
		for (i = 1; i <= $this._width; i++) {
			x[i] = - x[i + $this._rowSize];
			x[i + ($this._height + 1) * $this._rowSize] = - x[i + $this._height * $this._rowSize];
		}
		for (j = 1; j <= $this._height; j++) {
			x[j * $this._rowSize] = x[1 + j * $this._rowSize];
			x[$this._width + 1 + j * $this._rowSize] = x[$this._width + j * $this._rowSize];
		}
	} else {
		for (i = 1; i <= $this._width; i++) {
			x[i] = x[i + $this._rowSize];
			x[i + ($this._height + 1) * $this._rowSize] = x[i + $this._height * $this._rowSize];
		}
		for (j = 1; j <= $this._height; j++) {
			x[j * $this._rowSize] = x[1 + j * $this._rowSize];
			x[$this._width + 1 + j * $this._rowSize] = x[$this._width + j * $this._rowSize];
		}
	}
	maxEdge = ($this._height + 1) * $this._rowSize;
	x[0] = 0.5 * (x[1] + x[$this._rowSize]);
	x[maxEdge] = 0.5 * (x[1 + maxEdge] + x[$this._height * $this._rowSize]);
	x[$this._width + 1] = 0.5 * (x[$this._width] + x[$this._width + 1 + $this._rowSize]);
	x[$this._width + 1 + maxEdge] = 0.5 * (x[$this._width + maxEdge] + x[$this._width + 1 + $this._height * $this._rowSize]);
};

FluidField._set_bnd$LFluidField$NAN = FluidField$_set_bnd$LFluidField$NAN;

FluidField.prototype._lin_solve$NANANNN = function (b, x, x0, a, c) {
	var j;
	var currentRow;
	var i;
	var invC;
	var k;
	var lastRow;
	var nextRow;
	var lastX;
	var _rowSize$0;
	if (a === 0 && c === 1) {
		for (j = 1; j <= this._height; j++) {
			currentRow = j * this._rowSize;
			++ currentRow;
			for (i = 0; i < this._width; i++) {
				x[currentRow] = x0[currentRow];
				++ currentRow;
			}
		}
		FluidField$_set_bnd$LFluidField$NAN(this, b, x);
	} else {
		invC = 1 / c;
		for (k = 0; k < this._iterations; k++) {
			for (j = 1; j <= this._height; j++) {
				lastRow = (j - 1) * (_rowSize$0 = this._rowSize);
				currentRow = j * _rowSize$0;
				nextRow = (j + 1) * _rowSize$0;
				lastX = x[currentRow];
				++ currentRow;
				for (i = 1; i <= this._width; i++) {
					lastX = x[currentRow] = (x0[currentRow] + a * (lastX + x[++ currentRow] + x[++ lastRow] + x[++ nextRow])) * invC;
				}
			}
			FluidField$_set_bnd$LFluidField$NAN(this, b, x);
		}
	}
};


function FluidField$_lin_solve$LFluidField$NANANNN($this, b, x, x0, a, c) {
	var j;
	var currentRow;
	var i;
	var invC;
	var k;
	var lastRow;
	var nextRow;
	var lastX;
	var _rowSize$0;
	if (a === 0 && c === 1) {
		for (j = 1; j <= $this._height; j++) {
			currentRow = j * $this._rowSize;
			++ currentRow;
			for (i = 0; i < $this._width; i++) {
				x[currentRow] = x0[currentRow];
				++ currentRow;
			}
		}
		FluidField$_set_bnd$LFluidField$NAN($this, b, x);
	} else {
		invC = 1 / c;
		for (k = 0; k < $this._iterations; k++) {
			for (j = 1; j <= $this._height; j++) {
				lastRow = (j - 1) * (_rowSize$0 = $this._rowSize);
				currentRow = j * _rowSize$0;
				nextRow = (j + 1) * _rowSize$0;
				lastX = x[currentRow];
				++ currentRow;
				for (i = 1; i <= $this._width; i++) {
					lastX = x[currentRow] = (x0[currentRow] + a * (lastX + x[++ currentRow] + x[++ lastRow] + x[++ nextRow])) * invC;
				}
			}
			FluidField$_set_bnd$LFluidField$NAN($this, b, x);
		}
	}
};

FluidField._lin_solve$LFluidField$NANANNN = FluidField$_lin_solve$LFluidField$NANANNN;

FluidField.prototype._diffuse$NANANN = function (b, x, x0, dt) {
	FluidField$_lin_solve$LFluidField$NANANNN(this, b, x, x0, 0, 1);
};


function FluidField$_diffuse$LFluidField$NANANN($this, b, x, x0, dt) {
	FluidField$_lin_solve$LFluidField$NANANNN($this, b, x, x0, 0, 1);
};

FluidField._diffuse$LFluidField$NANANN = FluidField$_diffuse$LFluidField$NANANN;

FluidField.prototype._lin_solve2$ANANANANNN = function (x, x0, y, y0, a, c) {
	var j;
	var currentRow;
	var i;
	var invC;
	var k;
	var lastRow;
	var nextRow;
	var lastX;
	var lastY;
	var _rowSize$0;
	if (a === 0 && c === 1) {
		for (j = 1; j <= this._height; j++) {
			currentRow = j * this._rowSize;
			++ currentRow;
			for (i = 0; i < this._width; i++) {
				x[currentRow] = x0[currentRow];
				y[currentRow] = y0[currentRow];
				++ currentRow;
			}
		}
		FluidField$_set_bnd$LFluidField$NAN(this, 1, x);
		FluidField$_set_bnd$LFluidField$NAN(this, 2, y);
	} else {
		invC = 1 / c;
		for (k = 0; k < this._iterations; k++) {
			for (j = 1; j <= this._height; j++) {
				lastRow = (j - 1) * (_rowSize$0 = this._rowSize);
				currentRow = j * _rowSize$0;
				nextRow = (j + 1) * _rowSize$0;
				lastX = x[currentRow];
				lastY = y[currentRow];
				++ currentRow;
				for (i = 1; i <= this._width; i++) {
					lastX = x[currentRow] = (x0[currentRow] + a * (lastX + x[currentRow] + x[lastRow] + x[nextRow])) * invC;
					lastY = y[currentRow] = (y0[currentRow] + a * (lastY + y[++ currentRow] + y[++ lastRow] + y[++ nextRow])) * invC;
				}
			}
			FluidField$_set_bnd$LFluidField$NAN(this, 1, x);
			FluidField$_set_bnd$LFluidField$NAN(this, 2, y);
		}
	}
};


function FluidField$_lin_solve2$LFluidField$ANANANANNN($this, x, x0, y, y0, a, c) {
	var j;
	var currentRow;
	var i;
	var invC;
	var k;
	var lastRow;
	var nextRow;
	var lastX;
	var lastY;
	var _rowSize$0;
	if (a === 0 && c === 1) {
		for (j = 1; j <= $this._height; j++) {
			currentRow = j * $this._rowSize;
			++ currentRow;
			for (i = 0; i < $this._width; i++) {
				x[currentRow] = x0[currentRow];
				y[currentRow] = y0[currentRow];
				++ currentRow;
			}
		}
		FluidField$_set_bnd$LFluidField$NAN($this, 1, x);
		FluidField$_set_bnd$LFluidField$NAN($this, 2, y);
	} else {
		invC = 1 / c;
		for (k = 0; k < $this._iterations; k++) {
			for (j = 1; j <= $this._height; j++) {
				lastRow = (j - 1) * (_rowSize$0 = $this._rowSize);
				currentRow = j * _rowSize$0;
				nextRow = (j + 1) * _rowSize$0;
				lastX = x[currentRow];
				lastY = y[currentRow];
				++ currentRow;
				for (i = 1; i <= $this._width; i++) {
					lastX = x[currentRow] = (x0[currentRow] + a * (lastX + x[currentRow] + x[lastRow] + x[nextRow])) * invC;
					lastY = y[currentRow] = (y0[currentRow] + a * (lastY + y[++ currentRow] + y[++ lastRow] + y[++ nextRow])) * invC;
				}
			}
			FluidField$_set_bnd$LFluidField$NAN($this, 1, x);
			FluidField$_set_bnd$LFluidField$NAN($this, 2, y);
		}
	}
};

FluidField._lin_solve2$LFluidField$ANANANANNN = FluidField$_lin_solve2$LFluidField$ANANANANNN;

FluidField.prototype._diffuse2$ANANANANN = function (x, x0, y, y0, dt) {
	FluidField$_lin_solve2$LFluidField$ANANANANNN(this, x, x0, y, y0, 0, 1);
};


function FluidField$_diffuse2$LFluidField$ANANANANN($this, x, x0, y, y0, dt) {
	FluidField$_lin_solve2$LFluidField$ANANANANNN($this, x, x0, y, y0, 0, 1);
};

FluidField._diffuse2$LFluidField$ANANANANN = FluidField$_diffuse2$LFluidField$ANANANANN;

FluidField.prototype._advect$NANANANANN = function (b, d, d0, u, v, dt) {
	var Wdt0;
	var Hdt0;
	var Wp5;
	var Hp5;
	var j;
	var pos;
	var i;
	var x;
	var y;
	var i0;
	var i1;
	var j0;
	var j1;
	var s1;
	var s0;
	var t1;
	var t0;
	var row1;
	var row2;
	var _rowSize$0;
	var _width$0;
	var _height$0;
	Wdt0 = dt * (_width$0 = this._width);
	Hdt0 = dt * (_height$0 = this._height);
	Wp5 = _width$0 + 0.5;
	Hp5 = _height$0 + 0.5;
	for (j = 1; j <= this._height; j++) {
		pos = j * this._rowSize;
		for (i = 1; i <= this._width; i++) {
			x = i - Wdt0 * u[++ pos];
			y = j - Hdt0 * v[pos];
			if (x < 0.5) {
				x = 0.5;
			} else if (x > Wp5) {
				x = Wp5;
			}
			i0 = x | 0;
			i1 = i0 + 1;
			if (y < 0.5) {
				y = 0.5;
			} else if (y > Hp5) {
				y = Hp5;
			}
			j0 = y | 0;
			j1 = j0 + 1;
			s1 = x - i0;
			s0 = 1 - s1;
			t1 = y - j0;
			t0 = 1 - t1;
			row1 = j0 * (_rowSize$0 = this._rowSize);
			row2 = j1 * _rowSize$0;
			d[pos] = s0 * (t0 * d0[i0 + row1] + t1 * d0[i0 + row2]) + s1 * (t0 * d0[i1 + row1] + t1 * d0[i1 + row2]);
		}
	}
	FluidField$_set_bnd$LFluidField$NAN(this, b, d);
};


function FluidField$_advect$LFluidField$NANANANANN($this, b, d, d0, u, v, dt) {
	var Wdt0;
	var Hdt0;
	var Wp5;
	var Hp5;
	var j;
	var pos;
	var i;
	var x;
	var y;
	var i0;
	var i1;
	var j0;
	var j1;
	var s1;
	var s0;
	var t1;
	var t0;
	var row1;
	var row2;
	var _rowSize$0;
	var _width$0;
	var _height$0;
	Wdt0 = dt * (_width$0 = $this._width);
	Hdt0 = dt * (_height$0 = $this._height);
	Wp5 = _width$0 + 0.5;
	Hp5 = _height$0 + 0.5;
	for (j = 1; j <= $this._height; j++) {
		pos = j * $this._rowSize;
		for (i = 1; i <= $this._width; i++) {
			x = i - Wdt0 * u[++ pos];
			y = j - Hdt0 * v[pos];
			if (x < 0.5) {
				x = 0.5;
			} else if (x > Wp5) {
				x = Wp5;
			}
			i0 = x | 0;
			i1 = i0 + 1;
			if (y < 0.5) {
				y = 0.5;
			} else if (y > Hp5) {
				y = Hp5;
			}
			j0 = y | 0;
			j1 = j0 + 1;
			s1 = x - i0;
			s0 = 1 - s1;
			t1 = y - j0;
			t0 = 1 - t1;
			row1 = j0 * (_rowSize$0 = $this._rowSize);
			row2 = j1 * _rowSize$0;
			d[pos] = s0 * (t0 * d0[i0 + row1] + t1 * d0[i0 + row2]) + s1 * (t0 * d0[i1 + row1] + t1 * d0[i1 + row2]);
		}
	}
	FluidField$_set_bnd$LFluidField$NAN($this, b, d);
};

FluidField._advect$LFluidField$NANANANANN = FluidField$_advect$LFluidField$NANANANANN;

FluidField.prototype._project$ANANANAN = function (u, v, p, div) {
	var h;
	var j;
	var row;
	var previousRow;
	var prevValue;
	var currentRow;
	var nextValue;
	var nextRow;
	var i;
	var wScale;
	var hScale;
	var prevPos;
	var currentPos;
	var nextPos;
	var prevRow;
	var _rowSize$0;
	var _rowSize$1;
	h = -0.5 / Math.sqrt(this._width * this._height);
	for (j = 1; j <= this._height; j++) {
		row = j * (_rowSize$0 = this._rowSize);
		previousRow = (j - 1) * _rowSize$0;
		prevValue = row - 1;
		currentRow = row;
		nextValue = row + 1;
		nextRow = (j + 1) * _rowSize$0;
		for (i = 1; i <= this._width; i++) {
			div[++ currentRow] = h * (u[++ nextValue] - u[++ prevValue] + v[++ nextRow] - v[++ previousRow]);
			p[currentRow] = 0;
		}
	}
	FluidField$_set_bnd$LFluidField$NAN(this, 0, div);
	FluidField$_set_bnd$LFluidField$NAN(this, 0, p);
	FluidField$_lin_solve$LFluidField$NANANNN(this, 0, p, div, 1, 4);
	wScale = 0.5 * this._width;
	hScale = 0.5 * this._height;
	for (j = 1; j <= this._height; j++) {
		prevPos = j * (_rowSize$1 = this._rowSize) - 1;
		currentPos = j * _rowSize$1;
		nextPos = j * _rowSize$1 + 1;
		prevRow = (j - 1) * _rowSize$1;
		currentRow = j * _rowSize$1;
		nextRow = (j + 1) * _rowSize$1;
		for (i = 1; i <= this._width; i++) {
			u[++ currentPos] -= wScale * (p[++ nextPos] - p[++ prevPos]);
			v[currentPos] -= hScale * (p[++ nextRow] - p[++ prevRow]);
		}
	}
	FluidField$_set_bnd$LFluidField$NAN(this, 1, u);
	FluidField$_set_bnd$LFluidField$NAN(this, 2, v);
};


function FluidField$_project$LFluidField$ANANANAN($this, u, v, p, div) {
	var h;
	var j;
	var row;
	var previousRow;
	var prevValue;
	var currentRow;
	var nextValue;
	var nextRow;
	var i;
	var wScale;
	var hScale;
	var prevPos;
	var currentPos;
	var nextPos;
	var prevRow;
	var _rowSize$0;
	var _rowSize$1;
	h = -0.5 / Math.sqrt($this._width * $this._height);
	for (j = 1; j <= $this._height; j++) {
		row = j * (_rowSize$0 = $this._rowSize);
		previousRow = (j - 1) * _rowSize$0;
		prevValue = row - 1;
		currentRow = row;
		nextValue = row + 1;
		nextRow = (j + 1) * _rowSize$0;
		for (i = 1; i <= $this._width; i++) {
			div[++ currentRow] = h * (u[++ nextValue] - u[++ prevValue] + v[++ nextRow] - v[++ previousRow]);
			p[currentRow] = 0;
		}
	}
	FluidField$_set_bnd$LFluidField$NAN($this, 0, div);
	FluidField$_set_bnd$LFluidField$NAN($this, 0, p);
	FluidField$_lin_solve$LFluidField$NANANNN($this, 0, p, div, 1, 4);
	wScale = 0.5 * $this._width;
	hScale = 0.5 * $this._height;
	for (j = 1; j <= $this._height; j++) {
		prevPos = j * (_rowSize$1 = $this._rowSize) - 1;
		currentPos = j * _rowSize$1;
		nextPos = j * _rowSize$1 + 1;
		prevRow = (j - 1) * _rowSize$1;
		currentRow = j * _rowSize$1;
		nextRow = (j + 1) * _rowSize$1;
		for (i = 1; i <= $this._width; i++) {
			u[++ currentPos] -= wScale * (p[++ nextPos] - p[++ prevPos]);
			v[currentPos] -= hScale * (p[++ nextRow] - p[++ prevRow]);
		}
	}
	FluidField$_set_bnd$LFluidField$NAN($this, 1, u);
	FluidField$_set_bnd$LFluidField$NAN($this, 2, v);
};

FluidField._project$LFluidField$ANANANAN = FluidField$_project$LFluidField$ANANANAN;

FluidField.prototype._dens_step$ANANANANN = function (x, x0, u, v, dt) {
	var i$0;
	for (i$0 = 0; i$0 < this._size; i$0++) {
		x[i$0] += dt * x0[i$0];
	}
	FluidField$_lin_solve$LFluidField$NANANNN(this, 0, x0, x, 0, 1);
	FluidField$_advect$LFluidField$NANANANANN(this, 0, x, x0, u, v, dt);
};


function FluidField$_dens_step$LFluidField$ANANANANN($this, x, x0, u, v, dt) {
	var i$0;
	for (i$0 = 0; i$0 < $this._size; i$0++) {
		x[i$0] += dt * x0[i$0];
	}
	FluidField$_lin_solve$LFluidField$NANANNN($this, 0, x0, x, 0, 1);
	FluidField$_advect$LFluidField$NANANANANN($this, 0, x, x0, u, v, dt);
};

FluidField._dens_step$LFluidField$ANANANANN = FluidField$_dens_step$LFluidField$ANANANANN;

FluidField.prototype._vel_step$ANANANANN = function (u, v, u0, v0, dt) {
	var temp;
	var i$0;
	var i$1;
	for (i$0 = 0; i$0 < this._size; i$0++) {
		u[i$0] += dt * u0[i$0];
	}
	for (i$1 = 0; i$1 < this._size; i$1++) {
		v[i$1] += dt * v0[i$1];
	}
	temp = u0;
	u0 = u;
	u = temp;
	temp = v0;
	v0 = v;
	v = temp;
	FluidField$_lin_solve2$LFluidField$ANANANANNN(this, u, u0, temp, v0, 0, 1);
	FluidField$_project$LFluidField$ANANANAN(this, u, temp, u0, v0);
	temp = u0;
	u0 = u;
	u = temp;
	temp = v0;
	v0 = v;
	v = temp;
	FluidField$_advect$LFluidField$NANANANANN(this, 1, u, u0, u0, v0, dt);
	FluidField$_advect$LFluidField$NANANANANN(this, 2, temp, v0, u0, v0, dt);
	FluidField$_project$LFluidField$ANANANAN(this, u, temp, u0, v0);
};


function FluidField$_vel_step$LFluidField$ANANANANN($this, u, v, u0, v0, dt) {
	var temp;
	var i$0;
	var i$1;
	for (i$0 = 0; i$0 < $this._size; i$0++) {
		u[i$0] += dt * u0[i$0];
	}
	for (i$1 = 0; i$1 < $this._size; i$1++) {
		v[i$1] += dt * v0[i$1];
	}
	temp = u0;
	u0 = u;
	u = temp;
	temp = v0;
	v0 = v;
	v = temp;
	FluidField$_lin_solve2$LFluidField$ANANANANNN($this, u, u0, temp, v0, 0, 1);
	FluidField$_project$LFluidField$ANANANAN($this, u, temp, u0, v0);
	temp = u0;
	u0 = u;
	u = temp;
	temp = v0;
	v0 = v;
	v = temp;
	FluidField$_advect$LFluidField$NANANANANN($this, 1, u, u0, u0, v0, dt);
	FluidField$_advect$LFluidField$NANANANANN($this, 2, temp, v0, u0, v0, dt);
	FluidField$_project$LFluidField$ANANANAN($this, u, temp, u0, v0);
};

FluidField._vel_step$LFluidField$ANANANANN = FluidField$_vel_step$LFluidField$ANANANANN;

FluidField.prototype.update$ = function () {
	FluidField$queryUI$LFluidField$ANANAN(this, this._dens_prev, this._u_prev, this._v_prev);
	FluidField$_vel_step$LFluidField$ANANANANN(this, this._u, this._v, this._u_prev, this._v_prev, this._dt);
	FluidField$_dens_step$LFluidField$ANANANANN(this, this._dens, this._dens_prev, this._u, this._v, this._dt);
	this._displayFunc(({fluid: this, dens: this._dens, u: this._u, v: this._v}));
};


function FluidField$update$LFluidField$($this) {
	FluidField$queryUI$LFluidField$ANANAN($this, $this._dens_prev, $this._u_prev, $this._v_prev);
	FluidField$_vel_step$LFluidField$ANANANANN($this, $this._u, $this._v, $this._u_prev, $this._v_prev, $this._dt);
	FluidField$_dens_step$LFluidField$ANANANANN($this, $this._dens, $this._dens_prev, $this._u, $this._v, $this._dt);
	$this._displayFunc(({fluid: $this, dens: $this._dens, u: $this._u, v: $this._v}));
};

FluidField.update$LFluidField$ = FluidField$update$LFluidField$;

FluidField.prototype.iterations$ = function () {
	return this._iterations;
};


function FluidField$iterations$LFluidField$($this) {
	return $this._iterations;
};

FluidField.iterations$LFluidField$ = FluidField$iterations$LFluidField$;

FluidField.prototype.setIterations$N = function (iters) {
	if (iters > 0 && iters <= 100) {
		this._iterations = iters;
	}
};


function FluidField$setIterations$LFluidField$N($this, iters) {
	if (iters > 0 && iters <= 100) {
		$this._iterations = iters;
	}
};

FluidField.setIterations$LFluidField$N = FluidField$setIterations$LFluidField$N;

FluidField.prototype.queryUI$ANANAN = function (d, u, v) {
	var i;
	for (i = 0; i < this._size; i++) {
		u[i] = v[i] = d[i] = 0.0;
	}
	this._uiCallback(({fluid: this, dens: d, u: u, v: v}));
};


function FluidField$queryUI$LFluidField$ANANAN($this, d, u, v) {
	var i;
	for (i = 0; i < $this._size; i++) {
		u[i] = v[i] = d[i] = 0.0;
	}
	$this._uiCallback(({fluid: $this, dens: d, u: u, v: v}));
};

FluidField.queryUI$LFluidField$ANANAN = FluidField$queryUI$LFluidField$ANANAN;

FluidField.prototype.setUICallback$F$LField$V$ = function (callback) {
	this._uiCallback = callback;
};


function FluidField$setUICallback$LFluidField$F$LField$V$($this, callback) {
	$this._uiCallback = callback;
};

FluidField.setUICallback$LFluidField$F$LField$V$ = FluidField$setUICallback$LFluidField$F$LField$V$;

FluidField.prototype.setDisplayFunction$F$LField$V$ = function (func) {
	this._displayFunc = func;
};


function FluidField$setDisplayFunction$LFluidField$F$LField$V$($this, func) {
	$this._displayFunc = func;
};

FluidField.setDisplayFunction$LFluidField$F$LField$V$ = FluidField$setDisplayFunction$LFluidField$F$LField$V$;

FluidField.prototype.reset$ = function () {
	var i;
	var _width$0;
	var _size$0;
	this._rowSize = (_width$0 = this._width) + 2;
	_size$0 = this._size = (_width$0 + 2) * (this._height + 2);
	this._dens = new Array(_size$0);
	this._dens_prev = new Array(this._size);
	this._u = new Array(this._size);
	this._u_prev = new Array(this._size);
	this._v = new Array(this._size);
	this._v_prev = new Array(this._size);
	for (i = 0; i < this._size; i++) {
		this._dens_prev[i] = this._u_prev[i] = this._v_prev[i] = this._dens[i] = this._u[i] = this._v[i] = 0;
	}
};


function FluidField$reset$LFluidField$($this) {
	var i;
	var _width$0;
	var _size$0;
	$this._rowSize = (_width$0 = $this._width) + 2;
	_size$0 = $this._size = (_width$0 + 2) * ($this._height + 2);
	$this._dens = new Array(_size$0);
	$this._dens_prev = new Array($this._size);
	$this._u = new Array($this._size);
	$this._u_prev = new Array($this._size);
	$this._v = new Array($this._size);
	$this._v_prev = new Array($this._size);
	for (i = 0; i < $this._size; i++) {
		$this._dens_prev[i] = $this._u_prev[i] = $this._v_prev[i] = $this._dens[i] = $this._u[i] = $this._v[i] = 0;
	}
};

FluidField.reset$LFluidField$ = FluidField$reset$LFluidField$;

FluidField.prototype.setResolution$NN = function (hRes, wRes) {
	var res;
	res = wRes * hRes;
	if (res > 0 && res < 1000000 && (wRes !== this._width || hRes !== this._height)) {
		this._width = wRes;
		this._height = hRes;
		FluidField$reset$LFluidField$(this);
		return true;
	}
	return false;
};


function FluidField$setResolution$LFluidField$NN($this, hRes, wRes) {
	var res;
	res = wRes * hRes;
	if (res > 0 && res < 1000000 && (wRes !== $this._width || hRes !== $this._height)) {
		$this._width = wRes;
		$this._height = hRes;
		FluidField$reset$LFluidField$($this);
		return true;
	}
	return false;
};

FluidField.setResolution$LFluidField$NN = FluidField$setResolution$LFluidField$NN;

function Field(fluid, dens, u, v) {
	this.fluid = fluid;
	this.dens = dens;
	this.u = u;
	this.v = v;
};

$__jsx_extend([Field], Object);
function Field$setDensity$LField$NNN($this, x, y, d) {
	$this.dens[x + 1 + (y + 1) * $this.fluid._rowSize] = d;
};

Field.setDensity$LField$NNN = Field$setDensity$LField$NNN;

function Field$getDensity$LField$NN($this, x, y) {
	return $this.dens[x + 1 + (y + 1) * $this.fluid._rowSize];
};

Field.getDensity$LField$NN = Field$getDensity$LField$NN;

function Field$setVelocity$LField$NNNN($this, x, y, xv, yv) {
	$this.u[x + 1 + (y + 1) * $this.fluid._rowSize] = xv;
	$this.v[x + 1 + (y + 1) * $this.fluid._rowSize] = yv;
};

Field.setVelocity$LField$NNNN = Field$setVelocity$LField$NNNN;

function Field$getXVelocity$LField$NN($this, x, y) {
	return $this.u[x + 1 + (y + 1) * $this.fluid._rowSize];
};

Field.getXVelocity$LField$NN = Field$getXVelocity$LField$NN;

function Field$getYVelocity$LField$NN($this, x, y) {
	return $this.v[x + 1 + (y + 1) * $this.fluid._rowSize];
};

Field.getYVelocity$LField$NN = Field$getYVelocity$LField$NN;

function Field$width$LField$($this) {
	return $this.fluid._width;
};

Field.width$LField$ = Field$width$LField$;

function Field$height$LField$($this) {
	return $this.fluid._height;
};

Field.height$LField$ = Field$height$LField$;

var js$0 = (function () { var global = (function () { return this; }()); return { global: global, eval: global.eval, invoke: function(invocant, methodName, args) { return invocant[methodName].apply(invocant, args); } }; }());
function Timer() {
};

$__jsx_extend([Timer], Object);
function Timer$setTimeout$F$V$N(callback, intervalMS) {
	return js$0.global.setTimeout(callback, intervalMS);
};

Timer.setTimeout$F$V$N = Timer$setTimeout$F$V$N;

function Timer$clearTimeout$LTimerHandle$(timer) {
	js$0.global.clearTimeout(timer);
};

Timer.clearTimeout$LTimerHandle$ = Timer$clearTimeout$LTimerHandle$;

function Timer$setInterval$F$V$N(callback, intervalMS) {
	return js$0.global.setInterval(callback, intervalMS);
};

Timer.setInterval$F$V$N = Timer$setInterval$F$V$N;

function Timer$clearInterval$LTimerHandle$(timer) {
	js$0.global.clearInterval(timer);
};

Timer.clearInterval$LTimerHandle$ = Timer$clearInterval$LTimerHandle$;

function Timer$requestAnimationFrame$F$NV$(callback) {
	return Timer._requestAnimationFrame(callback);
};

Timer.requestAnimationFrame$F$NV$ = Timer$requestAnimationFrame$F$NV$;

function Timer$cancelAnimationFrame$LTimerHandle$(timer) {
	Timer._cancelAnimationFrame(timer);
};

Timer.cancelAnimationFrame$LTimerHandle$ = Timer$cancelAnimationFrame$LTimerHandle$;

function Timer$useNativeRAF$B(enable) {
	Timer._requestAnimationFrame = Timer$_getRequestAnimationFrameImpl$B(enable);
	Timer._cancelAnimationFrame = Timer$_getCancelAnimationFrameImpl$B(enable);
};

Timer.useNativeRAF$B = Timer$useNativeRAF$B;

function Timer$_getRequestAnimationFrameImpl$B(useNativeImpl) {
	var prefixes;
	var i;
	var name;
	var lastTime;
	var prefixes$len$0;
	if (useNativeImpl) {
		prefixes = [ "r", "webkitR", "mozR", "oR", "msR" ];
		for ((i = 0, prefixes$len$0 = prefixes.length); i < prefixes$len$0; ++ i) {
			name = prefixes[i] + "equestAnimationFrame";
			if (js$0.global[name] instanceof Function) {
				return (function (callback) {
					return js$0.global[name](callback);
				});
			}
		}
	}
	lastTime = 0;
	return (function (callback) {
		var now;
		var timeToCall;
		var value2$0;
		now = Date.now();
		value2$0 = 16 - (now - lastTime);
		timeToCall = (0 >= value2$0 ? 0 : value2$0);
		lastTime = now + timeToCall;
		return js$0.global.setTimeout((function () {
			callback(now + timeToCall);
		}), timeToCall);
	});
};

Timer._getRequestAnimationFrameImpl$B = Timer$_getRequestAnimationFrameImpl$B;

function Timer$_getCancelAnimationFrameImpl$B(useNativeImpl) {
	var prefixes;
	var i;
	var name;
	var prefixes$len$0;
	if (useNativeImpl) {
		prefixes = [ "c", "webkitC", "mozC", "oC", "msC" ];
		for ((i = 0, prefixes$len$0 = prefixes.length); i < prefixes$len$0; ++ i) {
			name = prefixes[i] + "ancelAnimationFrame";
			if (js$0.global[name] instanceof Function) {
				return (function (timer) {
					js$0.global[name](timer);
				});
			}
		}
	}
	return Timer$clearTimeout$LTimerHandle$;
};

Timer._getCancelAnimationFrameImpl$B = Timer$_getCancelAnimationFrameImpl$B;

function TimerHandle() {
};

$__jsx_extend([TimerHandle], Object);
$__jsx_lazy_init(dom, "window", function () {
	return js$0.global.window;
});
$__jsx_lazy_init(dom, "document", function () {
	return js$0.global.document;
});
BenchmarkUtil.seed = 49734321;
$__jsx_lazy_init(BenchmarkSuite, "suites", function () {
	return [  ];
});
$__jsx_lazy_init(BenchmarkSuite, "scores", function () {
	return [  ];
});
BenchmarkSuite.version = '7';
Richards.COUNT = 1000;
Richards.EXPECTED_QUEUE_COUNT = 2322;
Richards.EXPECTED_HOLD_COUNT = 928;
Scheduler.ID_IDLE = 0;
Scheduler.ID_WORKER = 1;
Scheduler.ID_HANDLER_A = 2;
Scheduler.ID_HANDLER_B = 3;
Scheduler.ID_DEVICE_A = 4;
Scheduler.ID_DEVICE_B = 5;
Scheduler.NUMBER_OF_IDS = 6;
Scheduler.KIND_DEVICE = 0;
Scheduler.KIND_WORK = 1;
TaskControlBlock.STATE_RUNNING = 0;
TaskControlBlock.STATE_RUNNABLE = 1;
TaskControlBlock.STATE_SUSPENDED = 2;
TaskControlBlock.STATE_HELD = 4;
TaskControlBlock.STATE_SUSPENDED_RUNNABLE = 3;
TaskControlBlock.STATE_NOT_HELD = -5;
Packet.DATA_SIZE = 4;
$__jsx_lazy_init(Strength, "REQUIRED", function () {
	return ({strengthValue: 0, name: "required"});
});
$__jsx_lazy_init(Strength, "STONG_PREFERRED", function () {
	return ({strengthValue: 1, name: "strongPreferred"});
});
$__jsx_lazy_init(Strength, "PREFERRED", function () {
	return ({strengthValue: 2, name: "preferred"});
});
$__jsx_lazy_init(Strength, "STRONG_DEFAULT", function () {
	return ({strengthValue: 3, name: "strongDefault"});
});
$__jsx_lazy_init(Strength, "NORMAL", function () {
	return ({strengthValue: 4, name: "normal"});
});
$__jsx_lazy_init(Strength, "WEAK_DEFAULT", function () {
	return ({strengthValue: 5, name: "weakDefault"});
});
$__jsx_lazy_init(Strength, "WEAKEST", function () {
	return ({strengthValue: 6, name: "weakest"});
});
Direction.NONE = 0;
Direction.FORWARD = 1;
Direction.BACKWARD = -1;
Main.planner = null;
Crypto.nValue = "a5261939975948bb7a58dffe5ff54e65f0498f9175f5a09288810b8975871e99af3b5dd94057b0fc07535f5f97444504fa35169d461d0d30cf0192e307727c065168c788771c561a9400fb49175e9e6aa4e23fe11af69e9412dd23b0cb6684c4c2429bce139e848ab26d0829073351f4acd36074eafd036a5eb83359d2a698d3";
Crypto.eValue = "10001";
Crypto.dValue = "8e9912f6d3645894e8d38cb58c0db81ff516cf4c7e5a14c7f1eddb1459d2cded4d8d293fc97aee6aefb861859c8b6a3d1dfe710463e1f9ddc72048c09751971c4a580aa51eb523357a3cc48d31cfad1d4a165066ed92d4748fb6571211da5cb14bc11b6e2df7c1a559e6d5ac1cd5c94703a22891464fba23d0d965086277a161";
Crypto.pValue = "d090ce58a92c75233a6486cb0a9209bf3583b64f540c76f5294bb97d285eed33aec220bde14b2417951178ac152ceab6da7090905b478195498b352048f15e7d";
Crypto.qValue = "cab575dc652bb66df15a0359609d51d1db184750c00c6698b90ef3465c99655103edbf0d54c56aec0ce3c4d22592338092a126a0cc49f65a4a30d222b411e58f";
Crypto.dmp1Value = "1a24bca8e273df2f0e47c199bbf678604e7df7215480c77c8db39f49b000ce2cf7500038acfff5433b7d582a01f1826e6f4d42e1c57f5e1fef7b12aabc59fd25";
Crypto.dmq1Value = "3d06982efbbe47339e1f6d36b1216b8a741d410b0c662f54f7118b27b9a4ec9d914337eb39841d8666f3034408cf94f5b62f11c402fc994fe15a05493150d9fd";
Crypto.coeffValue = "3a3e731acd8960b7ff9eb81a7ff93bd1cfa74cbd56987db58b4594fb09c09084db1734c8143f98b602b981aaa9243ca28deb69b5b280ee8dcee0fd2625e53250";
$__jsx_lazy_init(BigInteger, "ZERO", function () {
	return BigInteger$nbv$N(0);
});
$__jsx_lazy_init(BigInteger, "ONE", function () {
	return BigInteger$nbv$N(1);
});
BigInteger.DB = 0;
BigInteger.DM = 0;
BigInteger.DV = 0;
BigInteger.FP = 0;
BigInteger.FV = 0;
BigInteger.F1 = 0;
BigInteger.F2 = 0;
BigInteger.am = null;
BigInteger.RM = "0123456789abcdefghijklmnopqrstuvwxyz";
$__jsx_lazy_init(BigInteger, "RC", function () {
	return [];
});
$__jsx_lazy_init(BigInteger, "lowprimes", function () {
	return [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509 ];
});
$__jsx_lazy_init(BigInteger, "lplim", function () {
	return 67108864 / BigInteger.lowprimes[BigInteger.lowprimes.length - 1];
});
RNG.psize = 256;
RNG.state = null;
RNG.pool = null;
RNG.pptr = 0;
Main$0.checkNumber = 0;
Splay.SPLAY_TREE_SIZE = 8000;
Splay.SPLAY_TREE_MODIFICATIONS = 80;
Splay.SPLAY_TREE_PAYLOAD_DEPTH = 5;
$__jsx_lazy_init(Timer, "_requestAnimationFrame", function () {
	return Timer$_getRequestAnimationFrameImpl$B(true);
});
$__jsx_lazy_init(Timer, "_cancelAnimationFrame", function () {
	return Timer$_getCancelAnimationFrameImpl$B(true);
});

var $__jsx_classMap = {
	"system:lib/built-in.jsx": {
		StopIteration: StopIteration,
		StopIteration$: StopIteration
	},
	"run-web.jsx": {
		_Main: _Main,
		_Main$: _Main,
		MyBenchmarkRunner: MyBenchmarkRunner,
		MyBenchmarkRunner$: MyBenchmarkRunner
	},
	"system:lib/js/js/web.jsx": {
		dom: dom,
		dom$: dom,
		EventInit: EventInit,
		EventInit$: EventInit,
		CustomEventInit: CustomEventInit,
		CustomEventInit$: CustomEventInit,
		MutationObserverInit: MutationObserverInit,
		MutationObserverInit$: MutationObserverInit,
		UIEventInit: UIEventInit,
		UIEventInit$: UIEventInit,
		FocusEventInit: FocusEventInit,
		FocusEventInit$: FocusEventInit,
		MouseEventInit: MouseEventInit,
		MouseEventInit$: MouseEventInit,
		WheelEventInit: WheelEventInit,
		WheelEventInit$: WheelEventInit,
		KeyboardEventInit: KeyboardEventInit,
		KeyboardEventInit$: KeyboardEventInit,
		CompositionEventInit: CompositionEventInit,
		CompositionEventInit$: CompositionEventInit,
		ProgressEventInit: ProgressEventInit,
		ProgressEventInit$: ProgressEventInit,
		XMLHttpRequestOptions: XMLHttpRequestOptions,
		XMLHttpRequestOptions$: XMLHttpRequestOptions,
		ScrollOptions: ScrollOptions,
		ScrollOptions$: ScrollOptions,
		TrackEventInit: TrackEventInit,
		TrackEventInit$: TrackEventInit,
		PopStateEventInit: PopStateEventInit,
		PopStateEventInit$: PopStateEventInit,
		HashChangeEventInit: HashChangeEventInit,
		HashChangeEventInit$: HashChangeEventInit,
		PageTransitionEventInit: PageTransitionEventInit,
		PageTransitionEventInit$: PageTransitionEventInit,
		ErrorEventInit: ErrorEventInit,
		ErrorEventInit$: ErrorEventInit,
		DragEventInit: DragEventInit,
		DragEventInit$: DragEventInit,
		CloseEventInit: CloseEventInit,
		CloseEventInit$: CloseEventInit,
		StorageEventInit: StorageEventInit,
		StorageEventInit$: StorageEventInit,
		MessageEventInit: MessageEventInit,
		MessageEventInit$: MessageEventInit,
		EventSourceInit: EventSourceInit,
		EventSourceInit$: EventSourceInit,
		IDBObjectStoreParameters: IDBObjectStoreParameters,
		IDBObjectStoreParameters$: IDBObjectStoreParameters,
		IDBIndexParameters: IDBIndexParameters,
		IDBIndexParameters$: IDBIndexParameters,
		IDBVersionChangeEventInit: IDBVersionChangeEventInit,
		IDBVersionChangeEventInit$: IDBVersionChangeEventInit,
		NotificationOptions: NotificationOptions,
		NotificationOptions$: NotificationOptions,
		RTCSessionDescriptionInit: RTCSessionDescriptionInit,
		RTCSessionDescriptionInit$: RTCSessionDescriptionInit,
		RTCIceCandidateInit: RTCIceCandidateInit,
		RTCIceCandidateInit$: RTCIceCandidateInit,
		RTCIceServer: RTCIceServer,
		RTCIceServer$: RTCIceServer,
		RTCConfiguration: RTCConfiguration,
		RTCConfiguration$: RTCConfiguration,
		DataChannelInit: DataChannelInit,
		DataChannelInit$: DataChannelInit,
		RTCPeerConnectionIceEventInit: RTCPeerConnectionIceEventInit,
		RTCPeerConnectionIceEventInit$: RTCPeerConnectionIceEventInit,
		MediaStreamEventInit: MediaStreamEventInit,
		MediaStreamEventInit$: MediaStreamEventInit,
		DataChannelEventInit: DataChannelEventInit,
		DataChannelEventInit$: DataChannelEventInit,
		MediaStreamConstraints: MediaStreamConstraints,
		MediaStreamConstraints$: MediaStreamConstraints,
		MediaTrackConstraints: MediaTrackConstraints,
		MediaTrackConstraints$: MediaTrackConstraints,
		HitRegionOptions: HitRegionOptions,
		HitRegionOptions$: HitRegionOptions,
		WebGLContextAttributes: WebGLContextAttributes,
		WebGLContextAttributes$: WebGLContextAttributes,
		WebGLContextEventInit: WebGLContextEventInit,
		WebGLContextEventInit$: WebGLContextEventInit,
		DeviceOrientationEventInit: DeviceOrientationEventInit,
		DeviceOrientationEventInit$: DeviceOrientationEventInit,
		DeviceMotionEventInit: DeviceMotionEventInit,
		DeviceMotionEventInit$: DeviceMotionEventInit
	},
	"base.jsx": {
		Benchmark: Benchmark,
		Benchmark$SF$V$: Benchmark,
		Benchmark$SF$V$F$V$F$V$: Benchmark$0,
		BenchmarkResult: BenchmarkResult,
		BenchmarkResult$LBenchmark$N: BenchmarkResult,
		BenchmarkData: BenchmarkData,
		BenchmarkData$NN: BenchmarkData,
		BenchmarkRunner: BenchmarkRunner,
		BenchmarkRunner$: BenchmarkRunner,
		BenchmarkUtil: BenchmarkUtil,
		BenchmarkUtil$: BenchmarkUtil,
		BenchmarkSuite: BenchmarkSuite,
		BenchmarkSuite$SIALBenchmark$: BenchmarkSuite
	},
	"richards.jsx": {
		Richards: Richards,
		Richards$: Richards,
		Scheduler: Scheduler,
		Scheduler$: Scheduler,
		TaskControlBlock: TaskControlBlock,
		TaskControlBlock$LTaskControlBlock$IILPacket$LTask$: TaskControlBlock,
		Task: Task,
		Task$LScheduler$: Task,
		IdleTask: IdleTask,
		IdleTask$LScheduler$II: IdleTask,
		DeviceTask: DeviceTask,
		DeviceTask$LScheduler$: DeviceTask,
		WorkerTask: WorkerTask,
		WorkerTask$LScheduler$II: WorkerTask,
		HandlerTask: HandlerTask,
		HandlerTask$LScheduler$: HandlerTask,
		Packet: Packet,
		Packet$LPacket$II: Packet
	},
	"deltablue.jsx": {
		DeltaBlue: DeltaBlue,
		DeltaBlue$: DeltaBlue,
		Strength: Strength,
		Strength$IS: Strength,
		Constraint: Constraint,
		Constraint$LStrength$: Constraint,
		UnaryConstraint: UnaryConstraint,
		UnaryConstraint$LVariable$LStrength$: UnaryConstraint,
		StayConstraint: StayConstraint,
		StayConstraint$LVariable$LStrength$: StayConstraint,
		EditConstraint: EditConstraint,
		EditConstraint$LVariable$LStrength$: EditConstraint,
		Direction: Direction,
		Direction$: Direction,
		BinaryConstraint: BinaryConstraint,
		BinaryConstraint$LVariable$LVariable$LStrength$: BinaryConstraint,
		BinaryConstraint$LStrength$: BinaryConstraint$0,
		ScaleConstraint: ScaleConstraint,
		ScaleConstraint$LVariable$LVariable$LVariable$LVariable$LStrength$: ScaleConstraint,
		EqualityConstraint: EqualityConstraint,
		EqualityConstraint$LVariable$LVariable$LStrength$: EqualityConstraint,
		Variable: Variable,
		Variable$S: Variable,
		Variable$SN: Variable$0,
		Planner: Planner,
		Planner$: Planner,
		Plan: Plan,
		Plan$: Plan,
		Main: Main,
		Main$: Main
	},
	"crypto.jsx": {
		Crypto: Crypto,
		Crypto$: Crypto,
		BigInteger: BigInteger,
		BigInteger$: BigInteger,
		BigInteger$NNLSecureRandom$: BigInteger$0,
		BigInteger$AN: BigInteger$1,
		BigInteger$SN: BigInteger$2,
		Reducer: Reducer,
		Reducer$: Reducer,
		Classic: Classic,
		Classic$LBigInteger$: Classic,
		Montgomery: Montgomery,
		Montgomery$LBigInteger$: Montgomery,
		NullExp: NullExp,
		NullExp$: NullExp,
		Barrett: Barrett,
		Barrett$LBigInteger$: Barrett,
		Arcfour: Arcfour,
		Arcfour$: Arcfour,
		RNG: RNG,
		RNG$: RNG,
		SecureRandom: SecureRandom,
		SecureRandom$: SecureRandom,
		RSAKey: RSAKey,
		RSAKey$: RSAKey
	},
	"raytrace.jsx": {
		RayTrace: RayTrace,
		RayTrace$: RayTrace,
		Color: Color,
		Color$: Color,
		Color$NNN: Color$0,
		Light: Light,
		Light$LVector$LColor$: Light,
		Light$LVector$LColor$N: Light$0,
		Vector: Vector,
		Vector$: Vector,
		Vector$NNN: Vector$0,
		Ray: Ray,
		Ray$LVector$LVector$: Ray,
		Scene: Scene,
		Scene$: Scene,
		BaseMaterial: BaseMaterial,
		BaseMaterial$: BaseMaterial,
		Solid: Solid,
		Solid$LColor$NNNN: Solid,
		Chessboard: Chessboard,
		Chessboard$LColor$LColor$NNNN: Chessboard,
		Shape: Shape,
		Shape$: Shape,
		Sphere: Sphere,
		Sphere$LVector$NLBaseMaterial$: Sphere,
		Plane: Plane,
		Plane$LVector$NLBaseMaterial$: Plane,
		IntersectionInfo: IntersectionInfo,
		IntersectionInfo$: IntersectionInfo,
		Camera: Camera,
		Camera$LVector$LVector$LVector$: Camera,
		Background: Background,
		Background$LColor$N: Background,
		Options: Options,
		Options$: Options,
		Engine: Engine,
		Engine$LOptions$: Engine,
		Main: Main$0,
		Main$: Main$0
	},
	"regexp.jsx": {
		RegExpTest: RegExpTest,
		RegExpTest$: RegExpTest,
		RegExpBenchmark: RegExpBenchmark,
		RegExpBenchmark$: RegExpBenchmark
	},
	"splay.jsx": {
		Splay: Splay,
		Splay$: Splay,
		SplayTree: SplayTree,
		SplayTree$: SplayTree,
		SplayTreeNode: SplayTreeNode,
		SplayTreeNode$NX: SplayTreeNode
	},
	"navier-stokes.jsx": {
		NavierStokes: NavierStokes,
		NavierStokes$: NavierStokes,
		FluidField: FluidField,
		FluidField$: FluidField,
		Field: Field,
		Field$LFluidField$ANANAN: Field
	},
	"system:lib/js/timer.jsx": {
		Timer: Timer,
		Timer$: Timer,
		TimerHandle: TimerHandle,
		TimerHandle$: TimerHandle
	}
};


/**
 * launches _Main.main(:string[]):void invoked by jsx --run|--executable
 */
JSX.runMain = function (sourceFile, args) {
	var module = JSX.require(sourceFile);
	if (! module) {
		throw new ReferenceError("entry point module not found in " + sourceFile);
	}
	if (! module._Main) {
		throw new ReferenceError("entry point _Main not found in " + sourceFile);
	}
	if (! module._Main.main) {
		throw new ReferenceError("entry point _Main.main(:string[]):void not found in " + sourceFile);
	}
	module._Main.main(args);
};

/**
 * launches _Test#test*():void invoked by jsx --test
 */
JSX.runTests = function (sourceFile, tests) {
	var module = JSX.require(sourceFile);
	if (! module) return;

	var testClass = module._Test;

	if (!testClass) return; // skip if there's no test class

	if(tests.length === 0) {
		var p = testClass.prototype;
		for (var m in p) {
			if (p[m] instanceof Function && m.match(/^test\w*$/)) {
				tests.push(m);
			}
		}
	}

	var testCase = new testClass();

	if (testCase.beforeClass != null)
		testCase.beforeClass(tests);

	for (var i = 0; i < tests.length; ++i) {
		(function (method) {
			if (method in testCase) {
				testCase.run(method, function() { testCase[method](); });
			}
			else {
				throw new ReferenceError("No such test method: " + method);
			}
		}(tests[i]));
	}

	if (testCase.afterClass != null)
		testCase.afterClass();
};
/**
 * call a function on load/DOMContentLoaded
 */
function $__jsx_onload (event) {
	window.removeEventListener("load", $__jsx_onload);
	document.removeEventListener("DOMContentLoaded", $__jsx_onload);
	JSX.runMain("run-web.jsx", []);
}

window.addEventListener("load", $__jsx_onload);
document.addEventListener("DOMContentLoaded", $__jsx_onload);

})(JSX);
