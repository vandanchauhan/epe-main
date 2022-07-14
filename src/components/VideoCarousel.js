import React from "react";
import Progressbar from "./Progressbar";

export default class VideoCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.videoRef1 = React.createRef();
    this.videoRef2 = React.createRef();
    this.videoRef3 = React.createRef();
    this.video = null;
    this.state = {
      videoCurrentProgress1: 0,
      videoCurrentProgress2: 0,
      videoCurrentProgress3: 0
    };
  }

  toggleVideoPlay = ({ current: video }) => {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  showCurrentTime(id, { current: videoDom }) {
    const video = "videoCurrentProgress" + id;
    this.setState({
      [video]: (videoDom.currentTime / videoDom.duration) * 100
    });
    console.log("currentTime" + id, videoDom.currentTime);
  }

  componentDidMount() {
    this.videoRef1.current.addEventListener("timeupdate", () => {
      this.showCurrentTime(1, this.videoRef1);
    });
    this.videoRef2.current.addEventListener("timeupdate", () => {
      this.showCurrentTime(2, this.videoRef2);
    });
    this.videoRef3.current.addEventListener("timeupdate", () => {
        this.showCurrentTime(3, this.videoRef3);
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.videoCurrentProgress1 === 100 && this.state.videoCurrentProgress2 !== 100) {
        this.videoRef2.current.play();
    }
    if (this.state.videoCurrentProgress2 === 100 && this.state.videoCurrentProgress3 !== 100) {
        this.videoRef3.current.play();
    }
  }

  render() {
      console.log(this.state.videoCurrentProgress1);
    return (
        <div>
            <div className="relative h-48">
                <div className={'absolute'}>
                    <video
                        ref={this.videoRef3}
                        onClick={() => this.toggleVideoPlay(this.videoRef3)}
                        src="https://media.giphy.com/media/klIaoXlnH9TMY/giphy.mp4"
                        muted
                        playsInline
                    />
                </div>
                <div className={this.state.videoCurrentProgress2 === 100 ? 'hidden' : 'absolute'}>
                        <video
                            ref={this.videoRef2}
                            onClick={() => this.toggleVideoPlay(this.videoRef2)}
                            src="https://media.giphy.com/media/klIaoXlnH9TMY/giphy.mp4"
                            muted
                            playsInline
                        ></video>
                    </div>
                <div className={this.state.videoCurrentProgress1 === 100 ? 'hidden' : 'absolute'}>
                        <video
                        ref={this.videoRef1}
                        onClick={() => this.toggleVideoPlay(this.videoRef1)}
                        src="https://media.giphy.com/media/klIaoXlnH9TMY/giphy.mp4"
                        muted
                        playsInline
                        />
                </div>
            </div>
            <div className="flex flex-row justify-between">
                <Progressbar done={this.state.videoCurrentProgress1} />
                <Progressbar done={this.state.videoCurrentProgress2} />
                <Progressbar done={this.state.videoCurrentProgress3} />
            </div>
        </div>
    );
  }
}

const styles = {
  videozone: {
    width: "480px",
    position: "relative"
  }
};
