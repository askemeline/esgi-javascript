module.exports = function timer(_, reject) {
  setTimeout(() => reject(), 6000);
};
