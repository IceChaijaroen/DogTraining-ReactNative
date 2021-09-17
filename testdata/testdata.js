import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView, Image, Button, TouchableOpacity } from 'react-native';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";
import { Dimensions } from "react-native";
import { FontAwesome5, Fontisto } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';
import Testslide from './testslide';
import ScreenA from './screenA';
import ButtonToggleGroup from 'react-native-button-toggle-group';


const screenWidth = Dimensions.get("window").width;



export default function showGraph({ navigation }) {
    const [text, onChangeText] = useState("น้องโบ้");
    const [isLoading, setIsLoading] = useState(false);
    const [all, setAll] = useState([]);
    const [jan, setJan] = useState([]);
    const [feb, setFeb] = useState([]);
    const [mar, setMar] = useState([]);
    const [apr, setApr] = useState([]);
    const [may, setMay] = useState([]);
    const [jun, setJun] = useState([]);
    const [jul, setJul] = useState([]);
    const [aug, setAug] = useState([]);
    const [sep, setSep] = useState([]);
    const [oct, setOct] = useState([]);
    const [nov, setNov] = useState([]);
    const [dec, setDec] = useState([]);
    const [thisweek, setThisweek] = useState([]);
    const [lastweek, setLastweek] = useState([]);
    const [twoweek, setTwoweek] = useState([]);
    const [threeweek, setThreeweek] = useState([]);

    const Moment = require('moment')
    const array = [{date:"2018-05-11"},{date:"2018-05-12"},{date:"2018-05-10"}]
    const sortedArray  = array.sort((a,b) => new Moment(a.date).format('YYYYMMDD') - new Moment(b.date).format('YYYYMMDD'))
    console.log(sortedArray);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://35.187.253.40/allstatis.php',
                    {
                        params: {
                            id: 1,
                            udogid: 1
                        }
                    })
                if (response.data == 'null') {

                    alert("null")
                } else {
                    setAll(response.data);
                    setIsLoading(true)
                }
            } catch {
                alert("showdoglevel")
            }
        }
        fetchData();
    }, [isLoading])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://35.187.253.40/statis/threeweek.php',
                    {
                        params: {
                            id: 1,
                            udogid: 1
                        }
                    })
                if (response.data == 'null') {
                    setThreeweek(response.data);
                } else {
                    setThreeweek(response.data);
                }
            } catch {
                alert("showdoglevel")
            }
            try {
                const response = await axios.get('http://35.187.253.40/statis/twoweek.php',
                    {
                        params: {
                            id: 1,
                            udogid: 1
                        }
                    })
                if (response.data == 'null') {
                    setTwoweek(response.data);
                } else {
                    setTwoweek(response.data);
                }
            } catch {
                alert("showdoglevel")
            }
            try {
                const response = await axios.get('http://35.187.253.40/statis/thisweek.php',
                    {
                        params: {
                            id: 1,
                            udogid: 1
                        }
                    })
                if (response.data == 'null') {
                    setThisweek(response.data);
                } else {
                    setThisweek(response.data);
                }
            } catch {
                alert("showdoglevel")
            }
            try {
                const response = await axios.get('http://35.187.253.40/statis/lastweek.php',
                    {
                        params: {
                            id: 1,
                            udogid: 1
                        }
                    })
                if (response.data == 'null') {
                    setLastweek(response.data);
                } else {
                    setLastweek(response.data);
                }
            } catch {
                alert("showdoglevel")
            }
            try {
                const response = await axios.get('http://35.187.253.40/statis/statisjan.php',
                    {
                        params: {
                            id: 1,
                            udogid: 1
                        }
                    })
                if (response.data == 'null') {
                    setJan(response.data);
                } else {
                    setJan(response.data);
                }
            } catch {
                alert("showdoglevel")
            }
            try {
                const response = await axios.get('http://35.187.253.40/statis/statisfeb.php',
                    {
                        params: {
                            id: 1,
                            udogid: 1
                        }
                    })
                if (response.data == 'null') {
                    setFeb(response.data);
                } else {
                    setFeb(response.data);
                }
            } catch {
                alert("showdoglevel")
            }
            try {
                const response = await axios.get('http://35.187.253.40/statis/statismar.php',
                    {
                        params: {
                            id: 1,
                            udogid: 1
                        }
                    })
                if (response.data == 'null') {
                    setMar(response.data);
                } else {
                    setMar(response.data);
                }
            } catch {
                alert("showdoglevel")
            }
            try {
                const response = await axios.get('http://35.187.253.40/statis/statisapr.php',
                    {
                        params: {
                            id: 1,
                            udogid: 1
                        }
                    })
                if (response.data == 'null') {
                    setApr(response.data);
                } else {
                    setApr(response.data);
                }
            } catch {
                alert("showdoglevel")
            }
            try {
                const response = await axios.get('http://35.187.253.40/statis/statismay.php',
                    {
                        params: {
                            id: 1,
                            udogid: 1
                        }
                    })
                if (response.data == 'null') {
                    setMay(response.data);
                } else {
                    setMay(response.data);
                }
            } catch {
                alert("showdoglevel")
            }
            try {
                const response = await axios.get('http://35.187.253.40/statis/statisjun.php',
                    {
                        params: {
                            id: 1,
                            udogid: 1
                        }
                    })
                if (response.data == 'null') {
                    setJun(response.data);
                } else {
                    setJun(response.data);
                }
            } catch {
                alert("showdoglevel")
            }
            try {
                const response = await axios.get('http://35.187.253.40/statis/statisjul.php',
                    {
                        params: {
                            id: 1,
                            udogid: 1
                        }
                    })
                if (response.data == 'null') {
                    setJul(response.data);
                } else {
                    setJul(response.data);
                }
            } catch {
                alert("showdoglevel")
            }
            try {
                const response = await axios.get('http://35.187.253.40/statis/statisaug.php',
                    {
                        params: {
                            id: 1,
                            udogid: 1
                        }
                    })
                if (response.data == 'null') {
                    setAug(response.data);
                } else {
                    setAug(response.data);
                }
            } catch {
                alert("AUG")
            }
            try {
                const response = await axios.get('http://35.187.253.40/statis/statissep.php',
                    {
                        params: {
                            id: 1,
                            udogid: 1
                        }
                    })
                if (response.data == 'null') {
                    setSep(response.data);
                } else {
                    setSep(response.data);
                }
            } catch {
                alert("showdoglevel")
            }
            try {
                const response = await axios.get('http://35.187.253.40/statis/statisoct.php',
                    {
                        params: {
                            id: 1,
                            udogid: 1
                        }
                    })
                if (response.data == 'null') {
                    setOct(response.data);
                } else {
                    setOct(response.data);
                }
            } catch {
                alert("showdoglevel")
            }
            try {
                const response = await axios.get('http://35.187.253.40/statis/statisnov.php',
                    {
                        params: {
                            id: 1,
                            udogid: 1
                        }
                    })
                if (response.data == 'null') {
                    setNov(response.data);
                } else {
                    setNov(response.data);
                }
            } catch {
                alert("showdoglevel")
            }
            try {
                const response = await axios.get('http://35.187.253.40/statis/statisdec.php',
                    {
                        params: {
                            id: 1,
                            udogid: 1
                        }
                    })
                if (response.data == 'null') {
                    setDec(response.data);
                } else {
                    setDec(response.data);
                }
            } catch {
                alert("showdoglevel")
            }
        }
        fetchData();
    }, [isLoading])



    const list = [
        {
            id: 1,
            name: 'สัปดาห์',
            content: <Button1 />,
        },
        {
            id: 2,
            name: 'เดือน',
            content: <Button2 />,
        },
        {
            id: 3,
            name: 'ทั้งหมด',
            content: <Button3 />,
        },

    ]
    const week = [
        {
            id: 1,
            name: 'สัปดาห์นี้',
            content: <Week1 />,
        },
        {
            id: 2,
            name: 'สัปดาห์ที่แล้ว',
            content: <Week2 />,
        },
        {
            id: 3,
            name: '2 สัปดาห์ที่แล้ว',
            content: <Week3 />,
        },
        {
            id: 4,
            name: '3 สัปดาห์ที่แล้ว',
            content: <Week4 />,
        },

    ];

    {/**-------------------------------------------- Week----------------------------------------------- */ }
    function Week4() {
        return (
            <>
                {isLoading ? (
                    <ScrollView style={{ width: '100%' }} horizontal={true}>
                        <View style={{ width: '100%', height: 290 }}>

                            <LineChart
                                style={{ flex: 1, width: '90%', height: '100%' }}
                                data={{
                                    labels: threeweek.map(item => ('วันที่ '+item.day+' เดือน '+item.month)),
                                    datasets: [
                                        {
                                            data: threeweek.map(item => (item.sumexer)),
                                            color: (opacity = 1) => `rgba(166, 206, 227)`, // optional
                                            strokeWidth: 2 // optional
                                        }
                                    ],
                                    legend: ["Dog stastic"] // optional
                                }}
                                width={'1000'}
                                height={255}
                                verticalLabelRotation={10}
                                chartConfig={chartConfig}
                                bezier
                            />
                        </View>
                    </ScrollView>
                    // If there is a delay in data, let's let the user know it's loading
                ) : (
                    <Text>Loading...</Text>
                )}
            </>
        )
    }
    function Week3() {
        return (
            <>
                {isLoading ? (
                    <ScrollView style={{ width: '100%' }} horizontal={true}>
                        <View style={{ width: '100%', height: 290 }}>

                            <LineChart
                                style={{ flex: 1, width: '90%', height: '100%' }}
                                data={{
                                    labels: twoweek.map(item => ('วันที่ '+item.day+' เดือน '+item.month)),
                                    datasets: [
                                        {
                                            data: twoweek.map(item => (item.sumexer)),
                                            color: (opacity = 1) => `rgba(166, 206, 227)`, // optional
                                            strokeWidth: 2 // optional
                                        }
                                    ],
                                    legend: ["Dog stastic"] // optional
                                }}
                                width={'1000'}
                                height={255}
                                verticalLabelRotation={10}
                                chartConfig={chartConfig}
                                bezier
                            />
                        </View>
                    </ScrollView>
                    // If there is a delay in data, let's let the user know it's loading
                ) : (
                    <Text>Loading...</Text>
                )}
            </>
        )
    }
    function Week2() {
        return (
            <>
                {isLoading ? (
                    <ScrollView style={{ width: '100%' }} horizontal={true}>
                        <View style={{ width: '100%', height: 290 }}>

                            <LineChart
                                style={{ flex: 1, width: '90%', height: '100%' }}
                                data={{
                                    labels: lastweek.map(item => ('วันที่ '+item.day+' เดือน '+item.month)),
                                    datasets: [
                                        {
                                            data: lastweek.map(item => (item.sumexer)),
                                            color: (opacity = 1) => `rgba(166, 206, 227)`, // optional
                                            strokeWidth: 2 // optional
                                        }
                                    ],
                                    legend: ["Dog stastic"] // optional
                                }}
                                width={'1000'}
                                height={255}
                                verticalLabelRotation={10}
                                chartConfig={chartConfig}
                                bezier
                            />
                        </View>
                    </ScrollView>
                    // If there is a delay in data, let's let the user know it's loading
                ) : (
                    <Text>Loading...</Text>
                )}
            </>
        )
    }
    function Week1() {
        return (
            <>
                {isLoading ? (
                    <ScrollView style={{ width: '100%' }} horizontal={true}>
                        <View style={{ width: '100%', height: 290 }}>

                            <LineChart
                                style={{ flex: 1, width: '90%', height: '100%' }}
                                data={{
                                    labels: thisweek.map(item => ('วันที่ '+item.day+' เดือน '+item.month)),
                                    datasets: [
                                        {
                                            data: thisweek.map(item => (item.sumexer)),
                                            color: (opacity = 1) => `rgba(166, 206, 227)`, // optional
                                            strokeWidth: 2 // optional
                                        }
                                    ],
                                    legend: ["Dog stastic"] // optional
                                }}
                                width={'1000'}
                                height={255}
                                verticalLabelRotation={10}
                                chartConfig={chartConfig}
                                bezier
                            />
                        </View>
                    </ScrollView>
                    // If there is a delay in data, let's let the user know it's loading
                ) : (
                    <Text>Loading...</Text>
                )}
            </>
        )
    }
    function Button1() {
        const [active, setActive] = useState(<Week1 />);
        return (
            <>
                <View style={{ width: '100%', flexDirection: 'row' }}>
                    <ScrollView horizontal>
                    {week.map(item => (
                        <TouchableOpacity
                            style={{
                                height: 28,
                                width: 100,
                                backgroundColor: active == item.content ? '#555555' : 'white',
                                borderRadius: 8,
                                margin: 10,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderColor: '#555555',
                                elevation: 5
                            }}
                            key={item.content}
                            active={active === item.content}
                            onPress={() => setActive(item.content)}
                        >
                            <Text style={{ color: active == item.content ? 'white' : '#555555' }}>{item.name}</Text>
                        </TouchableOpacity>
                    ))}
                    </ScrollView>
                </View>
                <View style={{ width: '100%', justifyContent: 'center' }}>
                    {active}
                </View>

            </>
        )
    }
    {/**-------------------------------------------- Week----------------------------------------------- */ }



    const month = [
        {
            id: 1,
            name: 'ม.ค',
            content: <Month1 />,
        },
        {
            id: 2,
            name: 'ก.พ',
            content: <Month2 />,
        },
        {
            id: 3,
            name: 'มี.ค.',
            content: <Month3 />,
        },
        {
            id: 4,
            name: 'เม.ษ.',
            content: <Month4 />,
        },
        {
            id: 5,
            name: 'พ.ค.',
            content: <Month5 />,
        },
        {
            id: 6,
            name: 'มิ.ย.',
            content: <Month6 />,
        },
        {
            id: 7,
            name: 'ก.ค.',
            content: <Month7 />,
        },
        {
            id: 8,
            name: 'ส.ค.',
            content: <Month8 />,
        },
        {
            id: 9,
            name: 'ก.ย.',
            content: <Month9 />,
        },
        {
            id: 10,
            name: 'ต.ค.',
            content: <Month10 />,
        },
        {
            id: 11,
            name: 'พ.ย.',
            content: <Month11 />,
        },
        {
            id: 12,
            name: 'ธ.ค.',
            content: <Month12 />,
        }

    ];
    function Button2() {

        const [active, setActive] = useState(<Month1 />);
        return (
            <>
                <View style={{ width: '100%', flexDirection: 'row', padding: 5 }}>
                    <ScrollView horizontal>
                        {month.map(item => (
                            <TouchableOpacity
                                style={{
                                    height: 25,
                                    width: 50,
                                    backgroundColor: active == item.content ? '#555555' : 'white',
                                    borderRadius: 8,
                                    margin: 5,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderColor: '#555555',
                                    elevation: 5
                                }}
                                key={item.content}
                                active={active === item.content}
                                onPress={() => setActive(item.content)}
                            >
                                <Text style={{ color: active == item.content ? 'white' : '#555555' }}>{item.name}</Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>
                <View style={{ width: '100%', justifyContent: 'center' }}>
                    {active}
                </View>

            </>
        )
    }
    function Month1() {
        return (
            <>
                {isLoading ? (
                    <ScrollView style={{ width: '100%' }} horizontal={true}>
                        <View style={{ width: '100%', height: 290 }}>

                            <LineChart
                                style={{ flex: 1, width: '90%', height: '100%' }}
                                data={{
                                    labels: jan.map(item => ('วันที่ '+item.day)),
                                    datasets: [
                                        {
                                            data: jan.map(item => (item.sumexer)),
                                            color: (opacity = 1) => `rgba(166, 206, 227)`, // optional
                                            strokeWidth: 2 // optional
                                        }
                                    ],
                                    legend: ["Dog stastic"] // optional
                                }}
                                width={'400'}
                                height={255}
                                verticalLabelRotation={10}
                                chartConfig={chartConfig}
                                bezier
                            />
                        </View>
                    </ScrollView>
                    // If there is a delay in data, let's let the user know it's loading
                ) : (
                    <Text>Loading...</Text>
                )}
            </>
        )
    }
    function Month2() {
        return (
            <>
                {isLoading ? (
                    <ScrollView style={{ width: '100%' }} horizontal={true}>
                        <View style={{ width: '100%', height: 290 }}>

                            <LineChart
                                style={{ flex: 1, width: '90%', height: '100%' }}
                                data={{
                                    labels: feb.map(item => ('วันที่ '+item.day)),
                                    datasets: [
                                        {
                                            data: feb.map(item => (item.sumexer)),
                                            color: (opacity = 1) => `rgba(166, 206, 227)`, // optional
                                            strokeWidth: 2 // optional
                                        }
                                    ],
                                    legend: ["Dog stastic"] // optional
                                }}
                                width={'400'}
                                height={255}
                                verticalLabelRotation={10}
                                chartConfig={chartConfig}
                                bezier
                            />
                        </View>
                    </ScrollView>
                    // If there is a delay in data, let's let the user know it's loading
                ) : (
                    <Text>Loading...</Text>
                )}
            </>
        )
    }
    function Month3() {
        return (
            <>
                {isLoading ? (
                    <ScrollView style={{ width: '100%' }} horizontal={true}>
                        <View style={{ width: '100%', height: 290 }}>

                            <LineChart
                                style={{ flex: 1, width: '90%', height: '100%' }}
                                data={{
                                    labels: mar.map(item => ('วันที่ '+item.day)),
                                    datasets: [
                                        {
                                            data: mar.map(item => (item.sumexer)),
                                            color: (opacity = 1) => `rgba(166, 206, 227)`, // optional
                                            strokeWidth: 2 // optional
                                        }
                                    ],
                                    legend: ["Dog stastic"] // optional
                                }}
                                width={'400'}
                                height={255}
                                verticalLabelRotation={10}
                                chartConfig={chartConfig}
                                bezier
                            />
                        </View>
                    </ScrollView>
                    // If there is a delay in data, let's let the user know it's loading
                ) : (
                    <Text>Loading...</Text>
                )}
            </>
        )
    }
    function Month4() {
        return (
            <>
                {isLoading ? (
                    <>
                        {apr == 'null' ? (
                            <Text> ยังไม่มีสถิติ </Text>
                        ) : (
                            <ScrollView style={{ width: '100%' }} horizontal={true}>
                                <View style={{ width: '100%', height: 290 }}>

                                    <LineChart
                                        style={{ flex: 1, width: '90%', height: '100%' }}
                                        data={{
                                            labels: apr.map(item => ('วันที่ '+item.day)),
                                            datasets: [
                                                {
                                                    data: apr.map(item => (item.sumexer)),
                                                    color: (opacity = 1) => `rgba(166, 206, 227)`, // optional
                                                    strokeWidth: 2 // optional
                                                }
                                            ],
                                            legend: ["Dog stastic"] // optional
                                        }}
                                        width={'400'}
                                        height={255}
                                        verticalLabelRotation={10}
                                        chartConfig={chartConfig}
                                        bezier
                                    />
                                </View>
                            </ScrollView>
                        )}


                    </>
                    // If there is a delay in data, let's let the user know it's loading
                ) : (
                    <Text>Loading...</Text>

                )}
            </>
        )
    }
    function Month5() {
        return (
            <>
                {isLoading ? (
                    <>
                        {may == 'null' ? (
                            <Text> ยังไม่มีสถิติ </Text>
                        ) : (
                            <ScrollView style={{ width: '100%' }} horizontal={true}>
                                <View style={{ width: '100%', height: 290 }}>

                                    <LineChart
                                        style={{ flex: 1, width: '90%', height: '100%' }}
                                        data={{
                                            labels: may.map(item => ('วันที่ '+item.day)),
                                            datasets: [
                                                {
                                                    data: may.map(item => (item.sumexer)),
                                                    color: (opacity = 1) => `rgba(166, 206, 227)`, // optional
                                                    strokeWidth: 2 // optional
                                                }
                                            ],
                                            legend: ["Dog stastic"] // optional
                                        }}
                                        width={'400'}
                                        height={255}
                                        verticalLabelRotation={10}
                                        chartConfig={chartConfig}
                                        bezier
                                    />
                                </View>
                            </ScrollView>
                        )}


                    </>
                    // If there is a delay in data, let's let the user know it's loading
                ) : (
                    <Text>Loading...</Text>

                )}
            </>
        )
    }
    function Month6() {
        return (
            <>
                {isLoading ? (
                    <>
                        {jun == 'null' ? (
                            <Text> ยังไม่มีสถิติ </Text>
                        ) : (
                            <ScrollView style={{ width: '100%' }} horizontal={true}>
                                <View style={{ width: '100%', height: 290 }}>

                                    <LineChart
                                        style={{ flex: 1, width: '90%', height: '100%' }}
                                        data={{
                                            labels: jun.map(item => ('วันที่ '+item.day)),
                                            datasets: [
                                                {
                                                    data: jun.map(item => (item.sumexer)),
                                                    color: (opacity = 1) => `rgba(166, 206, 227)`, // optional
                                                    strokeWidth: 2 // optional
                                                }
                                            ],
                                            legend: ["Dog stastic"] // optional
                                        }}
                                        width={'400'}
                                        height={255}
                                        verticalLabelRotation={10}
                                        chartConfig={chartConfig}
                                        bezier
                                    />
                                </View>
                            </ScrollView>
                        )}


                    </>
                    // If there is a delay in data, let's let the user know it's loading
                ) : (
                    <Text>Loading...</Text>

                )}
            </>
        )
    }
    function Month7() {
        return (
            <>
                {isLoading ? (
                    <>
                       
                       {jul == 'null' ? (
                            <Text> ยังไม่มีสถิติ </Text>
                        ) : (
                            <ScrollView style={{ width: '100%' }} horizontal={true}>
                                <View style={{ width: '100%', height: 290 }}>

                                    <LineChart
                                        style={{ flex: 1, width: '90%', height: '100%' }}
                                        data={{
                                            labels: jul.map(item => ('วันที่ '+item.day)),
                                            datasets: [
                                                {
                                                    data: jul.map(item => (item.sumexer)),
                                                    color: (opacity = 1) => `rgba(166, 206, 227)`, // optional
                                                    strokeWidth: 2 // optional
                                                }
                                            ],
                                            legend: ["Dog stastic"] // optional
                                        }}
                                        width={'400'}
                                        height={255}
                                        verticalLabelRotation={10}
                                        chartConfig={chartConfig}
                                        bezier
                                    />
                                </View>
                            </ScrollView>
                        )}


                 
                    </>
                    // If there is a delay in data, let's let the user know it's loading
                ) : (
                    <Text>Loading...</Text>

                )}
            </>
        )
    }
    function Month8() {
        return (
            <>
               {isLoading ? (
                    <>
                        {aug == 'null' ? (
                            <Text> ยังไม่มีสถิติ </Text>
                        ) : (
                            <ScrollView style={{ width: '100%' }} horizontal={true}>
                                <View style={{ width: '100%', height: 290 }}>

                                    <LineChart
                                        style={{ flex: 1, width: '90%', height: '100%' }}
                                        data={{
                                            labels: aug.map(item => ('วันที่ '+item.day)),
                                            datasets: [
                                                {
                                                    data: aug.map(item => (item.sumexer)),
                                                    color: (opacity = 1) => `rgba(166, 206, 227)`, // optional
                                                    strokeWidth: 2 // optional
                                                }
                                            ],
                                            legend: ["Dog stastic"] // optional
                                        }}
                                        width={'400'}
                                        height={255}
                                        verticalLabelRotation={10}
                                        chartConfig={chartConfig}
                                        bezier
                                    />
                                </View>
                            </ScrollView>
                        )}


                    </>
                    // If there is a delay in data, let's let the user know it's loading
                ) : (
                    <Text>Loading...</Text>

                )}
            </>
        )
    }
    function Month9() {
        return (
            <>
               {isLoading ? (
                    <>
                        {sep == 'null' ? (
                            <Text> ยังไม่มีสถิติ </Text>
                        ) : (
                            <ScrollView style={{ width: '100%' }} horizontal={true}>
                                <View style={{ width: '100%', height: 290 }}>

                                    <LineChart
                                        style={{ flex: 1, width: '90%', height: '100%' }}
                                        data={{
                                            labels: sep.map(item => ('วันที่ '+item.day)),
                                            datasets: [
                                                {
                                                    data: sep.map(item => (item.sumexer)),
                                                    color: (opacity = 1) => `rgba(166, 206, 227)`, // optional
                                                    strokeWidth: 2 // optional
                                                }
                                            ],
                                            legend: ["Dog stastic"] // optional
                                        }}
                                        width={'400'}
                                        height={255}
                                        verticalLabelRotation={10}
                                        chartConfig={chartConfig}
                                        bezier
                                    />
                                </View>
                            </ScrollView>
                        )}


                    </>
                    // If there is a delay in data, let's let the user know it's loading
                ) : (
                    <Text>Loading...</Text>

                )}
            </>
        )
    }
    function Month10() {
        return (
            <>
                {isLoading ? (
                    <>
                        {oct == 'null' ? (
                            <Text> ยังไม่มีสถิติ </Text>
                        ) : (
                            <ScrollView style={{ width: '100%' }} horizontal={true}>
                                <View style={{ width: '100%', height: 290 }}>

                                    <LineChart
                                        style={{ flex: 1, width: '90%', height: '100%' }}
                                        data={{
                                            labels: oct.map(item => ('วันที่ '+item.day)),
                                            datasets: [
                                                {
                                                    data: oct.map(item => (item.sumexer)),
                                                    color: (opacity = 1) => `rgba(166, 206, 227)`, // optional
                                                    strokeWidth: 2 // optional
                                                }
                                            ],
                                            legend: ["Dog stastic"] // optional
                                        }}
                                        width={'400'}
                                        height={255}
                                        verticalLabelRotation={10}
                                        chartConfig={chartConfig}
                                        bezier
                                    />
                                </View>
                            </ScrollView>
                        )}


                    </>
                    // If there is a delay in data, let's let the user know it's loading
                ) : (
                    <Text>Loading...</Text>

                )}
            </>
        )
    }
    function Month11() {
        return (
            <>
                {isLoading ? (
                    <>
                        {nov == 'null' ? (
                            <Text> ยังไม่มีสถิติ </Text>
                        ) : (
                            <ScrollView style={{ width: '100%' }} horizontal={true}>
                                <View style={{ width: '100%', height: 290 }}>

                                    <LineChart
                                        style={{ flex: 1, width: '90%', height: '100%' }}
                                        data={{
                                            labels: nov.map(item => ('วันที่ '+item.day)),
                                            datasets: [
                                                {
                                                    data: nov.map(item => (item.sumexer)),
                                                    color: (opacity = 1) => `rgba(166, 206, 227)`, // optional
                                                    strokeWidth: 2 // optional
                                                }
                                            ],
                                            legend: ["Dog stastic"] // optional
                                        }}
                                        width={'400'}
                                        height={255}
                                        verticalLabelRotation={10}
                                        chartConfig={chartConfig}
                                        bezier
                                    />
                                </View>
                            </ScrollView>
                        )}


                    </>
                    // If there is a delay in data, let's let the user know it's loading
                ) : (
                    <Text>Loading...</Text>

                )}
            </>
        )
    }
    function Month12() {
        return (
            <>
                {isLoading ? (
                    <>
                        {dec == 'null' ? (
                            <Text> ยังไม่มีสถิติ </Text>
                        ) : (
                            <ScrollView style={{ width: '100%' }} horizontal={true}>
                                <View style={{ width: '100%', height: 290 }}>

                                    <LineChart
                                        style={{ flex: 1, width: '90%', height: '100%' }}
                                        data={{
                                            labels: dec.map(item => ('วันที่ '+item.day)),
                                            datasets: [
                                                {
                                                    data: dec.map(item => (item.sumexer)),
                                                    color: (opacity = 1) => `rgba(166, 206, 227)`, // optional
                                                    strokeWidth: 2 // optional
                                                }
                                            ],
                                            legend: ["Dog stastic"] // optional
                                        }}
                                        width={'400'}
                                        height={255}
                                        verticalLabelRotation={10}
                                        chartConfig={chartConfig}
                                        bezier
                                    />
                                </View>
                            </ScrollView>
                        )}


                    </>
                    // If there is a delay in data, let's let the user know it's loading
                ) : (
                    <Text>Loading...</Text>

                )}
            </>
        )
    }



    function Button3() {

        function All() {
            return (
                <>
                    {isLoading ? (
                        <ScrollView style={{ width: '100%' }} horizontal={true}>
                            <View style={{ width: '100%', height: 290 }}>

                                <LineChart
                                    style={{ flex: 1, width: '90%', height: '100%' }}
                                    data={{
                                        labels: all.map(item => (item.day)),
                                        datasets: [
                                            {
                                                data: all.map(item => (item.sumexer)),
                                                color: (opacity = 1) => `rgba(166, 206, 227)`, // optional
                                                strokeWidth: 2 // optional
                                            }
                                        ],
                                        legend: ["Dog stastic"] // optional
                                    }}
                                    width={'1000'}
                                    height={255}
                                    verticalLabelRotation={10}
                                    chartConfig={chartConfig}
                                    bezier
                                />
                            </View>
                        </ScrollView>
                        // If there is a delay in data, let's let the user know it's loading
                    ) : (
                        <Text>Loading...</Text>
                    )}
                </>
            )
        }
        const [active, setActive] = useState(<All />);
        return (
            <>
                <View style={{ width: '100%', flexDirection: 'row' }}>

                    <TouchableOpacity
                        style={{ width: 80, margin: 10, justifyContent: 'center', alignItems: 'center' }}

                    >
                        <Text style={{ color: 'white' }}></Text>
                    </TouchableOpacity>
                </View>
                <View style={{ width: '100%', justifyContent: 'center' }}>
                    {active}
                </View>

            </>
        )
    }



    function getIndex(content) {
        return list.findIndex(obj => obj.content === content);
    }

    function TabGroup() {
        const [active, setActive] = useState(<Button3 />);


        return (
            <>
                <View style={{ width: 100, height: 30, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    {list.map((item, k) => (
                        <>
                            <TouchableOpacity
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    backgroundColor: active == item.content ? '#555555' : 'white',
                                    borderRadius: 8,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    margin: 10,
                                    borderColor: '#555555',
                                    elevation: 5
                                }}
                                key={item.content}
                                active={active === item.content}
                                onPress={() => setActive(item.content)}
                            >
                                <Text style={{ color: active == item.content ? 'white' : '#555555' }}>{item.name}</Text>
                            </TouchableOpacity>

                        </>
                    ))}

                </View>
                <View style={{ width: '100%', justifyContent: 'center' }}>
                    {active}
                </View>
            </>
        )
    }



    {/**  useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://35.187.253.40/allstatis.php', {
                    params: {
                        id: 1,
                        udogid: 1
                    }
                })
                setAll(response.data)
                setIsLoading(true);
            } catch (err) {
                alert(err)
            }
        }
        fetchData();
    }, [all])
*/}





    const alldata = {
        labels: all.map(item => (
            item.day
        )),
        datasets: [
            {
                data: all.map(item => (
                    item.step
                )),
                color: (opacity = 1) => `rgba(166, 206, 227)`, // optional
                strokeWidth: 2 // optional
            }
        ],
        legend: ["Dog stastic"] // optional
    };

    const eachdata = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
            {
                data: [20, 10, 50, 77, 5, 66],
                color: (opacity = 1) => `rgba(166, 206, 227)`, // optional
                strokeWidth: 2 // optional
            }
        ],
        legend: ["Dog stance stastic"] // optional
    };

    const chartConfig = {
        backgroundGradientFrom: "#000000",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#FFFFFF",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(163, 163, 163, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
    };

    return (
        <>
            {/* -------------------------------Header----------------------------------------- */}
            <View style={styles.header}>
                <View style={{ width: '45%', flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}>
                        <Icon
                            name="arrow-left"
                            size={25}
                            color={'white'}

                        />
                    </TouchableOpacity>
                    <Text style={{ marginLeft: 15, fontSize: 27, color: 'white', fontFamily: 'FC_Iconic' }}>สถิติโดยรวม</Text>
                </View>
                <View style={{ width: '45%', alignItems: 'flex-end', }}>


                </View>
            </View>
            {/* -------------------------------Header----------------------------------------- */}



            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.card}>
                        <View style={{ padding: 30, width: '90%' }}>
                            <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontSize: 34, color: '#575757', fontFamily: 'FC_Iconic' }}>สถิติโดยรวม</Text>
                                <View style={{ marginTop: 20, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                    <TabGroup />
                                </View>
                            </View>

                            <View style={{ width: '100%', justifyContent: 'center' }}>
                                {/**       {isLoading ? (
                                    <ScrollView style={{ width: '90%' }} horizontal={true}>
                                        <View style={{ width: '100%', height: 290 }}>

                                            <LineChart
                                                style={{ flex: 1, width: '90%', height: '100%' }}
                                                data={{
                                                    labels: all.map(item => (
                                                        item.day
                                                    )),
                                                    datasets: [
                                                        {
                                                            data: all.map(item => (
                                                                item.step
                                                            )),
                                                            color: (opacity = 1) => `rgba(166, 206, 227)`, // optional
                                                            strokeWidth: 2 // optional
                                                        }
                                                    ],
                                                    legend: ["Dog stastic"] // optional
                                                }}
                                                width={'1000'}
                                                height={255}
                                                verticalLabelRotation={10}
                                                chartConfig={chartConfig}
                                                bezier
                                            />
                                        </View>
                                    </ScrollView>
                                    // If there is a delay in data, let's let the user know it's loading
                                ) : (
                                    <Text>Loading...</Text>
                                )}*/}
                            </View>


                        </View>
                    </View>
                </View>
            </ScrollView>

        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        marginBottom: 100,
    },
    card: {
        alignItems: 'center',
        width: '90%',
        height: '100%',
        backgroundColor: 'white',
        borderRadius: 50,
        margin: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 6
    },
    rowcontent: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
    },
    button: {
        borderRadius: 30,
        backgroundColor: '#838383',
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5
    },
    button2: {
        borderRadius: 30,
        backgroundColor: 'white',
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5
    },
    buttontext: {
        color: 'white',
        fontSize: 15,
        fontFamily: 'FC_Iconic'
    },
    buttontext2: {
        color: '#555555',
        fontSize: 15,
        fontFamily: 'FC_Iconic'
    },
    headercontainer: {
        width: '100%',
        height: '15%',
        backgroundColor: 'white'
    },
    header: {
        width: '100%',
        height: 80,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#008891',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 6
    },
    headertext: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
        letterSpacing: 1,
    }

});
