// // Dates & Times:
// const now = new Date();
// console.log(now);
// console.log(typeof (now));

// // year, months, day, times:
// console.log('getFullYear:', now.getFullYear());
// console.log('getMonth:', now.getMonth());
// console.log('getDate:', now.getDate());
// console.log('getDay:', now.getDay());
// console.log('getHours:', now.getHours());
// console.log('getMinutes:', now.getMinutes());
// console.log('getSeconds:', now.getSeconds());

// // date strings
// console.log(now.toDateString());
// console.log(now.toTimeString());
// console.log(now.toLocaleString());

// timestamps
const now = new Date();
console.log('timestamp:', now.getTime());

 const before = new Date('Febuary 1 2024 7:30:59');
console.log(now.getTime(), before);
console.log(now.getTime(), before.getTime());

// difference between 2 Dates in ms:
const diff = now.getTime() - before.getTime();
console.log(diff);

// difference between 2 Dates in min:
const mins = Math.round(diff / 1000 / 60);
console.log(mins);

// difference between 2 Dates in hr:
const hours = Math.round(mins / 60);
console.log(hours);

// difference between 2 Dates in days:
const days = Math.round(hours / 24);
console.log(days);

console.log(`The blog was written ${days}days ago`);

// converting timestamps into date objects:
const timestamp = 1675938474990;
console.log(new Date(timestamp));