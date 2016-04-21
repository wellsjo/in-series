## Perform functions in series

# Example
Perform functions one after the other

```javascript
const Series = require('in-series');
const http = require('superagent');

const series = new Series;

series.push(done => {
  http
  .get('http://randomuser.me/api/')
  .end((err, res) => {
    console.log(err, res);
  })
})
```
