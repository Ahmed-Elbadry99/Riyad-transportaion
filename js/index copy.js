//! Dropdown Btns
const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
    const btn = dropdown.querySelector("button");

    btn.addEventListener("click", (e) => {
        e.stopPropagation();
        dropdown.classList.toggle("active");

        dropdowns.forEach((other) => {
            if (other !== dropdown) {
                other.classList.remove("active");
            }
        });
    });
});

window.addEventListener("click", () => {
    dropdowns.forEach((dropdown) => {
        dropdown.classList.remove("active");
    });
});





// const ctx = document.getElementById('lostChart');

//     new Chart(ctx, {
//         type: 'bar',
//         data: {
//             labels: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو'],
//             datasets: [
//             {
//                 label: 'المفقود',
//                 data: [150, 200, 100, 120, 300, 180],
//                 backgroundColor: "#1CB300",
//                 borderRadius: 10,
//                 barThickness: 35,
//                 stack: 'combined',
//             },
//             {
//                 label: 'المستلم',
//                 data: [100, 150, 80, 60, 200, 130],
//                 backgroundColor: '#28EB00',
//                 borderRadius: 10,
//                 barThickness: 35,
//                 stack: 'combined',
//             },
//             {
//                 label: 'التالف',
//                 data: [150, 200, 100, 120, 300, 180],
//                 backgroundColor: "#C7FFC5",
//                 borderRadius: 10,
//                     barThickness: 35,
//                 stack: 'combined',
//             },
//             ]
//         },
//         options: {
//             responsive: true,
//             plugins: {
//                 legend: {
//                     display: true,
//                     position: 'bottom',
//                     rtl: true,
//                     textDirection: 'rtl',

//                     labels: {
//                         padding: 30,
//                         usePointStyle: true,
//                         pointStyle: 'circle',
//                         color: '#555',
//                         font: {
//                             size: 13
//                         },
//                         boxWidth: 8,
//                         boxHeight: 8,
//                     }
//                 },
//             title: {
//                 display: false,
//             }
//             },
//             scales: {
//                 x: {
//                     stacked: true,
//                     grid: {
//                         display: false
//                     },
//                     ticks: {
//                         color: '#777',
//                         font: {
//                             size: 13
//                         },
//                     },
//                     reverse: true,
//                 },
//                 y: {
//                     stacked: true,
//                     grid: {
//                         color: '#eee'
//                     },
//                     position: 'right',
//                     ticks: {
//                             color: '#777',
//                             font: {
//                                 size: 12
//                             },
//                             align: 'start',
//                         }
//                     },
                
//             }
//         }
//     });

//! إحصائيات الشهور
const ctx = document.getElementById('lostChart');

const lostChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو'],
        datasets: [
            {
                label: 'المفقود',
                data: [150, 200, 100, 120, 300, 180],
                backgroundColor: "#1CB300",
                borderRadius: 10,
                barThickness: 35,
                stack: 'combined',
            },
            {
                label: 'المستلم',
                data: [100, 150, 80, 60, 200, 130],
                backgroundColor: '#28EB00',
                borderRadius: 10,
                barThickness: 35,
                stack: 'combined',
            },
            {
                label: 'التالف',
                data: [150, 200, 100, 120, 300, 180],
                backgroundColor: "#C7FFC5",
                borderRadius: 10,
                barThickness: 35,
                stack: 'combined',
            },
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
                rtl: true,
                textDirection: 'rtl',
                labels: {
                    usePointStyle: true,
                    pointStyle: 'circle',
                    color: '#555',
                    font: {
                        size: 13
                    },
                    boxWidth: 8,
                    boxHeight: 8,
                }
            },
            title: { display: false }
        },
        scales: {
            x: {
                stacked: true,
                grid: { display: false },
                ticks: {
                    color: '#777',
                    font: { size: 13 },
                    padding: 5,
                },
                reverse: true,
            },
            y: {
                stacked: true,
                grid: { color: '#eee' },
                position: 'right',
                ticks: {
                    color: '#777',
                    font: { size: 12 },
                    align: 'start',
                    stepSize: 100,
                }
            },
        }
    }
});


// أسماء الشهور بالترتيب
const months = ['يناير','فبراير','مارس','أبريل','مايو','يونيو'];

// نجيب العناصر بتاعة اللستة
const dropdownItems = document.querySelectorAll('.dropdown-item');
const dropdownBtn = document.getElementById('dropdownBtn');

// نسمع لكل شهر لما يتكبس عليه
dropdownItems.forEach((item, index) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();

        // نحدد الشهر بناءً على ترتيبه في الليست
        const selectedMonth = months[index];

        // نحدث الزرار فوق باسم الشهر المختار
        dropdownBtn.innerHTML = `${selectedMonth} <span class="arrow">▼</span>`;

        // هنا بقى بتندهي الفنكشن اللي تحدث الإحصائيات بتاعة الشهر
        updateChartData(selectedMonth);
    });
});

