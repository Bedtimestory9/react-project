export default function Slide() {
  const [copyMessage, setCopyMessage] = useState(false);

  function copyCSS(shapeCSS) {
    navigator.clipboard.writeText(shapeCSS).then(
      () => {
        console.log("Successfully copied CSS to clipboard");

        setCopyMessage(true);

        setTimeout(setCopyMessage, 2000, false);
      },
      () => {
        console.log("Error: couldn't copy to clipboard :(");
      }
    );
  }

  return (
    <div key={props.shape[0]} className={"slide slide--" + props.shape[0]}>
      <h6
        className={"slide__copy-message " + (copyMessage ? "show" : "nope")}
      >
        I am in your Clipboard!
      </h6>

      <div
        onClick={() => copyCSS(props.shape[1])}
        className={"slide__shape slide__shape--" + props.shape[0]}
      ></div>
    </div>
  );
} 
