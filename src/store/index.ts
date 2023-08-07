import create from "zustand";

type InputState = {
  inputs: Record<string, string>;
  setInput: (name: string, value: string) => void;
};

export const useInputStore = create<InputState>((set) => ({
  inputs: {
    email: "",
    password: "",
  },
  setInput: (name, value) =>
    set((state) => ({ inputs: { ...state.inputs, [name]: value } })),
}));
