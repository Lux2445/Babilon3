import Icon from '../image/png/phone.png'
import Google from '../image/png/GooglePlay.png'
import AppStore from '../image/png/AppStory.png'
import React, { Component } from 'react';
import Gif from '../image/png/c9103d691f844c5e768cb69e9386ac44.gif'

class PromoBlock extends Component {
  render() {
    return (
      <div className='five_section'>
          <div className="promo-block">
                <div className="promo-image">
          <img src={Icon} alt="Babilon-T Messenger" />
        </div>
        <div className="promo-content">
          <h2>Для звонков и смс с удобным интерфейсом</h2>
          <ul>
            <li><img src={Gif} alt='' className='gif'/>Оставайтесь на связи вне офиса и в поездке</li>
            <li><img src={Gif} alt='' className='gif'/>Смотрите статистику звонков и запись разговоров</li>
            <li><img src={Gif} alt='' className='gif'/>Помечайте номера алиасами для удобной работы</li>
            <li><img src={Gif} alt='' className='gif'/>Звоните, принимайте и отправляйте СМС</li>
          </ul>
          <div className="store-buttons">
            <a href='#'>
            <img src={Google} alt="Google Play" />
            </a>
            <a href='#'>
            <img src={AppStore} alt="App Store" />
            </a>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default PromoBlock;
