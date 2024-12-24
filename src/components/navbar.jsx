const Navbar = () => {
  return (
    <nav className='border-b'>
      <div className="max-w-5xl mx-auto flex justify-between items-center py-4">
        <h1 className="text-base font-semibold">Mobile Usage</h1>
        <div className="flex space-x-6">
          <a href="#" className="text-sm font-semibold">Age</a>
          <a href="#" className="text-sm font-semibold">Gender</a>
          <a href="#" className="text-sm font-semibold">Contact</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar