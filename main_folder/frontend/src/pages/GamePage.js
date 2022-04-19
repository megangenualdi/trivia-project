import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import GameResults from './GameResults';

const Trivia = styled.div`
    text-align: center;
    font-size: clamp(20px, 2.5vw, 24px);
    margin-top: 10vh;
`;

const Question = styled.div`
    width: 50%;
    font-size: 50px;
    margin: 0 auto;
    background-color: #350B40;
    color: #EE99A0;
    border-radius: 25px;
`;

const Choices = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 2em auto;
    @media screen and (min-width: 1180px) {
        width: 40%;
    }
`;

const Choice = styled.button`
    display: block;
    border: 1px solid #616A94;
    border-radius: 25px;
    padding: 15px 30px;
    color: #350B40;
    background-color: #EE99A0;
    transition: 0.3s;
    font-size: 1em;
    outline: none;
    user-select: none;
    margin-top: 1em;
    
    @media screen and (min-width: 1180px) {
        &:hover {
            color: #350B40;
            background-color: #AD6C80;
        }
    }
`;



const GamePage = () => {

    const [trivia, setTrivia] = useState([]);
    const [index, setIndex] = useState(0);
    const [points, setPoints] = useState(0);

    const randomize = (arr) => arr.sort(() => Math.random() - 0.5);

    const pickAnswer = (e) => {

        let userAnswer = e.target.outerText;

        if (trivia[index].answer === userAnswer) setPoints(points + 100);
        setIndex(index + 1);
    }

    useEffect(() => {

        axios.get('https://the-trivia-api.com/questions?limit=3')
            .then(response => {
                setTrivia(response.data.map(item => (

                    {
                        question: item.question,
                        options: randomize([...item.incorrectAnswers, item.correctAnswer]),
                        answer: item.correctAnswer
                    }

                )));
            })
            .catch(e => console.error(e))

    }, []);


    return (
        <Trivia>
                {trivia[index] && 
                <div>
                    <Question dangerouslySetInnerHTML={{ __html: trivia[index].question }}></Question>
                    <Choices>
                        {trivia[index].options.map((item, index) => (
                            <Choice key={index} dangerouslySetInnerHTML={{ __html: item }} onClick={pickAnswer}></Choice>
                        ))}
                    </Choices>
                </div>
                }
                 {
                index === 3 && <GameResults points={points} trivia={trivia}/>
              }

        </Trivia>
    )
}

export default GamePage;