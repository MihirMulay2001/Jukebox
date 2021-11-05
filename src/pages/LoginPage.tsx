import React from 'react';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'



const client_id = process.env.REACT_APP_CLIENT_ID

let url = 'https://accounts.spotify.com/authorize'
url += '?response_type=token'
url += '&client_id=' + encodeURIComponent(client_id || '')
url += '&scope=' + encodeURIComponent("user-read-private user-read-email")
url += '&redirect_uri=' + encodeURIComponent("http://localhost:3000/landingpage")
url += '&state=jahsyyteoisjkhfd'


function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        hello
        <a href={url}>
          <div>Login to access data</div>
        </a>
      </div>
    </DndProvider>
  );
}

export default App;

//https://accounts.spotify.com/authorize?response_type=token&client_id=5f2ed8b9afd149e196baace029ed072e&scope=user-read-private%20user-read-email&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Flandingpage&state=jahsyyteoisjkhfd