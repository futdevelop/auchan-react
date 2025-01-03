import { createSlice } from '@reduxjs/toolkit'
import useDataApi from '../hooks/useDataApi';

const initialState = {
  statusLoading: 'loading',
  dataLoaded: false,
  data: [],
}

export const fetchData = () => async dispatch => {
  const { getData } = useDataApi()
  dispatch(dataFetching())
  try {
    const res = await getData()

    console.log(res, 'res')
    dispatch(dataFetched(res))
  } catch {
    dispatch(dataFetchedError())
  }
}

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    dataFetching: state => {
      state.statusLoading = 'loading'
    },
    dataFetched: (state, action) => {
      state.statusLoading = 'idle'
      state.dataLoaded = true
      state.data = action.payload
    },
    dataFetchedError: state => {
      state.statusLoading = 'error'
    },
    setStatusLoading: (state, action) => {
      state.statusLoading = action.payload
    },
  },
})

const { actions, reducer } = dataSlice
export default reducer

export const { dataFetching, dataFetched, dataFetchedError, setStatusLoading } =
  actions
