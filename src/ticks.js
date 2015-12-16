import range from "./range";

var e10 = Math.sqrt(50),
    e5 = Math.sqrt(10),
    e2 = Math.sqrt(2);

export default function(start, stop, count) {
  var k = tickStep(start, stop, count);
  return range(Math.ceil(start / k) * k, Math.floor(stop / k) * k + k / 2, k);
};

export function tickStep(start, stop, count) {
  var step0 = Math.abs(stop - start) / count,
      step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)),
      error = step0 / step1;
  if (error >= e10) step1 *= 10;
  else if (error >= e5) step1 *= 5;
  else if (error >= e2) step1 *= 2;
  return stop < start ? -step1 : step1;
};
