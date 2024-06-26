/** @type {import("prettier").Config} */
export default {
	printWidth: 100,
	semi: false,
	singleQuote: true,
	jsxSingleQuote: false,
	quoteProps: 'consistent',
	tabWidth: 2,
	trailingComma: 'es5',
	useTabs: false,
	endOfLine: 'lf',
	arrowParens: 'always',
	plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
	overrides: [
		{
			files: ['*.json', '*.md', '*.toml', '*.yml'],
			options: {
				useTabs: false,
			},
		},
		{
			files: '*.astro',
			options: {
				parser: 'astro',
			},
		},
	],
}
