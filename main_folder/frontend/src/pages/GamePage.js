import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import GameResults from './GameResults';
import { useParams } from 'react-router-dom'

const Trivia = styled.div`
    text-align: center;
    font-size: clamp(20px, 2.5vw, 24px);
    margin-top: 10vh;
`;

const Question = styled.div`
    width: 50%;
    font-size: 50px;
    margin: 0 auto;
    background-color: #61A4BC;
    color: #1A132F;
    box-shadow: 5px 5px 7px rgba(33,33,33,.7);
`;

const Choices = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 2em auto;
    margin-bottom: 10px;
    @media screen and (min-width: 1180px) {
        width: 40%;
    }
`;

const Choice = styled.button`
    display: block;
    border: 5px dotted #616A94;
    padding: 15px 30px;
    color: #1A132F;
    background-color: #F7E2E2;
    transition: 0.3s;
    font-size: 1em;
    outline: none;
    user-select: none;
    margin-top: 1em;
    margin-bottm: 10px;
    box-shadow: 5px 5px 7px rgba(33,33,33,.7);
    
    @media screen and (min-width: 1180px) {
        &:hover {
            color: #350B40;
            background-color: #5B7DB1;
            border: 5px dotted #FFF89A;
        }
    }
`;



const GamePage = (props) => {

    const [trivia, setTrivia] = useState([]);
    const [index, setIndex] = useState(0);
    const [points, setPoints] = useState(0);
    const {category, int} = useParams()

    const randomize = (arr) => arr.sort(() => Math.random() - 0.5);

    const pickAnswer = (e) => {

        let userAnswer = e.target.outerText;

        if (trivia[index].answer === userAnswer) setPoints(points + 100);
        setIndex(index + 1);
    }

    useEffect(() => {
        if (category === "random") {
            axios.get(`https://the-trivia-api.com/questions?limit=${int}`)
            .then(response => {
                setTrivia(response.data.map(item => (

                    {
                        question: item.question,
                        options: randomize([...item.incorrectAnswers, item.correctAnswer]),
                        answer: item.correctAnswer,
                        category: item.category
                    }

                )));
            })
            .catch(e => console.error(e))
        }
        else {
            axios.get(`https://the-trivia-api.com/questions?categories=${category}&limit=${int}`)
            .then(response => {
                setTrivia(response.data.map(item => (

                    {
                        question: item.question,
                        options: randomize([...item.incorrectAnswers, item.correctAnswer]),
                        answer: item.correctAnswer,
                        category: item.category
                    }

                )));
            })
            .catch(e => console.error(e))
        }
        

    }, []);


    return (
        <Trivia>
                {trivia[index] && 
                <div>
                    <h3 id="category">Category: {trivia[index].category}</h3>
                    <Question dangerouslySetInnerHTML={{ __html: trivia[index].question }}></Question>
                    <Choices>
                        {trivia[index].options.map((item, index) => (
                            <Choice key={index} dangerouslySetInnerHTML={{ __html: item }} onClick={pickAnswer}></Choice>
                        ))}
                    </Choices>
                </div>
                }
                 {
                index === int*1 && <GameResults points={points} trivia={trivia} user={ props.user }/>
              }

        </Trivia>
    )
}

export default GamePage;