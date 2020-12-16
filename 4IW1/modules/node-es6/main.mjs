import { getStudents, getCourses } from "./apis.mjs";
import timerAwait from "./timer.mjs";
import { randomIntFromInterval } from "./utils.mjs";

var mapping = function mapping(resolve) {
  Promise.all([new Promise(getStudents), new Promise(getCourses)]).then(
    (results) => {
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
    }
  );
};

Promise.race([new Promise(mapping), new Promise(timerAwait)])
  .then(() => console.log("Merge OK"))
  .catch(() => console.error("Timeout"));
