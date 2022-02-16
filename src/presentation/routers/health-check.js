const HttpResponse = require('../helpers/http-reponse')

module.exports = class HealthCheckRouter {
  route() {
    return HttpResponse.ok({api: 'Api test framework'})
  }
}
