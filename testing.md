# **Content** 

- [Testing](#testing "Testing")
  - [Issues Solved During Development](#issues-solved-during-development "Issues Solved During Development")
  - [HTML-CSS Validation Testing](#html-css-validation-testing "HTML-CSS Validation Testing")
  - [Testing Performance](#testing-performance "Testing Performance")
  - [Testing Accessibility](#testing-accessibility "Testing Accessibility")
  - [Testing User Stories](#testing-user-stories "Testing User Stories")
  - [Code Institute Peer Code Review](#code-institute-peer-code-review "Code Institute Peer Code Review")

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

## **Issues During Development**
-----

The most important issues that were found during development that took a considered amount to time to solve are the following:

### **ToReadList App**

**1. Issue:** XXXX

![screenshot of the issue with the anchors and the navbar](./assets/images/anchors-navbar.png "screenshot of the issue with the anchors and the navbar")

- **Fixes:** XXXX

### **ToBuyList App**

**2. Issue:** XXXX

![screenshots of how the additional space on the footer section was fixed](./assets/images/footer-fix.png "screenshots of how the additional space on the footer section was fixed")

- **Fixes:** XXXX

### **Bookmarks App**

**3. Issue:** XXXX

![screenshots of how the services types section was fixed](./assets/images/services-types-fix.png "screenshots of how the services types section was fixed")

- **Fixes:** XXXX

### **BookNotes App**

**4. Issue:** XXXX

![screenshots of what issues the contact section had and final results](./assets/images/contact-fix.png "screenshots of what issues the contact section had and final results")

- **Fixes:** XXXX

[Back to Content](#content)








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

![w3c html validation service one error results](assets/images/bookmarks-validation.png "w3c css validation service one error results") 

***Date:*** Tuesday, May 11th, 2021

**booknotes.js**

![w3c html validation service one error results](assets/images/booknotes-validation.png "w3c css validation service one error results") 

***Date:*** Tuesday, May 11th, 2021

**resources.js**

![w3c html validation service one error results](assets/images/resources-validation.png "w3c css validation service one error results") 

***Date:*** Tuesday, May 11th, 2021

**sendemail.js**

![w3c html validation service one error results](assets/images/sendemail-validation.png "w3c css validation service one error results") 

***Date:*** Tuesday, May 11th, 2021

**sendnewsl.js**

![w3c html validation service one error results](assets/images/sendnewsl-validation.png "w3c css validation service one error results") 

***Date:*** Tuesday, May 11th, 2021

**tobuylist.js**

![w3c html validation service one error results](assets/images/tobuylist-validation.png "w3c css validation service one error results") 

***Date:*** Tuesday, May 11th, 2021

**toreadlist.js**

![w3c html validation service one error results](assets/images/toreadlist-validation.png "w3c css validation service one error results") 

***Date:*** Tuesday, May 11th, 2021






-------------
-------------
-------------
-------------

## **Testing Performance**
-----

In order to test the website's performance on **desktop** and **mobile**, [Google Lighthouse](https://developers.google.com/web/tools/lighthouse) was used in both cases.

### **Desktop & Mobile**

The **initial results** were the following:

![google lighthouse results](./assets/images/lighthouse-p1.png "google lighthouse results") 

![google lighthouse results](./assets/images/lighthouse-p2.png "google lighthouse results") 

![google lighthouse accessibility results](./assets/images/lighthouse-accessibility.png "google lighthouse accessibility results") 

![google lighthouse best practices results](./assets/images/lighthouse-bestpractices.png "google lighthouse best practices results") 

![google lighthouse runtime settings](./assets/images/runtime-settings.png "google lighthouse runtime settings") 

***Date:*** Thursday, Feb 25th, 2021

The following actions were taken to improve the performance of the website, especially the accessibility:

**Urgent Issues:**

**1. Issue:** Properly size images / Avoid enourmous network payloads

- **Fixes:** Unfortunatly, due to the lack of time this issue could not be solved before the project deadline. However, all the images used on the website will be converted from PNG to formats like JPEG 2000 or WebP to provide better compression for faster downloads and less data consumption. The tools that will be used for this are the following: [Convertio (PNG to WebP)](https://convertio.co/png-webp/) and [TinyPNG (Image Compression)](https://tinypng.com/). **Goal:** Less than 550KB per image.

**2. Issue:** Links to cross-origin destinations are unsafe

- **Fixes:** This issue was simply fixed by adding `rel="noopener"` to all external links to prevent security vulnerabilities.

```HTML
<li>
    <img src="assets/images/ah-logo.png" alt="ArchHyve logo">
    <a href="https://archhyve.com/" target="_blank" rel="noopener"><img src="assets/images/ah-img.png" alt="ArchHyve"></a>
</li>
```

**3. Issue:** Image elements do not have explicit widh and height

- **Fixes:** Unfortunatly, due to the lack of time this issue could not be solved before the project deadline. However, explicit `width` and `height` (size attributes) will be set on image and video elements to reduce layout shifts and improve CLS (Cumulative Layout Shift) like explained in [Optimize Cumulative Layout Shift](https://web.dev/optimize-cls/?utm_source=lighthouse&utm_medium=devtools#images-without-dimensions).

*Example:*
```HTML
<img src="community-logo.jpg" width="640" height="360" alt="the club community official logo"/>
```

**4. Issue:** Background and foreground colors do not have a sufficient contrast ratio √

- **Fixes:** This issue was simply fixed by increasing the contrast of the colors in the background and foreground.

```CSS
#new-bgfg-colors {
    background: #e7e8ef;
    color: #434343;
}
```
*Final Result:*
![background and foreground new colors](./assets/images/increased-contrast.png "background and foreground new colors") 

**5. Issue:** Ensure text ramains visible during webfont load

- **Fixes:**

**6. Issue:** Form elements do not have associated labels

- **Fixes:** This issue was simply fixed by adding the associated labels to all form elements.

```HTML
<!-- Name -->
<label for="fullname">Full Name</label>
<input type="text" name="name" id="fullname" class="form-control" placeholder="Full Name" required/>
```

```CSS
/* Invisible Form Labels */
label {
    display: none;
}
```

*Final Result:*

![background and foreground new colors](./assets/images/form-labels.png "background and foreground new colors")

*Final Results:*

![google lighthouse final results](./assets/images/lighthouse-finalresults.png "google lighthouse final results")

[Back to Content](#content)


-------------
-------------
-------------
-------------







## **Testing Accessibility**
-----

To test the website accessibility [Wave Web Accessibility Evaluation Tool](https://wave.webaim.org/) was used. The obtained results are the following:

![wave accessibility results](./assets/images/wave-accessibility-results.png "wave accessibility results") 

![wave accessibility errors and alerts results](./assets/images/wave-accessibility-errorsalerts.png "wave accessibility errors and alerts results")

All "errors" and "alerts" were analysed in detail and the **conclusions** were the following: 

- All the **alerts** were actually made on purpose for academic reasons only as the external links used in the development of this project are not the real ones (e.g.: social media links) or they have been duplicated as the information shared on the site requires:

![wave accessibility alerts results](./assets/images/wave-accessibility-redundantlinks1.png "wave accessibility errors and alerts results")

![wave accessibility alerts results](./assets/images/wave-accessibility-redundantlinks2.png "wave accessibility errors and alerts results")

- All these **errors** on the site are the same, the `<a>` tag doesn't contain any text: 

![wave accessibility errors results](./assets/images/wave-accessibility-errors.png "wave accessibility errors and alerts results")

In order to fix this to improve the accessibility of the website, `alt text` was added to all social media icons so that the text can be detected by screen readers only:

```HTML
<!-- Hidden Text Social Media Icons | SR Only -->
<a href="https://www.linkedin.com/" target="_blank" rel="noopener"><i class="fa fa-linkedin"><span class="sr-only">LinkedIn</span></i></a>
<a href="https://www.facebook.com/" target="_blank" rel="noopener"><i class="fa fa-facebook"><span class="sr-only">Facebook</span></i></a>
<a href="https://www.instagram.com/" target="_blank" rel="noopener"><i class="fa fa-instagram"><span class="sr-only">Instagram</span></i></a>
<a href="https://twitter.com/" target="_blank" rel="noopener"><i class="fa fa-twitter"><span class="sr-only">Twitter</span></i></a>
```

```CSS
/* Hidden Text Social Media Icons | SR Only */
.sr-only {
    font-size: 0;
    height: 1px;
    overflow: hidden;
    display: block;
}
```

> Credit: ["Add Text Alternate to Social Media Icons" by Sylvia Pellicore](https://github.com/girldevelopit/gdi-website/issues/344)

*Final Results:*

![wave accessibwaveility errors results](./assets/images/wave-accessibility-finalresults.png "wave accessibility errors and alerts results")

[Back to Content](#content)



-------------
-------------
-------------
-------------




## **Testing User Stories**
-----

![screenshot of the welcome section of the website](./assets/images/welcome-screenshot.png "screenshot of the welcome section of the website")
![screenshot of the about me section of the website](./assets/images/about-screenshot.png "screenshot of the about me section of the website")
![screenshot of the services section of the website](./assets/images/services-screenshot.png "screenshot of the services section of the website")
![screenshot of the testimonials section of the website](./assets/images/testimonials-screenshot.png "screenshot of the testimonials section of the website")
![screenshot of the contact section of the website](./assets/images/contact-screenshot.png "screenshot of the contact section of the website")
![screenshot of the footer section of the website](./assets/images/footer-screenshot.png "screenshot of the footer section of the website")

*Crucial User Stories to Test MVP & Validate Hypothesis:*

1. As an **Entrepreneur/Solopreneur**, I want to **register** to Effie's **online workshops** so that I can boost my business' monthly sales.
    > Feature that will be implemented in the next iteration (Training Page: Online Workshops).
2. As a **Tech Startup**, I want to **use** Effie's **free online resources** so that we can create a robust Digital Marketing strategy.
    > Feature that will be implemented in the next iteration (Resources Page: Free Resources).
3. As a **SME**, I want to **book** a **free consultaiton** with Effie so that we can increase our business' online presence and engagement.
    > Feature that will be implemented in the next iteration (Contact Me Page: Calendly Integration).
4. As a **Non-Profit**, I want to **contact** Effie for a **collaboration** and **consulting session** so that we can grow the organization organically.
    > Users can contact Effie through the following: Navigation Bar (Contact), About Me Section (CTA Button), How Can I Help Section (CTA Button), What I Do (CTA Button), Get In Touch Section (Contact Information & Form).
5. As a **Mentee**, I want to **apply** to Effie's **mentorship program** so that I can get the proper guidance to build my professional career.
    > Feature that will be implemented in the next iteration (Services Page: Mentorship Program Applycation).
6. As an **Entry-Level Professional**, I want to **join** Effie's **networking community** so that I can land my first full-time job faster through contacts.
    > Feature that will be implemented in the next iteration (Join Us Page: Join Huasi or Join NetCork Communities).
7. As a **Recent Graduate**, I want to **consume** Effie's **free courses and resources** so that I can launch my business idea.
    > Feature that will be implemented in the next iteration (Training Page: Online Courses & Resources Page: Free Resources).
8. As a **Professional Expat**,I want to **learn** from Effie's successful journey so that I know where to start mine as a new international professional in Ireland.
    > Feature that will be implemented in the next iteration (About Page: Online Video, Effie's Journey).
9. As a **Professional Expat**,I want to **learn** from Effie's successful journey so that I know where to start mine as a new international professional in Ireland.
    > Feature that will be implemented in the next iteration (About Page: Online Video, Effie's Journey).
10. As a **Professional Expat**,I want to **learn** from Effie's successful journey so that I know where to start mine as a new international professional in Ireland.
    > Feature that will be implemented in the next iteration (About Page: Online Video, Effie's Journey).

[Back to Content](#content)

[Return to README.md Document](https://github.com/effiemanyos/ms2-produck/blob/master/README.md)