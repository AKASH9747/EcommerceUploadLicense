import React from 'react'
import {Row,Col} from 'react-bootstrap'

const AddStore = () => {
  return (
    <div>
        <Row>
            <Col sm={12} md={6} lg={4} xl={3}>
            <input type="text" placeholder='' />
            </Col>
        </Row>
    </div>
  )
}

export default AddStore