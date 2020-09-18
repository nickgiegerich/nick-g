import React from 'react';
import '../../App.css';

class MyXp extends React.Component {
    jobArray = [
        {id: 1, title: 'PeopleSoft Developer', descr: 'See resumé', duties: 'Duties', from: 'Jan 01, 2020', to: 'Current'},
        {id: 2, title: 'Web Developer', descr: 'See resumé', duties: 'Duties', from: 'July 01, 2017', to: 'Aug 01, 2018'},
      ];
    constructor() { 
        super();

        // this.state = { // Setting the initial states of the dropdown
        //     numbers: [1, 2, 3, 4, 5, 6],
        // }
        // this.NumberList = this.NumberList.bind(this);
        
    }

    jobList() { // this function creates our table rows for each job in our array
        return (
            this.jobArray.map((job) =>(
                <tr key={job.id}>
                      <td>{job.title}</td>
                      <td>{job.descr}</td>
                      <td>{job.duties}</td>
                      <td>{job.from}</td>
                      <td>{job.to}</td>
                </tr>
             ))
        )
    }

    
      render() { 
        return(
            <table>
                <thead>
                    <tr className="table-header text-center">
                        <th>Job Title</th>
                        <th>Description</th>
                        <th>Duties</th>
                        <th>Begin</th>
                        <th>End</th>
                    </tr>
                </thead>
                <tbody className="">
                {
                    this.jobList() // calling our jobList method to display all jobs
                }
                </tbody>
          </table>
        );
      }
}


export default MyXp;