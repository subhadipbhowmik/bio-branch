import Head from 'next/head';

const About = () => (
  <>
    <Head>
      <title>About Us - BioBranch</title>
    </Head>
    <section className="container mx-auto py-20 px-8 md:px-16 lg:px-32 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-100 min-h-screen">
      <div className="bg-gradient-to-r from-blue-500 via-purple-600 to-teal-500 rounded-3xl shadow-2xl p-10 md:p-16 lg:p-20 space-y-12 transform hover:scale-105 transition-transform duration-500 ease-in-out">
        <h1 className="text-5xl font-extrabold text-center text-white mb-12 animate-fadeIn tracking-wide leading-tight drop-shadow-lg">
          Welcome to BioBranch – Your All-in-One Digital Hub
        </h1>
        
        <p className="text-lg text-justify max-w-3xl mx-auto mb-10 text-gray-200 leading-relaxed tracking-wide shadow-md p-5 rounded-md bg-gray-900/60">
          BioBranch is a customizable platform that lets you manage and showcase all your essential links, social profiles, and digital assets in one place. Built for creators, influencers, and professionals, BioBranch centralizes your digital presence with style, making it easy to connect and share.
        </p>

        <div className="max-w-4xl mx-auto space-y-12">
          <div className="bg-gray-800/70 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
            <h2 className="text-3xl font-semibold text-teal-300 mb-4">Our Vision</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              At BioBranch, we believe managing your online presence should be seamless, impactful, and uniquely yours. Our vision is to empower everyone—creators, entrepreneurs, influencers, and everyday users alike—to build a cohesive digital identity. BioBranch brings your social connections together in a format that’s both practical and visually appealing.
            </p>
          </div>

          <div className="bg-gray-800/70 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
            <h2 className="text-3xl font-semibold text-teal-300 mb-4">Why BioBranch?</h2>
            <ul className="text-lg text-gray-300 leading-relaxed list-disc list-inside space-y-3 ml-4">
              <li><strong className="text-white">All-In-One Platform:</strong> Easily organize links, portfolios, and social profiles in one place.</li>
              <li><strong className="text-white">Personalized Design:</strong> Customize layouts and themes to reflect your unique style.</li>
              <li><strong className="text-white">User-Friendly:</strong> Set up and manage your page with ease using a streamlined dashboard.</li>
              <li><strong className="text-white">Optimized for Mobile:</strong> Your BioBranch page looks great on any device.</li>
              <li><strong className="text-white">Built-in Analytics:</strong> Track engagement to help grow your audience.</li>
            </ul>
          </div>

          <div className="bg-gray-800/70 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
            <h2 className="text-3xl font-semibold text-teal-300 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              We aim to simplify digital management, making it easy to create and share a unified online identity. BioBranch is here to support your growth authentically and effectively.
            </p>
          </div>

          <div className="bg-gray-800/70 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
            <h2 className="text-3xl font-semibold text-teal-300 mb-4">Join Us on This Journey</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              We’re excited to help you establish a unique digital presence that’s authentic and streamlined. BioBranch is here to help you connect, share, and grow.
            </p>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default About;
