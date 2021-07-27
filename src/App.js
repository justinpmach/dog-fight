// import Todo from './components/Todo';
import { Route, Switch } from 'react-router-dom';
import Favorites from './pages/Favorites';
import MainNavigation from './components/layout/MainNavigation';
import NewAthletePage from './pages/NewAthlete';
import AllAthletesPage from './pages/AllAthletes';
// <div>
//   <h1>
//     <Todo text='Card 1' />
//     <Todo text='Card 2' />
//     <Todo text='Card 3' />
//   </h1>
// </div>
function App() {
  return (
    <div>
      <MainNavigation />
      <Switch>
        <Route path='/' exact>
          <AllAthletesPage />
        </Route>
        <Route path='/new-athlete'>
          <NewAthletePage />
        </Route>
        <Route path='/favorites'>
          <Favorites />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
