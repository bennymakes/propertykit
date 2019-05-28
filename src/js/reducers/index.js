// src/js/reducers/index.js
import { ADD_ARTICLE } from "../constants/action-types";
import { LOGIN_STRINGS } from "../constants/strings";
import React from "react";
import Login from "../../components/login/index";

const initialState = {
  articles: [],
  user: { id: null },
  ui: {
    display: <Login />,
    login: {
      title: LOGIN_STRINGS.title,
      loginButton: LOGIN_STRINGS.loginButton,
      biline: LOGIN_STRINGS.biline,
      forgot: LOGIN_STRINGS.forgot,
      register: LOGIN_STRINGS.register
    }
  }
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ARTICLE: {
      return Object.assign({}, state, {
        articles: state.articles.concat(action.payload)
      });
    }
    default: {
      return state;
    }
  }
}

export default rootReducer;
