import React, { useState } from 'react';
import { Button, Menu, Icon, Avatar, Calendar, Tabs, Table } from 'antd';
import { Link } from 'react-router-dom';
import { columnBloodTable, listData } from '../data';

export default () => {
  const [ filter, setFilter ] = useState(false);

  return (
  <>
    <div className='userProfile'>
      <Avatar shape="square" size={300} icon="user" />
      <div className='userInfo'>
        <div className='userContent'>
          <div className='fullName'>Мельничук Олег Валерійович</div>
          <div className='phoneNumber'>+380978974820</div>
          <div className='email'>oleh.melnechyk@gmail.com</div>
          <div className='birtData'>23.12.12222</div>
          <div className='bloodType'>Група крові: 1</div>
          <div className='resusFactor'>Резус фактор: позитивний</div>
        </div>
        <Icon type='edit'/>
      </div>
      <div className='calendar' style={{ width: 300, border: '1px solid #d9d9d9', borderRadius: 4 }}>
        <Calendar fullscreen={false} />
      </div>
    </div>
    <div className='bloodTable'>
      <div>Список кроводач</div>
      <div className='navButtons'>
        <Button onClick={() => setFilter(false)}>Заплановані кроводачі</Button>
        <Button onClick={() => setFilter(true)}>Попередні кроводачі</Button>
      </div>
      <Table columns={columnBloodTable} dataSource={listData.filter(x => x.done === filter)} scroll={{ y: 240 }} pagination={false}/>
    </div>
  </>
  )
}