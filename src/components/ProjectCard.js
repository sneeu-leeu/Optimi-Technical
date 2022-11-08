import React, {useState} from "react";
import Picture from "./Picture";
import NavDropdown from "react-bootstrap/NavDropdown";

const ProjectCard = ({ backEndData }) => {

    const [data, setData] = useState(backEndData.data);

    const card = data.map( project => {
        return (
            <div>
                <div className={'container d-flex'}>
                    <div className={"container project-img-div d-flex"}>
                        <Picture link={project.image.link}/>
                    </div>
                    <div className={'container project-info'}>
                        <div className={'project-details'}>
                            <ul className={'list'}>
                                <NavDropdown.Item className={'.nav-item'}>
                                    <li className={'list-item'} key={project.id}>
                                        {project.name}
                                    </li>
                                </NavDropdown.Item>
                                {project.groups.map(function (item) {
                                    return (
                                        <NavDropdown.Item href={'#'} className={'nav-item'}>
                                            <li className={'list-item'} key={item.id}>
                                                {item.name}
                                            </li>
                                        </NavDropdown.Item>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )

    });

    return card
}

export default ProjectCard;