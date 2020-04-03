//$(function() {
// var selectedClass = "";
// $(".filter").click(function(){
// selectedClass = $(this).attr("data-rel");
// $("#gallery").fadeTo(100, 0.1);
// $("#gallery div").not("."+selectedClass).fadeOut().removeClass('animation');
// setTimeout(function() {
// $("."+selectedClass).fadeIn().addClass('animation');
// $("#gallery").fadeTo(300, 1);
// }, 300);
// });
// });


$(document).ready(function () {
    setButtons(subjectArray, 'searchButton', '#buttonsArea')

});

var unsplashkey = unsplashkey;

//set up array that will populate the buttons
var subjectArray = ["Sports", "Nature", "Animals", "Buildings", "Fashion", "Abstract"];

//set up buttons and have the buttons house variables from array of subjects stored in the variable "subjectArray"
function setButtons(subjectArray, classToAdd, areaToAddTo) {
    $(areaToAddTo).empty();
    for (var i = 0; i < subjectArray.length; i++) {
        var subjectbtn = $('<button class="btn btn-primary btn-outline-black waves-effect filter">');
        subjectbtn.addClass(classToAdd);
        subjectbtn.attr('data-type', subjectArray[i]);
        subjectbtn.text(subjectArray[i]);
        $(areaToAddTo).append(subjectbtn);
    }
};



//set up what happens once you enter subject area in the search box and click the "submit" button
$(document).on('click', '.searchButton', function () {

    $('.gallery').empty();
    //assign data attribute to search
    var picture = $(this).attr('data-type');
    var queryURL = "https://api.unsplash.com/search/photos?query=" + picture + "&client_id=" + unsplashkey + "&per_page=50";
    //insert access key between "= per"

    // Perfoming an AJAX GET request to our queryURL
    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function (response) {
        console.log(response);
        $('.gallery').empty();
        //getting images from API and setting up their layout
        for (var i = 0; i < response.results.length; i++) {

            //display images and ratings

            var pictureDiv = $('<div class="mb-3 pics animation all 2">');
            pictureDiv.attr('data-toggle', 'modal');
            pictureDiv.attr('data-target', '#m1')

            // variable for image
            var searchImage = response.results[i].urls.small;

            //Creating and storing an image tag and assiging attributes to image searched for to make into image
            var image = $('<img>');
            image.attr('src', searchImage);
            image.addClass('img-fluid');
            //    console.log(image)

            pictureDiv.prepend(image);
            $('.gallery').append(pictureDiv);

        }
    })


})

$('#gallery').on('click', '.pics', function () {

    var queryURL = 'https://api.kanye.rest';

    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function (response) {
        console.log(response.quote + ' ~Kanye West');

        var Ye = `<blockquote>`;
        Ye += `<p>${response.quote}</p>`;
        Ye += `<footer>~Kanye</footer>`;
        Ye += `</blockquote>`;

        $('.modal-header').empty();
        $('.modal-header').append(Ye);

    })


    var modalBody = $('.modal-body');
    modalBody.empty();
    $(this).first().clone().appendTo(modalBody);


})


//function for adding new button to subject array once a user runs a search for the subject
$('.btn').on('click', function (event) {

    event.preventDefault();
    var newSearch = $('input').eq(0).val().trim();
    if (newSearch.length > 0) {
        subjectArray.push(newSearch);
        setButtons(subjectArray, 'searchButton', '#buttonsArea');
    }
});



