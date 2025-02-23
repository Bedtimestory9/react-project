import Slide from "./Slide";

export default function Carousel({ shapes }) {
  function showNext(index) {
    let lastIndex =
      index < 0
        ? 0
        : index === shapes.length
          ? shapes.length - 1
          : index;
    let currentIndex = index + 1 === shapes.length ? 0 : index + 1;
    shapes.updateApp({ currentIndex, lastIndex, direction: 1 });
  }

  function showPrevious(index) {
    let lastIndex = index < 0 ? 0 : index;
    let currentIndex = index - 1 < 0 ? shapes.length - 1 : index - 1;
    shapes.updateApp({ currentIndex, lastIndex, direction: -1 });
  }

  return (
    <div
      className={"carousel carousel--" + shapes[currentIndex][0]}
    >
      <div
        onClick={() => showPrevious(shapes.currentIndex)}
        className="controls controls--back"
      >
        <span></span>
      </div>

      <Slide shape={shapes[currentIndex]} />

      <div
        onClick={() => showNext(shapes.currentIndex)}
        className="controls controls--next"
      >
        <span></span>
      </div>
    </div>
  );
}
