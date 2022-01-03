import * as React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Title } from 'react-admin';
import { useState} from 'react';
import Script from "react-load-script";
import {get_Conf} from '../Config.js'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {resetConf} from "./ConfigurationUI";
import CustomizedAccordions from "./ValH"
import { useDataProvider } from 'react-admin';

import {
  BrowserRouter as Router,
  Link,
  useLocation
} from "react-router-dom";

function useQuery() {
    const { search } = useLocation();
  
    return React.useMemo(() => new URLSearchParams(search), [search]);
}

const styles = {
    home: {fontFamily : '"Roboto", "Helvetica", "Arial", sans-serif'},
};
//import universal from 'react-universal-component'

//const UniversalComponent = universal(props => import(`https://automat-c2.rccu-brussels.lan/imager/comp.js`))

const Content = () => <div >
    <h2>APILogicServer</h2>
    <p>
        Creates API endpoints exposing database tables and relationships.
        <br/>
        Provides a ReactJS frontend that connects to the API.
        <br/><br/>
        This stack is easily extendible:
        <br/>
        <ul>
        <li>Business logic can be implemented using</li>
        <ul>
            <li>Python database logic rule engine (constraint enforcement, triggers, multi-table derivations)</li>
            <li>Custom API hooks and endpoints</li>
        </ul>
        <li>Custom ReactJS components can be added to the webapp</li>
        </ul>
    </p>
</div>

const Demo = ({ready, config}) => {

    const [content, setContent] = useState(false);
    if (ready && content === false && window.getContent) {
        setContent(window.getContent(config))
    }
    return content ? <div dangerouslySetInnerHTML={{__html: content }} /> : <Content/>
}

const Home = (props) => {
    document.title = ""
    const { classes } = props;
    const config = get_Conf()
    const [scriptLoaded, setScriptLoaded] = useState(false);
    const [initialized, setInitialized] = useState(false)
    const [resourcesLoaded, setResourcesLoaded] = useState([])
    const dataProvider = useDataProvider();
	let query = useQuery();

    for(let [resource_name, resource] of Object.entries(config.resources)){
        console.log(`prefetch ${resource_name}`)
        dataProvider.getList(resource.name, 
            {
                pagination: { page: 1, perPage: resource.perPage || 25 },
                sort: { field: resource.sort?.field , order: resource.sort?.order || 'ASC' },
                filter : {}
            })
            .then(()=>{
            resourcesLoaded.push(resource.name)
            setResourcesLoaded(resourcesLoaded)
        })
    }
    if(query.get("content")){
        return <CustomizedAccordions/>
    }
    if(!initialized && !config.settings){
        resetConf()
        setInitialized(true)
    }
    const init = config.settings ? null : <Link to={{ pathname: "/configuration" }}>
                                            <Button variant="contained" color="link"> Initialize Configuration</Button>
                                        </Link>
    
    return <Card>
            <Title title="Home" />
            <CardContent>
                    <Script
                        url={config.settings?.HomeJS}
                        onError={(e) => {setScriptLoaded(true);console.error(e)}}
                        onLoad={()=>setScriptLoaded(true)}
                    />
                    <span className={classes.home}>
                        <Demo  ready={scriptLoaded} config={config}/>
                    </span>
                    {init}

            </CardContent>
            </Card>
}

export default withStyles(styles)(Home);
