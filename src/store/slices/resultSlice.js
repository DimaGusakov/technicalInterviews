import { createSlice } from "@reduxjs/toolkit";

const resultsSlice = createSlice({
    name: "results",
    initialState: {
        questions: [],
        feedbacks: [],
    },
    reducers: {
        setQuestions(state, action) {
            state.questions = action.payload;
        },
        addFeedback(state, action) {
            state.feedbacks.push(action.payload);
        },
        resetResults(state) {
            state.questions = [];
            state.feedbacks = [];
        }
    }
});

export const { setQuestions, addFeedback, resetResults } = resultsSlice.actions;
export default resultsSlice.reducer;