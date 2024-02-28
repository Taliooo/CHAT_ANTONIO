import { createContext, useState } from "react";
import { FiAlignLeft } from 'react-icons/fi';

export const SidebarContext = createContext();

export default function Sidebar({ children }) {
  const [expanded, setExpanded] = useState(true);

  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-gray-50 border-r shadow-sm">
        <div className="p-5 pb-2 flex items-center">
          <span className="text-xl" onClick={() => setExpanded((curr) => !curr)}><FiAlignLeft /></span>
          <h1 className="font-bold text-2xl text-green-700 ml-2">floakly</h1>
        </div>
        <div className="border-b shadow m-1" />
        <div className="my-1 text-sm">
            <p className="text-gray-500 p-2">Menu</p>
            <SidebarContext.Provider value={{ expanded }}>
              <ul className="flex-1 ">{children}</ul>
            </SidebarContext.Provider>
        </div>
      </nav>
    </aside>
  );
}
