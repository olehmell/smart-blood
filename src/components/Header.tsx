import React, { FunctionComponent, useState, useEffect } from 'react';
import { Menu, Button, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

const Header: FunctionComponent = ({ children }) => {
  const history = useHistory();

  const isProfile = () => {
    return history.location.pathname.indexOf('profile') > 0;
  }  
  const [ showDonateButton, setshowDonateButton ] = useState(isProfile());

  useEffect(() => {
    setshowDonateButton(isProfile())
  })

  function renderDonateButton(){
    return(
      <>
        <div style={{float:"right"}}>
          <Link to="/">
            <Button>Запланувати кроводачу</Button>
          </Link>
          <Link to="/profile">
            <Avatar style={{marginLeft:".7em"}} shape="circle" size={40} icon="user" />
          </Link>
        </div>
      </>
    );
  }

  return <>
    <header>
      <Link to='/' className="logo">
        <div className="picture"></div>
      </Link>
      <div className="nav">
        <Menu className="nav-menu" mode="horizontal">
          <Menu.Item key="mail">
            Моніторинг банку крові
          </Menu.Item>
          <Menu.Item key="mail1">
            Точки здачі крові
          </Menu.Item>
          <Menu.Item key="mail2">
            Реципієнти
          </Menu.Item>
        </Menu>
      </div>
      {showDonateButton && renderDonateButton()}
    </header>
    {children}
  </>
}

export default Header;