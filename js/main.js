// JavaScript document
(() => {
  console.log ("Linked up");

  let
    svgs = document.querySelectorAll("svg");

    function logThisSvg(){
       console.log(this.id);
    }

    function big(){
      this.style.width= '120%';
    }

    function small(){
      this.style.width= '80%';
    }

    svgs.forEach((svg) => {
      svg.addEventListener('click', logThisSvg);
      svg.addEventListener('mouseover', big);
      svg.addEventListener('mouseout', small);
    });

})();
