// import React from 'react'
// import image from './assets/image.png'
// import image1 from './assets/blub.png'

// const App = () => {
//   return (
//     <>
//     <header class="text-gray-600 body-font">
//     <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//       <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
//         <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-purple-500 rounded-full" viewBox="0 0 24 24">
//           <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
//         </svg>
//         <span class="ml-3 text-xl">Tailblocks</span>
//       </a>
//       <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
//         <a class="mr-5 hover:text-gray-900">First Link</a>
//         <a class="mr-5 hover:text-gray-900">Second Link</a>
//         <a class="mr-5 hover:text-gray-900">Third Link</a>
//         <a class="mr-5 hover:text-gray-900">Fourth Link</a>
//       </nav>
//       <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
//         <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
//           <path d="M5 12h14M12 5l7 7-7 7"></path>
//         </svg>
//       </button>
//     </div>
//   </header>
//       <div className='banner-section'>
//         <img className='w-full' src={image}/>
//       </div>
//       <div className='our-value-section py-12'>
//         <div className='container px-2'>
//         <div className='color-text text-center mb-16' >
//           <h5 className='text-2xl font-semibold mb-8'>OUR VALUES</h5>
//           <h2 className='mt-3 text-xl  md:text-4xl lg:text-6xl font-bold w-3/5 m-auto'>The Common spirit characterizes us</h2>
//         </div>
//         <div className="grid grid-cols-1  lg:grid-cols-3   gap-4">
//           <div className='px-2 bg-slate-200 rounded'>
//             <div className='px-4 py-4'>
//               <div className='p-3.5 mb-4 inline-block bg-gray-200 border-blue rounded border-solid border-2 border-sky-500 ' >
//                 <img  src={image1}/> 
//               </div>
//               <div>
//                 <h6 className='font-bold  text-xl text-black font-sans mb-3'>Open to new ways</h6>
//                 <p className='text-base mb-3'>We analyze circumstances, strategies and processes to find the optimal 
//                   solution for our customers</p>
//               </div>         
//             </div>
//           </div>
//           <div className='px-2 bg-slate-200 rounded'>
//             <div className='px-4 py-4'>
//               <div className='p-3.5 mb-4 inline-block bg-gray-200 border-blue rounded border-solid border-2 border-sky-500 ' >
//                 <img  src={image1}/> 
//               </div>
//               <div>
//                 <h6 className='font-bold  text-xl text-black font-sans mb-3'>Open to new ways</h6>
//                 <p className='text-base mb-3'>We analyze circumstances, strategies and processes to find the optimal 
//                   solution for our customers</p>
//               </div>
//             </div>
//           </div>
//           <div className='px-2 bg-slate-200 rounded'>
//             <div className='px-4 py-4'>
//               <div className='p-3.5 mb-4 inline-block bg-gray-200 border-blue rounded border-solid border-2 border-sky-500 ' >
//                 <img  src={image1}/> 
//               </div>
//               <div>
//                 <h6 className='font-bold  text-xl text-black font-sans mb-3'>Open to new ways</h6>
//                 <p className='text-base mb-3'>We analyze circumstances, strategies and processes to find the optimal 
//                   solution for our customers</p>
//               </div> 
//             </div>
//           </div>
//         </div>
//       </div>
//       </div>
//       <div className='container mx-auto card-section py-8' >
//           <div>
//             <h3 className='w-3/5 m-auto text-center text-6xl font-bold pb-10' >Our Leading, Strong And Creative Team</h3>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4   gap-6">
//             <div className='bg-slate-200 rounded p-4 hover:shadow-2xl '>
//             <div className='bg-slate-800 h-96 w-full rounded'></div>
//             <div className='text-center'>
//               <h6 className='text-3xl font-bold mt-4'>Shashwat Mishra</h6>
//               <p className='text-2xl font-semibold mt-4'>CEO</p>
//             </div>
//             </div>
//             <div className='bg-slate-200 rounded p-4 hover:shadow-2xl '>
//             <div className='custum-css bg-slate-800  h-96 w-full rounded'></div>
//             <div className='text-center'>
//               <h6 className='text-3xl font-bold mt-4'>Shashwat Mishra</h6>
//               <p className='text-2xl font-semibold mt-4'>CEO</p>
//             </div>
//             </div>
//             <div className='bg-slate-200 rounded p-4  hover:shadow-2xl'>
//             <div className='bg-slate-800 h-96 w-full rounded'></div>
//             <div className='text-center'>
//               <h6 className='text-3xl font-bold mt-4'>Shashwat Mishra</h6>
//               <p className='text-2xl font-semibold mt-4'>CEO</p>
//             </div>
//             </div>
//             <div className='bg-slate-200 rounded p-4 hover:shadow-2xl'>
//             <div className='bg-slate-800  h-96 w-full rounded'></div>
//             <div className='text-center'>
//               <h6 className='text-3xl font-bold mt-4'>Shashwat Mishra</h6>
//               <p className='text-2xl font-semibold mt-4'>CEO</p>
//             </div>
//             </div>
//           </div>
//         </div>
//         <footer className="text-gray-600 body-font">
//   <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
//     <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
//       <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
//         <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-purple-500 rounded-full" viewBox="0 0 24 24">
//           <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
//         </svg>
//         <span className="ml-3 text-xl">Tailblocks</span>
//       </a>
//       <p className="mt-2 text-sm text-gray-500">Air plant banjo lyft occupy retro adaptogen indego</p>
//     </div>
//     <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
//       <div className="lg:w-1/4 md:w-1/2 w-full px-4">
//         <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
//         <nav className="list-none mb-10">
//           <li>
//             <a className="text-gray-600 hover:text-gray-800">First Link</a>
//           </li>
//           <li>
//             <a className="text-gray-600 hover:text-gray-800">Second Link</a>
//           </li>
//           <li>
//             <a className="text-gray-600 hover:text-gray-800">Third Link</a>
//           </li>
//           <li>
//             <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
//           </li>
//         </nav>
//       </div>
//       <div className="lg:w-1/4 md:w-1/2 w-full px-4">
//         <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
//         <nav className="list-none mb-10">
//           <li>
//             <a className="text-gray-600 hover:text-gray-800">First Link</a>
//           </li>
//           <li>
//             <a className="text-gray-600 hover:text-gray-800">Second Link</a>
//           </li>
//           <li>
//             <a className="text-gray-600 hover:text-gray-800">Third Link</a>
//           </li>
//           <li>
//             <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
//           </li>
//         </nav>
//       </div>
//       <div className="lg:w-1/4 md:w-1/2 w-full px-4">
//         <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
//         <nav className="list-none mb-10">
//           <li>
//             <a className="text-gray-600 hover:text-gray-800">First Link</a>
//           </li>
//           <li>
//             <a className="text-gray-600 hover:text-gray-800">Second Link</a>
//           </li>
//           <li>
//             <a className="text-gray-600 hover:text-gray-800">Third Link</a>
//           </li>
//           <li>
//             <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
//           </li>
//         </nav>
//       </div>
//       <div className="lg:w-1/4 md:w-1/2 w-full px-4">
//         <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
//         <nav className="list-none mb-10">
//           <li>
//             <a className="text-gray-600 hover:text-gray-800">First Link</a>
//           </li>
//           <li>
//             <a className="text-gray-600 hover:text-gray-800">Second Link</a>
//           </li>
//           <li>
//             <a className="text-gray-600 hover:text-gray-800">Third Link</a>
//           </li>
//           <li>
//             <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
//           </li>
//         </nav>
//       </div>
//     </div>
//   </div>
//   <div className="bg-gray-100">
//     <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
//       <p className="text-gray-500 text-sm text-center sm:text-left">© 2020 Tailblocks —
//         <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@knyttneve</a>
//       </p>
//       <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
//         <a className="text-gray-500">
//           <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
//             <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
//           </svg>
//         </a>
//         <a className="ml-3 text-gray-500">
//           <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
//             <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
//           </svg>
//         </a>
//         <a className="ml-3 text-gray-500">
//           <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
//             <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
//             <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
//           </svg>
//         </a>
//         <a className="ml-3 text-gray-500">
//           <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
//             <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
//             <circle cx="4" cy="4" r="2" stroke="none"></circle>
//           </svg>
//         </a>
//       </span>
//     </div>
//   </div>
// </footer>
// </>
//   )
// }
// export  default App

import React from 'react'

 const App = () => {
  return (
    <div>App</div>
  )
}

export default App
