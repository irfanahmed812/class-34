const alison = {
    id: 101,
    money: 5000,
    name: 'David Alison',
    treatDey: function (expense, boksish, tax) {
        this.money = this.money - expense - boksish - tax;
        console.log('Ajke treat dibe', this);
        return this.money
    }
}

const heroBalam = {
    id: 102,
    money: 5000,
    name: 'Hero Balam'
}
const heroGolam = {
    id: 103,
    money: 9000,
    name: 'Hero Golam'
}

/* call */
// alison.treatDey.call(heroBalam, 500, 100, 50);
// alison.treatDey.call(heroGolam, 500, 100, 500);

/* apply */
alison.treatDey.apply(heroBalam, [500, 100, 50]);
alison.treatDey.apply(heroGolam, [800, 500, 120]);