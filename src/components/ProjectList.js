import React, {useEffect, useState} from "react";
import NavDropdown from 'react-bootstrap/NavDropdown';
import './ProjectList.css'


const ProjectList = ({ groups, searchTerm, project } ) => {

    const [groupList, setGroupList] = useState(groups);

    useEffect( ()=> {
        const group = groups.filter(cur => {
                if (searchTerm === '') {
                    return true
                } else {
                    return cur.name.toLowerCase().includes(searchTerm.toLowerCase())
                }
            }
        )
        setGroupList(group);
    },[searchTerm])


    if (groupList.length === 0 ) {
        return <></>
    }

    return (
        <div className={'project-details'}>
            <ul className={'list'}>
                <NavDropdown.Item className={'.nav-item'}>
                    <li className={'list-item'} key={project.id}>
                        {project.name}
                    </li>
                </NavDropdown.Item>

                {groupList.map(groupItem=>{
                    return (
                        <NavDropdown.Item className={'.nav-item'}>
                            <li className={'list-item'} key={groupItem.id}>
                                {groupItem.name}
                            </li>
                        </NavDropdown.Item>
                    )
                })}
            </ul>
        </div>
    );
}

export default ProjectList;