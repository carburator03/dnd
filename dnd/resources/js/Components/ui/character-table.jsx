import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "./table";
import { Button } from "./button";

export function CharacterTable({ characters, user, setCharacter }) {
    const handleEditButton = (character) => {
        setCharacter(character);
    };

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
                    <TableHead className="w-[100px]">Műveletek</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {characters.map((character) => {
                    if (character.user_id === user.id) {
                        return (
                            <TableRow key={character.id}>
                                <TableCell>{character.name}</TableCell>
                                <TableCell>{character.defense}</TableCell>
                                <TableCell>{character.strength}</TableCell>
                                <TableCell>{character.accuracy}</TableCell>
                                <TableCell>{character.magic}</TableCell>
                                <TableCell>
                                    {character.enemy ? "Igen" : "Nem"}
                                </TableCell>
                                <TableCell>
                                    <Button
                                        onClick={() =>
                                            handleEditButton(character)
                                        }
                                    >
                                        ✏️Szerkesztés
                                    </Button>
                                    <Button
                                        variant="destructive"
                                        className="mx-4"
                                    >
                                        🗑️Törlés
                                    </Button>
                                </TableCell>
                            </TableRow>
                        );
                    }
                })}
            </TableBody>
        </Table>
    );
}
