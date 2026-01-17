function About() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex justify-center">
      <div className="max-w-4xl w-full p-6 md:p-10">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-400 mb-4">
          About This Project
        </h1>

        <p className="text-gray-300 mb-6">
          This project is a <span className="font-semibold">Secure Authentication System</span> 
          built using the MERN stack (MongoDB, Express, React, Node.js). It follows industry-standard 
          security practices and implements modern authentication mechanisms used in real-world applications.
        </p>

        <h2 className="text-2xl font-semibold text-blue-300 mb-2">
          Key Features
        </h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
          <li>User Registration with secure password hashing</li>
          <li>Login and Logout using JWT Authentication</li>
          <li>Forgot Password with email-based reset link</li>
          <li>Protected routes for authorized users</li>
          <li>Secure session management using refresh tokens</li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-300 mb-2">
          Technology Used
        </h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
          <li>Frontend: React.js with Tailwind CSS</li>
          <li>Backend: Node.js & Express.js</li>
          <li>Database: MongoDB</li>
          <li>Authentication: JWT & bcrypt</li>
          <li>Email Service: Nodemailer</li>
        </ul>

        <p className="text-gray-300">
          This project demonstrates my understanding of full-stack development, authentication flows, 
          REST APIs, and secure coding practices in modern web applications.
        </p>
      </div>
    </div>
  );
}

export default About;
