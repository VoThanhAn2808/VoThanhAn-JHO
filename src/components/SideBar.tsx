import { useState, useEffect, useRef } from 'react';
import {
  FileText,
  Users,
  LayoutGrid,
  UserRound,
  GraduationCap,
  FileEdit,
  Star,
  Upload,
  Table,
  Shield,
  LogOut,
} from 'lucide-react';

const icons = [
  { icon: FileText },
  { icon: Users },
  { icon: LayoutGrid },
  { icon: UserRound },
  { icon: GraduationCap },
  { icon: FileEdit },
  { icon: Star },
  { icon: Upload },
  { icon: Table },
  { icon: Shield },
];

function SideBar() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const sidebarRef = useRef<HTMLDivElement>(null); // để theo dõi sidebar

  const handleIconClick = (index: number) => {
    setActiveIndex(index);
  };

  const handleLogout = () => {
    console.log('Logging out...');
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setActiveIndex(null); // click ngoài => bỏ active
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={sidebarRef}
      className="flex flex-col items-center bg-[#111827] py-4 w-16 min-h-screen"
    >
      <div className="flex flex-col items-center space-y-1 w-full">
        {icons.map((item, index) => {
          const Icon = item.icon;
          const isActive = index === activeIndex;

          return (
            <div
              key={index}
              onClick={() => handleIconClick(index)}
              className={`flex items-center justify-center w-full p-3 cursor-pointer transition-all duration-300
                ${isActive ? 'bg-[#3B2F2F] border-r-4 border-orange-500' : 'hover:bg-gray-700'}
              `}
            >
              <Icon size={24} color={isActive ? '#F97316' : '#9CA3AF'} />
            </div>
          );
        })}
      </div>

      {/* Logout dưới cùng */}
      <div className="flex flex-col items-center space-y-6 mt-auto pb-4">
        <div
          onClick={handleLogout}
          className="p-2 hover:bg-gray-700 rounded-md cursor-pointer"
        >
          <LogOut size={24} color="#9CA3AF" />
        </div>
      </div>
    </div>
  );
}

export default SideBar;
