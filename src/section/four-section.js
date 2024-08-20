import Icon1 from '../image/png/four-section-icon1.png'
import Icon2 from '../image/png/four-section-icon2.png'
import Icon3 from '../image/png/four-section-icon3.png'
import Icon4 from '../image/png/four-section-icon4.png'
import Icon5 from '../image/png/four-section-icon5.png'
import Icon6 from '../image/png/four-section-icon6.png'
import React, { Component } from 'react';

class FeatureBlock extends Component {
  render() {
    return (
      <div className='four_section'>
        <div className='four_section_text_wrapper'>
          <h1 className='four_section_wrapper_title'>Преимущества</h1>
        </div>
      <div className='four_section_wrapper'>
      <div className="feature-block">
        <div className="feature-item">
          <img src={Icon1} alt="Quality Icon" className="feature-icon" />
          <h3>Качество связи</h3>
          <p>Высокая скорость передачи пакетов, позволяют создать отличное качество голоса.</p>
        </div>
        <div className="feature-item">
          <img src={Icon2} alt="Cost Icon" className="feature-icon" />
          <h3>Стоимость дешевая</h3>
          <p>Высокая скорость передачи пакетов, позволяют создать отличное качество голоса.</p>
        </div>
        <div className="feature-item">
          <img src={Icon3} alt="Flexible Connection Icon" className="feature-icon" />
          <h3>Гибкое подключение</h3>
          <p>Мы можем предложить несколько вариантов для подключения.</p>
        </div>
        <div className="feature-item">
          <img src={Icon4} alt="Number Preservation Icon" className="feature-icon" />
          <h3>Сохранение телефонных номеров</h3>
          <p>При переезде ваши телефонные номера всегда будут с вами.</p>
        </div>
        <div className="feature-item">
          <img src={Icon5} alt="Unlimited Channels Icon" className="feature-icon" />
          <h3>Безлимитный количество каналов</h3>
          <p>Благодаря подключению через интернет вы можете масштабировать количество абонентов бесконечно.</p>
        </div>
        <div className="feature-item">
          <img src={Icon6} alt="High Protection Icon" className="feature-icon" />
          <h3>Высокая защита</h3>
          <p>Мы имеем специальные системы для отслеживания взломов.</p>
        </div>
      </div>
      </div>
      </div>
    );
  }
}

export default FeatureBlock;
