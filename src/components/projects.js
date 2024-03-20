import Navbar from "./navbar";
import project from './images/project-2.svg'

export function Projects(){
    return (
        <div>
            <Navbar/>
            <section class="text-gray-400 bg-gray-900 body-font">
                <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
                    <div class="lg:w-2/5 md:w-1/ bg-opacity-50 rounded-lg p-1 flex flex-col md:ml-auto w-full">
                        <img src={project} width={350} />
                    </div>
                    <div class="lg:w-3/6 md:w-1/2 md:pr-6 lg:pr-20">
                    {/* <h1 class="title-font font-medium text-3xl text-white">
                    </h1> */}
                    <p class="leading-relaxed font-mono font-extralight">
                        <h4>Hello there! 👋 My name is Oktay and I'm from Berlin, Germany. As a Full-Stack software developer, I specialize in creating visually appealing websites, apps and mobile games. My passion for graphic design isn't just a hobby, it's a key ingredient in every project I work on.</h4>
                    </p>
                    
                    </div>
                </div>
            </section>
            <section class="text-gray-400 bg-gray-900 body-font">
                <div class="container px-5 py-24 mx-auto flex flex-wrap">
                    <div class="flex flex-col text-center w-full mb-20">
                    <h1 class="sm:text-3xl text-2xl font-medium title-font text-white">Projects</h1>
                    </div>
                    <div class="flex flex-wrap -m-4">
                    <div class="p-4 md:w-1/2">
                        <div class="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
                        <div class="flex items-center mb-5">
                            {/* <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                            </svg>
                            </div> */}
                            <h2 class="text-white text-lg title-font font-medium">Grocery-Bud</h2>
                        </div>
                        <div class="flex-grow mb-6">
                            <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                            {/* <a class="mt-3 text-indigo-400 inline-flex items-center">Learn More
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                            </a> */}
                        </div>

                        {/* To do  */}
                        {/* Due to adding link in anchor tag responsivness is scattered */}

                        <h4 className="text-left mt-3 font-medium">Hosted Link : <a href="https://grocery-bud-nine-brown.vercel.app/" className="text-blue-500">https://grocery-bud-nine-brown.vercel.app/</a></h4>
                        <h4 className="text-left mt-3 font-medium">Git Repo : <a href="https://github.com/JigneshMahadik/Grocery-Bud.git" className="text-blue-500">https://github.com/JigneshMahadik/Grocery-Bud.git</a></h4>
                        </div>
                    </div>
                    <div class="p-4 md:w-1/2">
                        <div class="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
                        <div class="flex items-center mb-5">
                            {/* <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                            </div> */}
                            <h2 class="text-white text-lg title-font font-medium">Geek Foods</h2>
                        </div>
                        <div class="flex-grow">
                            <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                            {/* <a class="mt-3 text-indigo-400 inline-flex items-center">Learn More
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                            </a> */}
                        </div>

                        {/* To do  */}
                        {/* Due to adding link in anchor tag responsivness is scattered */}

                        <h4 className="text-left mt-3 font-medium">Hosted Link : <a href="https://geek-foods-dusky.vercel.app/" className="text-blue-500">https://geek-foods-dusky.vercel.app/</a></h4>
                        <h4 className="text-left mt-3 font-medium">Git Repo : <a href="https://github.com/JigneshMahadik/React-Quiz-App.git" className="text-blue-500">https://github.com/JigneshMahadik/React-Quiz-App.git</a></h4>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/2">
                        <div className="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-6 flex-col">
                        <div class="flex items-center mb-5">
                            {/* <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                            </div> */}
                            <h2 class="text-white text-lg title-font font-medium">Aria</h2>
                        </div>
                        <div class="flex-grow mb-6">
                            <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                            {/* <a class="mt-3 text-indigo-400 inline-flex items-center">Learn More
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                            </a> */}
                        </div>
                        <h4 className="text-left mt-3 font-medium">Hosted Link : <a href="https://jigneshmahadik.github.io/aria-major-project/" className="text-blue-500">https://jigneshmahadik.github.io/aria-major-project/</a></h4>

                        {/* To do  */}
                        {/* Due to adding link in anchor tag responsivness is scattered */}

                        <h4 className="text-left mt-3 font-medium">Git Repo : <a href="https://github.com/JigneshMahadik/aria-major-project/tree/master" className="text-blue-500">https://github.com/JigneshMahadik/aria-major-project/tree/master</a></h4>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/2">
                        <div className="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-6 flex-col">
                        <div class="flex items-center mb-5">
                            {/* <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                            </div> */}
                            <h2 class="text-white text-lg title-font font-medium">Digital Clock</h2>
                        </div>
                        <div class="flex-grow mb-6">
                            <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                            {/* <a class="mt-3 text-indigo-400 inline-flex items-center">Learn More
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                            </a> */}
                        </div>
                        <h4 className="text-left mt-3 font-medium">Hosted Link : <a href="https://jigneshmahadik.github.io/digital-clock/" className="text-blue-500">https://jigneshmahadik.github.io/digital-clock/</a></h4>

                        {/* To do  */}
                        {/* Due to adding link in anchor tag responsivness is scattered */}

                        <h4 className="text-left mt-3 font-medium">Git Repo : <a href="https://jigneshmahadik.github.io/digital-clock/" className="text-blue-500">https://jigneshmahadik.github.io/digital-clock/</a></h4>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
