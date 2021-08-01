import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import Header from './Header'
import Home from './Home.js'
import About from './About.js'
import Teachers from './Teachers.js'
import Courses from './Courses.js'
import NotFound from './NotFound.js'
import Featured from './Featured';


const App = () => (
  <BrowserRouter>
    <div className="container">
      <Header />

      <Switch>
        <Route exact path="/" component={Home}/>
        {/*use this method when passing props to component*/}
        <Route path="/about" render={ () => <About title='About'/>}/>
        <Route exact path="/teachers" component={Teachers}/>
        <Route path="/teachers/:topic/:name" component={Featured}/>
        <Route path="/courses" component={Courses}/>
        <Route component={NotFound} />
      </Switch>

    </div>
  </BrowserRouter>
);

export default App;