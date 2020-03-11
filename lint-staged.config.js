module.exports = {
  '*.js': ['vue-cli-service lint', 'yarn lint:prettier', 'git add'],
  '{!(package)*.json,*.code-snippets,.*rc}': ['yarn lint:prettier --parser json', 'git add'],
  'package.json': ['yarn lint:prettier', 'git add'],
  '*.vue': ['vue-cli-service lint', 'yarn lint:stylelint', 'yarn lint:prettier', 'git add'],
  '*.scss': ['yarn lint:stylelint', 'yarn lint:prettier', 'git add'],
};
