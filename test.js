var
  expect = require('expect.js'),
  utrack = require('./'),
  track = [
    {latitude: 22.331443, longitude: 114.1451929, timestamp: 1445844471},
    {latitude: 22.331444, longitude: 114.1451930, timestamp: 1445844472},
    {latitude: 22.331445, longitude: 114.1451931, timestamp: 1445844473}
  ],
  s = '/oFPDZksCUT31S1WCIJPDZosCUT41S1WEoJPDZssCUT51S1W'

describe('#Utrack', function () {
  it('packs', function () {
    expect(utrack(track)).to.eql(s)
  })
  it('unpacks', function () {
    expect(utrack(s)).to.eql(track)
  })
})
