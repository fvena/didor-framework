module.exports = {
  devServer: {
    open: false,
  },
  content: {
    folders: ['/docs'],
    didorDocs: true,
  },
  customize: {
    logo: '/assets/logo.svg',
    title: 'Didor Styles',
    description: 'Framework SCSS',
    social: {
      twitter: 'https://twitter.com/fvena',
      github: 'https://github.com/fvena/didor-styles',
    },
  },
  demo: {
    styles: '/src/index.scss',
    shareStyles: '/src/didor-share.scss',
  },
  build: {
    path: '',
    onlyMarkdown: true,
    assets: '/packages/assets',
  },
};
