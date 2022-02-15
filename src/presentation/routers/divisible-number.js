module.exports = class DivisibleNumberRouter {
  route(httpRequest) {
    if (!httpRequest) return {statuCode: 500}

    let {number} = httpRequest.body

    if (!number) return {statuCode: 400}
    else return {statuCode: 200}
  }
}
