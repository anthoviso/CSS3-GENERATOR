//Polyfill for requestAnimationFrame
  window.requestAnimationFrame = (function(){
    return  window.requestAnimationFrame       ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame    ||
    window.oRequestAnimationFrame      ||
    window.msRequestAnimationFrame     ||
    function(/* function */ callback, /* DOMElement */ element){
      window.setTimeout(callback, 1000 / 60);
    };
  })();

  //Get a reference to the input and output
  var cssValide = new Boolean("true");

  //Set up a requestAnimationFrame loop
  function update2 () {
    requestAnimationFrame(update2);

  /*  if((height.value.indexOf('px') != -1) || (height.value.indexOf('%') != -1) || (height.value.indexOf('em') != -1) || (height.value.indexOf('pt') != -1) || (height.value.indexOf('pc') != -1)){
      cssrenderHeight.style.color="black";
      cssValide = true;
    }else if (cssrenderHeight.style.display=="none"){
      cssValide = true;
    }else{
      cssrenderHeight.style.color="red";
      cssValide = false;
    }*/



  if (cssValide == true){
    cssValideTrue.style.display="block";
    cssValideFalse.style.display="none";
  }else{
    cssValideTrue.style.display="none";
    cssValideFalse.style.display="block";
  }

  }
  update2();
