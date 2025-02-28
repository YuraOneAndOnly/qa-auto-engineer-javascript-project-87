install:
	npm ci
link:
	npm link
publish:
	npm publish --dry-run
lint:
	npx eslint .
test:
	node --experimental-vm-modules node_modules/jest/bin/jest.js --colors --verbose --silent
test_coverage:
	node --experimental-vm-modules node_modules/jest/bin/jest.js --colors --verbose --silent --coverage