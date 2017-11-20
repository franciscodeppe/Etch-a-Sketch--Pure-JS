let hoverIn = e => {
    e.target.style.background = "teal";
  };
  
  let createSquares = () => {
    main = document.getElementById("main");
    main.innerHTML = "";
  
    let x = document.getElementById("my-input").value;
  
    x = x * x;
  
    let y = 0;
    for (let i = 0; i < x; i++) {
      let block = document.createElement("div");
      block.style.width = "20px";
      block.style.height = "20px";
      block.style.background = "grey";
      block.classList.add("object");
      block.setAttribute("id", y);
      block.addEventListener("mouseover", hoverIn);
      y++;
      document.getElementById("main").appendChild(block);
    }
  };
  
  let reset = () => {
    var x = document.getElementById("main");
    var y = x.getElementsByClassName("object");
    var i;
    for (i = 0; i < y.length; i++) {
      y[i].style.backgroundColor = "grey";
    }
  };
  