// دي الفنكشن اللي هتتعامل مع الإحصائيات
function updateChartData(month) {
    console.log(`جاري تحميل إحصائيات شهر ${month}...`);
  // تكتبي هنا الكود اللي يحدث الـ Chart بناءً على الشهر المختار
}







//! إحصائيات السنة
// const ctx2 = document.getElementById('horizontalChart');
// const chart = new Chart(ctx2, {
// type: 'bar',
//     data: {
//         labels: ['Western Station Interchange A', 'Al Batha 103', 'Al-Olaya 509', 'Al-Muraba 610', 'West Al-Uraija 501'],
//         datasets: [
//         {
//             label: 'المبيعات',
//             data: [120, 90, 140, 80, 200, 160],
//             backgroundColor: 'rgba(21, 148, 0, 1)',
//             // borderRadius: 6,
//             barThickness: 20,
//         }
//         ]
//     },
//     options: {
//         responsive: true,
//         indexAxis: 'y',
//         plugins: {
//         legend: { display: false }
//         },
//         scales: {
//         x: {
//             reverse: true, 
//             grid: { color: '#eee' },
//             ticks: {
//                 color: '#777',
//                 font: {
//                     size: 10,
//                 },
//                 align: 'end',
//             },
//             position: 'top',
//         },
//         y: {
//             grid: { display: false },
//             ticks: {
//             color: '#777',
//             font: {
//                 size: 10
//             },
//             align: 'start',
//             },
//             position: 'right',
//         }
//         },
//         layout: {
//             padding: {
//                 right: 20
//             }
//         },
//         locale: 'ar'
//     }
// });


// document.getElementById('btnLost').addEventListener('click', () => {
//     chart.data.datasets[0].label = 'محطة قطار';
//     chart.data.datasets[0].backgroundColor = '#1CB300';
//     chart.data.datasets[0].data = [150, 200, 100, 120, 300, 180];
//     chart.update();
// });

// document.getElementById('btnReceived').addEventListener('click', () => {
//     chart.data.datasets[0].label = 'محطة حافلة';
//     chart.data.datasets[0].backgroundColor = '#28EB00';
//     chart.data.datasets[0].data = [100, 150, 80, 60, 200, 130];
//     chart.update();
// });

//! بيانات كل سنة
const yearlyData = {
    2025: [120, 90, 140, 80, 200, 160],
    2024: [100, 150, 120, 180, 90, 200],
    2023: [80, 120, 60, 140, 180, 100],
    2022: [200, 100, 90, 70, 160, 120],
    2021: [130, 170, 110, 150, 100, 90],
    2020: [90, 60, 80, 100, 120, 140],
};

//! إنشاء الشارت
const ctx2 = document.getElementById('horizontalChart');
const chart = new Chart(ctx2, {
  type: 'bar',
  data: {
    labels: [
      'Western Station Interchange A',
      'Al Batha 103',
      'Al-Olaya 509',
      'Al-Muraba 610',
      'West Al-Uraija 501',
    ],
    datasets: [
      {
        label: 'المبيعات',
        data: yearlyData[2025],
        backgroundColor: 'rgba(21, 148, 0, 1)',
        barThickness: 20,
      },
    ],
  },
  options: {
    responsive: true,
    indexAxis: 'y',
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: {
        reverse: true,
        grid: { color: '#eee' },
        ticks: {
          color: '#777',
          font: { size: 10 },
          align: 'end',
        },
        position: 'top',
      },
      y: {
        grid: { display: false },
        ticks: {
          color: '#777',
          font: { size: 10 },
          align: 'start',
        },
        position: 'right',
      },
    },
    layout: {
      padding: { right: 20 },
    },
    locale: 'ar',
  },
});

//! لما أضغط على الأزرار
document.getElementById('btnLost').addEventListener('click', () => {
    chart.data.datasets[0].label = 'محطة قطار';
    chart.data.datasets[0].backgroundColor = '#1CB300';
    chart.data.datasets[0].data = yearlyData[currentYear].map(v => v + 30); // مثال لتغيير القيم
    chart.update();
});

document.getElementById('btnReceived').addEventListener('click', () => {
    chart.data.datasets[0].label = 'محطة حافلة';
    chart.data.datasets[0].backgroundColor = '#28EB00';
    chart.data.datasets[0].data = yearlyData[currentYear].map(v => v - 20); // مثال لتغيير القيم
    chart.update();
});

//! تحديث السنة المختارة
let currentYear = 2025;
const dropdownItems2 = document.querySelectorAll('.dropdown-item');
const dropdownBtn2 = document.getElementById('dropdownBtn');

dropdownItems2.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const selectedYear = e.target.textContent.trim();
        currentYear = selectedYear;
        dropdownBtn2.innerHTML = `${selectedYear} <span class="arrow">▼</span>`;
        chart.data.datasets[0].data = yearlyData[selectedYear];
        chart.update();
    });
});
//! Class Active
const buttons = document.querySelectorAll('.chart-buttons button');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active')); // يشيل الكلاس من الكل
        btn.classList.add('active'); // يضيف الكلاس للي اتداس عليه
    });
});

