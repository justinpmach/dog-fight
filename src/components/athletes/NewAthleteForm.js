import Card from '../ui/Card';

function NewAthleteForm() {
  return (
    <Card>
      <form>
        <div className=''>
          <label htmlFor='fname'>Athlete First Name</label>
          <input type='text' required id='fname' />
        </div>
        <div className=''>
          <label htmlFor='lname'>Athlete Last Name</label>
          <input type='text' required id='lname' />
        </div>
        <div className=''>
          <label htmlFor='image'>Athlete Image</label>
          <input type='url' required id='image' />
        </div>
        <div className=''>
          <label htmlFor='bio'>Athlete Bio</label>
          <textarea id='bio' required rows='5'></textarea>
        </div>
        <div className=''>
          <button>Add Athlete</button>
        </div>
      </form>
    </Card>
  );
}

export default NewAthleteForm;
