import React, { useState } from 'react';

const Developers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const developers = [
    {
      name: 'Developer 1',
      description: 'Description for developer 1.',
      email: 'dbgpriyakumari@gmail.com',
      imgSrc: 'assets/image/pic1.jpg'
    },
    {
      name: 'Developer 2',
      description: 'Description for developer 2.',
      email: 'dbgpriyakumari@gmail.com',
      imgSrc: 'assets/image/pic1.jpg'
    },
    {
      name: 'Developer 3',
      description: 'Description for developer 3.',
      email: 'dbgpriyakumari@gmail.com',
      imgSrc: 'assets/image/pic1.jpg'
    },
  ];

  return (
    <div className="fixed bottom-24 right-4 z-50">
      <button className="bg-slate-900 hover:bg-blue-500 text-white px-4 py-2 rounded-3xl" onClick={handleModalToggle}>Developers</button>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className=" bg-gradient-to-t from-slate-200 to-slate-500 border-y-4 bg-opacity-30 p-3 rounded-3xl shadow-lg w-[42rem] max-w-6xl">
            <div className="flex justify-end">
              <button onClick={handleModalToggle} className="text-black">✖</button>
            </div>
            <div className="flex space-x-4">
              {developers.map((dev, index) => (
                <div key={index} className="text-center">
                  <img src={dev.imgSrc} alt={dev.name} className="w-24 h-24 rounded-full mx-auto" />
                  <h3 className="mt-2 text-lg font-bold">{dev.name}</h3>
                  <p className="mt-1">{dev.description}</p>
                  <a href={`mailto:${dev.email}`} className="mt-2 inline-block bg-slate-500 text-white hover:bg-cyan-600 px-4 py-2 rounded">Contact</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Developers;
