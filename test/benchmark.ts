/* eslint-disable no-console */

import {
  Suite,
} from 'benchmark';
import {
  now,
} from '../src/approximateNow';

(() => {
  const suite = new Suite('roarr', {
    onCycle: (event) => {
      console.log(String(event.target));
    },
    onError: (event) => {
      console.error(event.target.error);
    },
  });

  suite.add(
    'Date.now()',
    () => {
      Date.now();
    },
  );

  suite.add(
    'now()',
    () => {
      now();
    },
  );

  suite.run();
})();
