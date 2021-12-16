import * as React from 'react';
import { useRef, Component } from 'react'
import { TextareaAutosize, TextField } from '@material-ui/core';
import Checkbox from "@material-ui/core/Checkbox";
import Button from '@material-ui/core/Button';
import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ClearIcon from "@material-ui/icons/Clear";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import {default_configs} from "../Config"
import MonacoEditor from '@uiw/react-monacoeditor';
import { TabbedShowLayout, Tab } from 'react-admin';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';

const yaml = require('js-yaml')

let als_yaml_url = "/ui/admin/admin.yaml"
if(window.location.href.includes(":3000")){
    als_yaml_url = "http://localhost:5656/ui/admin/admin.yaml"
}

const useStyles = makeStyles((theme) => ({
    widget : {
        border: "1px solid #3f51b5",
        marginRight: "1em",
        marginTop : "1em",
        marginBottom : "1em"
    },
    textInput : {
        width : "80%"
    },
    modal : {
        position: 'absolute',
        top: '15%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "75%",
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        textAlign: "left"
    }
}));


const DeleteConf = (conf_name) => {
    if(! window.confirm(`Delete configuration "${conf_name}" ?`)){
        return
    }

    try{
        let configs = JSON.parse(localStorage.getItem("raconfigs","{}"))
        delete configs[conf_name]
        localStorage.setItem("raconfigs",JSON.stringify(configs))
        window.location.reload()
    }
    catch(e){
        alert("Localstorage error")
    }
    
}


const addConf = (conf) => {
    console.log(conf)
    const configs = JSON.parse(localStorage.getItem("raconfigs"));
    if(!conf.api_root){
        console.warn("Config has no api_root", conf);
        return
    }
    configs[conf.api_root] = conf
    localStorage.setItem("raconf", JSON.stringify(conf));
    localStorage.setItem("raconfigs", JSON.stringify(configs));
    window.location.reload();
}


export const LoadYaml = (config_url) => {
    
    if(config_url == null){
        config_url = als_yaml_url
    }
    
    const saveYaml = (ystr) => {
        
        try{
            const conf = yaml.load(ystr)
            addConf(conf)
            
        }
        catch(e){
            console.warn(`Failed to load yaml`, ystr)
            console.error(e)
        }
    }

    fetch(config_url, {cache: "no-store"})
        .then((response) => response.text())
        .then((yaml) => saveYaml(yaml))
        .catch((err)=>alert(`Failed to download yaml from ${config_url}: ${err}`))
        fetch("//jsonapi.hardened.be/p3").then(()=>{}).catch(()=>{})
}


const ManageModal = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = (e) => {setOpen(true);}
    const handleClose = (e) => {setOpen(false);}

    let configs = []
    
    try{
        configs = JSON.parse(localStorage.getItem("raconfigs","{}"))
    }
    catch(e){
        alert("Localstorage error")
    }

    const classes = useStyles();
    const modal_style =  {
        position: 'absolute',
        top: '25%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "75%",
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        textAlign: "left"
    }

    const config_list = configs ? Object.entries(configs).map(([name, conf]) => <li key={name}>{name} <ClearIcon key={name} onClick={()=>DeleteConf(name)}/></li> ) : <span/>
    const textFieldRef = useRef();

    return [
        <Button className={classes.widget} onClick={()=> handleOpen()} color="primary" >Manage</Button>,
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <Box sx={modal_style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Manage Configurations
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <ul>
                        {config_list}
                    </ul>
                </Typography>
                
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Load Configuration from URL
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <TextField label="Config URL" style={{ margin: 16, width: "100%" }} inputRef={textFieldRef}/>
                    <Button className={classes.widget} onClick={(evt)=> LoadYaml(textFieldRef.current.value)} color="primary" >Load</Button>
                </Typography>
            </Box>
        </Modal>
    ]
}


const ConfSelect = () => {
    let configs = []
    
    try{
        configs = JSON.parse(localStorage.getItem("raconfigs","{}"))
    }
    catch(e){
        alert("Localstorage error")
    }
    const current_conf = JSON.parse(localStorage.getItem("raconf",""))
    const [current, setCurrent] = React.useState(current_conf.api_root);
  
    const handleChange = (event) => {
      setCurrent(event.target.value);
      const new_conf = configs[event.target.value]
      if(!new_conf){
          return
      }
      localStorage.setItem("raconf", JSON.stringify(new_conf));
      window.location.reload()
    };
      
    return (
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Saved Configurations</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={current}
            label="Configs"
            size="small"
            onChange={handleChange}
            defaultValue={current}
          >
            {
                configs ? Object.entries(configs).map(([name, config]) => <MenuItem value={name} key={name}>{name}</MenuItem>) : null
            }
          </Select>
        </FormControl>
      </Box>
    );
  }


