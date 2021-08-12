import React from 'react';
import { View, Modal, Animated, StyleSheet } from 'react-native';

export default ModalPopup = ({ visible, children }) => {
    const [showModal, setShowModal] = React.useState(visible);
    const scaleValue = React.useRef(new Animated.Value(0)).current;
    React.useEffect(()=>{
      toggleModal();
    }, [visible]);
    const toggleModal = () => {
      if (visible) {
        setShowModal(true);
        Animated.spring(scaleValue,{
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }).start();
      } else {
        setTimeout(() => setShowModal(false),200);
        Animated.timing(scaleValue,{
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start();
      }
    }
    return (
      <Modal transparent visible={showModal}>
        <View style={styles.modalBackground}>
          <Animated.View 
          style={[styles.modelContainer, {transform:[{scale : scaleValue}]}]}>
            {children}
          </Animated.View>
        </View>
      </Modal>
    )
  }

  
const styles = StyleSheet.create({
    modalBackground: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.5)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    modelContainer: {
      width: '80%',
      backgroundColor: 'white',
      borderRadius: 20,
      elevation: 20
    },

  });
  