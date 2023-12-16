import { Dispatch, SetStateAction } from "react";
import {
  Modal as RNModal,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

import colors from "../../theme/color.json";

const Modal = ({
  modalVisible,
  setModalVisible,
  title,
  description,
}: {
  title: string;
  description?: string;
  modalVisible: boolean;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <View style={styles.centeredView}>
      <RNModal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>{title}</Text>
            <Text style={styles.modalDescription}>{description}</Text>
            <TouchableOpacity
              style={[styles.button]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Done</Text>
            </TouchableOpacity>
          </View>
        </View>
      </RNModal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
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
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  modalDescription: {
    fontSize: 16,
    marginBottom: 28,
  },
  button: {
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 28,
    elevation: 6,
    backgroundColor: colors.primary,
  },
  textStyle: {
    color: "#fff",
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
  },
});

export default Modal;
