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
            , from: 'Jan 01, 2020'
            , to: 'Current'
            , image: './#'},
        {id: 2
            , title: 'Web Developer'
            , descr: 'A Web Developer is responsible for the coding, design and layout of a website '
            + 'according to a company`s specifications. As the role takes into consideration user '
            + 'experience and function, a certain level of both graphic design and computer '
            + 'programming is necessary. ' 
            , duties: 'Duties'
            , from: 'July 01, 2017'
            , to: 'Aug 01, 2018'
            , image: './#'},
        {id: 3
            , title: 'Software Developer'
            , descr: 'A Web Developer is responsible for the coding, design and layout of a website '
            + 'according to a company`s specifications. As the role takes into consideration user '
            + 'experience and function, a certain level of both graphic design and computer '
            + 'programming is necessary. ' 
            , duties: 'Duties'
            , from: 'July 01, 2017'
            , to: 'Aug 01, 2018'
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
                            action={'From ' + job.from + ' to ' + job.to}
                            title={job.title}
                        />
                        <CardMedia
                            // image={job.image} // NOT WORKING
                            // style={{heigh: 0, paddingTop: '56.25%'}}
                        />
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
                            <Typography className="card-detail-hdr" paragraph>Method:</Typography>
                            <Typography paragraph>
                                Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                                minutes.
                            </Typography>
                            <Typography paragraph>
                                Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                                heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                                browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                                and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                                pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                                saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                            </Typography>
                            <Typography paragraph>
                                Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                                without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                                medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                                again without stirring, until mussels have opened and rice is just tender, 5 to 7
                                minutes more. (Discard any mussels that don’t open.)
                            </Typography>
                            <Typography>
                                Set aside off of the heat to let rest for 10 minutes, and then serve.
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