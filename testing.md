# **Content** 

- [Testing](#testing "Testing")
  - [HTML, CSS, JAVASCRIPT Validation Testing](#html-css-validation-testing "HTML, CSS, JAVASCRIPT Validation Testing")
  - [Testing Performance](#testing-performance "Testing Performance")
  - [Testing Accessibility](#testing-accessibility "Testing Accessibility")
  - [Testing User Stories](#testing-user-stories "Testing User Stories")

  [Return to README.md Document](https://github.com/effiemanyos/ms2-produck/blob/master/README.md)

# **TESTING**

![the webpage on different devices](assets/images/mockup-img.png "the webpage on different devices")

The website was tested in the following **browsers**:

- Chrome √
- Firefox √
- Microsoft Edge √
- Safari √
- Internet Explorer X
- Opera √

It was also tested in the following phone **operating systems**:

- iOS √
- Android √

Finally, it was tested in the following **devices**:

- Desktop √
- iPhone 5/SE √
- Pixel 2/2XL √
- Moto 4G √
- Galaxy S5 √
- iPhone 6/7/8 (+Plus) √
- iPhone X/iPhone XS Max √
- iPad/iPad Pro √
- Surface Duo √

*Results:* 

The website had an great performance and could be used perfectly, no funcional issues were found during the testing. However, the layout was not exactly the same (or the intended design) in all systems and devices but the users could interact with ease and achieve their goals successfully.

## **HTML, CSS, JAVASCRIPT Validation Testing**
-----

### **1. HTML Validation**

The tool used for this code validation was the [W3C Markup Validation Service](https://validator.w3.org/), which was used by **URL** to make sure there were no errors in none of the **HTML Files**. The results were the following:

![w3c html validation service one error results](assets/images/html-initial-validation.png "w3c css validation service one error results") 

***Date:*** Monday, May 10th, 2021

**1. Issue:** The element `a` must not appear as a descendant of the `button` element.

- **Fixes:** Remove the `a` inside the button `button` element like the example bellow:

*Before:*
```HTML
<li class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
    <div class="dropdown menu-dropdown">
        <button class="dropbtn page-scroll menu-dropbtn active"><a class="nav-link" href="index.html"><i
                    class="fa fa-home"></i> Home</a></button>
        <div class="dropdown-content menu-dropdown-content">
            <a href="index.html#about">> About Produck</a>
            <a href="index.html#services">> Our Services</a>
            <a href="index.html#contact">> Contact Us</a>
            <a href="index.html#footer">> Favourite Links</a>
        </div>
    </div>
</li>
```

*After:*
```HTML
<li class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
    <div class="dropdown menu-dropdown">
        <button class="dropbtn page-scroll menu-dropbtn nav-link active"><i class="fa fa-home"></i> Home</button>
        <div class="dropdown-content menu-dropdown-content">
            <a href="index.html#about">> About Produck</a>
            <a href="index.html#services">> Our Services</a>
            <a href="index.html#contact">> Contact Us</a>
            <a href="index.html#footer">> Favourite Links</a>
        </div>
    </div>
</li>
```

**2. Issue:** Stray end tag `i`.

- **Fixes:** Remove the `</i>` element from the code as it is no longer in use to finally get the following:

```HTML
<h4>Hey There!</h4>
```

**3. Issue:** Duplicate ID `contactForm`.

- **Fixes:** Replace the `id` name of the newsletter form from the footer to the following:

```HTML
<form onsubmit="return sendEmail(this);" id="newsletterForm"></form>
```

**4. Issue:** The `type` attribute is unnecessary for JavaScript resources.

- **Fixes:** Remove the `type` attribute (~~type="text/javascript"~~) from all of the following:

```HTML
<script type="text/javascript" src="assets/js/filename.js"></script>
```

The **final report** would have shown no errors in the html files as these would have been properly fixed as indicated above. However, due to a lack of time, the changes won't be implemented before the project deadline.


### **2. CSS Validation**

The tool used for this code validation was the [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/), which was used by **URL** to make sure that there were no errors in the **CSS Style Sheet**. The results were the following:

![w3c css validation service no error results](assets/images/css-initial-validation.png "w3c css validation service no error results") 

***Date:*** Monday, May 10th, 2021

The CSS yielded no major errors, so I proceeded with further testing after fixing the first two issues (the `transition-delay` and `box-sizing` values).

Just in case, the testing was performed again, this time by **File Upload** and **Direct Input**, and the results were exactly the same. 

### **3. JAVASCRIPT Validation**

The tool used for this code validation was the [JS Hint V2.12.0](https://jshint.com/), which was used by **Direct Input** of all the js files in this project to make sure there were no errors in none of the **JavaScript Files**. The results were the following:

**bookmarks.js**

![JS Hint JavaScript validation initial results](assets/images/bookmarks-validation.png "JS Hint JavaScript validation initial results") 

***Date:*** Tuesday, May 11th, 2021

**booknotes.js**

![JS Hint JavaScript validation initial results](assets/images/booknotes-validation.png "JS Hint JavaScript validation initial results") 

***Date:*** Tuesday, May 11th, 2021

**resources.js**

![JS Hint JavaScript validation initial results](assets/images/resources-validation.png "JS Hint JavaScript validation initial results") 

***Date:*** Tuesday, May 11th, 2021

**sendemail.js**

![JS Hint JavaScript validation initial results](assets/images/sendemail-validation.png "JS Hint JavaScript validation initial results") 

***Date:*** Tuesday, May 11th, 2021

**sendnewsl.js**

![JS Hint JavaScript validation initial results](assets/images/sendnewsl-validation.png "JS Hint JavaScript validation initial results") 

***Date:*** Tuesday, May 11th, 2021

**tobuylist.js**

![JS Hint JavaScript validation initial results](assets/images/tobuylist-validation.png "JS Hint JavaScript validation initial results") 

***Date:*** Tuesday, May 11th, 2021

**toreadlist.js**

![JS Hint JavaScript validation initial results](assets/images/toreadlist-validation.png "JS Hint JavaScript validation initial results") 

***Date:*** Tuesday, May 11th, 2021

## **Testing Performance**
-----

In order to test the website's performance on **desktop** and **mobile**, [Google Lighthouse](https://developers.google.com/web/tools/lighthouse) was used in both cases.

### **Desktop & Mobile**

The **initial results** were the following:

![google lighthouse results](assets/images/lighthouse-p1.png "google lighthouse results") 

![google lighthouse results](assets/images/lighthouse-p2.png "google lighthouse results") 

![google lighthouse accessibility results](assets/images/lighthouse-p3.png "google lighthouse accessibility results") 

![google lighthouse best practices results](assets/images/lighthouse-p4.png "google lighthouse best practices results") 

![google lighthouse runtime settings](assets/images/lighthouse-p5.png "google lighthouse runtime settings") 

***Date:*** Friday, May 14th, 2021

[Back to Content](#content)

## **Testing Accessibility**
-----

To test the website accessibility [Wave Web Accessibility Evaluation Tool](https://wave.webaim.org/) was used. The obtained results are the following:

![wave accessibility results](assets/images/wave-accessibility-results.png "wave accessibility results") 

***Date:*** Saturday, May 15th, 2021

[Back to Content](#content)

## **Testing User Stories**
-----

*Target Audience:*

- Recent Graduates (Tech/Non-Tech Background)
- Product Enthusiasts (Curious/Passionate)
- Aspiring Product Managers
- Entry-Level Product Managers
- APMs (Associate Product Managers)
- Non-Tech Background Professionals
- Entrepreneurs (Founders & Co-Founders)
- Professionals Transitioning Into Product

*Key Produck's Features:*

- ToBuyList App
- ToReadList App
- BookNotes App
- ToRateList App
- Bookmarks App

**Home Page**
![screenshot of the home page](assets/images/homepage-produck.png "screenshot of the home page")

1. As an **Product Enthusiast**, I want to easily understand what this web-based platform is all about and what kind of services it offers to aspiring Product Managers, so that I can decide to stay or leave.

    - Hero Image section
    - Welcome section
    - Our Services section

2. As an **Associate Product Manager**, I want to subscribe to Produck's newsletter to receive weekly or monthly up-to-date information, so that I can use it wisely to get promoted to Product Manager.

    - Footer section

3. As an **Entrepreneur**, I want to contact Produck's team or the founders directly to get to know them in person, so that I can propose them a strategic partnership to build great products together.

    - Contact Us section
    - Footer section

**PM Role Page**
![screenshot of the pm role page](assets/images/pmrolepage-produck.png "screenshot of the pm role page")

4. As a **Non-Tech Background Professional**, I want to know what are the main tasks PMs usually do or are responsible for, so that I can prepare myself for the role by practicing in advance.

    - About section
    - Key Responsibilities section

4. As a **Professional Transitioning Into PM**, I want to know what soft and hard skills are required to be a great Product Manager, so that I figure out if theres's anything I have to work on or develop.

    - Background Knowledge section
    - Required Soft Skills section








**ToBuyList App**
![screenshot of the tobuylist app](assets/images/tobuylistapp.png "screenshot of the tobuylist app")

**ToRateList App**
![screenshot of the toratelist app](assets/images/toratelistapp.png "screenshot of the toratelist app")

**Bookmarks App**
![screenshot of the bookmarks app](assets/images/bookmarksapp.png "screenshot of the bookmarks app")

Crucial User Stories to Test MVP & Validate Hypothesis:

As an Aspiring Product Manager, I want to be able to find out which are the best sources of PM information so that I can learn and apply this knowledge to get my first PM role as an intern or APM.

As a Recent Graduate, I want to be able to track my all the PM books I will be reading this year so that I can understand what PMs actually do and figure out if this is what I really want to work on from now on.

**ToBuyList App**
![screenshot of the tobuylist app](assets/images/tobuylistapp.png "screenshot of the tobuylist app")

**ToReadList App**
![screenshot of the toreadlist app](assets/images/toreadlistapp.png "screenshot of the toreadlist app")

**BookNotes App**
![screenshot of the booknotes app](assets/images/booknotesapp.png "screenshot of the booknotes app")

As a Entry-Level PM, I want to be able to feel confident in that all the resources I'm reading, watching or listening are sharing accurate information about PM so that I can become a great PM.

**Leaders Page**
![screenshot of the leaders page](assets/images/leaderspage-produck.png "screenshot of the leaders page")

**PM Books Page**
![screenshot of the pm books page](assets/images/pmbookspage-produck.png "screenshot of the pm books page")

**Resources Page**
![screenshot of the resources page](assets/images/resourcespage-produck.png "screenshot of the resources page")

[Return to README.md Document](https://github.com/effiemanyos/ms2-produck/blob/master/README.md)