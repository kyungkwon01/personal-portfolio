import { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <h1>KK</h1>
      </div>
      <div>
        {/* Desktop Menu */}
        <ul className='hidden md:flex'>
          <li><Link to='home' smooth={true} duration={500}>Home</Link></li>
          <li><Link to='about' smooth={true} duration={500}>About</Link></li>
          <li><Link to='skills' smooth={true} duration={500}>Skills</Link></li>
          <li><Link to='projects' smooth={true} duration={500}>Projects</Link></li>
          <li><Link to='contact' smooth={true} duration={500}>Contact</Link></li>
        </ul>
      </div>
      {/* Hamburger Menu Icon */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}

      </div>

      {/* Mobile Menu */}
      <div className={!nav ? 'hidden' : 'absolute top-0 left-0 w-screen h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        <ul>
          <li className='py-6 text-4xl'><Link onClick={handleClick} to='home' smooth={true} duration={500}>Home</Link></li>
          <li className='py-6 text-4xl'><Link onClick={handleClick} to='about' smooth={true} duration={500}>About</Link></li>
          <li className='py-6 text-4xl'><Link onClick={handleClick} to='skills' smooth={true} duration={500}>Skills</Link></li>
          <li className='py-6 text-4xl'><Link onClick={handleClick} to='projects' smooth={true} duration={500}>Projects</Link></li>
          <li className='py-6 text-4xl'><Link onClick={handleClick} to='contact' smooth={true} duration={500}>Contact</Link></li>
        </ul>
      </div>
      {/* Social Icons */}
      <div className='hidden xl:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a className='flex justify-between items-center w-full text-gray-300' href="https://www.linkedin.com/in/kyungkwon/">
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333]'>
            <a className='flex justify-between items-center w-full text-gray-300' href="https://github.com/kyungkwon01">
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6e5494] '>
            <a className='flex justify-between items-center w-full text-gray-300' href="#contact">
              <Link to='contact' smooth={true} duration={500}>Email</Link> <HiOutlineMail size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;