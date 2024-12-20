import React from "react";

const pads = [
  {
    id: "Q",
    src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3",
    clip: "Heater 1",
  },
  {
    id: "W",
    src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3",
    clip: "Heater 2",
  },
  {
    id: "E",
    src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3",
    clip: "Heater 3",
  },
  {
    id: "A",
    src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3",
    clip: "Heater 4",
  },
  {
    id: "S",
    src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3",
    clip: "Clap",
  },
  {
    id: "D",
    src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3",
    clip: "Open-HH",
  },
  {
    id: "Z",
    src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3",
    clip: "Kick-n'-Hat",
  },
  {
    id: "X",
    src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3",
    clip: "Kick",
  },
  {
    id: "C",
    src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3",
    clip: "Close-HH",
  },
];

function DrumPads({ soundClip }) {
  const handleDrumPads = (pad) => {
    const audioEle = document.getElementById(pad.id);
    audioEle.currentTime = 0;
    audioEle.play();
    soundClip(pad.clip);
  };

  return (
    <div className="drum-pads">
      {pads.map((pad) => (
        <div className="drum-pad" onClick={() => handleDrumPads(pad)}>
          <audio id={pad.id} src={pad.src}></audio>
          {pad.id}
        </div>
      ))}
    </div>
  );
}

export default DrumPads;
