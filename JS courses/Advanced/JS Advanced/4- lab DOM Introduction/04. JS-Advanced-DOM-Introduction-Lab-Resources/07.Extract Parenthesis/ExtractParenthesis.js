function extract(content) {
    let pattern = /(?<start>[(])(?<ourText>[\w\ ]+)(?<end>[)])/gm;
    let text = document.getElementById(content).textContent;
    let result = text.matchAll(pattern);
    let output = [];
    for (const line of result) {
        output.push(line.groups.ourText);
    }
    return output.join('; ');

    // document.getElementById('content').textContent=output.join
}

