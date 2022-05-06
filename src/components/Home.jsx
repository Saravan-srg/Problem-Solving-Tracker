import React, { Component, useEffect } from 'react';
import { getData, updateDBData, resetDBData, exportDBData, importDBData } from "../services/dbServices";
import Questions from "./questions";
import ReactGA from "react-ga";
import {Box,Grid,Typography,Button,makeStyles} from '@material-ui/core';

export const ThemeContext = createContext(null);


function Home() {
    const [questionData, setquestionData] = useState([]);

    useEffect(() => {
        localStorage.removeItem("cid");
        ReactGA.initialize(process.env.React_APP_GA_TRACING_ID);
        ReactGA.pageview(window.location.pathname + window.location.search);
        
        getData((QuestionData) => {
            setquestionData(QuestionData);
        });



    }, []);

    function upadateData(key, topicData, topicPosition) {
        let reGenerateUpdatedData = questionData.map((topic, index) => {
            if(index === topicPosition) {
                updateDBData(key, topicData);
                return { topicName: topic.topicName, position: topic.position, ...topicData };
            }
            else {
                return topic;
            }
        });
        setquestionData(reGenerateUpdatedData);
    }

    function resetData() {
        resetDBData((response) => {
            setquestionData([]);
            window.location.replace(window.location.origin);
        });
    }

    function exportData(callback) {
        exportDBData((data) => {
            const fileData =  JSON.stringify(data);
            const blob = new Blob([fileData], { type: "text/plain" });
            saveAs(blob, "progress.json");
            callback();
        });
    }

    function importData(data, callback) {
        importDBData(data, (QuestionData) => {
            setquestionData(QuestionData);
            callback();
        });
    }

    return (
        <div>
            <Typography variant="h1" component="h2">
                Interview Preparation
            </Typography>
            <Questions questionsData={questionData[0]} updateData={updateData} />
        </div>
    );
}