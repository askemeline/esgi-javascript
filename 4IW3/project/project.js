let ReactDom = {
  render: function (rElement, hElement) {
    hElement.appendChild(rElement);
  },
};

let React = {
  createElement: function (tagOrElement, props, children) {
    if (tagOrElement === "div") {
      const element = document.createElement(tagOrElement);
      for (attribute in props) {
        element.setAttribute(attribute, props[attribute]);
      }
      for (subElement of children) {
        if (typeof subElement === "string") {
          subElement = document.createTextNode(
            subElement /* .interpolate(props)*/
          );
        }
        element.appendChild(subElement);
      }
    } /** component **/ else {
      //if (!type_check(props, tagOrElement.propTypes)) throw new InvalidProps();
    }
  },
};

ReactDom.render(
  React.createElement("div", { test: "test" }, [
    React.createElement("div", { name: "Karl" }, ["Bonjour {{name}}"]),
  ]),
  document.getElementById("root")
);
