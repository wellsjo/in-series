'use strict'

const Batch = require('batch');

class Series {

  /**
   * Create a new series
   */

  constructor() {
    this.batch = new Batch().concurrency(1);
    for (let i = 0, l = arguments.length; i < l; ++i) {
      this.push(arguments[i]);
    }
  }

  /**
   * Queue a function
   *
   * @param {Function} fn
   * @return {Series}
   * @api public
   */

  push(fn) {
    this.batch.push(fn);
  }

  /**
   * Execute all queued functions in parallel,
   * executing `cb(err, results)`.
   *
   * @param {Function} cb
   * @return {Series}
   * @api public
   */

  end(cb) {
    this.batch.end(cb);
  }

}

module.exports = Series;
