import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Input from 'react-bootstrap/lib/Input';
import Button from 'react-bootstrap/lib/Button';

export default React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return <div>
      <Grid>
        <Row>
          <Col xs={12} md={12}>
            <FormGroup>
              <Input
                type="text"
                placeholder="Username"
              />
              <Input
                type="text"
                placeholder="Password"
              />
              <Button>Submit</Button>
            </FormGroup>
          </Col>
        </Row>
      </Grid>
    </div>
  }
});
