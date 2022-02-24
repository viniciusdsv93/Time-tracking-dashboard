const btnDaily = document.querySelector('.btn-daily');
const btnWeekly = document.querySelector('.btn-weekly');
const btnMonthly = document.querySelector('.btn-monthly');

btnDaily.addEventListener('click', (e) => {
    removeActiveState();
    btnDaily.classList.add('active');
    updateCards('Daily');
})

btnWeekly.addEventListener('click', (e) => {
    removeActiveState();
    btnWeekly.classList.add('active');
    updateCards('Weekly');
})

btnMonthly.addEventListener('click', (e) => {
    removeActiveState();
    btnMonthly.classList.add('active');
    updateCards('Monthly');
})

function updateCards(currentShowing) {

    let allCards = document.querySelectorAll('.card-content div');

        for (let i = 0; i < allCards.length; i++) {
            allCards[i].classList.add('hidden');
        }

    switch (currentShowing) {

        case 'Daily':

            let cardsDaily = document.querySelectorAll('.card-content--daily');

            for (let i = 0; i < cardsDaily.length; i++) {
                cardsDaily[i].classList.remove('hidden');
            }

            break;

        case 'Weekly':
            
            let cardsWeekly = document.querySelectorAll('.card-content--weekly');

            for (let i = 0; i < cardsWeekly.length; i++) {
                cardsWeekly[i].classList.remove('hidden');
            }
            break;

        case 'Monthly':
            
            let cardsMonthly = document.querySelectorAll('.card-content--monthly');

            for (let i = 0; i < cardsMonthly.length; i++) {
                cardsMonthly[i].classList.remove('hidden');
            }
            
            break;
    }
}

function removeActiveState() {
    btnDaily.classList.remove('active');
    btnWeekly.classList.remove('active');
    btnMonthly.classList.remove('active');
}