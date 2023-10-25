import logo from '../assets/jamming-logo.jpeg';

const NavBar = () => {
  return (
    <nav className='container mx-auto flex items-center justify-center py-4'>
      <div>
        <img className='h-14' src={logo} alt='' />
      </div>
    </nav>
  );
};

export default NavBar;
