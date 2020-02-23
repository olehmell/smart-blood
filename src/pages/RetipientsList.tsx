import React, { useState } from 'react';
import { Button, Menu, Icon, Avatar, Calendar, Tabs, Table, Select, AutoComplete } from 'antd';
import { Link } from 'react-router-dom';
import { columnRecepientTable, listRecepientData } from '../data';

const { Option } = Select;

const options = listRecepientData.map(x => x.name);

export default () => {
  return (
    <main className='recepientPage'>
      <div style={{ textAlign: 'center', margin: '2rem'}}>
        <AutoComplete
          className="certain-category-search"
          dropdownClassName="certain-category-search-dropdown"
          dropdownMatchSelectWidth={false}
          dropdownStyle={{ width: 600 }}
          size="large"
          style={{ width: 1260 }}
          dataSource={options}
          placeholder="input here"
          optionLabelProp="value"
        />
      </div>
      <div className='bloodTable' >
        <div>Список кроводач</div>
        <Table columns={columnRecepientTable} dataSource={listRecepientData} scroll={{ y: 300 }} pagination={false}/>
      </div>
    </main>
  )
}