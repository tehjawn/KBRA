import * as React from "react";

import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import TimePicker from 'material-ui/TimePicker';

import * as BellCounter from './BellCounterLib';

export default class ClockTowerCard extends React.Component {

  handleStartTime = (event, time) => {
    this.setState({ startTime: time });
  };

  handleEndTime = (event, time) => {
    this.setState({ endTime: time });
  };

  constructor(props) {
    super(props);
    this.state = { startTime: null, endTime: null, bellCount: null };
  }

  render() {
    return (
      <div className="card-ctn">  
        <Card>
          <CardHeader
            title="John Nguyen"
            subtitle="Full-stack Web Developer"
            avatar="https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAfOAAAAJDhlMTY5MDkyLTgwNGMtNDhmZC04MzQ0LTIxZTNmMzEyZjc1Mw.jpg"
          />
          <CardMedia
            overlay={<CardTitle title="Clock Tower Bell Counter" subtitle="Input a start time and an end time and find out how many times the clock tower bell will chime!" />}
          >
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/4d/GuthrieTower.JPG" alt="Bell Tower Image" />
          </CardMedia>
          <div className="time-picker-ctn">
            <TimePicker
              className="time-picker"
              format="24hr"
              hintText="Start Time"
              value={this.state.startTime}
              onChange={this.handleStartTime}
            />
            <TimePicker
              className="time-picker"
              format="24hr"
              hintText="End Time"
              value={this.state.endTime}
              onChange={this.handleEndTime}
            />
          </div>
          <CardActions>
            <RaisedButton label="Calculate" onClick={() => {
              let bellCount = BellCounter.getBellCountAll(this.state.startTime, this.state.endTime)
              console.log(bellCount)
            }} />
          </CardActions>
        </Card>
      </div>
    );
  }
}