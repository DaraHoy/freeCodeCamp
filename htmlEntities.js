//Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str) {
    // replacement function
    var replacement = function(match) {
        var sign;

        switch (match) {
            case "&":
                sign = "&amp;";
                break;
            case "<":
                sign = "&lt;";
                break;
            case ">":
                sign = "&gt;";
                break;
            case '"':
                sign = "&quot;";
                break;
            case "'":
                sign = "&apos;";
                break;
        }
        return sign;
    }

    //look through string for html entities
    return str.replace(/[<>&"']/g, replacement);
};

console.log(convertHTML("Hamburgers < Pizza < Tacos"));

// switch(expression) {
//     case n:
//         code block
//         break;
//     case n:
//         code block
//         break;
//     default:
//         code block
// }
