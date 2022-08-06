import React from 'react'
import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <div className="bg-[#1a1d21] text-white h-[100vh] flex flex-col items-center pt-[10%] gap-4">
      <h1 className="text-[30px] font-semibold">Page Not Found</h1>
      <Link to="/">
        <button className="btn btn-outline btn-secondary">Back To Home Page</button>
      </Link>
    </div>
  )
}