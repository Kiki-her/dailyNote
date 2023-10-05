import {create, useStore} from "zustand";

export const useNoteStore = create((set) => ({
    text: "",
    setText: (text) => set((state) => ({text: text})),
    removeAllText: () => set((state) => ({text: ""})),
    title: "",
    setTitle: (title) => set((state) => ({title: title})),
    note: [],
    setNote: (dataObjofArray) => set((state) => ({note: dataObjofArray})),
    addNote: (dataObj) => set((state) => ({ note: [...state.note, dataObj]})),
    removeNote: (dataObj) => set((state) => {
        const removedNote = state.note.filter((obj) =>obj.id !== dataObj.id);
        return {note: removedNote};
    })
}))