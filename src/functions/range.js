/**
 * @function Function based on the `range()` built-in function in Python.
 * Implementation written by Josh W. Comeau (https://github.com/joshwcomeau).
 */
export default function range(start, end, step = 1) {
  const output = [];

  if (start) {
    for (let i = start; i < end; i += step) {
      output.push(i);
    }
  } else {
    for (let i = 0; i < end; i++) {
      output.push(i);
    }
  }

  return output;
}