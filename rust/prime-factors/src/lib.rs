pub fn factors(mut n: u64) -> Vec<u64> {

	let mut factors = Vec::new();
	let mut nums = 2..;

	while n > 1{
		let x = nums.next().unwrap();

		while n % x == 0{
			factors.push(x);
			n /= x;
		}
	}	
	factors
}