import React from 'react'
import Home from './Pages/Home';
import Create from './Pages/Create';
import View from './Pages/View';
import Update from './Pages/Update';
import Delete from './Pages/Delete';

function HomeController({ page }) {

  let content;

  if (page === "home") {
    content = <Home page={page} />
  } else if (page === "create") {
    content = <Create page={page} />;
  } else if (page === "view") {
    content = <View page={page} />;
  } else if (page === "update") {
    content = <Update page={page} />;
  } else if (page === "delete") {
    content = <Delete page={page} />;
  }

  return (
    <div>
      {content}
    </div>
  )
}

export default HomeController
