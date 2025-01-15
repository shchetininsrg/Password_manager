import React from 'react';

const Modal = ({ isOpen, onClose, onSave, newService, setNewService }) => {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
      <div className='bg-white p-6 rounded shadow-lg w-1/3'>
        <h2 className='text-xl font-bold mb-4'>Добавить пароль</h2>
        <div className='mb-4'>
          <input
            type='text'
            required
            placeholder='Название Сервиса'
            className='border p-2 w-full'
            value={newService.name}
            onChange={(e) =>
              setNewService({ ...newService, name: e.target.value })
            }
          />
        </div>

        <div className='mb-4'>
          <input
            type='text'
            required
            placeholder='Пароль'
            className='border p-2 w-full'
            value={newService.password}
            onChange={(e) =>
              setNewService({ ...newService, password: e.target.value })
            }
          />
        </div>

        <div className='flex gap-2'>
          <button
            onClick={onSave}
            className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600'
          >
            Сохранить
          </button>
          <button
            onClick={onClose}
            className='bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600'
          >
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
