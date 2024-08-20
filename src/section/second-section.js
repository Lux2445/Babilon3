import Call from '../image/png/call.png';
import Cally from '../image/png/cally.png';
import Profile from '../image/png/profile.png';
import Women from '../image/png/women.png';
import React, { Component } from 'react';

class PricingConfigurator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: 31,
      users: 62,
      recordingDays: 13,
      discount: 6,
    };
  }

  handleSliderChange = (field, value) => {
    this.setState({ [field]: value });
  };

  renderTicksAndNumbers = (ticksArray) => {
    return ticksArray.map((tick, index) => (
      <div className="tick" key={index}>
        <span className="tick-number">{tick.label}</span>
        <div className="tick-mark" />
      </div>
    ));
  };

  render() {
    const { numbers, users, recordingDays, discount } = this.state;

    return (
      <div className='second_section'>
        <div className='second_section_text_wrapper'>
          <h1 className='second_section_text_wrapper_title'>Создай тариф для вашего бизнеса</h1>
        </div>
        <div className='second_section_wrapper'>
          <div className="pricing-configurator">
        <div className="config-options">
          <div className="option">
            <div className="option-header">
              <img src={Call} alt="Phone Icon" />
              <span>Сколько Вам нужно номеров?</span>
            </div>
            <div className="slider-container">
              <div className="ticks-container">
                {this.renderTicksAndNumbers([
                  { label: '1' },
                  { label: '20' },
                  { label: '40' },
                  { label: '60' },
                  { label: '80' },
                  { label: '100' },
                ])}
              </div>
              <input
                type="range"
                min="1"
                max="100"
                value={numbers}
                onChange={(e) => this.handleSliderChange('numbers', e.target.value)}
              />
              <div className="value-display-box">
                <div className="value-display">{numbers} шт.</div>
              </div>
            </div>
          </div>

          <div className="option">
            <div className="option-header">
              <img src={Profile} alt="User Icon" />
              <span>Количество пользователей</span>
            </div>
            <div className="slider-container">
              <div className="ticks-container">
                {this.renderTicksAndNumbers([
                  { label: '1' },
                  { label: '10' },
                  { label: '30' },
                  { label: '50' },
                  { label: '70' },
                  { label: '90' },
                ])}
              </div>
              <input
                type="range"
                min="1"
                max="90"
                value={users}
                onChange={(e) => this.handleSliderChange('users', e.target.value)}
              />
              <div className="value-display-box">
                <span className="value-display">{users} шт.</span>
              </div>
            </div>
          </div>

          <div className="option">
            <div className="option-header">
              <img src={Women} alt="Recording Icon" />
              <span>Запись разговоров в днях</span>
            </div>
            <div className="slider-container">
              <div className="ticks-container">
                {this.renderTicksAndNumbers([
                  { label: '1' },
                  { label: '20' },
                  { label: '40' },
                  { label: '60' },
                  { label: '80' },
                  { label: '90' },
                ])}
              </div>
              <input
                type="range"
                min="1"
                max="90"
                value={recordingDays}
                onChange={(e) => this.handleSliderChange('recordingDays', e.target.value)}
              />
              <div className="value-display-box">
                <div className="value-display">{recordingDays} дн.</div>
              </div>
            </div>
          </div>

          <div className="additional-options">
            <label>
              <input type="checkbox" /> VPN номера
            </label>
            <label>
              <input type="checkbox" /> SIP
            </label>
            <label>
              <input type="checkbox" /> Голосовая почта
            </label>
            <label>
              <input type="checkbox" /> Группы сотрудников
            </label>
            <label>
              <input type="checkbox" /> Короткий номер
            </label>
            <img src={Cally} alt='' className='cally'/>
          </div>
        </div>

        <div className="summary">
          <div className="summary-row">
            <div className="summary-item">
              <h3>{numbers}</h3>
              <p>Номеров</p>
            </div>
            <div className="summary-item">
              <h3>{users}</h3>
              <p>Пользователей</p>
            </div>
          </div>
          <div className="summary-row">
            <div className="summary-item">
              <h3>{recordingDays}</h3>
              <p>Запись разговоров</p>
            </div>
          </div>
          <div className="discount">
            <p>Выберите со скидкой</p>
            <div className="discount-info">
              <span>1 мес.</span>
              <span>6 мес.</span>
              <span>12 мес.</span>
            </div>
            <input
              type="range"
              min="1"
              max="15"
              value={discount}
              onChange={(e) => this.handleSliderChange('discount', e.target.value)}
            />
            <button className="get-offer-button">Получить предложение</button>
          </div>
        </div>
      </div>
      </div>
      </div>
    );
  }
}

export default PricingConfigurator;
