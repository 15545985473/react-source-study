import React, { useState, forwardRef, useImperativeHandle } from 'react';

const Form = forwardRef((props, ref) => {
  let [formData, setFormDate] = useState({});

  const submitForm = (cb) => {
    cb({ ...formData });
  };

  useImperativeHandle(ref, () => ({
    Form: {
      submitForm,
    },
  }));

  const setValue = (name, value) => {
    setFormDate({
      ...formData,
      [name]: value,
    });
  };

  return props.children.map((item, index) => {
    if (item.type.name === 'FormItem') {
      return React.cloneElement(item, {
        handleChange: setValue,
        key: index,
        value: formData[item.props.name] || '',
      });
    }
  });
});

export default Form;
