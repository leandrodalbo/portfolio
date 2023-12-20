import { NavigationService } from "./NavigationService";
import NavigationItems from "./NavigationItems";

interface NavigationProps {
  service: NavigationService;
}

const Navigation = ({ service }: NavigationProps) => {
  return (
    <nav className="navigation">
      <div data-testid="logo">
        <img className="logo" src={service.logo()} alt="logo" />
      </div>
      <NavigationItems items={service.navItems()} />
    </nav>
  );
};

export default Navigation;
