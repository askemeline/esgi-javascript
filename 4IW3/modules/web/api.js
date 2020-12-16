export async function getStudents() {
  const response = await fetch("http://localhost:3000/students");
  const data = await response.json();
  return data;
}

export async function getCourses() {
  const response = await fetch("http://localhost:3000/courses");
  const data = await response.json();
  return data;
}
