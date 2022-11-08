import React, {useState} from "react";
import Picture from "./Picture";
import NavDropdown from "react-bootstrap/NavDropdown";
import ProjectList from "./ProjectList";

const ProjectCard = ({ backEndData, searchTerm }) => {

    const [data, setData] = useState(backEndData.data);

    const card = data.map( project => {
        return (
            <div>
                <div className={'container d-flex'}>
                    <div className={"container project-img-div d-flex"}>
                        <Picture link={project.image.link}/>
                    </div>
                    <div className={'container project-info'}>
                        <ProjectList
                            project={project}
                            groups={project.groups}
                            searchTerm={searchTerm}
                        />
                        {/*<div className={'project-details'}>*/}
                        {/*    <ul className={'list'}>*/}
                        {/*        <NavDropdown.Item className={'.nav-item'}>*/}
                        {/*            <li className={'list-item'} key={project.id}>*/}
                        {/*               <ProjectList*/}
                        {/*                   backEndData={backEndData}*/}
                        {/*                   searchTerm={searchTerm}*/}
                        {/*               />*/}
                        {/*            </li>*/}
                        {/*        </NavDropdown.Item>*/}
                        {/*        /!*{project.groups.map(function (item) {*!/*/}
                        {/*        /!*    return (*!/*/}
                        {/*        /!*        <NavDropdown.Item href={'#'} className={'nav-item'}>*!/*/}
                        {/*        /!*            <li className={'list-item'} key={item.id}>*!/*/}
                        {/*        /!*                {item.name}*!/*/}
                        {/*        /!*            </li>*!/*/}
                        {/*        /!*        </NavDropdown.Item>*!/*/}
                        {/*        /!*    )*!/*/}
                        {/*        /!*})}*!/*/}
                        {/*    </ul>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        );

    })
    return card

}

export default ProjectCard;