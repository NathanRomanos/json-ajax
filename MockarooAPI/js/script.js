console.log('working');


 $(document).ready(function(){
   $('body').click(function(){
     $('h1').css('color', 'gainsboro');
   });





   //ajax method
   $.ajax({
     url:'https://my.api.mockaroo.com/plant.json?key=8b926d70',
     type:'GET',
     data:'json',
     success: function(data){
       console.log(data);
       var i;
       for (i=0; i<data.length; i++){
         document.getElementById('result').innerHTML +=
         '<div class="myRow-card">' +
          '<div class="myRow-image-container">' +
            '<img src="'+ data[i].image +'" class="myRow-image" alt="plant image">' +
          '</div>' +
          '<div class="myRow-text">' +
            '<h2>' + data[i].name + '</h2>' +
            '<h5>' + 'scientific name: ' + data[i].sciName +
            '<br>' + 'family name: ' + data[i].family +
            '</h5>' +
          '</div>' +
         '</div>'
       }
     },
     error: function(){
       console.log('error')
     }
   });





 });

// // Jaascript data - array of objects
// var jsData = [
//   {
//     name : "Peter",
//     age : 50,
//   },
//   {
//     name : "George",
//     age : 25,
//   }
// ];
//
// console.log(jsData);
//
//
// // displaying js objects in the browser window
// var i;
//
// for(i=0; i<jsData.length; i++) {
//   document.getElementById('result').innerHTML +=
//   '<h1>' + jsData[i].name + ' is ' +
//   jsData[i].age + ' years old' + '</h1>';
// }
//
//
//
// // json data
// var jsonData = [
//   {
//     "name" : "Lucy",
//     "age"  : 12
//   },
//   {
//     "name" : "Mark",
//     "age"  : 17
//   }
// ]
//
// console.log(jsonData)
//
// // displaying json objects in the browser window
// var j;
// for(j =0; j < jsonData.length; j++) {
// document.getElementById('result').innerHTML +=
//     '<h1>' + jsonData[j].name +' is ' +
//      jsonData[j].age + ' years old</h1>';
// };
//
//
// // retrieving json data from an extrenal file
//
// var person = JSON.parse(myData);
// console.log(person);
//
//
// var k;
// for(k=0; k<person.length; k++){
//   document.getElementById('result').innerHTML +=
//   '<h1>' + person[k].name +' is ' +
//    person[k].age + ' years old</h1>';
// }
