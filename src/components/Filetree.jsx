import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import TreeView from 'react-treeview/lib/react-treeview';

import '../css/react-treeview.css';
import '../css/Filetree.css';

import FontAwesome from 'react-fontawesome';

export default React.createClass({
  mixins: [PureRenderMixin],
  selectFile: function(fileid) {
    if (this.props.selectedFile) {
      this.props.persistFile(this.props.selectedFile);
    }
    this.props.selectFile(fileid);
  },
  componentDidMount: function() {
    var arrows = document.getElementsByClassName('tree-view_arrow');
    for (var i = 0; i < arrows.length; i++) {
      arrows[i].innerHTML = '<span class="fa fa-folder-o"></span>';
    }
  },
  render: function() {
    return <div id="filetree-container">
      {this.props.files ? this.props.files.map((node, i) => {
        const label = <span className="node">{node.get('name')}</span>;
        return (
          <TreeView key={node.get('id')} nodeLabel={label} defaultCollapsed={false}>
          {node.get('items').map((subnode, i) => {
            return (
              <div onClick={() => this.selectFile(subnode.get('id'))} key={subnode.get('id') + i} className={subnode.get('id') === this.props.selectedFile ? "selectedFile info" : "info"}>
              <span>{subnode.get('name')}</span>
              </div>
            );
          })}
          </TreeView>
        );
      }) : ""}
    </div>;
  }
});
