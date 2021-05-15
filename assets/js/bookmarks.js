// Credit: https://bit.ly/2RngHu3

// Credit: https://bit.ly/2RXM7H7
// Listen for Form Submit When Clicking Button
document.getElementById('bookmarksForm').addEventListener('submit', saveBookmark);

// Save Each Bookmark
function saveBookmark(e) {

    // Credit: https://bit.ly/3ydIvBB
    // Get Form Input Values (ES5 Sintax)
    var websiteName = document.getElementById('websiteName').value;
    var websiteUrl = document.getElementById('websiteUrl').value;

    if (!validateForm(websiteName, websiteUrl)) {
        return false;
    }

    // Credit: https://bit.ly/3fem1I4
    // Object Submit to Local Storage (To Create Array of Objects)
    var bookmark = {
        name: websiteName,
        url: websiteUrl
    }

    // Test If Bookmarks Is Null
    if (localStorage.getItem('bookmarks') === null) {

        // Initialize Array
        var bookmarks = [];

        // Add Bookmarks to Array
        bookmarks.push(bookmark);

        // Credit 1: https://bit.ly/33HSG3v
        // Credit 2: https://bit.ly/33LU5pK
        // Set to Local Storage (Turn JSON Array Into String Before It's Saved)
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

    // If Bookmarks Has Item(s) 
    } else {

        // Get Bookmarks From Local Storage (Turn String Back Into JSON)
        var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

        // Add Submitted Bookmark to Array
        bookmarks.push(bookmark);

        // Re-Set Back to Local Storage
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }

    // Clear Form Input Boxes
    document.getElementById('bookmarksForm').reset();

    // Re-Fetch Bookmarks
    fetchBookmarks();

    // Prevent Form From Submitting (Otherwise It Flashes)
    e.preventDefault();
}

// Delete Bookmarks (Based on URL)
function deleteBookmark(url) {

    // Get Bookmarks From Local Storage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

    // Loop Through Bookmarks (Verify URLs to Delete the Corrent Bookmark)
    for (var i = 0; i < bookmarks.length; i++) {
        if (bookmarks[i].url == url) {

            // Remove From Array (Delete Item)
            bookmarks.splice(i, 1);
        }
    }
    // Re-Set Back to Local Storage (After Deletion)
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

    // Re-Fetch Bookmarks
    fetchBookmarks();
}

// Fetch Bookmarks (Display Items in Results)
function fetchBookmarks() {

    // Get Bookmarks From Local Storage (Fetch From Local Storage)
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

    // Get Output ID
    var bookmarksList = document.getElementById('bookmarksList');

    // Build Output (Entered Bookmarks List Layout)
    bookmarksList.innerHTML = '';
    // Credit: https://bit.ly/3hoHdhf
    for (var i = 0; i < bookmarks.length; i++) {
        var name = bookmarks[i].name;
        var url = bookmarks[i].url;

        // Credit: https://bit.ly/3fo1q40
        // Enter Content to HTML Through JavaScript
        bookmarksList.innerHTML += '<div class="results-list">' +
            '<h3><i class="fa fa-bookmark"></i> ' + name +
            ' <a class="btn btn-default" target="_blank" href="' + addhttp(url) + '"><i class="fa fa-external-link-square"></i></a> ' +
            ' <a onclick="deleteBookmark(\'' + url + '\')" class="btn bm-btn-danger" href="#"><i class="fa fa-trash"></i></a> ' +
            '</h3>' +
            '</div>';
    }
}

// Validate form
function validateForm(websiteName, websiteUrl) {
    if (!websiteName || !websiteUrl) {
        alert('Please fill in the form');
        return false;
    }

    var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);

    if (!websiteUrl.match(regex)) {
        alert('Please use a valid URL');
        return false;
    }

    return true;
}

function addhttp(url) {
    if (!/^(?:f|ht)tps?\:\/\//.test(url)) {
        url = "http://" + url;
    }
    return url;
}

// Dark mode toggle
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

let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 1000)
};