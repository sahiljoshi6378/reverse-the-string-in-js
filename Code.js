// NOTE :Please change the variable name before using the both codes;

// Reverse a string using reverse method
function reversestr(str){
  // converting the string into array and reverseing it
  var reversedstr =str.split("").reverse();
  //Now adding the whole reversed array into a single string using .JOIN method
  var fullstr = reversedstr.join("");
  //logging the final string
  console.log(fullstr);

}
reversestr('reverse');

// reverse a string by not using the reverse method but using push method
function reversestr(str){
  // converting the string into array 
  var strToArray = str.split("");
  // creating a Empty erray to store the reversed array
  var reversedstr =[];
  // Pushing the every reversed char of the full string by using reverse for loop
  for (var a=strToArray.length -1; a>=0; a--){
    reversedstr.push(strToArray[a]);
  }
  //adding the all reversed array into a single string by using .join method
  var finalStr = reversedstr.join("");
  console.log(finalStr);
}
reversestr('reverse');
