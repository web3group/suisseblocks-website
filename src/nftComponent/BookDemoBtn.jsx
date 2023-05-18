import React from 'react'
import { Link } from 'react-router-dom'

const BookDemoBtn = () => {
    return (
        <button className="uppercase text-[12px] text-white bg-black rounded-[30px] border-2 border-gray-500 px-4 py-4 fixed right-8 md:right-14 bottom-6">
            <Link to='/buy'>BUY NFT</Link>
        </button>
    )
}

export default BookDemoBtn
