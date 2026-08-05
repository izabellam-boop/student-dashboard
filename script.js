alert("Script is running 🌸");
console.log("Bella's Student Dashboard is loaded 🌸");


const addButton = document.getElementById("addAssignment");
const assignmentList = document.getElementById("assignmentList");


addButton.addEventListener("click", () => {

    const name = document.getElementById("assignmentName").value;
    const course = document.getElementById("assignmentClass").value;
    const date = document.getElementById("assignmentDate").value;


    if (name === "" || course === "" || date === "") {
        alert("Please fill out all assignment details 🌸");
        return;
    }


    const assignment = document.createElement("div");

    assignment.className = "assignment";


    assignment.innerHTML = `
        <h3>📚 ${name}</h3>
        <p>🏫 ${course}</p>
        <p>📅 Due: ${date}</p>
        <button class="deleteButton">Complete ✅</button>
    `;


    assignmentList.appendChild(assignment);


    document.getElementById("assignmentName").value = "";
    document.getElementById("assignmentClass").value = "";
    document.getElementById("assignmentDate").value = "";


    assignment.querySelector(".deleteButton").addEventListener("click", () => {
        assignment.remove();
    });

});
// 🌸 Grade Tracker

const addGradeButton = document.getElementById("addGrade");
const gradeList = document.getElementById("gradeList");
const averageGrade = document.getElementById("averageGrade");

let grades = [];

addGradeButton.addEventListener("click", () => {

    const subject = document.getElementById("subjectName").value;
    const grade = Number(document.getElementById("gradeValue").value);

    if (subject === "" || isNaN(grade)) {
        alert("Please enter both a class and a grade! 🌸");
        return;
    }

    grades.push(grade);

    const item = document.createElement("p");
    item.textContent = `📚 ${subject} — ${grade}%`;

    gradeList.appendChild(item);

    const total = grades.reduce((sum, value) => sum + value, 0);
    const average = (total / grades.length).toFixed(1);

    averageGrade.textContent = `Current Average: ${average}%`;

    document.getElementById("subjectName").value = "";
    document.getElementById("gradeValue").value = "";
});
// 🌸 Study Timer

let timeLeft = 25 * 60;
let timer;

const timerDisplay = document.getElementById("timerDisplay");
const startTimer = document.getElementById("startTimer");
const resetTimer = document.getElementById("resetTimer");

function updateTimer() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    timerDisplay.textContent =
        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

startTimer.addEventListener("click", () => {

    if (timer) return;

    timer = setInterval(() => {

        if (timeLeft > 0) {
            timeLeft--;
            updateTimer();
        } else {
            clearInterval(timer);
            timer = null;
            alert("🎉 Great job! Time for a break!");
        }

    }, 1000);

});

resetTimer.addEventListener("click", () => {

    clearInterval(timer);
    timer = null;

    timeLeft = 25 * 60;

    updateTimer();

});

updateTimer();
