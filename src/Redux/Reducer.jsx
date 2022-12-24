

const INIT_STATE = {
    carts: []
};

export const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "ADD_CART":

            const IteamIndex = state.carts.findIndex((item) => item.id === action.payload.id)

            if (IteamIndex >= 0) {
                state.carts[IteamIndex].qtn += 1
            } else {
                const temp = { ...action.payload, qtn: 1 }
                return {
                    ...state,
                    carts: [...state.carts, temp]
                }
            }

        case "RMV_CART":
            const data = state.carts.filter((el) => el.id !== action.payload)
            return {
                ...state,
                carts: data
            }

        case "DEC_CART":
            const IteamIndex_DEC = state.carts.findIndex((item) => item.id === action.payload.id)
            if (state.carts[IteamIndex_DEC].qtn >= 1) {
                const dlitem = state.carts[IteamIndex_DEC].qtn -= 1;
                console.log([...state.carts, dlitem]);

                return {
                    ...state,
                    carts: [...state.carts]
                }
            } else if (state.carts[IteamIndex_DEC].qtn === 1) {
                const data = state.carts.filter((el) => el.id !== action.payload)
                return {
                    ...state,
                    carts: data
                }
            };

        default:
            return state
    }
}
