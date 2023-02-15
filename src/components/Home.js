import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from '../contextAPI/context'

const Home = () => {
  const { openSidebar } = useGlobalContext();

  return <section className='container-home'>
    <h3>Sidebar, Modal and React Router</h3><br />
    <main>
      <button className='sidebar-toggle' onClick={openSidebar}>
        <FaBars />
      </button>
    </main>
  </section>
}

export default Home
