/* eslint-disable no-unused-expressions */
/* eslint-disable fp/no-delete */

import test from 'ava';
import delay from 'delay';
import {
  approximateTime,
} from '../../src/approximateNow';

test('updates every 50ms', async (t) => {
  const firstTime = approximateTime.now;

  await delay(100);

  t.true(firstTime < approximateTime.now);
});

test('increments time after every measurement', (t) => {
  t.not(approximateTime.now, approximateTime.now);
});

test('does not increment beyond 50', (t) => {
  const times = [];
  times.push(approximateTime.now);
  times.push(approximateTime.now);
  times.push(approximateTime.now);
  times.push(approximateTime.now);
  times.push(approximateTime.now);
  times.push(approximateTime.now);
  times.push(approximateTime.now);
  times.push(approximateTime.now);
  times.push(approximateTime.now);
  times.push(approximateTime.now);
  times.push(approximateTime.now);
  times.push(approximateTime.now);
  times.push(approximateTime.now);
  times.push(approximateTime.now);
  times.push(approximateTime.now);
  times.push(approximateTime.now);
  times.push(approximateTime.now);
  times.push(approximateTime.now);
  times.push(approximateTime.now);
  times.push(approximateTime.now);
  times.push(approximateTime.now);
  times.push(approximateTime.now);
  times.push(approximateTime.now);
  times.push(approximateTime.now);
  times.push(approximateTime.now);
  times.push(approximateTime.now);
  times.push(approximateTime.now);
  times.push(approximateTime.now);
  times.push(approximateTime.now);
  times.push(approximateTime.now);
  times.push(approximateTime.now);
  times.push(approximateTime.now);
  times.push(approximateTime.now);
  times.push(approximateTime.now);
  times.push(approximateTime.now);
  times.push(approximateTime.now);
  times.push(approximateTime.now);
  times.push(approximateTime.now);
  times.push(approximateTime.now);
  times.push(approximateTime.now);
  times.push(approximateTime.now);
  times.push(approximateTime.now);
  times.push(approximateTime.now);
  times.push(approximateTime.now);
  times.push(approximateTime.now);
  times.push(approximateTime.now);
  times.push(approximateTime.now);
  times.push(approximateTime.now);
  times.push(approximateTime.now);
  times.push(approximateTime.now);
  times.push(approximateTime.now);

  t.is(times[times.length - 1], times[times.length - 2]);
});
