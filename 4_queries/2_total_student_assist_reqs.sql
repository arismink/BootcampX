SELECT
  name,
  COUNT(assistance_requests.*) AS total_assistance_reqs
FROM assistance_requests
JOIN students
  ON assistance_requests.student_id = students.id
WHERE name = 'Elliot Dickinson'
GROUP BY name
;