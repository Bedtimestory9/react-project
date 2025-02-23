import { useState } from "react";
import Carousel from "./Carousel";
import Code from "./Code";

const SHAPES = [[
  "heart",
  `#heart {

  position: relative;
  width: 100px;
  height: 90px;

}

#heart::before, #heart::after {

  content: '';
  position: absolute;
  left: 50px;
  top: 0;
  width: 50px;
  height: 80px;
  background: red;
  border-radius: 50px 50px 0 0;
  transform: rotate(-45deg);
  transform-origin: 0 100%;

}

#heart::after {

  left: 0;
  transform: rotate(45deg);
  transform-origin: 100% 100%;

}`
],
[
  "pacman",
  `#pacman {

  width: 0px;
  height: 0px;
  border-right: 60px solid transparent;
  border-top: 60px solid orange;
  border-left: 60px solid orange;
  border-bottom: 60px solid orange;
  border-top-left-radius: 60px;
  border-top-right-radius: 60px;
  border-bottom-left-radius: 60px;
  border-bottom-right-radius: 60px;

}`
],
[
  "yin-yang",
  `#yin-yang {

  width: 96px;
  box-sizing: content-box;
  height: 48px;
  background: white;
  border-color: black;
  border-style: solid;
  border-width: 2px 2px 50px 2px;
  border-radius: 100%;
  position: relative;

}

#yin-yang::before {

  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  background: white;
  border: 18px solid black;
  border-radius: 100%;
  width: 12px;
  height: 12px;
  box-sizing: content-box;

}

#yin-yang::after {

  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  background: black;
  border: 18px solid white;
  border-radius: 100%;
  width: 12px;
  height: 12px;
  box-sizing: content-box;

}`
],
[
  "cut-diamond",
  `#cut-diamond {

  border-style: solid;
  border-color: transparent transparent DodgerBlue transparent;
  border-width: 0 25px 25px 25px;
  height: 0;
  width: 50px;
  box-sizing: content-box;
  position: relative;
  margin-bottom: 50px;

}

#cut-diamond::after {

  content: "";
  position: absolute;
  top: 25px;
  left: -25px;
  width: 0;
  height: 0;
  border-style: solid;
  border-color: DodgerBlue transparent transparent transparent;
  border-width: 70px 50px 0 50px;

}`
],
[
  "infinity",
  `#infinity {

  position: relative;
  width: 150px;
  height: 80px;
  box-sizing: content-box;

}

#infinity::before, #infinity::after {

  content: "";
  box-sizing: content-box;
  position: absolute;
  top: 0;
  left: 0;
  width: 40px;
  height: 40px;
  border: 15px solid green;
  border-radius: 40px 40px 0 40px;
  transform: rotate(-45deg);

}

#infinity::after {

  left: auto;
  right: 0;
  border-radius: 40px 40px 40px 0;
  transform: rotate(45deg);

}`
]
];

export default function BabelCarousel(shapes = { SHAPES }) {
  const [app, updateApp] = useState({
    currentIndex: 0,
    lastIndex: -1,
    direction: 0
  });

  return (
    <div className="wrapper">
      <div className="intro">
        <h1>“The Shapes of CSS”</h1>
        <h2>from CSS-Tricks</h2>
        <p>
          an incredibly clever article written by <span>Chris Coyier</span>,
        </p>
        <p>shamelessly copied (only a little part) by me</p>
      </div>

      <Carousel
        direction={app.direction}
        currentIndex={app.currentIndex}
        lastIndex={app.currentIndex}
        updateApp={updateApp}
        shapes={shapes}
      />

      <Code
        direction={app.direction}
        lastShape={shapes[app.lastIndex]}
        currentShape={shapes[app.currentIndex]}
        shapes={shapes}
      />
    </div>
  )
}
