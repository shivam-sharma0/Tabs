import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [jobs,setJobs]=useState([]);
  const [loading,setLoading]=useState(true);
  const [value,setValue]=useState(0);

  const fetchJobs = async()=>{
    const responce =await fetch(url);
    const newJobs= await responce.json();
    setJobs(newJobs);
    setLoading(false);
  }

  useEffect(()=>{
    fetchJobs();
  },[])


  if(loading){
    return <section className='section loading'>
      <h1>Loading...</h1>
    </section>
  }

  const {company,title,dates,duties,id,order}=jobs[value];

  return (
    <section className="sectioon">
      <div className="title">
        <h2>Experinces</h2>
        <div className="underline"></div>
      </div>


      <div className="jobs-center">

        <div className="btn-container">
          {jobs.map((job, index) => {
            return (
              <button
                key={index}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && "active-btn"}`}
              >
                {job.company}
              </button>
            );
          })}
        </div>

        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>

          {duties.map((item, index) => {
            return (
              <div key={index} className="job-desc">
                <FaAngleDoubleRight className="job-icon" />
                <p>{item}</p>
              </div>
            );
          })}
        </article>
        
      </div>
    </section>
  );
}

export default App
