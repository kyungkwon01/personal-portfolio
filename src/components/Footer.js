import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
	return (
		<footer className='p-4 text-gray-300'>
			<div className='w-full mx-auto'>
				<div className='justify-center text-center '>
					<div className='flex justify-center gap-4 p-2'>
						<a href='https://github.com/kyungkwon01'>
							<FaGithub size={30} />
						</a>
						<a href='https://www.linkedin.com/in/kyungkwon'>
							<FaLinkedin size={30} />
						</a>
					</div>
					<p className='text-md'>©2023 Kwon. All Rights Reserved.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
