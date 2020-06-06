import React, { useState } from 'react';
type HelloProps = {
  message: string;
}

const Hello = (props: HelloProps) => {
  const [name, setName] = useState<string | null>("Max");
  return <h1>Hello {`I am ${name}`}</h1>
}

export default Hello;