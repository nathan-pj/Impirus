# Website Documentation
This file aims to explain different aspects of the website and how to add more content to it's different sub pages.

## Website Directory Structure 
`>` = directory/folder
```
> assets
    > based
    > livingThings
    > thumbnails
    > videos

> css
    about.css
    home.css
    modal.css
    projects.css
    shared.css

> documentation

> pages
    about.html
    index.html
    projects.html

> scripts
    about.js
    home.js
    modal.js
    projects.js
    scroll.js
    shared.js

```

## Directories and Important Files 

### >assets

This directory includes all images, fonts and videos to be used in the website.

>assets>based

Includes all images for the Based collaboration. 

>assets>livingThings

Includes all images for the Living Things collaboration. 

>assets>thumbnails

Includes all thumbnails for videos. Keep the sizes around 500x500 pixels for better performance. The aspect ratio can still be different for every video, so they do not have to be *exactly* 500x500. 

>assets>videos

Includes all the videos to be displayed. Always check the size of a video before you add it. I'm saying this since I know you export your renders in very high quality.

### >css
Includes all css files. Each page has it's own css file, these have the same name as their corresponding HTML-file. For example, `projects.css` belongs to `projects.html`. OBS, `home.css` is an exception of this rule, since `home.css` belongs to index.html. 

`shared.css` contains styling that is applied to every page. This file mostly contains styling for the navbar and footer.

`modal.css` contains styling for the modal (windows XP window). 

### >documentation
Contains documentation for the website.

### >pages
Contains the HTML-file for every page. The HTML contains the structure of the elements being shown on the website, but you know this already. 

`about.html` = contact page

`index.html` = home page

`projects.html` = projects page

### >scripts
Contains all JavaScript logic for the website. Every HTML-file has it's corresponding JavaScript file, similar to the css files. OBS, `home.js` is used for the home page (`index.html`).

`modal.js` contains all logic for the modal (windows XP window). 

`scroll.js` contains all logic for the smooth scrolling

`shared.js` contains logic used in every page. Mostly consists of navbar/footer logic.

## How to Add More Projects
You will complete more projects, and it's only natural that you will want to add these to the website. I have tried making the process as easy as possible, given our limitations. 

1. **Add All Needed Files**
All files need to be added to the `assets` folder. Make sure you have scaled all of your images so that they are a moderate size. Around 500x500 pixels is most optimal, 1500x1500 pixels should be the absolute max.

2. **Add the HTML for the New Project in `projects.html`**
First you must choose which group the project will be displayed within. For example, any element with the class `projectsGroup` is a classic group with three projects on every row. 

Then you can implement the project within your chosen group. Your project should be of the following structure:
```
<div class="projectDiv">
    <img src="../assets/image.jpg" alt="text description of image" class="project"  onclick='openModal(items[A], B);'>
</div>
```

"image.jpg" will be the image displayed in the grid layout. 

OBS! The A and B values being used in the `openModal()` will later be replaced. 

3. **Add the Project to the `items` Array**
Adding the new project to the `items` array is the trickiest step. The array contains every project that can be displayed in the modal. 

This example aims to explain the structure of the array:
```
const items = [
    [ // item 1
        ['path to video in text', 'path to second image', 'path to third image'], // Each image/video will be it's own slide in the carousel
        "project title", 
        ["video description", "second img description", "third img description"],
        "A short text describing the media",
        ["thumbnail for video"] // Should not be included if there is no video!!
    ], // item 2
        ['path to image in text'], 
        "project title", 
        ["Project description"],
        "A short text describing the image",
    ]
    . . .  // (and so on)
]
```

You may have an item that has both videos and images. 

You may have an item with only one image or video

OBS! I have not yet tested if you can have multiple videos in one item, but it should work. 

Every element in the array contains the content needed to display a project in the modal. To clarify, all of the following code is what makes *a single project* that can be shown in the modal. 

```
[
    ['path to video in text', 'path to second image', 'path to third image'], // Each image/video will be it's own slide in the carousel
    "project title", 
    ["video description", "second img description", "third img description"],
    "A short text describing the media",
    ["thumbnail for video"] // Should not be included if there is no video!!
]
```

4. **Find out Which Index Your Project has in the Array**
The `items` array is an ordered list where every project has it's unique number. This number is known as the index of a project. The first project in the array, i.e. the first one added at the top, has the index 0. The second project has the index 1, the third project has the index 2 and so on. 

It's okay if you get it wrong, you will notice it later. 

5. **Circle Back to `projects.html` and add the Project Index**
In step 2, we used temporary placeholders which we called A and B. 

Replace A with your project index number.

Replace B with the slide you want to display.

B is the index number for which image/video you want to display first from your project. This index also starts at 0 and continues to 1, 2 etc. **If you only have one image/video/slide in your project, then B should be 0.**

