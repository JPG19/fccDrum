import React from "react";
import "./App.css";

function App() {
  const [displayAudio, setDisplayAudio] = React.useState();

  const playAudio = (audio) => {
    var playPromise = audio.play();

    if (playPromise !== undefined) {
      playPromise
        .then((_) => {
          // Automatic playback started!
          // Show playing UI.
        })
        .catch((error) => {
          // Auto-play was prevented
          // Show paused UI.
        });
    }
  };

  const playSound = (id) => {
    const element = document.getElementById(id);
    setDisplayAudio(element.innerText);
    switch (id) {
      case "chord-1":
        const qClip = document.getElementById("Q");
        playAudio(qClip);
        break;
      case "chord-2":
        const wClip = document.getElementById("W");
        playAudio(wClip);
        break;
      case "chord-3":
        const eClip = document.getElementById("E");
        playAudio(eClip);
        break;
      case "chord-4":
        const aClip = document.getElementById("A");
        playAudio(aClip);
        break;
      case "chord-5":
        const sClip = document.getElementById("S");
        playAudio(sClip);
        break;
      case "chord-6":
        const dClip = document.getElementById("D");
        playAudio(dClip);
        break;
      case "chord-7":
        const zClip = document.getElementById("Z");
        playAudio(zClip);
        break;
      case "chord-8":
        const xClip = document.getElementById("X");
        playAudio(xClip);
        break;
      case "chord-9":
        const cClip = document.getElementById("C");
        playAudio(cClip);
        break;
    }
  };

  React.useEffect(() => {
    const handleKeypress = (event) => {
      switch (event.key.toLowerCase()) {
        case "q":
          playSound("chord-1");
          break;
        case "w":
          playSound("chord-2");
          break;
        case "e":
          playSound("chord-3");
          break;
        case "a":
          playSound("chord-4");
          break;
        case "s":
          playSound("chord-5");
          break;
        case "d":
          playSound("chord-6");
          break;
        case "z":
          playSound("chord-7");
          break;
        case "x":
          playSound("chord-8");
          break;
        case "c":
          playSound("chord-9");
          break;
      }
    };

    document.addEventListener("keypress", handleKeypress);
  }, []);

  return (
    <div className="drum-machine" id="drum-machine">
      <div className="drum-machine-container">
        <div id="drumContainer" className="drumContainer">
          <div
            className="drum-pad"
            id="chord-1"
            onClick={(e) => playSound(e.target.id)}
          >
            Q
            <audio
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
              className="clip"
              id="Q"
            ></audio>
          </div>
          <div
            className="drum-pad"
            id="chord-2"
            onClick={(e) => playSound(e.target.id)}
          >
            W
            <audio
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
              className="clip"
              id="W"
            ></audio>
          </div>
          <div
            className="drum-pad"
            id="chord-3"
            onClick={(e) => playSound(e.target.id)}
          >
            E
            <audio
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
              className="clip"
              id="E"
            ></audio>
          </div>

          <div
            className="drum-pad"
            id="chord-4"
            onClick={(e) => playSound(e.target.id)}
          >
            A
            <audio
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
              className="clip"
              id="A"
            ></audio>
          </div>
          <div
            className="drum-pad"
            id="chord-5"
            onClick={(e) => playSound(e.target.id)}
          >
            S
            <audio
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
              className="clip"
              id="S"
            ></audio>
          </div>
          <div
            className="drum-pad"
            id="chord-6"
            onClick={(e) => playSound(e.target.id)}
          >
            D
            <audio
              src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
              className="clip"
              id="D"
            ></audio>
          </div>

          <div
            className="drum-pad"
            id="chord-7"
            onClick={(e) => playSound(e.target.id)}
          >
            Z
            <audio
              src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
              className="clip"
              id="Z"
            ></audio>
          </div>
          <div
            className="drum-pad"
            id="chord-8"
            onClick={(e) => playSound(e.target.id)}
          >
            X
            <audio
              src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
              className="clip"
              id="X"
            ></audio>
          </div>
          <div
            className="drum-pad"
            id="chord-9"
            onClick={(e) => playSound(e.target.id)}
          >
            C
            <audio
              src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
              className="clip"
              id="C"
            ></audio>
          </div>
        </div>

        <div id="display" className="display">
          {displayAudio}
        </div>
      </div>
    </div>
  );
}

export default App;