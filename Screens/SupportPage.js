import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity, Modal, StyleSheet, SafeAreaView, ScrollView, FlatList
} from 'react-native';


const data = [
  // Assuming you have some topics/data to display in your support page
  { id: '1', title: 'FAQs' },
  { id: '2', title: 'Privacy Policy' },
  { id: '3', title: 'Terms of Use' },
  // Add more items as necessary
];
import ChatComponent from '../src/components/ChatComponent';
const SupportPage = () => {
  const [isChatVisible, setIsChatVisible] = useState(false);

  const toggleChatVisibility = () => setIsChatVisible(!isChatVisible);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.headerText}>Support Page</Text>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.listItem}>
              <Text style={styles.listItemText}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
        <TouchableOpacity onPress={toggleChatVisibility} style={styles.contactButton}>
          <Text style={styles.contactButtonText}>Contact Us</Text>
        </TouchableOpacity>
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isChatVisible}
        onRequestClose={toggleChatVisibility}
      >
        <View style={styles.centeredView}>
          <ChatComponent />
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  listItem: {
    backgroundColor: '#E5E7EB', // This matches the gray-200 from Tailwind
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
    width: 300,
  },
  listItemText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1F2937', // This matches the gray-800 from Tailwind
  },
  contactButton: {
    backgroundColor: '#3B82F6', // This matches the blue-500 from Tailwind
    padding: 15,
    borderRadius: 5,
    marginVertical: 20,
  },
  contactButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
});

export default SupportPage;
