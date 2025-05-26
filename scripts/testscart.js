const cardsTest = document.querySelector('.tests');
document.addEventListener("DOMContentLoaded", () => {
    console.log('карточки работают');
    if (cardsTest) {
        const testList = cardsTest.querySelector('.tests__list');
        // задание 3.5
        // const cardsTestData = {
        //     test1: {
        //         hardLevel: '– сложный –',
        //         quantity__level: '100',
        //         description__level: 'углубленные вопросы по всему курсу',
        //         level__start: 'приступить к выполнению'
        //     },
        //     test2: {
        //         hardLevel: '– средний –',
        //         quantity__level: '50',
        //         description__level: 'базовые вопросы по всему курсу',
        //         level__start: 'приступить к выполнению'
        //     },
        //     test3: {
        //         hardLevel: '– легкий –',
        //         quantity__level: '25',
        //         description__level: 'базовые вопросы по основному курсу курсу',
        //         level__start: 'приступить к выполнению'
        //     }
        // }

        // const createCard = (hardLevel, quantityLevel, descriptionLevel, levelStart) => {
        //     const card = `
        //     <li class="level">
        //         <h2 class="Hard__level">${hardLevel}</h2>
        //         <p class="quantity__level">${quantityLevel}</p>
        //         <p class="description__level">${descriptionLevel}</p>
        //         <button class="level__start button">${levelStart}</button>
        //     </li>
        // `;
        //     return card;
        // }
        // for (const cardKey in cardsTestData) {
        //     const card = cardsTestData[cardKey];
        //     const cardElement = createCard(card.hardLevel, card.quantityLevel, card.descriptionLevel, card.levelStart);
        //     testList.insertAdjacentHTML('beforeend', cardElement);
        // }

        // задание 3.6//

const apiUrl= 'data.json';

const createCard = (hardLevel, quantityLevel, descriptionLevel, levelStart) => {
    const card = `
    <li class="level">
        <h2 class="Hard__level">${hardLevel}</h2>
        <p class="quantity__level">${quantityLevel}</p>
        <p class="description__level">${descriptionLevel}</p>
        <button class="level__start button">${levelStart}</button>
    </li>
`;
    return card;
}

fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                console.log(typeof (data));

                data.forEach(card => {
                    const cardElement = createCard(card.hardLevel, card.quantityLevel, card.descriptionLevel, card.levelStart);
                    testList.insertAdjacentHTML('beforeend', cardElement);
                });
            })
            .catch(error => {
                console.error('Ошибка при загрузке данных:', error);
            });

}



});
