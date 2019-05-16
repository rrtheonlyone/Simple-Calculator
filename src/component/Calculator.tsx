import React from 'react';

class Calculator extends React.Component<{}, {value: string, result: string}> {
  
  constructor(props: {}) {
    super(props)
    this.state = {value: '', result: ''};

    this.update = this.update.bind(this);
    this.submit = this.submit.bind(this);
  }

  update(e: React.FormEvent<HTMLInputElement>): void {
    this.setState({value: e.currentTarget.value})
  }
  
  submit(e: any): void {
    e.preventDefault()
    console.log(this.state.value)

    const res = eval(this.state.value)
    this.setState({result: res})
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.submit}>
          <label>
              Equation:
              <input type="text" name="name" onChange={this.update}/>
          </label>
          <input type="submit" value="Submit" />
        </form>

        <div>
          <h3>{this.state.result}</h3>
        </div>
      </div>
    );
  }
}

export default Calculator;
