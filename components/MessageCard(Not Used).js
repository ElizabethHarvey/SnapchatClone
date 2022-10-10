// import React from 'react';
// import {
//   Image,
//   Platform,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from 'react-native';

// import Ionicons from '@expo/vector-icons/Ionicons';

// function MessageCard({ title, subTitle, color, name, time, streaks, iconColor, smile, fire, }) {
//   return (
//     <TouchableOpacity>
//       <View style={styles.card}>                               
//         <Image
//           style={styles.profilePic}
//           source={{
//             uri: 'https://helios-i.mashable.com/imagery/articles/04tV2ASy4BKViKIw4pPBuMi/hero-image.fill.size_1200x1200.v1623368074.jpg',
//           }}
//         />
//         <View>
//           <Text style={styles.title}>{title}</Text>
//           <View style={styles.bottomText}>
//             <Ionicons style={{right: '10%' }} name={name} size={25} color={iconColor} />
//             <Text style={{right: '5%', color:iconColor, fontWeight: 'bold' }}>{subTitle}</Text>
//             <Text style={styles.time}>{'• '+ time + ' •'}</Text>
//             <Text>{streaks}</Text>
//             <Text>{fire}</Text>
//           </View>
//         </View>
//       </View>
//        <Text style={styles.smile}>{smile}</Text>
//     </TouchableOpacity>
//   );
// }

// const styles = StyleSheet.create({
//   card: {
//     backgroundColor: '#F5F2F1',
//     flex: 1,
//     width: '100%',
//     paddingTop: '2%',
//     paddingBottom: '2%',
//     justifyContent: 'center',
//     flexDirection: 'row',
//     borderColor: '#EBEBEB',
//     borderWidth: '1%',
//   },
//   title: {
//     fontSize: 23,
//     right: '65%',
//     color: '#777777',

//   },
//   bottomText: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     right: '224%',
//   },
//   profilePic: {
//     width: 60,
//     height: 60,
//     borderRadius: '100%',
//     marginRight: '35%',
//   },
//   time: {
//     marginRight: '3%',
//     color: 'gray',
//   },
//   smile: {
//     marginLeft: '15%',
//   }
// });

// export default MessageCard;
