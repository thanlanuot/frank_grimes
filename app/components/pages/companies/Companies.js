//@flow
import React, { PropTypes as pt } from 'react'
import { Container, Header, Company } from './CompaniesStyle'
import { Link } from 'react-router'

const Companies = React.createClass({
  propTypes: {
    getCompanies: pt.func.isRequired,
    companies: pt.arrayOf(pt.object).isRequired
  },

  componentDidMount() {
    this.props.getCompanies()
  },

  render() {
    const { companies } = this.props

    return <Container>
      <Header>Companies</Header>
      <Link to="/companies/new" className="btn btn-primary">
        Add Company
      </Link>
      {companies.map(c =>
        <Company key={c.id}>{c.name}</Company>
      )}
    </Container>
  }
})

export default Companies
