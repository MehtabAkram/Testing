module.exports = {
    "env": {
        "es6": true,
        "browser": true,
    },
    "extends": "airbnb",
    "parserOptions": {
        "ecmaVersion": 5,
		"HTML":true
    },
    "rules": {
        "no-console":"off", // warn,off,error
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};