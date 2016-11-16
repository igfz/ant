import {
	INIT_CATALOG,
} from '../constants/actionTypes'


const catalog = (state = [], action) => {
  switch (action.type) {
    case INIT_CATALOG:
      return action.catalog.map((item) => item)
    default:
      return state
  }
}
export default catalog
