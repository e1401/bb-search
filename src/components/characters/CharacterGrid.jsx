import Spinner from '../Spinner';
import CharacterItem from './CharacterItem';

const CharacterGrid = ({ items, isLoading }) => {
  // console.log(items);
  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <section className="cards">
          {items.map((item) => (
            <CharacterItem item={item} key={item.char_id} />
          ))}
        </section>
      )}
    </div>
  );
};

export default CharacterGrid;
