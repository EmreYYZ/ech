// AFRAME.registerComponent("markerhandler", {
//   init: function() {
//     const animatedMarker = document.querySelector("#animated-marker");
//     var imagePlane = document.getElementById("dogPlane");
//     var secondSrc = "img/Burger_Sticker.jpg";

//     // every click, we make our model grow in size :)
//     animatedMarker.addEventListener("click", function(ev, target) {
//       const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
//       if (imagePlane && intersectedElement === imagePlane) {
//         // const scale = aEntity.getAttribute("scale");
//         // Object.keys(scale).forEach(key => (scale[key] = scale[key] + 1));
//         // aEntity.setAttribute("scale", scale);
//         imagePlane.setAttribute("src", `${secondSrc}`);
//       }
//     });
//   }
// });

let assets = [
  {
    id: "dog",
    src: "img/dog.jpg"
  },
  {
    id: "burger",
    src: "img/Burger_Sticker.jpg"
  },
  {
    id: "cola",
    src: "img/ColaStickerv.jpg"
  }
];

AFRAME.registerComponent("markerhandler", {
  function() {
    if (document.querySelector("a-marker").object3D.visible == true) {
      let num = Math.floor(Math.random() * Math.floor(3));
      document
        .querySelector("a-plane")
        .setAttribute("src", `${assets[num].src}`);
      return;
    } else {
      num = 0;
    }
  }
});
