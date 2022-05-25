import React from 'react';
function FormItem(props) {
  const { name, label, value, children, handleChange } = props;
  const onChange = (value) => {
    handleChange(name, value);
  };

  return (
    <div>
      <span>{label}</span>:
      {React.isValidElement(children) && children.type.name === 'Input'
        ? React.cloneElement(children, {
            onChange,
            formValue: value,
          })
        : null}
    </div>
  );
}

export default FormItem;
