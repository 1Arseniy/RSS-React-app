import { LuLoaderCircle } from 'react-icons/lu';

function Loader() {
  return (
    <div className="h-screen flex justify-center items-center">
      <LuLoaderCircle className="size-24 animate-spin" />
    </div>
  );
}

export default Loader;
