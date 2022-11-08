import React, {useState} from "react";
import ProjectList from "./ProjectList";

const ProjectCard = ({ backEndData, searchTerm }) => {

    const [data, setData] = useState(backEndData.data);

    const card = data.map( project => {
        return (
            <div className={'container'}>
                <ProjectList
                    project={project}
                    groups={project.groups}
                    searchTerm={searchTerm}
                />
            </div>
        );
    })
    return card
}

export default ProjectCard;