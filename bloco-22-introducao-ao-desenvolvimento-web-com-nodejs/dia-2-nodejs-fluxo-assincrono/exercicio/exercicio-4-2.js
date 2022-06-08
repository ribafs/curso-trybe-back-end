const simpsons = require('./simpsons.json');

const familyId = (id) => {
  const promise = new Promise((resolve, reject) => {
    if (id > simpsons.length) reject(new Error('id não encontrado'));

    const result = simpsons.filter((member) => member.id === `${id}`);
    resolve(`${result[0].id} - ${result[0].name}`);
  });
  return promise;
}

familyId(11)
  .then(result => console.log(`sucesso: ${result}`))
  .catch(error => console.log(`erro: ${error.message}`));