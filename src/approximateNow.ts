let now = 50 * Math.ceil(Date.now() / 50);
let maxNow = 50 * Math.ceil((now + 50) / 50);

const approximateTime = {
  now,
};

Object.defineProperty(
  approximateTime,
  'now',
  {
    get: () => {
      if (now < maxNow) {
        return now++;
      }

      return maxNow;
    },
    set: (nextNow) => {
      now = nextNow;
      maxNow = 50 * Math.ceil((now + 50) / 50);
    },
  },
);

const interval = setInterval(
  () => {
    approximateTime.now = 50 * Math.ceil(Date.now() / 50);
  },
  50,
);

if (interval && interval.unref) {
  interval.unref();
}

export {
  approximateTime,
};
