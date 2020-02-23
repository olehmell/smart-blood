import React, { useState } from 'react';
import { Button, Menu, Icon, Avatar, Calendar, Tabs, Table, Select } from 'antd';
import { Link } from 'react-router-dom';
import { bloodCentrData, ratipientData } from '../data';

const { Option } = Select;

export default () => {
  const [data, setData] = useState(bloodCentrData);

  return (
    <main className='donationPage'>
      <div className='selects'>
      <Select style={{ width: 400 }} placeholder='Я здаю кров'
        onChange={(data: any) => {
          if (data === 'bank') {
            setData(new Array(...bloodCentrData))
          } else {
            setData(new Array(...ratipientData))
          }
        }}
      >
        <Option value='bank'>У банк крові</Option>
        <Option value='ratipient'>Раціпієнту</Option>
      </Select>
      <Select
        showSearch
        style={{ width: 800 }}
        placeholder="Select a person"
        optionFilterProp="children"
      >
        {data.map((x, i) => <Option value={i}>{x}</Option>)}
      </Select>
      <Button><Link to='/'>Відправити заявку</Link></Button>
    </div>
  </main>
  )
}