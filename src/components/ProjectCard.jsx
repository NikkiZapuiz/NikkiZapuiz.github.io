import { Link } from "react-router-dom";


function ProjectCard(props) {
    const { imageSrc, title, description, technologies, demoLink, githubLink } = props;

    return (
        <>
            <div className="project-card">
                <img className="shadow" src={imageSrc} alt={title} style={{width: "100%", borderRadius: "5px"}}/>
                <h3 className="mt-5">{title}</h3>
                <p>{description}</p>
                <p>Technologies: {technologies}</p>
            </div>
            <div className=" d-flex justify-content-center mt-5">
                <div className="d-flex justify-content-between w-25">
                    <Link to={demoLink} target="_blank" rel="noopener noreferrer" style={{color: "black", textDecoration: "none"}}>
                        <i className="fa-solid fa-arrow-up-right-from-square" style={{color: "#050505"}}>Live Demo</i>
                    </Link>
                    <Link to={githubLink} target="_blank" rel="noopener noreferrer" style={{color: "black", textDecoration: "none"}}>
                        <i className="fa-solid fa-code">Code</i>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default ProjectCard;
