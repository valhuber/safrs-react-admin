import React from "react";

import { useState, useEffect, useMemo} from 'react';
import { List,
    Datagrid,
    TextField,
    EditButton,
    ShowButton
} from "react-admin";
import Grid from '@material-ui/core/Grid';
import { Resource, TabbedShowLayout, Tab } from 'react-admin';
import {
  Edit,
  Create,
  Show,
  SimpleForm,
  TextInput,
  SimpleShowLayout,
  TabbedShowLayoutTabs,
  ReferenceManyField,
  useRecordContext,
  Link
} from "react-admin";
import { Typography } from '@material-ui/core';
import { useRefresh } from 'react-admin';
import { useDataProvider } from 'react-admin';
import { FunctionField } from 'react-admin';
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import {get_Conf} from './Config.js'
import loadable from '@loadable/component'
import Popover from '@material-ui/core/Popover';
import Button from '@material-ui/core/Button';
import JoinModal from './components/JoinModal'
import { AutocompleteInput, ReferenceInput } from 'react-admin';
import { Pagination } from 'react-admin';
import './style/DynStyle.css'
import { useQueryWithStore, Loading, Error } from 'react-admin';
import { useNotify, useRedirect } from 'react-admin';

//import {ExtComp} from './components/ExtComp';

const conf = get_Conf();

const searchFilters = [
    <TextInput source="q" label="Search" alwaysOn />
];


const type2resource = (type) => {
    for(let [resource_name, resource] of Object.entries(conf?.resources)){
        if(resource.type === type){
            return resource_name
        }
    }
    console.warn(`No resource for type "${type}`)
    return conf[type]
}


const ColumnField = ({column}) => {
    
    const component = column.component // component name to be loaded
    const style = column.style || {}
        
    const default_comp = <TextField source={column.name} key={column.name} style={style} />
    if(!component){
        return default_comp
    }
    // component is specified => render the specified component
    try{
        //const Component = loadable(() => import(`./components/Custom.js`), {
        const Component = loadable(() => import(`./components/Custom.js`), {
                resolveComponent: (components) => components[component],
        })
        return <Component column={column}/>
    }
    catch(e){
        alert("Custom component error")
        console.error("Custom component error", e)
    }
    return default_comp
}


const load_custom_component = (component_name, item) => {

    try{
        const LabelComponent = loadable(() => import(`./components/Custom.js`), {
            resolveComponent: (components) => components[`${component_name}`],
        })
        return <LabelComponent instance={item} />
    }
    catch(e){
        alert("Custom component error")
        console.error("Custom component error", e)
    }
    return null
}


const JoinedField = ({column, join}) => {
    const record = useRecordContext();
    if(record?.attributes){
        Object.assign(record, record.attributes)
    }
    const rel_name = join.name;
    const target_resource = join.target
    
    const fk = join.fks[0]
    const user_key = conf.resources[join.target]?.user_key
    
    const { data, loading, error } = useQueryWithStore({ 
        type: 'getOne',
        resource: target_resource,
        payload: { id: record ? record[fk] : null }
    });

    if(!record){
        return null
    }
    let item = data || record[rel_name]
    
    const user_component = conf.resources[join.target]?.user_component
    let label = item?.id
    
    if(item && user_component){
        // user_component: custom component
        label = load_custom_component(user_component, item)
    }
    else if(item?.attributes && user_key){
        const target_col = column.relationship.target_resource.columns.filter((col) => col.name == user_key)
        label = <span>{item.attributes[user_key] || item.id}</span>
    }
    
    const content = <RelatedInstance instance={item} resource_name={join.target}/>
    return <JoinModal label={label} key={column.name} content={content} resource_name={join.target}/>
}


const column_fields = (columns, relationships) => {

    if(!relationships){
        return []
    }
    const joins = relationships.filter(rel => rel.direction === "toone")
    const fields = columns.map((column) => {

        if (column.hidden){
            return null;
        }
        for(let join of joins){
            // check if the column is a (toone) relationship FK
            for(let fk of join.fks){
                if(column.name == fk){
                    return <JoinedField key={column.name} column={column} join={join} label={column.label? column.label: column.name}/>
                }
            }
        }
        return <ColumnField key={column.name} column={column} label={column.label? column.label: column.name} style={column.header_style} />
        }
    )
    return fields
}


const DynPagination = (props) => (
    <Pagination rowsPerPageOptions={[10, 25, 50, 100]}
                perPage={props.perPage || 25 }
                {...props} />
);


