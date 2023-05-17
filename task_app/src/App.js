import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Login from './components/Login/Login'
import Register from './components/Login/Register/Register'
import TaskList from './components/Tasks/TaksList/TaskList'
import Task from './components/Tasks/Task/Task'
import PrivateRoute from './routes/privateRoutes'
import { ProviderAuth } from './hooks/useAuth'
import Header from './components/Common/Header/Header'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <ProviderAuth>
      <Router>
        <Header />
        <div className="container mx-auto rounded-xl p-8 m-10">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route
              path="/tasks"
              element={
                <PrivateRoute>
                  <TaskList />
                </PrivateRoute>
              }
            />
            <Route
              path="/task/:id"
              element={
                <PrivateRoute>
                  <Task />
                </PrivateRoute>
              }
            />
            <Route
              path="/task/new"
              element={
                <PrivateRoute>
                  <Task />
                </PrivateRoute>
              }
            />
          </Routes>
          <ToastContainer />
        </div>
      </Router>
    </ProviderAuth>
  )
}

export default App
