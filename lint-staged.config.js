module.exports = {
  '*.scss': ['yarn lint:stylelint', 'yarn lint:prettier', 'git add'],
};
