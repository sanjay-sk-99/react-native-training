import React,{Suspense,lazy, useState} from 'react'
import Loader from '../components/Loader'

const User = lazy(()=>import('../components/User'))

const Dashboard = () => {
  const [show,setShow]=useState(false)
  return (
     <div>
      <h1 className='font-semibold m-4'>Dashboard</h1>
      <button onClick={() => setShow(true)} className="bg-blue-600 text-white px-6 py-2 m-4 rounded-md hover:bg-blue-700 transition duration-200">
        Show User
      </button>

      <div >
        {show && (
          <Suspense fallback={<Loader/>}>
            <User />
          </Suspense>
        )}
      </div>
    </div>
  )
}

export default Dashboard
