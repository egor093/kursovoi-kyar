document.addEventListener("DOMContentLoaded", function () {
    fetch("new1.xml")
        .then(response => response.text())
        .then(xmlString => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xmlString, "application/xml");

            const titleText = xmlDoc.querySelector("title")?.textContent || "";
            const imageSrcRaw = xmlDoc.querySelector("image")?.textContent || "";
            const imageSrc = imageSrcRaw.startsWith("/") ? imageSrcRaw.slice(1) : imageSrcRaw;

            const rawText = xmlDoc.querySelector("text")?.textContent || "";

            const formattedText = rawText
                .trim()
                .replace(/\n\s*\n/g, "<br><br>")
                .replace(/\n/g, " ");

            const main = document.querySelector("main.new-main");

            main.innerHTML = `
                <h1 class="head">${titleText}</h1>
                <img src="${imageSrc}">
                <p class="text">${formattedText}</p>
            `;
        })
        .catch(error => {
            console.error("Ошибка при загрузке XML:", error);
        });
});

document.addEventListener("DOMContentLoaded", function () {
    fetch("new2.xml")
        .then(response => response.text())
        .then(xmlString => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xmlString, "application/xml");

            const titleText = xmlDoc.querySelector("title")?.textContent || "";
            const imageSrcRaw = xmlDoc.querySelector("image")?.textContent || "";
            const imageSrc = imageSrcRaw.startsWith("/") ? imageSrcRaw.slice(1) : imageSrcRaw;

            const rawText = xmlDoc.querySelector("text")?.textContent || "";

            const formattedText = rawText
                .trim()
                .replace(/\n\s*\n/g, "<br><br>")
                .replace(/\n/g, " ");

            const main = document.querySelector("main.new-main2");

            main.innerHTML = `
                <h1 class="head">${titleText}</h1>
                <img src="${imageSrc}">
                <p class="text">${formattedText}</p>
            `;
        })
        .catch(error => {
            console.error("Ошибка при загрузке XML:", error);
        });
});
document.addEventListener("DOMContentLoaded", function () {
    fetch("new3.xml")
        .then(response => response.text())
        .then(xmlString => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xmlString, "application/xml");

            const titleText = xmlDoc.querySelector("title")?.textContent || "";
            const imageSrcRaw = xmlDoc.querySelector("image")?.textContent || "";
            const imageSrc = imageSrcRaw.startsWith("/") ? imageSrcRaw.slice(1) : imageSrcRaw;

            const rawText = xmlDoc.querySelector("text")?.textContent || "";

            const formattedText = rawText
                .trim()
                .replace(/\n\s*\n/g, "<br><br>")
                .replace(/\n/g, " ");

            const main = document.querySelector("main.new-main3");

            main.innerHTML = `
                <h1 class="head">${titleText}</h1>
                <img src="${imageSrc}">
                <p class="text">${formattedText}</p>
            `;
        })
        .catch(error => {
            console.error("Ошибка при загрузке XML:", error);
        });
});
document.addEventListener("DOMContentLoaded", function () {
    fetch("new4.xml")
        .then(response => response.text())
        .then(xmlString => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xmlString, "application/xml");

            const titleText = xmlDoc.querySelector("title")?.textContent || "";
            const imageSrcRaw = xmlDoc.querySelector("image")?.textContent || "";
            const imageSrc = imageSrcRaw.startsWith("/") ? imageSrcRaw.slice(1) : imageSrcRaw;

            const rawText = xmlDoc.querySelector("text")?.textContent || "";

            const formattedText = rawText
                .trim()
                .replace(/\n\s*\n/g, "<br><br>")
                .replace(/\n/g, " ");

            const main = document.querySelector("main.new-main4");

            main.innerHTML = `
                <h1 class="head">${titleText}</h1>
                <img src="${imageSrc}">
                <p class="text">${formattedText}</p>
            `;
        })
        .catch(error => {
            console.error("Ошибка при загрузке XML:", error);
        });
});