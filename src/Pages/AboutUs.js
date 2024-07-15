import React,{useState} from 'react'

export default function AboutUs() {

  const[myStyle,setMyStyle]=useState({
    color:'black',
    backgroundColor:'white'

  })

  const [setBtnText]=useState("Enable Light Mode")
  
  const toggleStyle=()=>{
    if(myStyle.color==='black'){
      setMyStyle({

        color:'white',
        backgroundColor:'black',
        border:'1px solid white',
        padding:'1px'

      })
      setBtnText("Enable Dark Mode");
    }
    else{
      setMyStyle({
        color:'black',
        backgroundColor:'white'
        
      })
      setBtnText("Enable Light Mode");
    }
  }
  return (
    <div className="Container " style={myStyle}>
      <h2 className='my-3'>About Us</h2>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" style={myStyle} data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <b>Student Life Essay</b>
    </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body"  style={myStyle}>
        <strong>500 Words Essay On Student Life</strong>In student life, we do not just learn from books. We learn to grow emotionally, physically, philosophically as well as socially. Thus, in this student life essay, we will learn its essence and importance. 
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <b>Student's Life</b>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>The Essence of Student Life Essay</strong> Student life is meant to help us learn discipline and study. Despite that, life is quite enjoyable. The struggle is low in student life. One must get up early in the morning to get ready for school or college.
        </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header"> 
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"  style={myStyle} data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <b>Student's Importance</b>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body"  style={myStyle}>
        <strong>Importance of Student Life.</strong> Student life is a vital part of everyone’s life. The future of the students and the country depends on how we are as students. Thus, getting the right guidance is essential. Student life builds the foundation for our life.
        </div>
    </div>
  </div>
</div>
<div classNameName='container my-3'>
<button onClick={toggleStyle} type="button" className="btn btn-primary">Enable Dark Mode</button>
</div>
    </div>
  )
}
