import React from 'react';
import { Link } from 'react-router-dom';
import frontImg from '../../images/frontend.png'
import phoneImg from '../../images/phone.png'
import dataImg from '../../images/yellow.png'
import devops from '../../images/devops.png'


export default function Courses() {
  return <div>
    <div className="w-full bg-blue-100">
      <section className="mx-auto px-4 sm:px-6 lg:px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 lg:px-0 gap-4">
          <div className="w-full transition ease-in-out delay-150 hover:cursor-pointer  hover:text-slate-100 hover:-translate-y-1 hover:scale-105 duration-300 hover:bg-gradient-to-r from-teal-400 to-teal-500  bg-slate-100 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
            <div class="mb-8">
              <img class="object-center object-cover rounded-full h-36 w-36" src={frontImg} alt="photo" />
            </div>
            <div class="text-center">
              <h1 class="text-4xl text-slate-800 font-bold mb-2">FRONTEND</h1>
              <p class="text-sm  text-sky-500 hover:text-extrabold hover:text-slate-800">Learn More</p>
            </div>
          </div>
          <div class="w-full transition ease-in-out delay-150 hover:cursor-pointer  hover:text-slate-100 hover:-translate-y-1 hover:scale-105 duration-300 hover:bg-sky-700 bg-slate-100 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
            <div class="mb-8">
              <img class="object-center object-cover rounded-full h-36 w-36" src={phoneImg} alt="photo" />
            </div>
            <div class="text-center">
              <h1 class="text-4xl text-slate-800 font-bold mb-2">MOBILE</h1>
              <p class="text-sm  text-sky-500 hover:text-extrabold hover:text-slate-800">Learn More</p>
            </div>
          </div>
          <div class="w-full transition ease-in-out delay-150 hover:cursor-pointer  hover:text-slate-100 hover:-translate-y-1 hover:scale-105 duration-300 hover:bg-yellow-400 bg-slate-100 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
            <div class="mb-8">
              <img class="object-center object-cover rounded-full h-36 w-36" src={dataImg} alt="photo" />
            </div>
            <div class="text-center">
              <h1 class="text-4xl text-slate-800 font-bold mb-2">DATABASE</h1>
              <p class="text-sm  text-sky-500 hover:text-extrabold hover:text-slate-800">Learn More</p>
            </div>
          </div>
          <div class="w-full transition ease-in-out delay-150 hover:cursor-pointer  hover:text-slate-100 hover:-translate-y-1 hover:scale-105 duration-300
           bg-slate-100 hover:bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
            <div class="mb-8">
              <img class="object-center object-cover rounded-full h-36 w-36" src={devops} alt="photo" />
            </div>
            <div class="text-center">
              <h1 class="text-4xl text-slate-800 font-bold mb-2">DEVOPS</h1>
              <p class="text-sm  text-sky-500 hover:text-extrabold hover:text-slate-800">Learn More</p>
            </div>
          </div>
          <div class="w-full transition ease-in-out delay-150 hover:cursor-pointer  hover:text-slate-100 hover:-translate-y-1 hover:scale-105 duration-300 hover:bg-teal-200 bg-slate-100 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
            <div class="mb-8">
              <img class="object-center object-cover rounded-full h-36 w-36" src={frontImg} alt="photo" />
            </div>
            <div class="text-center">
              <h1 class="text-4xl text-slate-800 font-bold mb-2">FRONTEND</h1>
              <p class="text-sm  text-sky-500 hover:text-extrabold hover:text-slate-800">Learn More</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div >;
}
