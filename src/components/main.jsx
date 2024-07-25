import React from 'react'

function Main() {
  return (
    <div>
        <div className='flex-row sm:flex justify-between'>
            <div>
                <select className='w-30 h-30' name="" id="">
                    <option value="">Filter by Date</option>
                    <option value="">2023-2024</option>
                    <option value="">2024-2025</option>
                </select>

                <select className='w-30 h-30' name="" id="">
                    <option value="">Filter by Type</option>
                    <option value="">Yoga</option>
                    <option value="">Meditation</option>
                    <option value="">Detox</option>
                </select>
            </div>
            <div className=''>
                <input type="text" placeholder='Search retreats by title' />
            </div>
        </div>
        <div></div>
    </div>
  )
}

export default Main