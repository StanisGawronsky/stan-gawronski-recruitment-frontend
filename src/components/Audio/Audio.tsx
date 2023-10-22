import { useEffect, useRef } from "react";
import { selectMusicPlaying, setMusicLoaded } from "redux/slices/modeSlice";
import { useAppDispatch, useAppSelector } from "store/hooks";

const AUDIO_STARTING_TIME = 18.5;

function AudioComponent() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const musicPlaying = useAppSelector(selectMusicPlaying);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const { current: audio } = audioRef;

    if (audio) {
      audio.currentTime = AUDIO_STARTING_TIME;
      const canPlayThroughHandler = () => {
        dispatch(setMusicLoaded());
        audio.removeEventListener("canplaythrough", canPlayThroughHandler);
      };
      audio.addEventListener("canplaythrough", canPlayThroughHandler);
    }
  }, [dispatch]);

  useEffect(() => {
    const { current: audio } = audioRef;

    if (audio) {
      if (musicPlaying) {
        audio.play();
      } else {
        audio.pause();
        audio.currentTime = AUDIO_STARTING_TIME;
      }
    }
  }, [musicPlaying]);

  return <audio ref={audioRef} src="/The Son of Flynn - Daft Punk.mp3" />;
}

export default AudioComponent;
