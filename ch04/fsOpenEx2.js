var fs = require("fs"); // 파일시스템 모듈 가져오기
var buf = new Buffer(1024); // 버퍼 설정

console.log("Going to open an existing file");
fs.open('./files/textFile.txt', 'r+', function(err, fd) {
    if (err) {
        return console.error(err);
    }
    console.log("File opened successfully!");
    console.log("Going to read the file");
    fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
        if (err){
            console.log(err);
        }
        console.log(bytes + " bytes read");

        // Print only read bytes to avoid junk.
        if(bytes > 0){
            console.log(buf.slice(0, bytes).toString());
        }
    });
});