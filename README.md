Packing GPS track in a text string

## Why do I need it?
To save space when storing GPS tracks or transporting them

## Example
```js
var utrack = require('utrack')
//pack
ufix({
  latitude: 22.331443,
  longitude: 114.1451929,
  timestamp: 1445844471
})
// returns 16 chars string '/oFPDZksCUT31S1W'

//unpack
ufix('/oFPDZksCUT31S1W')
// returns location fix
/*
{
  latitude: 22.331443,
  longitude: 114.1451929,
  timestamp: 1445844471
}
*/
```
