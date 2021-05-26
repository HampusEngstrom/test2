export const sortBy = (attr) => (a, b) => {
  if (a[attr] < b[attr]) {
    return -1;
  }
  if (a[attr] > b[attr]) {
    return 1;
  }
  return 0;
};

export const capitalizeFirstLetter = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1);
