import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "./table";

export function CharacterTable({ characters }) {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Név</TableHead>
                    <TableHead className="w-[100px]">Védekezés</TableHead>
                    <TableHead className="w-[100px]">Erősség</TableHead>
                    <TableHead className="w-[100px]">Pontosság</TableHead>
                    <TableHead className="w-[100px]">Mágia</TableHead>
                    <TableHead className="w-[100px]">Ellenség?</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {characters.map((character) => (
                    <TableRow key={character.id}>
                        <TableCell>{character.name}</TableCell>
                        <TableCell>{character.defence}</TableCell>
                        <TableCell>{character.strength}</TableCell>
                        <TableCell>{character.accuracy}</TableCell>
                        <TableCell>{character.magic}</TableCell>
                        <TableCell>
                            {character.enemy ? "Igen" : "Nem"}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
