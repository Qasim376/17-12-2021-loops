
 var students = ["Ramish", "1","Ayyan","Qasim"];
 students[4] = "Shahzaib";

// //for loop//
 var output = "" ;
for (var i = 0; i < students.length - 1; i++) {
   output += students[i] + "<br>";
   if (i == 1) {continue};
}
 document.getElementById("demo").innerHTML = output;


 //while loop//
 var output = "";
 var j = 0;
// while (j < students.length) {
//    output += students[j] + "<br>";
//    j++;
// }
// document.getElementById("demo").innerHTML = output;

// do while loop//
// do {
//    output += students[j] + "<br>";
//    j++
//    document.getElementById("demo").innerHTML = output;
// }
// while (j < students.length) 
