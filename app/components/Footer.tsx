'use client'



import { FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import { TiSocialInstagram } from 'react-icons/ti';

export const Footer =() => {
  return (
    <footer className="bg-primary">

      <div className="container mx-auto py-20 px-4 flex flex-wrap justify-center gap-10 items-center text-lg">

        <div className="flex flex-col gap-1">
          <a href="tel:+1234567890" className="text-white flex items-center mb-2 hover:text-secondary">
            <FaPhone className="mr-2" />
            <span>613-668-8648</span>
          </a>
          <a href="mailto:info@example.com" className="text-white flex items-center hover:text-secondary">
            <FaEnvelope className="mr-2" />
            <span>qcmdetail@gmail.com</span>
          </a>
        </div>

        <div className="flex flex-col items-center gap-1">
          <FaClock className="text-white mb-2" />
          <span className="text-white">Mon-Sun: 9am-2pm</span>
        </div>

        <div className="flex flex-col gap-1">
          <a href="https://www.instagram.com/qcmdetailing/" className="text-white flex items-center mb-2 hover:text-secondary">
            <TiSocialInstagram className="mr-2" />
            <span>qcmdetailing</span>
          </a>
          <span className="text-gray-500 text-sm">Follow us for updates</span>
        </div>

      </div>

      <div className="flex flex-col items-center bg-gray-800 py-2">
        <div className="text-center text-sm text-secondary mb-1">QCM @ all rights reserved</div>
      </div>

    </footer>
  );
}

export default Footer;
