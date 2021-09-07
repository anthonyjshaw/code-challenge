// Breakdown: 
// 1. take source obj as parameter
// 2. create new target obj
// 3. Iterate over source object by converting keys to array
// 4. Check if the values of the source keys are objects (for nested objects)   

const deepCopy = (sourceObj) => { // 1.
  // 2. 
  const targetObj = {};
  // 3.
  const sourceKeys = Object.keys(sourceObj);
  sourceKeys.forEach(key => {
    // 4.
    if (typeof sourceKeys[key] === 'object') {
      // To dive into nested objects, call the function recursively 
      targetObj[key] = deepCopy(sourceObj[key]);
    } else {
      targetObj[key] = sourceObj[key];
    }
  });
  return targetObj;

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
        value_2: 2
      },
    },
  },
};

const target2 = deepCopy(source2);
console.group('Set3');
console.log('source ==>', source2);
console.log('target ==>', target2);
console.log(`Changing the value of source2.a.b.c.value1 from ${source2.a.b.c.value_1} to 2...`);
source2.a.b.c.value_1 = 2;
console.log(`Target value1 ==> ${target2.a.b.c.value_1}`);
console.groupEnd();