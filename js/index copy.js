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


//! إحصائيات الشهور
const ctx = document.getElementById('lostChart');

const monthlyData = {
    'يناير': {
        lost: [150, 200, 100, 120, 300, 180],
        received: [100, 150, 80, 60, 200, 130],
        damaged: [50, 70, 40, 30, 100, 60],
    },
    'فبراير': {
        lost: [180, 170, 120, 110, 250, 160],
        received: [130, 140, 90, 80, 210, 150],
        damaged: [70, 60, 50, 40, 120, 70],
    },
    'مارس': {
        lost: [200, 220, 130, 100, 280, 190],
        received: [150, 180, 100, 90, 230, 170],
        damaged: [90, 80, 60, 50, 130, 90],
    },
    'أبريل': {
        lost: [140, 190, 90, 100, 200, 150],
        received: [110, 160, 70, 80, 180, 130],
        damaged: [60, 70, 50, 40, 100, 60],
    },
    'مايو': {
        lost: [250, 260, 200, 150, 300, 220],
        received: [180, 190, 160, 120, 230, 200],
        damaged: [100, 110, 90, 70, 150, 120],
    },
    'يونيو': {
        lost: [190, 210, 130, 120, 260, 200],
        received: [140, 160, 100, 90, 210, 160],
        damaged: [80, 90, 60, 50, 130, 100],
    },
};

const lostChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو'],
        datasets: [
            {
                label: 'المفقود',
                data: monthlyData['يناير'].lost,
                backgroundColor: "#1CB300",
                borderRadius: 10,
                barThickness: 35,
                stack: 'combined',
            },
            {
                label: 'المستلم',
                data: monthlyData['يناير'].received,
                backgroundColor: '#28EB00',
                borderRadius: 10,
                barThickness: 35,
                stack: 'combined',
            },
            {
                label: 'التالف',
                data: monthlyData['يناير'].damaged,
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
                    font: { size: 13 },
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
                grid: { display: false }, // نخفي خطوط الـ y
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

// عناصر الدروب داون بتاع الشهور
const dropdownItemsMonth = document.querySelectorAll('.chart-box.month .dropdown-list .dropdown-item');
const dropdownBtnMonth = document.querySelector('.chart-box.month #dropdownBtn-month');

// تغيير البيانات لما تختارى شهر
dropdownItemsMonth.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const selectedMonth = e.target.textContent.trim();
        dropdownBtnMonth.innerHTML = `${selectedMonth} <span class="arrow">▼</span>`;
        updateMonthChart(selectedMonth);
    });
});

// دالة تحديث الشارت
function updateMonthChart(month) {
    if (!monthlyData[month]) return;
    lostChart.data.datasets[0].data = monthlyData[month].lost;
    lostChart.data.datasets[1].data = monthlyData[month].received;
    lostChart.data.datasets[2].data = monthlyData[month].damaged;
    lostChart.update();
}

//! إحصائيات السنة
const yearlyData = {
    2025: [120, 90, 140, 80, 200, 160],
    2024: [100, 150, 120, 180, 90, 200],
    2023: [80, 120, 60, 140, 180, 100],
    2022: [200, 100, 90, 70, 160, 120],
    2021: [130, 170, 110, 150, 100, 90],
    2020: [90, 60, 80, 100, 120, 140],
};
// إنشاء الشارت
let currentYear = 2025;
let currentType = 'train'; // 'train' = محطة قطار, 'bus' = محطة حافلة
const ctx2 = document.getElementById('horizontalChart');

const chart = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: [
        ['Western Station', 'Interchange A'],
        ['Al Batha', '103'],
        ['Al-Olaya', '509'],
        ['Al-Muraba', '610'],
        ['West Al-Uraija', '501'],
        ],
        datasets: [
        {
            label: 'المبيعات',
            data: yearlyData[2025],
            backgroundColor: '#1CB300',
            barThickness: 30,
        },
        ],
    },
    options: {
        responsive: true,
        indexAxis: 'y',
        plugins: { legend: { display: false } },
        scales: {
        x: {
            reverse: true,
            grid: { display: false }, // نخفي الخطوط
            ticks: { color: '#777', font: { size: 10 }, align: 'end' },
            position: 'top',
        },
        y: {
            grid: { display: false }, // نخفي الخطوط
            ticks: { color: '#777', font: { size: 10 }, align: 'start' },
            position: 'right',
        },
        },
        layout: { padding: { right: 20 } },
        locale: 'ar',
    },
    plugins: [
        {
        id: 'backgroundBars',
        beforeDraw: (chart) => {
            const { ctx, chartArea, scales } = chart;
            ctx.save();
            const yAxis = scales.y;
            const xAxis = scales.x;
            const dataset = chart.data.datasets[0];
            const barHeight = dataset.barThickness || 20;

            // إنشاء الـ gradient
            const gradient = ctx.createLinearGradient(0, 0, 0, chartArea.bottom);
            gradient.addColorStop(0, '#159400');
            gradient.addColorStop(0.5, '#22D100');
            gradient.addColorStop(1, '#159400');

            dataset.backgroundColor = gradient; // نطبق الـ gradient على الأعمدة

            // الخلفية الشفافة تحت الأعمدة
            chart.data.labels.forEach((label, i) => {
            const y = yAxis.getPixelForTick(i) - barHeight / 2;
            ctx.fillStyle = 'rgba(28, 179, 0, 0.2)';
            ctx.fillRect(xAxis.left, y, xAxis.right - xAxis.left, barHeight);
            });

            ctx.restore();
        },
        },
    ],
});

document.getElementById('btnLost').addEventListener('click', () => {
    currentType = 'train';
    chart.data.datasets[0].label = 'محطة قطار';
    chart.data.datasets[0].backgroundColor = '#1CB300';
    chart.data.datasets[0].data = yearlyData[currentYear].map(v => v + 30);
    chart.update();
});

document.getElementById('btnReceived').addEventListener('click', () => {
    currentType = 'bus';
    chart.data.datasets[0].label = 'محطة حافلة';
    chart.data.datasets[0].backgroundColor = '#28EB00';
    chart.data.datasets[0].data = yearlyData[currentYear].map(v => v - 20);
    chart.update();
});


//! تحديث السنة المختارة
const dropdownItems2 = document.querySelectorAll('.chart-box.year .dropdown-item');
const dropdownBtn2 = document.getElementById('dropdownBtn-year');

//تحديث البيانات حسب نوع المحطة الحالي
dropdownItems2.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const selectedYear = e.target.textContent.trim();
        currentYear = selectedYear;
        dropdownBtn2.innerHTML = `${selectedYear} <span class="arrow">▼</span>`;

        if (currentType === 'train') {
            chart.data.datasets[0].data = yearlyData[selectedYear].map(v => v + 30);
            chart.data.datasets[0].label = 'محطة قطار';
            chart.data.datasets[0].backgroundColor = '#1CB300';
        } else {
            chart.data.datasets[0].data = yearlyData[selectedYear].map(v => v - 20);
            chart.data.datasets[0].label = 'محطة حافلة';
            chart.data.datasets[0].backgroundColor = '#28EB00';
        }

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




//! Button Notification
const btnNotification = document.querySelector(".icons button.notification");
const leftPart = document.querySelector(".left-part");
const closeIcon = document.querySelector(".left-part .close-icon");
console.log(btnNotification , leftPart , closeIcon) ;

btnNotification.addEventListener("click",function(){
    leftPart.classList.add("responsive");
});
closeIcon.addEventListener("click",function(){
    leftPart.classList.remove("responsive");
});
