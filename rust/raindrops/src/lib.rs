pub fn raindrops(n: u32) -> String {
    // refactoring with a closure to check factor.
    let is_factor = |factor| n % factor == 0;
    let mut x = String::new();

    
    if is_factor(3){x.push_str("Pling")};
    if is_factor(5){x.push_str("Plang")};
    if is_factor(7){x.push_str("Plong")}; 
    if x.is_empty(){
        n.to_string()
    } else {
        x
    }
}
