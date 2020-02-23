import React, { useState } from 'react';
import { Button, Menu, Icon, Avatar, Calendar, Tabs, Table, Select, AutoComplete } from 'antd';
import { columnCenterTable, listCenterData } from '../data';

export default () => {
  return (
    <main className='centerStats'>
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
        </div>
      </div>
      <div className='bloodTable' >
        <div>Список кроводач</div>
        <Table columns={columnCenterTable} dataSource={listCenterData} scroll={{ y: 300 }} pagination={false}/>
      </div>
    </main>
  )
}