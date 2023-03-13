import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import CreatePost from "./components/CreatePost";
import PostDetails from "./components/PostDetails";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="post/:postId" element={<PostDetails />} />
        <Route path="create-post" element={<CreatePost />} />
      </Routes>
    </div>
  );
}

export default App;
