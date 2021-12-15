import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const GET_MISSIONS = 'GET_MISSIONS/fulfilled';
const fetchApi = 'https://api.spacexdata.com/v3/missions';

const initialState = {
  status: 'empty',
  missionList: [],
};

export const getMissions = createAsyncThunk('GET_MISSIONS', async () => {
  const fetchData = await axios.get(fetchApi);
  const result = await fetchData.data;
  console.log(result);
  return result;
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSIONS:
      return {
        status: 'fetched',
        missionList: [...state.missionList, ...action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
