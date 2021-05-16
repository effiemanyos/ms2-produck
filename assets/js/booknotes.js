// Credit: https://bit.ly/3uQED7C

// Key Variables for Button, Title, Text
let addBtn = document.getElementById("add-note-btn");
let addTitle = document.getElementById("note-title");
let addText = document.getElementById("note-text");

let notesObj;

// Add New Note on Click
addBtn.addEventListener("click", (e) => {

    // Validation & Display Alert Message
    if (addTitle.value == "" || addText.value == "") {
        return alert("Please add note title and text");
    }

    // Get Notes From Local Storage (Access Value From Notes)
    let notes = localStorage.getItem("notes");
    // Credit: https://mzl.la/3bru9Uk
    // If Note Is Invalid
    if (notes == null) {
        notesObj = [];
        // Convert String Back to Object
    } else {
        notesObj = JSON.parse(notes);
    }

    // Credit: https://bit.ly/3eQP3hK
    // Adding Title & Text to JavaScript Object
    let myObj = {
        title: addTitle.value,
        text: addText.value
    };

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

    // If Note Is Invalid
    if (notes == null) {
        notesObj = [];
        // Convert String Back to Object
    } else {
        notesObj = JSON.parse(notes);
    }

    // Display New Submitted Notes
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
                <div id="note">
                <p class="note-counter">Note ${index + 1}</p>
                <h3 class="note-title">${element.title}</h3>
                <p class="note-text">${element.text}</p>
                <button id="${index}" onclick="editNote(this.id)" class="edt-note-btn"><i class="fa fa-pencil"></i> Edit</button>
                <button id="${index}" onclick="deleteNote(this.id)" class="dlt-note-btn"><i class="fa fa-trash"></i> Delete</button>
                </div>
        `;
    });

    // Targeting Notes ID
    let noteElm = document.getElementById("notes");

    // If There Are No Notes in Results Area
    if (notesObj.length != 0) {
        noteElm.innerHTML = html;
        // Display Message to Indicate User What to Do
    } else {
        noteElm.innerHTML = "There are no notes yet! Add a new note by using the form above.";
    }
}

// Delete Submitted Notes by Index
function deleteNote(index) {

    // Confirm User Wants to Delete Selected Note
    let confirmDel = confirm("Watch out! You are about to delete this note!");

    // If User Agrees to Delete Note
    if (confirmDel == true) {

        // Get Items From Local Storage
        let notes = localStorage.getItem("notes");

        // If Note Is Invalid
        if (notes == null) {
            notesObj = [];
            // Convert String Back to Object
        } else {
            notesObj = JSON.parse(notes);
        }

        // If Note is Valid
        // Splice() Method to Delete Item Inside Array
        notesObj.splice(index, 1);

        // Convert Object Into String for Local Storage
        localStorage.setItem("notes", JSON.stringify(notesObj));

        // Call 'Display Notes' Function After Clicking on Delete Note
        displayNotes();
    }
}

// Edit Submitted Notes by Index
function editNote(index) {

    // Get Items From Local Storage
    let notes = localStorage.getItem("notes");

    // Verify Input Form Is Empty Before Editing Submitted Notes
    // Validate & Display Alert Message
    if (addTitle.value !== "" || addText.value !== "") {
        return alert("Please clear the form above to be able to edit the selected note");
    }

    // If Note Is Invalid
    if (notes == null) {
        notesObj = [];
        // Convert String Back to Object
    } else {
        notesObj = JSON.parse(notes);
    }

    // Credit: https://mzl.la/3ybz9WZ
    // Collect Element & Index From Note to Edit
    notesObj.findIndex((element, index) => {
        addTitle.value = element.title;
        addText.value = element.text;
    });

    // Remove Note From Results Area to Edit Area
    notesObj.splice(index, 1);

    // Saves Everything Back to Local Storage (Back to String)
    localStorage.setItem("notes", JSON.stringify(notesObj));

    // Call 'Display Notes' Function After Clicking on Edit Note
    displayNotes();
}

// Call 'Display Notes' Function
displayNotes();

// Visual Credit: https://bit.ly/33E0Dq7
// Written Credit: https://bit.ly/33JNwnz
// Dark Mode Toggle
var checkbox = document.querySelector('input[name=theme]');
checkbox.addEventListener('change', function () {
    if (this.checked) {
        trans();
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        trans();
        document.documentElement.setAttribute('data-theme', 'light');
    }
});

// Gradually Change Colours (Transition Property)
let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition');
    }, 1000);
};