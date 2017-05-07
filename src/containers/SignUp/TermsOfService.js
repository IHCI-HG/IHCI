/**
 * Created by luqianyu on 2017/1/5.
 */
import React from 'react'
import { Popover, Tooltip, Button, Modal, OverlayTrigger } from 'react-bootstrap'

const TermsOfService = React.createClass({
  getInitialState () {
    return { showModal: false }
  },

  close () {
    this.setState({ showModal: false })
  },

  open () {
    this.setState({ showModal: true })
  },

  render () {
    const popover = (
      <Popover id='modal-popover' title='popover'>
        very popover. such engagement
      </Popover>
    )
    const tooltip = (
      <Tooltip id='modal-tooltip'>
        wow.
      </Tooltip>
    )

    return (
      <span>

        <a onClick={this.open}>服务条款</a>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Text in a modal</h4>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>

            <h4>Popover in a modal</h4>
            <p>there is a <OverlayTrigger overlay={popover}><a href='#'>popover</a></OverlayTrigger> here</p>

            <h4>Tooltips in a modal</h4>
            <p>there is a <OverlayTrigger overlay={tooltip}><a href='#'>tooltip</a></OverlayTrigger> here</p>

            <hr />

            <h4>Overflowing text to show scroll behavior</h4>
            <p>Cras mattis coneros.</p>

          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </span>
    )
  }
})

export default TermsOfService
