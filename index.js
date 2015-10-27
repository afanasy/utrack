var ufix = require('ufix')

module.exports = function (d) {
  if (typeof d == 'string')
    return d.match(/.{16}/g).map(ufix)
  return d.map(ufix).join('')
}
