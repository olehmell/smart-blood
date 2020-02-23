import React, { useState } from 'react';
import { Button, Menu, Icon, Avatar, Calendar, Tabs, Table } from 'antd';
import { Link } from 'react-router-dom';
import { columnBloodTable, listData } from '../data';
import { useGetMyProfile } from '../components/ProfileContext';

export default () => {
  const { profile } = useGetMyProfile();
  const [ filter, setFilter ] = useState(false);

  if (!profile) return <Link to='/'>Твого профайлу ще немає, будь ласка зареєструйся</Link>

  const {
    fullName,
    phoneNumber,
    email,
    birthDate,
    bloodType,
  } = profile;

  return (
  <>
    <div className='userProfile'>
      <Avatar shape="square" size={300} icon="user" />
      <div className='userInfo'>
        <div className='userContent'>
          <div className='fullName'>{fullName}</div>
          <div className='phoneNumber'>{phoneNumber}</div>
          <div className='email'>{email}</div>
          <div className='birtData'>{birthDate}</div>
          <div className='bloodType'>{bloodType}</div>
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