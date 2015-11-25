import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import '../css/Toolbar.css';

import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem from 'react-bootstrap/lib/NavItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';

import Button from 'react-bootstrap/lib/Button';
import FontAwesome from 'react-fontawesome';

export default React.createClass({
  mixins: [PureRenderMixin],
  clickHandler: function(id, label) {
    switch(label) {
      case "Save":
      case "Import":
      case "Export":
      case "Publish":
      case "Customer support":
      case "About":
        this.props.selectToolbar(id);
        break;
      case "API Docs":
        var win = window.open('http://api.liquidis.io', '_blank');
        win.focus();
      case "Run":
        this.props.setCode(this.props.buffer);
        break;
      case "Undo":
        this.props.undo();
        break;
      case "Redo":
        this.props.redo();
        break;
      case "Enable vim":
        break;
      case "Submit feedback":
        break;
      case "Exit":
        location.href = 'https://codeboxsystems.com/liquidis';
      default:
        break;
    }
  },
  render: function() {
    return <div id="toolbar-container">

      <Navbar className="toolbar-list">
        <Nav>
          {this.props.toolbar ? this.props.toolbar.map((node, i) => {

            if (node.get('items')) {
              return (
                <NavDropdown key={i} eventKey={i} title={node.get('label')} id="basic-nav-dropdown">
                  {node.get('items').map((subnode, j) => {
                    return (
                      <MenuItem key={i+"."+j} eventKey={i+"."+j} className={subnode.get('disabled') ? "disabled-menu-item" : ""} onClick={() => this.clickHandler(subnode.get('id'), subnode.get('label'))}>{subnode.get('label')}<span className="shortcut-key">{subnode.get('shortcut') ? subnode.get('shortcut') : ""}</span></MenuItem>
                    );
                  })}
                </NavDropdown> 
              );
            } else {
              return (
                <Button key={i} bsStyle="success" bsSize="xsmall" onClick={() => this.props.setCode(this.props.buffer)}>{node.get('label')} <FontAwesome name='play-circle' /></Button>
              )
            }
           

          }) : ""}
        </Nav>
      </Navbar>
    </div>
  }
});
