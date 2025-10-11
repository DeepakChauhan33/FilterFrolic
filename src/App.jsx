import Window from './Components/Window'
import Header from './Components/Header'
import './App.css'
import Footer from './Components/Footer'


function App() {

  return (
    <>

    <main className='h-100lvh w-full '>
      <Header />
      <div className='p-1.5'>
        <Window />
      </div>
      
      <Footer/>
    </main>
      

    </>
  )
}

export default App
