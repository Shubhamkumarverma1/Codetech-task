import { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:3001");

function App() {
  const [text, setText] = useState("");

  useEffect(() => {
    socket.on("load-document", data => setText(data));
    socket.on("receive-changes", data => setText(data));
  }, []);

  const handleChange = (e) => {
    setText(e.target.value);
    socket.emit("send-changes", e.target.value);
  };

  return (
    <textarea value={text} onChange={handleChange} style={{width: "100%", height: "90vh"}} />
  );
}

export default App;
