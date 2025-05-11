//окно
const buy = document.querySelector(".buy");
const ok = document.querySelector(".ok");
const okBut = document.querySelector("#okBut");
const buyBut = document.querySelectorAll(".buyButton");
const buyButEnd = document.querySelector("#buyButtonEnd");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
let num = document.querySelector("#num");

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

num.innerText = getRandomInt(999999,10000000);

function myFunc() {
        buy.style.display = 'block';
        main.style.opacity = 0.6;
        footer.style.opacity = 0.6;
    }

console.log(getRandomInt(999999,10000000));

//поиск
document.addEventListener("DOMContentLoaded", function () {
    const fromInput = document.getElementById("fromInput");
    const toInput = document.getElementById("toInput");
    const searchButton = document.getElementById("searchButton");

    searchButton.addEventListener("click", function () {
        const fromValue = fromInput.value.trim().toLowerCase();
        const toValue = toInput.value.trim().toLowerCase();

        const boxes = document.querySelectorAll(".box");

        boxes.forEach(box => {
            const stationSpans = box.querySelectorAll(".content:nth-child(3) span");
            const fromStation = stationSpans[0]?.textContent.trim().toLowerCase();
            const toStation = stationSpans[2]?.textContent.trim().toLowerCase();

            const matchesFrom = !fromValue || fromStation.includes(fromValue);
            const matchesTo = !toValue || toStation.includes(toValue);

            if (matchesFrom && matchesTo) {
                box.style.display = "block";
            } else {
                box.style.display = "none";
            }
        });
    });
});

//проверка
document.addEventListener("DOMContentLoaded", function () {
    const buyButton = document.getElementById("buyButtonEnd");

    buyButton.addEventListener("click", function () {

        const inputs = document.querySelectorAll(".buy input");
        const values = Array.from(inputs).map(input => input.value.trim());

        const hasEmpty = values.some(value => value === "");
        if (hasEmpty) {
            alert("Пожалуйста, заполните все поля формы.");
            return;
        }

        const cardNumber = values[3];
        const expiry = values[4];
        const ccv = values[5];

        document.querySelector(".buy").style.display = "none";
        document.getElementById("ok").style.display = "block";

        const ticketNumber = Math.floor(100000 + Math.random() * 900000);
        document.getElementById("num").textContent = ticketNumber;
    });

    const okButton = document.getElementById("okBut");
    okButton.addEventListener("click", function () {
        document.getElementById("ok").style.display = "none";
        main.style.opacity = 1;
        footer.style.opacity = 1;
    });
});

//преход с мейна
// document.addEventListener("DOMContentLoaded", function () {
//     const from = localStorage.getItem("search_from");
//     const to = localStorage.getItem("search_to");

//     if (from && to) {
//         const boxes = document.querySelectorAll(".box");

//         boxes.forEach(box => {
//             const thirdContent = box.querySelectorAll(".content")[2];
//             const stationSpans = thirdContent.querySelectorAll("span");

//             const fromStation = stationSpans[0]?.textContent.trim().toLowerCase();
//             const toStation = stationSpans[2]?.textContent.trim().toLowerCase();

//             console.log(`ПОИСК: ${from} -> ${to} | Станции: ${fromStation} -> ${toStation}`);

//             if (fromStation.includes(from.toLowerCase()) && toStation.includes(to.toLowerCase())) {
//                 box.style.display = "block";
//             } else {
//                 box.style.display = "none";
//             }
//         });
//     }
// });

document.getElementById('buyButtonEnd').addEventListener('click', function () {
    const formData = {
        firstName: document.querySelectorAll('.buy input')[0].value,
        lastName: document.querySelectorAll('.buy input')[1].value,
        patronymic: document.querySelectorAll('.buy input')[2].value,
        cardNumber: document.querySelectorAll('.buy input')[3].value,
        expiryDate: document.querySelectorAll('.buy input')[4].value,
        ccv: document.querySelectorAll('.buy input')[5].value,
        cardHolder: document.querySelectorAll('.buy input')[6].value
    };

    localStorage.setItem('ticketFormData', JSON.stringify(formData));

    console.log('Сохраненные данные:', formData);
});
