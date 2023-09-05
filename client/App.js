import React from 'react';
import { useTranslation } from 'react-i18next';
import {Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import i18n from './languages/i18n';

export default App = () => {

  const { i18n, t } = useTranslation();
  
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={styles.messageText}>
        {t('hello')}
      </Text>
      <Text style={styles.messageText}>
        {t('message')}
      </Text>
      <View style={{flexDirection: 'row', margin: 10 }}>
        <TouchableOpacity
          onPress={() => i18n.changeLanguage('tr')}
          style={styles.button}>
          <Text style={styles.title}>TR</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => i18n.changeLanguage('en')}
          style={styles.button}>
          <Text style={styles.title}>EN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => i18n.changeLanguage('de')}
          style={styles.button}>
          <Text style={styles.title}>DE</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginTop: 20}} />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'tomato',
    padding: 10,
    borderRadius: 10,
    margin: 10,
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: 'bold'
  },
  messageText: {
    color: 'salmon',
    textAlign: 'center',
    fontSize: 30,
    fontStyle: 'italic',
    fontWeight: '500'
  }
});