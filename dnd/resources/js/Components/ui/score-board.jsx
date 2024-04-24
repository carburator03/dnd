import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "./table"
  
  export function ScoreBoard({karakterek, merkozesek}) {
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Statisztika</TableHead>
            <TableHead className="text-right">Szám</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
            <TableRow key="merkozesek">
              <TableCell className="font-medium">Mérkőzések</TableCell>
              <TableCell className="text-right">{merkozesek}</TableCell>
            </TableRow>
            <TableRow key="karakterek">
              <TableCell className="font-medium">Karakterek</TableCell>
              <TableCell className="text-right">{karakterek}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    )
  }
  