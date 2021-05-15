// Credit: https://bit.ly/3uQED7C

// Variables
let addBtn = document.getElementById("add-note-btn");
let addTitle = document.getElementById("note-title");
let addText = document.getElementById("note-text");

// Add New Note on Click
addBtn.addEventListener("click", (e) => {

    // Validation & Alert Message
    if (addTitle.value == "" || addText.value == "") {
        return alert("Please add note title and text");
    }

    // Get Notes From Local Storage (Access Value From Notes)
    let notes = localStorage.getItem("notes");
    if (notes == null) { // If Note Is Invalid
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes); // Convert String Back to Object
    }

    // Putting Title & Text Into Object
    let myObj = {
        title: addTitle.value,
        text: addText.value
    }

    // Save Notes to Local Storage
    notesObj.push(myObj);
    localStorage.setItem("notes", JSON.stringify(notesObj)); // Convert Object Into String
    addTitle.value = "";
    addText.value = "";

    // Display Submitted Notes
    displayNotes();
});

// Display Notes on Results Section
function displayNotes() {

    // Get Items From Local Storage
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

    // Display New Submitted Notes
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
                <div id="one-note">
                <p class="note-counter">Note ${index + 1}</p>
                <h3 class="note-title">${element.title}</h3>
                <p class="note-text">${element.text}</p>
                <button id="${index}" onclick="deleteNote(this.id)" class="edt-note-btn"><i class="fa fa-pencil"></i> Edit</button>
                <button id="${index}" onclick="editNote(this.id)" class="dlt-note-btn"><i class="fa fa-trash"></i> Delete</button>
                </div>
        `;
    });

    let noteElm = document.getElementById("notes");
    if (notesObj.length !=0) {
        noteElm.innerHTML = html;
    } else {
        noteElm.innerHTML = "Not Notes Yet! Add a note using the form above";
    }
}

displayNotes();




















// Visual Credit: https://bit.ly/33E0Dq7
// Written Credit: https://bit.ly/33JNwnz
// Dark Mode Toggle
var checkbox = document.querySelector('input[name=theme]');
checkbox.addEventListener('change', function () {
    if (this.checked) {
        trans()
        document.documentElement.setAttribute('data-theme', 'dark')
    } else {
        trans()
        document.documentElement.setAttribute('data-theme', 'light')
    }
});

// Gradually Change Colours (Transition Property)
let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 1000)
};