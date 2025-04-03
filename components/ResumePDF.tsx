import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';

// Register fonts
Font.register({
    family: 'Helvetica',
    fonts: [
        { src: 'https://fonts.cdnfonts.com/s/29107/Helvetica.woff', fontWeight: 400 },
        { src: 'https://fonts.cdnfonts.com/s/29107/Helvetica-Bold.woff', fontWeight: 700 },
    ],
});

// Create styles
const styles = StyleSheet.create({
    page: {
        padding: 40,
        fontFamily: 'Helvetica',
        fontSize: 11,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        paddingBottom: 10,
    },
    headerLeft: {
        flex: 1,
    },
    name: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#333333',
    },
    title: {
        fontSize: 20,
        color: '#2196F3',
        marginBottom: 15,
    },
    contactInfo: {
        fontSize: 11,
        color: '#666666',
        marginBottom: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    contactText: {
        textDecoration: 'none',
    },
    mainContent: {
        flexDirection: 'row',
        gap: 30,
    },
    leftColumn: {
        flex: 2,
    },
    rightColumn: {
        flex: 1,
    },
    section: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#1a365d',
        borderBottom: '1 solid #e2e8f0',
        paddingBottom: 4,
    },
    experienceItem: {
        marginBottom: 15,
    },
    jobTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333333',
        marginBottom: 2,
    },
    company: {
        fontSize: 12,
        color: '#2196F3',
        marginBottom: 2,
    },
    dateLocation: {
        fontSize: 11,
        color: '#666666',
        marginBottom: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    bulletPoint: {
        fontSize: 11,
        color: '#444444',
        marginBottom: 3,
        paddingLeft: 10,
    },
    skillsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 5,
    },
    skillItem: {
        fontSize: 11,
        color: '#444444',
        backgroundColor: '#F5F5F5',
        padding: '4 8',
        borderRadius: 3,
        marginBottom: 5,
    },
    languageItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    languageName: {
        fontSize: 11,
        color: '#444444',
    },
    languageLevel: {
        fontSize: 11,
        color: '#666666',
    },
    summary: {
        fontSize: 11,
        color: '#444444',
        lineHeight: 1.5,
        marginBottom: 15,
    },
    projectItem: {
        marginBottom: 8,
        paddingLeft: 8,
        borderLeft: '2 solid #3b82f6',
    },
    projectTitle: {
        fontSize: 11,
        fontWeight: 'bold',
        color: '#1a365d',
    },
    projectLink: {
        fontSize: 9,
        color: '#2563eb',
        marginTop: 2,
        textDecoration: 'underline',
    },
    projectDescription: {
        fontSize: 9,
        color: '#4a5568',
        marginTop: 2,
        lineHeight: 1.4,
    },
    tagContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 4,
        marginTop: 4,
    },
    tag: {
        fontSize: 8,
        color: '#2563eb',
        backgroundColor: '#eff6ff',
        padding: 2,
        borderRadius: 2,
    },
});

