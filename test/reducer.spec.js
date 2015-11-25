import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';

import reducer from '../src/reducer';

describe('reducer', () => {

  it('handles SET_STATE', () => {
    const initialState = Map();
    const action = {
      type: 'SET_STATE',
      state: Map({
        files: List.of('1a4sa'),
        file: {
          name: '1a4sa_name',
          contents: 'console.log("Hello World!");'
        },
        code: 'console.log("Hello World!");'
      })
    };
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      files: ['1a4sa'],
      file: {
        name: '1a4sa_name',
        contents: 'console.log("Hello World!");'
      },
      code: 'console.log("Hello World!");'
    }));
  });

  it('handles SET_STATE with plain JS payload', () => {
    const initialState = Map();
    const action = {
      type: 'SET_STATE',
      state: {
        files: ['1a4sa'],
        file: {
          name: '1a4sa_name',
          contents: 'console.log("Hello World!");'
        },
        code: 'console.log("Hello World!");'
      }
    };
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      files: ['1a4sa'],
      file: {
        name: '1a4sa_name',
        contents: 'console.log("Hello World!");'
      },
      code: 'console.log("Hello World!");'
    }));
  });

  it('handles SET_STATE without initial state', () => {
    const action = {
      type: 'SET_STATE',
      state: {
        files: ['1a4sa'],
        file: {
          name: '1a4sa_name',
          contents: 'console.log("Hello World!");'
        },
        code: 'console.log("Hello World!");'
      }
    };
    const nextState = reducer(undefined, action);

    expect(nextState).to.equal(fromJS({
      files: ['1a4sa'],
      file: {
        name: '1a4sa_name',
        contents: 'console.log("Hello World!");'
      },
      code: 'console.log("Hello World!");'
    }));
  });

  it('handles LOAD_FILE by setting file and code', () => {
    const state = fromJS({
      files: ['1a4sa']
    });
    const action = {type: 'LOAD_FILE', file: {
      name: '1a4sa_name',
      contents: 'console.log("Hello World!");'
    }};
    const nextState = reducer(state, action);

    expect(nextState).to.equal(fromJS({
      files: ['1a4sa'],
      file: {
        name: '1a4sa_name',
       contents: 'console.log("Hello World!");',
      },
      code: 'console.log("Hello World!");'
    }));
  });

});
