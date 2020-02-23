import React from 'react';
import { Button, Form, Input, Row, Col } from 'antd';

export default () => {
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
          <Button htmlType="submit" className="login-form-button">
            Зареєструватися
          </Button>
        </Form.Item>
        </Col>
      </Form>
    </main>
  );
}