import {Outlet} from 'react-router-dom';
import Nav from '../sections/Nav';

const Layout = () => {
  return (
    <main>
      <Nav/>
      <section className='mt-24 w-full flex justify-center flex-row'>
        <div className='max-w-2xl m-2 w-full'>
          <Outlet />
        </div>
      </section>
     
    </main>
  )
}

export default Layout