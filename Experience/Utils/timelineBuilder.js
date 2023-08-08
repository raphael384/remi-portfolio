import data from "./timelineData.js";

export default function () {


    var eventsContainer = document.querySelector(".events-container");
    var innerHtml = "";
    var i = 0;

    document.documentElement.style.setProperty("--events-count", data.length - 1)

    for (const asset of data) {
        innerHtml += `
            <div class="event event-${i}">
              <div class="event-date">${asset.date}</div>
              <div class="round round-${i}"></div>
              <div class="event-title">${asset.name}</div>
            </div>
        `;

        i++;
    }



    eventsContainer.innerHTML = innerHtml;


    for (let i = 0; i < data.length; i++) {
        document.querySelector(`.event-${i}`).style.top = `calc(100% / var(--events-count) * ${i} - 16px)`;


    }



}