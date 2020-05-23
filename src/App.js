import React, { component, Component } from 'react' ;
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import {Home} from './Home';
import {Goals} from './Goals';
import {Experience} from './Experience';
import {Education} from './Education';
import {Skills} from './Skills';
import {Contact} from './Contact';
import {NoMatch} from './NoMatch';
import {Layout} from './components/Layout';
import {NavigationBar} from './components/NavigationBar'
import {Jumbotron} from './components/Jumbotron'
import {Footer} from './components/Footer'


class App extends Component {
  render(){
    return (
      <React.Fragment>
        <Router>
          <NavigationBar/>
          <Jumbotron />
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/goals" component={Goals} />
              <Route path="/experience" component={Experience} />
              <Route path="/education" component={Education} />
              <Route path="/skills" component={Skills} />
              <Route path="/contact" component={Contact} />
              <Route component={NoMatch} />
            </Switch>
          </Layout>
          <Footer />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
