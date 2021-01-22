// Returns a Utc DateTime one billion seconds after start.

use chrono::{DateTime, Utc, Duration};

const GIGA:i64 = 1_000_000_000;

pub fn after(start: DateTime<Utc>) -> DateTime<Utc> {
    start + Duration::seconds(GIGA)
}
