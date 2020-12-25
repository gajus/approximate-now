# approximate-now

[![Travis build status](http://img.shields.io/travis/gajus/approximate-now/master.svg?style=flat-square)](https://travis-ci.org/gajus/approximate-now)
[![Coveralls](https://img.shields.io/coveralls/gajus/approximate-now.svg?style=flat-square)](https://coveralls.io/github/gajus/approximate-now)
[![NPM version](http://img.shields.io/npm/v/approximate-now.svg?style=flat-square)](https://www.npmjs.org/package/approximate-now)
[![Canonical Code Style](https://img.shields.io/badge/code%20style-canonical-blue.svg?style=flat-square)](https://github.com/gajus/canonical)
[![Twitter Follow](https://img.shields.io/twitter/follow/kuizinas.svg?style=social&label=Follow)](https://twitter.com/kuizinas)

Approximate (fast) current UNIX time.

## Motivation

Sometimes you don't care about the exact time the event took place, but rather need to know approximately when. If your use case is performance senstive, then `Date.now()` might not be the best option because it has a [measurable impact](#benchmark) to the performance. `approximate-now` provides an approximate (to the error of 50ms) time without a performance penalty of `Date.now()`.

## Usage

```js
import {
  approximateTime,
} from 'approximate-now';

// `approximateTime.now` value is updated by reference every 50ms.
console.log(approximateTime.now);

```

## Sequence guarantee

It is guaranteed that two consequent attempts to retrieve time within the same 50ms time window will have unique values, i.e.

Assuming that the current time is `0000000000000`, then:

```js
approximateTime.now; // 0000000000000
approximateTime.now; // 0000000000001
approximateTime.now; // 0000000000002

```

However, if `approximateTime.now` is accessed more than 50 times within the same 50ms time window, then the top-most value within that interval is returned repeatedly.

```js
approximateTime.now; // 0000000000000
approximateTime.now; // 0000000000001
approximateTime.now; // 0000000000002

// approximateTime.now x 50
approximateTime.now; // 0000000000050
approximateTime.now; // 0000000000050
approximateTime.now; // 0000000000050

## benchmark

```
Date.now()          x 19,900,411 ops/sec ±0.59% (93 runs sampled)
approximateTime.now x 82,420,291 ops/sec ±0.83% (92 runs sampled)

```

## Use cases

Any sort of time-sensitive operations when it is sufficient to retrieve an approximate timestamp, e.g. [`roarr`](https://github.com/gajus/roarr) logger uses `approximate-now` to record the time when a log message was produced.
