console.log("connected");

// gets name and users comment
var userN = document.getElementById("name");
var userC = document.getElementById("comment");

function submitC(){
  if(userN.value == "" || userC.value == ""){
    console.log("Field is missing");
    window.alert("Your missing Info Try Again");

  }
  else{
    // creats a container for comments
    var commentBox = document.createElement("section");
    commentBox.className = "container-fluid mx-auto cBox";

    // puts the container in the body
    document.body.appendChild(commentBox);

    // creates a box inside align as well
    var commentHolder = document.createElement("div");
    commentHolder.className = "col-7 mx-auto cHolder";
    commentBox.appendChild(commentHolder);

    // creates an h4 and p element inside the box
    var cH4 = document.createElement("h4");
    var cPar = document.createElement("p");
    cH4.innerText = userN.value;
    cPar.innerText = userC.value;
    commentHolder.appendChild(cH4);
    commentHolder.appendChild(cPar);
    console.log("comment Added");
  }
};
