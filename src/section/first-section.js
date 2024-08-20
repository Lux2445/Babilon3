import logo1 from '../image/png/firstsectionicon1.png'
import logo2 from '../image/png/firstsectionicon2.png'
import logo3 from '../image/png/firstsectionicon3.png'
import logo4 from '../image/png/firstsectionicon4.png'
import React, { Component } from 'react';
import '../style/style.css'; // Подключение стилей

class IpTelephonyBlock extends Component {
  render() {
    return (
      <div className='first_section'>
          <div className="ip-telephony-block">
        <h2 className="title">IP-телефония для бизнеса</h2>
        <p className="subtitle">Выгодные телефонные звонки через интернет, управление коммуникациями и продажами</p>
        
        <div className="features">
          <div className="feature">
            <img src={logo1} alt="icon1" className="feature-icon" />
            <p className='feature-icon-text'>Автоматически соединяйтесь с клиентами</p>
          </div>
          <div className="feature">
            <img src={logo2}alt="icon2" className="feature-icon" />
            <p className='feature-icon-text'>Увеличивайте конверсию обращений в продажи</p>
          </div>
          <div className="feature">
            <img src={logo3} alt="icon3" className="feature-icon" />
            <p className='feature-icon-text'>Контролируйте общение с клиентами</p>
          </div>
          <div className="feature">
            <img src={logo4} alt="icon4" className="feature-icon" />
            <p className='feature-icon-text'>Обеспечьте стабильную связь</p>
          </div>
        </div>

        <button className="learn-more">Узнать больше</button>
      </div>
      </div>
    );
  }
}

export default IpTelephonyBlock;
