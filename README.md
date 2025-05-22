# credit-card-validation-number

Este repositório fornece funções para validar o número de um cartão de crédito e identificar sua bandeira com base nos padrões de início do número.
E também possui uma função para contar a quantidade de caracteres presentes na string. Facilita a criação do regex.

## Bandeiras suportadas

| Bandeira             | Número inicial                                                           |
| -------------------- | ------------------------------------------------------------------------ |
| **Visa**             | Começa sempre com o número 4.                                            |
| **MasterCard**       | Começa com dígitos entre 51 e 55, ou entre 2221 a 2720.                  |
| **Elo**              | Pode começar com vários intervalos, como 4011, 4312, 4389, entre outros. |
| **American Express** | Inicia com 34 ou 37.                                                     |
| **Discover**         | Começa com 6011, 65, ou com a faixa de 644 a 649.                        |
| **Hipercard**        | Geralmente começa com 6062.                                              |
| **EnRoute**          | Geralmente começa com 2149 ou 2014.                                      |
| **DinersClub**       | Geralmente começa em intervalos de 300 a 305 ou 36 ou 38.                |
| **JCB**              | Geralmente começa com 2131, 1800 ou 35.                                  |
| **Aura**             | Geralmente começa com 50.                                                |
| **Voyager**          | Geralmente começa com 86.                                                |

## Como usar

```js
const { validateCreditCard } = require("./src/credit-card-validation");

const result = validateCreditCard("4111111111111111");
console.log(result); // { bandeira: 'Visa', valido: true }
```

## Outra forma de usar

```js
const { perguntar } = require("./src/credit-card-validation");
```

## Licença

MIT
