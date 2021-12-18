import React, { useRef } from "react";

export default function Referencias(props) {
  // usa la referencia y asignala a un elemento del DOM
  const refMenu = useRef();
  const refMenuBtn = useRef();

  const handleToggleMenu = () => {
    //? en lugar de usar e.target para validar, usamos la referencia refMenuBtn
    if (refMenuBtn.current.textContent === "Abrir Menú") {
      refMenuBtn.current.textContent = "Cerrar Menú";
      refMenu.current.style.display = "block";
    } else {
      refMenuBtn.current.textContent = "Abrir Menú";
      refMenu.current.style.display = "none";
    }
  };

  return (
    <div>
      <h2>Referencias</h2>
      <ul>
        <li>createRef para crear referencias en componente de clase</li>
        <li>Asigna una referencia a una "const" usando "useRef"</li>
        <li>La referencia creada asignala a un elemento del DOM</li>
      </ul>
      <button
        style={{ padding: ".5rem .7rem", borderRadius: "10px" }}
        ref={refMenuBtn}
        onClick={handleToggleMenu}
      >
        Abrir Menú
      </button>
      <nav ref={refMenu} style={{ display: "none" }}>
        <a href="index.html">section1</a>
        <br />
        <a href="index.html">section2</a>
        <br />
        <a href="index.html">section3</a>
        <br />
        <a href="index.html">section4</a>
      </nav>
    </div>
  );
}
// Notas:
// REFERENCIAS - ejemplos de uso(menu-desplegable, reproducion-medios, seleccion-texto, animaciones)
// En clases para usar la referencia => let refMenu = createRef()
// Lee la documentacion para mas ejemplos de uso
// https://es.reactjs.org/docs/refs-and-the-dom.html
// https://www.youtube.com/watch?v=jAimlsxuhaY&list=PLvq-jIkSeTUZ5XcUw8fJPTBKEHEKPMTKk&index=21
