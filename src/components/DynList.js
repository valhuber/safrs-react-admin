import React from "react";
import { Typography } from '@material-ui/core';
import { 
    Datagrid,
    TextField,
    DateField,
    EditButton,
    ShowButton,
    List,
    TextInput,
    useDataProvider,
    useRefresh,
    useRecordContext,
    Confirm,
    FunctionField
} from "react-admin";
import Button from '@material-ui/core/Button';
import { useState, useEffect, useMemo} from 'react';
import { attr_fields } from "./DynFields.js";
import { DynPagination } from "../util.js";
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from "@material-ui/icons/Delete";
import { DetailPanel } from "./DynInstance.js";
import { ListActions as RAListActions, FilterButton, TopToolbar, CreateButton, ExportButton } from 'react-admin';
import {InfoPopover} from '../util'
import { Modal, Box  } from "@material-ui/core";
import InfoModal from "./InfoModal.js";
import get_Component from '../get_Component.js';

const useStyles = makeStyles({
    icon : {color: '#ccc',
            '&:hover' : {color: '#3f51b5'}
            },
    delete_icon : {color: '#3f51b5'}
});

const searchFilters = [
    <TextInput source="q" label="Search" alwaysOn />
];

const deleteField = (dataProvider, resource, record, refresh) => {
    /*
        resource: name of the resource
    */
    dataProvider.delete(resource, record)
        .then(()=>refresh())
        .catch((e)=> alert('error'))
}


const DeleteButton = (props) => {

    const [open, setOpen] = useState(false);
    const dataProvider = useDataProvider();
    const refresh = useRefresh();
    const record = useRecordContext();
    const classes = useStyles();
    
    return <span>
            <FunctionField title="Delete"
                onClick={(e)=> {setOpen(true); e.stopPropagation()}}
                key={`${props.resource.name}_delete`}
                render={record => <Button> 
                                    <DeleteIcon className={classes.delete_icon} />
                                </Button>}
                {...props} />
            <Confirm
                    isOpen={open}
                    title={`Delete "${props.resource}, id ${record.id}"`}
                    content={`Are you sure you want to delete this record?`}
                    onConfirm={() => {deleteField(dataProvider, props.resource, record, refresh);setOpen(false)}}
                    onClose={()=>{setOpen(false);}}
                />
            </span>
}


const ListActions = ({resource}) => {
    
    
    return <TopToolbar>
                <FilterButton/>
                <InfoModal resource={resource} mode="list"/>
                <CreateButton/>
                <ExportButton/>                
            </TopToolbar>
}


const gen_DynResourceList = (resource) => (props) => {

    const ButtonField = (props) => {
        let filtered_props = {}
        for(let [k, v] of Object.entries(props)){
            //filtered_props[k] = v
            // filter "hasCreate" etc, this causes console warnings
            //if(! k.startsWith('has') && ! k == "syncWithLocation"){
            if(! k.startsWith('has')){
                filtered_props[k] = v
            }
        }
        const buttons = <span>
                {resource.edit !== false ? <EditButton title="Edit" key={`${resource.name}_edit`} label={""} {...filtered_props} /> : null}
                {resource.delete !== false ? <DeleteButton {...filtered_props} /> : null}
                <ShowButton title="Show" label="" {...filtered_props} />
            </span>
        return buttons
    }

    const ListTitle = (props) => <>{resource.name} List</>
    const attributes = resource.attributes
    const fields = attr_fields(attributes, "list");
    const col_nr = resource.max_list_columns
    const sort = resource.sort_attr_names ? resource.sort_attr_names[0] : ""
    
    document.title = resource.label || resource.name
    
    let list = <List filters={searchFilters} perPage={resource.perPage || 25}
                actions={<ListActions resource={resource}/>}
                pagination={<DynPagination/>}
                sort={{field: sort, order: 'ASC'}}
                title={<ListTitle/>}
                {...props} >
                <Datagrid rowClick="show" expand={<DetailPanel attributes={attributes} />}>
                    {fields.slice(0, col_nr)}
                    <ButtonField resource={resource} {...props} />
                </Datagrid>
            </List>
    
    if(resource.components?.list){
        const Wrapper = get_Component(resource.components?.list)
        list = <Wrapper list={list} />
    }

    return list
}

export default gen_DynResourceList