
import { useEffect, useState } from 'react';
import './App.css';
import { MDBBtn } from 'mdb-react-ui-kit';

function App() {
  const base_url='https://dummyjson.com/quotes';
  var [quote,setQuotes]=useState([]);

  // fetchinf the api
     
  useEffect(()=>{
    fetchData()
  },[])
    const fetchData=async()=>{
      const response= await fetch(base_url)
      .then(res=> res.json())
      .then(data=> setQuotes(data.quotes))
    }
    console.log(quote);

      
    const loadQuote=()=>{
      const random1=Math.floor(Math.random()*30)
      quote.map(item=>{
        if (random1=== item.id) {
          document.getElementById('qut').innerHTML=`" ${item.quote} "`
          document.getElementById('auth').innerHTML=`-${item.author}`
          
        }
      })
      

    }
    loadQuote()
      
    const genrateRandonQuotes=()=>{
      const random2=Math.floor(Math.random()*30)
      console.log(random2);
      quote.map(item=>{
        // console.log(item.quote);
        if (random2== item.id) {
          console.log(item.quote);
          document.getElementById('qut').innerHTML=`" ${item.quote} "`
          document.getElementById('auth').innerHTML=`-${item.author}`
          
        }
      })


    }

    
 
  return (
    <div className="App" >
      <div className="quote_box shadow">
        <h1 className='mb-5'>Random Quotes Generator</h1>
          
          <div className="quote">
            <h6 id='qut'>
             
            </h6>
            <p id='auth'></p>
          </div>
       
        <MDBBtn className='my-5' onClick={genrateRandonQuotes}>Generate Random Quotes</MDBBtn>

        {/* <button>Generate Random Quotes</button> */}
      </div>
      
    </div>
  );
}

export default App;
