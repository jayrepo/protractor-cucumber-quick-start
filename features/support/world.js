const {setWorldConstructor, setDefaultTimeout} = require('cucumber')

function CustomWorld ({attach, parameters}) {
  this.attach = attach
  this.parameters = parameters
  this.page = null
}

setWorldConstructor(CustomWorld)
setDefaultTimeout(60 * 1000)
