import { Link } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SecondaryNavbarProps {
  title?: string;
  showBackButton?: boolean;
}

const SecondaryNavbar = ({ 
  title = "FG Company", 
  showBackButton = true
}: SecondaryNavbarProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center gap-4">
          {showBackButton && (
            <Button
              className="text-gray-600 hover:text-gray-900 p-2 rounded-full"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="sr-only">Back</span>
            </Button>
          )}
          <Link to="/" className="text-xl font-bold text-blue-600 flex items-center gap-2">
            {title}
          </Link>
        </div>
        
        <div className="flex items-center gap-4">
          <Button
            className="text-gray-600 hover:text-gray-900 p-2 rounded-full"
            asChild
          >
            <Link to="/">
              <Home className="h-5 w-5" />
              <span className="sr-only">Home</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default SecondaryNavbar;
