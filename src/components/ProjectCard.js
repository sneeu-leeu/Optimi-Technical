import React, {useState} from "react";
import Picture from "./Picture";
import ProjectList from "./ProjectList";

const ProjectCard = ({ backEndData, searchTerm }) => {

    const [data, setData] = useState(backEndData.data);

    // object create that looks like the map object

    // create group {}


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
                            // render={setRenderedList}
                        />
                    </div>
                </div>
            </div>
        );

    })

    return card

}

export default ProjectCard;