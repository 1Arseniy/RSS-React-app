import { Component } from 'react';
import type { typeCharacter } from '../../types/types';

class Card extends Component<{ character: typeCharacter }> {
  render() {
    const { image, gender, name, status } = this.props.character;
    return (
      <div className="flex flex-col bg-blue-800 w-80 h-80 m-2.5 rounded-md">
        <img
          className="object-cover h-52 rounded-t-md"
          src={image}
          alt="rick&morty"
        ></img>
        <div className="flex flex-col h-full justify-center p-2.5 text-white">
          <span>Full name: {name}</span>
          <span>Gender: {gender}</span>
          <span>Status: {status}</span>
        </div>
      </div>
    );
  }
}

export default Card;
