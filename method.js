const student = {
    id: 101,
    name: 'Alison',
    money: 5000,
    isRich: false,
    sub: ['english', 'bangla', 'math', 'islam', 'ict'],
    bestFriends: {
        name: 'Wilium',
        mejorSub: 'upponash'
    },
    takeExam: function () {
        console.log(this.name, 'taking exam');
    },
    treatDey: function (expense, bokshis) {
        this.money = this.money - expense - bokshis;
        return this.money
    }
}

// student.takeExam();

const remaining = student.treatDey(900, 200);
console.log(remaining);
