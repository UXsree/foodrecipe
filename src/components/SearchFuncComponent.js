import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import ListrecipieComponent from './ListrecipieComponent';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import { Button, Card, Row, Col } from 'react-bootstrap';

const SearchFuncComponent = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchTermOnButtonClick, setSearchTermOnButtonClick] = useState('');
    const [posts, setPosts] = useState([]);
    const handleChange = (event) => setSearchTerm(event.target.value);
    const handleClick = () =>{setSearchTermOnButtonClick(searchTerm)}
    

    useEffect(()=>{
        axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTermOnButtonClick}`)
        .then(res=>{
             console.log(res.data.meals)
            // console.log(JSON.parse(JSON.stringify(res.data)));
            setPosts(res.data.meals)
            
        })
        .catch(err=>{
            console.log(err)
        })
    },[searchTermOnButtonClick])

    useEffect(() => {
        // action on update of movies
    }, [posts]);

    return(
    <div>
        <Container className="p-3">
            <Jumbotron>
                <label>
                    Search a recipie:
                    <input type="text" onChange={handleChange} />
                    <Button variant="primary" type="button" onClick={handleClick}>search</Button>
                    
                    

                    {/* <div>{posts}</div> */}
                    {/* <div>{posts["meals"].map(post => <div>{post.idMeal}</div>)}</div> */}
                    {/* <div>{posts.meals.map((meal)=><div>{meal.idMeal}</div>)}</div> */}

                    
                
                </label>
            </Jumbotron>
        </Container>
        
        {/* <div>
            <ul>
                {posts.map((item, i) => {
                return <li key={i}>{item.strMeal}</li>
                })}
            </ul>
        </div> */}
        <Container>
            <Row>
        {posts.map((item, i) => {
        return(<Col md="3"><Card  style={{ width: '100%', marginBottom:'20px'}}>
            <Card.Img variant="top" src={item.strMealThumb} />
                <Card.Body>
                    <Card.Title>{item.strMeal}</Card.Title>
                    <Card.Text>
                    {item.strMeal}
                    </Card.Text>
                    <Button variant="primary">{item.strCategory}</Button>
                </Card.Body>
            </Card>
            </Col>)
             })}
            </Row>
        </Container>
       
    </div>
    );
};

SearchFuncComponent.propTypes = {};

export default SearchFuncComponent;