/* object create method 1 */
const eshikhon = { name: 'eshikhon.com', job: 'training institute' };
// console.log(eshikhon);

const person = new Object();
// console.log(person);

const metarial = Object.create(eshikhon);
// console.log(metarial.job);

/* object create method 2 */
class people {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const pepo = new people('Alison', 32);
console.log(pepo);