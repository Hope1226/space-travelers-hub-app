const ADD_ROCKETS = 'rocketStore/rockets/ADD_ROCKETS';
const RESERVE_ROCKET = 'rocketStore/rockets/RESERVE_ROCKET';
const ERR_MESSAGE = 'rocketStore/rockets/ERR_MESSAGE';
const rocketsApi = 'https://api.spacexdata.com/v3/rockets';

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

// async functions

export const getRockets = () => (dispatch) => fetch(`${rocketsApi}`)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((rocket) => {
      const newRocket = {
        id: rocket.id,
        name: rocket.rocket_name,
        description: rocket.description,
        img: rocket.flickr_images[Math.floor(Math.random() * 2)],
      };
      dispatch(addRokets(newRocket));
    });
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
