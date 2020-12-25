/* eslint-disable no-console */

import {
  Suite,
} from 'benchmark';
import {
  approximateTime,
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
    'approximateTime.now',
    () => {
      // eslint-disable-next-line no-unused-expressions
      approximateTime.now;
    },
  );

  suite.run();
})();
