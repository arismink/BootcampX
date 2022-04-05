SELECT 
  DISTINCT(teachers.name) teacher,
  cohorts.name cohort
FROM assistance_requests
JOIN students
  ON student_id = students.id
JOIN cohorts
  ON students.cohort_id = cohorts.id
JOIN teachers
  ON teacher_id = teachers.id
WHERE cohorts.name = 'JUL02'
ORDER BY teacher
;