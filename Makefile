
RUNJS := node

all: version jsx original

version:
	jsx --version
	node --version

jsx:
	@echo
	jsx --release --executable node --output v8bench.jsx.js run.jsx
	$(RUNJS) v8bench.jsx.js

original:
	@echo
	cat v8bench-v7/{base,richards,deltablue,crypto,raytrace,regexp,splay,navier-stokes,run}.js > original.js
	$(RUNJS) original.js
	@rm original.js

.PHONY: all original
