SELECT 
  students.name AS student_name,
  cohorts.name AS cohort_name,
  students.start_date AS student_start_date,
  cohorts.start_date AS cohort_start_date
FROM
  students
JOIN 
  cohorts ON cohorts.id = cohort_id
WHERE
  students.start_date != cohorts.start_date
ORDER BY
  cohorts.start_date
;