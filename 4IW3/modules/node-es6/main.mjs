import * as apis from "./api.mjs";
import { randomIntFromInterval } from "./utils.mjs";
import timer from "./timer.mjs";

var mapping = function mapping(resolve) {
  Promise.all([
    new Promise(apis.getStudents),
    new Promise(apis.getCourses),
  ]).then((results) => {
    const students = results[0],
      courses = results[1];
    const timeout = randomIntFromInterval(1, 4);
    console.log("mapping:" + timeout);
    setTimeout(
      () =>
        resolve(
          students.map((student) => {
            student.cours = student.cours.map((id) =>
              courses.find((cours) => cours.id === id)
            );
            return student;
          })
        ),
      timeout
    );
  });
};

Promise.race([new Promise(mapping), new Promise(timer)])
  .then(() => console.log("Merge OK"))
  .catch(() => console.error("Timeout"));
