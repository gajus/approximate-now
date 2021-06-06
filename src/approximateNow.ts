const ms = 50;

let now = ms * Math.ceil(Date.now() / ms);
let maxNow = ms * Math.ceil((now + ms) / ms);

const approximateTime = {
  get now () {
    if (now < maxNow) {
      return now++;
    }

    return maxNow;
  },
  set now (nextNow) {
    now = nextNow;
    maxNow = ms * Math.ceil((now + ms) / ms);
  },
};

const interval = setInterval(
  () => {
    approximateTime.now = ms * Math.ceil(Date.now() / ms);
  },
  ms,
);

interval.unref();

export {
  approximateTime,
};
