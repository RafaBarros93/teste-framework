const {adapt} = require('../adapters/express-router-adapter')
const DivisibleNumberRouterComposer = require('../composers/divisible-number-router-compose')
const HealthCheckRouterComposer = require('../composers/health-check-composer')
module.exports = (router) => {
  router.get('/check', adapt(HealthCheckRouterComposer.compose()))
  router.post('/divisible-number', adapt(DivisibleNumberRouterComposer.compose()))
}
