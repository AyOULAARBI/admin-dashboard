import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar';
import React from 'react'


const MainLayout = ({
    children,
  }: {
    children: React.ReactNode;
  }) => {
  return (
    <div>
        <Navbar />
          <div className="flex  gap-4">
            <div className="max-h-screen w-1/5 hidden md:block  ">
              <Sidebar />
            </div>
            <div className="min-h-screen w-full p-5 md:max-w-[1140px]  ">
              {children}
            </div>
          </div>
    </div>
  )
}

export default MainLayout