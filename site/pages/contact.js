import React, { useState } from 'react';
import styles from '../styles/contact.module.css'; // Create a new CSS module for styles
import { toast } from 'react-toastify';

const Contact = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [region, setRegion] = useState('');
  const [reason, setReason] = useState('');
  const [feedback, setFeedback] = useState(''); // State for feedback

  const handleRequestCall = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    toast.success('Request for a call submitted!');
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
    setRegion('');
    setReason('');
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    // Handle feedback submission logic here
    toast.success('Feedback submitted!');
    setFeedback(''); // Clear feedback input
  };

  return (
    <div className="bg-white min-h-screen p-6">
      <h2 className="text-2xl font-bold text-center mb-6">
        How would you like to contact Bio-branch?
      </h2>
      {/* Request a Call Box */}
      <div className= {`${styles.box} w-full lg:w-2/4 mx-auto p-6 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg shadow-md  transition-all transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out cursor-default`}>
        <h3 className="font-semibold text-xl mb-4 text-center">Request a Call</h3>
        <form onSubmit={handleRequestCall} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="border rounded p-3"
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="border rounded p-3 text-black"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded p-3 text-black"
            required
          />
          <input
            type="tel"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border rounded p-3 text-black"
            required
          />
          <input
            type="text"
            placeholder="Region"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            className="border rounded p-3 text-black"
            required
          />
          <textarea
            placeholder="Reason for Call"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            className="border rounded p-3 text-black"
            required
          />
          <button type="submit" className="bg-red-500 text-white p-3 rounded hover:bg-red-600">
            Submit
          </button>
        </form>
      </div>

      {/* Support and Feedback Box */}
      <div className="mt-12 space-y-8">
        <div className={`${styles.box} w-full lg:w-2/4 mx-auto p-6 bg-gradient-to-r from-pink-600 to-purple-600 text-white  transition-all transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out cursor-default rounded-lg shadow-md`}>
          <h3 className="font-semibold text-xl mb-4 text-center">Support</h3>
          <p className="text-center">Phone: (123) 456-7890</p>
          <p className="text-center">Email: support@bio-branch.com</p>
        </div>

        <div className={`${styles.box} w-full lg:w-2/4 mx-auto p-6 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-lg shadow-md  transition-all transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out cursor-default`}>
          <h3 className="font-semibold text-xl mb-4 text-center">Feedback</h3>
          <p className="text-center mb-4">Your feedback is important to us! Please let us know your thoughts.</p>
          <form onSubmit={handleFeedbackSubmit} className="flex flex-col gap-4">

            <textarea
              placeholder="Your feedback here..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="border rounded p-3 text-black"
              required
            />
            <button type="submit" className="bg-red-500 text-white p-3 rounded hover:bg-red-600">
              Submit Feedback
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
