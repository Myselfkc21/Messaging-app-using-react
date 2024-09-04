import Details from "./components/Details/Details"
import Lists from "./components/Lists/Lists";
import Chat from "./components/Chat/Chat"
const App = () => {
  return (
    <div className='container'>
      <Lists></Lists>
      <Chat></Chat>
      <Details></Details>
    </div>
  )
}

export default App