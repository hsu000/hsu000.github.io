function calculater() {

    //計算出星座
    var month = document.getElementById("month").value.trim();
    var day = document.getElementById("day").value.trim();
    var s = "魔羯水瓶雙鱼牡羊金牛雙子巨蟹獅子處女天秤天蠍射手魔羯";
    var arr2 = [20, 19, 21, 21, 21, 22, 23, 23, 23, 23, 22, 22];
    var result2 = s.substr(month * 2 - (day < arr2[month - 1] ? 2 : 0), 2);
    document.getElementById("xing").value = result2;
}







// function jisuan() {
//     var month = document.getElementById('month').value.trim();
//     var day = document.getElementById('day').value.trim();
//     // 檢查月份和日期必須輸入，並且長度1碼或2碼
//     console.log(month, day);
//     if (month == '') {
//         alert('請輸入月份');
//     } else if (day == '') {
//         alert('請輸入日期');
//     } else if (month.length > 2) {
//         alert('月份輸入錯誤');
//     } else if (day.length > 2) {
//         alert('日期輸入錯誤');
//     } else {
//         // 檢查月份必須全部是數字
//         for (var i = 0; i < month.length; i++) {
//             if (month.substr(i, 1) < "0" || month.substr(i, 1) > "9") {
//                 alert('月份必須全部是數字');
//                 return;
//             }
//         }
//         // 檢查日期必須全部是數字
//         for (var i = 0; i < day.length; i++) {
//             if (day.substr(i, 1) < "0" || day.substr(i, 1) > "9") {
//                 alert('日期必須全部是數字');
//                 return;
//             }
//         }
//         // 字符串轉換為整數類型
//         month = parseInt(month);
//         day = parseInt(day);
//         // 月份範圍檢查
//         if (month < 1 || month > 12) {
//             alert('月份必須在1到12之間');
//             return;
//         }
//         // 不同月份的日期範圍檢查
//         if (month == 2) {
//             if (day < 1 || day > 28) {
//                 alert('月份必須在1到28之間');
//                 return;
//             }
//         } else if (month == 4 || month == 6 || month == 9 || month == 11) {
//             if (day < 1 || day > 30) {
//                 alert('月份必須在1到30之間');
//                 return;
//             }
//         } else {
//             if (day < 1 || day > 31) {
//                 alert('月份必須在1到31之間');
//                 return;
//             }
//         }
//         // 檢查結束, 開始判斷星座
//         var xingzuoret = '';
//         if (month == 1) {
//             if (day <= 19) {
//                 xingzuoret = '魔羯座';
//             } else {
//                 xingzuoret = '水瓶座';
//             }
//         } else if (month == 2) {
//             if (day <= 18) {
//                 xingzuoret = '水瓶座';
//             } else {
//                 xingzuoret = '雙魚座';
//             }
//         } else if (month == 3) {
//             if (day <= 20) {
//                 xingzuoret = '雙魚座';
//             } else {
//                 xingzuoret = '牡羊座';
//             }
//         } else if (month == 4) {
//             if (day <= 20) {
//                 xingzuoret = '牡羊座';
//             } else {
//                 xingzuoret = '金牛座';
//             }
//         } else if (month == 5) {
//             if (day <= 20) {
//                 xingzuoret = '金牛座';
//             } else {
//                 xingzuoret = '雙子座';
//             }
//         } else if (month == 6) {
//             if (day <= 21) {
//                 xingzuoret = '雙子座';
//             } else {
//                 xingzuoret = '巨蟹座';
//             }
//         } else if (month == 7) {
//             if (day <= 22) {
//                 xingzuoret = '巨蟹座';
//             } else {
//                 xingzuoret = '獅子座';
//             }
//         } else if (month == 8) {
//             if (day <= 22) {
//                 xingzuoret = '獅子座';
//             } else {
//                 xingzuoret = '處女座';
//             }
//         } else if (month == 9) {
//             if (day <= 22) {
//                 xingzuoret = '處女座';
//             } else {
//                 xingzuoret = '天秤座';
//             }
//         } else if (month == 10) {
//             if (day <= 22) {
//                 xingzuoret = '天秤座';
//             } else {
//                 xingzuoret = '天蠍座';
//             }
//         } else if (month == 11) {
//             if (day <= 21) {
//                 xingzuoret = '天蠍座';
//             } else {
//                 xingzuoret = '射手座';
//             }
//         } else if (month == 12) {
//             if (day <= 21) {
//                 xingzuoret = '射手座';
//             } else {
//                 xingzuoret = '魔羯座';
//             }
//         }
//         document.getElementById('xingzuoresult').innerHTML = xingzuoret;
//     }
// }