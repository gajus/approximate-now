/* eslint-disable no-unused-expressions */
/* eslint-disable fp/no-delete */

import test from 'ava';
import delay from 'delay';
import {
  now,
} from '../../src/approximateNow';

test('updates every 50ms', async (t) => {
  const firstTime = now();

  await delay(100);

  t.true(firstTime < now());
});

test('increments time after every measurement', (t) => {
  t.not(now(), now());
});

test('does not increment beyond 50', (t) => {
  const times = [];
  times.push(now());
  times.push(now());
  times.push(now());
  times.push(now());
  times.push(now());
  times.push(now());
  times.push(now());
  times.push(now());
  times.push(now());
  times.push(now());
  times.push(now());
  times.push(now());
  times.push(now());
  times.push(now());
  times.push(now());
  times.push(now());
  times.push(now());
  times.push(now());
  times.push(now());
  times.push(now());
  times.push(now());
  times.push(now());
  times.push(now());
  times.push(now());
  times.push(now());
  times.push(now());
  times.push(now());
  times.push(now());
  times.push(now());
  times.push(now());
  times.push(now());
  times.push(now());
  times.push(now());
  times.push(now());
  times.push(now());
  times.push(now());
  times.push(now());
  times.push(now());
  times.push(now());
  times.push(now());
  times.push(now());
  times.push(now());
  times.push(now());
  times.push(now());
  times.push(now());
  times.push(now());
  times.push(now());
  times.push(now());
  times.push(now());
  times.push(now());
  times.push(now());

  t.is(times[times.length - 1], times[times.length - 2]);
});
