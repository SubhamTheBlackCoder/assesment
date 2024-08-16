import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import Papa from 'papaparse';
import { SiMicrosoftexcel } from 'react-icons/si'; 

function CSVUploader() {
  const [data, setData] = useState([]);
  const [selectedTags, setSelectedTags] = useState({});
  const [file, setFile] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  const onDrop = useCallback((acceptedFiles) => {
    const uploadedFile = acceptedFiles[0];
    setFile(uploadedFile);

    Papa.parse(uploadedFile, {
      complete: (result) => {
        setData(result.data.slice(1)); 
      },
      header: false,
    });
  }, []);

  const removeFile = () => {
    setFile(null);
    setData([]);
    setShowDetails(false); 
  };

  const handleUpload = () => {
    if (file) {
      console.log('File uploaded:', file);
      alert('File uploaded successfully!');
      setShowDetails(true); 
    }
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleTagChange = (index, tag) => {
    setSelectedTags((prevTags) => {
      const updatedTags = { ...prevTags };
      if (!updatedTags[index]) {
        updatedTags[index] = [];
      }
      if (!updatedTags[index].includes(tag)) {
        updatedTags[index].push(tag);
      }
      return updatedTags;
    });
  };

  const handleRemoveTag = (index, tagToRemove) => {
    setSelectedTags((prevTags) => {
      const updatedTags = { ...prevTags };
      updatedTags[index] = updatedTags[index].filter(tag => tag !== tagToRemove);
      return updatedTags;
    });
  };

  return (
    <div className="bg-[#0c0a0a] text-white p-6 font-sans">
      {file ? (
        <div className="border-2 border-gray-600 rounded-lg p-6 text-center bg-gray-800">
          <div className="w-10 h-10 text-green-500 mx-auto mb-4">
            <SiMicrosoftexcel size={40} /> 
          </div>
          <p>{file.name}</p>
          <button
            onClick={removeFile}
            className="mt-4 text-red-500 underline"
          >
            Remove
          </button>
        </div>
      ) : (
        <div {...getRootProps()} className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center bg-gray-800 cursor-pointer">
          <input {...getInputProps()} />
          <div className="w-10 h-10 text-green-500 mx-auto mb-4">
            <SiMicrosoftexcel size={40} /> 
          </div>
          <p>Drop your Excel sheet here or browse</p>
        </div>
      )}

      <button
        onClick={handleUpload}
        className="w-full py-2 mt-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-300"
        disabled={!file} 
      >
        Upload
      </button>

      {showDetails && data.length > 0 && ( 
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Uploads</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-gray-800">
              <thead>
                <tr className="bg-gray-700">
                  <th className="px-4 py-2 text-left">Sl No.</th>
                  <th className="px-4 py-2 text-left">Links</th>
                  <th className="px-4 py-2 text-left">Prefix</th>
                  <th className="px-4 py-2 text-left">Add Tags</th>
                  <th className="px-4 py-2 text-left">Selected Tags</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => (
                  <tr key={index} className="border-b border-gray-700">
                    <td className="px-4 py-2">{index + 1}</td>
                    <td className="px-4 py-2">
                      <a href={`https://${row[1]}`} target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:underline">
                        {row[1]}
                      </a>
                    </td>
                    <td className="px-4 py-2">{row[2]}</td>
                    <td className="px-4 py-2">
                      <select 
                        className="bg-gray-700 text-white px-2 py-1 rounded"
                        onChange={(e) => handleTagChange(index, e.target.value)}
                      >
                        <option value="">Select Tags</option>
                        <option value="Tag1">Tag1</option>
                        <option value="Tag2">Tag2</option>
                        <option value="Tag3">Tag3</option>
                      </select>
                    </td>
                    <td className="px-4 py-2">
                      {selectedTags[index] && selectedTags[index].map((tag, i) => (
                        <span key={i} className="inline-block bg-indigo-600 text-white px-2 py-1 rounded-full text-sm mr-2 mb-2">
                          {tag}
                          <button 
                            className="ml-1 font-bold"
                            onClick={() => handleRemoveTag(index, tag)}
                          >×</button>
                        </span>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default CSVUploader;
