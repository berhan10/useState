import {Text, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';

import React, {useState} from 'react';

const Main = () => {
  const [count, setCount] = useState(0);

  let count2 = 0;
  // Burada göstermek istediğim şudur. direk bir tanımlama yapılarak yapılan işlemlerde. screen tekrar kendini yenilememektedir. burada görünen alanın tekrar yenilenmesi için en  temelde bir setState işlemi yapılmaktadır.
  return (
    <SafeAreaView style={style.container}>
      <TouchableOpacity
        style={[style.button]}
        onPress={() => (count2 = count2 + 1)}>
        <Text style={style.text}>Arttır</Text>
      </TouchableOpacity>
      <Text style={style.count}>{count2}</Text>
      <TouchableOpacity
        style={style.button}
        onPress={() => (count2 = count2 - 1)}>
        <Text style={style.text}>Azalt</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  button: {
    backgroundColor: 'blue',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  text: {color: 'white'},
  textRed: {color: 'red'},
  count: {margin: 5},
});

export default Main;
