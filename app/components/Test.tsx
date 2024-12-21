
const Test = ({ name }: {
  name?: string
}) => {
  return name ? <h1>Hello {name}</h1> : <button>Login</button>;
}

export default Test