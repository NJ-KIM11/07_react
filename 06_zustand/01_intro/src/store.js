import {create} from "zustand";

const useStore = create((set)=>({
    count : 0,  // 상태로 사용할 값.
    // set 은 내부에서 쓸수 있는 함수
    // state 은 현재 useStore 내부의 상태
    // zustand 에서는 스프레드 연산자 없이 특정 상태만 변경 가능

    increment : ()=> set((state) => ({count: state.count+1})),

    decrement : () => set((state) => ({count: state.count-1})),

    reset: () => set({count:0})
}))
export default useStore;