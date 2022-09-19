import React from 'react'
import { Disclosure } from '@headlessui/react'
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
function PlayFilter() {
  return (
    <>
        <div className='bg-white rounded my-2'>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex py-4 w-full px-4 text-lg items-center text-left focus:outline-none focus-visible:ring  focus-visible:ring-opacity-75">
              {open ? <BiChevronUp /> : <BiChevronDown />}
                <span className={`px-4 text-lg ${open?'text-red-500':'text-black'}`}>Date</span>
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-2 pb-2 ">
                <div className='flex flex-wrap gap-3'>
                    <button className='border-2 text-red-500 py-2 px-3 hover:bg-slate-200'>Today</button>
                    <button className='border-2 text-red-500 py-2 px-3 hover:bg-slate-200'>Tomorrow</button>
                    <button className='border-2 text-red-500 py-2 px-3 hover:bg-slate-200'>This Weekend</button>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        </div>
        <div className='bg-white rounded my-2'>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex py-4 w-full px-4 text-lg items-center text-left focus:outline-none focus-visible:ring  focus-visible:ring-opacity-75">
              {open ? <BiChevronUp /> : <BiChevronDown />}
                <span className={`px-4 text-lg ${open?'text-red-500':'text-black'}`}>Languages</span>
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-2 pb-2 ">
                <div className='flex flex-wrap gap-3'>
                    <button className='border-2 text-red-500 py-2 px-3 hover:bg-slate-200'>Hindi</button>
                    <button className='border-2 text-red-500 py-2 px-3 hover:bg-slate-200'>English</button>
                    <button className='border-2 text-red-500 py-2 px-3 hover:bg-slate-200'>Tamil</button>
                    <button className='border-2 text-red-500 py-2 px-3 hover:bg-slate-200'>Gujrati</button>
                    <button className='border-2 text-red-500 py-2 px-3 hover:bg-slate-200'>Marathi</button>

                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        </div>
    </>
  )
}

export default PlayFilter