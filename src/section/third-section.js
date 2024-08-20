import React, { Component } from 'react';
import '../style/style.css'; // Подключение стилей
import Icon1 from '../image/png/icons-card1.png'
import Icon2 from '../image/png/icon-card2.png'
import Icon3 from '../image/png/icon-card3.png'

class Card extends Component {
  render() {
    const { title, description, icon } = this.props;
    return (
      <div className="card">
        <div className="card-icon">
          <img src={icon} alt="icon" />
        </div>
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <button className="card-button">Подробнее</button>
      </div>
    );
  }
}

class CardContainer extends Component {
  render() {
    return (
      <div className='third_section'>
        <div className='third_section_title'>
            <h1 className='third_section_title_text'>Способы подключения</h1>
        </div>
        <div className="card-container">
        <Card 
          title="SIP Транк"
          description="Вариант для тех у кого уже есть АТС. Предоставляем настройки с несколькими вариантами защиты."
          icon={Icon1}
        />
        <Card 
          title="ВИРТУАЛЬНАЯ АТС"
          description="Телефонная станция, которая позволит организовать телефонию для вашего бизнеса за 1 день."
          icon={Icon2}
        />
        <Card 
          title="ВИРТУАЛЬНЫЙ НОМЕР"
          description="Вариант для тех у кого уже есть АТС. Предоставляем настройки с несколькими вариантами защиты."
          icon={Icon3}
        />
      </div>
      </div>
    );
  }
}

export default CardContainer;
