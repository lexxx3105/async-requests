fetch('https://students.netoservices.ru/nestjs-backend/poll')
    .then(response => response.json())
    .then(data => {
        let pollTitle = document.getElementById('poll__title');
        let pollAnswers = document.getElementById('poll__answers');

        pollTitle.textContent = data.data.title;

        data.data.answers.forEach(answer => {
            let answerButton = document.createElement('button');
            answerButton.textContent = answer;
            answerButton.classList.add('poll__answer');

            answerButton.addEventListener('click', () => {
                alert('Спасибо, ваш голос засчитан!');
            });

            pollAnswers.appendChild(answerButton);
        });
    })
    .catch(err => {
        console.error('Произошла ошибка: ', err);
    });