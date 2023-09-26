CREATE TABLE items (
	id INTEGER PRIMARY KEY,
	title TEXT NOT NULL,
	image BLOB,
	price INTEGER NOT NULL,
	description TEXT,
	place TEXT NOT NULL
);