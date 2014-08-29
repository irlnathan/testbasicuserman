/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  foo: function(req, res) {

    /**

    When addressing validation you have two main areas of interest.  The front-end and the back-end model validations.
    The model validations will prevent an attribute from being 

    What are the attributes I'm going to be using as the basis for my user?
      -> email address
      -> password (encrypted)
      -> password confirmation

    Error Handling

      Ask, what are some of things I know I want to prevent during the creation of a user?
        -> I want to assure that the user is using a valid email address format. (back-end and front-end)
        -> I want to make sure the password and password confirmation are equal to each other. (back-end and front-end)
        -> I want passwords that use are of a certain length. (back-end and front-end)
        -> I want passwords that are of a particular strength. (front-end only??????)
        -> I don't want a user to be created with the same email address. (back-end only)
    **/

    User.create({name: req.param('name')}, function(err, user) {
      if(err) {
        // console.log(err.invalidAttributes);
        var myThings = _.map(Object.keys(err.invalidAttributes), function(t){
          return 'Crap:'+t;
        });
        console.log(myThings)
        // console.log(err.model + err.reason);
        // console.log("err is instance of Error: ",  err instanceof Error);
        // console.log("typeof: ", typeof err);
        // console.log("lodash isObject", _.isObject(err));
        // // console.log("lodash values: ", _.values(err));
        // // console.log(err);
        // console.log("JSON.stringify(): ", JSON.stringify(err));
        // console.log("err.toString(): ", err.toString());
        // console.log("lodash _.keys: ", _.keys(err));
        // console.log(err.error);
        // console.log(err.status);
        // console.log(err.summary);

        return res.send(err);

        // var names = _.map( err, function(n){
        //    // n is an array with each object having one property; either a surname or a nickname
        //   return _.reduce(n, function(memo,part){ return _.extend(memo,part); }, {})
        // });

        // _.each(err, function(value, key){
        //   console.log(value);
        //   _.each(value, function(value, key){
        //     console.log(value);
        //   });
        // });
        
        // console.log("stack: ", err.stack);
        // console.log("raw stack: ", rawStack);
      }
      res.send(200);
    });

  },

  unique: function (req, res) {

    User.findOne({email: req.param('email') || null}, function(err, user){
      console.log("the param: ", req.param('email'));

      if (err) return res.negotiate(err);

      if (!user) return res.notFound();

      console.log(user);

      return res.send(200);

    });
  }
	
};

