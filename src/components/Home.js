import React, { Component } from 'react';
import EngagementBar from './EngagementBar.js';
import Navbar from "./Navbar.js";
import Video from './Video.js';



class Home extends Component
{
  render()
  {
    return(
      <div className="videoContainer">
      <Navbar/>
      <span className="videoItem"><Video videoName="CircuitThing" url="https://cdn2.hubspot.net/hubfs/2738960/test/Alvin%20Yakatori/PersonalFitnessCaption.mp4?t=1573982576283"/></span>
      <span className="videoItem"><Video videoName="ChristmasTree" url="https://cdn2.hubspot.net/hubfs/2738960/test/Alvin%20Yakatori/ChristmasTreeCaption.mp4?t=1573982573740"/></span>
      <span className="videoItem"><Video videoName="BreakWrists" url="https://cdn2.hubspot.net/hubfs/2738960/test/Alvin%20Yakatori/FitnessCaption.mp4?t=1573982574645"/></span>
      <span className="videoItem"><Video videoName="RCPlane" url="https://cdn2.hubspot.net/hubfs/2738960/test/Alvin%20Yakatori/RCPlaneCaption.mp4?t=1573982572187"/></span>
      <span className="videoItem"><Video videoName="WoodWorking" url="https://cdn2.hubspot.net/hubfs/2738960/test/Alvin%20Yakatori/WoodworkingCaption.mp4?t=1573982571092"/></span>
      <span className="videoItem"><Video videoName="Bkaer" url="https://cdn2.hubspot.net/hubfs/2738960/test/Alvin%20Yakatori/WatermelonCaption.mp4?t=1573982567584"/></span>

      </div>
    )
  }
}

export default Home;

