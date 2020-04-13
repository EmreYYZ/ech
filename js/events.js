let assets = [
  {
    id: "1968",
    src: "img/1968-france.jpg",
  },
  {
    id: "2012",
    src: "img/2012-Turkey.jpg",
  },
  {
    id: "cola",
    src: "img/ColaStickerv.jpg",
  },
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
