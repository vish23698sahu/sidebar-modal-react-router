import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from '../contextAPI/context'

const Home = () => {
  const { openSidebar, openModal } = useGlobalContext();

  return <section className='container-home'>
    <h3>Sidebar and Modal</h3><br />
    <main>
      <button className='sidebar-toggle' onClick={openSidebar}>
        <FaBars />
      </button>
      <button className='btn' onClick={openModal} >Show Modal</button>
    </main>
  </section>
}

export default Home
