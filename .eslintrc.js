module.exports = {
	"extends": [
		"eslint:recommended",
		"./node_modules/eslint-config-xadillax-style/node/index.js"
	],
	"rules": {
    'quotes': [
      2, 'single',
      {
        allowTemplateLiterals: true
      }
    ]
	}
};