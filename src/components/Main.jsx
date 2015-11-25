import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';

import Toolbar from './Toolbar';
import Filetree from './Filetree';
import Editor from './Editor';
import Preview from './Preview';

import SplitPane from 'react-split-pane/lib/SplitPane';
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';

import '../css/Main.css';

export const Main = React.createClass({
  mixins: [PureRenderMixin],
  componentDidMount: function() {
    /*
    window.addEventListener("beforeunload", function (e) {
        var confirmationMessage = 'If you leave or reload, all of your changes will be lost!';

        (e || window.event).returnValue = confirmationMessage; //Gecko + IE
        return confirmationMessage; //Gecko + Webkit, Safari, Chrome etc.
    });
    */
  },
  render: function() {
    return <div>
      <Toolbar {...this.props}/>
      <SplitPane split="vertical" minSize="50" defaultSize="150">
      <Filetree {...this.props} />
        <SplitPane split="vertical" defaultSize="620">
          <Editor {...this.props}/>
          <Preview code={this.props.code}/>
        </SplitPane>
      </SplitPane>

      <Modal show={this.props.modalStatus} onHide={() => this.props.setModalStatus(false)}>
        <Modal.Header closeButton>
        <Modal.Title>{this.props.modal.get('title')}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{this.props.modal.get('contents')}</p>
          <p>To get notified when the next batch of beta invites goes out, please subscribe at <a href="https://codeboxsystems.com" target="_blank">https://codeboxsystems.com</a> under the "Launch Updates" section of the home page.</p>
        </Modal.Body>
        <Modal.Footer>
        <Button onClick={() => this.props.setModalStatus(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>;
  }
});

function mapStateToProps(state) {
  return {
    toolbar: state.get('toolbar'),
    files: state.get('files'),
    selectedFile: state.get('selectedFile'),
    code: state.get('code'),
    preview: state.get('preview'),
    buffer: state.get('buffer'),
    modal: state.get('modal'),
    modalStatus: state.get('modalStatus')
  }
}

export const MainContainer = connect(
  mapStateToProps,
  actionCreators
)(Main);
