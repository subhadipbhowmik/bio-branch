import Head from 'next/head';

const About = () => (
  <>
    <Head>
      <title>About Us - BioBranch</title>
    </Head>
    <section className="container mx-auto py-24 px-8 md:px-16 lg:px-32 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-100 min-h-screen flex flex-col items-center">
      <div className="relative max-w-6xl w-full bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-10 md:p-16 lg:p-20 space-y-12 transform transition-transform hover:scale-[1.02] duration-500 ease-in-out border border-gray-100/10">
        <h1 className="text-5xl font-extrabold text-center text-white mb-8 animate-fadeIn tracking-wide leading-snug shadow-lg">
          Welcome to <span className="text-teal-400">BioBranch</span>
        </h1>
        
        <p className="text-lg max-w-2xl mx-auto text-center text-gray-200 leading-relaxed tracking-wide shadow-md p-5 rounded-md bg-gray-900/70 border border-white/10">
          BioBranch is your customizable hub for managing and showcasing all your essential links, social profiles, and digital assets. Perfect for creators, influencers, and professionals, BioBranch centralizes your digital presence with style, making it easy to connect and share.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-lg shadow-xl bg-white/10 border border-gray-100/10 transform hover:scale-105 transition-transform duration-300 ease-out hover:bg-gradient-to-br from-teal-500 via-purple-500 to-indigo-500">
            <h2 className="text-2xl font-semibold text-teal-300 mb-4">Our Vision</h2>
            <p className="text-md text-gray-300 leading-relaxed">
              At BioBranch, we believe managing your online presence should be seamless, impactful, and uniquely yours. Our vision is to empower everyone to build a cohesive digital identity, bringing all your social connections together in a practical and visually appealing format.
            </p>
          </div>

          <div className="p-8 rounded-lg shadow-xl bg-white/10 border border-gray-100/10 transform hover:scale-105 transition-transform duration-300 ease-out hover:bg-gradient-to-br from-purple-500 via-pink-500 to-red-500">
            <h2 className="text-2xl font-semibold text-purple-300 mb-4">Why BioBranch?</h2>
            <ul className="text-md text-gray-300 leading-relaxed list-disc list-inside space-y-3">
              <li><span className="text-white font-semibold">All-In-One Platform:</span> Organize links, portfolios, and social profiles in one place.</li>
              <li><span className="text-white font-semibold">Personalized Design:</span> Customize layouts to reflect your style.</li>
              <li><span className="text-white font-semibold">User-Friendly:</span> Easily set up and manage your page.</li>
              <li><span className="text-white font-semibold">Optimized for Mobile:</span> Responsive on any device.</li>
              <li><span className="text-white font-semibold">Analytics:</span> Track engagement to grow your audience.</li>
            </ul>
          </div>

          <div className="p-8 rounded-lg shadow-xl bg-white/10 border border-gray-100/10 transform hover:scale-105 transition-transform duration-300 ease-out hover:bg-gradient-to-br from-indigo-500 via-green-500 to-teal-500">
            <h2 className="text-2xl font-semibold text-indigo-300 mb-4">Our Mission</h2>
            <p className="text-md text-gray-300 leading-relaxed">
              We aim to simplify digital management, making it easy to create and share a unified online identity. BioBranch supports your growth in an authentic and effective way.
            </p>
          </div>

          <div className="p-8 rounded-lg shadow-xl bg-white/10 border border-gray-100/10 transform hover:scale-105 transition-transform duration-300 ease-out hover:bg-gradient-to-br from-pink-500 via-orange-500 to-yellow-500">
            <h2 className="text-2xl font-semibold text-pink-300 mb-4">Join Us on This Journey</h2>
            <p className="text-md text-gray-300 leading-relaxed">
              We’re excited to help you establish a unique digital presence that’s authentic and streamlined. BioBranch is here to help you connect, share, and grow.
            </p>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default About;
