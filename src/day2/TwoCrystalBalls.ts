export default function two_crystal_balls(breaks: boolean[]): number {

}

// pass in sorted array of booleans, false first, return number, which index is
// the last index a ball can be dropped from without breaking.
// have two crystal balls
// first go to sqrt of N, if ball doesn't break, increase sqrt of N until end
// if ball breaks, linear search from previous sqrt.
// time complexity O(sqrt(N))