import React, { useState } from 'react';
import { Button, Menu, Icon, Avatar, Calendar, Tabs, Table, Select, AutoComplete } from 'antd';
import { columnCenterTable, listCenterData } from '../data';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <main className='centerStats'>
      <p className="hospital-name">Повна назва закладу</p>
      <div className="hospital-card">
        <div className="col">
          <div>
            <p>1 негативна</p>
            <p>Необхідно: 5л</p>
          </div>
          <div>
            <p>1 негативна</p>
            <p>Необхідно: 5л</p>
          </div>
        </div>
        <div className="col">
          <div>
            <p>1 негативна</p>
            <p>Необхідно: 5л</p>
          </div>
          <div>
            <p>1 негативна</p>
            <p>Необхідно: 5л</p>
          </div>
        </div>
        <div className="col">
          <div>
            <p>1 негативна</p>
            <p>Необхідно: 5л</p>
          </div>
          <div>
            <p>1 негативна</p>
            <p>Необхідно: 5л</p>
          </div>
        </div>
        <div className="col">
        <div>
          <p>1 негативна</p>
          <p>Необхідно: 5л</p>
        </div>
        <div>
          <p>1 негативна</p>
          <p>Необхідно: 5л</p>
        </div>
        <Link to="/donation"><Button>Здати тут</Button></Link>
      </div>
    </div>
      <div className='bloodTable' >
        <div style={{marginBottom: "1em"}}>Список реципієнтів</div>
        <Table columns={columnCenterTable} dataSource={listCenterData} scroll={{ y: 300 }} pagination={false}/>
      </div>
    </main>
  )
}