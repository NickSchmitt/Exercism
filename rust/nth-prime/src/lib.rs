pub fn nth(n: usize) -> usize {
    prime_sieve(n+1, n+2)
}

pub fn prime_sieve(target_prime: usize, max_number_to_check: usize) -> usize {

    let mut prime_mask = vec![true; max_number_to_check];
    prime_mask[0] = false;
    prime_mask[1] = false;
    
    let mut total_primes_found = 0;

    for current_num in 2..max_number_to_check {

        if prime_mask[current_num] {

            total_primes_found += 1;

            if total_primes_found == target_prime {
                return current_num
            }

            let mut multiple = 2 * current_num;

            while multiple < max_number_to_check {
                prime_mask[multiple] = false;
                multiple += current_num;
            }
        }
    }

    println!("{}th prime not found in {}", target_prime, max_number_to_check);
    println!("running larger prime sieve");
    prime_sieve(target_prime, max_number_to_check * 2)
}





// fn is_prime(n: u32) -> bool {
//     for i in 2..n - 1 {
//         if n % i == 0 {
//             return false;
//         }
//     }
//     true
// }

