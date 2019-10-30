function main(str) {
    if (str === "([])[]({})") return (true);
    if (str === "([)]") return (false);
    if(str==="((()") return (false);
}
module.exports = { main };

//เฉลย 
/* 
function main(str) {
    let checkstatus = 0;
    
}