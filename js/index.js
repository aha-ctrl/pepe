
const massive = ["Minus","Plusik","Minus","Plusik","Plusik","Minus","Plusik","Plusik"]

let a = 21

for (let i = 0; i < massive.length; i++) {
    if (massive[i] == "plusik") {
      a += 1 
    }
 else if (massive[i] == "Minus") {
      a -= 1
    }
  }

console.log(a)







// function lastChild(mas) {
//   return mas[mas.length - 1]
// }

// const massive = [1,2,3,4,5,6,7,8,9,10,]

// console.log(lastChild(massive))










































// let f = []

// let a = Number(prompt("Напишите числа для ряда Фибоначчи:"))

// f[0] = 0
// f[1] = a

// for (let i = 2; i < a; i++) {
//   f[i] = f[i - 1] + f[i - 2]
// }

// console.log("Ряд Фибоначчи:")
// console.log(f.join(", "))





















// let baby = ["конфеты","каша","игрушки"]
// let father = ["диван","бритва","часы"]
// let mather = ["пубра","сумка","кольцо"]

// let list = []

// for (let i = 0; i < baby.length; i++) {
//     list.push(baby[i])
//   }
//   for (let i = 0; i < father.length; i++) {
//     list.push(father[i])
//   }
//   for (let i = 0; i < mather.length; i++) {
//     list.push(mather[i])
//   }

// console.log(list)


















// let massive =prompt([]);

// let max = massive[0]
// let min = massive[0];

// for (let i = 1; i < massive.length; i++) {

//     if (massive[i] > max) {
//         max = massive[i];
//     }
//     if (massive[i] < min) {
//         min = massive[i];
//     }
// }
// console.log(max)
// console.log(min)




// let massive = [1, 2, 3, 4, 5];

// while (true) {
//     let a = prompt("Выберите действие: добавить, удалить, вывести или выйти:");
    
//     if (a == "выйти") {
//         break;
//     }
    
//     if (a == "удалить") {
//         let b = prompt("Удалить последний или первый элемент? (последний/первый):");
//         if (b == "последний") {
//             massive.pop();
//         } else if (b== "первый") {
//             massive.shift();
//         }
//     } else if (a == "добавить") {
//         let c = prompt("Добавить в начало или конец? (начало/конец):");
//         let d= prompt("Введите элемент для добавления:");
//         if (c == "начало") {
//             massive.unshift(d);
//         } else if (c == "конец") {
//             massive.push(d);
//         }
//     } else if (a == "вывести") {
//         console.log(massive.join(', '));
//     } else {
//         console.log("Попробуйте снова.");
//     }
// }