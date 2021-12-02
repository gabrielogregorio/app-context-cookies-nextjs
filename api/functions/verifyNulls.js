module.exports = function verifyNull(value) {
  if( value === '' || value === undefined || value === null || value) {
    return undefined
  }
  return value
}