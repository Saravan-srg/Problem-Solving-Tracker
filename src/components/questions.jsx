import React, {Component, useEffect, useState } from 'react';
import QuestionCard from './questionCard';
import {Box,Grid,Typography,Button,makeStyles} from '@material-ui/core';
//import {LinearProgressWithLabel} from '@material-ui/core'

//function Questions({questionsData, updateData}) {

class Questions extends Component {   
    state = {  
        questions: [
            {question: "Given an array which consists of only 0, 1 and 2. Sort the array without using any sorting algo", topic: "Arrays"},
            {question: "Find the maximum and minimum element in an array", topic: "Arrays"},
            {question: "Find the maximum and minimum element in an array", topic: "Arrays"},
            {question: "Find the maximum and minimum element in an array", topic: "Arrays"},
            {question: "Find the maximum and minimum element in an array", topic: "Arrays"},
            {question: "Find the maximum and minimum element in an array", topic: "Arrays"},
            {question: "Find the maximum and minimum element in an array", topic: "Arrays"},
            {question: "Find the maximum and minimum element in an array", topic: "Arrays"}
        ]
    };

    // getEightRandomQues() {
    //     let min = 0;
    //     let max = ``
    // }
    
        //const {questionsData} = this.props;
        //const [questionsTableData, setquestionsTableData] = useState([]);

        // useEffect(() => {
        //     if(questionsData != undefined) {
        //         let tableData = questionsData.questions.map((question, index) => {
        //             return {
        //                 id: index,
        //                 question: (
        //                     <>  
        //                         {/*Q link */}
        //                         <a 
        //                             href={question.URL}
        //                             target="_blank"
        //                             rel="noopener noreferrer"
        //                             style={{ fontWeight: "600", fontSize: "20px" }}
        //                             className="question-link"
        //                         >
        //                             {question.Problem}
        //                         </a>
        //                     </>
        //                 )
        //             };
        //         });

        //         setquestionsTableData(tableData);
        //         //setTopicName(questionsData.topicName);
        //     }
        // }, [questionsData]);
    
    render() {
        return (
            <Box mt={3} mb={3}>
                <Grid container justifyContent='center'>
                    <Grid item xs={10}>
                       
                        {this.state.questions.map(q => (
                            <QuestionCard 
                                question = {q.question}
                                topic = {q.topic}
                            />
                        ))}
                    </Grid>
                </Grid>
            </Box>
        );
    }
}
 
export default Questions;