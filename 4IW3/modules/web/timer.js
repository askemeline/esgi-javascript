export default async function timer() {
  setTimeout(() => {
    throw "Timeout";
  }, 7000);
}
