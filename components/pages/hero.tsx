export default function Hero(){

  return (
    <div class="h-screen flex flex-col relative overflow-hidden before:absolute before:top-20 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/squared-bg-element.svg')] before:bg-no-repeat before:bg-top before:size-full before:-z-[1] before:transform before:-translate-x-1/2 dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/squared-bg-element.svg')]">
      <div class="flex flex-col justift-center my-auto max-w-[85%] mx-auto">
        <div class="flex justify-center py-auto">
          <a class="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-xs text-gray-600 p-2 px-3 rounded-full transition hover:border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:border-gray-600 dark:text-gray-400" href="#">
            About our Research 
            <span class="flex items-center gap-x-1">
              <span class="border-s border-gray-200 text-blue-600 ps-2 dark:text-blue-500">Learn more</span>
              <svg class="flex-shrink-0 size-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </span>
          </a>
        </div>

        <div class="mt-5 max-w-xl text-center mx-auto">
          <h1 class="block text-gray-800 text-2xl md:text-3xl lg:text-4xl dark:text-gray-200">
            Supercharge the Classroom 
          </h1>
          <h1 className="text-8xl py-8 font-medium">
            InsightAI
          </h1>
        </div>

        <div class="mt-5 max-w-3xl text-center mx-auto">
          <p class="text-lg text-gray-600 dark:text-gray-400">
            InsightAI is based platform designed by students at UMD to boost student engagement while also providing helpful metrics to teachers
          </p>
        </div>

        <div class="mt-8 gap-3 flex justify-center">
          <a class="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-4 dark:focus:ring-offset-gray-800" href="#">
            Continue with Google
          </a>
        </div>
      </div>
    </div>
  )
}
