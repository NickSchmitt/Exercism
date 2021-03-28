pub fn verse(n: u32) -> String {
    match n {
        3..=99 => format!("{first} bottles of beer on the wall, {first} bottles of beer.\nTake one down and pass it around, {less} bottles of beer on the wall.\n", first=n, less=n-1),
        2 => format!("{first} bottles of beer on the wall, {first} bottles of beer.\nTake one down and pass it around, {less} bottle of beer on the wall.\n", first=n, less=n-1),
        1 => format!("{first} bottle of beer on the wall, {first} bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n", first=n,),
        _ => format!("No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n")
    }
}

pub fn sing(mut start: u32, end: u32) -> String {
    let mut x = String::from("");
    while start > end {
        x.push_str(&verse(start));
        x.push_str("\n");
        start-= 1;
    };
    x.push_str(&verse(start));
    x
}
