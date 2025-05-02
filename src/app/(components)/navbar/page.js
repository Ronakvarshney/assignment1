export default function Navbar() {
    return (
      <div className="bg-white shadow px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold">Dashboard</h1>
        <div className="flex items-center gap-4">
          <p className="text-sm text-gray-600">Welcome, Ronak</p>
          <img src="/profile.jpg" alt="Profile" className="w-8 h-8 rounded-full" />
        </div>
      </div>
    );
  }
  