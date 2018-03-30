'use strict'
const {After, Status} = require('cucumber')

After(async function (testCase) {
  if (testCase.result.status === Status.FAILED) {
    const buffer = await browser.takeScreenshot()
    this.attach(buffer, 'image/png')
  }
})
