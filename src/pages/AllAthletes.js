import AthleteList from '../components/athletes/AthleteList';

const athletes = [
  {
    id: 'm1',
    fn: 'Nagase',
    ln: 'Takanori',
    image:
      'https://www.judoinside.com/photos/hans/2016/Grand_Slam_Baku/20160507_BakuGS_NAGASE,%20Takanori%20JPN).jpg',
    bio: '81kg - JPN',
  },
  {
    id: 'm2',
    fn: 'Casse',
    ln: 'Matthias',
    image:
      'https://res.cloudinary.com/duu3v9gfg/image/fetch/t_fit_1920/https://78884ca60822a34fb0e6-082b8fd5551e97bc65e327988b444396.ssl.cf3.rackcdn.com/up/2019/08/1EDF3304-1566998246-1566998246.jpg',
    bio: '81kg - BEL',
  },
];

function AllAthletesPage() {
  return (
    <section>
      <h1 className='font-bold text-center underline text-4xl'>Match Up</h1>
      <AthleteList fighters={athletes} />
    </section>
  );
}

export default AllAthletesPage;
