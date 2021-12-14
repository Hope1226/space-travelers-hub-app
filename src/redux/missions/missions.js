const GET_MISSIONS = 'GET_MISSIONs';

export const fetchMissions = (missions) => ({
  type: GET_MISSIONS,
  missions,
});

const reducer = (state = [], action) => {
  switch (action.type) {
    case GET_MISSIONS:
      return [...state, action.missions];
    default:
      return state;
  }
};

export default reducer;
