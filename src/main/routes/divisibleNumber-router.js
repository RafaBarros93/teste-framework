const {adapt} = require('../adapters/express-router-adapter')
const DivisibleNumberRouterComposer = require('../composers/divisible-number-router-compose')

module.exports = (router) => {
  router.post('/divisible-number', adapt(DivisibleNumberRouterComposer.compose()))
}
