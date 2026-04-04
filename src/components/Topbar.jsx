import { useState } from "react";
import { useLocation } from "react-router-dom";
import { generateFinanceReport } from "../utils/generateReport";
import { FaFile, FaBrain, FaSun, FaMoon, FaEllipsisV } from "react-icons/fa";

export default function Topbar({
  role,
  setRole,
  darkMode,
  setDarkMode,
  onMenuClick,
  onIntelligenceClick,
  transactions,
}) {
  const [showActionMenu, setShowActionMenu] = useState(false);
  const location = useLocation();

  let title = "Dashboard";
  if (location.pathname === "/transactions") {
    title = "Transactions";
  } else if (location.pathname === "/insights") {
    title = "Insights";
  }

  const handleGenerateReport = () => {
    const confirmDownload = window.confirm(
      "Do you want to download the finance report?",
    );

    if (confirmDownload) {
      generateFinanceReport(transactions)
      setShowActionMenu(false);
    }
  };

  const handleIntelligence = () => {
    onIntelligenceClick();
    setShowActionMenu(false);
  };

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
    setShowActionMenu(false);
  };

  const handleRoleChange = (newRole) => {
    setRole(newRole);
    setShowActionMenu(false);
  };

  return (
    <div
      className={`bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center sticky top-0 z-20 shadow-sm transition-colors`}
    >
      <div className="flex items-center gap-4">
        {/* Hamburger Menu - visible only on mobile */}
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          <svg
            className={`w-6 h-6 text-gray-900 dark:text-white`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Page Title */}
        <h1
          className={`text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white`}
        >
          {title}
        </h1>
      </div>

      <div className="flex items-center gap-2 sm:gap-4 relative">
        {/* Desktop Actions - visible on large screens */}
        <div className="hidden lg:flex items-center gap-2 sm:gap-4">
          {/* Generate Report Button */}
          <button
            onClick={handleGenerateReport}
            className="px-2 sm:px-3 py-2 rounded-lg font-medium text-xs sm:text-sm transition-all duration-200 bg-emerald-600 text-white hover:bg-emerald-700 hover:shadow-md hover:scale-105 active:scale-95 flex items-center gap-1"
            title="Download financial report as PDF"
          >
            <FaFile /> <span>Report</span>
          </button>

          {/* Intelligence Mode Button */}
          <button
            onClick={handleIntelligence}
            className="px-2 sm:px-3 py-2 rounded-lg font-medium text-xs sm:text-sm transition-all duration-200 bg-gradient-to-r from-indigo-600 to-blue-600 text-white hover:from-indigo-700 hover:to-blue-700 hover:shadow-md hover:scale-105 active:scale-95 flex items-center gap-1"
          >
            <FaBrain /> <span>Intelligence</span>
          </button>

          {/* Dark Mode Button */}
          <button
            onClick={handleDarkMode}
            className={`px-2 sm:px-3 py-2 rounded-lg font-medium text-xs sm:text-sm transition-all duration-200 hover:scale-105 active:scale-95 flex items-center gap-1 ${
              darkMode 
                ? 'bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-md' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
            <span>{darkMode ? "Light" : "Dark"}</span>
          </button>

          {/* Role Selector */}
          <div className="flex items-center gap-1 sm:gap-2">
            <label
              htmlFor="role"
              className={`text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300`}
            >
              Role:
            </label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className={`px-2 sm:px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg font-medium text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer transition-colors`}
            >
              <option value="viewer">Viewer</option>
              <option value="admin">Admin</option>
            </select>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setShowActionMenu(!showActionMenu)}
          className="lg:hidden p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-all duration-200 hover:scale-110 active:scale-95"
          aria-label="Toggle actions menu"
        >
          <FaEllipsisV className="text-xl" />
        </button>

        {/* Mobile Dropdown Menu */}
        {showActionMenu && (
          <div className="absolute right-0 top-16 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-2 z-50 border border-gray-200 dark:border-gray-700 animate-fadeIn dropdown-menu">
            {/* Report Button */}
            <button
              onClick={handleGenerateReport}
              className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-gray-900 dark:text-white hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all duration-200 hover:translate-x-1 flex items-center gap-2"
              title="Download financial report as PDF"
            >
              <FaFile /> Generate Report
            </button>

            {/* Intelligence Button */}
            <button
              onClick={handleIntelligence}
              className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-gray-900 dark:text-white hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all duration-200 hover:translate-x-1 flex items-center gap-2"
            >
              <FaBrain /> Intelligence Mode
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={handleDarkMode}
              className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-gray-900 dark:text-white hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors flex items-center gap-2"
            >
              {darkMode ? <FaSun /> : <FaMoon />} {darkMode ? "Light Mode" : "Dark Mode"}
            </button>

            {/* Divider */}
            <div className="border-t border-gray-200 dark:border-gray-700 my-1"></div>

            {/* Role Selector */}
            <div className="px-3 py-2">
              <label
                htmlFor="role-mobile"
                className="text-xs font-medium text-gray-700 dark:text-gray-300 block mb-1"
              >
                Role
              </label>
              <select
                id="role-mobile"
                value={role}
                onChange={(e) => handleRoleChange(e.target.value)}
                className="w-full px-2 py-1 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded font-medium text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
              >
                <option value="viewer">Viewer</option>
                <option value="admin">Admin</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
