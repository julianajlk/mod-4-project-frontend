import React from 'react';
import SideMenu from '../components/SideMenu';
import Map from '../components/Map';
import PlaceContainer from './PlaceContainer';

import { Grid, Row, Col } from 'react-bootstrap';

class TravelContainer extends React.Component {
  constructor() {
    super()

  }

  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={6} md={4}>
            <SideMenu />
          </Col>
          <Col xs={12} md={8}>
            <Map />
            <PlaceContainer />
          </Col>

        </Row>

      </Grid>
    )
  }
}

export default TravelContainer