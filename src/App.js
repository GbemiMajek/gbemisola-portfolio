import './App.css'
import Navbar from './Navbar'
import { AiFillLinkedin, AiFillGithub, AiFillInstagram, AiFillMail, AiFillEnvironment, AiFillPhone } from 'react-icons/ai'

function App() {
	return (
		<main className='px-8 md:px-20 lg:px-40'>
			<Navbar />

			<section id='home' className='min-h-screen text-center mt-4 flex flex-col justify-center '>
				<div className='mx-auto bg-gradient-to-b from-sky-500 rounded-full w-56 h-56 relative overflow-hidden md:h-96 md:w-96 mb-2'>
					<img src='/gbemi.jpeg' layout='fill' objectFit='cover' alt='Gbemisola' />
				</div>
				<h1 className='text-3xl md:text-5xl font-medium text-sky-500 mt-4 font-sans'>GBEMISOLA MAJEKODUNMI</h1>
				<h3 className='text-xl md:text-2xl font-mono mt-2'>Frontend Engineer (Learner)</h3>
				<p className='text-md py-1 text-gray-800 md:text-xl mt-4 w-4/5 mx-auto'>
					Enthusiastic and motivated self-learning about information technology. Focused on web development. Now I am looking for
					more experience in my field.{' '}
				</p>
				<div className='text-5xl py-4 flex justify-center gap-16 text-gray-600'>
					<AiFillLinkedin className='text-sky-600' />
					<AiFillGithub className='text-neutral-700' />
					<AiFillInstagram className='text-pink-700' />
				</div>
			</section>

			{/* <section id='service' className=''>
				<h1 className='text-4xl font-medium text-center'>Services I Offer</h1>
				<p className='mt-5 text-md text-center mx-auto w-3/5'>
					I have experience in building an application and creating cloud architecture as an integration to provide business and
					consumer solutions. I offer a wide of service, including Frontend & Backend Development, Cloud & IT Solutions Architect,
					DevOps Architect
				</p>

				<div className='mt-6 flex flex-col md:flex-row gap-8'>
					<div className='w-full shadow-lg rounded-md px-4 py-5 flex flex-col items-center text-center gap-1'>
						<img src='software.png' className='w-48' alt='gambar' />
						<h2 className='text-xl'>Software Development</h2>
						<p className='text-gray-500'>I can help you solve a problem, build a product or grow existing project.</p>
						<p className='text-xl '>Tools I Use</p>
						<ul>
							<li>React</li>
							<li>Node JS (Express)</li>
							<li>Python (Flask)</li>
						</ul>
					</div>

					<div className='w-full shadow-lg rounded-md px-4 py-5 flex flex-col items-center text-center gap-1'>
						<img src='cloud.png' className='w-48' alt='gambar' />
						<h2 className='text-xl'>Cloud & IT Solutions Architect</h2>
						<p className='text-gray-500'>I can help you solve a problem, build a product or grow existing project.</p>
						<p className='text-xl'>Tools I Use</p>
						<ul>
							<li>AWS, Azure, Digital Ocean</li>
							<li>Openstack</li>
							<li>Kubernetes & Docker</li>
						</ul>
					</div>

					<div className='w-full shadow-lg rounded-md px-4 py-5 flex flex-col items-center text-center gap-1'>
						<img src='ops.png' className='w-48' alt='gambar' />
						<h2 className='text-xl'>DevOps Architect</h2>
						<p className='text-gray-500'>I can help you solve a problem, build a product or grow existing project.</p>
						<p className='text-xl '>Tools I Use</p>
						<ul>
							<li>Gitlab</li>
							<li>Ansible</li>
							<li></li>
						</ul>
					</div>
				</div>
			</section> */}

			<section id='portfolio' className='mt-10'>
				<h1 className='text-4xl font-medium text-center'>Portfolio</h1>
				<p className='mt-5 text-md text-center'>Here are some projects that I have managed.</p>
			</section>

			<section id='license' className='mt-20'>
				<h1 className='text-4xl font-medium text-center'>License & Certifications</h1>
				<p className='mt-1 text-md text-center'>Here are some of the certifications I have</p>

				<div className='flex flex-col md:flex-row gap-8 mt-4'>
					<div className='w-full md:w-2/6 shadow-md rounded '>
						<div className='h-48 md:h-56 rounded-t-md relative overflow-hidden'>
							<img src='https://source.unsplash.com/random' alt='' layout='fill' objectFit='cover' />
						</div>
						<div className='p-4'>
							<h1 className='text-xl font-medium'>Tech4Dev HTML & CSS</h1>
							<p className=''>Nigeria</p>
							<p className='text-sm text-gray-500'>October 2022</p>
						</div>
					</div>

					<div className='w-full md:w-2/6 shadow-md rounded '>
						<div className='h-48 md:h-56 rounded-t-md relative overflow-hidden'>
							<img src='https://source.unsplash.com/random' alt='' layout='fill' objectFit='cover' />
						</div>
						<div className='p-4'>
							<h1 className='text-xl font-medium'>Tech4Dev JavaScript</h1>
							<p className=''>Nigeria</p>
							<p className='text-sm text-gray-500'>November 2022</p>
						</div>
					</div>

					<div className='w-full md:w-2/6 shadow-md rounded '>
						<div className='h-48 md:h-56 rounded-t-md relative overflow-hidden'>
							<img src='https://source.unsplash.com/random' alt='' layout='fill' objectFit='cover' />
						</div>
						<div className='p-4'>
							<h1 className='text-xl font-medium'>Tech4Dev React</h1>
							<p className=''>Nigeria</p>
							<p className='text-sm text-gray-500'>January 2023</p>
						</div>
					</div>
				</div>
			</section>

			<section id='footer' className='mt-20 bg-neutral-700 py-8 px-8'>
				<div className='text-white md:text-center'>
					<h1 className='font-medium text-xl'>Contact Me</h1>

					<ul className='md:flex justify-center gap-4 mt-3'>
						<li className='flex items-center gap-2'>
							<AiFillMail />
							<p>gbemisolamajekodunmi@gmail.com</p>
						</li>
						<li className='flex items-center gap-2'>
							<AiFillEnvironment />
							<p>Lagos, Nigeria</p>
						</li>
						<li className='flex items-center gap-2'>
							<AiFillPhone />
							<p>0801-000-2000</p>
						</li>
					</ul>

					<div className='flex text-xl text-white gap-4 mt-2 md:justify-center'>
						<AiFillLinkedin />
						<AiFillGithub />
						<AiFillInstagram />
					</div>

					<hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />

					<p className='text-center text-sm text-gray-300 sm:text-center'>
						© 2023 &nbsp;
						<a href='#'>Gbemisola Majekodunmi</a>. All Rights Reserved.
					</p>
				</div>
			</section>
		</main>
	)
}

export default App
