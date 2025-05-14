import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import {
    View,
    TextInput,
    FlatList,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ChatbotScreen = () => {
    const [messages, setMessages] = useState<string[]>([]);
    const [input, setInput] = useState('');
    const navigation = useNavigation();
    const sendMessage = () => {
        if (!input.trim()) return;
        setMessages(prev => [...prev, `👤 ${input}`, `🤖 AI: ${input} hakkında düşündüm...`]);
        setInput('');
    };

    const uploadFile = () => {
        // Şimdilik sahte işlev – ileride dosya seçici entegre edilecek
        setMessages(prev => [...prev, '📎 Bir dosya yüklendi (örn. PDF veya görsel)']);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color="#42b883" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Akıllı Asistan</Text>
                <TouchableOpacity onPress={() => {/* geçmiş ekranı veya işlem */ }}>
                    <Ionicons name="chatbubbles-outline" size={24} color="#42b883" />
                </TouchableOpacity>
            </View>


            {/* Mesajlar */}
            <FlatList
                style={styles.chatArea}
                data={messages}
                renderItem={({ item }) => <Text style={styles.message}>{item}</Text>}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={{ paddingBottom: 80 }}
            />

            {/* Giriş ve Gönderme Alanı */}
            <View style={styles.inputRow}>
                <TouchableOpacity onPress={uploadFile} style={styles.iconButton}>
                    <Ionicons name="attach" size={22} color="#42b883" />
                </TouchableOpacity>

                <TextInput
                    style={styles.input}
                    value={input}
                    onChangeText={setInput}
                    placeholder="Mesajınızı yazın..."
                />

                <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
                    <Ionicons name="send" size={20} color="#fff" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f9f9f9' },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#ffffff',
        paddingHorizontal: 20,
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderColor: '#e0e0e0',
        elevation: 3,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: '#283739',
    },


    chatArea: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 10,
    },
    message: {
        marginVertical: 6,
        fontSize: 15,
        color: '#333',
    },

    inputRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingVertical: 10,
        borderTopWidth: 1,
        borderColor: '#e0e0e0',
        backgroundColor: '#fff',
    },
    input: {
        flex: 1,
        backgroundColor: '#f2f9f1',
        borderRadius: 18,
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginHorizontal: 8,
        fontSize: 15,
    },
    iconButton: {
        padding: 6,
    },
    sendButton: {
        backgroundColor: '#42b883',
        borderRadius: 20,
        padding: 10,
    },
});

export default ChatbotScreen;
