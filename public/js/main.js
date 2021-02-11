/* eslint-disable no-undef */
navigator.xr.requestDevice =
  navigator.xr.requestDevice ||
  function () {
    return new Promise((resolve, reject) => {
      resolve({
        supportsSession: new Promise((resolve, reject) => {
          resolve({
            immersive: true,
            exclusive: true,
          });
        }),
      });
    });
  };
let mixers = [];
var clock = new THREE.Clock();
const modelsShown = {};

function markerFoundFunction(e, self, model) {
  self.markerFound = true;
  model.setAttribute("position", { x: 0, y: 0, z: 0 });
  modelsShown[model.getAttribute("data-ambassador")] = true;
  const modelItem = model.getObject3D("mesh");
  const animation = modelItem.animations[0];
  var mixer = new THREE.AnimationMixer(modelItem);
  var action = mixer.clipAction(animation);
  action.setLoop(THREE.LoopOnce);
  action.clampWhenFinished = true;
  action.play();
  mixers.push(mixer);
}

function markerLostFunction(e, self, model) {
  model.setAttribute("position", { x: 1000, y: 2000, z: 3000 });
  self.evtDetail.markerFound = false;
  // your code here}
  mixers.forEach((mixer, i) => {
    delete mixers[i];
  });
}

AFRAME.registerComponent("markercomp", {
  init: function () {
    let el = this.el;
    let self = this;
    const model = document.querySelector(`#${this.el.getAttribute("data-id")}`);
    self.evtDetail.markerFound = false;
    el.addEventListener("markerFound", (e) =>
      markerFoundFunction(e, self, model)
    );
    el.addEventListener("markerLost", (e) =>
      markerLostFunction(e, self, model)
    );
  },
  tick: function () {
    if (mixers.length > 0) {
      let total = 0;
      for (var i = 0; i < mixers.length; i++) {
        if (!mixers[i]) continue;
        total++;
        mixers[i].update(clock.getDelta());
      }
      if (total === 0) {
        mixers = [];
      }
    }
  },
});
AFRAME.registerComponent("treeman", {
  init: function () {
    let el = this.el;
    let self = this;
    this.mouseOverObject = null;
    self.mouseOver = false;

    el.addEventListener("raycaster-intersected", (e) => {
      self.raycaster = e.detail.el;
      self.mouseOver = true;
    });

    el.addEventListener("raycaster-intersected-cleared", () => {
      self.mouseOverObject = null;
      self.mouseOver = false;
    });

    // clickhandler event => Send an event to the dom when an object is clicked
    el.addEventListener("click", function () {
      if (!self.mouseOver || !self.mouseOverObject) return;
      const event = new CustomEvent("model-clicked", {
        detail: {
          ambassador: el.getAttribute("data-ambassador"),
          clickedModel: self.mouseOverObject.name,
        },
      });
      document.dispatchEvent(event);
    });

    // Same as mousemove, but since mobile does not have mice, detect intersections on touchstart
    document.addEventListener("touchstart", () => {
      if (!self.mouseOver) return;

      let intersection = self.raycaster.components.raycaster.getIntersection(
        el
      );
      if (
        !self.mouseOverObject ||
        self.mouseOverObject.name !== intersection.object.name
      ) {
        self.mouseOverObject = intersection.object;
      }
    });

    // same as clickhandler event but for mobile after mousestart was triggered
    el.addEventListener("touchend", function () {
      if (!self.mouseOver || !self.mouseOverObject) return;
      const event = new CustomEvent("model-clicked", {
        detail: {
          ambassador: el.getAttribute("data-ambassador"),
          clickedModel: self.mouseOverObject.name,
        },
      });
      document.dispatchEvent(event);
    });

    // Listen to mousemove to detect intersected objects
    document.addEventListener("mousemove", () => {
      if (!self.mouseOver) return;

      let intersection = self.raycaster.components.raycaster.getIntersection(
        el
      );
      if (
        !self.mouseOverObject ||
        self.mouseOverObject.name !== intersection.object.name
      ) {
        self.mouseOverObject = intersection.object;
      }
    });
  },
  highlight: function () {},
  deselect: function () {},
});
