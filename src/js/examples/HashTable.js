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