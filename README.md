# Node + Typescript package scaffold

My configuration for packages.

Deploys as a _flat package_, i.e. the dev-deps are stripped and only the `/dist` folder is being packed.

To deploy, run `npm run dist`.

## Packed

After running `npm run dist`

Package result:

```
├── index.d.ts
├── index.js
├── otherfile.d.ts
├── otherfile.js
├── package.json
├── README.md
├── types-test.d.ts
└── types-test.js
```

and the `package.json` gets stripped down to:

```json
{
	"name": "package-skeleton",
	"version": "0.0.1",
	"description": "A package scaffold",
	"main": "index.js",
	"author": "Michał Dobrzański <plague@go2.pl>",
	"license": "MIT",
	"private": false,
	"dependencies": {
		"fs-extra": "^10.0.0",
		"node-fetch": "^2.6.2"
	}
}
```
