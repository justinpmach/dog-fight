import AthleteCard from './AthleteCard';

function AthleteList(props) {
  return (
    <div className='w-full grid grid-cols-2 gap-4'>
      {props.fighters.map((fighter) => (
        <AthleteCard
          key={fighter.id}
          id={fighter.id}
          fn={fighter.fn}
          ln={fighter.ln}
          image={fighter.image}
          bio={fighter.bio}
        />
      ))}
    </div>
  );
}

export default AthleteList;
