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

// define a previous number. This will be used later.
let previousNum;
// define new number. This number is used as the index value for fetching artifacts from the asset array (above)
let num = Math.floor(Math.random() * Math.floor(assets.length));

// register aframe component for the marker
AFRAME.registerComponent("markerhandler", {
  // tick makes it refresh every frame. Is this necessary? Who knows
  tick: function() {
    // if the marker is in view ...
    if (document.querySelector("a-marker").object3D.visible == true) {
      document
        .querySelector("a-plane")
        // sets the src of the plane to the src value in the assets array
        .setAttribute("src", `${assets[num].src}`);
        return;
    } else {
      // set previous number to current number
      previousNum = num;
      // generate a new random number
      num = Math.floor(Math.random() * Math.floor(assets.length));
      // if they're the same, re-roll
      if (num == previousNum) {
        num = Math.floor(Math.random() * Math.floor(assets.length));
      } else {
        return num;
      }
    }
  }
});

// let assets = [
//   {
//     id: "dog",
//     src: "img/dog.jpg"
//   },
//   {
//     id: "burger",
//     src: "img/Burger_Sticker.jpg"
//   },
//   {
//     id: "cola",
//     src: "img/ColaStickerv.jpg"
//   }
// ];

// AFRAME.registerComponent("markerhandler", {
//   function() {
//     if (document.querySelector("a-marker").object3D.visible == true) {
//       let num = Math.floor(Math.random() * Math.floor(3));
//       document
//         .querySelector("a-plane")
//         .setAttribute("src", `${assets[num].src}`);
//       return;
//     } else {
//       num = Math.floor(Math.random() * Math.floor(3));
//     }
//   }
// });
