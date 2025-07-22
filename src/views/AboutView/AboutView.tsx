function AboutView() {
  return (
    <div className="flex items-center justify-center h-[70vh]">
      <div className="flex flex-col w-80 text-white text-center text-2xl bg-blue-800 rounded-md p-6">
        <span className="mb-3">
          Hello my name is Arseniy. Successfully completed the main course.
          Learned a lot during the RS School course.
        </span>
        <a href="https://rs.school/courses/reactjs" className="text-blue-300">
          RSS React
        </a>
      </div>
    </div>
  );
}

export default AboutView;
