const faker = require('faker/locale/nl_BE')


const randomName = faker.name.findName()
const randomCard = faker.lorem.paragraph()

console.log(randomName)
console.log(randomCard)
const random = faker.phone.phoneNumber

console.log(random)

