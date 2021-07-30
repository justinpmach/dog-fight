// import classes from './AthleteCard.module.css';
import Card from '../ui/Card';

function AthleteCard(props) {
  return (
    <div>
      <Card>
        <div className='mx-0 px-0 decoration-clone bg-gradient-to-r from-green-100 to-indigo-100 text-transparent my-10 rounded-md shadow-lg'>
          <div className='object-contain'>
            <img
              className='rounded-t-sm shadow-md'
              src={props.image}
              alt={props.fn}
            />
          </div>
          <div className=''>
            <h2>
              {props.ln}, {props.fn}
            </h2>
            <p>{props.bio}</p>
            <div className='w-full flex justify-center'>
              <button className='w-48 h-10 bg-opacity-70 text-white bg-green-800 border-2 border-white rounded-md shadow-md hover:bg-opacity-20 hover:bg-green-100'>
                + Add
              </button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default AthleteCard;
