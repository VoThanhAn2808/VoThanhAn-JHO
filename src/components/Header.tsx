import { Bell, Settings, HelpCircle } from "lucide-react";

function Header() {
  return (
    <header className="bg-[#111827] h-[56px] flex items-center justify-between px-4">
      {/* Logo */}
      <div className="flex items-center">
        <img src="../../public/logoHeader.svg" alt="Metafora Logo" className="h-5" />
      </div>

      {/* Search + Plus Button group */}
      <div className="flex items-center space-x-3 flex-1 justify-center max-w-2xl">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Rechercher dans Metaforma"
            className="w-full h-9 bg-[#1F2937] text-white placeholder-gray-400 rounded-full pl-10 pr-4 text-sm focus:outline-none"
          />
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 1116.65 2a7.5 7.5 0 010 15z"
              />
            </svg>
          </div>
        </div>

        {/* Plus button kế bên input */}
        <button className="bg-orange-600 w-8 h-8 rounded-full flex items-center justify-center">
          <span className="text-white text-lg">+</span>
        </button>
      </div>

      {/* Bell, Settings and User Info */}
      <div className="flex items-center space-x-6">
      {/* Icons */}
      <div className="flex items-center space-x-4">
        <Bell className="text-white" size={18} />
        <HelpCircle className="text-white" size={18} />
        <Settings className="text-white" size={18} />
      </div>

      {/* User Info */}
      <div className="flex items-center space-x-4">
        <img
          src="../../public/avtHeader.png"
          alt="User Avatar"
          className="h-10 w-10 rounded-full object-cover"
        />
        <div className="text-white leading-tight">
          <div className="font-bold text-base">Sébastien Hanouna</div>
          <div className="text-gray-400 text-sm">CEO, Admin</div>
        </div>
      </div>
    </div>
    </header>
  );
}

export default Header;
