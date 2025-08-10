import { Route, Routes } from "react-router-dom";
import MyForm from "./components/MyForm";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <>
    <h1>Hello React</h1>
    <MyForm />
    <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Home />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
    </Routes>
    </>
  );
}
