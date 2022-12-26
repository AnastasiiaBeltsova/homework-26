import React from "react";


function App() {

    const user = {
        firstName: "Anastasiia",
        lastName: "Beltsova",
        technologies: "HTML, CSS, JavaScript"
    }


    return (
        <div className="App">
          <p>My name: {user.firstName}</p>
          <p>My surname: {user.lastName}</p>
          <p>Learned Technologies: {user.technologies}</p>    
        </div>
    )
}

export default App;
