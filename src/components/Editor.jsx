import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import AceEditor from 'react-ace';
import ace from 'brace';
import javascript from 'brace/mode/javascript';
import github from 'brace/theme/github';
import vim from 'brace/keybinding/vim';

import '../css/Editor.css';

export default React.createClass({
  mixins: [PureRenderMixin],
  onChange: function(newValue) {
    this.props.setBuffer(newValue)
  },
  componentDidMount: function() {
    var editor = ace.edit('brace-editor');
    var editorDiv = document.getElementById('brace-editor');
    var doc = editor.getSession().getDocument();

    var lineHeight = 16;
    //editorDiv.style.height = lineHeight * doc.getLength() + "px";
    editorDiv.style.height = lineHeight * 75 + "px";
    editor.resize();
  },
  changeMode: function() {
  },
  undo: function() {
  },
  redo: function() {
  },
  render: function() {
    return <div id="editor-container">
      <AceEditor
        mode="javascript"
        theme="github"
        editorProps={{$blockScrolling: true}}
        width="100%"
        keyboardHandler="vim"
        onChange={this.onChange}
        value={this.props.buffer || (this.props.code ? this.props.code.get(-1) : "")}
      />
    </div>
  }
});
