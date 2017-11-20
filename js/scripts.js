let hoverIn = e => {
    e.target.style.background = "teal";
  };
  
  let createSquares = () => {
    main = document.getElementById("main");    
    
    squares = 480000 / 400

    let y = 0;

    for (let i = 0; i < squares; i++) {
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

  createSquares();

  let changeSquareSize = () => {
    
    let x = document.getElementById("my-input").value;
    
    squares = 480000 / (x * x)

      main = document.getElementById("main");
      main.innerHTML = "";
    
      let y = 0;
      for (let i = 0; i < squares; i++) {
        let block = document.createElement("div");
        block.style.width = x + "px";
        block.style.height = x + "px";
        block.style.background = "grey";
        block.classList.add("object");
        block.setAttribute("id", y);
        block.addEventListener("mouseover", hoverIn);
        y++;
        document.getElementById("main").appendChild(block);
      }
  }
  
  let reset = () => {
    var x = document.getElementById("main");
    var y = x.getElementsByClassName("object");
    var i;
    for (i = 0; i < y.length; i++) {
      y[i].style.backgroundColor = "grey";
    }
  };
  