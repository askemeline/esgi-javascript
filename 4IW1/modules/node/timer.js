function timerAwait(_, reject) {
  setTimeout(() => {
    reject("Timeout");
  }, 7000);
}

module.exports = timerAwait;
