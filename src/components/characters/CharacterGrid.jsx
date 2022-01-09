import spinner from '../../img/spinner.gif';
import CharacterItem from './CharacterItem';

const CharacterGrid = ({ items, isLoading }) => {
  // console.log(items);
  return (
    <div>
      {isLoading ? (
        <img src={spinner} alt="Loading" />
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
