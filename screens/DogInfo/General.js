import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState, version } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, SafeAreaView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/MaterialIcons';
export const NetworkContext = React.createContext();
import axios from 'axios';


export default function General() {

  const [info, setInfo] = useState([]);
  const dogid = React.useContext(NetworkContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://35.187.253.40/showsingle.php',
          {
            params: {
              id: dogid
            }
          })
        setInfo(response.data)
      } catch (err) {
        alert(err)
      }
    }
    fetchData();
  }, [info])

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity>
            <View style={styles.frame}>
              <View style={{ width: '30%', height: '100%', justifyContent: 'center', alignItems: 'flex-end' }}>
                <Image
                  style={{ width: '75%', height: '75%', borderRadius: 30 }}
                  source={require('../../img/cute-siberian-husky-dog-paws-up-wall-cartoon_cut.png')}
                />
              </View>
              <View style={{ width: '60%', height: '100%', justifyContent: 'center' }}>
                {info.map((item, index) => {
                  <Text key={index} style={styles.headfont}>
                    {item.dogname}
                  </Text>
                })}



              </View>
              <View style={{ width: '10%', height: '100%', justifyContent: 'center' }}>
                <Icons
                  name='keyboard-arrow-right'
                  size={40}
                  color={'#636262'}
                />
              </View>
            </View>
          </TouchableOpacity>


          {/**------------------------------------------------------------------------------------------- */}
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flex: 1, height: 2, backgroundColor: '#F6F6F6', marginLeft: 15, marginTop: 10, marginBottom: 10 }} />
            <View>
            </View>
            <View style={{ flex: 1, height: 2, backgroundColor: '#F6F6F6', marginTop: 10, marginBottom: 10, marginRight: 15 }} />
          </View>
          {/**------------------------------------------------------------------------------------------- */}


          <TouchableOpacity>
            <View style={styles.frame}>
              <View style={{ width: '30%', height: '100%', justifyContent: 'center', alignItems: 'flex-end' }}>
                <Image
                  style={{ width: '75%', height: '70%' }}
                  source={require('../../img/dog-icon-vector-19613040.png')}
                />
              </View>
              <View style={{ width: '60%', height: '100%', justifyContent: 'center' }}>
                <Text style={styles.headfont}>ขนาด</Text>
              </View>
              <View style={{ width: '10%', height: '100%', justifyContent: 'center' }}>
                <Icons
                  name='keyboard-arrow-right'
                  size={40}
                  color={'#636262'}
                />
              </View>
            </View>
          </TouchableOpacity>


          {/**------------------------------------------------------------------------------------------- */}
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flex: 1, height: 2, backgroundColor: '#F6F6F6', marginLeft: 15, marginTop: 10, marginBottom: 10 }} />
            <View>
            </View>
            <View style={{ flex: 1, height: 2, backgroundColor: '#F6F6F6', marginTop: 10, marginBottom: 10, marginRight: 15 }} />
          </View>
          {/**------------------------------------------------------------------------------------------- */}


          <TouchableOpacity>
            <View style={styles.frame}>
              <View style={{ width: '30%', height: '100%', justifyContent: 'center', alignItems: 'flex-end' }}>
                <Image
                  style={{ width: '75%', height: '60%' }}
                  source={require('../../img/earear.png')}
                />
              </View>
              <View style={{ width: '60%', height: '100%', justifyContent: 'center' }}>
                <Text style={styles.headfont}>หู</Text>
              </View>
              <View style={{ width: '10%', height: '100%', justifyContent: 'center' }}>
                <Icons
                  name='keyboard-arrow-right'
                  size={40}
                  color={'#636262'}
                />
              </View>
            </View>
          </TouchableOpacity>


          {/**------------------------------------------------------------------------------------------- */}
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flex: 1, height: 2, backgroundColor: '#F6F6F6', marginLeft: 15, marginTop: 10, marginBottom: 10 }} />
            <View>
            </View>
            <View style={{ flex: 1, height: 2, backgroundColor: '#F6F6F6', marginTop: 10, marginBottom: 10, marginRight: 15 }} />
          </View>
          {/**------------------------------------------------------------------------------------------- */}


          <TouchableOpacity>
            <View style={styles.frame}>
              <View style={{ width: '30%', height: '100%', justifyContent: 'center', alignItems: 'flex-end' }}>
                <Image
                  style={{ width: '75%', height: '75%' }}
                  source={require('../../img/previewad.png')}
                />
              </View>
              <View style={{ width: '60%', height: '100%', justifyContent: 'center' }}>
                <Text style={styles.headfont}>ลำตัว</Text>
              </View>
              <View style={{ width: '10%', height: '100%', justifyContent: 'center' }}>
                <Icons
                  name='keyboard-arrow-right'
                  size={40}
                  color={'#636262'}
                />
              </View>
            </View>
          </TouchableOpacity>


          {/**------------------------------------------------------------------------------------------- */}
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flex: 1, height: 2, backgroundColor: '#F6F6F6', marginLeft: 15, marginTop: 10, marginBottom: 10 }} />
            <View>
            </View>
            <View style={{ flex: 1, height: 2, backgroundColor: '#F6F6F6', marginTop: 10, marginBottom: 10, marginRight: 15 }} />
          </View>
          {/**------------------------------------------------------------------------------------------- */}


          <TouchableOpacity>
            <View style={styles.frame}>
              <View style={{ width: '30%', height: '100%', justifyContent: 'center', alignItems: 'flex-end' }}>
                <Image
                  style={{ width: '75%', height: '70%' }}
                  source={require('../../img/depositphotos_384850210-stock-illustration-professional-dog-training-icon-isowesametric.png')}
                />
              </View>
              <View style={{ width: '60%', height: '100%', justifyContent: 'center' }}>
                <Text style={styles.headfont}>หาง</Text>
              </View>
              <View style={{ width: '10%', height: '100%', justifyContent: 'center' }}>
                <Icons
                  name='keyboard-arrow-right'
                  size={40}
                  color={'#636262'}
                />
              </View>
            </View>
          </TouchableOpacity>


          {/**------------------------------------------------------------------------------------------- */}
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flex: 1, height: 2, backgroundColor: '#F6F6F6', marginLeft: 15, marginTop: 10, marginBottom: 10 }} />
            <View>
            </View>
            <View style={{ flex: 1, height: 2, backgroundColor: '#F6F6F6', marginTop: 10, marginBottom: 10, marginRight: 15 }} />
          </View>
          {/**------------------------------------------------------------------------------------------- */}


          <TouchableOpacity>
            <View style={styles.frame}>
              <View style={{ width: '30%', height: '100%', justifyContent: 'center', alignItems: 'flex-end' }}>
                <Image
                  style={{ width: '75%', height: '75%' }}
                  source={require('../../img/istockphoto-1084516046-612x612.png')}
                />
              </View>
              <View style={{ width: '60%', height: '100%', justifyContent: 'center' }}>
                <Text style={styles.headfont}>ขน</Text>
              </View>
              <View style={{ width: '10%', height: '100%', justifyContent: 'center' }}>
                <Icons
                  name='keyboard-arrow-right'
                  size={40}
                  color={'#636262'}
                />
              </View>
            </View>
          </TouchableOpacity>


          {/**------------------------------------------------------------------------------------------- */}
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flex: 1, height: 2, backgroundColor: '#F6F6F6', marginLeft: 15, marginTop: 10, marginBottom: 10 }} />
            <View>
            </View>
            <View style={{ flex: 1, height: 2, backgroundColor: '#F6F6F6', marginTop: 10, marginBottom: 10, marginRight: 15 }} />
          </View>
          {/**------------------------------------------------------------------------------------------- */}


          <TouchableOpacity>
            <View style={styles.frame}>
              <View style={{ width: '30%', height: '100%', justifyContent: 'center', alignItems: 'flex-end' }}>
                <Image
                  style={{ width: '75%', height: '70%' }}
                  source={require('../../img/yellow.png')}
                />
              </View>
              <View style={{ width: '60%', height: '100%', justifyContent: 'center' }}>
                <Text style={styles.headfont}>สีขน</Text>
              </View>
              <View style={{ width: '10%', height: '100%', justifyContent: 'center' }}>
                <Icons
                  name='keyboard-arrow-right'
                  size={40}
                  color={'#636262'}
                />
              </View>
            </View>
          </TouchableOpacity>
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
    backgroundColor: 'white'
  },
  frame: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headfont: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#636262',
    marginLeft: 20
  }

});
