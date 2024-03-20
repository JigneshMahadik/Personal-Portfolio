import Navbar from "./navbar";
import SoftDev from './images/banner-5.svg'
import html from './images/html.png'
import css from './images/css.png'
import javascript from './images/javascript.png'
import react from './images/react.png'
import java from './images/java.png'
import nodejs from './images/nodejs.png'
import web from './images/web-3.png'
import mobile from './images/mobile.png'
import devSol from './images/dev-sol.png'
import seo from './images/seo.png'
import visuals from './images/visuals.png'
import animation from './images/animation.png'

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
                    <div class="lg:w-2/5 md:w-1/ bg-opacity-50 rounded-lg p-1 flex flex-col md:ml-auto w-full">
                        <img src={SoftDev} width={350} />
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
                        <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full  text-indigo-400 flex-shrink-0">
                            {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-8 h-8" viewBox="0 0 24 24">
                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                            </svg> */}
                            <img src={web} width={70}/>
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
                        <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full text-indigo-400 flex-shrink-0">
                            {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                            </svg> */}
                            <img src={mobile} width={70}/>
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
                        <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full text-indigo-400 flex-shrink-0">
                            {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-8 h-8" viewBox="0 0 24 24">
                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                            </svg> */}
                            <img src={devSol} width={70}/>
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
                        <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full text-indigo-400 flex-shrink-0">
                            {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                            </svg> */}
                            <img src={seo} width={70}/>
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
                        <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full text-indigo-400 flex-shrink-0">
                            {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-8 h-8" viewBox="0 0 24 24">
                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                            </svg> */}
                            <img src={visuals} width={70}/>
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
                        <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full text-indigo-400 flex-shrink-0">
                            {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                            </svg> */}
                            <img src={animation} />
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
            {/* Favorite Activites */}
            <section class="text-gray-400 bg-gray-900 body-font">
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Favorite Activities</h1>
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-800 sm:flex-row flex-col">
                    <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full text-indigo-400 bg-gray-800 flex-shrink-0">
                        {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                        </svg> */}
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                        </svg>
                    </div>
                    <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                        <h2 class="text-white text-lg title-font font-medium mb-2">Investments</h2>
                        <p class="leading-relaxed text-base">Exploring Stocks, Crypto and Long-Term Growth Opportunities for Financial Investment</p>
                    </div>
                    </div>
                    <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-800 sm:flex-row flex-col">
                    <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                        <h2 class="text-white text-lg title-font font-medium mb-2">Music</h2>
                        <p class="leading-relaxed text-base">Creating Instrumentals, Mixing and Mastering Tracks and Collaborating with Musicians</p>
                    </div>
                    <div class="sm:w-32 order-first sm:order-none sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full text-indigo-400 bg-gray-800 flex-shrink-0">
                        {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
                        <circle cx="6" cy="6" r="3"></circle>
                        <circle cx="6" cy="18" r="3"></circle>
                        <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                        </svg> */}
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-400 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                            <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                            <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
                        </svg>
                    </div>
                    </div>
                    <div class="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
                    <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full text-indigo-400 bg-gray-800 flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                    </div>
                    <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                        <h2 class="text-white text-lg title-font font-medium mb-2">Reading</h2>
                        <p class="leading-relaxed text-base">Books on Self-Improvement, Psychology and Understanding Life Better.</p>
                    </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
