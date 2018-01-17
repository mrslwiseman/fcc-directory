import React, { Component } from 'react';


const MemberLoader = (props) => {
    return (
        <div className="m m--loading">

            <div className="m__photo">
                <div className="m__img"> </div>
            </div>


            <div className="m__details">
                <div className="m__name">
                </div>

                <div>
                    <p className="m__stack"></p>
                </div>



                <div className="m__location"></div>


            </div>


            <div className="m__connect">
                <div></div>
                <div></div>
                <div></div>
            </div>



            <div className="m__bio">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>



        </div>
    )
}

export default MemberLoader;