// Create Document Component
const ResumePDF = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            {/* Header Section */}
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <Text style={styles.name}>GHULAM ABBAS ATAIE</Text>
                    <Text style={styles.title}>Chief Technology Officer</Text>
                    <View style={styles.contactInfo}>
                        <Text style={styles.contactText}>📞 +98 991 290 6146   📧 abbas.ataie.montazer@gmail.com   📍 Tehran</Text>
                    </View>
                    <View style={styles.contactInfo}>
                        <Text style={styles.contactText}>🔗 linkedin.com/in/abbas-ataie-72a4431b9/   🔗 github.com/abbasatayee/</Text>
                    </View>
                </View>
            </View>

            <View style={styles.mainContent}>
                <View style={styles.leftColumn}>
                    {/* Experience Section */}
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>EXPERIENCE</Text>

                        <View style={styles.experienceItem}>
                            <Text style={styles.jobTitle}>Chief Technology Officer</Text>
                            <Text style={styles.company}>Tara Solutions Inc</Text>
                            <View style={styles.dateLocation}>
                                <Text>01/2024 - Present</Text>
                                <Text>Kabul</Text>
                            </View>
                            <Text style={styles.bulletPoint}>• Developing website and mobile applications using Node.js, React.js, Nomad, TypeScript, React Native, Kafka, Next.js, and RabbitMQ</Text>
                            <Text style={styles.bulletPoint}>• Worked closely with Cloud Station LLC FZ (Dubai) to enhance cross-platform functionalities and integrate enterprise cloud solutions</Text>
                            <Text style={styles.bulletPoint}>• Leading the technical team, ensuring code quality, scalability, and best practices</Text>
                            <Text style={styles.bulletPoint}>• Managing and assigning tasks to developers to ensure efficient execution</Text>
                            <Text style={styles.bulletPoint}>• Supporting the architecture and strategic planning of microservices and cloud infrastructures</Text>
                        </View>

                        <View style={styles.experienceItem}>
                            <Text style={styles.jobTitle}>Full-Stack Independent Contractor</Text>
                            <Text style={styles.company}>Tech Startup based</Text>
                            <View style={styles.dateLocation}>
                                <Text>10/2022 - 12/2023</Text>
                                <Text>USA</Text>
                            </View>
                            <Text style={styles.bulletPoint}>• Designed and optimized high-performance PostgreSQL databases for authentication, e-commerce, and content management systems, ensuring scalability and data integrity</Text>
                            <Text style={styles.bulletPoint}>• Developed RESTful APIs and microservices using NestJS, React, and Next.js, seamlessly integrating with PostgreSQL for robust backend functionality</Text>
                            <Text style={styles.bulletPoint}>• Automated CI/CD pipelines with GitHub Actions and Google Cloud Platform (GCP), reducing deployment times and improving development efficiency</Text>
                        </View>

                        <View style={styles.experienceItem}>
                            <Text style={styles.jobTitle}>Full-Stack Developer</Text>
                            <Text style={styles.company}>Leading Grocery Store</Text>
                            <View style={styles.dateLocation}>
                                <Text>02/2021 - 09/2022</Text>
                                <Text>Click.af, Kabul</Text>
                            </View>
                            <Text style={styles.bulletPoint}>• Developed and managed web and mobile applications using React.js, Node.js, Next.js, React Native, CS-Cart, and Java</Text>
                            <Text style={styles.bulletPoint}>• Developed and integrated the Vendor API, mobile application, and web application to enable vendors to efficiently manage their orders, payments, and return requests</Text>
                            <Text style={styles.bulletPoint}>• Sole developer responsible for building and managing high-traffic web applications using Python, Django, React Native, MySQL, and React.js</Text>
                            <Text style={styles.bulletPoint}>• Developed a Petition Management System for the Ministry of Defense of Afghanistan before the Taliban takeover, streamlining petition processing and improving workflow efficiency</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.rightColumn}>
                    {/* Summary Section */}
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>SUMMARY</Text>
                        <Text style={styles.summary}>Results-driven Software Engineer with 5+ years of expertise in Next.JS, React.JS, Node.JS, MicroServices, Node JS, Typescript. Proven track record in crafting scalable and extensible software solutions. Eager to take on new challenges and contribute to innovative projects.</Text>
                    </View>

                    {/* Languages Section */}
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>LANGUAGES</Text>
                        <View style={styles.languageItem}>
                            <Text style={styles.languageName}>English</Text>
                            <Text style={styles.languageLevel}>Advanced</Text>
                        </View>
                        <View style={styles.languageItem}>
                            <Text style={styles.languageName}>German</Text>
                            <Text style={styles.languageLevel}>Advanced</Text>
                        </View>
                    </View>

                    {/* Projects Section */}
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>PROJEKTE</Text>

                        <View style={styles.projectItem}>
                            <Text style={styles.projectTitle}>Tara Solutions Cloud</Text>
                            <Text style={styles.projectLink}>www.tarasolutions.cloud</Text>
                            <Text style={styles.projectDescription}>
                                Entwicklung der offiziellen Website von Tara Solutions Inc. mit Fokus auf Leistungsoptimierung und Sicherheit.
                            </Text>
                            <View style={styles.tagContainer}>
                                <Text style={styles.tag}>Next.js</Text>
                                <Text style={styles.tag}>React.js</Text>
                                <Text style={styles.tag}>Node.js</Text>
                            </View>
                        </View>

                        <View style={styles.projectItem}>
                            <Text style={styles.projectTitle}>Cloud Station Platform</Text>
                            <Text style={styles.projectLink}>www.cloud-station.io</Text>
                            <Text style={styles.projectDescription}>
                                Skalierbare Enterprise-Cloud-Services-Plattform mit globaler Nutzerbasis. Implementierung von Frontend und Backend mit Fokus auf Leistung.
                            </Text>
                            <View style={styles.tagContainer}>
                                <Text style={styles.tag}>React.js</Text>
                                <Text style={styles.tag}>Next.js</Text>
                                <Text style={styles.tag}>Node.js</Text>
                                <Text style={styles.tag}>Kafka</Text>
                                <Text style={styles.tag}>Nats</Text>
                            </View>
                        </View>

                        <View style={styles.projectItem}>
                            <Text style={styles.projectTitle}>Ahsen Elite E-Commerce</Text>
                            <Text style={styles.projectLink}>ahsenelite.com</Text>
                            <Text style={styles.projectDescription}>
                                Web- und Mobile-Anwendungen mit sicherer Zahlungsabwicklung und Bestellverwaltung für optimale Benutzererfahrung.
                            </Text>
                            <View style={styles.tagContainer}>
                                <Text style={styles.tag}>React.js</Text>
                                <Text style={styles.tag}>React Native</Text>
                                <Text style={styles.tag}>Next.js</Text>
                                <Text style={styles.tag}>Node.js</Text>
                            </View>
                        </View>

                        <View style={styles.projectItem}>
                            <Text style={styles.projectTitle}>Plant Disease Detection System</Text>
                            <Text style={styles.projectDescription}>
                                KI-gestütztes Deep-Learning-System zur Erkennung von Pflanzenkrankheiten mit Raspberry Pi und Kamera für Echtzeitdiagnose.
                            </Text>
                            <View style={styles.tagContainer}>
                                <Text style={styles.tag}>Deep Learning</Text>
                                <Text style={styles.tag}>Raspberry Pi</Text>
                                <Text style={styles.tag}>Python</Text>
                                <Text style={styles.tag}>Computer Vision</Text>
                            </View>
                        </View>
                    </View>

                    {/* Skills Section */}
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>SKILLS</Text>
                        <View style={styles.skillsGrid}>
                            {[
                                'CSS', 'Deep Learning', 'Django',
                                'Docker', 'ECommerce', 'Flutter', 'GCP',
                                'Git', 'GitHub', 'HTML', 'Java',
                                'JavaScript', 'Kafka', 'Laravel',
                                'MongoDB', 'NestJS', 'Next.js', 'PHP',
                                'PostgreSQL', 'Python', 'RabbitMQ',
                                'React', 'React Native', 'REST', 'SQL',
                                'TypeScript', 'Vue.js', 'GitHub Actions',
                                'Node.js', 'Digitalization', 'Microservices',
                                'Raspberry PI', 'Gmail'
                            ].map((skill) => (
                                <Text key={skill} style={styles.skillItem}>{skill}</Text>
                            ))}
                        </View>
                    </View>
                </View>
            </View>
        </Page>
    </Document>
);

export default ResumePDF; 