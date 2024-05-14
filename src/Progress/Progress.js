import React, { useState, useContext } from "react";
import LinearProgress from '@mui/material/LinearProgress';
import { ProgressContextProvider, ProgressHandlerContext } from '../Context/ContextProvider';
import { useSnackbar } from 'notistack';
import ConfettiExplosion, { ConfettiProps } from 'react-confetti-explosion';

const Progress = ({wordCount}) => {
    const { wordGoal, setWordGoal } = useContext(ProgressHandlerContext);
    const { goalEnabled, setGoalEnabled } = useContext(ProgressHandlerContext);
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const largeProps = {
        force: 0.8,
        duration: 3000,
        particleCount: 300,
        width: 1600,
        colors: ['#DA4167', '#FFBC42', '#07DA70', '#3083DC', '#645DD7'],
    }   
    
    function halfFunction() {
        if (!(wordCount === 0) && goalEnabled) {
            enqueueSnackbar("You're halfway to your goal!", { 
                autoHideDuration: 3000, 
                preventDuplicate: true,
            })
        }
    }
    
    function doneFunction() {
        if (!(wordCount === 0) && goalEnabled) {
            enqueueSnackbar("You've met your word goal!", { 
                autoHideDuration: 3000, 
                preventDuplicate: true,
            })

            var bar = document.getElementById('progress-bar');
            bar.style.display = 'none';

            var goalshow = document.getElementById('wordgoal');
            goalshow.style.visibility = 'hidden';
            
            //for some reason the confetti doesn't work when hooks are called (that's my guess) so i'm putting a delay here
            setTimeout(() => {
                setGoalEnabled(false);
            }, 1500);
            
            return <ConfettiExplosion id="confetti" {...largeProps} />;
        }
    }

    return (
        <div>
            <br />
            {//wordGoal === 0 ? 
             goalEnabled ?
                <LinearProgress id='progress-bar' variant='determinate' value={Math.round((100 / wordGoal) * wordCount)} sx={{color:'primary.main', height: 10, borderRadius: 5}} /> : 
                <LinearProgress id='progress-bar' variant='determinate' value={Math.round((100 / wordGoal) * wordCount)} sx={{color:'primary.main', height: 10, borderRadius: 5, display:"none"}} /> 
            }
            {/*isLargeExploding && <ConfettiExplosion {...largeProps} />*/}
            <div>
                <sub style={{position: 'relative', right: '32%'}}>Word Count: {wordCount}</sub>
                
                {goalEnabled ? 
                    <sub id='wordgoal' style={{position: 'relative', left: '32%'}}>Word Goal: {wordGoal}</sub> :
                    <sub id='wordgoal' style={{position: 'relative', left: '32%', visibility: "hidden"}}>Word Goal: {wordGoal}</sub>
                } 
            </div>
            <div style={{position: 'absolute', left: '50%', top: '85%'}}>
                {wordCount === Math.ceil(wordGoal / 2) ? halfFunction() : ''}
                            
                {/* do not change to ===, need == for type conversion */}
                {wordCount >= wordGoal && goalEnabled ? doneFunction() : ''}
            </div>

        </div>
    );
};

export default Progress;