import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "userData",
    initialState: {
        name: "",
        surname: "",
        profession: "",
        level: "",
        email: ""

    },
    reducers: {
        setUser(state, action) {
            const { name, surname, profession, level, email } = action.payload;
            state.name = name;
            state.surname = surname;
            state.profession = profession;
            state.level = level;
            state.email = email;
        }
    },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
