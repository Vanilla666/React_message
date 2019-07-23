import React,{Component} from 'react';

class FilteredList extends Component{
    constructor(props){
        super(props);//繼承props
        this.state = {
            search:'',
        };//內部自定義的變數
    }

    updateSearch = (e) => {
        // console.log('e',e.target.value);
        this.setState({
            search:e.target.value
        })
        // this.props.onItemClick(e.target.id);
        this.props.onsearh(e.target.value);
    }

    render(){
        const {updateSearch}=this,
              {search}=this.state;

        return (
        
            <div> 
                <input  placeholder="Search" 
                onChange={updateSearch} 
                value={search} type="text"/>                
            </div>
        );
    }
}
export default FilteredList;
