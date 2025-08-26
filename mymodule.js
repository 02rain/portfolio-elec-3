const students = [
  { name: 'Juan Dela Cruz', age: 21, course: 'BSIT' },
  { name: 'Maria Santos', age: 20, course: 'BSCS' },
  { name: 'Pedro Reyes', age: 22, course: 'BSIS' }
];

const fullname = (first = 'Flow', last = 'G') => `${first} ${last}`;
const hello = (n) => `Hello, ${n}! Welcome to the NBI Black Portal.`;

module.exports = { fullname, students, hello };
