const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 },
  ];

  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen in my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];

//   Some and Every Checks

// Array.prototype.some
// is at last one person 19?
function isAdult() {
    const isAdult = people.some(person => ((new Date()).getFullYear() - person.year >= 19));
    console.log(isAdult);
}  
// isAdult();

// Array.prototype.ecery
// is everyone 19?
function sameAge() {
    const sameAge = people.every(person => ((new Date()).getFullYear() - person.year >= 19));
    console.log(sameAge);
}
// sameAge()

// Array.prototype.find
// find the comment with the ID is 823423
function  findFirst() {
    const findFirst = comments.find(comment => comment.id === 823423);
    console.log(findFirst);
}
// findFirst();

// Array.prototype.findIndex
// Find the comment with this ID
// delete the comment with the ID of 823423
function findDelete() {
    const index = comments.findIndex(comment => comment.id === 823423);
    comments.splice(index, 1);
    console.table(comments); 
}
// findDelete();