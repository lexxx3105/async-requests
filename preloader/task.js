let itemsContainer = document.getElementById('items');
let loader = document.getElementById('loader');

fetch('https://students.netoservices.ru/nestjs-backend/slow-get-courses')
    .then(response => response.json())
    .then(data => {
        loader.classList.remove('loader_active');
        let valutes = data.response.Valute;
        for (let valute in valutes) {
            if (valutes.hasOwnProperty(valute)) {
                let currencyElement = document.createElement('div');
                currencyElement.classList.add('item');

                let currencyCodeElement = document.createElement('div');
                currencyCodeElement.textContent = valutes[valute].CharCode;
                currencyCodeElement.classList.add('item__code');

                let currencyValueElement = document.createElement('div');
                currencyValueElement.textContent = valutes[valute].Value;
                currencyValueElement.classList.add('item__value');

                let currencyTextElement = document.createElement('div');
                currencyTextElement.textContent = "руб.";
                currencyTextElement.classList.add('item__currency');

                currencyElement.appendChild(currencyCodeElement);
                currencyElement.appendChild(currencyValueElement);
                currencyElement.appendChild(currencyTextElement);

                itemsContainer.appendChild(currencyElement);
            }
        }
    })
    .catch(err => console.error('Ошибка: ', err));