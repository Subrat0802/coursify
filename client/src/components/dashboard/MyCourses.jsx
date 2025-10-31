import { Outlet } from 'react-router-dom';

const MyCourses = () => {
  
  
  return (
    <div className='w-full min-h-[91vh] font-sans p-10'>
      <Outlet />
    </div>
  )
}

export default MyCourses