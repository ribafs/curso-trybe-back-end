const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.get('/atividade-1/user/register', handleHelloWorldRequest);

app.use(bodyParser.json());

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});

app.post('/atividade-1/user/register', (req, res) => {
  const { userName, email, password } = req.body;
  
  function validEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  const emailOk = validEmail(email);

  if (isNaN(password) || password.length < 4 || password.length > 8) {
    // não esqueça de adicionar o return para impedir de que seu código continue.
    return res.status(400).json({ "message": "invalid password" });
    }

  if (emailOk) {
    // não esqueça de adicionar o return para impedir de que seu código continue.
    return res.status(400).json({ "message": "invalid email" });
    }

  if (userName.length < 3) {
    // não esqueça de adicionar o return para impedir de que seu código continue.
    return res.status(400).json({ "message": "invalid userName" });
    }
      
  return res.status(201).json({ "message": "user created" });
  }); 

function handleHelloWorldRequest(req, res) {
  res.status(200).send('Hello World!');
}

app.post('/atividade-1/user/login', (req, res) => {
  const { email, password } = req.body;

  function validEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  const emailOk = validEmail(email);

  if (isNaN(password) || password.length < 4 || password.length > 8 || emailOk) {
    // não esqueça de adicionar o return para impedir de que seu código continue.
    return res.status(400).json({ "message": "email or password is incorrect" });
    }

/*   function createToken() {
    const 
    return 'olá';
  }
 */
  function geraStringAleatoria(tamanho) {
    var stringAleatoria = '';
    var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < tamanho; i++) {
    stringAleatoria += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return stringAleatoria;
    }
    
  const token = geraStringAleatoria(12);

  return res.status(200).json({ "token": `${token}` });

})