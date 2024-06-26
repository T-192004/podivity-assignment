import {EmptyContainer, CreateBtn} from '../styles/GlobalStyle'
import { Link } from 'react-router-dom'
const EmptyList = () => (
    <EmptyContainer>
        <img className=""
           src="https://img.freepik.com/free-vector/hand-drawn-no-data-concept_52683-127823.jpg?semt=sph" 
           alt="empty list"
        />
        <h1>No Data is Found</h1>
        <p>Sorry, We cannot find any blogs now. Let's Create a new one...</p>
        <Link to="/add-edit-post"><CreateBtn>Create Blog</CreateBtn></Link> 
    </EmptyContainer>
)

export default EmptyList