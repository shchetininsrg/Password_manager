import React from 'react';
import search from '../assets/search.svg';

function Header({ searchTerm, setSearchTerm, handleModalOpen }) {
  return (
    <header className='flex justify-between'>
      <h1 className='text-3xl font-bold'>Password Manager</h1>
      <div className='flex gap-4'>
        <button
          onClick={handleModalOpen}
          className='px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600'
        >
          Добавить пароль
        </button>
        <div className='relative'>
          <img src={search} alt='search' className='absolute top-3 left-3' />
          <input
            type='text'
            placeholder='Поиск'
            className='border rounded-md py-2 pl-10 pr-4'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
