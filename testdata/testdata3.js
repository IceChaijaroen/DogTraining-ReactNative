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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';
const screenWidth = Dimensions.get("window").width;
import Progress from '../component/Progress';
import ProgressCircle from 'react-native-progress-circle'



export default function testdata3({ navigation }) {

    const [exerdog, setExerdog] = useState([]);
    const [loading, setLoading] = useState(false);
    const [all, setAll] = useState([]);
    const [year, setYear] = useState(2021);
    const [month, setMonth] = useState(1);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://35.187.253.40/allstatis.php',
                    {
                        params: {
                            year: year,
                            id: 1,
                            udogid: 1,
                            month: month
                        }
                    })
                if (response.data == 'null') {
                    alert("null");
                    setAll(response.data);
                    setLoading(true)
                } else {
                    setAll(response.data);
                    setLoading(true)
                }
            } catch {
                alert("allstatis")
            }
        }
        fetchData();
    }, [month, year])


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


    const list = [
        {
            id: 1,
            name: 'สัปดาห์',
            content: 2

        },
        {
            id: 2,
            name: 'เดือน',
            content: <Month />

        },
        {
            id: 3,
            name: 'ปี',
            content: <Year />
        },

    ]

    function Month() {
        const [active, setActive] = useState();
        return (
            <>
                <View style={{ width: '100%', flexDirection: 'row', padding: 5 }}>
                    <ScrollView horizontal={true}>
                        {setmonth.map(item => (
                            <TouchableOpacity
                                style={{
                                    height: 25,
                                    width: 50,
                                    backgroundColor: month == item.setmonth ? '#555555' : 'white',
                                    borderRadius: 8,
                                    margin: 5,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderColor: '#555555',
                                    elevation: 5
                                }}
                                key={item.setmonth}
                                active={month == item.setmonth}
                                onPress={() => setMonth(item.setmonth)}
                            >
                                <Text style={{ color: month == item.setmonth ? 'white' : '#555555' }}>{item.name}</Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>


            </>
        );
    }
    function Year() {
        const [active, setActive] = useState(<Sortyear />);
        return (
            <>
                <View style={{ width: '100%', flexDirection: 'row' }}>
                    <ScrollView horizontal>
                        {setyear.map(item => (
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

    function Sortyear() {
        return (
            <>

                <ScrollView style={{ width: '100%' }} horizontal={true}>
                    <View style={{ width: '100%', height: 290 }}>

                        <LineChart
                            style={{ flex: 1, width: '90%', height: '100%' }}
                            data={{
                                labels: [0, 1, 2, 3],
                                datasets: [
                                    {
                                        data: [0, 1, 2, 3],
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
        )
    }



    const setyear = [
        {
            id: 2020,
            content: <Sortyear />,
            name: '2020'
        },
        {
            id: 2021,
            content: <Sortyear />,
            name: '2021'
        },
    ]

    const setmonth = [
        {
            id: 1,
            name: 'Jan',
            setmonth: 1
        },
        {
            id: 2,
            name: 'Feb',
            setmonth: 2
        },
        {
            id: 3,
            name: 'Mar',
            setmonth: 3
        },
        {
            id: 4,
            name: 'Apr',
            setmonth: 4
        },
        {
            id: 5,
            name: 'May',
            setmonth: 5
        },
        {
            id: 6,
            name: 'Jun',
            setmonth: 6
        },
        {
            id: 7,
            name: 'Jul',
            setmonth: 7
        },
        {
            id: 8,
            name: 'Aug',
            setmonth: 8
        },
        {
            id: 9,
            name: 'Sep',
            setmonth: 9
        },
        {
            id: 10,
            name: 'Oct',
            setmonth: 10
        },
        {
            id: 11,
            name: 'Nov',
            setmonth: 11
        },
        {
            id: 12,
            name: 'Dec',
            setmonth: 12
        }
    ]




    const [active, setActive] = useState(<Year />);



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
                    <Text style={{ marginLeft: 15, fontSize: 27, color: 'white', fontFamily: 'FC_Iconic' }}>{year}</Text>
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
                                <Text style={{ fontSize: 32, fontFamily: 'FC_Iconic', color: '#575757' }}>สถิติแต่ละท่า</Text>
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
                                                key={active == item.content}
                                                active={item.content}
                                                onPress={() => setActive(item.content)}
                                            >
                                                <Text style={{ color: active == item.content ? 'white' : '#555555' }}>{item.name}</Text>
                                            </TouchableOpacity>

                                        </>
                                    ))}

                                </View>

                            </View>



                            <View style={{ width: '100%', justifyContent: 'center' }}>
                                <Text> {month}</Text>
                            </View>



                            {/**     {loading ? (
                                <>
                                    {all == 'null' ? (
                                        <Text style={{ fontSize: 50 }}>ยังไม่มีข้อมูล</Text>
                                    ) : (
                                        <ScrollView style={{ width: '100%' }} horizontal={true}>
                                            <View style={{ width: '100%', height: 350, alignItems: 'center', }}>

                                                <LineChart
                                                    data={{
                                                        labels: all.map(item => ('ครั้งที่ ' + item.day)),
                                                        datasets: [
                                                            {
                                                                data: all.map(item => (item.sumexer)),
                                                                color: (opacity = 1) => `rgba(166, 206, 227)`, // optional
                                                                strokeWidth: 2 // optional
                                                            }
                                                        ],
                                                        legend: ["Dog stastic"] // optional
                                                    }}
                                                    width={'1200'}
                                                    height={290}
                                                    verticalLabelRotation={50}
                                                    chartConfig={chartConfig}
                                                    bezier
                                                    yAxisSuffix=""
                                                />
                                            </View>
                                        </ScrollView>
                                    )}
                                </>
                            ) : (
                                <Text style={{ fontSize: 50 }}>Loading ..... </Text>
                            )}
*/}


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
        marginTop: 10,
        marginBottom: 10
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

});
