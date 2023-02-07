/**
 * Utilty to make sure we are not goint out of range in HtmlCollection
 * @param {*} min min value of the range
 * @param {*} max max value of the range
 * @param {*} value new value that you want to verify
 * @returns
 */
const getValueInRage = (min, max, value) => {
    if (value > max) return max;
    if (value < min) return min;
    return value;
};
