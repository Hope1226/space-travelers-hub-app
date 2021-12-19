import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const GET_MISSIONS = 'GET_MISSIONS/fulfilled';
const JOIN_MISSIONS = 'JOIN_MISSIONS';
const LEAVE_MISSIONS = 'LEAVE_MISSIONS';
const LEAVE_JOINED = 'LEAVE_JOINED';
const fetchApi = 'https://api.spacexdata.com/v3/missions';

const initialState = {
  status: 'empty',
  missionList: [],
  joinedMissions: [],
};

export const getMissions = createAsyncThunk('GET_MISSIONS', async () => {
  const fetchData = await axios.get(fetchApi);
  const result = await fetchData.data;
  return result;
});

export const leaveJoinedMission = (payload) => ({
  type: LEAVE_JOINED,
  payload,
});

export const joinMission = (payload) => ({
  type: JOIN_MISSIONS,
  payload,
});

export const leaveMission = (payload) => ({
  type: LEAVE_MISSIONS,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSIONS:
      return {
        status: 'fetched',
        missionList: [...state.missionList, ...action.payload],
        joinedMissions: state.joinedMissions,
      };
    case JOIN_MISSIONS:
      return {
        status: state.status,
        missionList: state.missionList,
        joinedMissions: [...state.joinedMissions, action.payload],
      };
    case LEAVE_MISSIONS:
      return {
        status: state.status,
        missionList: state.missionList,
        joinedMissions: [...action.payload],
      };
    case LEAVE_JOINED:
      return {
        status: state.status,
        missionList: state.missionList,
        joinedMissions:
          [...state.joinedMissions.filter((joinedMission) => joinedMission.id !== action.payload)],
      };
    default:
      return state;
  }
};

export default reducer;
