// Course data
const courses = [
  {
    id: 1,
    title: "HTML & CSS Basics",
    description: "Learn how to structure and style web pages using HTML and CSS.",
    completed: false
  },
  {
    id: 2,
    title: "JavaScript for Beginners",
    description: "Understand programming logic and interactivity using JavaScript.",
    completed: false
  },
  {
    id: 3,
    title: "Python Programming",
    description: "Get started with Python syntax, variables, and basic programs.",
    completed: false
  }
];

const courseList = document.getElementById("course-list");

// Display courses
function displayCourses() {
  courseList.innerHTML = "";
  courses.forEach(course => {
    const card = document.createElement("div");
    card.classList.add("course-card");

    card.innerHTML = `
      <h3>${course.title}</h3>
      <p>${course.description}</p>
      <button onclick="markCompleted(${course.id})" class="${course.completed ? 'completed' : ''}">
        ${course.completed ? 'Completed' : 'Mark as Completed'}
      </button>
    `;

    courseList.appendChild(card);
  });
}

// Mark course as completed
function markCompleted(id) {
  const course = courses.find(c => c.id === id);
  if (course) {
    course.completed = !course.completed;
    displayCourses();
  }
}

// Initialize
displayCourses();
