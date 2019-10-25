import produce from 'immer';

const INITIAL_STATE = {
  meetups: [],
  loading: false,
};

export default function meetup(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@managing/GET_MEETUPS_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@managing/GET_MEETUPS_SUCCESS': {
        draft.meetups = action.payload.meetups;
        draft.loading = false;
        break;
      }
      case '@managing/FAILURE': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
