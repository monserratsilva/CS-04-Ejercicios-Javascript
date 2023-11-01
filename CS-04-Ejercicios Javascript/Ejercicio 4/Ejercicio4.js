let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

function findCommonCourses(student1Courses, student2Courses) {
  const commonCourses = [];

  for (let i = 0; i < student1Courses.length; i++) {
    const course = student1Courses[i];
    if (student2Courses.includes(course)) {
      commonCourses.push(course);
    }
  }

  return commonCourses;
}

const commonCourses = findCommonCourses(student1Courses, student2Courses);

if (commonCourses.length > 0) {
  for (let i = 0; i < commonCourses.length; i++) {
    console.log("Cursos comunes encontrados:" + commonCourses[i] );
  }
} else {
  console.log("No se encontraron cursos comunes.");
}