let add x y = x + y
let subtract x y = x - y
let multiply x y = x * y
let divide x y = if y = 0.0 then failwith "Infinity" else x / y
let rec factorial n = if n <= 1.0 then 1.0 else float n * factorial (n - 1.0)

let double = multiply 2.0
let half = multiply 0.5

printfn "Add: %f" (add 3.3 4.04)
printfn "Subtract: %f" (subtract 10.1 5.5)
printfn "Multiply: %f" (multiply 7.8 8.7)
printfn "Divide: %f" (divide 20.0 7.0)
printfn "Factorial: %f" (factorial 5.0)
printfn "Double: %f" (double 10.0)
printfn "Half: %f" (half 10.0)
