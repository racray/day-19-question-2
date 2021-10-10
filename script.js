function myFunction(){
    var tbl = document.getElementById("myTable");
    var row = tbl.insertRow();
    var cell1 = row.insertCell();
    var cell2 = row.insertCell();
    var cell3 = row.insertCell();
    var cell4 = row.insertCell();
    var cell5 = row.insertCell();
    var cell6 = row.insertCell();
    var cell7 = row.insertCell();
    var cell8 = row.insertCell();
    var cell9 = row.insertCell();
    cell1.innerHTML = document.getElementById("fname").value;
    cell2.innerHTML = document.getElementById("lname").value;
    cell3.innerHTML = document.getElementById("address").value;
    cell4.innerHTML = document.getElementById("pincode").value;
    cell5.innerHTML = document.getElementById("gend").value;
    cell6.innerHTML = document.getElementById("pizza").value;
    cell7.innerHTML = document.getElementById("burger").value;
    cell8.innerHTML = document.getElementById("state").value;
    cell9.innerHTML = document.getElementById("country").value;


}