const production = process.env.NODE_ENV === 'production'

function babelOptions() {
  return {
    plugins: production
      ? ['transform-remove-console']
      : []
  }
}

module.exports = {
  mount: {
    public: '/',
    src: '/_dist_'
  },
  plugins: [
    '@snowpack/plugin-svelte',
    ['@snowpack/plugin-babel', {
      transformOptions: babelOptions()
    }],
    '@snowpack/plugin-sass',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-optimize'
  ],
  alias: {
    '~': './src'
  },
  devOptions: {
    open: 'none',
    port: 8079
  }
}