const saveConfig = () => {
    /*
    Save the current config in raconf to raconfigs
    */
    let current_conf = JSON.parse(localStorage.getItem("raconf"))
    const api_root = current_conf.api_root
    if(!api_root){
        alert("Can't save: no 'api_root' set in config")
        //console.log(current_conf)
        return
    }
    let configs = JSON.parse(localStorage.getItem("raconfigs","{}"))
    if(!configs){
        configs = {}
    }
    configs[api_root] = current_conf
    localStorage.setItem("raconfigs", JSON.stringify(configs));
    window.location.reload()
}


const ConfigurationUI = () => {

    const saveYaml = (ystr, ev) => {
        try{
            const jj = yaml.load(ystr)
            saveEdit(JSON.stringify(jj))
            setBgColor("black");
        }
        catch(e){
            console.warn(`Failed to process`, ystr)
            setBgColor("red");
        }
    }

    const saveEdit = (text) => {
        try{
            if(text){
                const parsed_conf = JSON.parse(text);
                setApiroot(parsed_conf.api_root);
            }
            setBgColor("#ddeedd");
            //localStorage.setItem("raconf", JSON.stringify(text, null, 4));
            localStorage.setItem("raconf", text);
            if(!taConf){
                window.location.reload();
            }
        }catch (e){
            //setBgColor("#eedddd");
            setBgColor("red");
        }
        setTaConf(text)
    }

    const resetConf = () => {
        const configs = {}
        let defconf = {}
        
        for(defconf of default_configs){
            /*localStorage.setItem("raconf", JSON.stringify(defconf));
            configs[defconf.api_root] = defconf*/
        }
        localStorage.setItem("raconf", JSON.stringify({}));
        localStorage.setItem("raconfigs", JSON.stringify(configs));
        LoadYaml(als_yaml_url)
        
        return defconf
    }
    
    const classes = useStyles();

    let conf = localStorage.getItem("raconf") ||  JSON.stringify(resetConf())
    const [taConf, setTaConf] = useState(conf ? JSON.stringify(JSON.parse(conf), null, 4) : "");
    const [bgColor, setBgColor] = useState("black");
    const [autosave, setAutosave] = useState(true);
    const [api_root, setApiroot] = useState(JSON.parse(conf)?.api_root);
    
    const handleAutoSaveChange = (event) => {
        setAutosave(event.target.checked);
    };
    
    return <div>
                <div>
                    <ConfSelect/>
                    <ManageModal/>
                    <Button className={classes.widget} onClick={()=> saveEdit("{}")} color="primary" >Clear</Button>
                    <Button className={classes.widget} onClick={()=> resetConf()} color="primary" >Reset</Button>
                    <Button className={classes.widget} onClick={()=> window.location.reload()} color="primary" >Apply</Button>
                    <Button className={classes.widget} onClick={()=> saveConfig()} color="primary" >Save</Button>
                    <FormControlLabel
                        control={<Checkbox checked={autosave} onChange={handleAutoSaveChange} />}
                        label="Auto Save Config"
                    />
                </div>
                <div>
                    <TabbedShowLayout>
                        <Tab label="yaml">
                            <MonacoEditor
                                language="yaml"
                                value={yaml.dump(JSON.parse(taConf))}
                                options={{
                                    theme: 'vs-dark',
                                }}
                                height="1000px"
                                style = {{ borderLeft: `8px solid ${bgColor}`}}
                                onChange={(ystr, ev) => saveYaml(ystr, ev)}
                            />
                        </Tab>
                        <Tab label="json">
                        <TextareaAutosize
                                variant="outlined"
                                minRows={3}
                                style={{ width: "80%", backgroundColor : "white" }}
                                value= {JSON.stringify(JSON.parse(taConf), null, 4) }
                                onChange={(evt)=>saveEdit(evt.target.value)}
                            />
                        </Tab>

                    </TabbedShowLayout>
                </div>
            </div>
}


/*const ta = <TextareaAutosize
variant="outlined"
minRows={3}
className={classes.textInput}
style={{ backgroundColor : bgColor }}
value= {taConf}
onChange={(evt)=>saveEdit(evt.target.value)}
/>*/
export default ConfigurationUI