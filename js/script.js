var count = 0;

function taptoLike(check, currentelement, nextelementid){
  console.log(check, currentelement);
  var id = currentelement.id;
  if (check === "x") {
    document.getElementById(id).style.display = "none";
    document.getElementById(nextelementid).style.display = "block";
  } else if (check === "y") {
    document.getElementById(id).style.display = "none";
    document.getElementById(nextelementid).style.display = "block";
  } else {
    console.log("An error has occured");
  }
  count++;
  console.log(count);
}
