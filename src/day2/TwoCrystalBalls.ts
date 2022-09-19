export default function two_crystal_balls(breaks: boolean[]): number {
    const sqroot = Math.floor(Math.sqrt(breaks.length-1))
    let index = sqroot

do {
    if(breaks[index]){
        let i = index - sqroot+1
        while(i<breaks.length){
            if(breaks[i]){
                return i
            }
            i++
        }
    }
    index += sqroot
} while( index < breaks.length )
return -1
}

// pass in sorted array of booleans, false first, return number, which index is
// the last index a ball can be dropped from without breaking.
// have two crystal balls
// first go to sqrt of N, if ball doesn't break, increase sqrt of N until end
// if ball breaks, linear search from previous sqrt.
// time complexity O(sqrt(N))