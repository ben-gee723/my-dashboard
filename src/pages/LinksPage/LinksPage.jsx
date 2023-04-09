import { useState } from 'react';
import { useParams } from "react-router-dom";
import data from '../../data/data.json';

import LinkButtons from "../../components/LinkButtons";
import SearchBar from '../../components/SearchBar';

export default function LinksPage (){
    const { name } = useParams()

    const [allLinks, setAllLinks] = useState(data.links)    
    
    let title = name ? navlinks.filter(a => a.path == name)[0].name: null;
    let filteredLinks = name ? allLinks.filter(a => a.category === name): null;

    return(
        <div className="page">
            <h1> {title ? title: "All App Links"} </h1>
            <SearchBar setAllLinks={setAllLinks} />
            <div className="apps-container">
                <LinkButtons links={filteredLinks !== null ? filteredLinks : allLinks}/>
            </div>
        </div>
    )
}