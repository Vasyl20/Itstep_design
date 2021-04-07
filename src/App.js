import React, { Component, Fragment, Fregment } from 'react';
import './App.css';
import Activity from './components/activity/activity';
import NavBar from './components/navbar/navbar';
import SidePanel from './components/sidePanel/sidePanel';
import TableLider from './components/tableLider/tableLider';
import YourRewards from './components/yourRewards/yourRewards';
import {BrowserRouter as Router, Route,  Link, Switch } from 'react-router-dom';

class App extends Component{
   render() {
       return(
         <Fragment>
           <div>
               <div className="SidePanel">
                  <SidePanel></SidePanel>
               </div>
             <div>
               <NavBar></NavBar>
              <div>
                   <YourRewards></YourRewards>
                   <TableLider></TableLider>
                   <Activity></Activity>
              </div>

             </div>
              
           </div>
         </Fragment>
       )
   }
}

export default App;
