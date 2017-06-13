//@flow
import { routes } from '~/app/config'
import { apiGet, apiPost } from '~/app/api/__helpers'

export function getCompanies() {
  return apiGet(routes.companies.index)
}

export function createCompany(company) {
  return apiPost(routes.companies.index, company)
}