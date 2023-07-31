<html>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Calculator</title>
<link rel="stylesheet" href="styles.css">
</head>
<body>
<div id="centr">
<div id="bl"><h1>My Simple Calculator</h1></div><hr>
<h3>Enter the Number-1:</h3>
<input type="number" id="n1">
<h3>Enter the Number-2:</h3>
<input type="number" id="n2"><br><br><hr>


<h3>Addition:</h3>
<button id="b1" type="button" onclick="add()">+</button>
<p id="button1" placeholder="ans" class="add"></p><hr>

<h3>Subraction:</h3>
<button id="b2" type="button" onclick="sub()">-</button>
<p id="button2" placeholder="ans" class="sub"></p><hr>






<!-- <script src="calc.js"></script> -->

<script>


function add(){
    let a=parseInt(document.getElementById("n1").value);
    let b=parseInt(document.getElementById("n2").value);
    let c=a+b;
document.getElementById("button1").innerHTML="Addition of given value is "+c
}

function sub(){
    let a=parseInt(document.getElementById("n1").value);
    let b=parseInt(document.getElementById("n2").value);
    let c=a-b;
document.getElementById("button2").innerHTML="Subraction of given value is "+c
}



</script>
</body>
</html>