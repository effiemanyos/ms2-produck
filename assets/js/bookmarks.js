// Listen for form submit when clicking on the button
document.getElementById('myForm').addEventListener('submit', saveBookmark);

// Save each bookmark
function saveBookmark(e){

  // Get form values
  var websiteName =document.getElementById('websiteName').value;
  var websiteUrl =document.getElementById('websiteUrl').value;

  if(!validateForm(websiteName, websiteUrl)){
    return false;
  }

  // Object that we submit to localStorage
  var bookmark = {
    name: websiteName,
    url: websiteUrl
  }

  // Test if bookmarks is null
  if(localStorage.getItem('bookmarks') === null){

    // Initialize an array
    var bookmarks = [];

    // Add the bookmarks to the array
    bookmarks.push(bookmark);

    // Set to localStorage (turn JSON array into string before it's saved)
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

  } else {

    // Get bookmarks from localStorage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

    // Add bookmark that is submitted to the array
    bookmarks.push(bookmark);

    // Re-set back to localStorage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }

  // Clear form
  document.getElementById('myForm').reset();

  // Re-fetch bookmarks
  fetchBookmarks();

  // Prevent form from submitting (otherwise it flashes)
  e.preventDefault();
}

// Delete bookmark
function deleteBookmark(url){

  // Get bookmarks from localStorage
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

  // Loop through the bookmarks
  for(var i =0;i < bookmarks.length;i++){
    if(bookmarks[i].url == url){

      // Remove from array
      bookmarks.splice(i, 1);
    }
  }
  // Re-set back to localStorage
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

  // Re-fetch bookmarks
  fetchBookmarks();
}

// Fetch bookmarks
function fetchBookmarks(){

  // Get bookmarks from localStorage
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

  // Get output id
  var bookmarksResults = document.getElementById('bookmarksResults');

  // Build output
  bookmarksResults.innerHTML = '';
  for(var i = 0; i < bookmarks.length; i++){
    var name = bookmarks[i].name;
    var url = bookmarks[i].url;

    bookmarksResults.innerHTML += '<div class="results-list">'+
                                  '<h3><i class="fa fa-bookmark"></i> '+name+
                                  ' <a onclick="deleteBookmark(\''+url+'\')" class="btn bm-btn-danger" href="#">Delete</a> ' +
                                  ' <a class="btn btn-default" target="_blank" href="'+addhttp(url)+'">Visit Site</a> ' +
                                  '</h3>'+
                                  '</div>';
  }
}

// Validate Form
function validateForm(websiteName, websiteUrl){
  if(!websiteName || !websiteUrl){
    alert('Please fill in the form');
    return false;
  }

  var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
  var regex = new RegExp(expression);

  if(!websiteUrl.match(regex)){
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