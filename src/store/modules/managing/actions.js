export function getMeetupsRequest() {
  return {
    type: '@managing/GET_MEETUPS_REQUEST',
  };
}

export function getMeetupsSuccess(meetups) {
  return {
    type: '@managing/GET_MEETUPS_SUCCESS',
    payload: { meetups },
  };
}

export function cancelMeetupRequest(id) {
  return {
    type: '@managing/CANCEL_MEETUPS_REQUEST',
    payload: { id },
  };
}

export function createMeetupRequest(meetup) {
  return {
    type: '@managing/CREATE_MEETUP_REQUEST',
    payload: meetup,
  };
}

export function createMeetupSuccess(meetup) {
  return {
    type: '@managing/CREATE_MEETUP_SUCCESS',
    payload: { meetup },
  };
}

export function updateMeetupRequest(meetup) {
  return {
    type: '@managing/UPDATE_MEETUP_REQUEST',
    payload: meetup,
  };
}

export function failure() {
  return {
    type: '@managing/FAILURE',
  };
}
