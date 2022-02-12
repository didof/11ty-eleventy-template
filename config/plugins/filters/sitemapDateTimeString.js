const { DateTime } = require('luxon')

module.exports = dateObj => {
  const dt = DateTime.fromJSDate(dateObj, { zone: 'utc' })
  if (!dt.isValid) {
    return ''
  }
  return dt.toISO()
}
