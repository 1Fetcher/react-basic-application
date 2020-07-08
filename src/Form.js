import React, { Component } from 'react';


class Form extends Component {
    
    initialState = {
        name: '',
        qualification: '',
        workexp: '',
        skills: ''
    }
    state = this.initialState;

    onChangeHandle = (e) => {
        const { name, value } = e.target;
        let errors = this.state.errors;

        this.setState({ errors, [name]: value }, () => {
            console.log(errors);            
        })
    }

    submitForm = () => {
        this.props.handleSubmit(this.state);
        this.setState(this.initialState)
    }

	validateForm = () => {
		// will use destructuring
		const { name, qualification, workexp, skills } = this.state;
		const notValid = !name || !qualification || !workexp || !skills;
		return notValid;
		//console.log(notValid);
	};    

    render() {
        return (
            <form className="form-ctrl">
                <div className="row">
                    <div className="col-12 col-md-12"><span className="fs12">All Fields Required*</span></div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Full Name</label>
                            <input
                                className="form-control"
                                name="name"
                                placeholder="Enter Full Name"
                                value={this.state.name}
                                onChange={this.onChangeHandle}
                            />    
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Qualification</label>
                            <input
                                className="form-control"
                                name="qualification"
                                placeholder="Enter Full Name"
                                value={this.state.qualification}
                                onChange={this.onChangeHandle}
                            />    
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Work Experience</label>
                            <input
                                className="form-control"
                                name="workexp"
                                placeholder="Enter Full Name"
                                value={this.state.workexp}
                                onChange={this.onChangeHandle}
                            />    
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Skills</label>
                            <input
                                className="form-control"
                                name="skills"
                                placeholder="Enter Full Name"
                                value={this.state.value}
                                onChange={this.onChangeHandle}
                            />    
                        </div> 
                    </div> 
                    <div className="col-12 col-md-12">
                        <div className="form-group">
                            <input
                                className="btn btn-primary"
                                type="button"
                                value="Submit"
                                onClick={this.submitForm}
                                disabled={this.validateForm()}
                            />   
                        </div> 
                    </div>                    
                </div>
            </form>            
        );
    }
}

export default Form;