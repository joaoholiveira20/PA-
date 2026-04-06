import './App.css'
import AdicionarUsuario from './components/AdicionarUsuario'
import Footer from './components/Footer'
import Header from './components/AdicionarUsuario/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='app'>
        <Header/>
        <main>
          <AdicionarUsuario/>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
