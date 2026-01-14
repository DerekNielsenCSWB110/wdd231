function toggleMenu() {
  document.querySelector('nav').classList.toggle('open');
}

document.querySelector('.hamburger').addEventListener('click', toggleMenu);

const courses = [
  { code: 'CSE110', credits: 2, completed: true },
  { code: 'CSE111', credits: 2, completed: true },
  { code: 'WDD130', credits: 2, completed: true },
  { code: 'WDD131', credits: 2, completed: false },
  { code: 'CSE210', credits: 2, completed: false }
];

const container = document.getElementById('courseList');
const creditsSpan = document.getElementById('credits');

function displayCourses(list) {
  container.innerHTML = '';
  creditsSpan.textContent = list.reduce((sum, c) => sum + c.credits, 0);

  list.forEach(course => {
    const div = document.createElement('div');
    div.className = 'course';
    if (course.completed) div.classList.add('completed');
    div.textContent = course.code;
    container.appendChild(div);
  });
}

document.getElementById('all').addEventListener('click', () => displayCourses(courses));
document.getElementById('wdd').addEventListener('click', () => displayCourses(courses.filter(c => c.code.startsWith('WDD'))));
document.getElementById('cse').addEventListener('click', () => displayCourses(courses.filter(c => c.code.startsWith('CSE'))));

document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

displayCourses(courses);
