import React, { Component, Fragment} from 'react';
import './sidePanel.css';

class SidePanel extends Component {
     render() {

        return(
            <Fragment>
               <div className="sidePanel">
                    <div className="sp-img">
                       <img className="img-spico" src="http://www.itshag.ru/images/logo/logo1.png"></img>
                    </div>
                    <div className="rart-in-lc1">
                          <i class="fas fa-home fa-3x ico-st"></i>
                          <p className="p-cl-ft ut-il">Домашние завдання</p>
                    </div>
                    <div className="rart-in-lc1">
                           <i class="fas fa-chart-line fa-3x ico-st"></i>
                          <p className="p-cl-ft ut-il">Успиваємость</p>
                    </div>
           
                    <div className="rart-in-lc1">
                    <i class="fas fa-archive fa-3x ico-st"></i>
                          <p className="p-cl-ft ut-il">Учебниє материали</p>
                    </div>
                  
                    <div className="rart-in-lc1">
                           <i class="fas fa-bell fa-3x ico-st"></i>
                          <p className="p-cl-ft ut-kl">Новини</p>
                    </div>
                  
                    <div className="rart-in-lc1">
                          <i class="fas fa-calendar-alt fa-3x ico-st"></i>
                          <p className="p-cl-ft ut-il">Розписание</p>
                    </div>
                 
                    <div className="rart-in-lc1">
                          <i class="fas fa-comment-dots fa-3x ico-st"></i>
                          <p className="p-cl-ft ut-kl">Отзиви</p>
                    </div>
                    
                    <div className="rart-in-lc1">
                          <i class="fas fa-address-book fa-3x ico-st"></i>
                          <p className="p-cl-ft ut-kl">Контакти</p>
                    </div>
                 
                    <div className="rart-in-lc1">
                          <i class="fas fa-user-circle fa-3x ico-st"></i>
                          <p className="p-cl-ft ut-kl">Профиль</p>
                    </div>
                
                    <div className="rart-in-lc1">
                          <i class="far fa-question-circle fa-3x ico-st"></i>
                          <p className="p-cl-ft ut-il">Вопрос-Ответ</p>
                    </div>
               </div>
            </Fragment>
        )
     }
}

export default SidePanel;