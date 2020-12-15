import utils from "./utils.js";
import { getStudents, getCourses } from "./api.js";
import timer from "./timer.js";

utils.isDark = false;
console.log("main", utils.isDark);

const mapping = async function () {
  const results = await Promise.all([getStudents(), getCourses()]);
  const students = results[0],
    courses = results[1];

  return students.map((student) => {
    student.cours = student.cours.map((id) =>
      courses.find((cours) => cours.id === id)
    );
    return student;
  });
};

Promise.race([mapping(), timer()])
  .then(() => console.log("Merge OK"))
  .catch(() => console.error("Timeout"));
