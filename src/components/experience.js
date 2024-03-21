import Navbar from "./navbar";

export function Experience(){
    return (
        <div>
            <Navbar/>
            <section class="text-gray-400 bg-gray-900 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-800 sm:flex-row flex-col">
                    <div class="sm:w-32 sm:h-16 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-r-full rounded-l-full flex-shrink-0 text-indigo-400 bg-gray-800">
                        {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                        </svg> */}
                        <h1 class="text-white title-font font-medium">2021 - 22</h1>
                    </div>
                    <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                        <h1 class="text-white text-2xl title-font font-medium mb-3">Giesecke & Devrient MS India Pvt Ltd</h1>
                        <h3 class="text-white text-xl title-font font-medium mb-2">CII : </h3>
                        <p class="leading-relaxed text-base mb-2 text-violet-300">
                            Worked on project called CII(Convego Instant Issuance) which is java based windows banking application that is
                            designed and developed to print the Debit and Credit cards instantly for card holders within 4-5 minutes
                        </p>
                        <p class="text-violet-300">Key Technologies : Angular, Java, Spring Boot, Oracle, Hibernate, Git, SonarQube</p>
                    </div>
                    </div>
                    <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-800 sm:flex-row flex-col">
                    <div class="sm:w-32 sm:h-16 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-l-full rounded-r-full flex-shrink-0 text-indigo-400 bg-gray-800">
                        {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                        </svg> */}
                        <h1 class="text-white title-font font-medium">May_19 - Jul_19</h1>
                    </div>
                    <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                        <h1 class="text-white text-2xl title-font font-medium mb-3">Huda's Technologies</h1>
                        <h3 class="text-white text-xl title-font font-medium mb-2">NESTSEEKERS : </h3>
                        <p class="leading-relaxed text-base mb-2 text-violet-300">
                            This is an web based Real Estate Management application for buyers, agents and owners who wants to buy, rent and sell
                            their properties in single platform, where agent can bid the property on higher rate.
                        </p>
                        <p class="text-violet-300">Key Technologies : HTML, CSS, PHP, MySQL, Bootstrap, Javascript</p>
                    </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
