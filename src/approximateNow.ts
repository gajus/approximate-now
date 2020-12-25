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

setInterval(
  () => {
    approximateTime.now = 50 * Math.ceil(Date.now() / 50);
  },
  50,
).unref();

export {
  approximateTime,
};
