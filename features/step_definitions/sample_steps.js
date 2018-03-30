const {Given, When, Then} = require('cucumber')
const chai = require('chai')
const dirtyChai = require('dirty-chai')
const expect = chai.expect
const pages = require('../page_objects/pages')
chai.use(dirtyChai)

Given('I go to {string} page', async function (pageName) {
  this.page = pages[pageName]
  await this.page.open()
})

Then('the title should be {string}', async function (text) {
  expect(await this.page.title).to.equal(text)
})

When('I add {int} and {int}', async function (firstNum, secondNum) {
  await this.page.add(firstNum, secondNum)
})

Then('the result should be {int}', async function (result) {
  expect(await this.page.getResult()).to.equal(result)
})
