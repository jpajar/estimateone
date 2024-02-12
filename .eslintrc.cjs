module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard"
    ],
    "parserOptions": {
        "ecmaVersion": 8,
        "sourceType": "module"
    },
    "ignorePatterns": ["src/*/*.test.js, ./.eslintrc.js, ./package.json, ./babel.config.js, ./node_modules/*,"],
    "rules": {
        "brace-style": [2, "stroustrup", { "allowSingleLine": true }]
    }
};
