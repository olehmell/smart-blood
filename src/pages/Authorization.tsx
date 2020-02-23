import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { useSidebarProfile } from '../components/ProfileContext';
import { isUserPasswordValid } from '../components/api';
import { Donor } from '../../server/src/types';
import { useHistory } from 'react-router-dom';

export default function Authorization() {
  const history = useHistory();
  const { set } = useSidebarProfile();
  const [ error, setError ] = useState();
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
          <Button htmlType="submit" className="login-form-button"
          onClick = {async (data: any) => {
            const profile = await isUserPasswordValid(data.email, data.password);
            console.log(profile);
            set(profile as unknown as Donor);
            history.push('/profile');
          }}
          >
            Увійти
          </Button>
          {error}
        </Form.Item>
      </Form>
    </main>
    </>
  );
}