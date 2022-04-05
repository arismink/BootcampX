/* Get total number of assignment submissions for each cohort */

SELECT
  cohorts.name AS cohort,
  COUNT(assignments.*) AS total_submissions
FROM cohorts
JOIN students
  ON cohorts.id = students.cohort_id
JOIN assignment_submissions
  ON students.id = assignment_submissions.student_id
JOIN assignments
  ON assignment_submissions.assignment_id = assignments.id
GROUP BY cohorts.name
ORDER BY COUNT(assignments.*)
;