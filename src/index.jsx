import React from 'react';
import ReactDOM from 'react-dom';
import Router, {Route} from 'react-router';
import {createStore} from 'redux';
import reducer from './reducer';
import {Provider} from 'react-redux';
import {setState} from './action_creators';
import App from './components/App';
import Login from './components/Login';
import {MainContainer} from './components/Main';
import {Map, List} from 'immutable';

import './css/bootstrap.min.css';
import './css/non-responsive.css';
import './css/index.css';
import './css/font-awesome.min.css';

const store = createStore(reducer);

store.dispatch({
  type: 'SET_TOOLBAR',
  toolbar: List.of(
    Map({
      label: "File",
      items: List.of(
        Map({
          id: "ta1",
          label: "Save",
          disabled: true
        }),
        Map({
          id: "ta2",
          label: "Import",
          disabled: true
        }),
        Map({
          id: "ta3",
          label: "Export",
          disabled: true
        }),
        Map({
          id: "ta4",
          label: "Publish",
          disabled: true
        }),
        Map({
          id: "ta5",
          label: "Exit"
        })
      )
    }),
    Map({
      label: "Edit",
      items: List.of(
        Map({
          id: "tb1",
          label: "Undo",
          shortcut: "⌘+Z, Ctrl+Z"
        }),
        Map({
          id: "tb2",
          label: "Redo",
          shortcut: "⌘+⇧+Z, Ctrl+⇧+Z"
        })
      )
    }),
    Map({
      id: "tc1",
      label: "Run"
    }),
    Map({
      label: "Help",
      items: List.of(
        Map({
          id: "td1",
          label: "API Docs"
        }),
        Map({
          id: "td2",
          label: "Submit feedback"
        }),
        Map({
          id: "td3",
          label: "Customer support",
          disabled: true
        }),
        Map({
          id: "td4",
          label: "About"
        })
      )
    }),
    Map({
      label: "Beta",
      items: List.of(
        Map({
          id: "te1",
          label: "Sign in"
        })
      )
    })
  )
});

store.dispatch({
  type: 'SET_FILES',
  files: List.of(
    Map({
      id: "p14sa",
      name: "shapes",
      items: List.of(
        Map({
          id: "a14sa",
          name: "shapes.js",
        }),
        Map({
          id: "a14sb",
          name: "decorators.js",
        })
      )
    }),
    Map({
      id: "p24sa",
      name: "physics",
      items: List.of(
        Map({
          id: "a24sa",
          name: "bounce.js",
        }),
        Map({
          id: "a24sb",
          name: "springs.js",
        })
      )
    })
  )
});

const routes = <Route component={App}>
  <Route path="/" component={MainContainer} />
  <Route path="/login" component={Login} />
</Route>;

ReactDOM.render(
  <Provider store={store}>
    <Router>{routes}</Router>
  </Provider>,
  document.getElementById('app')
);
