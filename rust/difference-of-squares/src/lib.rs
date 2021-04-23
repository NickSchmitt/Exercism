pub fn square_of_sum(n: u32) -> u32 {
    u32::pow(((n as f32) / (2.) * (n as f32 + 1.)) as u32, 2)
}

pub fn sum_of_squares(n: u32) -> u32 {
    (1..=n)
        .fold(0, |acc, x| 
            acc + u32::pow(x, 2))
}

pub fn difference(n: u32) -> u32 {
    square_of_sum(n) - sum_of_squares(n)
}