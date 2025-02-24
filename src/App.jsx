import { useState } from 'react'
import './css/app.scss'


function App() {
  const [techName, setTechName] = useState("My Stacks")

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

  return (
    <>
      <div className='bg-light'>
        <div className='title-div my-blog'>
          <h1 className='global-card global-frosted title-div my-blog'>Lawrence Su's Board</h1>
        </div>
        <h1 className='title-div my-stacks'>{techName}</h1>
        <div className="title-div stacks-content">
          <a id='react' href="https://react.dev" className='global-card tech-card global-frosted' target="_blank" >
            <i id='react' class="devicon-react-original colored" onMouseOver={handleMouseOver}></i>
          </a>
          <a href='https://vuejs.org/' className='global-card tech-card global-frosted' target='_blank' >
            <i id='vue' class="devicon-vuejs-plain colored" onMouseOver={handleMouseOver}></i>
          </a>
          <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript' className='global-card tech-card global-frosted' target='_blank' >
            <i id='javascript' class="devicon-javascript-plain colored" onMouseOver={handleMouseOver}></i>
          </a>
          <a href='https://www.java.com/en/' className='global-card tech-card global-frosted' target='_blank' >
            <i id='java' class="devicon-java-plain colored" onMouseOver={handleMouseOver}></i>
          </a>
          <a href='https://elixir-lang.org/' className='global-card tech-card global-frosted' target='_blank' >
            <i id='elixir' class="devicon-elixir-plain colored" onMouseOver={handleMouseOver}></i>
          </a>
          <a href='https://www.python.org/' className='global-card tech-card global-frosted' target='_blank'>
            <i id='python' class="devicon-python-plain colored" onMouseOver={handleMouseOver}></i>
          </a>
          <a href='https://isocpp.org/' className='global-card tech-card global-frosted' target='_blank' >
            <i id='c++' class="devicon-cplusplus-plain colored" onMouseOver={handleMouseOver}></i>
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
