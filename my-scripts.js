//create count in the database
if (localStorage.getItem("count")== null) {
localStorage.setItem("count",0)
}

//update HTML to reflect database count
function update(){
document.getElementById("count").innerHTML = localStorage.getItem("count")
}

update()

//add 1 to count
function plusOne(){
localStorage.setItem("count", Number(localStorage.getItem("count")) + 1)
update()
}

//add reset
function reset(){
	if (confirm("do you want to reset?")) {localStorage.setItem("count", 0)
	}
	update()
}