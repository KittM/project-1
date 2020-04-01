

//Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyB-nMolmk62DCS_T9_DbsW5GXNOQh8OIK8",
    authDomain: "project-1-a8c3a.firebaseapp.com",
    databaseURL: "https://project-1-a8c3a.firebaseio.com",
    projectId: "project-1-a8c3a",
    storageBucket: "project-1-a8c3a.appspot.com",
    
  };
  // Initialize Firebase
  // firebase.initializeApp(firebaseConfig);
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }


  var db = firebase.database();

  $('#save-changes').on('click', function(e){
    event.preventDefault();

    // var storeEmail = $('.store-email').val().trim();
    // var storePass = $('.store-pass').val().trim();

    // db.ref().push({
    //     storeEmail: storeEmail,
    //     storePass: storePass
    //   });

    //   $('.store-email').val('');
    //   $('.store-pass').val('');
    create_account();


})

function create_account(){
    var storeEmail = $('.store-email').val().trim();
    var storePass = $('.store-pass').val().trim();
  console.log(storeEmail, storePass);
    firebase.auth().createUserWithEmailAndPassword(storeEmail, storePass).catch(function(error) {
      
      // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
  }

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      // window.location = 'index.html';
      location.href = 'index.html';


    } else {
      // No user is signed in.
        alert('Incorrect Username or Password');
    }
    console.log(user);
  });

  $('#login-btn').on('click', function(e){
    e.preventDefault();

    login();

  })
  
  function login(){
      var userEmail = $('.login-email').val().trim();
      var userPass = $('.login-pass').val().trim();

      firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        window.alert('Error: ' + errorMessage);
      });
  }


  $('#sign-out').on('click', function(){
    firebase.auth().signOut();
    window.location = 'contribute.html';
  })

  



    
          
          
      
     