import React from 'react'

export default function MiniProfile() {
  return (
    <div className='flex items-center justify-between mt-14 ml-10'>
        <img className='h-16 rounded-full border p-[2px]' src="https://yt3.googleusercontent.com/bkh2hC8aY-IQfQhykosVfnWZsUXK0dgxBaqJst7t5fbBO8qZWGy31h98l0qNuR4qWU59csDW8w=s176-c-k-c0x00ffffff-no-rj" alt="mini-profile-image" />
        <div className='flex-1 ml-4'>
            <h2 className='font-bold'>itsvlogtime</h2>
            <h3 className='text-sm text-gray-400'>Welcome to Instagram</h3>
        </div>
        <button className='font-semibold text-blue-400 text-sm'>Sign out</button>
    </div>
  )
}
