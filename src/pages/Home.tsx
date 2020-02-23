import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main>
      <div className="content">
        <div className="wrapper">
          <div>
            <p>Стань частиною донорського руху.</p>
            <Button className="button-border"><Link to='/registration'>Стати донором</Link></Button>
            <Button><Link to='/login'>Увійти в кабінет</Link></Button>
          </div>
          <div className="picture"></div>
        </div>
      </div>
    </main>
  );
}