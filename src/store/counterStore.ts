import create from "zustand/react";

interface Post {
    id: number;
    title: string;
    body: string;
}

interface CounterState {
    count: number;
    title: string;
    posts: Post[];
    increment: () => void;
    getPosts: () => Promise<void>;
}

export const useCounterStore = create<CounterState>((set, _get) => ({
    count: 0,
    title: "Counter",
    posts: [],
    increment: () => set((state) => ({ count: state.count + 1 })),

    getPosts: async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        set({ posts: data });
    },

    clearStore: () => set({}, true),

}))

