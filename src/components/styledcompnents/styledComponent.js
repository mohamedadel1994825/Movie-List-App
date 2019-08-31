import styled from 'styled-components';
export const Nav =styled.div`
display: flex;
align-items: center;
justify-content: center;
width:${props=>props.width||'100px'};
height:${props=>props.height||'100px'};
background-color:${props=>props.backGColor||'green'};
padding:10px ;
`;
export const Container =styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width:${props=>props.width||'100px'};
height:${props=>props.height||'100px'};
background-color:${props=>props.backGColor||'green'};
`;
export const MovieInfo =styled.div`
display: flex;
align-items: center;
justify-content: center;
width:${props=>props.width||'100px'};
height:${props=>props.height||'100px'};
background-color:${props=>props.backGColor||'green'};

`;
export const MovieLogos =styled.div`
display: flex;
justify-content:space-evenly;
align-items: center;
width:${props=>props.width||'100px'};
height:${props=>props.height||'100px'};
background-color:${props=>props.backGColor||'green'};
flex-wrap:wrap
`;
export const MovieInfoText =styled.text`
color:${props=>props.color||'green'};
font-size:${props=>props.fontSize||'30px'};
word-spacing:0px;
width:${props=>props.width||'100px'};
text-align:center
`;
export const Searchform=styled.div`
display: flex;
align-items: center;
justify-content: center;
width:${props=>props.width||'500px'};
height:${props=>props.height||'100px'};
background-color:${props=>props.backGColor||'green'};
flex-wrap:wrap
`
export const SearchContainer =styled.div`
display: flex;
align-items:center;
justify-content: space-evenly;
width:${props=>props.width||'100px'};
height:${props=>props.height||'100px'};
background-color:${props=>props.backGColor||'green'};
flex-direction:column
`;
export const SearchIconDiv =styled.div`
display: flex;
align-items:center;
justify-content: center;
width:${props=>props.width||'100px'};
height:${props=>props.height||'100px'};
background-color:${props=>props.backGColor||'green'};
`;
export const ButtonDiv =styled.div`
display: flex;
align-items:center;
justify-content: center;
width:${props=>props.width||'100px'};
height:${props=>props.height||'100px'};
background-color:${props=>props.backGColor||'green'};
`;
export const FormInBut =styled.form`
display: flex;
align-items:center;
justify-content: space-evenly;
width:${props=>props.width||'100px'};
height:${props=>props.height||'100px'};
background-color:${props=>props.backGColor||'green'};
flex-direction:column
`;
export const Moviecard =styled.div`
display: flex;
align-items:center;
justify-content: space-evenly;
width:${props=>props.width||'100px'};
height:${props=>props.height||'100px'};
background-color:${props=>props.backGColor||'green'};
flex-direction:column;
margin:10px
`;