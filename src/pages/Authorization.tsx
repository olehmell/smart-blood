import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

export default function Authorization() {
  return(
    <>
    <Form>
        <Form.Item>
          <Input
          />
        </Form.Item>
        <Form.Item>
          <Input
            type="password"
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Увійти
          </Button>
        </Form.Item>
      </Form>

    </>
  );
}