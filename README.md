Packing GPS track in a text string

## Why do I need it?
To save space when storing GPS tracks or transporting them. Compresses 1 day of GPS data of 1 sec resolution into 1 megabyte.

## Example
```js
var utrack = require('utrack')
//pack
utrack([
  {latitude: 22.331443, longitude: 114.1451929, timestamp: 1445844471},
  {latitude: 22.331444, longitude: 114.1451930, timestamp: 1445844472},
  {latitude: 22.331445, longitude: 114.1451931, timestamp: 1445844473}
])
// returns 48 chars string '/oFPDZksCUT31S1WCIJPDZosCUT41S1WEoJPDZssCUT51S1W'

//unpack
utrack('/oFPDZksCUT31S1WCIJPDZosCUT41S1WEoJPDZssCUT51S1W')
// returns locations array
/*
[
  {latitude: 22.331443, longitude: 114.1451929, timestamp: 1445844471},
  {latitude: 22.331444, longitude: 114.1451930, timestamp: 1445844472},
  {latitude: 22.331445, longitude: 114.1451931, timestamp: 1445844473}
]
*/
```
