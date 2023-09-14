
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen pt-10 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-screen'>
        <p className='text-[#3b7ad5]'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-6xl font-bold text-white'>Kyung Kwon,</h1>
        <h2 className='text-4xl sm:text-6xl font-bold text-gray-400'>I&apos;m a Full Stack Developer.</h2>
        <p className='text-gray-500 sm:text-lg py-4 max-w-[700px]'>I&apos;m a dedicated and creative developer passionate about crafting seamless digital experiences. With a solid foundation in both front-end and back-end technologies, I specialize in turning ideas into functional and visually appealing web applications. Through a combination of innovative problem-solving and a love for clean code, I strive to create solutions that not only meet but exceed expectations.</p>
        <div>
          <button className=' text-white border-2 px-6 py-3 my-2 flex items-center'>
            View Work
            <span className=''>
              <HiArrowNarrowRight className='ml-3' />
            </span>
          </button>
        </div>
      </div>
    </div>

  );
};

export default Home;