const operacoes = require("./operacoes");
const readLine = require("readLine-sync");

console.log("Calculadora Simples");
const num1 = readLine.questionInt("Digite um número: ");
const oper = readLine.question("Digite a operação: (+, -, *, /) ");
const num2 = readLine.questionInt("Digite um número: ");

switch (oper) {
  case "+":
    operacoes.sum(num1, num2);
    break;
  case "-":
    operacoes.sub(num1, num2);
    break;
  case "*":
    operacoes.mult(num1, num2);
    break;
  case "/":
    operacoes.div(num1, num2);
    break;
  default:
    console.log('Operação desconhecida');
}
