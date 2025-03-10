// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import 'cypress-real-events'
import './cleanData'
import './commands'
import './globalHooks'
import 'allure-cypress'

const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
Cypress.on(
  'uncaught:exception',
  (err) => {
    /* returning false here prevents Cypress from failing the test */
    if (resizeObserverLoopErrRe.test(err.message)) {
      return false
    }
    if (test.state === 'failed') {
      let item = runnable
      const nameParts = [runnable.title]

      while (item.parent) {
        nameParts.unshift(item.parent.title)(({ parent: item } = item))
      }

      const fullTestName = nameParts.filter(Boolean).join(' -- ')
      const imageUrl = `screenshots/${Cypress.spec.name}/${fullTestName} (failed).png`

      addContext({ test }, imageUrl)
    }
  },
  Cypress.Screenshot.defaults({ capture: 'viewport' })
)

// Alternatively you can use CommonJS syntax:
// require('./commands')
