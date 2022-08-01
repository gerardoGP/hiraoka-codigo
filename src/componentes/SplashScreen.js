import styled from "styled-components";
import { CgSun} from "react-icons/cg";
import { HiMoon } from "react-icons/hi";

const Toggle = styled.button`
    cursor: pointer;
    height: 30px;
    width: 30px;   
    border-radius: 50%;
    border: none;
    background-color: ${props => props.theme.titleColor};
    color: ${props => props.theme.pageBackground};
    &:focus{
        outline: none;
    }
    transition: all .5s ease;
`;

const Page = styled.div`
    display: flex;
    justify-content: end;
    align-items: start;
    height: 100vh;
    width: 100%;
    background-color: ${props => props.theme.pageBackground};
    transition: all .5s ease;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Title = styled.h1`
    color: ${props => props.theme.titleColor};
    transition: all .5s ease;
`;

const TagLine = styled.span`
    color: ${props => props.theme.tagLineColor};
    font-size: 18px;
    transition: all .5s ease;
`;

function Splash(props) {
    function changeTheme() {
        if (props.theme === "light") {
            props.setTheme("dark");
        } else {
            props.setTheme("light");
        }
    };

    const icon = props.theme === "light" ? <HiMoon size={40} /> : <CgSun size={40} />;

    return (
        <Page>
            <Container>
                <Toggle onClick={changeTheme}>
                    {icon}
                </Toggle>
                <Title>Dark Mode</Title>
                <TagLine>Probando Dark Mode</TagLine>
            </Container>
        </Page>
    );
};

export default Splash;