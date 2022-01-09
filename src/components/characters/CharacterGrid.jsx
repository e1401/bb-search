import Spinner from '../Spinner';
import CharacterItem from './CharacterItem';

const CharacterGrid = ({ items, isLoading }) => {
  // console.log(items);
  const displayContent = isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {items.map((item) => (
        <CharacterItem item={item} key={item.char_id} />
      ))}
    </section>
  );

  return <div>{displayContent}</div>;
};

export default CharacterGrid;
