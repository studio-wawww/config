module.exports = {
  "extends": ["stylelint-config-standard", "stylelint-config-sass-guidelines", "stylelint-prettier/recommended"],
  "plugins": ["stylelint-scss"],
  "rules": {
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
    "selector-class-pattern": "^[a-z][a-zA-Z0-9]+$",
    "scss/at-function-pattern": "^[a-z][a-zA-Z0-9]+$",
    "scss/at-mixin-pattern": "^[a-z][a-zA-Z0-9]+$",
    "scss/dollar-variable-pattern": "^([a-z][a-z0-9]*)(-[a-z0-9]+)*$",
    "function-no-unknown": null,
  },
};
