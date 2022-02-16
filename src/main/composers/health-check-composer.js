const HealthCheckRouter = require('../../presentation/routers/health-check')

module.exports = class HealthCheckRouterComposer {
  static compose() {
    return new HealthCheckRouter()
  }
}
