import {Map} from 'immutable';
import {INITIAL_STATE, setToolbar, setFiles, selectFile, setCode, setPreview, setBuffer, persistFile, selectToolbar, setModal, setModalStatus} from './core';

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'SET_STATE':
      return setState(state, action.state);
    case 'SET_TOOLBAR':
      return setToolbar(state, action.toolbar)
    case 'SET_FILES':
      return setFiles(state, action.files)
    case 'SELECT_FILE':
      return selectFile(state, action.fileid)
    case 'SET_CODE':
      return setCode(state, action.code)
    case 'SET_PREVIEW':
      return setPreview(state, action.preview)
    case 'SET_BUFFER':
      return setBuffer(state, action.buffer)
    case 'PERSIST_FILE':
      return persistFile(state, action.fileid)
    case 'SELECT_TOOLBAR':
      return selectToolbar(state, action.id)
    case 'SET_MODAL':
      return setModal(state, action.modal)
    case 'SET_MODAL_STATUS':
      return setModalStatus(state, action.status)
    default:
      return state;
  }
  return state;
}
