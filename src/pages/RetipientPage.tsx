import React, { useState } from 'react';
import { Button, Menu, Icon, Avatar, Calendar, Tabs, Table } from 'antd';
import { Link } from 'react-router-dom';
import { columnBloodTable, listData } from '../data';

export default () => {
  const [ filter, setFilter ] = useState(false);

  return (
  <>
    <div className='userProfile retipientPage'>
      <Avatar shape="square" size={270} icon="user" />
      <div className='userInfo' style={{width:"50%"}}>
        <div className='userContent'>
          <div className='fullName'>Мельничук Олег Валерійович</div>
          <div className="row">
            <div className="col-1">
              <div className='phoneNumber'>+380978974820</div>
              <div className='email'>oleh.melnechyk@gmail.com</div>
              <div className='bloodType'>Група крові: 1</div>
              <div className='resusFactor'>Резус фактор: позитивний</div>
            </div>
            <div className="col-2">
              <div className='hospital'>Назва медичного закладу</div>
              <div className='decease'>туберкульоз</div>
              <div className='bloodamount'>Необхідна кількість крові: 1л</div>
              <div className='age'>Вік: 45 років</div>
            </div>
          </div>
          <Button>Допомогти</Button>
        </div>
      </div>
    </div>
  </>
  )
}