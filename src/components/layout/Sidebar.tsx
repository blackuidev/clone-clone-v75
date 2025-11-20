import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ActivitySquare, UserSquare, Library, History } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

interface SidebarItemProps {
  icon: React.ElementType;
  label: string;
  to: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon: Icon, label, to }) => (
  <Link to={to} className="sidebar-item">
    <Icon className="h-5 w-5" />
    <span>{label}</span>
  </Link>
);

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar-wrapper">
      <ScrollArea className="h-[calc(100vh-64px)] px-4">
        <nav className="flex flex-col gap-1">
          <SidebarItem icon={Home} label="Home" to="/" />
          <SidebarItem icon={ActivitySquare} label="Shorts" to="/shorts" />
          <SidebarItem icon={UserSquare} label="Subscriptions" to="/subscriptions" />
        </nav>

        <div className="my-4 border-t border-border" />

        <nav className="flex flex-col gap-1">
          <SidebarItem icon={Library} label="Library" to="/library" />
          <SidebarItem icon={History} label="History" to="/history" />
          {/* Add more items like Your Videos, Watch Later, Liked Videos, etc. */}
        </nav>
      </ScrollArea>
    </aside>
  );
};

export default Sidebar;
