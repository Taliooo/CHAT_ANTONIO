import { useContext, createContext, useState } from "react"

const SidebarContext = createContext()

export default function Sidebar({ children }) {
  const [expanded, setExpanded] = useState(true)
  
  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
      <div className="p-5 pb-2 flex items-center border-b">
            <button
              onClick={() => setExpanded((curr) => !curr)}
              className="p-3 rounded-lg hover:bg-gray-100"
            >
              =
            </button>
            <h1 className="font-bold text-2xl text-green-800 ml-2">floakly</h1>
      </div>
        <p class="text-gray-500 p-5">Menu</p>
        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 ">{children}</ul>
        </SidebarContext.Provider>

      </nav>
    </aside>
  )
}

export function SidebarItem({ icon, text, active, alert }) {
  const { expanded } = useContext(SidebarContext)
  
  return (
    <li
      className={`
        relative flex items-center py-2 px-3 my-1
         rounded-md cursor-pointer
        transition-colors group
        ${
          active
            ? "bg-gradient-to-tr from-green-50 to-green-100 text-green-800"
            : "hover:bg-green-50 text-gray-600"
        }
    `}
    >
      {icon}
      <span
        className={`font-medium text-gray-700 overflow-hidden transition-all ${
          expanded ? "w-52 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>
      {alert && (
          <div
          className={`absolute text-white right-2 w-4 rounded-full bg-green-900 flex items-center justify-center ${
            expanded ? "" : "top-2"
          }`}
        >
          <span className="text-xs font-semibold"> {alert}</span>
        </div>
      )}

      {!expanded && (
        <div
          className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-green-100 
           text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
        >
          {text}
        </div>
      )}
    </li>
  )
}