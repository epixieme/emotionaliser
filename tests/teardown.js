//this prevents the error message Jest did not exit one second after the tests has completed.

module.exports = () => {
    process.exit(0)
  }