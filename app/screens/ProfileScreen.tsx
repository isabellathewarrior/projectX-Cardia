import React, { useState } from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    Image,
    TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Ionicons } from '@expo/vector-icons';

const AnalysisDetailScreen = ({ onBack }: { onBack: () => void }) => {

    const analysis = {
        title: 'Hipertansiyon',
        date: '2024-12-01',
        disease: 'Yüksek Tansiyon',
    };

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.header}>
                <TouchableOpacity onPress={onBack} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color="#42b883" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Analiz Detayı</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>{analysis.title}</Text>
                <Text style={styles.date}>Tarih: {analysis.date}</Text>

                <Text style={styles.sectionTitle}>Tespit Edilen Durum</Text>
                <Text style={styles.disease}>
                    {analysis.disease || 'Herhangi bir hastalık tespit edilmedi.'}
                </Text>

                <TouchableOpacity style={styles.chatButton} onPress={() => { }}>
                    <Text style={styles.chatButtonText}>
                        💬 İlgili sohbet geçmişini görüntüle
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const ProfileScreen = () => {
    const [showDetail, setShowDetail] = useState(false);

    const uploadedImages = [
        'https://via.placeholder.com/100',
        'https://via.placeholder.com/100',
    ];
    const uploadedPDFs = ['rapor1.pdf', 'analiz2.pdf'];
    const analysisHistory = [
        { id: 1, title: 'Hipertansiyon', date: '2024-12-01' },
        { id: 2, title: 'Aritmi Takibi', date: '2025-01-15' },
        { id: 3, title: 'Kalp Ritmi Değerlendirmesi', date: '2025-03-02' },
    ];
    const navigation = useNavigation();

    if (showDetail) {
        return <AnalysisDetailScreen onBack={() => setShowDetail(false)} />;
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color="#42b883" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Profilim</Text>
            </View>


            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.sectionTitle}>📂 Geçmiş Yüklemelerim</Text>

                <Text style={styles.subTitle}>Görseller</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.imageScroll}>
                    {uploadedImages.map((img, idx) => (
                        <Image key={idx} source={{ uri: img }} style={styles.image} />
                    ))}
                </ScrollView>

                <Text style={styles.subTitle}>PDF'ler</Text>
                {uploadedPDFs.map((pdf, idx) => (
                    <View key={idx} style={styles.pdfItem}>
                        <Ionicons name="document-text-outline" size={20} color="#283739" />
                        <Text style={styles.pdfText}>{pdf}</Text>
                    </View>
                ))}

                <Text style={styles.sectionTitle}>📋 Geçmiş Analizlerim</Text>
                <View style={styles.analysisList}>
                    {analysisHistory.map((item) => (
                        <TouchableOpacity
                            key={item.id}
                            style={styles.analysisItem}
                            onPress={() => setShowDetail(true)}
                        >
                            <Ionicons name="pulse-outline" size={20} color="#42b883" />
                            <View style={styles.analysisTextGroup}>
                                <Text style={styles.analysisTitle}>{item.title}</Text>
                                <Text style={styles.analysisDate}>{item.date}</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f9f9f9' },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        paddingHorizontal: 20,
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderColor: '#e0e0e0',
        elevation: 3,
        position: 'relative',
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: '#283739',
    },
    backButton: {
        position: 'absolute',
        left: 20,
    },

    content: {
        padding: 20,
        paddingBottom: 50,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: '700',
        marginTop: 10,
        marginBottom: 12,
        color: '#283739',
    },
    subTitle: {
        fontSize: 16,
        fontWeight: '600',
        marginVertical: 5,
        color: '#283739',
    },
    imageScroll: {
        marginBottom: 16,
    },
    image: {
        width: 100,
        height: 100,
        marginRight: 12,
        borderRadius: 12,
        backgroundColor: '#eee',
    },
    pdfItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    pdfText: {
        marginLeft: 8,
        fontSize: 15,
        color: '#333',
    },
    analysisList: {
        marginTop: 8,
    },
    analysisItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
        marginBottom: 10,
        backgroundColor: '#e7f7f2',
        borderRadius: 12,
    },
    analysisTextGroup: {
        marginLeft: 10,
    },
    analysisTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#283739',
    },
    analysisDate: {
        fontSize: 13,
        color: '#666',
        marginTop: 2,
    },
    title: {
        fontSize: 22,
        fontWeight: '700',
        color: '#283739',
        marginBottom: 4,
    },
    date: {
        fontSize: 15,
        color: '#666',
        marginBottom: 20,
    },
    disease: {
        fontSize: 15,
        color: '#333',
        marginBottom: 30,
    },
    chatButton: {
        backgroundColor: '#42b883',
        padding: 14,
        borderRadius: 12,
        alignItems: 'center',
    },
    chatButtonText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: '600',
    },

});

export default ProfileScreen;
