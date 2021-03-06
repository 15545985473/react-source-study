import React from 'react';

const toLearn = ['react', 'vue', 'webpack', 'nodejs'];

const TextComponent = () => <div> hello , i am function component </div>;

export default class Test extends React.Component {
  status = false; /* 状态 */
  renderFoot = () => <div> i am foot</div>;
  renderControl() {
    const rootElement = (
      <div style={{ marginTop: '100px' }} className="container">
        {/* element 元素类型 */}
        <div>hello,world</div>
        {/* fragment 类型 */}
        <React.Fragment>
          <div> 👽👽 </div>
        </React.Fragment>
        {/* text 文本类型 */}
        my name is alien 数组节点类型
        {toLearn.map((item) => (
          <div key={item}>let us learn {item} </div>
        ))}
        <TextComponent />
        {/* 三元运算 */}
        {this.status ? <TextComponent /> : <div>三元运算</div>}
        {/* 函数执行 */}
        {this.renderFoot()}
        <button onClick={() => console.log(this.render())}>
          打印render后的内容
        </button>
        <p>=={super.render}==</p>
      </div>
    );

    const { children } = rootElement.props;
    /* 第1步 ： 扁平化 children  */
    const flatChildren = React.Children.toArray(children);
    /* 第2步 ： 除去文本节点 */
    const newChildren: any = [];
    React.Children.forEach(flatChildren, (item) => {
      if (React.isValidElement(item)) newChildren.push(item);
    });
    /* 第3步，插入新的节点 */
    const lastChildren = React.createElement(
      `div`,
      { className: 'last' },
      `say goodbye`
    );
    console.log(newChildren, '==========');

    newChildren.push(lastChildren);
    /* 第4步：修改容器节点 */
    const newReactElement = React.cloneElement(rootElement, {}, ...newChildren);

    return newReactElement;
  }
  render() {
    return this.renderControl();
  }
}
