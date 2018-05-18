import React from 'react';
import Sidebar from '../components/Sidebar';

export default({data}) => {

  return (
    <div>
      <Sidebar/>
      <div className="content">
        <div className="content__inner">
          <div className="page">
            <h1 className="page__title">Три цифры, две из которых равны и сумма их всех равно 8</h1>
            <div className="page__body">
              <p>Как вы тут очутились, я вообще не знаю, идите
                <a href="/">на главную</a>.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
