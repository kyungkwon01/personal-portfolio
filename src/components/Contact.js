import { useForm } from 'react-hook-form';

const Contact = () => {
	const {
		register,
		trigger,
		formState: { errors },
	} = useForm();

	const onSubmit = async (e) => {
		console.log('~ e', e);
		const isValid = await trigger();
		if (!isValid) {
			e.preventDefault();
		}
	};

	return (
		<div
			name='contact'
			className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'
		>
			<form
				method='POST'
				action='https://getform.io/f/17d5984c-db32-4148-910d-bde2dbc8416d'
				className='flex flex-col max-w-[600px] w-full'
				onSubmit={onSubmit}
			>
				<div className='pb-8'>
					<p className='text-4xl font-bold inline border-b-4 border-[#3b7ad5] text-gray-300'>
						Contact
					</p>
					<p className='text-gray-300 py-4'></p>
				</div>
				<input
					className='bg-[#ccd6f6] p-2'
					type='text'
					placeholder='Name'
					name='name'
					{...register('name', {
						required: true,
						maxLength: 100,
					})}
				/>
				{errors.name && (
					<p className='text-[#FF0000] mt-1'>
						{errors.name.type === 'required' &&
							'This field is required.'}
						{errors.name.type === 'maxLength' &&
							'Max length is 100 char.'}
					</p>
				)}

				<input
					className='my-4 p-2 bg-[#ccd6f6]'
					type='email'
					placeholder='Email'
					name='email'
					{...register('email', {
						required: true,
						pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
					})}
				/>
				{errors.email && (
					<p className='text-[#FF0000] mt-1'>
						{errors.email.type === 'required' &&
							'This field is required.'}
						{errors.email.type === 'pattern' &&
							'Invalid email address.'}
					</p>
				)}
				<textarea
					className='bg-[#ccd6f6] p-2'
					name='message'
					rows='10'
					placeholder='Message'
					{...register('message', {
						required: true,
						maxLength: 2000,
					})}
				></textarea>
				{errors.message && (
					<p className='text-[#FF0000] mt-1'>
						{errors.message.type === 'required' &&
							'This field is required.'}
						{errors.message.type === 'maxLength' &&
							'Max length is 2000 char.'}
					</p>
				)}
				<button className='text-white border-2 hover:bg-[#3b7ad5] hover:border-[#3b7ad5] px-4 py-3 my-8 mx-auto flex items-center'>
					Send
				</button>
			</form>
		</div>
	);
};

export default Contact;