export const gen_DynResourceList = (resource) => (props) => {

    const ButtonField = (props) => {
        const dataProvider = useDataProvider();
        const refresh = useRefresh();
        const buttons = [
            resource.edit !== false ? <EditButton title="Edit" key={resource.name} label={""} {...props} /> : null,
            resource.delete !== false ? <FunctionField title="Delete"
                    onClick={(e)=> {e.stopPropagation()}}
                    key={resource.name}
                    render={record => <Button> <DeleteIcon style={{fill: "#3f51b5"}} onClick={(item)=>deleteField(dataProvider, props.resource, record, refresh)}/> </Button>}
                    {...props} /> : null,
            <ShowButton title="Show" label="" {...props} />
        ]
        return buttons
    }
    
    const columns = resource.columns
    const relationships = resource.relationships
    const fields = column_fields(columns, relationships);
    
    
    const EditPanel = props => {
        return <div><pre>{JSON.stringify(props, null, 4)}</pre></div>
    }

    return <List filters={searchFilters}
                pagination={<DynPagination perPage={resource.perPage}/>}
                sort={resource.sort || ""}
                {...props} >
                <Datagrid rowClick="show" expand={<EditPanel />}>
                    {fields}
                    <ButtonField resource={resource} {...props} />
                </Datagrid>
            </List>
};


export const gen_DynResourceEdit = (resource) => {
    
    const columns = resource.columns;
    
    const Result = (props) => {
        const notify = useNotify();
        const refresh = useRefresh();
        const redirect = useRedirect();

        const onFailure = (error) => {
            redirect('edit', props.basePath, props.id);
            refresh();
        }
    
        return <Edit {...props} onFailure={onFailure}>
            <SimpleForm>
                {columns.map((col) => <DynInput column={col} key={col.name}/> )}
            </SimpleForm>
        </Edit>
    }
    return Result;
}


const deleteField = (dataProvider, resource, record, refresh) => {

    console.log('Delete', record)
    dataProvider.delete(resource, record).then(()=>{
        refresh();
        }
    ).catch((e)=> alert('error'))
}


const DynInput = ({column, resource}) => {

    if(column.relationship?.direction == "toone" && column.relationship.target){
        const search_cols = conf.resources[column.relationship.target].search_cols
        let input =  <AutocompleteInput optionText={''} key={column.name}/>
        if(!search_cols){
            console.error("no searchable columns configured");
        }
        else if(search_cols.length == 0){
            console.warn(`no searchable columns configured for ${column.relationship.target}`);
        }
        else {
            input = <AutocompleteInput optionText={search_cols[0].name} key={column.name}/>
        }
        return <ReferenceInput source={column.name} label={`${column.relationship.name} (${column.name})`} reference={column.relationship.target}>
                    {input}
                </ReferenceInput>
    }
    return <TextInput source={column.name}/>
}


export const gen_DynResourceCreate = (resource) => (props) => {

    return <Create {...props}>
        <SimpleForm>
            {resource.columns.map((col) => <DynInput column={col} resource={resource} key={col.name}/> )}
        </SimpleForm>
    </Create >
};


const ResourceTitle = ({ record }) => {

    return <span>{record ? `${record.type ? record.type +" " : ""} #${record.id} ` : ''}</span>;
};


const ShowRecordField = ({ source }) => {
  const record = useRecordContext();
  return record ? <ShowField label={source} value={record[source]}/> : null
};


const ShowField = ({ label, value }) => {
    
    return (
      <Grid item xs={3}>
        <Typography variant="body2" color="textSecondary" component="p">
          {label}
        </Typography>
        <Typography variant="body2" component="p">
          {value}
        </Typography>
      </Grid>
    )
  };
  

const DynRelationshipOne = (resource, id, relationship) => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [related, setRelated] = useState(false);
    const dataProvider = useDataProvider();
    
    useEffect(() => {
        dataProvider.getOne(resource, { id: id })
            .then(({ data }) => {
                return { rel_resource: data[relationship.target]?.data.type, rel_id: data[relationship.target]?.data.id }
            })
            .then(({rel_resource, rel_id}) => {
                dataProvider.getOne(rel_resource, { id: rel_id }).then(({data}) =>
                {console.log(data)
                    return setRelated(data)
                }
                )
                .then(()=>console.log(related))
                setLoading(false);
                
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            })
    }, []);
    
    return <Tab label={relationship.name} key={relationship.name}>
               <RelatedInstance instance={related} />
            </Tab>
}

