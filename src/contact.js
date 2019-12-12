import React,{useState, Fragment} from "react";

const Hello = ({name}) => {
  return <Fragment>Hello, {name}</Fragment>
}

const Contact=()=> {
 const onSubmit = () => {
    this.props.history.push("/");
  };
  const [names, updateNames] = useState([])
  const [currentName, updateCurrentName] = useState('')
  const increment = () => {
    updateNames([...names, currentName])
  }
  const decrement = () => {
    let currentNames = names
    let newNames = currentNames.slice(0, -1)
    updateNames(newNames)
  }
  const handleChange = e => {
    updateCurrentName(e.target.value)
  }
  
    return (
      <form>
         <input onChange={handleChange} placeholder="User name" />
      <button onClick={increment} type="button">+</button>
      <button onClick={decrement} type="button">-</button>
      <div>
        {names.map(name => {
          return (
            <div>
              <Hello name={name} />
            </div>
          )
        })}
      </div>
    
        <button onClick={onSubmit}>Submit</button>
      </form>
    );
  }

export default Contact;
