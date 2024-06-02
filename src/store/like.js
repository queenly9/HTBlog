import create from 'zustand';

const useLike = create((set) => ({
    like: 0,
    increaseOneLike: () => set((state) => ({like: state.like + 1})),
    decreaseOneLike: () => set((state) => ({like: state.like - 1})),
    resetLike: () => set({like: 0})
}));

export default useLike;
