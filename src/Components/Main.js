import react ,{useState}from "react";
import Card from "./Card"
import axios from "axios";
const Main=() =>{
    const [search, setSearch]=useState("");
    const [bookData, setBookData]=useState([]);    
    const searchBook=(evt)=>{
        if(evt.key==="Enter")
        {
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyDh4MxVZ0u-yRyTTT_LYtrJUFAGvwOHmEI&maxResults=40').then(res=>setBookData(res.data.items))
            .catch(err=>console.log(err))
        }
    }
    return(
        <>
        <div className="header">
            <div className="row1">
                <h1>A room without books is like<br/> a body without a soul.</h1>
            </div>
            <div className="row2">
                <h2>Find Your Book</h2>
                <div className="search">
                    <input type = "text" placeholder="Enter Your Book Name"value={search} onChange={e=>setSearch(e.target.value)}onKeyPress={searchBook}/>
                    <button><i class="fas fa-search"></i></button>
                    </div>
                        <img src="https://bestanimations.com/media/reading/789678829reading-book-rainy-day-illustration-animated-gif.gif" alt="Reading"/>
                    </div>
                </div>
            <div className="container">
                <Card book={bookData}/>
        </div>
        </>
    )
}
export default Main;