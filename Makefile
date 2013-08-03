
RUNJS := node

all: version jsx-build jsx original-build original

3times: version
	$(MAKE) jsx-build
	$(MAKE) jsx
	$(MAKE) jsx
	$(MAKE) jsx
	$(MAKE) original-build
	$(MAKE) original
	$(MAKE) original
	$(MAKE) original

version:
	jsx --version
	node --version

jsx-build:
	jsx --release --executable node --output v8bench.jsx.js run.jsx

jsx:
	@echo
	$(RUNJS) v8bench.jsx.js

original-build:
	cat v8bench-v7/{base,richards,deltablue,crypto,raytrace,regexp,splay,navier-stokes,run}.js > original.js

original:
	@echo
	$(RUNJS) original.js

profile:
	jsx --profile --release --run run-with-profile.jsx

web: run-web.jsx
	jsx --release --executable web --output $<.js $<

build: web jsx-build

clean:
	rm original.js v8bench.jsx.js

.PHONY: all original
