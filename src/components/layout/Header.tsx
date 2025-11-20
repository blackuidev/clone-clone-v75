import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Search, Bell, UserCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Header: React.FC = () => {
  return (
    <header className="header-wrapper">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="h-5 w-5" />
        </Button>
        <Link to="/" className="header-logo">
          YouTube
        </Link>
      </div>

      <div className="header-search-group">
        <Input
          type="text"
          placeholder="Search"
          className="lightswind-input"
        />
        <Button variant="secondary" size="icon" className="lightswind-button">
          <Search className="h-5 w-5" />
        </Button>
      </div>

      <div className="header-icons">
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
        </Button>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};

export default Header;
