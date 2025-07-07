import { Component } from 'react';
import Button from '../Button/Button';
import InputSearch from '../InputSearch/InputSearch';
// import { useState } from 'react';

// function Bomb({ text }: { text: string }) {
//   if (text === 'bomb') {
//     throw new Error('Error');
//   }
//   return <span>sxsa</span>;
// }

// function Jj() {
//   const [text, setText] = useState('');
//   return (
//     <>
//       <input value={text} onChange={(e) => setText(e.target.value)} />
//       {/* <ErrorBoundary> */}
//       <Bomb text={text} />
//       {/* </ErrorBoundary> */}
//     </>
//   );
// }

class Header extends Component {
  //   constructor() {
  //     this.state = {}
  //   }
  render() {
    return (
      <header className="h-24 flex justify-center items-center">
        <InputSearch />
        {/* <Jj /> */}
        <Button>Search</Button>
      </header>
    );
  }
}

export default Header;
