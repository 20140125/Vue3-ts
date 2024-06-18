module.exports = {
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-html',
  ],
  overrides: [
    {
      files: ['**/*.less'],
      customSyntax: 'postcss-less',
    },
  ],
  rules: {
    indentation: 2,
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep'],
      },
    ],
  },
};
