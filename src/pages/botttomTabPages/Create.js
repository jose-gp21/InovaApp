import { StyleSheet, Button,} from 'react-native'
import { useNavigation } from '@react-navigation/native';

const Create = () => {
    
const navigation = useNavigation();

  return (
    <Button title="Começar" onPress={()=>{navigation.navigate('LivePageHost')}}/>
  )
}

export default Create

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})