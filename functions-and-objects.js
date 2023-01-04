function getName (arr) {
    return arr.name
}
console.log(getName({name: 5656}));


// const person = {
//     firstname: 'Akhmad',
//     lastname: 'Kuduzow',
//     age: 31
//   };
  function getNames (jerson) {
    return [jerson.firstname, jerson.lastname]
  }
  console.log(getNames(person)); // в консоле должно быть ['Akhmad', 'Kuduzow']  

  function concatNames (obj, lastname) {
    return obj.firstname +' ' + lastname
  }
  console.log(concatNames(person, 'Tsugaev')); 

  function correctName (arr) {
    if(arr.fathername === undefined) {
      return arr.firstname
    } else {
      return arr.firstname +' '+ arr.lastname +' ' + arr.fathername
    }
  }
  console.log(correctName(firstPerson)); 
  console.log(correctName(secondPerson));