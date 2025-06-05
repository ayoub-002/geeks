const fromSelect = document.getElementById('from');
const toSelect = document.getElementById('to');
const amountInput = document.getElementById('amount');
const convertBtn = document.getElementById('convert');
const switchBtn = document.getElementById('switch');
const resultEl = document.getElementById('result');

const API_KEY = '9dd902c4f1bb4705daec47f6';
const BASE_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}`;

const supportedCurrencies = {
  USD: 'United States Dollar',
  AUD: 'Australian Dollar',
  BGN: 'Bulgarian Lev',
  BRL: 'Brazilian Real',
  CAD: 'Canadian Dollar',
  CNY: 'Chinese Yuan',
  CZK: 'Czech Koruna',
  DKK: 'Danish Krone',
  GBP: 'British Pound Sterling',
  HKD: 'Hong Kong Dollar',
  HUF: 'Hungarian Forint',
  IDR: 'Indonesian Rupiah',
  EUR: 'Euro',
  ILS: 'Israeli New Shekel',
  JPY: 'Japanese Yen',
  INR: 'Indian Rupee',
  CHF: 'Swiss Franc',
  MAD: 'Moroccan Dirham'
};

function populateCurrencyOptions() {
  for (let code in supportedCurrencies) {
    const option1 = document.createElement('option');
    option1.value = code;
    option1.textContent = `${code} - ${supportedCurrencies[code]}`;
    const option2 = option1.cloneNode(true);

    fromSelect.appendChild(option1);
    toSelect.appendChild(option2);
  }

  fromSelect.value = 'USD';
  toSelect.value = 'ILS';
}

async function convertCurrency() {
  const from = fromSelect.value;
  const to = toSelect.value;
  const amount = parseFloat(amountInput.value);

  if (!amount || isNaN(amount) || amount <= 0) {
    resultEl.textContent = "Please enter a valid amount.";
    return;
  }

  try {
    const url = `${BASE_URL}/pair/${from}/${to}/${amount}`;
    const response = await fetch(url);
    const data = await response.json();

    if (data.result === "success") {
      resultEl.textContent = `${amount} ${from} = ${data.conversion_result.toFixed(2)} ${to}`;
    } else {
      resultEl.textContent = `API Error: ${data['error-type']}`;
    }
  } catch (error) {
    console.error("Error during fetch:", error);
    resultEl.textContent = "Network error. Please try again.";
  }
}

function switchCurrencies() {
  const temp = fromSelect.value;
  fromSelect.value = toSelect.value;
  toSelect.value = temp;
  convertCurrency();
}

convertBtn.addEventListener('click', convertCurrency);
switchBtn.addEventListener('click', switchCurrencies);

populateCurrencyOptions();
