import * as types from '../../actions/types';

const initialState = {
    jwt: null,
    loggedInUser: {},
    isLoggedIn: false,
    isInitialized: false,
    isLoading: false,
    isOnboarding: false,
    sidebarNavOpen: false,
    hasRoomId: false,
    roomId: null,
    notification: {
        show: false,
        type: null,
        message: ''
    }
};

export default function appState(state = initialState, action = {}) {
    switch (action.type) {
        case types.APP_INITIALIZED:
            return Object.assign({}, state, {
                isInitialized: action.payload
            });
        case types.UPDATE_JWT:
            return Object.assign({}, state, {
                jwt: action.payload
            });
        case types.UPDATE_LOGGED_IN_USER:
            return Object.assign({}, state, {
                loggedInUser: action.payload,
                isLoggedIn: true
            });
        case types.LOGOUT_USER:
            return Object.assign({}, state, {
                loggedInUser: {},
                isLoggedIn: false
            });
        case types.IS_LOADING:
            return Object.assign({}, state, {
                isLoading: action.payload
            });
        case types.UPDATE_NOTIFICATION:
            return Object.assign({}, state, {
                notification: action.payload
            });
        case types.TOGGLE_NAV:
            return Object.assign({}, state, {
              sidebarNavOpen: !state.sidebarNavOpen
            });
        case types.SHOW_AUCTION_ROOM_ID:
          return Object.assign({}, state, {
            hasRoomId: true,
            roomId: action.roomId
          });
        default:
            return state;
    }
}
