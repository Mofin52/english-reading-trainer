import React from "react";

export default class Timer extends React.Component {

    state = {
        timer: null,
        time: 0
    };

    componentDidMount() {
        let timer = setInterval(this.tick, 1000);
        this.setState({timer})
    }

    componentWillUnmount() {
        clearInterval(this.state.timer);
    }

    tick = () => {
        this.setState(() => ({
            time: Math.floor((new Date() - this.props.startDate) / 1000)
        }));
    };

    render() {
        return (
            <p>Time: {this.state.time}</p>
        );
    }
}