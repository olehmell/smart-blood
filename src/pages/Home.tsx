import React from 'react';
import { Button } from 'antd';

export default function Home() {
  return (
    <main>
      <div className="content">
        <div className="wrapper">
          <div>
            <p>Стань частиною донорського руху.</p>
            <Button className="button-border">Стати донором</Button>
            <Button>Увійти в кабінет</Button>
          </div>
          <div className="picture"></div>
        </div>
      </div>
    </main>
  );
}