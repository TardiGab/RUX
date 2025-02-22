import gsap from "gsap";
import Draggable from "gsap/src/Draggable";

gsap.registerPlugin(Draggable);

"use struct";

Draggable.create(".draggable", {
  bounds: ".header",
  type: "x,y",
});

Draggable.create(".draggable2", {
  bounds: ".situation",
  type: "x,y",
});