function matchPhones(arr){
    let text=arr[0];
    let regex=/\+359([-\ ])2\1\d{3}\1\d{4}\b/g;
    console.log(text.match(regex).join(', '));
}
matchPhones(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222']);