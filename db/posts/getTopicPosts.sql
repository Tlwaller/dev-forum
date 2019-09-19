SELECT * FROM post p
INNER JOIN topic t
ON p.topic_id = t.topic_id
WHERE t.topic_id = $1;