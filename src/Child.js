import React, { useRef } from 'react';
import Form from './components/Form';
import FormItem from './components/FormItem';
import Input from './components/Input';

function Child(props) {
  const form = React.useRef(null);
  const submit = () => {
    /* 表单提交 */
    form.current.Form.submitForm((formValue) => {
      console.log(formValue);
    });
  };
  return (
    <div className="box">
      <Form ref={form}>
        <FormItem name="name" label="我是">
          <Input value={'slp'} />
        </FormItem>
        <FormItem name="mes" label="我想对大家说">
          <Input value={'i like myself'} />
        </FormItem>
        <input placeholder="不需要的input" />
        <Input />
      </Form>
      <div className="btns">
        <button className="searchbtn" onClick={submit}>
          提交
        </button>
      </div>
    </div>
  );
}

export default Child;
