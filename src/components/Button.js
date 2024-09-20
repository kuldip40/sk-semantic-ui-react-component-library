import React from 'react'
import Button from 'semantic-ui-react/dist/es/elements/Button'

const SkButton = (props) => {
  return <Button {...props}>{props.children}</Button>
}

export default SkButton
