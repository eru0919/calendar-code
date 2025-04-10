function createCalendar(year, month) {
  let calendar = document.getElementById("calendar");
  calendar.innerHTML = "";

  let date = new Date(year, month - 1, 1);
  let daysInMonth = new Date(year, month, 0).getDate();
  let startDay = date.getDay();

  let dayNames = ["日", "月", "火", "水", "木", "金", "土"];
  for (let i = 0; i < 7; i++) {
    let dayHeader = document.createElement("div");
    dayHeader.className = "day";
    dayHeader.innerHTML = "<strong>" + dayNames[i] + "</strong>";
    calendar.appendChild(dayHeader);
  }

  for (let i = 0; i < startDay; i++) {
    let emptyCell = document.createElement("div");
    emptyCell.className = "day";
    calendar.appendChild(emptyCell);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    let currentDate = new Date(year, month - 1, day);
    let dayCell = document.createElement("div");
    dayCell.className = "day";
    if (currentDate.getDay() === 0 || currentDate.getDay() === 6) {
      dayCell.classList.add("weekend");
    }

    dayCell.innerHTML = "<div class='date'>" + day + "</div>";

    let info = document.createElement("div");
    info.className = "info";

    if (currentDate.getDay() === 0 || currentDate.getDay() === 6) {
      info.textContent = "定休日";
    } else {
      info.textContent = "11:00～20:00";
    }

    dayCell.appendChild(info);
    calendar.appendChild(dayCell);
  }
}

let today = new Date();
createCalendar(today.getFullYear(), today.getMonth() + 1);
