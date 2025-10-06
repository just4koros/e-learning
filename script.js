// Course Data
const courses = [
  {
    id: 1,
    title: "HTML & CSS Basics",
    description: "Learn how to build and style web pages using HTML and CSS.",
    image: "https://cdn.pixabay.com/photo/2015/04/23/17/41/html-736896_960_720.png",
    lessons: ["Intro to HTML", "Styling with CSS", "Building Your First Webpage"],
    completed: false
  },
  {
    id: 2,
    title: "JavaScript for Beginners",
    description: "Understand programming logic and interactivity using JavaScript.",
    image: "https://cdn.pixabay.com/photo/2017/08/05/00/12/code-2582748_960_720.jpg",
    lessons: ["Syntax Basics", "DOM Manipulation", "Events & Functions"],
    completed: false
  },
  {
    id: 3,
    title: "Python Programming",
    description: "Get started with Python syntax, loops, and simple programs.",
    image: "https://cdn.pixabay.com/photo/2017/01/31/13/14/python-2028158_960_720.png",
    lessons: ["Intro to Python", "Variables & Data Types", "Loops & Conditions"],
    completed: false
  }
];

// Home Page Logic
const courseList = document.getElementById("course-list");
if (courseList) {
  displayCourses();
}

function displayCourses() {
  courseList.innerHTML = "";
  courses.forEach(course => {
    const card = document.createElement("div");
    card.classList.add("course-card");

    card.innerHTML = `
      <img src="${course.image}" alt="${course.title}">
      <h3>${course.title}</h3>
      <p>${course.description}</p>
      <button class="view-btn" onclick="viewCourse(${course.id})">View Course</button>
    `;

    courseList.appendChild(card);
  });
}

function viewCourse(id) {
  window.location.href = `course.html?id=${id}`;
}

// Course Details Page Logic
const params = new URLSearchParams(window.location.search);
const courseId = params.get("id");

if (courseId) {
  const course = courses.find(c => c.id === parseInt(courseId));
  if (course) {
    document.getElementById("course-title").textContent = course.title;
    document.getElementById("course-description").textContent = course.description;

    const lessonList = document.getElementById("lesson-list");
    course.lessons.forEach(lesson => {
      const li = document.createElement("li");
      li.textContent = lesson;
      lessonList.appendChild(li);
    });

    const completeBtn = document.getElementById("complete-btn");
    completeBtn.addEventListener("click", () => {
      course.completed = !course.completed;
      completeBtn.textContent = course.completed ? "Completed" : "Mark as Completed";
      completeBtn.classList.toggle("completed");
    });
  }
}
