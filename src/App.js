import Categories from './components/Categories';

import BookList from './components/BookList';
import Nav from './components/Nav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path='/books' component={BookList} />
          <Route path='/categories' component={Categories} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
