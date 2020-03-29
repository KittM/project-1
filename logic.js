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
    var queryURL = "https://api.unsplash.com/search/photos/?query=" + picture + "client_id=accessKey";
    
    // Perfoming an AJAX GET request to our queryURL
    $.ajax({
        url: queryURL,
        method: 'GET'
    })
    
    // After the data from the AJAX request comes back
        .then(function (response) {

        //getting images from API and setting up their layout
               for (var i = 0; i < response.data.length; i++) {

        //display images and ratings
                    $('.gallery').empty();
                    var pictureDiv = $('<div class= "card" id= "search-item">');

        // variable for image
               var searchImage = response.data[i].images.url;

       //Creating and storing an image tag and assiging attributes to image searched for to make into image
               var image = $('<img>');
               image.attr('src', searchImage);
               image.addClass('pictureImage');

               //attaching rating to bottom of div
               pictureDiv.append(p);
               //attaching image to top of div
               pictureDiv.prepend(image);
               $('.gallery').append(pictureDiv);
        }
    })
})

//function for adding new button to subject array once a user runs a search for the subject
$('.btn').on('click', function (event) {

    event.preventDefault();
    var newSearch = $('input').eq(0).val().trim();
    subjectArray.push(newSearch);
    setButtons(subjectArray, 'searchButton', '#buttonsArea');   
});