import React, { Component, Fragment} from 'react';
import './tableLider.css';

class TableLider extends Component {
     render() {

        return(
            <Fragment>
               <div className="tableLider">
                <h2>Таблиця лідеров</h2>
                 <div className="tl-fnfo">
                     <div  className="info-tie"> 
                          <p className="p-st1">125</p>
                          <i className="i-ico3 fas fa-gem fa-2x  ico-mst1"></i>
                          <img className="img-еіе" src="https://www.wahanahonda.com/assets/default/media/img/users/user4.png"></img>
                          <p className="p-st2">180</p>
                          <i class="i-ico1 fas fa-dollar-sign fa-2x  ico-mst2"></i>
                     </div>
                     <div className="ol-info-cl">
                         <ol>
                             <li className="ol-bl-name">Рябий Андрій</li>
                             <li>Шумський Владислав</li>
                             <li>Конопліцький Володимир</li>
                             <li>Хавтрук Станіслав</li>
                             <li>Степанюк Анна</li>
                             <li>Чижевський Олександр</li>
                             <li>Лясковський Олександр</li>
                             <li>Янушувська Катерина</li>
                             <li>Яровой Карен</li>
                             <li>Корнейчук Егор</li>
                             <li>Беляев Шарль</li>
                             <li>Недбайло Тамара</li>
                             <li>Забужко Ирина</li>
                             <li>Михеева Валентина</li>
                             <li>Казакова Рада</li>
                             <li>Кириленко Федосья</li>
                         </ol>
                     </div>
                     <div className="ol-infonam-cl">
                        <ol className="num-inf-cl">
                                <li>315</li>
                                <li>290</li>
                                <li>271</li>
                                <li>235</li>
                                <li>232</li>
                                <li>225</li>
                                <li>215</li>
                                <li>211</li>
                                <li>210</li>
                                <li>205</li>
                                <li>195</li>
                                <li>189</li>
                                <li>176</li>
                                <li>174</li>
                                <li>167</li>
                                <li>166</li>
                        </ol>
                     </div>
                 </div>
               </div>
            </Fragment>
        )
     }
}

export default TableLider;