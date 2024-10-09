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
    toast.success('Feedback submitted!');
    setFeedback(''); // Clear feedback input
  };

  return (
    <div className="bg-white min-h-screen p-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
        How would you like to contact Bio-branch?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center"> {/* Responsive grid */}
        {/* Request a Call Box */}
        <div className={`${styles.box} p-4`}>
          <h3 className="font-semibold text-xl sm:text-2xl mb-4">Request a Call</h3>
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
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">
              Submit
            </button>
          </form>
        </div>

        {/* Support and Feedback Box */}
        <div className="flex flex-col gap-6">
          <div className={`${styles.box} p-6`}>
            <h3 className="font-semibold text-xl sm:text-2xl mb-4">Support</h3>
            <p className="text-sm sm:text-base">Phone: (123) 456-7890</p>
            <p className="text-sm sm:text-base">Email: support@bio-branch.com</p>
          </div>
          <div className={`${styles.box} p-6`}>
            <h3 className="font-semibold text-xl sm:text-2xl mb-2">Feedback</h3>
            <p className="text-sm sm:text-base">
              Your feedback is important to us! Please let us know your thoughts.
            </p>
            <form onSubmit={handleFeedbackSubmit} className="flex flex-col">
              <textarea
                placeholder="Your feedback here..."
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                className="border rounded p-2 w-full"
                required
              />
              <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-2">
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
