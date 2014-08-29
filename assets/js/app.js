$(document).ready(function(){

  // $('#signupButton').on('click', function(){
    // var name = '';
    // $.ajax('/user/foo', {
    //   type: 'POST',
    //   data: {
    //     name: 'john'
    //   },
    //   success: function(result) {
    //     console.log("This is the result: ", result);
    //   },
    //   // parameters of interest
    //   // statusText: "Bad Request"
    //   error: function(err) {
    //     console.log("err: ", err);
    //     console.log("err.responseJSON: ", err.responseJSON);
    //     console.log("err.responseJSON.error: ", err.responseJSON.error);
    //     console.log("err.responseJSON.status: ", err.responseJSON.status);
    //     console.log("err.responseJSON.summary: ", err.responseJSON.summary);

    //     console.log("err.responseJSON.invalidAttributs.name: ", err.responseJSON.invalidAttributes.name[0]);
    //     console.log("err.responseJSON.invalidAttributs.name: ", err.responseJSON.invalidAttributes.name[0].value);
    //     console.log("err.responseJSON.invalidAttributs.name: ", err.responseJSON.invalidAttributes.name[0].rule);
    //     console.log("err.responseJSON.invalidAttributs.name: ", err.responseJSON.invalidAttributes.name[0].message);
    //   }
    // });
  // });

  // $( "#signup" ).submit(function(e) {
  //   console.log( "Handler for .submit() called." );
  //   e.preventDefault();
  //   var form = $(this).serialize();
  //   var email = $('#email').val();
  //   // $.ajax('/user/foo', {
  //   //     type: 'POST',
  //   //     data: form,
  //   //     success: function(result) {
  //   //       console.log("This is the result: ", result);
  //   //     },
  //   //     // parameters of interest
  //   //     // statusText: "Bad Request"
  //   //     error: function(err) {
  //   //       console.log("err: ", err);
  //   //       console.log("err.responseJSON: ", err.responseJSON);
  //   //       console.log("err.responseJSON.error: ", err.responseJSON.error);
  //   //       console.log("err.responseJSON.status: ", err.responseJSON.status);
  //   //       console.log("err.responseJSON.summary: ", err.responseJSON.summary);

  //   //       console.log("err.responseJSON.invalidAttributs.name: ", err.responseJSON.invalidAttributes.name[0]);
  //   //       console.log("err.responseJSON.invalidAttributs.name: ", err.responseJSON.invalidAttributes.name[0].value);
  //   //       console.log("err.responseJSON.invalidAttributs.name: ", err.responseJSON.invalidAttributes.name[0].rule);
  //   //       console.log("err.responseJSON.invalidAttributs.name: ", err.responseJSON.invalidAttributes.name[0].message);
  //   //     }
  //   //   });
  // });

  // $( "#signup" ).submit(function(e) {
  //   console.log( "Handler for .submit() called." );
  //   e.preventDefault();
  //   var email = $('#email').val();
  //     $.ajax('/user/unique', {
  //     type: 'GET',
  //     data: {
  //       email: email
  //     },
  //     success: function(result) {
  //       $('#stop').css({"color":"green"});
  //       console.log("This is the result: ", result);
  //     },
  //     // parameters of interest
  //     // statusText: "Bad Request"
  //     error: function(err) {
  //       $('#stop').css({"color":"red"});
  //       console.log("err: ", err);
  //       // console.log("err.responseJSON: ", err.responseJSON);
  //       // console.log("err.responseJSON.error: ", err.responseJSON.error);
  //       // console.log("err.responseJSON.status: ", err.responseJSON.status);
  //       // console.log("err.responseJSON.summary: ", err.responseJSON.summary);

  //       // console.log("err.responseJSON.invalidAttributs.name: ", err.responseJSON.invalidAttributes.name[0]);
  //       // console.log("err.responseJSON.invalidAttributs.name: ", err.responseJSON.invalidAttributes.name[0].value);
  //       // console.log("err.responseJSON.invalidAttributs.name: ", err.responseJSON.invalidAttributes.name[0].rule);
  //       // console.log("err.responseJSON.invalidAttributs.name: ", err.responseJSON.invalidAttributes.name[0].message);
  //     }
  //   });
  // });
  

  // $('#email').keypress(function(e){
  $('#email').keyup(function(){

    //regular expression test for email
    var re = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
    // var re = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;



    // console.log("keys pressed.");
    var email = $('#email').val();
    
    // Test for proper email format
    if (re.test(email) === false) {
      $('#emailFormat').css({"color":"red"});
    } else {
      $('#emailFormat').css({"color":"green"});
    }

    // Test for min
    if (email.length < 5) {
      $('#emailMin').css({"color":"red"});
    } else {
      $('#emailMin').css({"color":"green"});
    }

    // Is the email value unique?
    $.ajax('/user/unique', {
      type: 'GET',
      data: {
        email: email
      },
      success: function(result) {
        $('#emailUnique').css({"color":"red"});
        console.log("This is the result: ", result);
      },
      // parameters of interest
      // statusText: "Bad Request"
      error: function(err) {
        $('#emailUnique').css({"color":"green"});
        console.log("err: ", err);
            console.log("val of email: ", email);

        // console.log("err.responseJSON: ", err.responseJSON);
        // console.log("err.responseJSON.error: ", err.responseJSON.error);
        // console.log("err.responseJSON.status: ", err.responseJSON.status);
        // console.log("err.responseJSON.summary: ", err.responseJSON.summary);

        // console.log("err.responseJSON.invalidAttributs.name: ", err.responseJSON.invalidAttributes.name[0]);
        // console.log("err.responseJSON.invalidAttributs.name: ", err.responseJSON.invalidAttributes.name[0].value);
        // console.log("err.responseJSON.invalidAttributs.name: ", err.responseJSON.invalidAttributes.name[0].rule);
        // console.log("err.responseJSON.invalidAttributs.name: ", err.responseJSON.invalidAttributes.name[0].message);
      }
    });
  });
});