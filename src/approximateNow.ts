const ms = 50;

let __0 = ms * Math.ceil(Date.now() / ms);
let __1 = ms * Math.ceil((__0 + ms) / ms);

const approximateTime = {
  get now () {
    if (__0 < __1) {
      return __0++;
    }

    return __1;
  },
  set now (nextNow) {
    __0 = nextNow;
    __1 = ms * Math.ceil((__0 + ms) / ms);
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
