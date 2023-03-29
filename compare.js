const first = { a: 1, b: 2 };
const second = { a: 1, b: 2 };
const third = first;
// if (first === third) {
//     console.log('object are same');
// }
// else {
//     console.log('object are not same');
// }

const first2 = { a: 1, b: 2 };
const second2 = { b: 2, a: 1 };

console.log(JSON.stringify(first2));
console.log(JSON.stringify(second2));

if (JSON.stringify(first2) === JSON.stringify(second2)) {
    console.log('both are same');
}
else {
    console.log('both are not same');
}

/* Bind */
const Alison = {
    id: 101,
    money: 5000,
    name: 'David Alison',
    treatDey: function (expense) {
        this.money = this.money - expense;
        console.log('Ajke treat dibe -', this);
        return this.money
    }
}

const kew = {
    id: 102,
    money: 6000,
    name: 'kew'
}
const heroAlom = {
    id: 103,
    money: 8000,
    name: 'Hero Alom'
}

Alison.treatDey(100);

const kewTreatDey = Alison.treatDey.bind(kew);
kewTreatDey(500);

const heroTreatDey = Alison.treatDey.bind(heroAlom);
console.log(heroTreatDey);
heroTreatDey(1000)