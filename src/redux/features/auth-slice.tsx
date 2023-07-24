import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store";

// Type
type bgAuthType = {
    backgroundColorHex: string;
};
type bgImgType = {
    backgroundColorHex: string;
};

// Init state
const initialBgHex = {
    value: {
        backgroundColorHex: "",
    } as bgAuthType,
};
const initialBgImg = {
    value: {
        backgroundColorHex: "",
    } as bgImgType,
};

export const auth = createSlice({
    name: "changeTextColorBaseOnBg",
    initialState: initialBgHex,
    reducers: {
        setNewBgHex: (state, action: PayloadAction<string>) => {
            return {
                value: {
                    backgroundColorHex: action.payload,
                },
            };
        },
        defaultBgHex: () => {
            return initialBgHex;
        },
    },
});

export const { setNewBgHex, defaultBgHex } = auth.actions;
export default auth.reducer;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
