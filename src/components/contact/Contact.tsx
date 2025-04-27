import TableContact from "./TableContact";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Settings, ChevronDown, Search, User, Tag, Euro, ListTodo } from "lucide-react";

function Contact() {
  const tabs = [
    { label: "Contacts", icon: User },
    { label: "Étiquettes", icon: Tag },
    { label: "Opportunités", icon: Euro },
    { label: "Tâches", icon: ListTodo },
  ];
  const activeTab = "Contacts";

  return (
    <div className="flex flex-col h-full bg-[#09091a] text-white p-6 space-y-4">

      {/* Top Tabs */}
      <div className="flex items-center border-b border-[#2C313A] mb-7">
        {tabs.map((tab, index) => {
          const Icon = tab.icon;
          const isActive = tab.label === activeTab;

          return (
            <div
              key={index}
              className={`flex flex-col justify-end ${isActive ? "bg-[#2C1B18]" : ""
                }`}
            >
              <div
                className={`flex items-center gap-2 px-6 h-[50px] ${isActive ? "text-white" : "text-gray-400"
                  } cursor-pointer`}
              >
                <Icon size={18} className={isActive ? "text-orange-500" : "text-gray-400"} />
                <span className="text-sm">{tab.label}</span>
              </div>
              {isActive && <div className="h-1 w-full bg-orange-500" />}
            </div>
          );
        })}
      </div>

      {/* Top Controls */}
      <div className="flex items-center justify-between mb-12">
        {/* Left controls */}
        <div className="flex items-center gap-6">
          <Button className="flex items-center gap-2 bg-[#E4571E] hover:bg-orange-700 rounded-full text-white px-6 py-2 text-sm">
            <div className="border border-white rounded-md p-1 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="text-white"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
              </svg>
            </div>
            Ajout de contact
          </Button>
          <span className="text-sm">
            <span className="text-white font-bold">100</span> <span className="text-gray-400">Contacts</span>
          </span>
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-4">
          {/* Button Plus de filtre */}
          <Button
            variant="outline"
            className="flex items-center gap-2 border border-gray-600 bg-transparent text-white rounded-xl px-4 py-2 hover:bg-[#161B22]"
          >
            <Settings size={16} className="text-white" /> Plus de filtre
            <ChevronDown size={16} className="text-white" />
          </Button>

          {/* Button Tout le monde */}
          <Button
            variant="outline"
            className="flex items-center gap-2 border border-gray-600 bg-transparent text-white rounded-xl px-4 py-2 hover:bg-[#161B22]"
          >
            <User size={16} className="text-white" /> Tout le monde
            <ChevronDown size={16} className="text-white" />
          </Button>

          {/* Search Box */}
          <div className="relative">
            <Input
              type="text"
              placeholder="Titre, contact, responsable..."
              className="pl-10 pr-4 py-2 rounded-xl   border-gray-600  placeholder-gray-400 " />
            <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>

          {/* Settings Button */}
          <Button
            variant="outline"
            size="icon"
            className="border border-gray-600 rounded-xl p-2 hover:bg-[#161B22] bg-transparent text-white"
          >
            <Settings size={18} />
          </Button>
        </div>
      </div>

      {/* Table */}
      <div className="rounded-2xl overflow-hidden bg-[#17202E]">
        <TableContact />
      </div>

      {/* Bottom Pagination */}
      <div className="flex items-center text-sm text-gray-400 mt-2">
        {/* Elements per page */}
        <div className="flex items-center gap-4 ml-8">
          <span>Éléments par page</span>
          <Button
            variant="outline"
            className=" gap-1 text-white bg-transparent"
          >
            25
            <ChevronDown size={16} className="text-white"/>
          </Button>
          <span>1-25 sur 500 éléments</span>
        </div>


        {/* Pagination */}
        <div className="flex items-center ml-42">
          <Button variant="ghost" size="icon" className="hover:bg-[#1F242D]">
            {"|<"}
          </Button>
          <Button variant="ghost" size="icon" className="hover:bg-[#1F242D]">
            {"<"}
          </Button>
          <Button variant="outline" className="border-[#2C313A] bg-[#0D1117] text-gray-300 hover:bg-[#1F242D] rounded-full p-1">
            01
          </Button>
          <span className="ml-3">de 50</span>
          <Button variant="ghost" size="icon" className="hover:bg-[#1F242D]">
            {">"}
          </Button>
          <Button variant="ghost" size="icon" className="hover:bg-[#1F242D]">
            {">|"}
          </Button>
        </div>
      </div>

    </div>
  );
}

export default Contact