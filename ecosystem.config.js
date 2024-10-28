module.exports = {
    apps: [
      {
        name: process.env.PM2_NAME || 'Case',
        port: process.env.PORT || 3000,
        exec_mode: 'cluster',
        instances: 'max',
        script: './.output/server/index.mjs'
      }
    ]
  }