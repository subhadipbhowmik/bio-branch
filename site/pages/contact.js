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
      <div className="flex justify-center items-center flex-col md:flex-row gap-6"> {/* Center the boxes with gap */}
        {/* Request a Call Box */}
        <div className={`${styles.box} w-10/12 md:w-2/5 lg:w-96  p-4`}>
          <h3 className="text-center font-semibold text-xl mb-4">Request a Call</h3>
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
        <div className="w-10/12 md:w-2/5 lg:w-96 flex flex-col gap-4">
          <div className={`${styles.box} p-7 mb-5`}>
            <h3 className="font-semibold text-xl mb-4">Support</h3>
            <p>Phone: (123) 456-7890</p>
            <p>Email: support@bio-branch.com</p>
          </div>
          <div className={`${styles.box} p-7`}>
            <h3 className="font-semibold text-xl mb-2">Feedback</h3>
            <p>Your feedback is important to us! Please let us know your thoughts.</p>
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
