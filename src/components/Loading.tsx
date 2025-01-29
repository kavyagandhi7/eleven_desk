import React from 'react';
import { Loader } from 'lucide-react';

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-[200px]">
      <Loader className="w-8 h-8 text-white animate-spin" />
    </div>
  );
};

export default Loading; 