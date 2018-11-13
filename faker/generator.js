var faker = require('faker');
const { promisify } = require('util');
const fs = require('fs');
const writeFile = promisify(fs.writeFile);

(async () => {
    const toWrite = [];
    for (let i = 0; i < 3000; i++) {
        toWrite.push({
            name: faker.name.findName(),
            email: faker.internet.email(),
            city: faker.address.city()
        });
    }
    try {
        await writeFile('data.json', JSON.stringify(toWrite));
    }
    catch (err) {
        console.log(err)
    }
})();