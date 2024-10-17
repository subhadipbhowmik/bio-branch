import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ContributorCard = ({ login, avatar_url, html_url, contributions, type }) => (
  <motion.div
    whileHover={{ y: -5, boxShadow: '0 10px 30px -15px rgba(0, 0, 0, 0.1)' }}
    transition={{ type: 'spring', stiffness: 300 }}
    className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
  >
    <div className="p-6 text-center">
      <img src={avatar_url} alt={login} className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-gray-200" />
      <h3 className="font-bold text-xl text-gray-800">{login}</h3>
      <p className="text-sm text-gray-600 mb-2">{type}</p>
      <div className="mt-4 bg-gray-100 rounded-full py-2 px-4 inline-block">
        <span className="font-semibold text-gray-800">{contributions} contributions</span>
      </div>
    </div>
    <div className="bg-gray-50 py-3 px-6 flex justify-between items-center">
      <a 
        href={html_url} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-gray-600 hover:text-gray-800 transition-colors flex items-center"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
        </svg>
        View Profile
      </a>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
      </svg>
    </div>
  </motion.div>
);

const StatCard = ({ label, value, icon }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white rounded-xl shadow-md p-6 flex items-center border border-gray-200"
  >
    <div className="rounded-full bg-gray-100 p-3 mr-4">
      {icon}
    </div>
    <div>
      <h3 className="text-3xl font-bold text-gray-800">{value}</h3>
      <p className="text-gray-600">{label}</p>
    </div>
  </motion.div>
);

export default function Contributor() {
  const [contributors, setContributors] = useState([]);
  const [repoStats, setRepoStats] = useState({ stars: 0, forks: 0, openIssues: 0 });
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [notification, setNotification] = useState({ show: false, message: '' });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const contributorsResponse = await fetch('https://api.github.com/repos/subhadipbhowmik/bio-branch/contributors');
        const contributorsData = await contributorsResponse.json();
        setContributors(contributorsData);

        const repoResponse = await fetch('https://api.github.com/repos/subhadipbhowmik/bio-branch');
        const repoData = await repoResponse.json();
        setRepoStats({
          stars: repoData.stargazers_count,
          forks: repoData.forks_count,
          openIssues: repoData.open_issues_count,
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setNotification({ show: true, message: `Thank you for subscribing with ${email}. We'll keep you updated!` });
    setEmail('');
    setTimeout(() => setNotification({ show: false, message: '' }), 5000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center text-center bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2850&q=80')"}}>
        <div className="absolute inset-0 bg-black opacity-75" />
        <div className="relative z-10 space-y-6 max-w-4xl mx-auto px-4">
          <motion.h1 
            className="text-5xl font-bold sm:text-6xl md:text-7xl text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Welcome to Biotree
          </motion.h1>
          <motion.p 
            className="text-xl sm:text-2xl text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Empowering writers, one commit at a time
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button
              className="mt-8 bg-white text-gray-900 hover:bg-gray-100 px-6 py-3 rounded-md text-lg font-semibold transition-colors duration-300"
              onClick={() => document.getElementById('contribute').scrollIntoView({ behavior: 'smooth' })}
            >
              Become a Contributor
            </button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Project Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCard 
              label="Contributors" 
              value={contributors.length} 
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>}
            />
            <StatCard 
              label="Total Contributions" 
              value={contributors.reduce((sum, contributor) => sum + contributor.contributions, 0)} 
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
              </svg>}
            />
            <StatCard 
              label="GitHub Stars" 
              value={repoStats.stars} 
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>}
            />
            <StatCard 
              label="Forks" 
              value={repoStats.forks} 
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>}
            />
          </div>
        </div>
      </section>

      {/* Contributors Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Meet Our Contributors</h2>
          <AnimatePresence>
            {loading ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex justify-center items-center h-64"
              >
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
              >
                {contributors.map((contributor) => (
                  <ContributorCard key={contributor.id} {...contributor} />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Call to Action */}
      <section id="contribute" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto  text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Make an Impact?</h2>
          <p className="text-xl mb-8 text-gray-300">
            Join our community and help shape the future of Biotree.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 rounded-md text-gray-800 w-full sm:w-auto"
            />
            <button type="submit" className="bg-white text-gray-900 hover:bg-gray-100 px-6 py-2 rounded-md font-semibold transition-colors duration-300">
              Get Started
            </button>
          </form>
          {notification.show && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="mt-4 p-4 bg-gray-800 text-white rounded-md"
            >
              {notification.message}
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}