import React from 'react'
import { Link } from "react-router-dom";

export const bloodCentrData = [
    `Київський будинок крові`, `Солом'янська района лікарня`, `Медцентр НАУ`,
    `Київський будинок крові`, `Солом'янська района лікарня`, `Медцентр НАУ`,
    `Київський будинок крові`, `Солом'янська района лікарня`, `Медцентр НАУ`,
    `Київський будинок крові`, `Солом'янська района лікарня`, `Медцентр НАУ`,
    `Київський будинок крові`, `Солом'янська района лікарня`, `Медцентр НАУ`,
    `Київський будинок крові`, `Солом'янська района лікарня`, `Медцентр НАУ`,
    `Київський будинок крові`, `Солом'янська района лікарня`, `Медцентр НАУ`,
    `Київський будинок крові`, `Солом'янська района лікарня`, `Медцентр НАУ`
  ];

export const ratipientData = [
    `Іван Іванович Іванов`, `Хрущов Микита Вікторович`, `Ісаєнко Дмитро Володимирович`
  ];

export const columnBloodTable = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text: string) => <Link to='/'>{text}</Link>,
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
  ]

export const listData = [
    {
      key: '1',
      name: 'Олег Мельничук',
      age: new Date(),
      address: 'New York No. 1 Lake Park',
      done: true
    },
    {
      key: '2',
      name: 'Олег Мельничук',
      age: new Date(),
      address: 'New York No. 1 Lake Park',
      done: false
    },
    {
      key: '3',
      name: 'Олег Мельничук',
      age: new Date(),
      address: 'New York No. 1 Lake Park',
      done: true
    },
    {
      key: '4',
      name: 'Олег Мельничук',
      age: new Date(),
      address: 'New York No. 1 Lake Park',
      done: true
    },
    {
      key: '5',
      name: 'Олег Мельничук',
      age: new Date(),
      address: 'New York No. 1 Lake Park',
      done: true
    },
    {
      key: '6',
      name: 'Олег Мельничук',
      age: new Date(),
      address: 'New York No. 1 Lake Park',
      done: false
    },
  
    {
      key: '7',
      name: 'Олег Мельничук',
      age: new Date(),
      address: 'New York No. 1 Lake Park',
      done: false
    },
    {
      key: '8',
      name: 'Олег Мельничук',
      age: new Date(),
      address: 'New York No. 1 Lake Park',
      done: false
    },
    {
      key: '9',
      name: 'Олег Мельничук',
      age: new Date(),
      address: 'New York No. 1 Lake Park',
      done: false
    },
    {
      key: '10',
      name: 'Олег Мельничук',
      age: new Date(),
      address: 'New York No. 1 Lake Park',
      done: false
    }
  ];

  export const columnRecepientTable = [
    {
      title: `Рецепієнт`,
      dataIndex: 'name',
      key: 'name',
      render: (text: string) => <Link to='/'>{text}</Link>,
    },
    {
      title: 'Заклад',
      dataIndex: 'center',
      key: 'center',
    },
    {
      title: 'Хвороба',
      dataIndex: '',
      key: '',
    },
    {
      title: 'Вік',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Необхідно',
      dataIndex: 'count',
      key: 'count',
    }
  ]

export const listRecepientData = [
    {
      key: '1',
      name: 'Олег Мельничук',
      center: 'Київський будинок крові',
      address: 'New York No. 1 Lake Park',
      age: 22,
      count: 10,
      done: true
    },
    {
      key: '2',
      name: 'Олег Мельничук',
      center: 'Київський будинок крові',
      address: 'New York No. 1 Lake Park',
      age: 22,
      count: 10,
      done: true
    },
    {
      key: '3',
      name: 'Олег Мельничук',
      center: 'Київський будинок крові',
      address: 'New York No. 1 Lake Park',
      age: 22,
      count: 10,
      done: true
    },
    {
      key: '4',
      name: 'Олег Мельничук',
      center: 'Київський будинок крові',
      address: 'New York No. 1 Lake Park',
      age: 22,
      count: 10,
      done: true
    },
    {
      key: '5',
      name: 'Олег Мельничук',
      center: 'Київський будинок крові',
      address: 'New York No. 1 Lake Park',
      age: 22,
      count: 10,
      done: true
    },
    {
      key: '6',
      name: 'Олег Мельничук',
      center: 'Київський будинок крові',
      address: 'New York No. 1 Lake Park',
      age: 22,
      count: 10,
      done: true
    }
  ];