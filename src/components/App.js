import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

// App components
import Header from './Header';
import Home from './Home';
import About from './About';
import Teachers from './Teachers';
import Courses from './Courses';
import NotFound from './NotFound';
import Featured from './Featured';

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      
      <Switch>
        <Route exact path="https://programingchicken.github.io/course-directory/" component={Home} />
        <Route path="https://programingchicken.github.io/course-directory/about" render={ () => <About title='About' /> } />
        <Route exact path="https://programingchicken.github.io/course-directory/teachers" component={Teachers} />
        <Route path="https://programingchicken.github.io/course-directory/teachers/:topic/:name" component={Featured} />
        <Route path="https://programingchicken.github.io/course-directory/courses" component={Courses} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;




