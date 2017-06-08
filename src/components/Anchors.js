import React from 'react'
import {Grid, Panel, Row} from 'react-bootstrap'
import {injectIntl} from 'react-intl'
import anchors from '../lib/Anchors'
import AccountLink from './shared/AccountLink'

const Anchor = (anchor) => <div>
  <AccountLink account={anchor.id} label={anchor.name}/>
</div>

const AnchorsList = () => <div>{Object.keys(anchors).map((id) => <Anchor key={id} id={id} {...anchors[id]}/>)}</div>

class Anchors extends React.Component {
  render() {
    const {formatMessage} = this.props.intl
    return (
      <Grid>
        <Row>
          <Panel header={formatMessage({id: "anchors"})}>
            <AnchorsList/>
            <div style={{
              paddingTop: "10px"
            }}>NOTE: this is not
              a comprehensive list. Add other anchors to the Anchors.json file to have them
              appear here.</div>
          </Panel>
        </Row>
        <Row ></Row>
      </Grid>
    )
  }
}

export default injectIntl(Anchors)