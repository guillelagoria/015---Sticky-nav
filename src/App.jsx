import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import React from 'react'

export const App = () => {

  const navRef = useRef(null);
  const [isNavActive, setIsNavActive] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  function handleScroll() {
    const nav = navRef.current;
    if (window.scrollY > nav.offsetHeight + 100 ) {
      setIsNavActive(true);
    } else {
      setIsNavActive(false);
    }
  }

  return (
    <>
    <body>
      <nav className={isNavActive ? 'nav active' : 'nav'} ref={navRef}>
        <div className="container">
          <h1 className="logo"><a>My Website</a></h1>
          <ul>
            <li><a className='current'>Home</a></li>
            <li><a >About</a></li>
            <li><a >Services</a></li>
            <li><a >Contact</a></li>
          </ul>
        </div>
      </nav>

      <div className="hero">
        <div className="container">
          <h1>Setup Minimalista</h1>
          <p></p>
        </div>
      </div>

      <section className='container content'>
        <h2>Cómo tener un escritorio limpio y minimalista para tu setup Gaming</h2>
        <p>Todos soñamos con los setup gaming que vemos por internet. Sin embargo, todos podemos tener un escritorio limpio y minimalista.
Sabemos que muchos quieren tener esos setups espectaculares que ven por las redes sociales, pero lo cierto es que puedes tenerlos. No necesitaremos miles de dolares para tener el mejor monitor, escritorio o PC del universo, aquí venimos a hablar de cómo tener un escritorio limpio y minimalista.</p>

        <h3>¿Qué es un escritorio minimalista?</h3>
        <p>Seguro que todos saben lo que es un escritorio limpio, pero puede que «minimalista» sea más confuso para otros. Básicamente, el minimalismo sigue la regla del «menos es más«, es decir, cuanto menos cosas o cargado esté nuestro escritorio, más minimalista será.

Con «limpio» queremos hacer referencia a un aspecto limpio relacionado con el cableado o el aspecto en sí. Puede que tengamos un escritorio espectacular, pero lo ensucien los cables enrededados por debajo o, incluso, por encima del escritorio.

Así que, si tienes un buen setup inicial y sólo te falta un escritorio acorde a tus exigencias, te enseñamos cómo hacerlo.</p>
      </section>



    </body>
    </>
  )
}

export default App
