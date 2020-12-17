export default function timer(_, reject) {
  setTimeout(() => {
    reject();
  }, 7000);
}
