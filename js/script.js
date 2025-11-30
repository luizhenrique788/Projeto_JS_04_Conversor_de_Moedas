const exchangeRates = {
    USD: { BRL: 4.87, EUR: 0.92 },
    EUR: { BRL: 5.30, USD: 1.09 },
    BRL: { USD: 0.21, EUR: 0.19 }
};

const amountInput = document.getElementById('amount');
const fromCurrency = document.getElementById('from-currency');
const toCurrency = document.getElementById('to-currency');
const convertButton = document.getElementById('convert-btn');
const resultDisplay = document.getElementById('result');

convertButton.addEventListener('click', () => {
    const amount = parseFloat(amountInput.value);
    const from = fromCurrency.value;
    const to = toCurrency.value;

    if (isNaN(amount) || amount <= 0) {
        resultDisplay.textContent = 'Por favor, insira um valor válido.';
        return;
    }

    const convertedAmount = convertCurrency(amount, from, to);
    resultDisplay.textContent = `${amount} ${from} = ${convertedAmount.toFixed(2)} ${to}`;
});

function convertCurrency(amount, fromCurrency, toCurrency) {
    if (fromCurrency === toCurrency) {
        return amount;
    }
    const rate = exchangeRates[fromCurrency][toCurrency];
    return amount * rate
}