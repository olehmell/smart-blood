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
            <Link to="/registration"><Button className="button-border">Стати донором</Button></Link>
            <Link to="/authorization"><Button>Увійти в кабінет</Button></Link>
          </div>
          <div className="picture"></div>
        </div>
      </div>
    </main>
  );
}