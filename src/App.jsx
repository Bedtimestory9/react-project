import { useState } from 'react'
import './css/app.scss'

function App() {
  const handleMouseOver = (e) => {
    switch (e.target.id) {
      case "react":
        setTechName("React")
        break;
      case "vue":
        setTechName("Vue")
        break;
      case "javascript":
        setTechName("Javascript")
        break;
      case "java":
        setTechName("Java")
        break;
      case "elixir":
        setTechName("Elixir")
        break;
      case "python":
        setTechName("Python")
        break;
      case "c++":
        setTechName("C++")
        break;
      default:
        break;
    }
  }

  const [techName, setTechName] = useState("My Stacks")

  return (
    <>
      <div className='bg-light'>
        <div className='title-div my-blog'>
          <h1 className='global-card global-frosted title-div my-blog'>Lawrence Su's Board</h1>
        </div>
        <h1 className='title-div my-stacks'>{techName}</h1>
        <div className="title-div stacks-content">
          <a id='react' href="https://react.dev" className='global-card tech-card global-frosted' target="_blank" onMouseOver={handleMouseOver}>
            <i class="devicon-react-original colored"></i>
          </a>
          <a id='vue' href='https://vuejs.org/' className='global-card tech-card global-frosted' target='_blank' onMouseOver={handleMouseOver}>
            <i class="devicon-vuejs-plain colored"></i>
          </a>
          <a id='javascript' href='https://developer.mozilla.org/en-US/docs/Web/JavaScript' className='global-card tech-card global-frosted' target='_blank' onMouseOver={handleMouseOver}>
            <i class="devicon-javascript-plain colored"></i>
          </a>
          <a id='java' href='https://www.java.com/en/' className='global-card tech-card global-frosted' target='_blank' onMouseOver={handleMouseOver}>
            <i class="devicon-java-plain colored"></i>
          </a>
          <a id='elixir' href='https://elixir-lang.org/' className='global-card tech-card global-frosted' target='_blank' onMouseOver={handleMouseOver}>
            <i class="devicon-elixir-plain colored"></i>
          </a>
          <a id='python' href='https://www.python.org/' className='global-card tech-card global-frosted' target='_blank' onMouseOver={handleMouseOver}>
            <i class="devicon-python-plain colored"></i>
          </a>
          <a id='c++' href='https://isocpp.org/' className='global-card tech-card global-frosted' target='_blank' onMouseOver={handleMouseOver}>
            <i class="devicon-cplusplus-plain colored"></i>
          </a>
        </div>
        <p className="title-div note global-frosted">
          Hover on the icon and see the stack's name
        </p>
      </div>
    </>
  )
}

export default App
