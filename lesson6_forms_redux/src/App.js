import { FormikFormSignUp } from './Components/FormikForm';
import { ReactHookFormSignUp } from './Components/ReactHookForm';
import { Route, Routes, Link, Outlet } from "react-router-dom";
import SavedUsers from "./Components/SavedUsers";
import { FetchedUsers } from "./Components/FetchedUsers";
import { Header } from "./Components/Header";

const FormsHeader = () => {
  return (
  <div style={{
    margin: "30px",
    textAlign: "center",
  }}>
      <h2>TASK 1 FORMS</h2>
      <Link style={{ marginRight: "50px", }} to="/forms/react_formik">Formik</Link>
      <Link to="/forms/react_hook_form">React hook form</Link>
      <Outlet />
  </div>
  )
}

const ReduxHeader = () => {
  return (
    <div style={{
      margin: "30px",
      textAlign: "center",
    }}>
        <h2>TASK 2 REDUX</h2>
        <Link style={{ marginRight: "50px", }} to="/redux/saved_users">Saved users</Link>
        <Link to="/redux/downloaded_users">Downloaded users</Link>
        <Outlet />
    </div>
  )
}

function App() {
  return (
    <div style={{
      fontFamily: "'Cormorant Infant', serif",
      maxWidth: "1200px",
      margin: "0 auto",
    }} >
      <Header />
      <Routes>
        <Route path="/" element={<FormsHeader />}/>
          <Route path="forms" element={<FormsHeader />}>
            <Route path="react_formik" element={<FormikFormSignUp />} />
            <Route path="react_hook_form" element={<ReactHookFormSignUp />} />
          </Route>
          <Route path="redux" element={<ReduxHeader />}>
            <Route path="saved_users" element={<SavedUsers />} />
            <Route path="downloaded_users" element={<FetchedUsers />} />
          </Route>
      </Routes>
    </div>
  );
}

export default App;