pub fn reply(message: &str) -> &str {

    let mut string  = message.to_string();
    match string {
        string => "Whoa, chill out!",
        _ => "Whatever."
    }
}
