const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  ];

  const people = ['Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 
  'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 
  'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 
  'Birrell, Augustine', 'Black Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William', 
  'Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 
  'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 
  'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 
  'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 
  'Berle, Milton',];

//   Array.prototype.filter()
// 1. Filter the list of inventors of those who were born in the 1500s
function fifteen() {
    const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600))
    console.table(fifteen); 
}
// fifteen();

// Array.prototype.map
// 2. Give us an array of inventors first and last name
function fullName() {
    const fullname = inventors.map(inventor => inventor.first + ' ' + inventor.last);
    console.log(fullname);
}
// fullName();

// Array.prototype.sort
// 3. Sort the inventors by birthdate, oldest to youngest
function sort() {
    const sort = inventors.sort((a, b) => a.year > b.year ? 1 : -1);
    console.table(sort);
}
// sort();

// Array.prototype.reduce
// 4. How many years did all inventors live?
function total() {
    const totalYears = inventors.reduce((total, inventor) => {
        return total + (inventor.passed - inventor.year);
    }, 0);
    console.log(totalYears);
}
// total();

// 5. Sort the inventors by years live
function oldest() {
    const oldest = inventors.sort((a, b) => {
        const lastGuy = a.passed - a.year;
        const nextGuy = b.passed - b.year;
        return lastGuy > nextGuy ? -1 : 1;
    }) 
    console.table(oldest);
}
// oldest();

// 6. Create a list of Boulevards in Paris that contains 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// 7. Sort exercise
// Sort the people alphabetically by last name
function alphabetically() {
    const alpha = people.sort((lastOne, nextOne) => {
        const [aLast, aFirst] = lastOne.split(', ');
        const [bLast, bFirst] = nextOne.split(', ');
        return aLast > bLast ? 1 : -1;
    })
    console.log(alpha);
}
// alphabetically();

// 8. Reduce exercise
// Sum up the instances of each of these
const data = [
    'car',
    'car',
    'truck',
    'truck',
    'bike',
    'walk',
    'car',
    'van',
    'bike',
    'walk',
    'car',
    'van',
    'car',
    'truck'];

function transp() {
    const transp = data.reduce((obj, item) => {
        if (!obj[item]) {
            obj[item] = 0;
        }
        obj[item]++;
        return obj;
    }, {})
    console.log(transp);
}
transp();
