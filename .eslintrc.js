/* eslint-disable no-undef */
module.exports = {
	root: true, // Make sure eslint picks up the config at the root of the directory
	parserOptions: {
		ecmaVersion: 2021, // Use the latest ecmascript standard
		sourceType: 'module', // Allows using import/export statements
		ecmaFeatures: {
			jsx: true // Enable JSX since we're using React
		}
	},
	plugins: ['jest', 'react', 'react-hooks'],

	settings: {
		react: {
			version: 'detect' // Automatically detect the react version
		}
	},
	env: {
		browser: true, // Enables browser globals like window and document
		'jest/globals': true
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:jsx-a11y/recommended',
		'plugin:prettier/recommended' // Make this the last element so prettier config overrides other formatting rules
	],
	rules: {
		'prettier/prettier': ['warn', {}, { usePrettierrc: true }], // Use our .prettierrc file as source
		'react/react-in-jsx-scope': 'off',
		'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
		'react/prop-types': 'off',

		'jest/no-disabled-tests': 'warn',
		'jest/no-focused-tests': 'error',
		'jest/no-identical-title': 'error',
		'jest/prefer-to-have-length': 'warn',
		'jest/valid-expect': 'error'
	}
};
