/*
 * @student: Jerry Guo
 * @B00779028
 * @year: 2018
 */

    /* Save the parsed value in a JavaScript variable */
    var randomText = JSON.parse(blogDataMultipleAuthors);

    /* Use this function to output the content in JSON */
    function output() {
        /* Part One */
        document.getElementById("heading1").innerHTML = randomText[0].PostTitle;
        document.getElementById("date1").innerHTML = randomText[0].PostDate;
        document.getElementById("person1").innerHTML = randomText[0].PostAuthor;
        document.getElementById("paragraph1").innerHTML = randomText[0].PostDetail;
        /* Part Two */
        document.getElementById("heading2").innerHTML = randomText[1].PostTitle;
        document.getElementById("date2").innerHTML = randomText[1].PostDate;
        document.getElementById("person2").innerHTML = randomText[1].PostAuthor;
        document.getElementById("paragraph2").innerHTML = randomText[1].PostDetail;
        /* Part Three */
        document.getElementById("heading3").innerHTML = randomText[2].PostTitle;
        document.getElementById("date3").innerHTML = randomText[2].PostDate;
        document.getElementById("person3").innerHTML = randomText[2].PostAuthor;
        document.getElementById("paragraph3").innerHTML = randomText[2].PostDetail;
        /* Part Four */
        document.getElementById("heading4").innerHTML = randomText[3].PostTitle;
        document.getElementById("date4").innerHTML = randomText[3].PostDate;
        document.getElementById("person4").innerHTML = randomText[3].PostAuthor;
        document.getElementById("paragraph4").innerHTML = randomText[3].PostDetail;
        /* Part Five */
        document.getElementById("heading5").innerHTML = randomText[4].PostTitle;
        document.getElementById("date5").innerHTML = randomText[4].PostDate;
        document.getElementById("person5").innerHTML = randomText[4].PostAuthor;
        document.getElementById("paragraph5").innerHTML = randomText[4].PostDetail;
        /* Part Six */
        document.getElementById("heading6").innerHTML = randomText[5].PostTitle;
        document.getElementById("date6").innerHTML = randomText[5].PostDate;
        document.getElementById("person6").innerHTML = randomText[5].PostAuthor;
        document.getElementById("paragraph6").innerHTML = randomText[5].PostDetail;
        /* Part Seven */
        document.getElementById("heading7").innerHTML = randomText[6].PostTitle;
        document.getElementById("date7").innerHTML = randomText[6].PostDate;
        document.getElementById("person7").innerHTML = randomText[6].PostAuthor;
        document.getElementById("paragraph7").innerHTML = randomText[6].PostDetail;
        /* Part Eight */
        document.getElementById("heading8").innerHTML = randomText[7].PostTitle;
        document.getElementById("date8").innerHTML = randomText[7].PostDate;
        document.getElementById("person8").innerHTML = randomText[7].PostAuthor;
        document.getElementById("paragraph8").innerHTML = randomText[7].PostDetail;
        /* Part Nine */
        document.getElementById("heading9").innerHTML = randomText[8].PostTitle;
        document.getElementById("date9").innerHTML = randomText[8].PostDate;
        document.getElementById("person9").innerHTML = randomText[8].PostAuthor;
        document.getElementById("paragraph9").innerHTML = randomText[8].PostDetail;
        /* Part Ten */
        document.getElementById("heading10").innerHTML = randomText[9].PostTitle;
        document.getElementById("date10").innerHTML = randomText[9].PostDate;
        document.getElementById("person10").innerHTML = randomText[9].PostAuthor;
        document.getElementById("paragraph10").innerHTML = randomText[9].PostDetail;
    }


    output(); /* Call the function */