//@flow
import React, { PropTypes as pt } from 'react'
import { Field } from 'redux-form'
import { connect } from 'react-redux'
import { Link, browserHistory } from 'react-router'

import { Container, Header, SubmitButton } from './NewCompanyStyle'

export const NewCompany = React.createClass({
  propTypes: {
    createCompany: pt.func.isRequired
  },
  
  renderField(field){
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger': ''}`;
    
    return (
      <div className={ className }>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    )
  },

  onSubmit(values){
    console.log('Add Company: ', values);
    this.props.createCompany(values)
    browserHistory.push('/');
  },
  
  render() {
    const { handleSubmit } = this.props;
    return (
      <Container>
        <Header> Add Company </Header>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <Field
            label="Name"
            name="name"
            component={this.renderField}
          />
          <SubmitButton type="submit" className="btn btn-primary">Add</SubmitButton>
          <Link to="/" className="btn btn-danger">Cancel</Link>
        </form>
      </Container>
          
    )
  }
})

export function validate(values){
  const errors = {};

  if(!values.name){
    errors.name = "Enter a name of company"
  }

  return errors;
}
