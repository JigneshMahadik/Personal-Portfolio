import Navbar from "./navbar";
import SoftDev from './images/contactus.svg'
import git from './images/git.png'
import linkedin from './images/linkedin.png'


export function Contact(){
    return (
        <div>
            <Navbar/>
            <section class="text-gray-400 bg-gray-900 body-font">
                <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
                    <div class="lg:w-3/6 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                    {/* <h1 class="title-font font-medium text-3xl text-white">
                    </h1> */}
                    <h1 class="text-3xl text-blue-400 font-medium">Contact Me</h1>
                    <p class="leading-relaxed mt-4 font-mono font-extralight font-extrabold">
                        <p class="text-white text-xl title-font font-medium font-semibold">
                            For more details you can reach to me on below platforms.
                        </p>
                    </p>
                    {/* <div class="">
                        <img src={SoftDev} width={70}/>
                        <img src={SoftDev} width={70}/>
                        <img src={SoftDev} width={70}/>
                        <img src={SoftDev} width={70}/>
                        <img src={SoftDev} width={70}/>
                        <img src={SoftDev} width={70}/>
                    </div> */}
                    <div class="flex flex-wrap -mx-4 mt-auto mb-auto content-start sm:pr-10 justify-evenly">
                        <img src={linkedin} width={60}/>
                        <img src={git} width={60} class="-ml-32"/>
                    </div>
                    </div>
                    <div class="lg:w-2/5 md:w-1/ bg-opacity-50 rounded-lg p-1 flex flex-col md:ml-auto w-full">
                        <img src={SoftDev} width={350} />
                    </div>
                </div>
            </section>
        </div>
    );
}
