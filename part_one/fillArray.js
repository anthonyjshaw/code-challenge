const fillArray = (rawData, currentWeek) => {
  // First, use the emptyWeeks 
  const sortedData = emptyWeeks(rawData, currentWeek);
 
  // Next, map object.hours to new array:
  const hours = sortedData.map(element => {
     return element.hours;
  });
  // Return new array
  return hours;
};


// Helper function designed to fill empty weeks
function emptyWeeks(array, weeks) {
  // Iterate over the array using for loop:
      for (let i = 0; i < weeks; i++) {
        // Using some() function, check if the week value exists in the array:
        if (!array.some(e => e.week === i + 1)) {
          // If not, add the  value to the end of the array with empty hours values.
          array.push({week: i + 1, hours: 0});
        }
      };
      // Finally, return a sorted version of the array.
      return array.sort((x, y) => x.week > y.week && 1 || -1);;
}

// Example simple test case
const source = [
  { week: 1, hours: 17 },
  { week: 3, hours: 44 },
  { week: 2, hours: 7 },
];

const source2 = [
  { week: 2, hours: 45},
  { week: 6, hours: 24},
  { week: 5, hours: 32},
];


// console.log(emptyWeeks(source2, 8));
const result = fillArray(source, 3);
console.group('Set1');
console.log('result ==>', result);
console.log('target ==>', [17, 7, 44]);
console.groupEnd();

// Example more advanced test case
const source1 = [
  { week: 5, hours: 17 },
  { week: 3, hours: 44 },
  { week: 2, hours: 7 },
];

const result1 = fillArray(source1, 8);
console.group('Set2');
console.log('result ==>', result1);
console.log('target ==>', [0, 7, 44, 0, 17, 0, 0, 0]);
console.groupEnd();


// Breakdown:
// 1. First, order the objects within the array by week
// 2. Then, add the missing week objects to the array by iterating o
// 3.