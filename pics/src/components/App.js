/* eslint-disable no-unused-vars */
import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
class App extends React.Component {
   state = { images:[] };
  onSearchSubmit = async (term) => {
   //  console.log(term); instead of keeping the console we develop axios code
   const response = await 
   axios.get('https://api.unsplash.com/search/photos',{
       params: { query: term } , 
   headers : {
       Authorization:
       'Client-ID kg7rGo_YMBqumV7h-EQJFKfwDiQZFigvXxIVd6WD0AQ'
      }    
      });
     this.setState ({ images: response.data.results });
   }
   render () {
return (
   <div className="ui container" style={{ marginTop:'10px'}}>

   <SearchBar onSubmit = {this.onSearchSubmit}/>
      <ImageList images={this.state.images}/>
   </div>
);
}
}
export default App;