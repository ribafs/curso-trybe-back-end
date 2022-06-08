const simpsons = require('./simpsons.json');

const allFamily = (family) => {
  family.forEach((membrer) => {
    console.log(`${membrer.id} - ${membrer.name}`);
  });
};

allFamily(simpsons);