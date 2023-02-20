import Set from "../data-structures/set/set";

//Test set class
const set = new Set();
set.add(1);
console.log(set.values());
console.log(set.has(1));
console.log(set.size());
set.add(2);
console.log(set.values());
console.log(set.has(1));
console.log(set.size());
set.delete(1);
console.log(set.values());
set.delete(2);
console.log(set.values());
console.log(set.items);


//Test set operations like Union, intersection, diference and subset
const setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);
const setB = new Set();
setB.add(3);
setB.add(4);
setB.add(5);
setB.add(6);
const unionAB = setA.union(setB);
console.log(unionAB.values());

const setC = new Set();
setC.add(1);
setC.add(2);
setC.add(3);
const setD = new Set();
setD.add(2);
setD.add(3);
setD.add(4);
const unionCD = setC.intersection(setD);
console.log(unionCD.values());
const diferenceCD = setC.diference(setD);
console.log(diferenceCD.values());

const setE = new Set();
setE.add(1);
setE.add(2);
const setF = new Set();
setF.add(1);
setF.add(2);
setF.add(3);
const setG = new Set();
setG.add(2);
setG.add(3);
setG.add(4);
console.log(setE.isSubsetOf(setF));
console.log(setE.isSubsetOf(setG));