const DynRelationshipMany = (resource, id, relationship) => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [related, setRelated] = useState(false);
    const dataProvider = useDataProvider();

    useEffect(() => {
        dataProvider.getOne(resource, { id: id })
            .then(({ data }) => {
                setRelated(data.relationships);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            })
    }, []);

    const target_resource = conf.resources[relationship.target]
    if(!target_resource){
        console.warn(`${resource}: No resource conf for ${target_resource}`)
        return <span></span>
    }

    if(!target_resource?.columns){
        console.log("No target resource columns")
        return <div/>
    }

    // ignore relationships pointing back to the parent resource
    const columns = target_resource.columns.filter(col => col.relationship?.target !== resource)
    const relationships = target_resource?.relationships
    const fields = column_fields(columns, relationships);
    relationship.source = resource
    
    const fk = relationship.fks[0]
    
    return <Tab label={relationship.name} key={relationship.name}>
                    <ReferenceManyField reference={relationship.target} target={fk} addLabel={false} pagination={<DynPagination perPage={10}/>}  >
                        <Datagrid rowClick="show">
                            {fields}
                            <EditButton />
                        </Datagrid>
                    </ReferenceManyField>            
            </Tab>
}


const ShowInstance = ({columns, relationships, resource_name, id}) => {

    const title = <Typography variant="h5" component="h5" style={{ margin: "30px 0px 30px" }}>
                        {resource_name}<i style={{color: "#ccc"}}> #{id}</i>
                   </Typography>

    return <SimpleShowLayout>
                {title}
                <Grid container spacing={3} margin={5} m={40}>
                    {columns.map((col) => <ShowRecordField source={col.name}/> )}
                </Grid>
                
                <hr style={{ margin: "30px 0px 30px" }}/>

                <TabbedShowLayout tabs={<TabbedShowLayoutTabs variant="scrollable" scrollButtons="auto" />}>
                    {relationships.map((rel) => rel.direction === "tomany" ?  // <> "toone"
                        DynRelationshipMany(resource_name, id, rel) : 
                        DynRelationshipOne(resource_name, id, rel)) }
                </TabbedShowLayout>

            </SimpleShowLayout>
}


const RelatedInstance = ({instance}) => {

    const resource_name = type2resource(instance?.type)
    if (!instance || ! resource_name){
        return <span></span>;
    }
    
    const resource_conf = conf.resources[resource_name]
    const columns = resource_conf?.columns || [];
    const relationships = resource_conf?.relationships || [];
    
    // ugly manual styling because adding to TabbedShowLayout didn't work
    const result = <div style={{left: "-16px", position: "relative"}}> 
                    
                        <div style={{textAlign:"right", width:"100%"}} >
                            <Button
                                title="edit"
                                component={Link}
                                to={{
                                    pathname: `${resource_name}/${instance.id}`
                                    }}
                                label="Link"><EditIcon />Edit
                            </Button>
                            <Button
                                title="view"
                                component={Link}
                                to={{
                                    pathname: `/${resource_name}/${instance.id}/show`
                                    }}
                                label="Link"><KeyboardArrowRightIcon />View
                            </Button>
                        </div>
                        <Grid container title="qsd">
                                {columns.map((col) => <ShowField label={col.name} key={col.name} value={instance.attributes[col.name]}/> )}
                        </Grid>
                    </div>

    
    return result;
}


export const gen_DynResourceShow = (resource_conf) => (props) => {

    const columns = resource_conf.columns
    const relationships= resource_conf.relationships

    return <Show title={<ResourceTitle />} {...props}>
                <ShowInstance columns={columns} relationships={relationships} resource_name={props.resource} id={props.id}/>
            </Show>
}

export const DynResource = (props) => {
    window.addEventListener("storage", ()=>window.location.reload())
    const [, updateState] = React.useState();
    const [resource_conf, setConf] = useState(conf.resources[props.name])
    const List= useMemo(()=> gen_DynResourceList(resource_conf), [resource_conf])
    const Create = useMemo(()=> gen_DynResourceCreate(resource_conf), [resource_conf])
    const Edit = useMemo(()=> gen_DynResourceEdit(resource_conf), [resource_conf])
    const Show = useMemo(()=> gen_DynResourceShow(resource_conf), [resource_conf])
    return <Resource key={props.name} {...props} list={List} edit={Edit} create={Create} show={Show} />
}

