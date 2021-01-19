const apis = require("./apis");
const timerAwait = require("./timer");
const randomIntFromInterval = require("./utils").randomIntFromInterval;

var mapping = function mapping(resolve) {
  Promise.all([
    new Promise(apis.getStudents),
    new Promise(apis.getCourses),
  ]).then(([students, courses]) => {
    const timeout = randomIntFromInterval(1, 4);
    console.log("mapping:" + timeout);
    setTimeout(
      () =>
        resolve(
          students.map((student) => {
            return {
              ...student,
              cours: student.cours.map((id) =>
                courses.find((cours) => cours.id === id)
              ),
            };
          })
        ),
      timeout
    );
  });
};

Promise.race([new Promise(mapping), new Promise(timerAwait)])
  .then(() => console.log("Merge OK"))
  .catch(() => console.error("Timeout"));