If you have multiple images/videos/slides, then you can choose which slide should be displayed first. **For example, if you have three images/videos/slides and you want to display the second one first, then B should be 1.**

And with that, you should be done! If you enter the wrong index number for A or B then you will notice this when you open the modal. Try out different numbers if you're confused, you can always play around and see what happens!

## Deleting Projects
Removing projects is pretty much the same process as adding them but in reverse (you delete everything added from the previous step-by-step guide).

BUT! Do not remove the project from the `items` array. Keep it and life will be easier, trust me. Otherwise you would have to change every index number for every project to make up for the removed one. A single item in the array doesn't take much space since it's just text, so no worries on the performance department. 

## Adding Frosted Glass to an Element
To add the frosted glass effect to an element, simply add the `frostedGlass` class to your element in the HTML-file. 

Example usage:
```
<div class="frostedGlass"></div>
```

You can tweak the styling for the frosted glass inside `css>shared.css`.

## Adding Button Styling
There's a class defined that will make any button look like all the other buttons on the website. To use it, simply add the `button` class to your element (so far I've only used it on anchor elements (`<a>`)).

Example usage:
```
<a class="button"></a>
```

Additional styling may be needed.

## Adding Internal Links
Adding links to internal pages (that lead to pages WITHIN THIS website) can be done with an onclick method, like so:
```
onclick="redirectTo('./HTML file name')"
```

Example usage:

```
<a onclick="redirectTo('./about.html')">Contact us</a>
```

Using this method will allow the smooth page transitions that your website uses. 

## Adding External Links
Adding links to other websites (on the world wide web), such as LinkedIn or Google, should be done with a standard href attribute. 

Example usage:
```
<a href="https://twitter.com/impirus3d">Take me to the Impirus Twitter!</a>
```

## Adding Reviews
With time, you will also get more reviews that you may want to include in your website. Reviews can be either a *video review* or a *text review*. You could experiment and implement a review with both video and text, but you might need to add additional styling.

### Text Reviews
Adding a text review is pretty easy. 
1. **Add the Necessary Diles**
Add an image of the company logo in the `assets` folder. 

2. **Find the HTML Element in Which You Want to Place Your Review**
If you want to add your review to the home page, then search for the element with the class `reviewsContainer`. 

3. **Add the Required HTML Structure**
The structure should be like this:
```
<div class="reviewCard reviewCardOdd frostedGlass" style="background: rgba(0, 0, 0, 0.7);">
    <div class="companyImgContainer">
        <img class="companyImg" src="../assets/clientLogo.png" alt="The company logo for Client company name">
    </div>
    <div class="reviewText">
        <h3 class="clientName">Client name</h3>
        <h4 class="clientCompany">Founder of <i>Client company name</i></h4>
        <blockquote class="clientQuote" id="uniqueId"></blockquote>
    </div>
</div>
```

OBS! Replace all placeholder text, such as "Client company name". The image source from the example should be replaced with your own image. 

**uniqueId** should be replaced with your unique ID. This ID will be used to implement the quote from your client. 

4. **Navigate to >scripts>home.js**
5. **Implement the needed code**
Implement the following code:
```
const uniqueVariable = [
    "'My big quote'"
];

typewriter(uniqueVariable, "uniqueId");
```

OBS! Replace `uniqueVariable` with a unique name. Replace `uniqueId` with the same unique ID from step 2.

And you should be done!

### Video Reviews
1. **Add the Necessary Files**
Add an image of the company logo and the video review in the `assets` folder. Remember: all videos should go in the `videos` sub-directory. 
2. **Find the HTML Element in Which You Want to Place Your Review**
If you want to add your review to the home page, then search for the element with the class `reviewsContainer`. 

3. **Add the HTML Structure**
```
<div class="reviewCard reviewCardEven reviewCardVideo frostedGlass"  style="background: rgba(0, 0, 0, 0.7);">
    <div class="reviewText">
        <h3 class="clientName">Client name</h3>
        <h4 class="clientCompany"><i>Client company name</i>
        <video class="reviewVid" src="../assets/videos/myVideo.mp4" controls="" alt="A video review from Client company name" poster="../assets/thumbnails/myThumbnail.png"></video>
    </div>
    <div class="companyImgContainer">
        <img class="companyImg" src="../assets/clientLogo.png" alt="The company logo for Client company name">
    </div>
</div>
```

OBS! Replace all placeholder text, such as "Client company name". 

`poster="../assets/thumbnails/myThumbnail.png"` will decide the thumbnail of the video. Replace "myThumbnail.png" with your thumbnail. 

`src="../assets/videos/myVideo.mp4"` will implement the actual video. Replace "myVideo.mp4" with your video. 

Replace all sources from the example with your own sources. 

And you're done!

