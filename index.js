const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
]

function isWin(record) {
    if (record.result === "W") {
        return true
    }else if (record.result != "W"){
    }
}

function superbowlWin(record) {
    const bowl = record.find(isWin)
    if (typeof bowl === 'object') {
        return bowl.year
    } else if (typeof bowl != 'object') {
        return
    }
}
