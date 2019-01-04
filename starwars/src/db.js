const faker = require('faker');


const generateCompany = ()=> {
  return { id: faker.random.number(), name: faker.company.companyName(), description: faker.company.catchPhrase()};
};

const seed = (count)=> {
  const companies = [];
  while(companies.length < count){
    companies.push(generateCompany());
  }
  return companies;
}

const foo = seed;

export { foo, generateCompany };
