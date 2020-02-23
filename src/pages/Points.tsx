import React, { useState } from 'react';
import { Button, Menu, Icon, Avatar, Calendar, Tabs, Table, Select, AutoComplete } from 'antd';
import { Link } from 'react-router-dom';
import { listRecepientData, columnPointsTable, listPointsData } from '../data';

const { Option } = Select;

const options = listRecepientData.map(x => x.name);

export default () => {
  const [ filter, setFilter ] = useState(false);

  return (
    <main className='points' style={{margin: '5rem 0' }} >
      <div className='bloodTable' >
        <div>Список точок</div>
        <div className='navButtons'>
          <Button onClick={() => setFilter(false)}>Найближчі точки</Button>
          <Button onClick={() => setFilter(true)}>Рекомендовані точки</Button>
        </div>
        <Table columns={columnPointsTable} dataSource={listPointsData.filter(x => x.done === filter)} scroll={{ y: 240 }} pagination={false} />
      </div>
    </main>
  )
}