export function setState(state) {
  return {
    type: 'SET_STATE',
    state
  };
}

export function setToolbar(state, toolbar) {
  return {
    type: 'SET_TOOLBAR',
    toolbar
  };
}

export function selectFile(fileid) {
  return {
    type: 'SELECT_FILE',
    fileid
  };
}

export function setCode(code) {
  return {
    type: 'SET_CODE',
    code
  };
}

export function setPreview(preview) {
  return {
    type: 'SET_PREVIEW',
    preview
  };
}

export function setBuffer(buffer) {
  return {
    type: 'SET_BUFFER',
    buffer
  };
}

export function persistFile(fileid) {
  return {
    type: 'PERSIST_FILE',
    fileid
  };
}

export function selectToolbar(id) {
  return {
    type: 'SELECT_TOOLBAR',
    id
  };
}

export function setModal(modal) {
  return {
    type: 'SET_MODAL',
    modal
  };
}

export function setModalStatus(status) {
  return {
    type: 'SET_MODAL_STATUS',
    status
  };
}
