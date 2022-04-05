/* Return total amount of time that all students from a specific cohort have spent on all assignments */

SELECT
  SUM(assignment_submissions.duration) AS total_duration  
FROM
  assignments
JOIN
  assignment_submissions
  ON assignments.id = assignment_submissions.assignment_id
JOIN
  students
  ON assignment_submissions.student_id = students.id
JOIN
  cohorts
  ON students.cohort_id = cohorts.id
WHERE
  cohorts.name = 'FEB12'
;