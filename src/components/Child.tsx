import React from "react"

type Props = {
  value: string
}

const Child: React.FC<Props> = (props) => {
  return <p>{props.value}</p>
}

export default Child
