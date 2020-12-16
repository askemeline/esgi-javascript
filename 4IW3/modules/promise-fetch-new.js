async function getStudents() {
  const response = await fetch("http://localhost:3000/students");
  const data = await response.json();
  return data;
}

async function getCourses() {
  const response = await fetch("http://localhost:3000/courses");
  const data = await response.json();
  return data;
}

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

var timer = async function timer() {
  setTimeout(() => {
    throw "Timeout";
  }, 7000);
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
