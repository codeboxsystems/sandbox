import {Map, List} from 'immutable';

import code from '../test/basic.js';

export const INITIAL_STATE = Map({
  code: List.of(),
  contents: Map({
    a14sa: code["a14sa"],
    a14sb: code["a14sb"],
    a24sa: code["a24sa"],
    a24sb: code["a24sb"]
  }),
  modals: Map({
    ta1: Map({
      title: "Feature undergoing testing",
      contents: '"Save" is a feature we\'re currently only testing with private beta users.'
    }),
    ta2: Map({
      title: "Feature undergoing testing",
      contents: '"Import" is a feature we\'re currently only testing with private beta users.'
    }),
    ta3: Map({
      title: "Feature undergoing testing",
      contents: '"Export" is a feature we\'re currently only testing with private beta users.'
    }),
    ta4: Map({
      title: "Feature undergoing testing",
      contents: '"Publish" is a feature we\'re currently only testing with private beta users.'
    }),
    td3: Map({
      title: "Feature undergoing testing",
      contents: 'Customer support features are currently only being tested with private beta users. Please select "Submit feedback", above, as we\'d love to get your input.'
    }),
    td4: Map({
      title: "Liquidis™",
      contents: 'Copyright © 2015 Codebox Systems LLC, Alpha Channel, 0.0.1'
    }) 
  }),
  modal: Map({
    title: "Default title",
    contents: "Default contents"
  })
});

export function setToolbar(state, toolbar) {
  return state.set('toolbar', toolbar);
}

export function setFiles(state, files) {
  return state.set('files', List(files));
}

export function selectFile(state, fileid) {
  // optimize
  const contents = state.getIn(['contents', fileid])

  // hacky?
  const nextState = state.set('selectedFile', fileid)
  const nextNextState = nextState.set('buffer', contents)
  return nextNextState.set('code', List.of(contents));
}

export function setCode(state, contents) {
  return state.update('code', code => code.push(contents));
}

export function setPreview(state, contents) {
  return state.set('preview', contents);
}

export function setBuffer(state, contents) {
  return state.set('buffer', contents);
}

export function persistFile(state, fileid) {
  return state.setIn(['contents', fileid], state.get('buffer'));
}

export function selectToolbar(state, id) {
  const modal = state.getIn(['modals', id]);
  const nextState = setModal(state, modal)
  return nextState.set('modalStatus', true);
}

export function setModal(state, modal) {
  return state.set('modal', modal);
}

export function setModalStatus(state, status) {
  return state.set('modalStatus', status);
}
