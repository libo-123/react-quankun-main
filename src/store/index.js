import { configureStore, createSlice } from '@reduxjs/toolkit';

/** 定义 */
const spinning = createSlice({
    name: 'load',
    initialState: { value: false },
    reducers: {
        changeVisible: (state, action) => {
            state.value = action.payload;
        }
    },
});
const store = configureStore({
    reducer: spinning.reducer,
});
/** 导出 */
export default store;
// export const { increment, decrement } = spinning.actions;