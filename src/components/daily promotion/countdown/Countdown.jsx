import React, { Component } from "react";

export class Countdown extends Component {
    state = {
        hours: 1,
        minutes: 59,
        seconds: 59
    };

    setCountdownTimer = () => {
        const { hours, minutes, seconds } = this.state;
        if (hours === 0) {
            this.timerReset();
        } else if (minutes === 0 && seconds === 0) {
            this.decrementTimerHours();
        } else if (seconds === 0) {
            this.decrementTimerMinutes();
        } else {
            this.decrementTimerSeconds();
        }
    };

    decrementTimerHours = () => {
        return this.setState(prevState => ({
            hours: prevState.hours - 1,
            minutes: 59,
            seconds: 59
        }));
    };

    decrementTimerMinutes = () => {
        return this.setState(prevState => ({
            minutes: prevState.minutes - 1,
            seconds: 59
        }));
    };

    decrementTimerSeconds = () => {
        return this.setState(prevState => ({
            seconds: prevState.seconds - 1
        }));
    };

    timerReset = () => {
        this.setState({
            hours: 10,
            minutes: 59,
            seconds: 59
        });
    };

    addLeadingZeros = number => {
        return number < 10 ? "0" + number : number;
    };

    componentDidMount() {
        setInterval(this.setCountdownTimer, 1000);
    }
    render() {
        const { addLeadingZeros } = this;
        const { hours, minutes, seconds } = this.state;
        return (
            <div>
                <p id="time-left" className="text-gradient h1">
                    {addLeadingZeros(hours)}:{addLeadingZeros(minutes)}:
                    {addLeadingZeros(seconds)}
                </p>
            </div>
        );
    }
}

export default Countdown;
