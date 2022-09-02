import { createSlice } from '@reduxjs/toolkit'

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const  nameTrainerSlice= createSlice({
        // Es donde le pondremos el nombre del slice en un string
	name: 'nameTrainer',
        // un valor inicial en este caso string vacio
    initialState: '',
    reducers: {
        // el action.payload nos permite pasar informacion desde la aplicacion 
        // hacia el estado(store)
        setNameTrainer:(state, action)=>action.payload
        
    }
})

// guardamos el action en un objeto destructurado setNameTrainer
// y lo exportamos
export const { setNameTrainer } = nameTrainerSlice.actions

export default nameTrainerSlice.reducer