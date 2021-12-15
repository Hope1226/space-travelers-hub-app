import axios from 'axios';

const GET_MISSIONS = 'GET_MISSIONs';
const fetchApi = 'https://api.spacexdata.com/v3/missions';

// export const fetchMissions = (missions) => ({
//   type: GET_MISSIONS,
//   missions,
// });

export const getMissions = async () => {
  const fetchData = await axios.get(fetchApi);
  const res = fetchData.data;
  console.log(res);
  return res;
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case GET_MISSIONS:
      return [...state, action.missions];
    default:
      return state;
  }
};

export default reducer;
