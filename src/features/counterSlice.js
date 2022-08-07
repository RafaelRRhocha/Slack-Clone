import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'app',
  initialState: {
    roomId: null,
  },
  reducers: {
    enterRoom: (state, action) => {
      state.roomId += action.payload.roomId;
    }
  }
})

export const { enterRoom } = counterSlice.actions;

export const selectRoomId = (state) => state.app.roomId;

export default counterSlice.reducer;
