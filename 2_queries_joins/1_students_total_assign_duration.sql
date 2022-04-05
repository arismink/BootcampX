/* Total amount of time a student has spent on assignments */
SELECT
  SUM(assignment_submissions.duration) AS total_duration
FROM
  assignments
JOIN assignment_submissions
  ON assignments.id = assignment_submissions.assignment_id
JOIN students
  ON students.id = assignment_submissions.student_id
WHERE
  students.name = 'Ibrahim Schimmel'
;
