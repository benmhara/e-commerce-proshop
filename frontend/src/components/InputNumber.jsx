import React from 'react'
import { Col, Form } from 'react-bootstrap'

const InputNumber = ({ value, onChange, max }) => {
  return (
    <Col>
      <Form.Control as="select" min={1} value={value} onChange={onChange}>
        {[...Array(max).keys()].map(x => (
          <option key={x + 1} value={x + 1}>
            {x + 1}
          </option>
        ))}
      </Form.Control>
    </Col>
  )
}

export default InputNumber
