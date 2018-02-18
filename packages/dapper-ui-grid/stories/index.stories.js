import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import theme from 'dapper-ui-theme-provider';
import { Grid, Row, Col } from '../index';

storiesOf('Grid',module)
.add('Basic grid with columns',() =>(
  <ThemeProvider theme={theme}>
    <Grid>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} >
          <div style={{ textAlign: 'center', backgroundColor: 'blue', color: 'white' }}> 12 columns</div>
        </Col>
      </Row>
      <Row>
        <Col xs={6} sm={6} md={6} lg={6}>
          <div style={{ textAlign: 'center', backgroundColor: 'blue', color: 'white' }}> 6 columns</div>
        </Col>
        <Col xs={6} sm={6} md={6} lg={6}>
          <div style={{ textAlign: 'center', backgroundColor: 'blue', color: 'white' }}> 6 columns</div>
        </Col>
      </Row>
      <Row>
        <Col xs={3} sm={3} md={3} lg={3}>
          <div style={{ textAlign: 'center', backgroundColor: 'blue', color: 'white' }}> 3 columns</div>
        </Col>
        <Col xs={3} sm={3} md={3} lg={3}>
          <div style={{ textAlign: 'center', backgroundColor: 'blue', color: 'white' }}> 3 columns</div>
        </Col>
        <Col xs={3} sm={3} md={3} lg={3}>
          <div style={{ textAlign: 'center', backgroundColor: 'blue', color: 'white' }}> 3 columns</div>
        </Col>
        <Col xs={3} sm={3} md={3} lg={3}>
          <div style={{ textAlign: 'center', backgroundColor: 'blue', color: 'white' }}> 3 columns</div>
        </Col>
      </Row>
      <Row>
        <Col xs={2} sm={2} md={2} lg={2}>
          <div style={{ textAlign: 'center', backgroundColor: 'blue', color: 'white' }}> 2 columns</div>
        </Col>
        <Col xs={2} sm={2} md={2} lg={2}>
          <div style={{ textAlign: 'center', backgroundColor: 'blue', color: 'white' }}> 2 columns</div>
        </Col>
        <Col xs={2} sm={2} md={2} lg={2}>
          <div style={{ textAlign: 'center', backgroundColor: 'blue', color: 'white' }}> 2 columns</div>
        </Col>
        <Col xs={2} sm={2} md={2} lg={2}>
          <div style={{ textAlign: 'center', backgroundColor: 'blue', color: 'white' }}> 2 columns</div>
        </Col>
        <Col xs={2} sm={2} md={2} lg={2}>
          <div style={{ textAlign: 'center', backgroundColor: 'blue', color: 'white' }}> 2 columns</div>
        </Col>
        <Col xs={2} sm={2} md={2} lg={2}>
          <div style={{ textAlign: 'center', backgroundColor: 'blue', color: 'white' }}> 2 columns</div>
        </Col>
      </Row>
      <Row>
        <Col xs={1} sm={1} md={1} lg={1}>
          <div style={{ textAlign: 'center', backgroundColor: 'blue', color: 'white' }}> 1 columns</div>
        </Col>
        <Col xs={1} sm={1} md={1} lg={1}>
          <div style={{ textAlign: 'center', backgroundColor: 'blue', color: 'white' }}> 1 columns</div>
        </Col>
        <Col xs={1} sm={1} md={1} lg={1}>
          <div style={{ textAlign: 'center', backgroundColor: 'blue', color: 'white' }}> 1 columns</div>
        </Col>
        <Col xs={1} sm={1} md={1} lg={1}>
          <div style={{ textAlign: 'center', backgroundColor: 'blue', color: 'white' }}> 1 columns</div>
        </Col>
        <Col xs={1} sm={1} md={1} lg={1}>
          <div style={{ textAlign: 'center', backgroundColor: 'blue', color: 'white' }}> 1 columns</div>
        </Col>
        <Col xs={1} sm={1} md={1} lg={1}>
          <div style={{ textAlign: 'center', backgroundColor: 'blue', color: 'white' }}> 1 columns</div>
        </Col>
        <Col xs={1} sm={1} md={1} lg={1}>
          <div style={{ textAlign: 'center', backgroundColor: 'blue', color: 'white' }}> 1 columns</div>
        </Col>
        <Col xs={1} sm={1} md={1} lg={1}>
          <div style={{ textAlign: 'center', backgroundColor: 'blue', color: 'white' }}> 1 columns</div>
        </Col>
        <Col xs={1} sm={1} md={1} lg={1}>
          <div style={{ textAlign: 'center', backgroundColor: 'blue', color: 'white' }}> 1 columns</div>
        </Col>
        <Col xs={1} sm={1} md={1} lg={1}>
          <div style={{ textAlign: 'center', backgroundColor: 'blue', color: 'white' }}> 1 columns</div>
        </Col>
        <Col xs={1} sm={1} md={1} lg={1}>
          <div style={{ textAlign: 'center', backgroundColor: 'blue', color: 'white' }}> 1 columns</div>
        </Col>
        <Col xs={1} sm={1} md={1} lg={1}>
          <div style={{ textAlign: 'center', backgroundColor: 'blue', color: 'white' }}> 1 columns</div>
        </Col>
      </Row>
    </Grid>
  </ThemeProvider>
));
