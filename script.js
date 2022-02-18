const listCount = +prompt('Enter count of rows', '');

const database = {
	count : listCount,
	books : {},
	tags : [],
	private : false
};

const a = prompt('Last book you read', ''),
	  b = prompt('Leave review on this book', ''),
	  c = prompt('Last book you read', ''),
	  d = prompt('Leave review on this book', '');

database.books[a] = b;
database.books[c] = d;

console.log(database);