import React, { useState } from 'react';
import {
  FlatList, StyleSheet, View, TouchableOpacity, ImageBackground, Image, Text,
  TextInput, Modal, Pressable, ScrollView
} from 'react-native';
import icon from '../../assets/icon.png'; // Ensure the path is correct
import tw from 'tailwind-react-native-classnames';

const SupportPage = () => {
  const [searchText, setSearchText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  // Function to open the modal with selected item details
  const handlePressItem = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  return (
    <ImageBackground source={require('../../assets/Background.jpg')} style={customStyles.backgroundImage}>
      <View style={customStyles.container}>
        <ScrollView contentContainerStyle={customStyles.scrollViewContent}>
          <View style={customStyles.header}>
            <TouchableOpacity>
              <Image source={icon} style={customStyles.logo} />
            </TouchableOpacity>
            <TextInput
              style={tw`border-2 border-gray-300 w-full h-10 px-2 mt-4 rounded-md bg-white`}
              placeholder="Search Help Center"
              value={searchText}
              onChangeText={setSearchText}
            />
          </View>
          <FlatList
            data={data.filter(item => item.title.toLowerCase().includes(searchText.toLowerCase()))}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity style={tw`p-2 pl-2 pb-2 pt-4 bg-gray-200 m-2 rounded-lg`} onPress={() => handlePressItem(item)}>
                <Text style={tw`mt-2 text-sm font-semibold`}>{item.title}</Text>
              </TouchableOpacity>
            )}
          />
        </ScrollView>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={customStyles.centeredView}>
            <View style={customStyles.modalView}>
              <Text style={customStyles.modalTitle}>{selectedItem.title}</Text>
              <ScrollView>
                <Text style={customStyles.modalText}>{selectedItem.description}</Text>
              </ScrollView>
              <Pressable
                style={[tw`p-2 mt-4 bg-gray-300 rounded-md`, customStyles.buttonClose]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={tw`text-sm font-semibold`}>Close</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </ImageBackground>
  );
};

const customStyles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  header: {
    marginTop: 20,
    alignItems: 'center',
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  buttonClose: {
    elevation: 2,
  },
});

export default SupportPage;
