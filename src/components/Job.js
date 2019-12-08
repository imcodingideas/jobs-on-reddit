import React from 'react';
import PropTypes from 'prop-types';

const Job = ({ title, author, url }) => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg mb-6">
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{title}</div>
      <p className="text-gray-700 text-base">By - {author}</p>
    </div>
    <div className="px-6 py-4">
      <a
        href={url}
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        target="_blank"
        rel="noopener noreferrer"
        role="button"
      >
        Job on Reddit
      </a>
    </div>
  </div>
);

Job.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Job;
