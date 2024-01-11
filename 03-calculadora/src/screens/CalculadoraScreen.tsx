import React, { useRef, useState } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { BotonCalc } from '../components/BotonCalc'

enum Operadores {
    sumar, restar, multiplicar, dividir
}

export const CalculadoraScreen = () => {

    const [numero, setNumero] = useState('0');
    const [numeroAnterior, setNumeroAnterior] = useState('0');

    const ultimaOperacion = useRef<Operadores>();

    function limpiar() {
        setNumero("0");
        setNumeroAnterior("0");
    };

    function armarNumero( numeroTexto: string ) {
        // No aceptar doble punto
        if( numero.includes(".") && numeroTexto == '.' ) return;

        if( numero.startsWith('0') || numero.startsWith('-0') ) {

            // Punto decimal
            if( numeroTexto == '.' ) {
                setNumero( numero + numeroTexto );

            // Evaluar si es otro cero y hay punto
            } else if( numeroTexto == '0'  && numero.includes(".")) {
                setNumero( numero + numeroTexto )

            // Evaluar si es diferente de 0 y no tiene punto
            } else if( numeroTexto != '0' && !numero.includes('.')) {
                setNumero( numeroTexto )

            // Evitar 000.0
            } else if ( numeroTexto == '0' && !numero.includes('.') ) {
                setNumero( numero );
            } else {
                setNumero( numero + numeroTexto )
            }

        } else {
            setNumero( numero + numeroTexto )
        }
    }

    function positivoNegativo() {
        if( numero.includes("-") ) {
            setNumero( numero.replace('-', '') )
        } else {
            setNumero( '-' + numero )
        }
    }

    function borrarUltimaEntrada() {
        if( numero.length == 1 && numero != "0" ) {
            setNumero('0');
            return
        }
        if( numero.includes('-') && numero.length == 2 ){
            setNumero('0');
            return
        }
        if( numero == "0" ) return;
        setNumero( numero.slice(0, numero.length - 1) )
    }

    function cambiarNumPorAnterior() {
        if( numero.endsWith('.') ) {
            setNumeroAnterior( numero.slice(0, -1) );
        } else {
            setNumeroAnterior( numero );
        }
        setNumero('0');
    }

    function btnDividir() {
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.dividir;
    }

    function btnMultiplicar() {
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.multiplicar;
    }

    function btnRestar() {
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.restar;
    }

    function btnSumar() {
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.sumar;
    }

    function calcular() {
        const num1 = Number( numero );
        const num2 = Number( numeroAnterior );

        switch (ultimaOperacion.current) {
            case Operadores.sumar:
                setNumero( `${num1 + num2}` );
                break;

            case Operadores.restar:
                setNumero( `${num2 - num1}` );
                break;

            case Operadores.multiplicar:
                setNumero( `${num1 * num2}` );
                break;

            case Operadores.dividir:
                setNumero( `${num2 / num1}` );
                break;
        }
        setNumeroAnterior("0");
    }

  return (
    <View style={ styles.calculadoraContainer }>
        {
            (numeroAnterior !== '0') && (
                <Text style={ styles.resultadoPequeno }>
                    { numeroAnterior }
                </Text>
            )
        }
        <Text 
            style={ styles.resultado }
            numberOfLines={ 1 }
            adjustsFontSizeToFit
        >
            { numero }
        </Text>

        <View style={ styles.fila }>
            <BotonCalc texto='C' color='#9B9B9B' accion={limpiar}/>
            <BotonCalc texto='+/-' color='#9B9B9B' accion={positivoNegativo}/>
            <BotonCalc texto='del' color='#9B9B9B'accion={borrarUltimaEntrada}/>
            <BotonCalc texto='/' color='#FF9427'accion={btnDividir}/>
        </View>

        <View style={ styles.fila }>
            <BotonCalc texto='7' accion={armarNumero}/>
            <BotonCalc texto='8' accion={armarNumero}/>
            <BotonCalc texto='9' accion={armarNumero}/>
            <BotonCalc texto='X' color='#FF9427' accion={btnMultiplicar}/>
        </View>

        <View style={ styles.fila }>
            <BotonCalc texto='4' accion={armarNumero}/>
            <BotonCalc texto='5' accion={armarNumero}/>
            <BotonCalc texto='6' accion={armarNumero}/>
            <BotonCalc texto='-' color='#FF9427' accion={btnRestar}/>
        </View>

        <View style={ styles.fila }>
            <BotonCalc texto='1' accion={armarNumero}/>
            <BotonCalc texto='2' accion={armarNumero}/>
            <BotonCalc texto='3' accion={armarNumero}/>
            <BotonCalc texto='+' color='#FF9427' accion={btnSumar}/>
        </View>

        <View style={ styles.fila }>
            <BotonCalc texto='0' seExpande accion={armarNumero}/>
            <BotonCalc texto='.' accion={armarNumero}/>
            <BotonCalc texto='=' accion={calcular}/>
        </View>
    </View>
  )
}
