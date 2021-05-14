import React from 'react'
const SET_LOGGED_IN_USER_DETAILS = 'SET_LOGGED_IN_USER_DETAILS';

export function setLoggedInUserDetails(userDetails) {
   return {
      type: SET_LOGGED_IN_USER_DETAILS,
      payload: userDetails,
   }
}