import React from 'react';
import CharacterItems from './CharacterItems';
import Loader from '../UI-Design/Loader';

const CharacterLayout = ({ items, isLoading }) => {
    return isLoading ? (
            <Loader />
          ) : (
            <section className='cards'>
              {items.map((item) => (
                <CharacterItems key={item.char_id} item={item}></CharacterItems>
              ))}
            </section>
    );
}

export default CharacterLayout;
