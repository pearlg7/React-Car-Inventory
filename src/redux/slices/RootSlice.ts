import { createSlice } from "@reduxjs/toolkit"

const rootSlice = createSlice({
    name: "root",
    initialState: {
        make: "Make",
        model: 'Model',
        vin: "Vin",
        year: "Year",
    },
    reducers: {
        // action is submitted elsewhere - written to state.name
        chooseMake: (state, action) => { state.make = action.payload }, // All we're doing is setting the input to the state.name
        chooseModel: (state, action) => { state.model = action.payload },
        chooseVin: (state, action) => { state.vin = action.payload },
        chooseYear: (state, action) => { state.year= action.payload },
    }
})

export const reducer = rootSlice.reducer;
export const { chooseMake, chooseModel, chooseVin, chooseYear } = rootSlice.actions