'use strict'
let currentIndex = 0;
const slider = document.querySelectorAll(".choice__item");
const prevButton = document.querySelector(".choice__left");
const nextButton = document.querySelector(".choice__right");
const visibleCards = 3;
updateSlider();
prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = slider.length - visibleCards;
    }
    updateSlider();
});
nextButton.addEventListener("click", () => {
    if (currentIndex < slider.length - visibleCards) {
        currentIndex++;
    }
    else {
        currentIndex = 0;
    }
    updateSlider();
});
function updateSlider() {
    slider.forEach((item, index) => {
        if (index >= currentIndex && index < currentIndex + visibleCards) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}

const EraContainer = document.querySelector(".choice");

if (EraContainer) {
    console.log('эра существует');
    const dataTitleEra = [
        "80",
        "20+",
        "25+",
        "Поддержка 24/7",
        "Индивидуальный подход",
        "Отслеживание результата",
    ];

    const titleEra =
            EraContainer.querySelectorAll(".choice__data");

            titleEra.forEach((item, index) => {
                item.textContent = dataTitleEra[index];
            });
     } 
