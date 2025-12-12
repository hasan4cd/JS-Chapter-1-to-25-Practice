// Chapter No 1 Alerts
alert("Welcome to JavaScript!");
let username = prompt("Enter your name");
alert(username);
let favoriteColor = prompt("Enter your favorite color");
alert(favoriteColor);

// Chapter No 2 Variable for Strings
let firstName = "Hasan";
let lastName = "Raza";
alert(firstName + lastName);
let cityName = "Karachi";
alert("You live in " + cityName);
let hobby = "Carrom";
alert(hobby);

// Chapter No 3 Variable for Numbers
let num1 = 15;
let num2 = 18;
alert(num1 + num2);
let marks = 75;
if (marks >= 50) {
    alert("Pass");
} else {
    alert("Fail");
};
let age = 20;
if (age > 18) {
    alert("You are 18 above");
} else {
    alert("You are under 18");
};

// Chapter No 4 Variable Names Legal and Illegal
let myName = "Hasan";
let value1 = "allnum";
let _num = 45;
alert(myName + value1 + _num + " are legal variable names");
let allNames = ["Yasir", "Ahsan", "Faisal", "Amir", "Saad", "Moosa"];
alert(allNames);

// Chapter No 5 Math Expressions: familiar operators
let ansnum = 58 + 49;
alert(ansnum);
let num3 = 10;
let num4 = 5;
alert("Product " + num3 * num4 + " Quotient " + num3 / num4 + " Remainder " + num3 % num4);
let num5 = 68;
alert(num5++);

// Chapter 6 – Math Expressions: unfamiliar operators
let num6 = 82;
alert(++num6);
alert(--num6);
num6 += 82;
alert(num6);
num6 -= 164;
alert(num6);
let num0 = 6
num0 *= 6;
alert(num0);
num0 /= 3;
alert(num0);

// Chapter 7 – Math Expressions: eliminating ambiguity
let values = (20 + 40) * 4;
alert(values);
let exp = (90 - 45) * 5 + (70 - 35) * 5;
alert(exp);

// Chapter 8 – Concatenating text strings
let startName = "Hasan";
let endName = "Raza";
alert(startName + endName);
let message = "Hello!";
let city = "Karachi";
alert(message + " " + city);

// Chapter 9 – Prompts
let userColor = prompt("Enter your favorite color");
alert("Your favorite color is " + userColor);
let userAge = prompt("Enter your age");
alert("Your age is " + userAge);
let userFruit = prompt("Enter your favorite fruit");
alert("Your favorite fruit is " + userFruit);

// Chapter 10 – if statements
let num7 = 13;
if (num7 > 10) {
    alert("Number is greater than 10");
}
let marks4 = 50;
if (marks4 >= 50) {
    alert("Pass");
}
let age1 = 17;
if (age1 < 18) {
    alert("Minor");
}

// Chapter 11 – Comparison operators
let num8 = 25 > 20;
alert(num8);
let num9 = 90;
if (num9 == "90") {
    alert("Numbers are equal");
}else{
    alert("Numbers are not equal");
};
let num10 = 64;
if (num10 <= 66) {
    alert("Condition is true")
};

// Chapter 12 – if...else and else if statements
let marks1 = 90;
let marks2 = 70;
if (marks1 >= 90) {
    alert("A");
}else if (marks2 >= 70) {
    alert("B");
}else{
    alert("F");
};
let age2 = 9;
let age3 = 14;
if (age2 < 12) {
    alert("Child");
}else if (age3 < 18) {
    alert("Teen");
}else{
    alert("Adult");
};
let temp = 40;
let temp1 = 30;
let temp2 = 20;
if (temp <= 40) {
    alert("Hot");
}else if (temp1 <= 30) {
    alert("Warm");
}else if (temp2 <= 20) {
    alert("Cold");
};

// Chapter 13 – Testing sets of conditions
let num11 = 12
if (num11 % 2 === 0) {
    alert("It is true");
};
let marks3 = 75;
if (marks3 >= 50 && marks3 <= 100) {
    alert("Valid Marks");
};
let num12 = 30;
if (num12 / 3 && num12 / 5) {
    alert("It is true")
};

// Chapter 14 – if statements nested


// Chapter 15 – Arrays
let fruits = ["Apple","Mango","Banana","Grapes","Orange"];
alert(fruits);
let numbers = [11,12,13,14,15,16,17,18,19,20];
alert(numbers[0] + " " + numbers[9]);
let colors = ["Red","Blue","Green","Yellow","Black","Purple","Orange"];
alert(colors);

// Chapter 16 – Arrays: adding and removing elements