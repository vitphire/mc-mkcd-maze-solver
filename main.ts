namespace mazes {
    //% block="find $block closest to $o || closer than $r blocks"
    //% block.shadow=minecraftBlock
    //% r.defl=10
    //% o.shadow=minecraftCreatePosition
    //% expandableArgumentMode="toggle"
    export function findBlock(block: number, o: Position, r: number = 5): Position {
        let found = []
        for (let x = -r; x < r; x++) {
            for (let y = -r; y < r; y++) {
                for (let z = -r; z < r; z++) {
                    let check = o.add(pos(x, y, z))
                    if (blocks.testForBlock(block, check)) {
                        found.push(check)
                    }
                }
            }
        }
        player.say(found)
        return o
    }
}
