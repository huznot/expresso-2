import React from 'react';

import FollowBar from "@/components/layout/FollowBar"
import Sidebar from "@/components/layout/Sidebar"
import { Metadata } from 'next';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="h-screen bg-black">
      <div className="container h-full max-w-6xl mx-auto xl:px-30">
        <div className="grid h-full grid-cols-4">
          <Sidebar />
          <div 
            className="
              col-span-3 
              lg:col-span-2 
              border-x-[1px] 
              border-neutral-800
          ">
            {children}
          </div>
          <FollowBar />
        </div>
     </div>
    </div>
  )
}

//favicon
export const metadata: Metadata = {
  icons: {
    icon: "/twitter-clone-master/public/favicon.ico"
  }
}

export default Layout;
