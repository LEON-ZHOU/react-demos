class Input extends React.Component{
  constructor() {
    super();
    this.state= {
      value: 'Hello!'
    }
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  render(){
    var value = this.state.value;
    return (
      <div>
        <input type="text" value={value} onChange={ev=>{this.handleChange(ev)}} />
        <p>{value}</p>
      </div>
    );
  }
}
ReactDOM.render(<Input/>, document.body);
