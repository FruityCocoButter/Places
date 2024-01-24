const SearchBar = () => {
    return (
        <div className="flex-1 relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                    className="w-5 h-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
            </span>
            <input
                className="block w-full py-2 pl-10 pr-4 leading-5 text-gray-900 placeholder-gray-500 border border-transparent rounded-lg bg-gray-100 focus:outline-none focus:bg-white focus:ring-0 focus:border-blue-500 sm:text-sm"
                type="text"
                placeholder="Search..."
            />
        </div>
    );
}

export default SearchBar
