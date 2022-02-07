const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
const portFinder = require('portfinder-sync')

module.exports = (env, argv) => {
  const conf = {
    entry: path.resolve(__dirname, 'src', '_scripts', 'main.js'),
    output: {
      path: path.resolve(__dirname, 'public', 'assets'),
      filename: 'main.js',
    },
    plugins: [new MiniCssExtractPlugin()],
    module: {
      rules: [
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
        },
      ],
    },
  }

  if (argv.mode === 'development') {
    const port = portFinder.getPort(8080)

    conf.devServer = {
      host: '0.0.0.0',
      port,
      open: true,
      https: false,
      disableHostCheck: true,
      progress: true,
      overlay: {
        errors: true,
        warnings: false,
      },
    }

    const localIps = getLocalIps()

    Object.keys(localIps).forEach(net => {
      console.info(`${net}\t http://${localIps[net]}:${port}`)
    })

    console.info(`localhost\t http://localhost:${port}`)
  }

  return conf
}

function getLocalIps() {
  const nets = require('os').networkInterfaces()
  const results = Object.create(null)

  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      if (net.family === 'IPv4' && !net.internal) {
        if (!results[name]) {
          results[name] = []
        }
        results[name].push(net.address)
      }
    }
  }

  return results
}
