// Your code here.

let person = {
  firstName: 'john',
  lastName: 'Martinez',
  age: 28,
  married: "yes",
  spouseName: "jas alverez"
  
  
}

let person2 = {
  firstName: 'jas',
  lastName: 'alverez',
  married: "yes",
  spouseName: "john Martinez"
}

function getFirstName(person){
return person.firstName
}
// console.log(getFirstName({firstName: 'fisher'}))

function getLastName(person){
  return person.lastName
}
// console.log(getFirstName({lastName: 'fisher'}))

function getFullName(person){
  //  let person = firstName + lastName

  return person.firstName + " "+ person.lastName
}
// console.log(getFullName({firstName: 'john', lastName: 'Martinez'}))


function setFirstName(person, newFirstName){
  person.firstName = newFirstName

}
setFirstName(person, 'zuko')
// console.log(person)


function setAge(person, newAge){
person.age = newAge
}
setAge(person, 30)
// console.log(person)


function giveBirthday(person){
  if(person.age === undefined){
    person.age = 1
  }else if(person.age !== undefined){
    person.age += 1  }
}
giveBirthday(person)
giveBirthday(person2)
// console.log(person)
// console.log(person2)

function marry(person, person2){
    if(person.married === false && person2.married === false)
    person.married = true
    person2.married = true
    person.spouseName = getFullName(person2)
    person2.spouseName = getFullName(person)


}
marry(person, person2)
console.log(person,person2)


function divorce(person, person2){
  person.married = false
  person2.married = false
  delete person.spouseName
  delete person2.spouseName
}
divorce(person,person2)
console.log(person, person2)



// Our code here. Don't touch!
if (typeof getFirstName === 'undefined') {
  getFirstName = undefined
}

if (typeof getLastName === 'undefined') {
  getLastName = undefined
}

if (typeof getFullName === 'undefined') {
  getFullName = undefined
}

if (typeof setFirstName === 'undefined') {
  setFirstName = undefined
}

if (typeof setAge === 'undefined') {
  setAge = undefined
}

if (typeof giveBirthday === 'undefined') {
  giveBirthday = undefined
}

if (typeof marry === 'undefined') {
  marry = undefined
}

if (typeof divorce === 'undefined') {
  divorce = undefined
}


module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
}
