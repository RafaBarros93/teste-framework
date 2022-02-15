module.exports = class DivisibleNumberRouter {
  route(httpRequest) {
    console.log('Req', httpRequest)

    let {
      body: {number}
    } = httpRequest

    if (!number) return {statuCode: 400}
    else return {statuCode: 200}
  }
}
