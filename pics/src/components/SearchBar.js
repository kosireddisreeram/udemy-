import React from "react";
class SearchBar extends React.Component{
    state={term:''}; 
   onFormSubmit=(event)=>{
       event.preventDefault();
    //    passing onSubmit as a props from parent to child means in App.js to SearchBar.js
       this.props.onSubmit(this.state.term);
   }
    render() {
       return (
            <div className="ui segment">
                <form onSubmit = {this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        {/* we wont keep the () after the function name we dont want to call it whenever component is rendered we just want to do it at a particular time  */}
                       <input type="text" value={this.state.term} onChange={e => this.setState({term:e.target.value})}/>
                    </div>
                </form>
            </div>       
            );
        }
}
export default SearchBar;