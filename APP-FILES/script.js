
console.log("ready!");
setInterval(ChangeBackground, 3000)

let count = 0;
function ChangeBackground() {

    if (count === 0) {

        $('#first-slide').show();
        $('#second-slide').hide();
        $('#third-slide').hide();

    }

    if (count === 1) {
        $('#first-slide').hide();
        $('#second-slide').show();
        $('#third-slide').hide();


    }
    if (count === 2) {

        $('#first-slide').hide();
        $('#second-slide').hide();
        $('#third-slide').show();

    }
    console.log('iam here', count)
    count += 1
    if (count === 3) count = 0;
}

ChangeBackground();

