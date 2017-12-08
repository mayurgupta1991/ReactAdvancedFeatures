import React, { Component } from 'react';
import SimpleWebRTC from 'react-simplewebrtc';

export default class WebRtc extends Component {
    state = { text: '' };
    myObj = {a:1};

    change = ev => {
        this.setState({text: ev.target.value});
        console.log(this);
        console.log(this.myObj);
    }

    componentDidMount() {
        this.webrtc = new SimpleWebRTC({
            localVideoEl: this.localVideo,
            remoteVideosEl: "",
            autoRequestMedia: true,
            url : this.props.obj.signalmasterUrl
        });
        console.log("webrtc component mounted", this.webrtc);
    }

    render() {
        let {text} = this.state;
        return (
            <div>
                <video ref={x => { this.localVideo = x }} />
                <input type="text" value={text} onChange={this.change} />
            </div>
        );
    }
}


