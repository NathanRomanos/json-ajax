console.log('working');


 $(document).ready(function(){
   $('body').click(function(){
     $(this).css('background-color', 'silver');
   });





   //ajax method
   $.ajax({
     url:'js/MOCK_DATA.json',
     type:'GET',
     data:'json',
     success: function(data){
       console.log(data);
       var i;
       for (i=0; i<data.length; i++){
         document.getElementById('result').innerHTML +=
         '<div class="col col-sm-6 col-md-4 col-lg-4 mx-3">' +
         '<h1>' + data[i].first_name + " " + data[i].last_name + '</h1>' +
         '<h2>' + data[i].gender + '</h2>' +
         '<h3>' + data[i].email + '</h3>' +
         '<img class="img-thumbnail" src="' + data[i].Avatar + '" alt="Avatar">' +

          '</div>';
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
