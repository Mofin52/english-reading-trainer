import React from "react";
import {connect} from "react-redux";
import {saveTime} from "../../actions";

class Timer extends React.Component {

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
        this.props.saveTime({time: this.state.time});
    }

    tick = () => {
        this.setState({
            time: this.state.time + 1
        });
    };

    render() {
        if (!!this.props.testSubmitted) {
            this.props.saveTime({time: this.state.time});
            return null;
        }
        return <p>Time {this.state.time}</p>;
    }

}

const mapStateToProps = (state) => {
    return {
        testSubmitted: state.result.testSubmitted
    }
}

export default connect(mapStateToProps, {saveTime})(Timer);