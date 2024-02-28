import DefaultLayout from './layouts/Sidebar.layout'
import Message from './pages/Message'

function App() {
  return (
    <div className=" h-screen w-20 flex ">
        <DefaultLayout />
        <Message />
    </div>
  )
}

export default App
