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
