export default function Code({ shapes }) {
  return (
    <div className={"code-wrapper code-wrapper--" + shapes.currentShape[0]}>
      <pre
        key={currentShape[0]}
        className={
          "code code--active" +
          (direction < 0 ? " slide-left" : " slide-right")
        }
      >
        {shapes.currentShape[1]}
      </pre>

      {shapes.lastShape && (
        <pre
          key={shapes.lastShape[0]}
          className={
            "code code--last" +
            (shapes.direction < 0 ? " slide-left" : " slide-right")
          }
        >
          {shapes.lastShape[1]}
        </pre>
      )}
    </div>
  )
}

