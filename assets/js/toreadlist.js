// Credit: https://bit.ly/33JjNuL

// Removes Checks From Checkboxes
$("input[type=checkbox]").removeAttr("checked");

// Tabs Widget
$("#projects").tabs();

// Turn Items Into Sortable Elements (Categories - X Direction)
$("ul").sortable({
    axis: "x",
    containment: "#projects" // Move Within Projects
});

// Turn Items Into Sortable Elements (Books - Y Direction)
$("ol").sortable({
    axis: "y",
    containment: "#projects" // Move Within Projects
});

$(document).ready(function () {
    // Deletes Books Once They Are Clicked on Dinamically Added Elements
    // Credit: https://bit.ly/3hud7J2
    // Event Propagation (Delegating Responsibility)
    $("#projects").on("click", ".tasks-delete", function () {
        $(this).closest("li").slideUp(function () {
            $(this).remove();
        });
    });

    // Event Delegation (For New Books Implementation)
    $("#projects").on("click", "input[type=checkbox]", function () {
        $(this).next().toggleClass("checked");
    });

    // Deletes Category Tabs & Respective Books
    $("#projects").on("click", "span.ui-icon-close", function () {
        var index = $(this).closest("li").index();
        var id = $("#main li:eq(" + index + ") a").attr("href");
        $("#main li:eq(" + index + ")").remove();
        $(id).remove();
        $("#projects").tabs("refresh");
    });

    // 'Add New Book' Button Functionality (Outer)
    $("#btnAddBook").click(function () {

        // Popup Window Input Form
        $("#book-dialog").dialog({
            width: 400,
            resizable: false,
            modal: true,
            buttons: {

                // 'Add New Book' Button Functionality (Inner)
                "Add New Book": function () {

                    // Refresh App Widget (Refresh Method)
                    $("#projects").tabs("refresh");

                    // Get Currently Active Tab Value
                    var activeTab = $("#projects").tabs("option", "active");

                    // Credit: https://bit.ly/3eNxkI8
                    // Get href Value (ul > li) & Add to Corresponding Category (ol > id)
                    var title = $("#main > li:nth-child(" + (activeTab + 1) + ") > a").attr("href");

                    // Adding a New Item to a Selected Category
                    $("#projects " + title).append("<li> <input class='checkbox' type='checkbox'>" + "<span class='task-text'><i class='book-icon fa fa-book'></i>" + $("#new-book").val() + "</span>" + "<span><button class='tasks-delete'><i class='fa fa-trash'></i></button></span></li>");

                    // Clear Value in Text Box
                    // Credit: https://bit.ly/3tT1KwS
                    $("#new-book").val("");
                    // Close Popup Window When Adding New Book
                    $(this).dialog("close");
                },

                // 'Cancel' Button Functionality (Inner)
                "Cancel": function () {
                    // Clear Value in Text Box
                    $("#new-book").val("");
                    // Close Popup Window When Clicking Cancel
                    $(this).dialog("close");
                }
            }
        });
    });

    // 'Add New Category' Button Functionality (Outer)
    $("#btnAddCategory").click(function () {

        // Popup Window Input Form
        $("#category-dialog").dialog({
            width: 400,
            resizable: false,
            modal: true,
            buttons: {

                // 'Add New Category' Button Functionality (Inner)
                "Add New Category": function () {

                    // Get Value Entered in Text Box
                    var projectName = $("#new-category").val();

                    // Allows Having Spaces in Project Name & Adding New Books in Those Projects
                    var replaceName = projectName.split(" ").join("_");

                    // Create New <li> Element & Append to Unordered List Element With ID 'Main'
                    $("<li><a href='#" + replaceName + "'>" + projectName + "</a><span class='ui-icon ui-icon-close'></span></li>").appendTo("#main");

                    // Adding a Corresponding Ordered List for Categories Tab Value (Sortable Items)
                    $("<ol id='" + replaceName + "'></ol>").appendTo("#projects").sortable();

                    // Refresh App Widget to Include New Item in Tabs Section (Refresh Method)
                    $("#projects").tabs("refresh");

                    // Tab Count Categories Section
                    var tabCount = $("#projects .ui-tabs-nav li").length;

                    // Make New Entered Category an Active Tab
                    $("#projects").tabs("option", "active", tabCount - 1);

                    // Clear Value in Text Box
                    // Credit: https://bit.ly/3tT1KwS
                    $("#new-category").val("");
                    // Close Popup Window When Adding New Category
                    $(this).dialog("close");

                    // Validation & Display Alert Message
                    if (!projectName) {
                        alert('Please add a valid name');
                        return false;
                    }
                },

                // 'Cancel' Button Functionality (Inner)
                "Cancel": function () {
                    // Clear Value in Text Box
                    $("#new-category").val("");
                    // Close Popup Window When Clicking Cancel
                    $(this).dialog("close");
                }
            }
        });
    });
});

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