AFRAME.registerComponent("markerhandler", {
  init: function() {
    const animatedMarker = document.querySelector("#animated-marker");
    var imagePlane = document.getElementById("dogPlane");
    var secondSrc = "img/Burger_Sticker.jpg";

    // every click, we make our model grow in size :)
    animatedMarker.addEventListener("click", function() {
      // const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
      // if (aEntity && intersectedElement === aEntity) {
      //   const scale = aEntity.getAttribute("scale");
      //   Object.keys(scale).forEach(key => (scale[key] = scale[key] + 1));
      //   aEntity.setAttribute("scale", scale);
      // }
      imagePlane.setAttribute("src", secondSrc);
    });
  }
});
