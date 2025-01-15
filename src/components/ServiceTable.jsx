import React from 'react';

function ServiceTable({ services, handleDelete, handleCopy }) {
  return (
    <div className='p-4'>
      <table className='w-full'>
        <thead className='text-left'>
          <tr className='border-b-2 border-gray-300'>
            <th className='p-2'>Сайт</th>
            <th className='p-2'>Пароль</th>
          </tr>
        </thead>
        <tbody>
          {services.map((item, index) => (
            <tr className='border-b-2 border-gray-300' key={index}>
              <td className='p-2'>{item.name}</td>
              <td className='p-2'>{item.password}</td>
              <td className='p-2 text-center'>
                <button
                  onClick={() => handleDelete(item.id)}
                  className='bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600'
                >
                  Удалить
                </button>
              </td>
              <td className='p-2 text-right'>
                <button
                  onClick={() => handleCopy(item.password)}
                  className='bg-gray-500 text-white px-2 py-1 rounded hover:bg-gray-600'
                >
                  Копировать
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ServiceTable;
