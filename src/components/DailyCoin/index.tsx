import dynamic from "next/dynamic";

import { Flex, Text } from "@chakra-ui/react";

const Chart = dynamic(() => import('react-apexcharts'), {
    ssr: false
})

type DailyCoinProps = {
    id: number;
    symbol: string;
    name: string;
    price?: number
    circulatingSupply?: number
    volume?: number;
    iconUrl?: string;
    rank?: number;
    history?: number[];
    marketCap?: number;
}

export function DailyCoin({
    id,
    name,
    symbol,
    price,
    iconUrl,
    history
}: DailyCoinProps) {

    const k = [12, 11, 11, 10, 1, 2, 30]

    const series = [
        {
            data: history
        }
    ]

    var options = {

        chart: {
            type: 'line',
            lineWidth: 1,
            lineStroke: 1,
            toolbar: {
                show: false
            },
            zoom: {
                enabled: false
            },


        },

        dataLabels: {
            enabled: false,
        },
        labels: {
            show: false
        },

        colors: ['#07abf7'],

        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                type: "horizontal",
                shadeIntensity: 0.5,
                gradientToColors: undefined,
                inverseColors: true,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 50, 100],
                colorStops: []
            },
        },
        tooltip: {
            enabled: false
        },

        legend: {
            show: false,
        },
        stroke: {
            curve: 'smooth',
            width: 3,
        },
        xaxis: {

            labels: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            axisBorder: {
                show: false
            },
        },
        yaxis: {
            show: false,
            showAlways: false,

        },

        grid: {
            show: false,
            yaxis: {
                lines: {
                    show: false
                }
            },
            xaxis: {
                lines: {
                    show: false
                }
            }
        }

    };


    return (
        <Flex
            id={String(id)}
            display='flex'
            flexDirection={['column', 'column', 'column', 'row']}
            justifyContent='flex-start'
            alignItems='center'
            width="880px"
            padding=".24rem"
            borderRadius="4px"
            height='400px'
            margiRight='1rem'
            box-shadow='rgba(10, 10, 10, 0.1) 0px 8px 16px -2px, rgba(10, 10, 10, 0.02) 0px 0px 0px 1px'
        >

            <Text
                fontWeight='bold'
                fontSize=".8rem"
                width='240px'
                wordBreak='break-word'
                ml='4px'
            >
                <img
                    src={iconUrl}
                    alt="Cryptoboard"
                    width="24" height="24"
                    style={{ marginRight: '8px', marginBottom: '-8px' }}
                />
                {name} ({symbol})
            </Text>
            <Text
                fontSize=".88rem"
                width='240px'
                ml='6rem'
                color='gray'
            >
                {price}
            </Text>
            <Chart
                type='line'
                width={160}
                //@ts-ignore
                options={options}
                series={series}
            />
        </Flex>
    )
}