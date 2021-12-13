import React from 'react';
import { Container, Dropdown, DropdownButton, FormControl, InputGroup } from 'react-bootstrap';
import styles from '../../../assets/css/Search.module.css';

const Search = () => {
    return (
        <Container className='mb-5'>
            <div className='d-flex align-items-center'>
                <DropdownButton
                    id="dropdown-button-dark-example2"
                    menuVariant="dark"
                    title="Categories"
                    className={styles.cat}
                >
                    <Dropdown.Item href="#/action-1" active>
                        Meal Type
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Diet and Health</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Dish Type</Dropdown.Item>
                    <Dropdown.Item href="#/action-4">Ingredient</Dropdown.Item>
                    <Dropdown.Item href="#/action-4">World Cuisine</Dropdown.Item>
                </DropdownButton>
                <InputGroup className={styles.keyword}>
                    <FormControl
                        placeholder="Recipes Keyword"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Text id="basic-addon2" className={styles.btns}><span className={styles.sbtn}>Search</span></InputGroup.Text>
                </InputGroup>
            </div>
        </Container>
    );
};

export default Search;