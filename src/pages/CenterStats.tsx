import React, { useState } from 'react';
import { Button, Menu, Icon, Avatar, Calendar, Tabs, Table, Select, AutoComplete } from 'antd';
import { columnCenterTable, listCenterData } from '../data';

export default () => {
  return (
    <main className='recepientPage'>
      <div className='bloodTable' >
        <div>Список кроводач</div>
        <Table columns={columnCenterTable} dataSource={listCenterData} scroll={{ y: 300 }} pagination={false}/>
      </div>
    </main>
  )
}