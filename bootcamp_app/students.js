const { Pool } = require('pg'); // use node-postgres to connect to DB

/* Pool is the preferred way to query with node-pg as it will manage multiple client connections for us. but either Client or Pool can be used */
const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

// user requested input
const cohort_name = process.argv[2];
const max_results = process.argv[3] || 5;

// store potentially malicious values in array
// in the query function, numbers start at 1 instead of 0
const values = [`%${cohort_name}%`, max_results];

// pool.query is a function that accepts SQL as a JS string
// query returns a promise that contains a Result object which you can catch with .then()
  // because we are using templates to refer to the value, you must give each item you're selecting for an alias so that it can be referred to
pool.query(`
  SELECT
    students.id as student_id,
    students.name as name,
    cohorts.name as cohort
  FROM students
  JOIN cohorts ON students.cohort_id = cohorts.id
  WHERE cohorts.name LIKE $1
  LIMIT $2;
`, values)
.then(res => { // so once this executes, we are not dealing with SQL or the database anymore but JS objects
  console.log(res.rows) // returns an object of many things but the thing we need is in rows

  res.rows.forEach(user => {
    console.log(`${user.name} has an id of ${user.student_id} and was in the ${user.cohort} cohort`);
  })

})
.catch(err => {
  console.error('query error', err.stack)
});