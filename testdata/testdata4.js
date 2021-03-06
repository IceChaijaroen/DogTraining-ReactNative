import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView, Image, Button, TouchableOpacity, FlatList } from 'react-native';
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



export default function testdata4({ navigation }) {
    const [text, onChangeText] = useState("น้องโบ้");
    const [isLoadingyear, setIsLoadingyear] = useState(false);
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
    const [yearmonth, setYearMonth] = useState(2021);
    const [allyear, setAllyear] = useState(2021);
    const [setmonth, setSetmonth] = useState(1);
    const [active, setActive] = useState(4);
    const [isLoadingmonth, setIsLoadingmonth] = useState(false);
    const [begin, setBegin] = useState(1);
    const [end, setEnd] = useState(0);
    const [isLoadingweek, setIsLoadingweek] = useState(false);
    const [weekvalue, setWeekvalue] = useState([]);
    const [loadingpage, setLoadingpage] = useState(false);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://35.187.253.40/allstatis.php',
                    {
                        params: {
                            year: allyear,
                            id: 1,
                            udogid: 1,
                        }
                    })
                if (response.data == 'null') {
                    setIsLoadingyear(true);
                    setAll(response.data);
                } else {
                    setIsLoadingyear(true);
                    setLoadingpage(true);
                    setAll(response.data);
                }
            } catch {
                alert("allstatis")
            }
        }
        fetchData();
    }, [allyear])


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://35.187.253.40/statis/threeweek.php',
                    {
                        params: {
                            id: 1,
                            udogid: 1,
                            begin: begin,
                            end: end
                        }
                    })
                if (response.data == 'null') {
                    setIsLoadingweek(true);
                    setWeekvalue(response.data);
                } else {
                    setIsLoadingweek(true);
                    setWeekvalue(response.data);
                }
            } catch {
                alert("threeweek")
            }
        }
        fetchData();
    }, [begin])


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://35.187.253.40/statis/statisjan.php',
                    {
                        params: {
                            id: 1,
                            udogid: 1,
                            year: yearmonth,
                            month: setmonth
                        }
                    })
                if (response.data == 'null') {
                    setIsLoadingmonth(true);
                    setJan(response.data);
                } else {
                    setIsLoadingmonth(true);
                    setJan(response.data);
                }
            } catch {
                alert("statisjan")
            }
        }
        fetchData();
    }, [setmonth, yearmonth])



    const list = [
        {
            id: 1,
            name: 'สัปดาห์',
        },
        {
            id: 2,
            name: 'เดือน',
        },
        {
            id: 3,
            name: 'ปี',
        },

    ]
    const week = [
        {
            id: 1,
            name: 'สัปดาห์นี้',
            value: 1,
            value2: 0
        },
        {
            id: 2,
            name: 'สัปดาห์ที่แล้ว',
            value: 2,
            value2: 1
        },
        {
            id: 3,
            name: '2 สัปดาห์ที่แล้ว',
            value: 3,
            value2: 2
        },
        {
            id: 4,
            name: '3 สัปดาห์ที่แล้ว',
            value: 4,
            value2: 3
        },

    ];



    const month = [
        {
            id: 1,
            name: 'ม.ค',

        },
        {
            id: 2,
            name: 'ก.พ',
        },
        {
            id: 3,
            name: 'มี.ค.',
        },
        {
            id: 4,
            name: 'เม.ษ.',
        },
        {
            id: 5,
            name: 'พ.ค.',
        },
        {
            id: 6,
            name: 'มิ.ย.',
        },
        {
            id: 7,
            name: 'ก.ค.',
        },
        {
            id: 8,
            name: 'ส.ค.',
        },
        {
            id: 9,
            name: 'ก.ย.',
        },
        {
            id: 10,
            name: 'ต.ค.',
        },
        {
            id: 11,
            name: 'พ.ย.',
        },
        {
            id: 12,
            name: 'ธ.ค.',
        }

    ];


    const setyear = [
        {
            id: 2018,
        },
        {
            id: 2019,
        },
        {
            id: 2020,
        },
        {
            id: 2021,
        }
    ]


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
                                <Text style={{ fontSize: 34, color: '#575757', fontFamily: 'FC_Iconic' }}>พัฒนาการโดยรวม</Text>
                                <View style={{ marginTop: 20, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                    <View style={{ width: 100, height: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                        {list.map(item => (
                                            <>
                                                <TouchableOpacity
                                                    style={{
                                                        width: 80,
                                                        height: 30,
                                                        backgroundColor: active == item.id ? '#555555' : 'white',
                                                        borderRadius: 8,
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        margin: 10,
                                                        borderColor: '#555555',
                                                        elevation: 5,
                                                    }}
                                                    key={item.id}
                                                    active={active === item.id}
                                                    onPress={() => setActive(item.id)}
                                                >
                                                    <Text style={{ color: active == item.id ? 'white' : '#555555' }}>{item.name}</Text>
                                                </TouchableOpacity>
                                            </>
                                        ))}
                                    </View>
                                </View>
                            </View>

                            <View style={{ width: '100%', justifyContent: 'center' }}>

                               
                                                {(() => {
                                                    if (active == 1) {
                                                        return (
                                                            <>
                                                                <View style={{ width: '100%', flexDirection: 'row', padding: 5 }}>
                                                                    <ScrollView horizontal>
                                                                        {week.map((item) => (
                                                                            <TouchableOpacity
                                                                                style={{
                                                                                    height: 27,
                                                                                    width: 80,
                                                                                    backgroundColor: begin == item.id ? '#555555' : 'white',
                                                                                    borderRadius: 8,
                                                                                    margin: 5,
                                                                                    justifyContent: 'center',
                                                                                    alignItems: 'center',
                                                                                    borderColor: '#555555',
                                                                                    elevation: 5
                                                                                }}
                                                                                key={item.id}
                                                                                active={begin === item.id}
                                                                                onPress={() => { setBegin(item.value); setEnd(item.value2) }}
                                                                            >
                                                                                <Text style={{ color: begin == item.id ? 'white' : '#555555', fontSize: 12 }}>{item.name}</Text>
                                                                            </TouchableOpacity>
                                                                        ))}
                                                                    </ScrollView>
                                                                </View>
                                                                {isLoadingweek ? (
                                                                    <>
                                                                        {weekvalue == 'null' ? (
                                                                            <>
                                                                                <Text>Null</Text>
                                                                            </>
                                                                        ) : (
                                                                            <>

                                                                                <ScrollView style={{ width: '100%' }} horizontal={true}>
                                                                                    <View style={{ width: '100%', height: 290 }}>

                                                                                        <LineChart
                                                                                            style={{ flex: 1, width: '90%', height: '100%' }}
                                                                                            data={{
                                                                                                labels: weekvalue.map(item => (item.day)),
                                                                                                datasets: [
                                                                                                    {
                                                                                                        data: weekvalue.map(item => (item.sumexer)),
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
                                                                            </>
                                                                        )}

                                                                    </>
                                                                ) : (
                                                                    <Text>Loading...</Text>
                                                                )}
                                                            </>
                                                        )
                                                    } else if (active == 2) {
                                                        return (
                                                            <>
                                                                <View style={{ width: '100%', flexDirection: 'row', padding: 5 }}>
                                                                    <ScrollView horizontal>
                                                                        {setyear.map((item) => (
                                                                            <TouchableOpacity
                                                                                style={{
                                                                                    height: 25,
                                                                                    width: 50,
                                                                                    backgroundColor: yearmonth == item.id ? '#555555' : 'white',
                                                                                    borderRadius: 8,
                                                                                    margin: 5,
                                                                                    justifyContent: 'center',
                                                                                    alignItems: 'center',
                                                                                    borderColor: '#555555',
                                                                                    elevation: 5
                                                                                }}
                                                                                key={item.id}
                                                                                active={yearmonth === item.id}
                                                                                onPress={() => setYearMonth(item.id)}
                                                                            >
                                                                                <Text style={{ color: yearmonth == item.id ? 'white' : '#555555' }}>{item.id}</Text>
                                                                            </TouchableOpacity>
                                                                        ))}
                                                                    </ScrollView>
                                                                </View>
                                                                <View style={{ width: '100%', flexDirection: 'row', padding: 5 }}>
                                                                    <ScrollView horizontal>
                                                                        {month.map((item) => (
                                                                            <TouchableOpacity
                                                                                style={{
                                                                                    height: 25,
                                                                                    width: 50,
                                                                                    backgroundColor: setmonth == item.id ? '#555555' : 'white',
                                                                                    borderRadius: 8,
                                                                                    margin: 5,
                                                                                    justifyContent: 'center',
                                                                                    alignItems: 'center',
                                                                                    borderColor: '#555555',
                                                                                    elevation: 5
                                                                                }}
                                                                                key={item.id}
                                                                                active={setmonth === item.id}
                                                                                onPress={() => setSetmonth(item.id)}
                                                                            >
                                                                                <Text style={{ color: setmonth == item.id ? 'white' : '#555555' }}>{item.name}</Text>
                                                                            </TouchableOpacity>
                                                                        ))}
                                                                    </ScrollView>
                                                                </View>
                                                                {isLoadingmonth ? (
                                                                    <>
                                                                        {jan == 'null' ? (
                                                                            <>
                                                                                <Text>Null</Text>
                                                                            </>
                                                                        ) : (
                                                                            <>

                                                                                <ScrollView style={{ width: '100%' }} horizontal={true}>
                                                                                    <View style={{ width: '100%', height: 290 }}>

                                                                                        <LineChart
                                                                                            style={{ flex: 1, width: '90%', height: '100%' }}
                                                                                            data={{
                                                                                                labels: jan.map(item => (item.day)),
                                                                                                datasets: [
                                                                                                    {
                                                                                                        data: jan.map(item => (item.sumexer)),
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
                                                                            </>
                                                                        )}

                                                                    </>
                                                                ) : (
                                                                    <Text>Loading...</Text>
                                                                )}
                                                            </>
                                                        )
                                                    } else if (active == 3) {
                                                        return (
                                                            <>
                                                                <View style={{ width: '100%', flexDirection: 'row', padding: 5 }}>
                                                                    <ScrollView horizontal>
                                                                        {setyear.map((item) => (
                                                                            <TouchableOpacity
                                                                                style={{
                                                                                    height: 25,
                                                                                    width: 50,
                                                                                    backgroundColor: allyear == item.id ? '#555555' : 'white',
                                                                                    borderRadius: 8,
                                                                                    margin: 5,
                                                                                    justifyContent: 'center',
                                                                                    alignItems: 'center',
                                                                                    borderColor: '#555555',
                                                                                    elevation: 5
                                                                                }}
                                                                                key={item.id}
                                                                                active={allyear === item.id}
                                                                                onPress={() => setAllyear(item.id)}
                                                                            >
                                                                                <Text style={{ color: allyear == item.id ? 'white' : '#555555' }}>{item.id}</Text>
                                                                            </TouchableOpacity>
                                                                        ))}
                                                                    </ScrollView>
                                                                </View>
                                                                {isLoadingyear ? (
                                                                    <>
                                                                        {all == 'null' ? (
                                                                            <>
                                                                                <Text>Null</Text>
                                                                            </>
                                                                        ) : (
                                                                            <>
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
                                                                            </>
                                                                        )}

                                                                    </>
                                                                ) : (
                                                                    <Text>Loading...</Text>
                                                                )}
                                                            </>
                                                        )
                                                    } else {
                                                        return (
                                                            <Text> กรุณาเลือกดูสถิติ</Text>
                                                        )
                                                    }
                                                })()}







                                {/**   {isLoading ? (
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
                                */}
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
