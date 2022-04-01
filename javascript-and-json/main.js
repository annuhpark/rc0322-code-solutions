var books = [
  {
    ibsn: '1234',
    title: 'Harry Potter',
    author: 'J.K. Rowling'
  },
  {
    ibsn: '1111',
    title: '1984',
    author: 'George Orwell'
  },
  {
    ibsn: '0000',
    title: 'I Know Why the Caged Bird Sings',
    author: 'Maya Angelou'
  }
];
console.log(books, 'typeof books:', typeof books);
console.log(JSON.stringify(books), 'typeof books:', typeof JSON.stringify(books));

var student = '{"NumberId": 17, "StringName":"Bobby"}';
console.log(student, typeof student);
console.log(JSON.parse(student), 'typeof student:', typeof JSON.parse(student));
