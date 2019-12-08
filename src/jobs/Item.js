import React from 'react';
import PropTypes from 'prop-types';

const JobItem = ({ isStripped, title, author, url }) => (
  <tr className={isStripped === false ? 'bg-gray-100' : ''}>
    <td className="border px-4 py-2">{title}</td>
    <td className="border px-4 py-2">{author}</td>
    <td className="border px-4 py-2">
      <a
        href={url}
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded"
        target="_blank"
        rel="noopener noreferrer"
        role="button"
      >
        View Job
      </a>
    </td>
  </tr>
);

JobItem.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  isStripped: PropTypes.bool.isRequired,
};

export default JobItem;
