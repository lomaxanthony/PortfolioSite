import React from "react";

function Intro() {
    return (
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
            <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold">
                Tony Lomax
            </h1>
            <p className="text-base md:text-xl mb-3 font-medium">
                Software Engineer & Web Developer
            </p>
            <p className="text-sm max-w-xl mb-6 font-bold">
                Talk about your journey over the last ten years and why you switched to the CS industry.
                Flex those writing skills bruhthah. Link to Blog page component or gitgun or linkedin.
            </p>        
        </div>
    )
}

export default Intro;