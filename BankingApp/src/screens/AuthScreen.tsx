import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
const LinearGradient = require('react-native-linear-gradient').default;
import CountryFlag from 'react-native-country-flag';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.88;

function LoginScreen({ navigation }: any) {
    return (
        <LinearGradient colors={["#FF7E5F", "#FD3A69"]} style={styles.gradient}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                style={styles.centered}
            >
                <View style={styles.card}>
                    <Text style={styles.title}>Hey there!</Text>
                    <Text style={styles.subtitle}>Welcome back, please use your phone number and password to log in.</Text>
                    <TextInput style={styles.input} placeholder="Email Address" placeholderTextColor="#bbb" />
                    <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#bbb" secureTextEntry />
                    <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')} style={styles.forgotWrap}>
                        <Text style={styles.forgot}>Forgot Password?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    <Text style={styles.bottomText}>Don't have an account?{' '}
                        <Text style={styles.link} onPress={() => navigation.navigate('Register')}>Create an account</Text>
                    </Text>
                </View>
            </KeyboardAvoidingView>
        </LinearGradient>
    );
}

function RegisterScreen({ navigation }: any) {
    const [phone, setPhone] = useState('');
    return (
        <LinearGradient colors={["#FF7E5F", "#FD3A69"]} style={styles.gradient}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                style={styles.centered}
            >
                <View style={styles.card}>
                    <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
                        <Text style={styles.backArrow}>{'<'} </Text>
                    </TouchableOpacity>
                    <Text style={styles.title}>Create your account</Text>
                    <TextInput style={styles.input} placeholder="First Name" placeholderTextColor="#bbb" />
                    <TextInput style={styles.input} placeholder="Last Name" placeholderTextColor="#bbb" />
                    <View style={styles.phoneRow}>
                        <CountryFlag isoCode="LK" size={22} style={{ marginRight: 8 }} />
                        <Text style={styles.dialCode}>+94</Text>
                        <TextInput
                            style={[styles.input, { flex: 1, marginLeft: 8, marginBottom: 0 }]}
                            placeholder="Phone Number"
                            placeholderTextColor="#bbb"
                            keyboardType="phone-pad"
                            value={phone}
                            onChangeText={setPhone}
                        />
                    </View>
                    <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#bbb" secureTextEntry />
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Next</Text>
                    </TouchableOpacity>
                    <Text style={styles.bottomText}>Already have an account?{' '}
                        <Text style={styles.link} onPress={() => navigation.navigate('Login')}>Sign into your account</Text>
                    </Text>
                </View>
            </KeyboardAvoidingView>
        </LinearGradient>
    );
}

function ForgotPasswordScreen({ navigation }: any) {
    const [phone, setPhone] = useState('');
    return (
        <LinearGradient colors={["#FF7E5F", "#FD3A69"]} style={styles.gradient}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                style={styles.centered}
            >
                <View style={styles.card}>
                    <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
                        <Text style={styles.backArrow}>{'<'} </Text>
                    </TouchableOpacity>
                    <Text style={styles.title}>Forgot Password</Text>
                    <Text style={styles.subtitle}>Enter the phone number linked to your account and you will receive an OTP via an SMS.</Text>
                    <View style={styles.phoneRow}>
                        <CountryFlag isoCode="LK" size={22} style={{ marginRight: 8 }} />
                        <Text style={styles.dialCode}>+94</Text>
                        <TextInput
                            style={[styles.input, { flex: 1, marginLeft: 8, marginBottom: 0 }]}
                            placeholder="Phone Number"
                            placeholderTextColor="#bbb"
                            keyboardType="phone-pad"
                            value={phone}
                            onChangeText={setPhone}
                        />
                    </View>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Reset</Text>
                    </TouchableOpacity>
                    <Text style={styles.bottomText}>Already have an account?{' '}
                        <Text style={styles.link} onPress={() => navigation.navigate('Login')}>Sign into your account</Text>
                    </Text>
                </View>
            </KeyboardAvoidingView>
        </LinearGradient>
    );
}

const Stack = createStackNavigator();

export default function AuthScreen() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Login"
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Register" component={RegisterScreen} />
                <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    card: {
        width: CARD_WIDTH,
        backgroundColor: '#fff',
        borderRadius: 24,
        padding: 28,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.12,
        shadowRadius: 24,
        elevation: 8,
        alignItems: 'stretch',
    },
    title: {
        fontSize: 28,
        fontWeight: '700',
        marginBottom: 8,
        color: '#222',
    },
    subtitle: {
        fontSize: 15,
        color: '#888',
        marginBottom: 18,
        marginTop: 2,
    },
    input: {
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        paddingHorizontal: 16,
        paddingVertical: 12,
        fontSize: 16,
        marginBottom: 14,
        color: '#222',
    },
    button: {
        backgroundColor: '#FF7E5F',
        borderRadius: 10,
        paddingVertical: 14,
        alignItems: 'center',
        marginTop: 8,
        marginBottom: 8,
    },
    buttonText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 18,
    },
    forgotWrap: {
        alignItems: 'flex-end',
        marginBottom: 8,
    },
    forgot: {
        color: '#FD3A69',
        fontSize: 14,
        fontWeight: '500',
    },
    bottomText: {
        textAlign: 'center',
        color: '#888',
        marginTop: 10,
        fontSize: 15,
    },
    link: {
        color: '#00AEEF',
        fontWeight: '600',
    },
    phoneRow: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        paddingHorizontal: 10,
        marginBottom: 14,
        height: 48,
    },
    dialCode: {
        fontSize: 16,
        color: '#222',
        marginLeft: 4,
    },
    backBtn: {
        position: 'absolute',
        left: 18,
        top: 18,
        zIndex: 2,
        padding: 4,
    },
    backArrow: {
        fontSize: 22,
        color: '#222',
    },
});
