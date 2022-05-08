// code your solution here
function superbowlWin(history) {
    const year = history.find((stat) => stat["result"] === "W");
    if (year) {
    return year["year"];
    }
    else {
        return undefined;
    }
}

