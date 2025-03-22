import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IAuth {
    authModal: boolean
}

const initialState: IAuth = {
    authModal: true,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthModal(state, action: PayloadAction<boolean>) {
            state.authModal = action.payload
        }
    }
})

export const { setAuthModal } = authSlice.actions
export default authSlice.reducer