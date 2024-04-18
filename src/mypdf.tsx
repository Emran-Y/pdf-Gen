import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import ElectricityDetails from './types/electricityDetails';
import { pdf } from '@react-pdf/renderer';

// Define an interface for the field names
interface ElectricityFieldNames {
  address1: string;
  address2: string;
  address3: string;
  address4: string;
  city: string;
  country: string;
  postCode: string;
  noAcPoints: number;
  noDcPoints: number;
  makeOfChargePoint: string;
  ampsPerCp: string;
  kwPerCp: string;
  wallMountSingle: number;
  wallMountDual: number;
  floorMountSingle: number;
  floorMountDual: number;
  phaseType: string;
  mainsFuseSize: string;
  mainsIsolation: string;
  earthingSetup: string;
  mobileSignal: string;
  signalStrength: string;
  consumerUnitMake: string;
  consumerUnitModel: string;
  totalSpareWays: string;
  totalAmpsInUse: string;
  cableSizeRead: string;
  cableLengthTotal: string;
  totalCableRuns: string;
  internalCableAttachment: string;
  dataCableRun: string;
  cableRunDescription: string;
  selectOptions: string;
  gwLength: string;
  gwWidth: string;
  gwDepth: string;
  ductingSize: string;
  ductingLength: string;
  groundWorksDescription: string;
  installationEarthingSetup: string;
}

// Define a mapping object for field names to display labels
const fieldLabels: Record<keyof ElectricityFieldNames, string> = {
  address1: 'Address 1: (street/road name)',
  address2: 'Address 2: (street/road name)',
  address3: 'Address 3: (street/road name)',
  address4: 'Address 4: (street/road name)',
  city: 'City:',
  country: 'Country:',
  postCode: 'Postcode:',
  noAcPoints: 'No. of AC Points:',
  noDcPoints: 'No. of DC Points:',
  makeOfChargePoint: 'Make Of Charge Point:',
  ampsPerCp: 'Amps per CP:',
  kwPerCp: 'KW per CP:',
  wallMountSingle: 'Wall Mount Single:',
  wallMountDual: 'Wall Mount Dual:',
  floorMountSingle: 'Floor Mount Single:',
  floorMountDual: 'Floor Mount Dual:',
  phaseType: 'Phase Type:',
  mainsFuseSize: 'Mains Fuse Size:',
  mainsIsolation: 'Mains Isolation:',
  earthingSetup: 'Earthing Setup:',
  mobileSignal: 'Mobile Signal:',
  signalStrength: 'Signal Strength:',
  consumerUnitMake: 'Consumer Unit Make:',
  consumerUnitModel: 'Consumer Unit Model:',
  totalSpareWays: 'Total Spare Ways:',
  totalAmpsInUse: 'Total Amps In Use:',
  cableSizeRead: 'Cable Size Reqd:',
  cableLengthTotal: 'Cable Length Total:',
  totalCableRuns: 'Total Cable Runs:',
  internalCableAttachment: 'Internal Cable Attachment:',
  dataCableRun: 'Data Cable Run:',
  cableRunDescription: 'Cable Run Description:',
  selectOptions: 'Select Options:',
  gwLength: 'GW Length:',
  gwWidth: 'GW Width:',
  gwDepth: 'GW Depth:',
  ductingSize: 'Ducting Size:',
  ductingLength: 'Ducting Length:',
  groundWorksDescription: 'Groundworks Description:',
  installationEarthingSetup: 'Installation Earthing Setup:',
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    paddingLeft: 80,
    paddingRight: 80,
    paddingTop: 70,
    paddingBottom: 70,
  },
  header: {
    marginBottom: 30,
    marginTop: 30,
  },
  logo: {
    width: 100,
    height: 30,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'Helvetica-Bold',
  },
  mainSection: {
    marginBottom: 30,
  },
  section: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 10,
  },
  subSection: {
    minWidth: '45%',
    marginBottom: 15,
    flexGrow: 1,
  },
  label: {
    fontSize: 13,
    marginBottom: 5,
    fontFamily: 'Helvetica-Bold',
  },
  imageTitle:{
    fontSize: 13,
    marginBottom: 30,
    fontFamily: 'Helvetica-Bold',
  },
  value: {
    backgroundColor: '#fcfcfc',
    borderRadius: 20,
    padding: 10,
    fontSize: 12,
    color: '#B0ADAD',
    marginTop: 10,
    marginLeft: 5,
  },
});

const sections = [
  {
    title: 'Address Details',
    fields: [
      'address1',
      'address2',
      'address3',
      'address4',
      'city',
      'country',
      'postCode',
    ],
  },
  {
    title: 'Charger Info',
    fields: [
      'noAcPoints',
      'noDcPoints',
      'makeOfChargePoint',
      'ampsPerCp',
      'kwPerCp',
      'city',
      'wallMountSingle',
      'wallMountDual',
      'floorMountSingle',
      'floorMountDual',
    ],
  },
  {
    title: 'Site Electrical Set Up',
    fields: [
      'phaseType',
      'mainsFuseSize',
      'mainsIsolation',
      'earthingSetup',
      'mobileSignal',
      'signalStrength',
      'consumerUnitMake',
      'totalSpareWays',
      'totalAmpsInUse',
    ],
  },
  {
    title: 'Installation Set Up',
    fields: [
      'cableSizeRead',
      'cableLengthTotal',
      'totalCableRuns',
      'internalCableAttachment',
      'earthingSetup',
      'dataCableRun',
      'cableRunDescription',
    ],
  },
  {
    title: 'Group Works',
    fields: [
      'selectOptions',
      'gwLength',
      'gwWidth',
      'gwDepth',
      'ductingSize',
      'ductingLength',
      'groundWorksDescription',
    ],
  },
];


const ElectricityPDF = ({ electricityDetails }: { electricityDetails: ElectricityDetails }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Image src='/logo.png' style={styles.logo} />
        </View>

        {sections.map(section => (
          <View key={section.title} style={styles.mainSection}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            <View style={styles.section}>
              {section.fields.map(field => (
                <View key={field} style={styles.subSection}>
                  <Text style={styles.label}>{fieldLabels[field as keyof ElectricityFieldNames]}</Text>
                  <Text style={styles.value}>{electricityDetails[field as keyof ElectricityFieldNames]}</Text>
                </View>
              ))}
            </View>
          </View>
        ))}

        <Text style={styles.imageTitle}>Image Attachments</Text>
        <View style={{maxWidth:'400px',flexDirection:'row',gap:'10px',flexWrap:'wrap',}}>

          {electricityDetails.images.map((image, index) => (
            <Image key={index} src={image} style={{ width: 180, height: 130}} />
          ))}

        </View>

      </Page>
    </Document>
  );
};


function generatePDFBlob(dummyElectricityDetails: ElectricityDetails) {
  pdf(<ElectricityPDF electricityDetails={dummyElectricityDetails} />)
    .toBlob()
    .then((blob) => {
      console.log('Blob:', blob);
    });
}

export default generatePDFBlob;

// export default ElectricityPDF;