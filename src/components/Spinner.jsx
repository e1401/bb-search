import spinner from '../img/spinner.gif';

const Spinner = () => {
  return (
    <div>
      <img
        src={spinner}
        alt="Loading"
        style={{ width: '100px', margin: 'auto', display: 'block' }}
      />
    </div>
  );
};

export default Spinner;
