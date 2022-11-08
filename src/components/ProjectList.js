import React, {useState} from "react";
import NavDropdown from 'react-bootstrap/NavDropdown';

import './ProjectList.css'
import Picture from "./Picture";

const ProjectList = ({backEndData, searchTerm} ) => {

    const elList = backEndData.data.map(m=>{
        const temp = [...m.groups];
        temp.forEach(cur => cur.groupName = m.name );
        temp.push({id:m.id,name:m.name});
        return temp;
    });

    console.log(elList);

    // const [ filteredList, setFilteredList ] = useState(elList);
    //
    // const filter = filteredList.filter(name=> {
    //     if (searchTerm === "") {
    //         return true;
    //     } else {
    //         return name.name.toLowerCase().includes(searchTerm.toLowerCase());
    //     }
    //     setFilteredList(filter);
    // });


    // const listItems = filteredList.map((list) => {
    //     return (
    //         <ul className={'list'}>
    //             <NavDropdown.Item className={'.nav-item'}>
    //                 <li className={'list-item'} key={list.id}>
    //                     {list[5].name}
    //                 </li>
    //             </NavDropdown.Item>
    //             {/*{list.groups.map(function(item){*/}
    //             {/*    return (*/}
    //             {/*        <NavDropdown.Item  href={'#'} className={'nav-item'}>*/}
    //             {/*            <li className={'list-item'} key={item.id} >*/}
    //             {/*                {item.name}*/}
    //             {/*            </li>*/}
    //             {/*        </NavDropdown.Item>*/}
    //             {/*    )*/}
    //             {/*})}*/}
    //         </ul>
    //     );
    // })

    // const renderedList = data.map((project) => {
    //    return (
    //        <div>
    //             <div className={'container d-flex'}>
    //                 <div className={"container project-img-div d-flex"}>
    //                     <Picture link={project.image.link}/>
    //                 </div>
    //                 <div className={'container project-info'}>
    //                     <div className={'project-details'}>
    //                         <ul className={'list'}>
    //                             <NavDropdown.Item className={'.nav-item'}>
    //                                 <li className={'list-item'} key={project.id}>
    //                                     {project.name}
    //                                 </li>
    //                             </NavDropdown.Item>
    //                             {project.groups.map(function(item){
    //                                 return (
    //                                     <NavDropdown.Item  href={'#'} className={'nav-item'}>
    //                                         <li className={'list-item'} key={item.id} >
    //                                             {item.name}
    //                                         </li>
    //                                     </NavDropdown.Item>
    //                                 )
    //                             })}
    //                         </ul>
    //                     </div>
    //                 </div>
    //             </div>
    //        </div>
    //
    //    );
    // })
    // if
    return <h1>elements</h1>
    // return <h1>fun</h1>
}

export default ProjectList;