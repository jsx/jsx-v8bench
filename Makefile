
all: version jsx original

version:
	jsx --version
	node --version

jsx:
	@echo
	jsx --release --run run.jsx

original:
	@echo
	cat v8bench-v7/{base,richards,deltablue,crypto,raytrace,regexp,splay,navier-stokes,run}.js > original.js
	node original.js
	@rm original.js

.PHONY: all original
