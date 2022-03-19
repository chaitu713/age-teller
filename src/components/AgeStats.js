import React, { Component } from "react";
import partyPopper from '../assets/party-popper.jpg';

class AgeStats extends Component {

    timeSense(date) {
        let today = new Date().getTime();
        let other_day = new Date(date).getTime();
        let difference = Math.abs(today - other_day);

        let days = Math.floor(difference / (1000*3600*24));
        let years = Math.floor(days/365);
        days -= years*365;
        let months = Math.floor(days/31);
        days -= months*31;

        return `${years} years ${months} months, and ${days} days`
    }

    render() {
        return(
            <div>
                <h3>{this.props.date}</h3>
                <h4>Congrats on {this.timeSense(this.props.date)}!</h4>
                <img src = {partyPopper} alt = "Party Popper" className="party-popper" />
            </div>
        )
    }
}

export default AgeStats;