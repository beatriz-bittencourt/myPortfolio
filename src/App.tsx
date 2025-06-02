import { useState, useEffect } from "react";

function App() {
  const [showPreloader, setShowPreloader] = useState(true);
  const [slide, setSlide] = useState(false);

  useEffect(() => {
    const toPurple = setTimeout(() => {
      setSlide(true);
    }, 3000);

    const hidePreloader = setTimeout(() => {
      setShowPreloader(false);
    }, 4000);

    return () => {
      clearTimeout(toPurple);
      clearTimeout(hidePreloader);
    };
  }, []);

  return (
    <>
      {showPreloader && (
        <div id="preloader" className={slide ? "slide-up" : ""}>
          <img src="/logo.png" className="logoG" />
        </div>
      )}
      <div className="main-wrapper">
        <div className="main">
          <h3>Hi, my name is</h3>
          <h1>Beatriz Bittencourt.</h1>
          <h2>I turn ideas into solutions.</h2>
          <h5>
            I have a degree in Systems Analysis and Development and I am
            passionate about <a>transforming technology into new solutions </a>
            that positively impact people's daily lives.
          </h5>
        </div>
      </div>
    </>
  );
}

export default App;
