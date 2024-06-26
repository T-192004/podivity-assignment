import styled from "styled-components";

export const AppContainer = styled.div`
  background-size: cover;
  min-height: 95vh;
  display: flex;
  flex-direction: column;

`
export const NavBar = styled.nav`
  background-size: cover;
  padding: 8px;
  text-align: center;
  background-color: #0FA2E0;
  display: flex;
  flex-direction: row;
  justify-content: center;

`
export const NavHeading = styled.h1`
  color: #F9FCFD;
  font-size: 44px;
  font-family: 'Roboto';
  font-weight: bolder;
`

export const BlogList = styled.ul`
display: flex;
flex-direction: row;
width: 90%;
align-self: center;
list-style:none;
flex-wrap: wrap;
padding: 18px;
li{
  margin: 10px;
  border: #3E3C84 solid 2px;
  border-radius: 6px;
  width: 360px;
  height: 180px;
  padding: 10px;
}
div{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
h1{
  color: ;
  font-size: 24px;
  font-family: 'Roboto';
  font-weight: bold;
}
p1{
  color: #463F3F;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 16px;
  font-style: italic;
}
p{
  color: #9F9C9C;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 14px;
}
button {
  border: none;
  background-color: transparent;
  padding: 3px;
  margin: 4px;
  color: #90C6E8;
}
div2{
  display:flex;
  flex-direction: column;

}

`

export const EmptyContainer = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  h1 {
    color: #030202;
  font-size: 24px;
  font-family: 'Roboto';
  font-weight: 700;
  }
  p{
    color: #1F1919;
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 400;
  }
`
export const BtnContainer = styled.div`
    width:100%;
    display: flex;
    flex-direction: row;
    align-self: flex-end;
    align-items: flex-end;
`
export const HomeBtn = styled.button`
    color: #F4EFEF;
  font-size: 14px;
  align-self: center;
  font-family: 'Roboto';
  font-weight: 400;
  background-color: #418CDF;
  padding: 14px;
  width: 120px;
  border: none;
  height: 30px;
  align-self: flex-end;
  border-radius: 5px; 
  margin: 10px;
`

export const CreateBtn = styled.button`
  color: #F4EFEF;
  font-size: 16px;
  align-self: center;
  font-family: 'Roboto';
  font-weight: 400;
  background-color: #418CDF;
  padding: 8px;
  width: 150px;
  border: none;
  border-radius: 5px; 
  margin: 10px;
`
export const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 60px;
    align-self:center;
    filter: blur(0px);
    background-color: transparent;
    border: solid 2px #418CDF;
    box-shadow: #90C6E8 3px 4px 5px 6px;
    margin: 20px 10px 20px 10px;
    padding: 10px;
    width: 60%;
    border-radius: 7px;
    position: absolute;
    top: 30%;

  h1{
  color: ;
  font-size: 24px;
  font-family: 'Roboto';
  font-weight: bold;
}
p1{
  color: #463F3F;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 16px;
  font-style: italic;
  text-align: right;
}
p{
  color: #9F9C9C;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 14px;
}
button {
    color: #F4EFEF;
  font-size: 16px;
  align-self: center;
  font-family: 'Roboto';
  font-weight: 400;
  background-color: #418CDF;
  padding: 8px;
  width: 180px;
  border: none;
  border-radius: 5px; 
  margin: 10px;
}
`;
export const BlogForm = styled.div`
  background-size: cover; 
  height: 83vh;
  background-repeat: no-repeat;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  background-image: url('https://img.freepik.com/free-vector/blog-concept-illustration-idea-posting-sharing-following_613284-2970.jpg?t=st=1719401506~exp=1719405106~hmac=1d21646316723f6ad1bbddfed8b51e09eeb2902cd6986f7063788a8f6c2d2ac0&w=1480');
  form {
    display: flex;
    flex-direction: column;
    padding: 20px;
    align-self:center;
    filter: blur(0px);
    background-color: transparent;
    border: solid 3px #418CDF;
    box-shadow: #90C6E8 3px 4px 5px 6px;
    margin: 20px 10px 20px 10px;
    padding: 10px;
    width: 50%;
    border-radius: 7px;
  }
  div{
    width: 80%;
    align-self: center;
    display: flex;
    flex-direction: column;
  }
  h1{
    color: #418CDF;
    font-size: 36px;
    font-family: 'Roboto';
    font-weight: 700;
  }
  label {
    margin: 10px 0;
    color: #0E0505;
    font-size: 18px;
    font-family: 'Roboto';
    font-weight: 700;
  }

  input, textarea {
    padding: 10px;
    margin: 5px 0;
    border: solid 2px #B6D8F3;
    border-radius: 4px;
  }

  button {
    padding: 10px;
    margin: 10px 0;
  }
`;
