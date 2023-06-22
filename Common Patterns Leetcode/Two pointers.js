// code templates for common patterns for all the data structures and algorithms looked at in LICC.

let fn = arr => {
    let left = 0, ans = 0, right = arr.length - 1;

    while (left < right) {
        // do some logic here with left and right
        if (CONDITION) {
            left++;
        } else {
            right--;
        }
    }

    return ans;
}
