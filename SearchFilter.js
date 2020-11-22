import React,{useState} from 'react'


///another example https://codepen.io/kokoz/pen/PowpXvG
function LiveSearchFilter() {
    const [inputValue,setInputValue]=useState('');
    let items=
    [
        {'label':'Get Started'},
        {'label':'Community Forum'},
        {'label':'Source Code'},
        {'label':'Support'},
        {'label':'Store'},
    ]
    let theme=
    [
        {'label':'Guide'},
        {'label':'Theme Designer'},
        {'label':'Visual EDitor'},
        {'label':'SASS API'}
    ]
    let data=
    [
        {'label':'Data Table'},
        {'label':'Data View'},
        {'label':'Data Saver'},
        {'label':'Google Maps'}
    ]

    if(inputValue.length>0){
        items = items.filter((value)=>{
            return value.label.toLowerCase().match(inputValue)
        })
    }
    if(inputValue.length>0){
        theme = theme.filter((value)=>{
            // match or includes same but include is case sensitive
            return value.label.toLowerCase().match(inputValue)
        })
    }
    if(inputValue.length>0){
        data = data.filter((value)=>{
            // match or includes same but include is case sensitive
            return value.label.toLowerCase().match(inputValue)
        })
    }
    const handleChange=(e)=>{
        e.preventDefault();
        setInputValue(e.target.value)
    }

    return (
                     <div style={{backgroundColor:'lightGreen',width:'250px',height:'100%',padding:'5px',boxSizing:'border-box'}}>
                       <div className="search-input">
                                <input
                                    type="text"
                                    style={{padding:'5px',width:'220px',marginTop:'5px'}}
                                    onChange={handleChange}
                                    value={inputValue}
                                    placeholder="Search"
                            />                       

                       <div>
                      {
                          inputValue ? '' : <h3 style={{color:'blue'}}>GENERAL</h3>
                      }
                    {
                        items.map((items,i)=>{
                        return( 
                            <div key={i}>
                                <ul>
                                    <li style={{backgroundColor:'LightBlue',listStyle:'none',boxSizing:'border-box',fontSize:'20px',color:'crimson'}}>
                                        {items.label}
                                    </li>
                                </ul>
                            </div>
                        )
                    }
                )
                    }
                     {
                          inputValue ? '' : <h3 style={{color:'blue'}}>THEMING</h3>
                      }
                    {
                        theme.map((theme,i)=>{
                        return( 
                                <div key={i}>
                                    <ul>
                                        <li style={{backgroundColor:'LightBlue',listStyle:'none',boxSizing:'border-box',fontSize:'20px',color:'crimson'}}>
                                            {theme.label}
                                        </li>
                                    </ul>
                                </div>
                            )
                        }
                    )
                    }
                      {
                          inputValue ? '' : <h3 style={{color:'blue'}}>DATA</h3>
                      }
                    {
                        data.map((data,i)=>{
                        return( 
                                <div key={i}>
                                    <ul>
                                        <li style={{backgroundColor:'LightBlue',listStyle:'none',boxSizing:'border-box',fontSize:'20px',color:'crimson'}}>
                                            {data.label}
                                        </li>
                                    </ul>
                                    </div>
                            )
                            }
                        )
                    }
                </div>                          
            </div> 
        </div> 
            )
  }
export default LiveSearchFilter