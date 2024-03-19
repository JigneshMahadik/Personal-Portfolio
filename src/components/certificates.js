import Navbar from "./navbar";
import nodejsCert from './images/nodejs-cert.png'
import jsCert from './images/js-cert.png'
import reactCert from './images/reactjs-cert.png'


function Certificates(){
    return (
        <div>
            <Navbar/>
            <section class="text-gray-400 bg-gray-900 body-font">
                <div class="container px-5 py-24 mx-auto flex flex-wrap">
                    <div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
                    <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                        <div class="h-full w-1 bg-gray-800 pointer-events-none"></div>
                    </div>
                    <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">1</div>
                    <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row mb-20">
                        <div class="flex-shrink-0 w-64 h-2 text-indigo-400 rounded-full inline-flex items-center justify-center">
                        {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                        </svg> */}
                        <img src={nodejsCert} />
                        </div>
                        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                        <h2 class="font-medium title-font text-white mb-1 text-xl">Node.Js Essentials</h2>
                        <p class="leading-relaxed">Completed Node.Js and learnt the fundamentals that Essential to make pillar of it.</p>
                        </div>
                    </div>
                    </div>
                    <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                    <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                        <div class="h-full w-1 bg-gray-800 pointer-events-none"></div>
                    </div>
                    <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">2</div>
                    <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row mb-20">
                        <div class="flex-shrink-0 w-64 h-24 bg-gray-800 text-indigo-400 rounded-full inline-flex items-center justify-center">
                        {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                        </svg> */}
                        <img src={jsCert} />
                        </div>
                        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                        <h2 class="font-medium title-font text-white mb-1 text-xl">JavaScript Essential Training</h2>
                        <p class="leading-relaxed">Completed javascript and learnt basics like variables, Datatypes, functions, Events, Loops, Hoisting, API, etc.</p>
                        </div>
                    </div>
                    </div>
                    <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                    <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                        <div class="h-full w-1 bg-gray-800 pointer-events-none"></div>
                    </div>
                    <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">3</div>
                    <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                        <div class="flex-shrink-0 w-64 h-24 bg-gray-800 text-indigo-400 rounded-full inline-flex items-center justify-center">
                        {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
                            <circle cx="12" cy="5" r="3"></circle>
                            <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                        </svg> */}
                        <img src={reactCert} />
                        </div>
                        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                        <h2 class="font-medium title-font text-white mb-1 text-xl">React.Js Essentials</h2>
                        <p class="leading-relaxed">Completed basics of React.Js and learnt components, API fetching, Hooks, Props, Routing, etc.</p>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Certificates;
