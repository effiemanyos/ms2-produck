// Credit: https://bit.ly/33JjNuL

$("input[type=checkbox]").removeAttr("checked"); // Removes checks from checkboxes
$("#projects").tabs();
$("ul").sortable({
    axis: "x",
    containment: "#projects"
});
$("ol").sortable({
    axis: "y",
    containment: "#projects"
});

$(document).ready(function () {
    // Deletes books once they are clicked on dinamically added elements
    // Event delegation (delegating responsibility)
    $("#projects").on("click", ".tasks-delete", function () {
        $(this).closest("li").slideUp(function () {
            $(this).remove();
        });
    });

    // Event delegatiion - for new books implementation
    $("#projects").on("click", "input[type=checkbox]", function () {
        $(this).next().toggleClass("checked");
    });

    // Deletes category tabs and its respective books
    $("#projects").on("click", "span.ui-icon-close", function () {
        var index = $(this).closest("li").index();
        var id = $("#main li:eq(" + index + ") a").attr("href");
        $("#main li:eq(" + index + ")").remove();
        $(id).remove();
        $("#projects").tabs("refresh");
    });

    // Add books button
    $("#btnAddTask").click(function () {
        $("#book-dialog").dialog({
            width: 400,
            resizable: false,
            modal: true,
            buttons: {
                "Add New Book": function () {
                    $("#projects").tabs("refresh");
                    var activeTab = $("#projects").tabs("option", "active");
                    var title = $("#main > li:nth-child(" + (activeTab + 1) + ") > a").attr("href");
                    $("#projects " + title).append("<li> <input class='checkbox' type='checkbox'>" + "<span class='task-text'><i class='book-icon fa fa-book'></i>" + $("#new-task").val() + "</span>" + "<span><button class='tasks-delete'><i class='fa fa-trash'></i></button></span></li>");
                    $("#new-task").val("");
                    $(this).dialog("close");

                    if (!projectName) {
                        alert('please fill in the form');
                        return false;
                    }
                },
                "Cancel": function () {
                    $("#new-task").val("");
                    $(this).dialog("close");
                }
            }
        });
    });

    // Add category button
    $("#btnAddProject").click(function () {
        $("#category-dialog").dialog({
            width: 400,
            resizable: false,
            modal: true,
            buttons: {
                "Add New Category": function () {
                    var projectName = $("#new-project").val();
                    // Allows having spaces in the project name + adding new tasks in those projects
                    var replaceName = projectName.split(" ").join("_");
                    $("<li><a href='#" + replaceName + "'>" + projectName + "</a><span class='ui-icon ui-icon-close'></span></li>").appendTo("#main");
                    $("<ol id='" + replaceName + "'></ol>").appendTo("#projects").sortable();
                    $("#projects").tabs("refresh");
                    var tabCount = $("#projects .ui-tabs-nav li").length;
                    $("#projects").tabs("option", "active", tabCount - 1);
                    $("#new-project").val("");
                    $(this).dialog("close");

                    if (!projectName) {
                        alert('Please add a valid name');
                        return false;
                    }
                },
                "Cancel": function () {
                    $("#new-project").val("");
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