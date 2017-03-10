import React, { Component, PropTypes } from 'react';
import styles from './Landing.sass';
import DocumentTitle from 'react-document-title';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import Link from '../Base/Link';
import HomePage from './HomePage';
import { wipeProjectState } from '../../actions/ProjectActions';


export class NotFoundPage extends Component {
  render() {
    const { } = this.props;
    return (
      <DocumentTitle title='DIVE | Error'>
        <div className={ styles.fillContainer + ' ' + styles.landingPage }>
          Test
        </div>
      </DocumentTitle>
    );
  }
}

export default connect(mapStateToProps, { push })(NotFoundPage);
