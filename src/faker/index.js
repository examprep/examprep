var faker = require('faker');

module.exports = function () {
    let allData = [];
    for (var i = 0; i < 10; i++) {
        var e = {
            question: faker.lorem.words(5),
            answers: [
                faker.lorem.word(),
                faker.lorem.word(),
                faker.lorem.word()
            ],
            correctAnswer: 1
        }
        allData.push(e);
    }
    return allData;
}

// export default practice;