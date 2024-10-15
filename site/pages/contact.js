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
      <h2 className="text-3xl font-bold text-center mb-6">
        How would you like to contact Bio-branch?
      </h2>
      <div className="flex flex-wrap justify-center gap-6"> {/* Center the boxes with gap */}
        {/* Request a Call Box */}
        <div className={`${styles.box} w-[100%] p-2 md:w-1/3 md:p-4`}>
          <h3 className="font-semibold text-2xl mb-4 text-center md:text-left text-[#13315c]">Request a Call</h3>
          <form onSubmit={handleRequestCall} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="border rounded p-2"
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="border rounded p-2"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border rounded p-2"
              required
            />
            <input
              type="tel"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="border rounded p-2"
              required
            />
            <input
              type="text"
              placeholder="Region"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              className="border rounded p-2"
              required
            />
            <textarea
              placeholder="Reason for Call"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="border rounded p-2"
              required
            />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded transition duration-800 ease-in-out hover:font-bold hover:text-[#e0ff4f]">
              Submit
            </button>
          </form>
        </div>

        {/* Support and Feedback Box */}
        <div className="w-full sm:w-2/3 lg:w-1/3 flex flex-col gap-4">
          <div className={`${styles.box} p-7 md:mb-5`}>
            <h3 className="font-bold text-xl mb-4 text-[#15616d]">Support</h3>
            <p>Phone: (123) 456-7890</p>
            <p>Email: support@bio-branch.com</p>
          </div>
          <div className={`${styles.box} p-7`}>
            <h3 className="font-bold text-xl mb-2  text-[#15616d]">Feedback</h3>
            <p className='mb-1 '>Your feedback is important to us! Please let us know your thoughts.</p>
            <form onSubmit={handleFeedbackSubmit} className="flex flex-col">
              <textarea
                placeholder="Your feedback here..."
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                className="border rounded p-2 w-full"
                required
              />
              <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-2 transition duration-800 ease-in-out hover:font-bold hover:text-[#e0ff4f]">
                Submit Feedback
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
