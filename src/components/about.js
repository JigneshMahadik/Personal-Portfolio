import Navbar from "./navbar";
import SoftDev from './pic-3.jpeg'

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
        </div>
    );
}