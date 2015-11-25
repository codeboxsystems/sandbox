import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import '../css/Preview.css';

export default React.createClass({
  mixins: [PureRenderMixin],
  postToIFrame: function(code) {
    var frame = document.getElementById('iframe');
    if (frame) {
      frame.contentWindow.postMessage(code, '*');
    }
  },
  render: function() {
    return <div id="preview-container">
      <iframe 
        id="iframe"
        width="100%"
        height="400"
        src="http://localhost/iframe.html"
        sandbox="allow-scripts allow-same-origin"
      >
      </iframe>
      {this.postToIFrame(this.props.code.get(-1))}
    </div>;
  }
});
