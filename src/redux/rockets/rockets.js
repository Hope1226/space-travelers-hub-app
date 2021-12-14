const ADD_ROCKETS = 'rocketStore/rockets/ADD_ROCKETS';
const RESERVE_ROCKET = 'rocketStore/rockets/RESERVE_ROCKET';
const ERR_MESSAGE = 'rocketStore/rockets/ERR_MESSAGE';

const initialState = [];

export const addRokets = (payload) => ({
  type: ADD_ROCKETS,
  payload,
}
);

export const reserveRocket = (payload) => ({
  type: RESERVE_ROCKET,
  payload,
});

export const handleErr = () => ({
  type: ERR_MESSAGE,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ROCKETS:
      return [
        ...state, action.payload,
      ];
    case RESERVE_ROCKET:
      return state.map((rocket) => {
        if (rocket.id === action.payload) {
          return {
            ...rocket, reserved: !rocket.reserved,
          };
        }
        return rocket;
      });
    case ERR_MESSAGE:
      return 'NO RESPONSE IS RECIVED';
    default:
      return state;
  }
};

export default reducer;
