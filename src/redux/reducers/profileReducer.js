import { UPGRADE_PROFILE } from "../types";

const initialState = {
    profile: [],
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPGRADE_PROFILE:
            return {
                ...state,
                // profile: state.profile.concat([action.payload]),
                profile: [action.payload],
            };
        default:
            return state;
    }
};
