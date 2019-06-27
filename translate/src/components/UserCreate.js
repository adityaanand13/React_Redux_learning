import React from 'react';
import { Form } from 'semantic-ui-react'

import Field from './Field';
import Buttons from './Buttons';

const UserCreate = () => {
  return(
      <div>
          <Form>
              <Form.Group>
                  <Form.Input>
                      <Field/>
                  </Form.Input>
                  <Buttons/>
              </Form.Group>
          </Form>
      </div>
  )
};

export default UserCreate;