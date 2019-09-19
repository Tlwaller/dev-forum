DELETE FROM post 
WHERE post_id = $2;

SELECT * FROM post
WHERE topic_id = $1;