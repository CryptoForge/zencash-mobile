import PropTypes from 'prop-types'
import React from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { setInsightAPI } from '../actions/Settings'

import {
  Page,
  Toolbar,
  BackButton,
  List,
  ListItem,
  ListHeader,
  Input
} from 'react-onsenui'

import TRANSLATIONS from '../translations'

class SelectInsightPage extends React.Component {
  componentDidMount() {
    window.ga.trackView('Insight Page')
  }

  renderToolbar () {
    return (
      <Toolbar>
        <div className='left' style={{color: '#ffd700', background: '#000000'}}>
          <BackButton onClick={() => this.props.navigator.popPage()}>Back</BackButton>
        </div>
        <div className='center' style={{color: '#ffd700', background: '#000000'}}>
          Insight API
        </div>
        <div className='right' style={{color: '#ffd700', background: '#000000'}}>
        </div>
      </Toolbar>
    )
  }

  render () {
    return (
      <Page renderToolbar={this.renderToolbar.bind(this)}>
        <div style={{color: '#ffd700', background: '#515151', width:'100%', height:'100%'}}>
          <List style={{color: '#ffd700', background: '#515151'}}>
            <ListItem style={{color: '#ffd700', background: '#515151'}}>
              <Input id="insite"
                onChange={(e) => this.props.setInsightAPI(e.target.value)}
                value={this.props.settings.insightAPI}
                style={{ width: '100%' }}
                float={true}
              />
            </ListItem>
            <ListHeader style={{color: '#ffd700', background: '#515151'}}>
              Preconfigured Nodes
            </ListHeader>
            <ListItem style={{color: '#ffd700', background: '#515151'}} tappable onClick={() => this.props.setInsightAPI('https://zseed1.cryptonode.cloud:3000/insight-api-zero/')}>
              The Zero Team (SSL)
            </ListItem>
            <ListItem style={{color: '#ffd700', background: '#515151'}} tappable onClick={() => this.props.setInsightAPI('http://zseed1.cryptonode.cloud:2999/insight-api-zero/')}>
              The Zero Team (Non-SSL)
            </ListItem>
            <ListItem style={{color: '#ffd700', background: '#515151'}} tappable onClick={() => this.props.setInsightAPI('https://zero-insight.mining4.co.uk/insight-api-zcash/')}>
              mining4.co.uk
            </ListItem>
          </List>
        </div>
      </Page>
    )
  }
}

SelectInsightPage.propTypes = {
  secrets: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired,
  navigator: PropTypes.object.isRequired,
  setInsightAPI: PropTypes.func.isRequired
}

function mapStateToProps (state) {
  return {
    settings: state.settings
  }
}

function matchDispatchToProps (dispatch) {
  // Set context for the send page
  return bindActionCreators(
    {
      setInsightAPI
    },
    dispatch
  )
}

export default connect(mapStateToProps, matchDispatchToProps)(SelectInsightPage)