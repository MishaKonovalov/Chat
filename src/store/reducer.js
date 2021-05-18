const initialState = {
    dialogues: [],
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOADED_DIALOGUES':
            return {
                ...state,
                dialogues: action.dialogues,
            }

        default:
            return state
    }
}
