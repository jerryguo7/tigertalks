/*
 * @student: Jerry Guo
 * @B00779028
 * @year: 2018
 */
    //The blog images are placeholder images used from placeimg.com; accessed on 4 Dec. 2018
    var picture = ["images/placeimg_360_240_people.jpg", "images/placeimg_360_240_animals.jpg", "images/placeimg_360_240_arch.jpg", 
                   "images/placeimg_360_240_nature.jpg", "images/placeimg_360_240_tech.jpg", "images/placeimg_360_240_animals1.jpg", 
                   "images/placeimg_360_240_arch1.jpg", "images/placeimg_360_240_people1.jpg",
                   "images/placeimg_360_240_nature1.jpg", "images/placeimg_360_240_tech1.jpg"];

    //Specific part of the blog page
    var numOfBlog = ["blogs.html#one", "blogs.html#two", "blogs.html#three", "blogs.html#four", "blogs.html#five", 
                     "blogs.html#six", "blogs.html#seven", "blogs.html#eight", "blogs.html#nine", "blogs.html#ten"];

    //Choose the image and anchor link by the index of the slide
    function imageSlider(slideNum) {
        for (var i = 0; i <= (slideNum % 10); i++) {
            document.getElementById("topImg").style.backgroundImage = "url(" + picture[i] + ")"; 
            document.getElementById("topImg").style.backgroundSize = "cover";
            document.getElementById("imgLink").href = numOfBlog[i];
        }              
    }

    //State the index of the slide
    var slideNum = 10000;
    imageSlider(slideNum);

    //Change the index of the slide
    function switchSlide(leftOrRight) {
        var changeSlide = (slideNum += leftOrRight);
        imageSlider(changeSlide);
        console.log(changeSlide);
    }

