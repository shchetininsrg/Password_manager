import React, { useState } from 'react';
import Modal from './Modal';
import Header from './Header';
import ServiceTable from './ServiceTable';
import PasswordGenerator from './PasswordGenerator';

function App() {
  const [services, setServices] = useState(
    () => JSON.parse(localStorage.getItem('services')) || []
  );
  const [newService, setNewService] = useState({
    id: services.length,
    name: '',
    password: '',
  });
  const [modalOpen, setModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [length, setLength] = useState(8);
  const [useLetters, setUseLetters] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useSymbols, setUseSymbols] = useState(false);
  const [useCaseOption, setUseCaseOption] = useState('mixed');
  const [customCharset, setCustomCharset] = useState('');
  const [password, setPassword] = useState('');

  const generatePassword = () => {
    let charset = '';

    if (customCharset) {
      charset = customCharset;
    } else {
      if (useLetters) charset += 'abcdefghijklmnopqrstuvwxyz';
      if (useNumbers) charset += '0123456789';
      if (useSymbols) charset += '!@#$%^&*()-_=+[]{}|;:';

      if (useCaseOption === 'upper') {
        charset = charset.toUpperCase();
      } else if (useCaseOption === 'lower') {
        charset = charset.toLowerCase();
      } else if (useCaseOption === 'mixed') {
        charset += charset.toUpperCase();
      }
    }

    if (!charset) return;

    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      generatedPassword += charset[randomIndex];
    }
    setPassword(generatedPassword);
  };

  const simulateRequest = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Math.random() > 0.5);
      }, 1000);
    });
  };

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  const handleSave = async (e) => {
    const success = await simulateRequest();
    if (!success) {
      alert('Не повезло, попробуй еще раз');
      return;
    } else {
      e.preventDefault();
      const updatedServices = [...services, newService];
      setServices(updatedServices);
      localStorage.setItem('services', JSON.stringify(updatedServices));
      setModalOpen(false);
      setNewService({ id: services.length + 1, name: '', password: '' });
    }
  };

  const handleDelete = async (id) => {
    const success = await simulateRequest();
    if (!success) {
      alert('Не повезло, попробуй еще раз');
      return;
    } else {
      const updatedServices = services.filter((service) => service.id !== id);
      setServices(updatedServices);
      localStorage.setItem('services', JSON.stringify(updatedServices));
    }
  };

  const handleCopy = (password) => navigator.clipboard.writeText(password);

  const filteredServices = services.filter((service) =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='w-4/5 m-auto bg-white rounded-xl shadow-xl mt-14 p-10'>
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleModalOpen={handleModalOpen}
      />
      <ServiceTable
        services={filteredServices}
        handleDelete={handleDelete}
        handleCopy={handleCopy}
      />
      {modalOpen && (
        <Modal
          isOpen={modalOpen}
          onClose={handleModalClose}
          onSave={handleSave}
          newService={newService}
          setNewService={setNewService}
        />
      )}
      <PasswordGenerator
        length={length}
        setLength={setLength}
        setUseLetters={setUseLetters}
        setUseNumbers={setUseNumbers}
        setUseSymbols={setUseSymbols}
        setCustomCharset={setCustomCharset}
        setUseCaseOption={setUseCaseOption}
        useLetters={useLetters}
        useNumbers={useNumbers}
        useSymbols={useSymbols}
        useCaseOption={useCaseOption}
        customCharset={customCharset}
        password={password}
        onClickGenerate={generatePassword}
      />
    </div>
  );
}

export default App;
