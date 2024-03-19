import Navbar from "./navbar";
import SoftDev from './pic-3.jpeg'
import html from './images/html.png'
import css from './images/css.png'
import javascript from './images/javascript.png'
import react from './images/react.png'
import java from './images/java.png'
import nodejs from './images/nodejs.png'

export function About(){
    return (
        <div>
            <Navbar/>
            <section class="text-gray-400 bg-gray-900 body-font">
                <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
                    <div class="lg:w-3/6 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                    {/* <h1 class="title-font font-medium text-3xl text-white">
                    </h1> */}
                    <p class="leading-relaxed mt-4 font-mono font-extralight font-extrabold">
                        <h4>Hello there! 👋 My name is Oktay and I'm from Berlin, Germany. As a Full-Stack software developer, I specialize in creating visually appealing websites, apps and mobile games. My passion for graphic design isn't just a hobby, it's a key ingredient in every project I work on.</h4>
                        Growing up bilingual, I developed a love for languages and I currently speak four of them fluently. 
                    </p>
                    
                    </div>
                    <div class="lg:w-2/5 md:w-1/ bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                        <img src={SoftDev}/>    
                    </div>
                </div>
            </section>
            {/* Primary Focus */}
            <section class="text-gray-400 bg-gray-900 body-font">
                <h1 class="sm:text-3xl text-2xl font-medium title-font text-white">Primary Focus</h1>
                <div class="container px-5 py-24 mx-auto flex flex-wrap">
                    <div class="flex flex-wrap -m-4">
                    <div class="p-4 lg:w-1/2 md:w-full">
                        <div class="flex border-2 rounded-lg border-gray-800 p-8 sm:flex-row flex-col">
                        <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 flex-shrink-0">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-8 h-8" viewBox="0 0 24 24">
                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                            </svg>
                        </div>
                        <div class="flex-grow">
                            <h2 class="text-white text-lg title-font font-medium mb-3">Web Design & Development</h2>
                            <p class="leading-relaxed text-base">Creating attractive, easy-to-use websites that work well for businesses and individuals online.</p>
                            {/* <a class="mt-3 text-indigo-400 inline-flex items-center">Learn More
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                            </a> */}
                        </div>
                        </div>
                    </div>
                    <div class="p-4 lg:w-1/2 md:w-full">
                        <div class="flex border-2 rounded-lg border-gray-800 p-8 sm:flex-row flex-col">
                        <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 flex-shrink-0">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                        </div>
                        <div class="flex-grow">
                            <h2 class="text-white text-lg title-font font-medium mb-3">Mobile Apps & Games</h2>
                            <p class="leading-relaxed text-base">Creating and developing engaging mobile apps and games for iOS and Android devices.</p>
                            {/* <a class="mt-3 text-indigo-400 inline-flex items-center">Learn More
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                            </a> */}
                        </div>
                        </div>
                    </div>
                    <div class="p-4 lg:w-1/2 md:w-full">
                        <div class="flex border-2 rounded-lg border-gray-800 p-8 sm:flex-row flex-col">
                        <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 flex-shrink-0">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-8 h-8" viewBox="0 0 24 24">
                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                            </svg>
                        </div>
                        <div class="flex-grow">
                            <h2 class="text-white text-lg title-font font-medium mb-3">Development Solutions</h2>
                            <p class="leading-relaxed text-base">Utilizing JavaScript frameworks like React, Node, Next, Vue and more to build interactive web applications.</p>
                            {/* <a class="mt-3 text-indigo-400 inline-flex items-center">Learn More
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                            </a> */}
                        </div>
                        </div>
                    </div>
                    <div class="p-4 lg:w-1/2 md:w-full">
                        <div class="flex border-2 rounded-lg border-gray-800 p-8 sm:flex-row flex-col">
                        <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 flex-shrink-0">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                        </div>
                        <div class="flex-grow">
                            <h2 class="text-white text-lg title-font font-medium mb-3">Marketing & SEO</h2>
                            <p class="leading-relaxed text-base">Using SEO and marketing strategies to boost online visibility and promote products or services.</p>
                            {/* <a class="mt-3 text-indigo-400 inline-flex items-center">Learn More
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                            </a> */}
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
            {/* Exploring Creativity */}
            <section class="text-gray-400 bg-gray-900 body-font">
                <h1 class="sm:text-3xl text-2xl font-medium title-font text-white">Exploring Creativity</h1>
                <div class="container px-5 py-24 mx-auto flex flex-wrap">
                    <div class="flex flex-wrap -m-4">
                    <div class="p-4 lg:w-1/2 md:w-full">
                        <div class="flex border-2 rounded-lg border-gray-800 p-8 sm:flex-row flex-col">
                        <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 flex-shrink-0">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-8 h-8" viewBox="0 0 24 24">
                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                            </svg>
                        </div>
                        <div class="flex-grow">
                            <h2 class="text-white text-lg title-font font-medium mb-3">Visual Storytelling</h2>
                            <p class="leading-relaxed text-base">Taking and editing photos or videos that tell engaging stories, bringing concepts and ideas to life visually.</p>
                            {/* <a class="mt-3 text-indigo-400 inline-flex items-center">Learn More
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                            </a> */}
                        </div>
                        </div>
                    </div>
                    <div class="p-4 lg:w-1/2 md:w-full">
                        <div class="flex border-2 rounded-lg border-gray-800 p-8 sm:flex-row flex-col">
                        <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 flex-shrink-0">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                        </div>
                        <div class="flex-grow">
                            <h2 class="text-white text-lg title-font font-medium mb-3">Digital Content Creation</h2>
                            <p class="leading-relaxed text-base">Creatiing dynamic digital content, such as 3D models, graphics or animations.</p>
                            {/* <a class="mt-3 text-indigo-400 inline-flex items-center">Learn More
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                            </a> */}
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
            {/* Languages */}
            <section class="text-gray-400 body-font bg-gray-900">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-col text-center w-full mb-20">
                    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Languages</h1>
                    </div>
                    <div class="flex flex-wrap">
                    <div class="xl:w-1/2 lg:w-1/2 md:w-full px-8 py-6">
                        <h2 class="text-lg sm:text-xl text-white font-medium title-font mb-4">Coding Languages</h2>
                        <p class="leading-relaxed text-base mb-4">JavaScript</p>
                        <p class="leading-relaxed text-base mb-4">TypeScript</p>
                        <p class="leading-relaxed text-base mb-4">CSS</p>
                        <p class="leading-relaxed text-base mb-4">PHP</p>
                        <p class="leading-relaxed text-base mb-4">Python</p>
                    </div>
                    <div class="xl:w-1/2 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-800">
                        <h2 class="text-lg sm:text-xl text-white font-medium title-font mb-4">Human Languages</h2>
                        <p class="leading-relaxed text-base mb-4">English </p>
                        <p class="leading-relaxed text-base mb-4">German </p>
                        <p class="leading-relaxed text-base mb-4">Bulgarian </p>
                        <p class="leading-relaxed text-base mb-4">Turkish </p>
                        <p class="leading-relaxed text-base mb-4">Russian </p>
                    </div>
                    </div>
                </div>
            </section>
            {/* Development Skills */}
            <section class="text-gray-400 bg-gray-900 body-font">
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Development Skills</h1>
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-wrap -m-4 text-center">
                    <div class="p-4 sm:w-1/4 w-1/2">
                        <img src={html} width={150}/>
                    </div>
                    <div class="p-4 sm:w-1/4 w-1/2">
                    <img src={css} width={150}/>
                    </div>
                    <div class="p-4 sm:w-1/4 w-1/2">
                    <img src={java} width={150}/>
                    </div>
                    <div class="p-4 sm:w-1/4 w-1/2">
                    <img src={javascript} width={150}/>
                    </div>
                    <div class="p-4 sm:w-1/4 w-1/2">
                    <img src={react} width={130}/>
                    </div>
                    <div class="p-4 sm:w-1/4 w-1/2">
                    <img src={nodejs} width={120}/>
                    </div>
                    </div>
                </div>
            </section>
        </div>
    );
}