import React from 'react'
import "../../index.css"
import { Link } from 'react-router-dom'



function Hero() {
    return (
        <section className="dark:bg-coolGray-100 dark:text-white hero">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src={require("./images/yabre.JPG")} alt="" className="object-contain h-190 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 dark:bg-coolGray-500"/>
		</div>
        
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-7xl font-bold  justify-center leading sm:text-5xl">Welcome, I am</h1>
           
			<h1 className="text-5xl font-bold dark:text-violet-400 leading-none sm:text-6xl">
				Sylvain Yabre
			</h1>
            
			<p className="mt-6 mb-8 text-lg sm:mb-12 dark:text-grey"> A passionate second-year Computer Science student, a tech-enthusiast,
            and an aspiring software engineer.
            <br/>
				<br className="hidden md:inline lg:hidden"/>
                With over two years of full-stack development experience.
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<Link to="/about" className="px-8 py-3 text-lg font-semibold rounded dark:bg-blue-500 dark:text-coolGray-900">More About Me</Link>
				<Link to="/projects" className="px-8 py-3 text-lg font-semibold border rounded dark:border-coolGray-100">Visit My Blog</Link>
			</div>
		</div>
	</div>
</section>
    )
}

export default Hero
