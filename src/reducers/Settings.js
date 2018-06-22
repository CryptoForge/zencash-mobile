// Object.assign({}) doesn't work on all versions of android
// Need to include polyfill
import 'babel-polyfill'

import {
  LANG_ENGLISH,
  CURRENCY_USD,
  SET_LANGUAGE,
  SET_CURRENCY,
  SET_WALLET_PIN,
  SET_INSIGHT_API
} from '../actions/Settings'

const initialSettings = {
  insightAPI: 'https://zseed1.cryptonode.cloud:3000/insight-api-zero/',
  explorerURL: 'https://zero-insight.mining4.co.uk/',
  language: LANG_ENGLISH,
  currency: CURRENCY_USD,
  pin: null
}

export default function SettingsReducer (state = initialSettings, action) {
  switch (action.type) {
    case SET_WALLET_PIN:
      return Object.assign({}, state, {
        pin: action.pin
      })

    case SET_CURRENCY:
      return Object.assign({}, state, {
        currency: action.currency
      })

    case SET_LANGUAGE:
      return Object.assign({}, state, {
        language: action.language
      })

    case SET_INSIGHT_API:
      return Object.assign({}, state, {
        insightAPI: action.insightAPI
      })

    default:
      return state
  }
}
