const { Pool } = require('pg'); // use node-postgres to connect to DB

/* Pool is the preferred way to query with node-pg as it will manage multiple client connections for us. but either Client or Pool can be used */
const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const cohort_name = process.argv[2];
const values = [`%${cohort_name}%`];

pool.query(`
  SELECT 
    DISTINCT(teachers.name) as teacher,
    cohorts.name as cohort
  FROM assistance_requests
  JOIN students
    ON student_id = students.id
  JOIN cohorts
    ON students.cohort_id = cohorts.id
  JOIN teachers
    ON teacher_id = teachers.id
  WHERE cohorts.name LIKE $1
  ORDER BY teacher;
`, values)
.then(res =>{
  res.rows.forEach(teacher => {
    console.log(`${teacher.cohort}: ${teacher.teacher}`);
  })
})
.catch(err => {
  console.error('query error', err.stack)
})