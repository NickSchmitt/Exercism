pub fn build_proverb(list: &[&str]) -> String {
    let mut y = String::from("");
    for (i, _line) in list.iter().enumerate() {
        if list.len() > i+1{
            let x = format!("For want of a {} the {} was lost.\n", list[i], list[i+1]);
            y.push_str(&x);
        }
        else {
            let x = format!("And all for the want of a {}.", list[0]);
            y.push_str(&x);
        }
    }
    y
}

