const {adapt} = require('../adapters/express-router-adapter')

const HealthCheckRouterComposer = require('../composers/health-check-composer')
module.exports = (router) => {
  router.get('/check', adapt(HealthCheckRouterComposer.compose()))
}
