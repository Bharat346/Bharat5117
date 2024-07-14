import React, { useState, useEffect } from "react";
import NavBar from "./nav";
import { BrowserRouter as Router, Route, Routes , useLocation } from 'react-router-dom';
import Home from './pages/home';
import Projects from "./pages/projects";
import Notes from "./pages/Notes/notes";
import Contact from "./pages/contact";
import Setting from "./pages/settings/setting";
import RenderBlog from "./pages/blogs/renderBlogs";
import BlogDetail from "./pages/blogs/blogDetails";
import Loader from "./Loader/loader";
import ShareButton from "./buttons/shareButton";

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const loadTimeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(loadTimeout);
    };
  }, []);

  return (
      <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <NavBar />
          {/* <ShareButton/> */}
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blogs" element={<RenderBlog />} />
            <Route path="/blogs/:id" element={<BlogDetail />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/settings" element={<Setting />} />
          </Routes>
        </>
      )}
      </>
  );
}

export default App;
