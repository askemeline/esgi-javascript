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
  const [students, courses] = await Promise.all([getStudents(), getCourses()]);
  return students.map((student) => {
    return {
      ...student,
      cours: student.cours.map((id) =>
        courses.find((cours) => cours.id === id)
      ),
    };
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
