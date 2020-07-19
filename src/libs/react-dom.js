function createDOM(element) {
  let { type, props } = element;
  if (type.isReactComponent) {
    let componentInstance = new type(props);
    element = componentInstance.render();
    type = element.type;
    props = element.props;
  } else if (typeof type === 'function') {
    element = type(props);
    type = element.type;
    props = element.props;
  }
  let dom = document.createElement(type);
  for (let prop in props) {
    if (prop === 'children') {
     props.children.forEach(child => render(child, dom))
    } else if (prop === 'className') {
      dom[prop] = props[prop];
    } else if (prop === 'style') {
      for (let item in props.style) {
        dom.style[item] = props.style[item]
      }
    } else {
      dom.setAttribute(prop, props[prop]);
    }
  }
  return dom;
}

function render(element, container) {
  if (typeof element === 'string' || typeof element === 'number') {
    container.appendChild(document.createTextNode(element));
  } else {
    // 渲染函数组件
    let dom = createDOM(element);
    container.appendChild(dom);
  }
}

export default {
  render
}