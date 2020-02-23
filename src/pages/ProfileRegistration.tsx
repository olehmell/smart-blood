import React from 'react';
import { Button, Menu, Icon, Avatar } from 'antd';

export default () => {
  return (
    <main className='userProfile'>
      <Avatar shape="square" size={144} icon="user" />
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
    </main>
  )
}