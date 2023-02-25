import React from "react";
import './Msg.css'


class Msg extends React.Component {
    state = {
        show: true
    }




    render() {
        console.log(this.state.show)
        return (
            <>
                {
                    this.state.show ? <div className="msg">Message Box</div> : null
                }
                <div>
                    <button className="button show" onClick={() => {
                        this.setState({ show: true })
                    }}>Show</button>

                    <button className="button hide" onClick={() => {
                        this.setState({ show: false })
                    }}>Hide</button>

                    <button className="button togg" onClick={
                        () => { this.setState({ show: !this.state.show }) }
                    }>Toggle</button>
                </div>
            </>
        );
    }
}

export default Msg;