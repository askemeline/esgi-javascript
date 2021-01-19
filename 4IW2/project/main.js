//ReactDOM.render(
//    React.createElement("div", {toWhat: 'monde'}, null),
//    document.getElementById('root')
//  );

const ReactDom = {
  render(elementReact, elementHtml) {
    elementHtml.appendChild(elementReact);
  },
};

const React = {
  /**
   *
   * @param {String|ReactElement} tagOrElement
   * @param {object} props
   * @param {Array} children
   */
  createElement(tagOrElement, props, children) {
    let element = null;
    if ("div" === tagOrElement) {
      element = document.createElement(tagOrElement);
      for (let attribute in props) {
        element.setAttribute(attribute, props[attribute]);
      }
      for (let subElement of children) {
        if (typeof subElement === "string") {
          subElement = document.createTextNode(
            subElement /*.interpolate(props)*/
          );
        }
        element.appendChild(subElement);
      }
    } /*(if component)*/ else {
      if (tagOrElement.propTypes || !type_check(props, tagOrElement.propTypes))
        throw new InvalidPropsError();
    }
    return element;
  },
};

ReactDom.render(
  React.createElement("div", {}, [
    React.createElement("div", { test: "test" }, ["Coucou {{test}}"]),
  ]),
  document.getElementById("root")
);
