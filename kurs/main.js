document.getElementById("searchButton").addEventListener("click", function () {
    const from = document.getElementById("fromInput").value.trim();
    const to = document.getElementById("toInput").value.trim();
    const date = document.getElementById("dateInput").value;

    localStorage.setItem("search_from", from);
    localStorage.setItem("search_to", to);
    localStorage.setItem("search_date", date);

    window.location.href = "ticket.html";
});