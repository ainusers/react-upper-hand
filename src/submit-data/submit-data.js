import React, { Component } from 'react'


const handleChange = event => {
    const { name, value } = event.target
    this.setState({
        [name]: value,
    })
}

class SubmitData extends Component {
    constructor(props) {
        super(props)
        this.initialState = {
            name: '',
            job: '',
        }
        this.state = this.initialState
    }
    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }
    render() {
        const { name, job } = this.state;
        return (
            <form>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={this.handleChange} /><br/>
                <label htmlFor="job">Job</label>
                <input
                    type="text"
                    name="job"
                    id="job"
                    value={job}
                    onChange={this.handleChange} />
                <input type="button" value="Submit" onClick={this.submitForm} />
            </form>
        );
    }
}

export default SubmitData;