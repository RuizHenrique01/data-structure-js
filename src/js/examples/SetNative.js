const set = new Set();
set.add(1);
console.log(set.values());
console.log(set.has(1));
console.log(set.size);

const setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);
const setB = new Set();
setB.add(2);
setB.add(3);
setB.add(4);

const union = (set1, set2) => {
    const unionAB = new Set();
    set1.forEach(value => unionAB.add(value));
    set2.forEach(value => unionAB.add(value));
    return unionAB;
}
console.log(union(setA, setB));

const intersection = (set1, set2) => {
    const intersectionSet = new Set();
    set1.forEach(value => {
        if(set2.has(value)){
            intersectionSet.add(value);
        }
    });
    return intersectionSet;
}
console.log(intersection(setA, setB));

const diference = (set1, set2) => {
    const diferenceSet = new Set();
    set1.forEach(value => {
        if(!set2.has(value)){
            diferenceSet.add(value);
        }
    });
    return diferenceSet;
}
console.log(diference(setA, setB));

console.log(new Set([...setA, ...setB]));
console.log(new Set([...setA].filter(x => setB.has(x))));
console.log(new Set([...setA].filter(x => !setB.has(x))));