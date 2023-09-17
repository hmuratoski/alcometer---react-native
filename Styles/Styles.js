const { StyleSheet, StatusBar } = require("react-native")

const DarkStyle = StyleSheet.create({

    //Switch theme darker, alignment, color palette
    container: {

        flex: 1,
        backgroundColor: '#00020a',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding: 20
        
    },

    header: {
        color: '#faebd7',
        fontSize: 35,
        fontWeight: 'bold'
    },

    input: {
        borderWidth: 1,
        padding: 10,
        width: 250,
        borderRadius: 10,
        color: '#faebd7',
        borderColor: '#faebd7',
        fontSize: 18
    },

    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#faebd7'
    },

    borderColor: '#faebd7',

    
    icon: {
        color: '#010101'
    },

   

    radioButtonsGroup: {
        flexDirection: 'row', 
        alignItems: 'center',
    },
    
    uncheckedColor: '#faebd7',

    color: '#faebd7',

    trackColor: '#faebd7a3',

    radioTitle: {
        fontSize:22, color: '#faebd7'
    },

    calculate: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#2e3a76',
        backgroundColor: '#faebd7',
        borderRadius: 10,
        padding: 50,
        paddingTop: 20,
        paddingBottom: 20, 
        
    }

})

const LightStyle = StyleSheet.create({
    //Light theme switch
    container: {

        flex: 1,
        backgroundColor: '#898989',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding: 20,
    },

    header: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#010101'
    },

    input: {
        borderWidth: 1,
        padding: 10,
        width: 250,
        borderRadius: 10,
        color: '#010101',
        borderColor: '#010101',
        fontSize: 18
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#010101'
    },

    borderColor: '#010101',

    icon: {
        color: '#faebd7'
    },
    radioButtonsGroup: {
        flexDirection: 'row', 
        alignItems: 'center',
    },

    uncheckedColor: '#010101',

    color: '#e4dcdc',

    trackColor: '#010101',

    radioTitle: {
        fontSize:22, color: '#010101'
    },

    calculate: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#faebd7',
        backgroundColor: '#010101',
        borderRadius: 10,
        padding: 50,
        paddingTop: 20,
        paddingBottom: 20, 
        
    }
})

export {DarkStyle, LightStyle}