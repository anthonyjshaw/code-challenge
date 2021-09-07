// Breakdown: 
// 1. take source obj
// 2. create new empty obj designed for copying
// 3. Check if the values of the source keys are objects (for nested objects)   

const deepCopy = (sourceObj) => {
  const targetObj = {};
  const sourceKeys = Object.keys(sourceObj);
  sourceKeys.forEach(key => {

  })
};

// Example simple test case
const source = {
  a: 1,
  b: 'string',
  c: false,
};

const target = deepCopy(source);
console.group('Set1');
console.log('source ==>', source);
console.log('target ==>', target);
console.groupEnd();

// Example more advanced test case
const source1 = {
  a: [1, 2, 3, 4],
  b: {
    c: 1,
    d: 2,
    e: new Date(),
    f: () => console.log('Hello World'),
  },
};
const target1 = deepCopy(source1);
console.group('Set2');
console.log('source ==>', source1);
console.log('target ===>', target1);
console.groupEnd();

// Feel free to show off different style test cases as you see fit
const source2 = {
  a: {
    b: {
      c: {
        value_1: 1,
        value2: 2
      }
    }
  }
};

const target2 = deepCopy(source2);
console.group('Set3');
console.log('source ==>', source2);
console.log('target ==>', target2);
console.log(source2.a.b.c);
console.groupEnd();