//@flow
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { validate, NewCompany } from '~/app/components/pages/companies/NewCompany'
import { createAction } from 'redux-actions'
import { SAGA_CREATE_COMPANY } from '~/app/reducers/Company'

export const mapDispatchToProps = (dispatch: Function): Object => ({
  createCompany: (values) => dispatch(createAction(SAGA_CREATE_COMPANY)(values))
})

export default reduxForm({
  validate,
  form: "NewCompanyForm"
})(
  connect(null, mapDispatchToProps)(NewCompany)
);