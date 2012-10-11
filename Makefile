
all: jsx original

jsx:
	jsx --version
	jsx --release --run run.jsx

original:
	cat v8bench-v7/{base,richards,deltablue,crypto,raytrace,regexp,splay,navier-stokes,run}.js > a.js
	node a.js
	@rm a.js

.PHONY: all original
