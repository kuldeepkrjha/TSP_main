import React, { useState } from 'react';

// Import the logo image
import CoDALabLogo from '../codalab.png'; // Adjust the path as per your project structure

const Developers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const developers = [
    {
      name: 'Kuldeep Kumar Jha',
      description: 'A cybersecurity student and researcher with expertise in security tool development, blockchain security, and digital forensics. Passionate about advancing cybersecurity knowledge and collaborating with like-minded professionals, I am dedicated to making the digital world safer.',
      email: 'kuldeepkrjha01@gmail.com',
      imgSrc: 'assets/image/kuldeep.jpg'
    },
    {
      name: 'Suraj Kumar',
      description: 'I am a coding enthusiast and enjoy building logic and writing code, Also having hands a knowledge of development. I am currently doing my engineering in information technology at cochin university of science and technology.',
      email: 'surajkumar744246@gmail.com',
      imgSrc: 'assets/image/suraj.jpg'
    },
    {
      name: 'Sahil Rana',
      description: 'Hi myself Sahil Rana I am from Roorkee, Uttarakhand currently pursuing BTech from CGC Landran in CSE field. As per my technical skills i have knowledge of Python , SQL, PowerBI, Excel, Basics of HTML, CSS, JS and ReactJs. I am also a National level volleyball Player and Non technical lead of Kerberos club in college.',
      email: 'sahilcodes07@gmail.com',
      imgSrc: 'assets/image/sahil.jpg'
    },
  ];

  return (
    <div className="fixed bottom-24 right-4 z-50">
      <button className="bg-slate-900 hover:bg-blue-500 text-white px-4 py-2 rounded-3xl" onClick={handleModalToggle}>Developers</button>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-gradient-to-t from-slate-200 to-slate-500 border-y-4 bg-opacity-30 p-3 rounded-3xl shadow-lg w-[42rem] max-w-6xl">
            <div className="flex justify-between items-center mb-4">
            <div className="relative">
  <img 
    src={CoDALabLogo} 
    alt="CoDA Lab @ IITR" 
    className="h-16 rounded-xl shadow-lg" 
    style={{ 
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
      borderRadius: '10px' 
    }}
  />
  <div 
    className="absolute left-0 right-0 bottom-[-20px] flex justify-center opacity-50" 
    style={{
      transform: 'scaleY(-1)',
      filter: 'blur(3px)',
      background: 'linear-gradient(transparent, rgba(255, 255, 255, 0.5))',
    }}
  >
    <img 
      src={CoDALabLogo} 
      alt="reflection" 
      className="h-8 rounded-xl" 
      style={{ 
        borderRadius: '10px',
        opacity: '0.5',
        transform: 'scaleY(-1)' // Flip the reflection vertically
      }} 
    />
  </div>
</div>

              <button onClick={handleModalToggle} className="text-black">✖</button>
            </div>
            <div className="flex space-x-4">
              {developers.map((dev, index) => (
                <div key={index} className="text-center">
                  <img src={dev.imgSrc} alt={dev.name} className="w-24 h-24 rounded-full mx-auto" />
                  <h3 className="mt-2 text-lg font-bold">{dev.name}</h3>
                  <p className="mt-1">{dev.description}</p>
                  <a href={`mailto:${dev.email}`} className="mt-2 inline-block bg-slate-500 text-white hover:bg-cyan-600 px-4 py-2 rounded">Let's Connect</a>
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
