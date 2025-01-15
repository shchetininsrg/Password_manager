import React from 'react';

const PasswordGenerator = ({
  length,
  password,
  useLetters,
  useNumbers,
  useSymbols,
  useCaseOption,
  customCharset,
  setLength,
  setUseLetters,
  setUseNumbers,
  setUseSymbols,
  setCustomCharset,
  onClickGenerate,
  setUseCaseOption,
}) => {
  return (
    <div className='p-5 bg-gray-100 flex flex-col items-center'>
      <h1 className='text-2xl font-bold mb-4'>Генератор паролей</h1>

      <div className='mb-4'>
        <label className='block text-sm font-medium mb-1'>
          Длина пароля:
          <input
            type='number'
            min='1'
            max='32'
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className='block w-full mt-1 p-2 border border-gray-300 rounded shadow-sm focus:ring focus:ring-indigo-200'
          />
        </label>
      </div>

      <div className='mb-4'>
        <label className='inline-flex items-center'>
          <input
            type='checkbox'
            checked={useLetters}
            onChange={(e) => setUseLetters(e.target.checked)}
            disabled={customCharset}
            className='mr-2'
          />
          Использовать буквы
        </label>
      </div>

      <div className='mb-4'>
        <label className='inline-flex items-center'>
          <input
            type='checkbox'
            checked={useNumbers}
            onChange={(e) => setUseNumbers(e.target.checked)}
            disabled={customCharset}
            className='mr-2'
          />
          Использовать цифры
        </label>
      </div>

      <div className='mb-4'>
        <label className='inline-flex items-center'>
          <input
            type='checkbox'
            checked={useSymbols}
            onChange={(e) => setUseSymbols(e.target.checked)}
            disabled={customCharset}
            className='mr-2'
          />
          Использовать символы
        </label>
      </div>

      <div className='mb-4'>
        <label className='block text-sm font-medium mb-1'>
          Регистр:
          <select
            value={useCaseOption}
            onChange={(e) => setUseCaseOption(e.target.value)}
            disabled={customCharset}
            className='block w-full mt-1 p-2 border border-gray-300 rounded shadow-sm focus:ring focus:ring-indigo-200'
          >
            <option value='mixed'>Смешанный</option>
            <option value='upper'>Только заглавные</option>
            <option value='lower'>Только строчные</option>
          </select>
        </label>
      </div>

      <div className='mb-4'>
        <label className='block text-sm font-medium mb-1'>
          Пользовательский набор символов:
          <input
            type='text'
            value={customCharset}
            onChange={(e) => setCustomCharset(e.target.value)}
            className='block w-full mt-1 p-2 border border-gray-300 rounded shadow-sm focus:ring focus:ring-indigo-200'
          />
        </label>
      </div>

      <button
        onClick={onClickGenerate}
        className='bg-indigo-500 text-white px-4 py-2 rounded shadow hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300'
      >
        Сгенерировать пароль
      </button>

      <div className='mt-6 w-full max-w-md text-center'>
        <h3 className='text-lg font-semibold'>Сгенерированный пароль:</h3>
        <input
          type='text'
          className='mt-2 text-lg font-mono bg-white p-4 border border-gray-300 rounded shadow'
          readOnly={true}
          value={password}
        />
      </div>
    </div>
  );
};

export default PasswordGenerator;
