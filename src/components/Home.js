import React, {useState} from 'react'
// import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
  Pressable,
  StyleSheet,
  SectionList,
  Image,
  Alert
} from 'react-native';

let time_stamps = '16/10/2022 21:08:20'

const DATA = [
  {
    title: time_stamps.split(' ', 1),
    data: [
      {
        id: '1',
        Status: 'Payment',
        time_stamp: '11.11 AM',
        amount: '500'
      },
      {
        id: '2',
        Status: 'Payment',
        time_stamp: '10.12 AM',
        amount: '300'
      },
      {
        id: '3',
        Status: 'Payment',
        time_stamp: '09.20 AM',
        amount: '100'
      }
    ],
  },
  {
    title: '14 Oct',
    data: [
      {
        id: '4',
        Status: 'Payment',
        time_stamp: '11.11 AM',
        amount: '500'
      },
      {
        id: '5',
        Status: 'Payment',
        time_stamp: '10.12 AM',
        amount: '300'
      },
      {
        id: '6',
        Status: 'Payment',
        time_stamp: '08.27 AM',
        amount: '500'
      },
    ]
}];

const Home = ({navigation}) => {
  let profile_pic = '../assets/images/logo.png'

  const [visible, setVisibility] = useState(true);
  const [balVisible, setBalVisibility] = useState(true);

  return (

    <View style={{flex: 1}} className='bg-base' > 

      
      <View style={{flex: 3.5}} className='w-full rounded-b-xl bg-green-main'>
        <View className='flex-row'>

          {/*path Notification Screen */}
          <View className= 'absolute m-5 top-0 right-0'>
            <Pressable onPress={() => navigation.navigate('Transfer')}>
              <Image style={{tintColor: '#F1EEE6'}} source={require('../assets/images/bell.png')} className='w-8 h-8'></Image>
            </Pressable>
          </View>
          
          {/*path Setting Screen */}
          <Pressable onPress={() => navigation.navigate('Transfer')}>
            <Image source={require(profile_pic)} className= 'm-3 w-20 h-20 rounded-full'></Image>
          </Pressable>
          
          <View>
            {/* Shop Username*/}
            <Text style={{fontFamily: 'NotoSans-Bold'}} className='pt-6 text-xl text-egg'>ShopName</Text>
            <View className='flex-row'
            >
              {/* Show/Hide ID */}
              <Text style={{fontFamily: 'NotoSans-Regular'}} className='text-md text-white'>{visible? '123-2-71924' : 'xxx-x-x1924-x'}</Text>
              
              <Pressable onPress={() => setVisibility(!visible)}>
                <Image style={{tintColor: '#FFFFFF'}} source={
                visible ? require('../assets/images/eye.png') :
                          require('../assets/images/hidden.png')
                 } className='w-3 h-3 ml-2 mt-2'>
                 </Image>
              </Pressable>
              
            </View>
          </View>
        </View>

        <View className='items-center flex-col '>
          <View style={{
            width: 145,
            height: 145,
            borderRadius: 145/2,
            backgroundColor: '#F1EEE6',
            transform: [{ scaleX: 1 }]
          }}
          // added
          className = 'mb-1'> 
            <View className='flex-col top-8'>
              <Text style={{fontFamily: 'NotoSans-Bold'}} className='text-green-main text-center'>Available Bal.</Text>

              {/* Added Balance component here. */}
              <Text style={{fontFamily: 'NotoSans-Bold'}} className='text-green-main text-xl mt-1 mb-3 text-center'>{balVisible ? '1,000,000.00' : 'x,xxx,xxx.xx'}</Text>
              <View className= 'ml-28'>
                <View className = 'items-center justify-center'
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 40/2,
                    backgroundColor: '#C7D5B1',
                    transform: [{ scaleX: 1 }]
                }}>
                  <Pressable onPress={() => setBalVisibility(!balVisible)}>
                    <Image style={{tintColor: '#387766'}} source={
                      balVisible ? require('../assets/images/eye.png') : 
                                  require('../assets/images/hidden.png'
                      )}className='w-6 h-6'></Image>
                  </Pressable>
                </View>
              </View>
            </View>
          </View>

          <View className= 'flex-row  justify-center items-center'>
            
            {/* Update */}
            <Pressable onPress={() => Alert.alert('Refresh page.')}>
              <Image style={{tintColor: '#F6D8A9'}} source={require('../assets/images/reload.png')} className='w-4 h-4 mr-2'></Image>
            </Pressable>

            <Text style={{fontFamily: 'NotoSans-Regular'}} className='text-egg text-xs text-center mt-0'>Updated at 10.30 PM</Text>
          </View>
          
        </View>
      </View>

      <View style={{flex: 5.8}}>
        <Text style={{fontFamily: 'NotoSans-Bold'}} className='pl-4 pt-3 text-2xl text-green-font'>Recent Transaction</Text>
        
        <ScrollView>
          <SectionList
            sections={[...DATA]}
            renderItem={({item})=>(
              <View className='inset-x-4 w-11/12 rounded-lg my-1 pr-1 bg-green-font'>
                <Text style={{fontFamily: 'NotoSans-Bold'}} className='text-white pl-1 pt-1 text-base'>
                  {item.Status} 
                </Text>
                <Text style={{fontFamily: 'NotoSans-Bold'}} className='absolute right-0 pt-3 pr-2 text-white text-base'>
                  {item.amount} Bath.
                </Text>
                <Text style={{fontFamily: 'NotoSans-Regular'}} className='text-white pl-1 pb-1 text-xs'>
                  {item.time_stamp} 
                </Text>
              </View>
            )}
            renderSectionHeader={({section})=>(
              <Text style={{fontFamily: 'NotoSans-Bold'}} className='right-4 text-right mt-1 text-lg text-green-font'>
                {section.title}
              </Text>
            )}
            keyExtractor={item=>item.id}
          />
          {/* go to Transaction Screen */}
          <View className= 'flex-row justify-end my-2 right-4'>
            <View className='w-20 h-6 rounded-lg bg-light-green'>
              <Pressable onPress={() => navigation.navigate('Transfer')}>
                <Text style={{fontFamily: 'NotoSans-Bold'}} className='text-sm text-center underline underline-offset-auto '>See More</Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </View>

      <View style={{flex: 0.7}} className='flex-row items-center justify-center left-1% w-96% rounded-t-xl bg-green-main'>
        
        {/* go to Shop Screen */}
        {/* <View className='basis-1/3 items-center'>
          <Pressable onPress={() => navigation.navigate('Transfer')}>
            <Image style={{tintColor: '#F1EEE6'}} source={require('../assets/images/cart.png')} className='w-10 h-10'></Image>
          </Pressable>
        </View> */}
        
        {/* go to Transfer Screen */}
        <Pressable onPress={() => navigation.navigate('Transfer')}>
          <View className='items-center bottom-14 basis-1/3 drop-shadow-2xl'>
            <View className='items-center justify-center w-20 h-20 rounded-full bg-green-font'>
                <View className='items-center justify-center w-4/5 h-4/5 rounded-full bg-light-green'>
                  <Image style={{tintColor: '#F1EEE6'}} source={require('../assets/images/data-transfer.png')} className='w-10 h-10'></Image>
                </View>
            </View>
          </View>
        </Pressable>
        
        {/* go to qr-payment Screen */}
        {/* <View className='basis-1/3 items-center'>
          <Pressable onPress={() => navigation.navigate('Transfer')}>
            <Image style={{tintColor: '#F1EEE6'}} source={require('../assets/images/qr-code.png')} className='w-10 h-10'></Image>
          </Pressable>
        </View> */}

      </View>
    </View>

  )
}

export default Home