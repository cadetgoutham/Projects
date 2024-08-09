import {configureStore} from '@reduxjs/toolkit'
import Reducer from './Slices/ReduxSlice'

const Store = configureStore(
    {
        reducer:{
            List : Reducer
        }
    }
)

export default Store