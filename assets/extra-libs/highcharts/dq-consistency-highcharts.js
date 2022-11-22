
            //-------------------3--------------------------
            function pieThree(thename,compliant_facility_count,non_compliant_facility_count){
                Highcharts.chart('pc3', {
                    chart: {
                        plotBackgroundColor: null,
                        plotBorderWidth: null,
                        plotShadow: false,
                        type: 'pie'
                    },
                    title: {
                        text: thename
                    },
                    tooltip: {
                        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                    },
                    plotOptions: {
                        pie: {
                            allowPointSelect: true,
                            cursor: 'pointer',
                            dataLabels: {
                                enabled: false
                            },
                            showInLegend: true
                        }
                    },
                    series: [{
                        name: 'Brands',
                        colorByPoint: true,
                        data: [
                            {
                                name: 'Discrepancy',
                                y: non_compliant_facility_count,
                                color: '#c0504d'
                            },
                            {
                                name: 'No discrepancy',
                                y: compliant_facility_count,
                                sliced: true,
                                selected: true,
                                color: '#9bbb59'
                            }
                        ]
                    }]
                });
            };
            //-------------------end 3--------------------------
