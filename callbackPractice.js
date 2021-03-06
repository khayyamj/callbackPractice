/* In this repo your job is to write functions to make each function call work properly.
Below is a sample problem

  //code here for sayHi

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay);
   });


and what you should write is the sayHi function that makes the code above work,


   var sayHi = function(str, cb){
    cb(str);
   }

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay); //should alert ('Hi Katie')'
   });


*/



  //Code Here for first
function first(arrNames, cb) {
    var firstName = arrNames[0];
    cb(firstName);
    return firstName;
}

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
first(names,
  function(firstName){
    console.log('The first name in names is ' + firstName)
  }
);



/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




  //Code Here for last
function last(lastName, cb) {
  var final = lastName[lastName.length - 1];
  cb(final);
  return final;
}

last(names, function(lastName){
  console.log('The last name in names is ' + lastName);
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */






  //Code Here for multiply
function multiply(num1, num2, cb) {
  var answer = num1 * num2;
  cb(answer);
  return answer;
}

multiply(4, 3,
  function(answer){
    console.log('The answer is ' + answer); //should console.log 12
})





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





  //Code Here for contains
function contains(arrNames,specName,cb) {
  var result = false;
  for (var i = 0; i < arrNames.length; i++) {
    if(arrNames[i] === specName) {
      result = true;
    }
  }
  cb(result);
  return result;
}

contains(names, 'Colt',
  function(result){
    if(result === true){
      console.log('Colt is in the array');
    } else {
      console.log('Colt is not in the array');
    }
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




    //Code Here for uniq
    function uniq(namesArr,cb) {
        for( var x = 0; x < namesArr.length; x++) {
          for (var y = x+1; y < namesArr.length; y++) {
            if (namesArr[x] === namesArr[y]) {
              namesArr.splice(y,1);
            }
          }
        }
      cb(namesArr);
      return namesArr;
    }

    uniq(names,
        function(uniqArr){
          console.log('The new names array with all the duplicate items removed is ', uniqArr);
    });





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




    //Code Here for each
    function each(nameArr,cb) {
      for (var x = 0; x < nameArr.length; x++) {
        cb(nameArr[x], x)
      }


      return ('');
    }

    each(names, function(item, indice){
      console.log('The item in the ' + indice + ' position is ' + item)
    });

each(names, function(item, indice){
  console.log('The item in the ' + indice + ' position is ' + item)
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





//code here for getUserById
function getUserById(userObj,str,cb) {
 for (var prop in users) {
   if (userObj[prop].id === str) {
     cb(userObj[prop]);

   console.log(userObj[prop].id);
   }
 }
 return ('');
}


var users = [
 {
   id: '12d',
   email: 'tyler@gmail.com',
   name: 'Tyler',
   address: '167 East 500 North'
 },
 {
   id: '15a',
   email: 'cahlan@gmail.com',
   name: 'Cahlan',
   address: '135 East 320 North'
 },
 {
   id: '16t',
   email: 'ryan@gmail.com',
   name: 'Ryan',
   address: '192 East 32 North'
 },
];

getUserById(users, '16t', function(user){
 console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address);
});
