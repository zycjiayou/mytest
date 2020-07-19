function createElement(type, config = {}, ...children) {
  const props = {
    ...config,
    children
  };

  return {
    type,
    props
  }
}

export class Component {
  static isReactComponent = true;
  constructor(props) {
    this.props = props;
  }
}

export default {
  createElement,
  Component
}
