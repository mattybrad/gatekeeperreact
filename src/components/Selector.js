import React from 'react';

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectorValue: this.props.options[0]
    }
  }

  handleSelectorChange() {
    this.setState(prevState => ({
      selectorValue: this.refs.selectorInput.value
    }))
  }

  render() {
    return (
      <div>
        <label>{this.props.label}</label>
        <select ref='selectorInput' value={this.state.selectorValue} onChange={this.handleSelectorChange.bind(this)}>
          {this.props.options.map(function(val,i){
            return <option key={i}>{val}</option>;
          })}
        </select>
        <span>{this.state.selectorValue}</span>
      </div>
    );
  }
}

AppComponent.defaultProps = {
  label: 'selector',
  options: ['default']
};

export default AppComponent;