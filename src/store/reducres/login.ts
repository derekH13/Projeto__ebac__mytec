import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DadosType } from "../../app/Interface/Interface";

type InitialType = {
    itens: DadosType[]
}

const initialState: InitialType = {
    itens: []
}

const loginSlice = createSlice({
    name: 'cadastro',
    initialState,
    reducers: {
        pegarLogin: (state, action: PayloadAction<DadosType[]>) => {
            
            //se não for vazio (false)
            if(action.payload.length > 0){
                state.itens = action.payload

            }
            
        }
    }
})

export const { pegarLogin } = loginSlice.actions

export default loginSlice.reducer;