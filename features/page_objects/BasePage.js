class Page {
  constructor (path) {
    this.path = path || '/'
  }
  get title () { return browser.getTitle() }

  async open (path) {
    await browser.get(browser.baseUrl + this.path)
  }
}
module.exports = Page
