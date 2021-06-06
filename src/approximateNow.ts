const ms = 50;

let __0 = NaN;
let __1 = NaN;

const step = function () {
  __0 = ms * Math.ceil(Date.now() / ms);
  __1 = ms + __0;
};

void step();

setInterval(step, ms).unref();

export function now() {
  return __0 < __1 ? __0++ : __1;
}
