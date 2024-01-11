import { Button, TextField } from '@mui/material'
import React, {useState, useEffect} from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { POSTAPI } from './common_utilities/service';
import { service_url } from './common_utilities/endpoints';

const itemsList = [
  {
    id:1,
    name: 'Item1',
    description: 'Item Description',
    createdBy:{
      id: 11,
      name: 'Bhumika',
      timestamp: '9/1/2023'
    }
  },
  {
    id:2,
    name: 'Item2',
    description: 'Some Description',
    createdBy:{
      id: 12,
      name: 'Thakur',
      timestamp: '8/1/2023'
    }
  },
  {
    id:3,
    name: 'Item3',
    description: 'This is the description for item 3',
    createdBy:{
      id: 11,
      name: 'Bhumika',
      timestamp: '9/1/2023'
    }
  },
  {
    id:4,
    name: 'Sample',
    description: 'Sample Description',
    createdBy:{
      id: 11,
      name: 'Bhumika',
      timestamp: '9/1/2023'
    }
  },
  {
    id:5,
    name: 'Item5',
    description: 'Some Description',
    createdBy:{
      id: 11,
      name: 'Bhumika',
      timestamp: '9/1/2023'
    }
  },
  {
    id:6,
    name: 'Item6',
    description: 'This is the description for item 3',
    createdBy:{
      id: 12,
      name: 'Thakur',
      timestamp: '8/1/2023'
    }
  }
]
export default function Order() {
  const [itemData, setItemData] = useState({name: '', description:''});
  const [globalFilterValue, setGlobalFilterValue] = useState('');
  const [items, setItems] = useState([...itemsList]);

  const handleChange = (target) => {
    const data = itemData;
    data[target.name] = target.value;
    setItemData({...data});
  }
  const onFormSubmit = async(e) => {
    e.preventDefault();
    const payload={
      Name: itemData.name,
      Description: itemData.description,
      CreatedBy:'Bhumika',
      CreatedDate: Date.now().toString()
    }
    //setItems([...items, payload]) // call api here
    const addResp = await POSTAPI( service_url.add_item, payload, {});
        if(addResp?.status === 200){
            window.alert("Item Added.")
        } else {
            window.alert("Something went wrong!")
        }
  }

  const onGlobalFilterChange = (e) => {
    setGlobalFilterValue(e.target.value);
  }

  // useEffect(() => {
  //   const delayDebounceFn = setTimeout(() => {
  //     // Make API request to search by filter value and return new items array. Set the response to items array
  //     console.log(globalFilterValue);
  //   }, 500);
  //   return () => clearTimeout(delayDebounceFn);
  // }, [globalFilterValue]);

  const renderHeader = () => {
    return (
        <div className="flex justify-content-between">
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
            </span>
        </div>
    );
};

const header = renderHeader();
const textEditor = (options) => {
  return <InputText type="text" value={options.value} onChange={(e) => options.editorCallback(e.target.value)} />;
};

const deleteRow = (idx) => {
  const newList = items.filter( i =>( i.id !== idx));
  setItems(newList);
}

const getDeleteBody = (event) => {
  return (
    <i className="pi pi-trash" onClick={(e)=>deleteRow(event.id)}></i> 
  )
}
  return (
    <div>
      <div>
        <h2>New Item Form</h2>
        <form style={{display: 'inline-grid'}} onSubmit={onFormSubmit} onChange={(e)=>handleChange(e.target)}>
          <TextField variant='outlined' name='name' label='Name' value={itemData.name} margin='normal'/>
          <TextField variant='outlined' name='description' label='Description'  margin='normal' multiline rows={3} value={itemData.description}/>
          <Button variant='contained' type='submit'>Add Item</Button>
        </form>
      </div>
      <div>
        <h2>Items Table</h2>
        <DataTable value={items} header={header} showGridlines  paginator editMode="row" rows={5} dataKey="id" rowsPerPageOptions={[5, 10, 25, 50]} emptyMessage="No items found.">
          <Column field="name" header="Name" filter filterPlaceholder="Search by name" style={{ minWidth: '12rem' }} />
          <Column editor={(options) => textEditor(options)} header="Description" field="description" filterField="description" style={{ minWidth: '12rem' }} filter filterPlaceholder="Search by description" />
          <Column field="createdBy.name" header="Created By" filter filterPlaceholder="Search by Created By" style={{ minWidth: '12rem' }} />
          <Column field="createdBy.timestamp" header="Created Date" filter filterPlaceholder="Search by Creaeted Date" style={{ minWidth: '12rem' }} />
          <Column rowEditor headerStyle={{ width: '10%', minWidth: '8rem' }} bodyStyle={{ textAlign: 'center' }}></Column>
          <Column body={getDeleteBody} field='id' headerStyle={{ width: '10%', minWidth: '8rem' }} bodyStyle={{ textAlign: 'center' }}></Column>
        </DataTable>
      </div>
    </div>
  )
}
