import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from '../rootReducer'

const loggerMiddleware = createLogger()

export default function configureStore(preloadedState = {}) {
  preloadedState = {
    input: {
      grossIncome: null,
      filingStatus: 'single',
      itemize: false,
      dependentChildrenCount: 0,
      mortgageInterest: 0,
      charitableDonations: 0,
      stateLocalPropertyTaxes: 0,
      stateLocalIncomeTaxes: 0,
      personalExemptions: 1,
      medical: 0,
      studentLoanInterest: 0,
    }
  }

  // preloadedState = {
  //   input: {
  //     grossIncome: 60000,
  //     filingStatus: 'single',
  //     itemize: false,
  //     dependentChildrenCount: 0,
  //     mortgageInterest: 0,
  //     charitableDonations: 0,
  //     stateLocalPropertyTaxes: 0,
  //     stateLocalIncomeTaxes: 0,
  //     personalExemptions: 0,
  //     medical: 0
  //   },
  //   ui: {
  //     resultsVisible: true,
  //     detailsVisible: false,
  //   }
  // }
  
  if (process.env.NODE_ENV !== 'production') {
    return createStore(
      rootReducer,
      preloadedState,
      applyMiddleware(
        thunkMiddleware,
        loggerMiddleware,
      ),
    )
  } else {
    return createStore(
      rootReducer,
      preloadedState,
      applyMiddleware(
        thunkMiddleware,
      ),
    )
  }
}
