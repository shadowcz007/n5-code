'use client';
import { useState } from 'react';

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    // 实现搜索逻辑
  };

  return (
    <div className="mb-8">
      <input
        type="text"
        placeholder="搜索文章..."
        value={searchTerm}
        onChange={handleSearch}
        className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-purple-500"
      />
    </div>
  );
} 