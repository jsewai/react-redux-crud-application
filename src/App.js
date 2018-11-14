import React from 'react';

const App = () => {
  const profiles = [
    {name: "junya", age: 10},
    {name: "hanakooooo", age:123}
  ]
  return(
    <div>
      {
        profiles.map((profile, index) => {
        return <User name={profile.name} age={profile.age} key={index}/>
        })
      }

    </div>
  )
}

const User = (props) => {
  return <div>Hi, I am {props.name}</div>
}



export default App;
