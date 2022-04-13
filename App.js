import { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';




export default class App extends Component {

  //declarando variáveis
  constructor(props){
    super(props)
    this.state={nota1:0, nota2:0, nota3:0, dividir:3, result: 0, resultTexto:"", soma1:0, soma2:0, soma3:0, resultsoma: 0, textsoma:""}
    //função calcular a média
    this.calcular=this.calcular.bind(this)
    //função de calcular os intervalos
    this.calculando=this.calculando.bind(this)
      
  }

  //função calcular média
  calcular(){
    let m = this.state
    m.media = parseFloat(this.state.nota1) + parseFloat(this.state.nota2) + parseFloat(this.state.nota3)
    let media1 = this.state.media/this.state.dividir
    let s=this.state
    s.result = media1
    this.setState(s)

    //condição para o resultado
    if (s.result>=7 && s.result <= 10) {
      s.resultTexto="Aprovado por média"
    }else if(s.result >=5 && s.result <7){
      s.resultTexto="Você está na Final"
    }else if(s.result >=0 && s.result <5){
      s.resultTexto= "Reprovado por média"
    }else{
      s.resultTexto= "Número inválido!"
    }
  }

  //função calcular os intervalos
  calculando(){
    let soma = this.state
    soma = parseFloat(this.state.soma1) + parseFloat(this.state.soma2) + parseFloat(this.state.soma3)
    let s = this.state
    s.resultsoma = soma
    this.setState(s)

    //condição para os intervalos
    if (s.resultsoma >=0 && s.resultsoma <=10) {
      s.textsoma="O intervalo está de 0 a 10"
    }else if(s.resultsoma >=11 && s.resultsoma <=20){
      s.textsoma="O intervalo está de 11 a 20"
    }else if(s.resultsoma >=21){
      s.textsoma= "O intervalo está de 21 a ..."
    }else{
      s.textsoma= ""
    }
  }


render(){
  return(
             
    <View style={styles.Container}>

      <LinearGradient
      
        style={styles.Header}
        colors={['orange','#FF4500']}>
      
      <StatusBar backgroundColor={'orange'}/>

      {/* Header*/}
      
      <Text style={styles.titleheader}>EDUCATION</Text>
      
      </LinearGradient>
      
      

      {/* barra de interação de rolagem  */}
      <ScrollView>

        <View style={styles.principal}>
          
          {/* ícone da calculadora*/}
          <View style={styles.box}>
            <AntDesign name="calculator" size={60} color="black" />
            <Text style={styles.title}>MÉDIA</Text>
          </View>
            
            {/* formulário que recebe as notas  */}
          <View>
            <TextInput style={styles.form} placeholder= 'Digite a sua primeira nota' keyboardType='numbers-and-punctuation' onChangeText={(nota1) =>{this.setState({nota1})}}/>
            <TextInput style={styles.form} placeholder= 'Digite a sua segunda nota' keyboardType='numbers-and-punctuation' onChangeText={(nota2) =>{this.setState({nota2})}}/>
            <TextInput style={styles.form} placeholder= 'Digite a sua terceira nota' keyboardType='numbers-and-punctuation'onChangeText={(nota3) =>{this.setState({nota3})}}/>
            <TouchableOpacity style={styles.bottom} onPress={this.calcular}><Text style={styles.bottomtitle}>CALCULAR</Text></TouchableOpacity>
          </View>

            {/* imprime o resultado da média */}
          <View style = {styles.display}>
            <Text style={styles.titleresult}>{this.state.result.toFixed(1)}</Text>
            <Text style={styles.titleresult}> {this.state.resultTexto}</Text>
          </View>

      
          

          {/* ícone da calculadora*/}
          <View style={styles.box}>
            <Ionicons name="ios-calculator" size={60} color="black" />
            <Text style={styles.title}>CONTAR INTERVALOS</Text>
          </View>

          {/* formulário que recebe as notas  */}
          <View>
            <TextInput style={styles.form} placeholder= 'Digite o primeiro número' keyboardType='numbers-and-punctuation' onChangeText={(soma1) =>{this.setState({soma1})}}/>
            <TextInput style={styles.form} placeholder= 'Digite o segundo número' keyboardType='numbers-and-punctuation' onChangeText={(soma2) =>{this.setState({soma2})}}/>
            <TextInput style={styles.form} placeholder= 'Digite o terceiro número' keyboardType='numbers-and-punctuation'onChangeText={(soma3) =>{this.setState({soma3})}}/>
            <TouchableOpacity style={styles.bottom} onPress={this.calculando} ><Text style={styles.bottomtitle}>CALCULAR</Text></TouchableOpacity>
          </View>

           {/* imprime o resultado dos intervalos */}
           <View style = {styles.display}>
            <Text style={styles.titleresult}>{this.state.resultsoma.toFixed(0)}</Text>
            <Text style={styles.titleresult}> {this.state.textsoma}</Text>
          </View>

          </View>
          
      </ScrollView>
      
      {/* tabbar  */}
      <NavigationContainer>
      <View style={styles.icones}>
          
      <AntDesign name="home" size={35} color="black" style={styles.icon}/>
      <AntDesign name="user" size={35} color="black" style={styles.icon}/>
      <AntDesign name="pluscircleo" size={35} color="black" style={styles.icon}/>
      <AntDesign name="delete" size={35} color="black" style={styles.icon}/>
      <AntDesign name="setting" size={35} color="black" style={styles.icon}/>

      </View>
      </NavigationContainer>
      

    </View>
    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  Header:{
    height: '12%',
    alignItems: 'center',
    justifyContent: 'center',  
  },

  box: {
    flexDirection:'row',
    marginBottom: '5%',
    alignItems: 'center',
  },

  titleheader: {
    color:'white',
    fontSize: 25,
    fontWeight: '700',
    marginLeft: '3%',
    paddingTop: '10%',
  },

  title: {
    fontSize: 25,
    color: 'black',
    fontWeight: '700',
    marginLeft: '3%',
    paddingTop: '5%',
  },

  titleresult: {
    marginTop: '5%',
    marginBottom: '5%',
    flexDirection:'column',
    fontSize: 34,
    color: 'black',
    fontWeight: '700',
    textAlign: 'center',
    padding: '1%',
  },

  bottomtitle:{
    fontSize: 18,
    color: 'white',
    fontWeight: '700',
  },

  icones: {
    backgroundColor: 'white',
    flexDirection: 'row',
    position:'absolute',
    bottom: 110,
    height: '6%',
  },

  icon:{
    paddingTop: '2%',
    paddingLeft: '6%',
    paddingRight: '5%',
  },

  principal: {
    width: '100%',
    height: '100%',
    backgroundColor: "rgb(255,255,255)",
    alignItems: 'center',
    paddingTop: '10%',
    paddingBottom: '40%',
    padding: 2,
    position:'relative',
  },

  form: {
    height: 40,
    width: 280,
    padding: 10,
    fontSize: 20,
    backgroundColor: 'rgb(255,255,255)',
    borderColor: 'orange',
    borderRadius: 25,
    borderWidth: 1,
    marginTop: '3%',
    textAlign:'center',
  },

  bottom: {
    width: 280,
    padding: 20,
    fontSize: 25,
    backgroundColor: "orange",
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 35,
    borderRadius: 5,
  },

});
