function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="max-w-3xl text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-400 mb-4">
          AuthXpert
        </h1>

        <p className="text-gray-300 mb-6">
          A modern and secure authentication platform built using the MERN stack with
          JWT-based authentication, email verification, and role-based access control.
        </p>

        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg transition">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Home;
