/**
 * Created by thakerng on 2/24/2017 AD.
 */
import React from 'react';
import style from './centeredMessageStyle.css';
import classnames from 'classnames/bind';

const c = classnames.bind(style);
export default class CenteredMessage extends React.Component {
  render() {
    return (
      <div className={c('centeredMessageWrap')}>
        <div className={c('centeredMessageContent')}>
          {this.props.children}
        </div>
      </div>
    )
  }
}