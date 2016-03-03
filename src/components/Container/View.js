import React, { Component, PropTypes } from 'react'
import NotificationSystem from '../Notification/System'

export default class View extends Component {

  static propTypes = {
    children: PropTypes.node
  };

  static childContextTypes = {
    ui: PropTypes.object
  };

  constructor (props) {
    super(props)
    this._tabbar = 'none'
  }

  getChildContext () {
    return {
      ui: {
        addNotification: (notification) => { this.addNotification(notification) },
        setTabbar: (type) => { this.setTabbar(type) },
        getTabbar: () => { return this.getTabbar() }
      }
    }
  }

  setTabbar (type) {
    this._type = type
  }

  getTabbar () {
    return this._type
  }

  addNotification (notification) {
    this.refs['notificationSystem'].addNotification(notification)
  }

  rendernNotifications () {
    return (
      <NotificationSystem ref='notificationSystem' />
    )
  }

  render () {
    const { children } = this.props
    return (
      <div className='wrapper'>
        <div className='views'>
          <div className='view'>
            {children}
          </div>
        </div>
        {this.rendernNotifications()}
      </div>
    )
  }
}