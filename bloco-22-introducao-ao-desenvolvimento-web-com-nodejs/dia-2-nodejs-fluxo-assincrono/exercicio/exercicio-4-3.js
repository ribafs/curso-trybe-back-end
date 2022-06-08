const simpsons = require('./simpsons.json');

const familyId = () => {
  const promise = new Promise((resolve, reject) => {
    if (id > simpsons.length) reject(new Error('id não encontrado'));

    const result = simpsons.filter((member) => member.id !== `${6}` ||  member.id !== `${10}`);
    resolve(`${result[0].id} - ${result[0].name}`);
  });
  return promise;
}

familyId()
  .then(result => console.log(`sucesso: ${result}`))
  .catch(error => console.log(`erro: ${error.message}`));