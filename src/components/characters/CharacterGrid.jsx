import spinner from '../../img/spinner.gif';

const CharacterGrid = ({ items, isLoading }) => {
  console.log(items);
  return (
    <div>
      {isLoading ? (
        <img src={spinner} alt="Loading" />
      ) : (
        <section className="cards">
          {items.map((item) => (
            <h1>{item.name}</h1>
          ))}
        </section>
      )}
    </div>
  );
};

export default CharacterGrid;
