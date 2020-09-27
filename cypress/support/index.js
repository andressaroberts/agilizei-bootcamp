import './commands'

import 'cypress-file-upload'

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })