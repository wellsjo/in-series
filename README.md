# in-series
This module provides a clean api for performing synchronous and asynchronous functions in series.

# Install
```
npm i in-series --save
```

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
    if (err) {
      done(err)
    } else {
      done(null, user);
    }
  })
});

series.push(done => {
  http
  .get('http://randomuser.me/api/')
  .end((err, user) => {
    if (err) {
      done(err)
    } else {
      done(null, user);
    }
  })
});

series.end((err, users) => {
  // handle error, or do stuff with users
});
```

# License
MIT
