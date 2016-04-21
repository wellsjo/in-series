## Perform functions in series

# Example
Suppose you can only make on request at a time.

```javascript
const Series = require('in-series');
const http = require('superagent');

const series = new Series;

series.push(done => {
  http
  .get('http://randomuser.me/api/')
  .end((err, user) => {
    done(null, user);
  })
});

series.push(done => {
  http
  .get('http://randomuser.me/api/')
  .end((err, user) => {
    done(null, user);
  })
});

series.end((err, res) => {
  console.log(err, res);
};
```
