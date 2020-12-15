import { randomIntFromInterval } from "./utils.mjs";

export const getStudents = function (resolve) {
  const timeout = randomIntFromInterval(1, 2);
  setTimeout(
    () =>
      console.log(`getStudents:${timeout}`) ||
      resolve([
        { name: "Dupont", cours: [1, 3, 5] },
        { name: "Lea", cours: [2, 4] },
        { name: "Charles", cours: [1] },
      ]),
    timeout
  );
};

export const getCourses = function (resolve) {
  const timeout = randomIntFromInterval(2, 4);
  setTimeout(
    () =>
      console.log(`getCourses:${timeout}`) ||
      resolve([
        { id: 1, name: "JS" },
        { id: 2, name: "PHP" },
        { id: 3, name: "C#" },
        { id: 4, name: "F#" },
        { id: 5, name: "CSS" },
      ]),
    timeout
  );
};
