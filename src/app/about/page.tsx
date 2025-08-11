'use client';

import useTheme from '@/hooks/useTheme';
import '@/styles/index.css';

function AboutView() {
  const { darkTheme } = useTheme();
  return (
    <div className="flex items-center justify-center h-[70vh]">
      <div
        className={`${darkTheme ? 'bg-blue-800' : 'bg-blue-400'} flex flex-col w-80 text-center text-2xl rounded-md p-6`}
      >
        <span className="mb-3">
          Hello my name is Arseniy. Successfully completed the main course.
          Learned a lot during the RS School course.
        </span>
        <a href="https://rs.school/courses/reactjs" className="text-blue-500">
          RSS React
        </a>
      </div>
    </div>
  );
}

export default AboutView;
