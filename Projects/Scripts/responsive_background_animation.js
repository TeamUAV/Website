function resposive_background_animate(reverse, secondAnimationFlag) {
    let root = document.querySelector(".background");
    let imgs = root.querySelectorAll("img");
    if (!reverse) {
      for (img of imgs) {
        switch (img.id) {
          case "img-top-left":
            secondAnimationFlag
              ? (img.style.top = "18rem")
              : (img.style.left = "-4rem");
            break;
          case "img-bottom-left-1":
            secondAnimationFlag
              ? (img.style.bottom = "-4rem")
              : (img.style.left = "5rem");
            break;
          case "img-bottom-left-2":
            secondAnimationFlag
              ? (img.style.bottom = "-3rem")
              : (img.style.left = "10rem");
            break;
          case "img-top-middle":
            secondAnimationFlag
              ? (img.style.top = "0rem")
              : (img.style.top = "-2rem");
            break;
          case "img-middle-middle":
            secondAnimationFlag
              ? img.setAttribute("style", "left:28.5rem; top: 18rem;")
              : (img.style.top = "16rem");
            break;
          case "img-middle-bottom":
            secondAnimationFlag
              ? img.setAttribute("style", "left:16rem; bottom: 10rem")
              : (img.style.bottom = "9rem");
            break;
          case "img-middle-right":
            secondAnimationFlag
              ? img.setAttribute("style", "top: 12rem; right: -1.5rem")
              : img.setAttribute("style", "top: 17rem; right: -3.5rem");
            break;
          case "img-bottom-right":
            secondAnimationFlag
              ? img.setAttribute("style", "bottom: -5rem; right: -16rem")
              : img.setAttribute("style", "bottom: -5rem; right: -18rem");
        }
      }
    } else {
      for (img of imgs) {
        img.style.left = "";
        img.style.top = "";
        img.style.right = "";
        img.style.bottom = "";
      }
    }
}

function background_animate(reverse, secondAnimationFlag){
  let root = document.querySelector(".background");
  let imgs = root.querySelectorAll("img");
  if (!reverse) {
    for (img of imgs) {
      switch (img.id) {
        case "img-top-left":
          secondAnimationFlag
            ? (img.style.top = "2.5rem")
            : (img.style.left = "0rem");
          break;
        case "img-bottom-left-1":
          secondAnimationFlag
            ? (img.style.bottom = "-4rem")
            : (img.style.left = "10rem");
          break;
        case "img-bottom-left-2":
          secondAnimationFlag
            ? (img.style.bottom = "-2rem")
            : (img.style.left = "15rem");
          break;
        case "img-top-middle":
          secondAnimationFlag
            ? (img.style.top = "0rem")
            : (img.style.top = "-3rem");
          break;
        case "img-middle-middle":
          secondAnimationFlag
            ? img.setAttribute("style", "left:52rem; top: 16rem;")
            : (img.style.top = "15rem");
          break;
        case "img-middle-bottom":
          secondAnimationFlag
            ? img.setAttribute("style", "left:29rem; bottom: 2rem")
            : (img.style.bottom = "5rem");
          break;
        case "img-middle-right":
          secondAnimationFlag
            ? img.setAttribute("style", "top: 4rem; right: -3.5rem")
            : img.setAttribute("style", "top: 6rem; right: -2.5rem");
          break;
        case "img-bottom-right":
          secondAnimationFlag
            ? img.setAttribute("style", "bottom: -6rem; right: -16rem")
            : img.setAttribute("style", "bottom: -6rem; right: -18rem");
      }
    }
  } 
  else {
    for (img of imgs) {
      img.style.left = "";
      img.style.top = "";
      img.style.right = "";
      img.style.bottom = "";
    }
  }
}
function init(reverse, secondAnimationFlag) {
  let query = window.matchMedia("(max-width:1024px)")
  if(query.matches) {
    console.log("je")
    resposive_background_animate(reverse, secondAnimationFlag)
  }
  else {
    background_animate(reverse, secondAnimationFlag)
  }
  if (reverse) {
    reverse = false;
    secondAnimationFlag = false;
  }
  else{
      if (!secondAnimationFlag) secondAnimationFlag = true;
      else {
        reverse = true;
      }
    }
  return [reverse, secondAnimationFlag];
}
