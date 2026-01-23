import React from 'react'
import './index.css'
import Card from './components/Card'
import User from './components/User'
const App = () => {
  const jobs = [
  {
    id: 1,
    company: "Amazon",
    posted: "5 days ago",
    role: "Senior UI/UX Designer",
    type: "Part Time",
    level: "Senior Level",
    salary: "$120/hour",
    location: "Mumbai, India",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA0jFU_BZ7aZJasVjcDhoMmlQIGkgwx7i_9g&s"
  },
  {
    id: 2,
    company: "Google",
    posted: "2 days ago",
    role: "Frontend Developer",
    type: "Full Time",
    level: "Mid Level",
    salary: "$150/hour",
    location: "Bangalore, India",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
  },
  {
    id: 3,
    company: "Microsoft",
    posted: "1 week ago",
    role: "React Developer",
    type: "Remote",
    level: "Senior Level",
    salary: "$140/hour",
    location: "Hyderabad, India",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
  },
  {
    id: 4,
    company: "Netflix",
    posted: "3 days ago",
    role: "UI Engineer",
    type: "Full Time",
    level: "Junior Level",
    salary: "$110/hour",
    location: "Pune, India",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
  },
  {
    id: 5,
    company: "Meta",
    posted: "6 days ago",
    role: "Product Designer",
    type: "Remote",
    level: "Senior Level",
    salary: "$160/hour",
    location: "Remote",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png"
  },
  {
    id: 6,
    company: "Apple",
    posted: "4 days ago",
    role: "UX Researcher",
    type: "Part Time",
    level: "Mid Level",
    salary: "$130/hour",
    location: "Delhi, India",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
  },
  {
    id: 7,
    company: "Flipkart",
    posted: "2 weeks ago",
    role: "UI Designer",
    type: "Full Time",
    level: "Junior Level",
    salary: "$90/hour",
    location: "Bangalore, India",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/13/Flipkart_logo.png"
  },
  {
    id: 8,
    company: "Zomato",
    posted: "1 day ago",
    role: "Frontend Engineer",
    type: "Remote",
    level: "Mid Level",
    salary: "$100/hour",
    location: "Remote",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png"
  },
  {
    id: 9,
    company: "Swiggy",
    posted: "3 weeks ago",
    role: "Product Engineer",
    type: "Full Time",
    level: "Senior Level",
    salary: "$135/hour",
    location: "Bangalore, India",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png"
  },
  {
    id: 10,
    company: "Paytm",
    posted: "5 days ago",
    role: "UI Developer",
    type: "Part Time",
    level: "Mid Level",
    salary: "$95/hour",
    location: "Noida, India",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/42/Paytm_logo.png"
  }
];

 
    

  return (
    <div className='parent'>
    {jobs.map(function(job){
      return <Card key={job.id} job={job}/> //key is used to identify each element in the list, job is the object  
    })} 
   
     </div>
  )
}

export default App