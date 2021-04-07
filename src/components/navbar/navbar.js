import React, { Component, Fragment} from 'react';
import './navbar.css';

class NavBar extends Component {
     render() {

        return(
            <Fragment>
                <div className="navbar">
                   <div className="ico">

                      <p>315</p>    
                      <i class="i-ico4 fas fa-thumbs-up fa-1.5x"></i>
                      <p>135</p>
                      <i class="i-ico3 fas fa-gem fa-1x"></i>
                      <p>180</p>
                      <i class="i-ico1 fas fa-dollar-sign fa-1x"></i>
                      <p className="p-sta1">7</p>
                      <i class="i-ico2 fas fa-cog fa-1x"></i>
                   </div>

                   <div className="nb-inf">
                        <img className="img-nb" src="https://www.wahanahonda.com/assets/default/media/img/users/user4.png"></img>
                        <p className="p-inf1">Рябий Андрій</p>
                        <p className="p-inf2">28c15-2ПА</p>
                   </div>
                </div>
            </Fragment>
        )
     }
}

export default NavBar;