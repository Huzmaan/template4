import React from 'react';
import coffee from '../../Images/coffee.jpg'
import workbench from '../../Images/workbench.jpg';
import sound from '../../Images/sound.jpg';

const Work = () => {
    return (
        <div className="MainWork-css" id="mywork" >
            <div className="MainWork">
            <h2>My Work</h2>
            <h4>Some of my latest projects.</h4>
            </div>
            <div className="WorkImg-css">
            <div className="WorkImg1">
            <img className="WorkImg" src={coffee} alt="coffee" />
            <img className="WorkImg" src={workbench} alt="workbench" />
            <img  className="WorkImg3" src={sound} alt="sound" />
            </div>
            <div className="WorkImg2">
            <img className="WorkImg" src={workbench} alt="workbench" />
            <img className="WorkImg" src={coffee} alt="coffee" />
            <img className="WorkImg" src={workbench} alt="workbench" />
            </div>
            </div>
            <h4 className="Worktext">Just call me awesome.</h4>
        </div>
    )
}

export default Work
