$(function() {
     var selectedClass = "";
     $(".filter").click(function(){
     selectedClass = $(this).attr("data-rel");
     $("#gallery").fadeTo(100, 0.1);
     $("#gallery div").not("."+selectedClass).fadeOut().removeClass('animation');
     setTimeout(function() {
     $("."+selectedClass).fadeIn().addClass('animation');
     $("#gallery").fadeTo(300, 1);
     }, 300);
     });
     });

     $(document).on('click', function(){
          var imageData = $(this).attr('data-name');
          var queryURL = 'https://api.pexels.com/v1/search?query=' + imageData +'&api_key=563492ad6f917000010000019d81464aa4b8414494f2596cc2f8bd69+query&per_page=15&page=1';
          console.log('test');
          $.ajax({
              url: queryURL,
              method: 'GET'
          }).then(function(response) {
              console.log(response);
          }

     // $('#submit-btn').on('click', function(){
     //      var searchImage = 
     //      $.ajax({
     //          url: "<https://api.unsplash.com/search/users?page=1&query=nas>; rel="first", <https://api.unsplash.com/search/users?page=1&query=nas>; rel="prev", <https://api.unsplash.com/search/users?page=3&query=nas>; rel="last", <https://api.unsplash.com/search/users?page=3&query=nas>; rel="next",
     //          method: 'GET /search/users',
     //          success: function(result) {
     //               console.log(result);
     //              unsplash = result;
     //              $('.img-container').each(function(i) {
     //                  var i = Math.floor((Math.random() * 10) + 1);
     //                  $(this).attr('src', unsplash[i].urls.regular);//[full, small, regular, raw, thumb]
     //              });
                  
     //          }
     //      });
     // }
          
          
      
     
      //Access Key: _XzZqtnZZ7A19Ugifo84pXHuq2WIaP9E0fOXLWcmm7o
      //Secret Key: FWTvfX0T0q2k4_ntQ8tRl0P_UbJXY5m7OMg0dt-DYxs
     