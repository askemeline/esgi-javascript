import { getStudents, getCourses } from "./api.js";
import timer from "./timer.js";

var mapping = async function mapping() {
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

/**
 * Only for Node >14
 * 
 try {
    await Promise.race([mapping(), timer()]);
    console.log("Merge OK");
  } catch () {
    console.error("Timeout");
  }
*/
