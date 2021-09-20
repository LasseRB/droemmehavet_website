import React, { useState, useEffect, useRef } from "react";
import troldmanden from "../../Troldmand-Snippet.mp3";
import {
  PlayArrow,
  Pause,
  VolumeUp,
  Forward10,
  Replay10,
  VolumeMute,
  VolumeOff,
  VolumeDown,
} from "@material-ui/icons";

export default function AudioControls() {
  const [isPlaying, setIsPlaying] = useState(false);
  // The state of the full duration of the current audiofile
  const [duration, setDuration] = useState(0);
  // The state of the curret duration that the user has listen
  const [currentDuration, setCurrentDuration] = useState(0);
  // The state of the volume icon
  const [volumeIcon, setVolumeIcon] = useState(<VolumeUp />);
  // The state of the volume level
  const [volume, setVolume] = useState(80);

  const audio = useRef();

  useEffect(() => {
    audio.current.currentTime = currentDuration;

    document.addEventListener(
      "closeStoryWindow",
      () => {
        if (audio.current != null) {
          close();
        }
      },
      false
    );
  }, []);

  // Update the volume icon
  useEffect(() => {
    if (volume * 100 > 40) {
      setVolumeIcon(<VolumeUp />);
    } else if (volume * 100 <= 40 && volume * 100 > 10) {
      setVolumeIcon(<VolumeDown />);
    } else if (volume * 100 <= 10 && volume * 100 > 5) {
      setVolumeIcon(<VolumeMute />);
    } else if (volume * 100 <= 5) {
      setVolumeIcon(<VolumeOff />);
    }
  }, [volume]);

  const styleProgressBar = {
    background: `linear-gradient(to right,
      #fff 0%, 
      #fff ${(currentDuration * 100) / duration}%,
      #36435B ${(currentDuration * 100) / duration}%, #36435B  100%)`,
  };

  const styleVolumebar = {
    background: `linear-gradient(to right,
      #fff 0%, 
      #fff ${volume * 100}%,
      #36435B ${volume * 100}%, #36435B  100%)`,
  };

  //Formats the duration into min and sec.
  const formatMinSec = (s) => {
    return (s - (s %= 60)) / 60 + (9 < s ? ":" : ":0") + ~~s;
  };

  //Makes the user able to turn the sound up/down
  const updateVolume = (q) => {
    setVolume(q);
    audio.current.volume = q;
    if (volume < 0.05) {
      audio.current.volume = 0.0;
    }
  };

  //Update the state of the time that the user has listen
  const updateCurrentTime = (e) => {
    const time = (e.target.value * duration) / 100;
    setCurrentDuration(time);
    audio.current.currentTime = time;
  };

  //Makes the user able to step back 30 sec
  const stepBack = () => {
    const time = audio.current.currentTime - 10;
    console.log(time);
    setCurrentDuration(time);
    audio.current.currentTime = time;
    if (time < 0.0) {
      setCurrentDuration(0);
      audio.current.currentTime = 0;
    }
  };

  //Makes the user able to step forward 30 sec
  const stepForward = () => {
    const time = audio.current.currentTime + 10;
    setCurrentDuration(time);
    audio.current.currentTime = time;
    if (time < 0.0) {
      setCurrentDuration(duration);
      audio.current.currentTime = duration;
    }
  };

  // Play/Pause the current audiofile
  const playPauseAudio = () => {
    setIsPlaying(!isPlaying);
    isPlaying ? audio.current.pause() : audio.current.play();
  };

  //Closes and saves the audio state in local storage
  const close = () => {
    setIsPlaying(true);

    if (isPlaying) {
      playPauseAudio();
    }
  };

  return (
    <div className="audioPlayer">
      <audio
        ref={audio}
        src={troldmanden}
        preload="auto"
        onEnded={() => setCurrentDuration(0)}
        onCanPlay={(e) => {
          setDuration(e.target.duration);
        }}
        onTimeUpdate={(e) => setCurrentDuration(e.target.currentTime)}
      />

      <div className="audioLogic">
        <div className="audioButtons">
          <button className="setBack10" onClick={() => stepBack()}>
            <Replay10 className="Icon" />
          </button>

          <button
            id="playPauseAudio"
            onClick={() => {
              playPauseAudio();
            }}
          >
            {isPlaying ? (
              <Pause className="Icon" />
            ) : (
              <PlayArrow className="Icon" />
            )}
          </button>
          <button className="setForward10" onClick={() => stepForward()}>
            <Forward10 className="Icon" />
          </button>

          <div className="volume-hover-container">
            <button className="volume">{volumeIcon}</button>

            <div className="volume-hover">
              <input
                style={styleVolumebar}
                type="range"
                name="volume"
                className="volumeRange"
                min="0"
                max="100"
                value={Math.round(volume * 100)}
                onChange={(e) => {
                  updateVolume(e.target.value / 100);
                }}
              />
            </div>
          </div>
        </div>
        <div className="timeBar">
          <span className="currentTime">{formatMinSec(currentDuration)}</span>
          <input
            type="range"
            name="time"
            style={styleProgressBar}
            value={duration ? (currentDuration * 100) / duration : 0}
            id="timeRange"
            min="0"
            onInput={updateCurrentTime}
          ></input>
          <span className="TotalTime">{formatMinSec(duration)}</span>
        </div>
      </div>
    </div>
  );
}
