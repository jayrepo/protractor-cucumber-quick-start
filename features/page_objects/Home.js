const Page = require('./BasePage')
class Home extends Page {
  get firstInput () { return element(by.model('first')) }
  get secondInput () { return $('[ng-model="second"]') } // use css selector
  get goButton () { return $('#gobutton') }
  get result () { return element(by.binding('latest')) }

  async add (first, second) {
    await this.firstInput.sendKeys(first)
    await this.secondInput.sendKeys(second)
    await this.goButton.click()
  }

  async getResult () {
    return +await this.result.getText()
  }
}

module.exports = Home
