import React from 'react';
import { Button, Form, Input, Row, Col } from 'antd';
import { createUser } from '../components/api';
import { useSidebarProfile } from '../components/ProfileContext';
import { Donor } from '../../server/src/types';
import { useHistory } from 'react-router-dom';

export default () => {
  const history = useHistory();
  const { set } = useSidebarProfile();
  
  return(
    <main className="registration">
      <Form layout="inline">
        <Row>
          <Col span={1}>
          <Form.Item label="Прізвище Ім’я По-батькові">
            <Input type="name"/>
          </Form.Item>
          </Col>
        </Row>
        <Row>
          <Form.Item label="Номер телефону">
            <Input/>
          </Form.Item>
          <Form.Item label="Пароль">
            <Input type="password"/>
          </Form.Item>
        </Row>
        <Row>
          <Form.Item label="Електронна пошта">
            <Input/>
          </Form.Item>
          <Form.Item label="Підтвердження паролю">
            <Input
              type="password"
            />
        </Form.Item>
        </Row>
        <Col span={2}>
        <Form.Item>
          <Button htmlType="submit" className="login-form-button"
            onClick = {async (data: any) => {
            const profile = await createUser(data);
            console.log(profile);
            set(profile as unknown as Donor);
            history.push('/profile');
          }}
          >
            Зареєструватися
          </Button>
        </Form.Item>
        </Col>
      </Form>
    </main>
  );
}