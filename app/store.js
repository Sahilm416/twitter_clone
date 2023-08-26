// store.js
import {create} from 'zustand';

const useStore = create((set) => ({
  isLoggedIn: false,
  setTrue: () => set({isLoggedIn: true}),
  setFalse: () => set({isLoggedIn: false}),
  tweeted: false,
  setTweeted:() =>  set((state)=> ({tweeted: !state.tweeted}))
}));

export { useStore };
