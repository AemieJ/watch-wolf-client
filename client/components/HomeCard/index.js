import styleHome from "../../styles/Home.module.css"

function HomeCard ( props ) {
    const {homeCard} = props; 
    const {title, description, link} = homeCard;

    return (
    <>
        <a href={link} className={styleHome.card}>
            <h2>{title} &rarr;</h2>
            <p>{description}</p>
        </a>
    </>);
}

export default HomeCard;