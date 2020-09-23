import React from 'react';
import '../../App.css';

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

class MyXp extends React.Component {
    jobArray = [
        {id: 1
            , title: 'PeopleSoft Developer'
            , descr: 'Responsible for creating, modifying, and maintaining application engine programs, '
            + 'components, and interfaces within the PeopleSoft software suite. This software is used to perform everyday business operations such as HR, '
            + 'Financials, and Customer Relationship Data. As a PeopleSoft developer, you also use your skills to code programs with Structured Query Language (SQL) '
            + 'to extract data from the PeopleSoft database into usable reports. Your job duties often require you to work with the Business Intelligence (BI) and Integration ' 
            + 'Broker components of the software. The qualifications for beginning this career include a background in SQL and some prior coding experience. '
            , duties: 'Duties'
            , from: '01/20'
            , to: 'Current'
            , image: './#'},
        {id: 2
            , title: 'Web Developer'
            , descr: 'A Web Developer is responsible for the coding, design and layout of a website '
            + 'according to a company`s specifications. As the role takes into consideration user '
            + 'experience and function, a certain level of both graphic design and computer '
            + 'programming is necessary. ' 
            , duties: 'Duties'
            , from: '09/17'
            , to: '08/18'
            , image: './#'},
        {id: 3
            , title: 'Software Developer'
            , descr: 'A Web Developer is responsible for the coding, design and layout of a website '
            + 'according to a company`s specifications. As the role takes into consideration user '
            + 'experience and function, a certain level of both graphic design and computer '
            + 'programming is necessary. ' 
            , duties: 'Duties'
            , from: '07/17'
            , to: '08/18'
            , image: './#'},
      ];

    constructor() { 
        super();

        this.state = { // Setting the initial states of the dropdown
            expanded: -1,
        }
        this.toggle = this.toggle.bind(this);
        
    }

    toggle(i) {
        if (this.state.expanded === i) { 
            this.setState({expanded: -1});
        } else { 
            this.setState({expanded: i});
        }
        console.log(this.state.expanded);
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

    jobCard() { 
        const expansionClass = this.state.expanded === -1 ? 'expanded' : ' expanded expandOpen'; // if dropdown item is selected show execute button
        
        return (
            this.jobArray.map((job, i) =>(
                
                <div className="col-xs-12 col-sm-12 col-md-4 pb-5 pl-5 pr-5" key={job.id}>
                    <Card key={job.id} className="my-card">
                        <CardHeader
                            style={{fontFamily: 'font-family: `Audiowide`, cursive !important'}}
                            action={job.from + ' - ' + job.to}
                            title={job.title}
                        />
                        {/* <CardMedia
                            // image={job.image} // NOT WORKING
                            // style={{heigh: 0, paddingTop: '56.25%'}}
                        /> */}
                         {/* <CardContent>
                            <Typography variant="body2" component="p">
                                {job.descr}
                            </Typography>
                        </CardContent> */}
                        <CardActions disableSpacing>
                            <IconButton
                            className={expansionClass}
                            onClick={() => this.toggle(i)}
                            aria-expanded={this.state.expanded === i}
                            aria-label="show more"
                            >
                            <ExpandMoreIcon className="expand-icon" />
                            </IconButton>
                        </CardActions>
                        <Collapse in={this.state.expanded === i} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography className="card-detail-hdr" paragraph>Details:</Typography>
                            <Typography paragraph>
                                {job.descr}
                            </Typography>
                            <Typography className="card-detail-hdr" paragraph>Duties:</Typography>
                            <Typography paragraph>
                                {job.duties}
                            </Typography>
                            </CardContent>
                        </Collapse>
                    </Card>
                </div>
                
            ))
        )
    }

    
      render() { 
        
        return(
            <div className="row">
            {this.jobCard()}
            </div>





            
        //     <table>
        //         <thead>
        //             <tr className="table-header text-center">
        //                 <th>Job Title</th>
        //                 <th>Description</th>
        //                 <th>Duties</th>
        //                 <th>Begin</th>
        //                 <th>End</th>
        //             </tr>
        //         </thead>
        //         <tbody className="">
        //         {
        //             this.jobList() // calling our jobList method to display all jobs
        //         }
        //         </tbody>
        //   </table>
        );
      }
}


export default MyXp;