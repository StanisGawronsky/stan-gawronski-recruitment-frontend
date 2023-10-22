import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "store";

interface ModeOptions {
  darkMode: boolean;
  music: {
    loaded: boolean;
    playing: boolean;
  };
}

const initialState: ModeOptions = {
  darkMode: false,
  music: {
    loaded: false,
    playing: false,
  },
};

export const modeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    toggleMode: (state) => {
      state.darkMode = !state.darkMode;
    },
    toggleMusic: (state) => {
      state.music.playing = !state.music.playing;
    },
    setMusicLoaded: (state) => {
      state.music.loaded = true;
    },
  },
});

export const selectMode = (state: RootState) => state.mode.darkMode;
export const selectMusicPlaying = (state: RootState) =>
  state.mode.music.playing;
export const selectMusicLoaded = (state: RootState) => state.mode.music.loaded;

export const { toggleMode, toggleMusic, setMusicLoaded } = modeSlice.actions;

export default modeSlice.reducer;
