import React, {useEffect, useState} from "react";
import NavDropdown from 'react-bootstrap/NavDropdown';
import './ProjectList.css'
import Picture from "./Picture";


const ProjectList = ({ groups, searchTerm, project } ) => {

    const [groupList, setGroupList] = useState(groups);

    let projectQuery = new RegExp(searchTerm, "i")

    useEffect( ()=> {
        group()
    }, [searchTerm])

    const group = () => {
        if(searchTerm.length > 0) {
            let newGroupList = groups.filter(group =>
                projectQuery.test(group.name))
            setGroupList(newGroupList)
        } else if (searchTerm.length === 0) {
            setGroupList(groups)
        }
    }

    const header = () => {
        if (groupList.length !== 0) {
            return (
                <li className={'project-header'} key={project.id}>
                    {project.name}
                </li>
            );
        }
    }

    const getHighlightedText = (text, highlight) => {
        const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
        return <span> { parts.map((part, i) =>
            <span key={i} style={part.toLowerCase() === highlight.toLowerCase() ? { backgroundColor: 'yellow' } : {} }>
            { part }
        </span>)
        } </span>;
    }

    if (groupList.length === 0 ) {
        return <></>
    }

    return (
        <div className={'container d-flex'}>
            <div className={"container project-img-div d-flex"}>
                <Picture link={project.image.link} key={project.image.id}/>
            </div>
            <div className={'container project-info'}>
                <div className={'project-details'}>
                    <ul className={'list'}>
                        <NavDropdown.Item className={'.nav-item'}  href={project.url.replace("w", '')}>
                            {header()}
                        </NavDropdown.Item>

                        {groupList.map(groupItem=>{
                            return (
                                <NavDropdown.Item className={'.nav-item'}  href={groupItem.url.replace("w", '')}>
                                    <li className={'list-item'} key={groupItem.id}>
                                        {getHighlightedText(groupItem.name, searchTerm)}
                                    </li>
                                </NavDropdown.Item>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ProjectList;