import utils from "./utils.js";

setTimeout(() => console.log(utils.isDark), 3000);

export const getStudents = async function () {
  const response = await fetch("http://localhost:3000/students");
  const data = await response.json();
  return data;
};

export const getCourses = async function () {
  const response = await fetch("http://localhost:3000/courses");
  const data = await response.json();
  return data;
};
