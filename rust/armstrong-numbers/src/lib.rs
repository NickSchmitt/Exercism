pub fn is_armstrong_number(num: u32) -> bool {
    
    let mut vec = Vec::new();
    let mut digits = num;
    while digits > 0{
        vec.push(digits % 10);
        digits/=10;
    }

    let len = (f64::from(num).log10()) as u32 + 1;
    num == vec.into_iter().map(|x| x.pow(len)).sum::<u32>()

}
