function checkPassword(event) {
    let password =
     document .getElementById("password"). value;
    let confirmPassword =
     document .getElementById("cofirmPassword"). value;
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        event. preventDefault();
        return false;
    }  
        alert("Passwords  match!");
        return false;
    
 
}
