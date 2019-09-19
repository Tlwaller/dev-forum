INSERT INTO devforumuser (first_name, username, hash)
VALUES ($1, $2, $3)
RETURNING *;