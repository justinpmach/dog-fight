// import Todo from './components/Todo';
import { Route, Switch } from 'react-router-dom';
import FavoritesPage from './pages/Favorites';
// import MainNavigation from './components/layout/MainNavigation';
import NewAthletePage from './pages/NewAthlete';
import AllAthletesPage from './pages/AllAthletes';
import Layout from './components/layout/Layout';

// <div>
//   <h1>
//     <Todo text='Card 1' />
//     <Todo text='Card 2' />
//     <Todo text='Card 3' />
//   </h1>
// </div>
function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <AllAthletesPage />
        </Route>
        <Route path='/new-athlete'>
          <NewAthletePage />
        </Route>
        <Route path='/favorites'>
          <FavoritesPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
