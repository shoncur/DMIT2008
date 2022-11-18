import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

export default function AuthorInfo(props) {
    if (!props.entries) {return null}

    return <TableRow>
        {props.entries.map((row, index) => {
            <TableCell key={index}>{row.title}</TableCell>
        })}
    </TableRow>
}