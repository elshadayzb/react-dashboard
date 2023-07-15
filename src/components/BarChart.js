import { useTheme } from "@mui/material";
import { ResponsiveBar } from '@nivo/bar';
import { colorTokens } from "../theme";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const data = [
    {
      "country": "AD",
      "hot dog": 172,
      "hot dogColor": "hsl(89, 70%, 50%)",
      "burger": 96,
      "burgerColor": "hsl(103, 70%, 50%)",
      "sandwich": 104,
      "sandwichColor": "hsl(137, 70%, 50%)",
      "kebab": 17,
      "kebabColor": "hsl(173, 70%, 50%)",
      "fries": 36,
      "friesColor": "hsl(209, 70%, 50%)",
      "donut": 110,
      "donutColor": "hsl(183, 70%, 50%)"
    },
    {
      "country": "AE",
      "hot dog": 3,
      "hot dogColor": "hsl(154, 70%, 50%)",
      "burger": 17,
      "burgerColor": "hsl(287, 70%, 50%)",
      "sandwich": 9,
      "sandwichColor": "hsl(342, 70%, 50%)",
      "kebab": 130,
      "kebabColor": "hsl(34, 70%, 50%)",
      "fries": 112,
      "friesColor": "hsl(127, 70%, 50%)",
      "donut": 100,
      "donutColor": "hsl(107, 70%, 50%)"
    },
    {
      "country": "AF",
      "hot dog": 42,
      "hot dogColor": "hsl(158, 70%, 50%)",
      "burger": 51,
      "burgerColor": "hsl(65, 70%, 50%)",
      "sandwich": 177,
      "sandwichColor": "hsl(304, 70%, 50%)",
      "kebab": 165,
      "kebabColor": "hsl(76, 70%, 50%)",
      "fries": 94,
      "friesColor": "hsl(179, 70%, 50%)",
      "donut": 186,
      "donutColor": "hsl(320, 70%, 50%)"
    },
    {
      "country": "AG",
      "hot dog": 187,
      "hot dogColor": "hsl(277, 70%, 50%)",
      "burger": 28,
      "burgerColor": "hsl(148, 70%, 50%)",
      "sandwich": 64,
      "sandwichColor": "hsl(48, 70%, 50%)",
      "kebab": 109,
      "kebabColor": "hsl(42, 70%, 50%)",
      "fries": 30,
      "friesColor": "hsl(34, 70%, 50%)",
      "donut": 118,
      "donutColor": "hsl(34, 70%, 50%)"
    },
    {
      "country": "AI",
      "hot dog": 52,
      "hot dogColor": "hsl(106, 70%, 50%)",
      "burger": 81,
      "burgerColor": "hsl(248, 70%, 50%)",
      "sandwich": 111,
      "sandwichColor": "hsl(38, 70%, 50%)",
      "kebab": 71,
      "kebabColor": "hsl(288, 70%, 50%)",
      "fries": 74,
      "friesColor": "hsl(4, 70%, 50%)",
      "donut": 37,
      "donutColor": "hsl(81, 70%, 50%)"
    },
    {
      "country": "AL",
      "hot dog": 193,
      "hot dogColor": "hsl(44, 70%, 50%)",
      "burger": 154,
      "burgerColor": "hsl(106, 70%, 50%)",
      "sandwich": 94,
      "sandwichColor": "hsl(63, 70%, 50%)",
      "kebab": 145,
      "kebabColor": "hsl(325, 70%, 50%)",
      "fries": 160,
      "friesColor": "hsl(59, 70%, 50%)",
      "donut": 46,
      "donutColor": "hsl(128, 70%, 50%)"
    },
    {
      "country": "AM",
      "hot dog": 193,
      "hot dogColor": "hsl(144, 70%, 50%)",
      "burger": 71,
      "burgerColor": "hsl(170, 70%, 50%)",
      "sandwich": 99,
      "sandwichColor": "hsl(266, 70%, 50%)",
      "kebab": 37,
      "kebabColor": "hsl(41, 70%, 50%)",
      "fries": 86,
      "friesColor": "hsl(335, 70%, 50%)",
      "donut": 183,
      "donutColor": "hsl(259, 70%, 50%)"
    }
  ]


export default function BarChart({isDashboard}){
    const theme = useTheme();
    const colors = colorTokens(theme.palette.mode)

    return(
            <ResponsiveBar
                data={data}
                theme={{
                    axis: {
                        domain: {
                            line: {
                                stroke: colors.grey[100]
                            }
                        },
                        legend: {
                            text: {
                                fill: colors.grey[100]
                            }
                        },
                        ticks: {
                            line: {
                                stroke: colors.grey[100],
                                strokeWidth: 1
                            },
                            text: {
                                fill: colors.grey[100]
                            }
                        }
                    },
                    legends: {
                        text: {
                            fill: colors.grey[100]
                        }
                    }
                }}
                keys={[
                    'hot dog',
                    'burger',
                    'sandwich',
                    'kebab',
                    'fries',
                    'donut'
                ]}
                indexBy="country"
                margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                padding={0.3}
                valueScale={{ type: 'linear' }}
                indexScale={{ type: 'band', round: true }}
                colors={{ scheme: 'nivo' }}
                defs={[
                    {
                        id: 'dots',
                        type: 'patternDots',
                        background: 'inherit',
                        color: '#38bcb2',
                        size: 4,
                        padding: 1,
                        stagger: true
                    },
                    {
                        id: 'lines',
                        type: 'patternLines',
                        background: 'inherit',
                        color: '#eed312',
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10
                    }
                ]}
                fill={[
                    {
                        match: {
                            id: 'fries'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'sandwich'
                        },
                        id: 'lines'
                    }
                ]}
                borderColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            1.6
                        ]
                    ]
                }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'country',
                    legendPosition: 'middle',
                    legendOffset: 32
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'food',
                    legendPosition: 'middle',
                    legendOffset: -40
                }}
                labelSkipWidth={12}
                labelSkipHeight={12}
                labelTextColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            1.6
                        ]
                    ]
                }}
                legends={[
                    {
                        dataFrom: 'keys',
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 120,
                        translateY: 0,
                        itemsSpacing: 2,
                        itemWidth: 100,
                        itemHeight: 20,
                        itemDirection: 'left-to-right',
                        itemOpacity: 0.85,
                        symbolSize: 20,
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
                role="application"
                ariaLabel="Nivo bar chart demo"
                barAriaLabel={e=>e.id+": "+e.formattedValue+" in country: "+e.indexValue}
            />
    )
}