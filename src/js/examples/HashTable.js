import { HashTable } from "../data-structures/hashTable/hashTable";

const hash = new HashTable();

hash.put('Gandalf', 'gandalf@email.com');
hash.put('John', 'johnsnow@email.com');
hash.put('Tyrion', 'tyrion@email.com');
console.log(hash.hashCode('Gandalf') + ' - Gandalf');
console.log(hash.hashCode('John') + ' - John');
console.log(hash.hashCode('Tyrion') + ' - Tyrion');

console.log(hash.get('Gandalf'));
console.log(hash.get('Loiane'));

hash.remove('Gandalf');
console.log(hash.get('Gandalf'));

const hash2 = new HashTable()

hash2.put('Ygritte', 'ygritte@email.com');
hash2.put('Jonathan', 'jonathan@email.com');
hash2.put('Jamie', 'jamie@email.com');
hash2.put('Jack', 'Jack@email.com');
hash2.put('Jasmine', 'jasmine@email.com');
hash2.put('Jake', 'jake@email.com');
hash2.put('Nathan', 'nathan@email.com');
hash2.put('Athelstan', 'athelstan@email.com');
hash2.put('Sue', 'sue@email.com');
hash2.put('Aethelwulf', 'aethelwulf@email.com');
hash2.put('Sargeras', 'sargeras@email.com');

console.log(hash2.toString())