import { useEffect, useMemo, useState } from 'react';
import DataTable from 'react-data-table-component';
import { Card} from 'react-bootstrap';



const TableComponent = ({
    Data = [],
    Column = [],
    Title = '',
    ...rest
}) => {

   

    return (
        <div className='p-3 m-2'>
            <Card>
             
                <Card.Header>{Title}</Card.Header>
               
                <Card.Body>
                    <DataTable sor pagination columns={Column} data={Data} />
                </Card.Body>
            </Card>

        </div>
    )
}



export default TableComponent;