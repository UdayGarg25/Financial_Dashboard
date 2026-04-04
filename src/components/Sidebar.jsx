import { Link, useLocation } from "react-router-dom";
import { FaChartBar, FaCreditCard, FaChartLine } from "react-icons/fa";

export default function Sidebar({ isOpen, onClose }) {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Dashboard", component: FaChartBar },
    { path: "/transactions", label: "Transactions", component: FaCreditCard },
    { path: "/insights", label: "Insights", component: FaChartLine },
  ];

  const handleNavClick = () => {
    if (isOpen) {
      onClose();
    }
  };

  return (
    <>
      <aside className="hidden lg:block w-64 bg-white dark:bg-gray-800 text-gray-900 dark:text-white h-screen sticky top-0 overflow-y-auto border-r border-gray-200 dark:border-gray-700">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
            Finance<span className="text-indigo-600">Board</span>
          </h2>
        </div>

        <nav className="p-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`sidebar-nav-item ${location.pathname === item.path ? "active" : ""}`}
            >
              <item.component className="text-lg flex-shrink-0" />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </aside>

      <aside
        className={`fixed left-0 top-0 h-screen w-64 bg-white dark:bg-gray-800 text-gray-900 dark:text-white overflow-y-auto transform transition-transform duration-300 ease-in-out lg:hidden z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
            Finance<span className="text-indigo-600">Board</span>
          </h2>
        </div>

        <nav className="p-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={handleNavClick}
              className={`sidebar-nav-item ${location.pathname === item.path ? "active" : ""}`}
            >
              <item.component className="text-lg flex-shrink-0" />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}
