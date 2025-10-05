// Control Statement
// Loop การทำงานเดิมๆ ซ้ำ
// while, do-while, for

let x = 1
while (x <= 5) {
    console.log(x, 'DTI')
    x++
}
console.log('------------------')

let y = 1
do {
    console.log(y, 'DTI')
    y++
} while (y <= 5)
console.log('------------------')

for (let z = 1; z <= 5; z++) {
    console.log(z, 'DTI')
}
//เชื่อมข้อมูลหลายๆ ตัวเข้าด้วยกัน
let data1 = 50
let data2 = 'SAU'
console.log(data1 + ' WOW ' + data2 + ' ' + (10 * 20))
console.log(data1, 'WOW', data2, 10 * 20)
console.log(`${data1} WOW ${data2} ${10 * 20}`)
console.log('---------------')