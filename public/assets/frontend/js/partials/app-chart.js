$(document).ready(function () {
    (function(){
        let appVar = null;
        let barScales = null;
        let AppChart = {
            init: function() {
                this.themeVar();
                this.globalChartOptions();
                this.productBarChart();
                this.profitPieChart();
                this.salesLineChart();
                this.profitLineChart();
            },
            themeVar: function() {
                let elem    = ( $(".app-dark").length ) ? $(".app-dark").get(0) : document.documentElement;
                let doc     = window.getComputedStyle(elem, null); // getComputedStyle(document.documentElement);
                let vars  = {
                    fontFamily        : doc.getPropertyValue("--app-font-family"),
                    color             : doc.getPropertyValue("--app-color"),
                    wrapBgColor       : doc.getPropertyValue("--app-wrap-bg-color"),
                    inputBorderColor  : doc.getPropertyValue("--app-input-border-color"),
                    primary           : doc.getPropertyValue("--app-primary")
                };

                appVar = vars;
                return vars;
            },
            globalChartOptions: function() {
                Chart.defaults.global.defaultFontFamily = appVar.fontFamily;
                Chart.defaults.global.defaultFontColor = appVar.color;
                let scales = {
                    xAxes: [{
                        gridLines: {
                            // display:false,
                            color: appVar.inputBorderColor,
                            zeroLineColor: appVar.inputBorderColor,
                        },
                        ticks: {
                            beginAtZero: true,
                            stepSize: 20,
                        }
                    }],
                    yAxes: [{
                        gridLines: {
                            // display:false,
                            color: appVar.inputBorderColor,
                            zeroLineColor: appVar.inputBorderColor
                        },
                        ticks: {
                            beginAtZero: true,
                            stepSize: 20,
                        }
                    }]
                };

                barScales = scales;
            },
            productBarChart: function() {
                if ($("#app-product-bar-chart").length) {
                    let productBarCTX     = document.getElementById("app-product-bar-chart").getContext("2d");
                    let productBarChart   = new Chart(productBarCTX, {
                        type: "bar", // horizontalBar
                        data: {
                            labels: ["Product 1", "Product 2", "Product 3", "Product 4", "Product 5", "Product 6", "Product 7"],
                            datasets: [{
                                label: "Product",
                                barThickness: 25,
                                data: [50, 80, 60, 50, 100, 125, 100],
                                backgroundColor: appVar.primary,
                                hoverBackgroundColor: appVar.primary,
                            }]
                        },
                        options: {
                            legend: {
                                display: false
                            },
                            maintainAspectRatio: false,
                            spanGaps: true,
                            scales: barScales
                        }
                    });
                }
            },
            profitPieChart: function () {
                if ($("#app-profit-pie-chart").length) {
                    let profitPieCTX     = document.getElementById("app-profit-pie-chart").getContext("2d");
                    let profitPieChart   = new Chart(profitPieCTX, {
                        type: "doughnut",
                        data: {
                            labels: ["Profit", "Purchase", "Sales", "Expense"],
                            datasets: [{
                                label: "Total Profit",
                                data: [50, 80, 60, 50],
                                backgroundColor: ["#747bfb", "#64c1ec", "#f84e4f", "#fdcf57"],
                                borderWidth: 0,
                            }]
                        },
                        options: {
                            cutoutPercentage: 70,
                            legend: {
                                display: true,
                                position: "bottom",
                                labels: {
                                    padding: 30,
                                }
                            },
                            maintainAspectRatio: false,
                        }
                    });
                }
            },
            salesLineChart: function () {
                if ($("#app-sales-line-chart").length) {
                    let salesLineCTX     = document.getElementById("app-sales-line-chart").getContext("2d");
                    let salesLineChart   = new Chart(salesLineCTX, {
                        type: "line",
                        data: {
                            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                            datasets: [{
                                label: "Sales",
                                barThickness: 25,
                                data: [17, 33, 51, 40, 80, 95, 70, 132, 140, 150, 170, 234],
                                fill: false,
                                lineTension: 0,
                                backgroundColor: appVar.primary,
                                hoverBackgroundColor: appVar.primary,
                                borderWidth: 4,
                                borderColor: appVar.primary,
                                borderJoinStyle: "round",
                                pointRadius: 5,
                                pointHoverRadius: 7,
                                pointBackgroundColor: appVar.primary,
                                pointBorderWidth: 2,
                                pointBorderColor: appVar.wrapBgColor,
                                pointHoverBorderColor: appVar.wrapBgColor,
                            }]
                        },
                        options: {
                            legend: {
                                display: false
                            },
                            maintainAspectRatio: false,
                            spanGaps: true,
                            scales: barScales
                        }
                    });
                }
            },
            profitLineChart: function () {
                if ($("#app-profit-line-chart").length) {
                    let profitLineCTX     = document.getElementById("app-profit-line-chart").getContext("2d");
                    let profitLineChart   = new Chart(profitLineCTX, {
                        type: "line",
                        data: {
                            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                            datasets: [{
                                label: "Profit",
                                barThickness: 25,
                                data: [17, 33, 70, 65, 80, 95, 79, 132, 140, 150, 170, 183],
                                fill: false,
                                lineTension: 0,
                                backgroundColor: appVar.primary,
                                hoverBackgroundColor: appVar.primary,
                                borderWidth: 4,
                                borderColor: appVar.primary,
                                borderJoinStyle: "round",
                                pointRadius: 5,
                                pointHoverRadius: 7,
                                pointBackgroundColor: appVar.primary,
                                pointBorderWidth: 2,
                                pointBorderColor: appVar.wrapBgColor,
                                pointHoverBorderColor: appVar.wrapBgColor,
                            }]
                        },
                        options: {
                            legend: {
                                display: false
                            },
                            maintainAspectRatio: false,
                            spanGaps: true,
                            scales: barScales
                        }
                    });
                }
            }
        };

        window.AppChart = AppChart;
    }());

    AppChart.init();
});