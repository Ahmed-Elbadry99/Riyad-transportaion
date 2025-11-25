

//! ==================== Upload-Image ====================
document.querySelectorAll(".upload-box").forEach(box => {
    const imageInput = box.querySelector("input[type='file']");
    const previewImage = box.querySelector("img.hidden");
    const previewIcon = box.querySelector(".upload-camera");

    // فتح نافذة الملفات عند الضغط على أي مكان في image-upload
    box.addEventListener("click", () => {
        imageInput.click();
    });

    // عرض الصورة
    function showImage(file) {
        if (!file) return;
        const reader = new FileReader();
        reader.onload = () => {
            previewImage.src = reader.result;
            previewImage.classList.remove("hidden");
            // مش هنخفي الـ upload-camera
            // if (previewIcon) previewIcon.style.display = "none";
        };
        reader.readAsDataURL(file);
    }

    // عند اختيار الملف من المتصفح
    imageInput.addEventListener("change", () => {
        showImage(imageInput.files[0]);
    });

    // التعامل مع السحب والإفلات
    box.addEventListener("dragenter", e => e.preventDefault());
    box.addEventListener("dragover", e => {
        e.preventDefault();
        box.style.borderColor = "#333";
    });
    box.addEventListener("dragleave", e => {
        e.preventDefault();
        box.style.borderColor = "#aaa";
    });
    box.addEventListener("drop", e => {
        e.preventDefault();
        box.style.borderColor = "#aaa";
        showImage(e.dataTransfer.files[0]);
    });
});

    //! ==================== Chart-JS ====================
    window.onload = function() {
        let reports = 70;
        let deliveries = 30;

        const ctx = document.getElementById("mainDonut").getContext("2d");

        // إنشاء gradient لكل لون
        const gradientReports = ctx.createLinearGradient(0, 0, 0, 400);
        gradientReports.addColorStop(0, "#0b6b13");
        gradientReports.addColorStop(1, "#34e03a");

        const gradientDeliveries = ctx.createLinearGradient(0, 0, 0, 400);
        gradientDeliveries.addColorStop(0, "#34e03a");
        gradientDeliveries.addColorStop(1, "#b0ffb0");

        // الشارت الرئيسية
        new Chart(ctx, {
            type: "doughnut",
            data: {
                labels: ["بلاغات", "تسليمات"],
                datasets: [{
                    data: [reports, deliveries],
                    backgroundColor: [gradientReports, gradientDeliveries],
                    borderWidth: 0
                }]
            },
            options: {
                cutout: "50%",
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });

        // شارت البلاغات الصغيرة
        new Chart(document.getElementById("reportChart"), {
            type: "doughnut",
            data: {
                datasets: [{
                    data: [100],
                    backgroundColor: ["#0b6b13", "#d6f5d8"],
                    borderWidth: 0
                }]
            },
            options: {
                cutout: "70%",
                plugins: {
                    legend:{
                        display: false
                    }
                }
            },
            plugins: [
                {
                    
                    id: 'centerText',
                    afterDraw(chart) {
                        const { ctx, chartArea: { width, height } } = chart;
                        ctx.save();
                        ctx.font = "bold 12px Arial";
                        ctx.fillStyle = "#0b6b13";
                        ctx.textAlign = "center";
                        ctx.textBaseline = "middle";
                        ctx.fillText(reports + "%", width / 2, height / 2);
                        ctx.restore();
                    }
                }
            ]
        });

        // شارت التسليمات الصغيرة
        new Chart(document.getElementById("deliveryChart"), {
            type: "doughnut",
            data: {
                datasets: [{
                    data: [100],
                    backgroundColor: ["#34e03a", "#d6f5d8"],
                    borderWidth: 0
                }]
            },
            options: {
                cutout: "70%",
                plugins:{
                    legend: {
                        display: false
                    }
                }
            },
            plugins: [
                {
                    id: 'centerText',
                    afterDraw(chart) {
                        const { ctx, chartArea: { width, height } } = chart;
                        ctx.save();
                        ctx.font = "bold 12px Arial";
                        ctx.fillStyle = "#34e03a";
                        ctx.textAlign = "center";
                        ctx.textBaseline = "middle";
                        ctx.fillText(deliveries + "%", width / 2, height / 2);
                        ctx.restore();
                    }
                }
            ]
        });
    };