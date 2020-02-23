import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

export default function Authorization() {
  return(
    <>
    <main className="authorization">
      <Form>
        <Form.Item label="Електронна адреса">
          <Input/>
        </Form.Item>
        <Form.Item label="Пароль">
          <Input
            type="password"
          />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" className="login-form-button">
            Увійти
          </Button>
        </Form.Item>
      </Form>
    </main>
    </>
  );
}