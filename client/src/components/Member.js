import React, { Component } from 'react';

export default class Member extends Component {
    render() {
        return (
            <div className="m">
                    <div className="m__photo">
                        <img src="./images/image.jpg" className="m__img"/>
                    </div>
                    <div className="m__details">
                        <div className="m__name">
                            <h2>Matt Wiseman</h2>
                        </div>
                        <div className="m__stack">
                            <span className="m__stack-item">Mongo,</span>
                            <span className="m__stack-item">Express,</span>
                            <span className="m__stack-item">React,</span>
                            <span className="m__stack-item">Node.js</span>
                        </div>
                        <div>
                            <span className="m__location">Preston</span>
                        </div>
                    </div>
                        <div className="m__connect">
                            <a className="m__fcc" href="#"></a>
                            <a className="m__github" href="#"></a>
                            <a className="m__meetup" href="#"></a>
                            <a className="m__email" href="#"></a>

                        </div>
                    <div className="m__bio">
                        <p>Partial reference works similar to the parent reference, but while parent reference contains the whole selector, partial selectors contain only the first merged N levels of the nested selectors, so you could access those nesting levels individually.</p>
                    </div>
                    <div>
                        <p className="m__joined">Joined April 2017</p>
                    </div>
                </div>
        )
    }
}
