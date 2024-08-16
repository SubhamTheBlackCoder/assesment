import React from 'react';
import CSVUploader from '../components/CSV_uploader';

export default function Upload() {
  return (
    <div className='py-8 px-4 md:px-20 h-auto'>
      <div className='mb-6'>
        <p className='text-[#605BFF] text-xl md:text-2xl font-semibold text-center md:text-left'>
          Upload CSV
        </p>
      </div>
      <div className='w-full mt-6 md:mt-10 p-4 md:p-5'>
        <div className='w-full max-w-3xl md:max-w-5xl mx-auto'>
          <CSVUploader />
        </div>
      </div>
    </div>
  );
}
