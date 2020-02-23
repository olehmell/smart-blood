import React, { useState } from 'react';
import { Button, Menu, Icon, Avatar, Calendar, Tabs, Table, Select, AutoComplete } from 'antd';
import { Link } from 'react-router-dom';
import { bloodCentrData, ratipientData, listData } from '../data';

const { Option } = Select;

const options = listData.map(x => x.name);

export default () => {
  return (
    <main className='donationPage'>
      <AutoComplete
        className="certain-category-search"
        dropdownClassName="certain-category-search-dropdown"
        dropdownMatchSelectWidth={false}
        dropdownStyle={{ width: 300 }}
        size="large"
        style={{ width: '100%' }}
        dataSource={options}
        placeholder="input here"
        optionLabelProp="value"
      />
      <div className='bloodTable'>
        <div>Список кроводач</div>
        <Table columns={columnBloodTable} dataSource={listData.filter(x => x.done === filter)} scroll={{ y: 240 }} pagination={false}/>
      </div>
    </main>
  )
}