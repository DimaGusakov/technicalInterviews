import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  profession: '',
  experience: '',
  questionsCount: 1,
};

const testSlice = createSlice({
  name: 'testData',
  initialState,
  reducers: {
    setTestConfig: (state, action) => {
      state.profession = action.payload.profession;
      state.experience = action.payload.experience;
      state.questionsCount = action.payload.questionsCount;
    },
    resetTestConfig: (state) => {
      state.profession = '';
      state.experience = '';
      state.questionsCount = 1;
    },
  },
});

export const { setTestConfig, resetTestConfig } = testSlice.actions;
export default testSlice.reducer;