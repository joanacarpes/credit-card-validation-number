const readline = require('readline');

function luhnCheck(cardNumber) {
    const digits = cardNumber.replace(/\D/g, '').split('').reverse().map(Number);
    let sum = 0;
    for (let i = 0; i < digits.length; i++) {
        let digit = digits[i];
        if (i % 2 === 1) {
            digit *= 2;
            if (digit > 9) digit -= 9;
        }
        sum += digit;
    }
    return sum % 10 === 0;
}

/**
 * Identifies the flag (brand) of a credit card based on its number.
 *
 * @param {string} cardNumber - The credit card number to be checked.
 * @returns {string} The name of the card flag (e.g., 'Visa', 'MasterCard', etc.), or 'Desconhecida' if the flag is unknown.
 */
function getCardFlag(cardNumber) {

    const cardPatterns = {
        Visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
        MasterCard: /^5[1-5][0-9]{14}$/,
        Elo: /^(4011|4312|4389|4573|4576|5041|5067|5090|6277|6362|6363|6364|6365|6366|6367|6368|6369)[0-9]{10,12}$/,
        'American Express': /^3[47][0-9]{13}$/,
        Discover: /^(6011|65|64[4-9])[0-9]{12,15}$/,
        Hipercard: /^(6062|3841|6370|6371|6372|6373|6374|6375)[0-9]{10,12}$/,
        EnRoute: /^(2149|2014)[0-9]{10,17}$/,
        DinersClub: /^(3(?:0[0-5]|[68][0-9])[0-9]{11}|5[4-9][0-9]{14})$/,
        JCB: /^(?:2131|1800|35\d{3})\d{11}$/,
        Aura: /^(50)[0-9]{10,17}$/,
        Voyager: /^(86)[0-9]{10,17}$/,
    };
    for (const [key, value] of Object.entries(cardPatterns)) {
        if (value.test(cardNumber)) {
            return key;
        }
    }
    return 'Desconhecida';
}

function validateCreditCard(cardNumber) {
    if (luhnCheck(cardNumber)) {
        const bandeira = getCardFlag(cardNumber);
        return {
            bandeira,
            valido: true
        };
    } else {
        return {
            bandeira: null,
            valido: false
        };
    }

}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function perguntar() {
    rl.question('Digite o número do cartão de crédito: ', (input) => {
        if (input.trim().toLowerCase() === 'sair') {
            rl.close();
            return;
        }
        const sanitizedInput = input.replace(/\s+/g, '');
        const result = validateCreditCard(sanitizedInput);
        if (result.valido) {
            console.log(`Cartão válido! Bandeira: ${result.bandeira}`);
        } else {
            console.log('Cartão inválido!');
        }
        perguntar();
    });
};


perguntar();

module.exports = {
    getCardFlag,
    luhnCheck,
    validateCreditCard
};