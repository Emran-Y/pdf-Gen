import { PDFDownloadLink } from '@react-pdf/renderer';
import ElectricityPDF from './mypdf';
import ElectricityDetails from './types/ElectricityDetails';

const buttonStyle = {
  backgroundColor: 'white',
  color: 'skyblue',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '16px',
  fontWeight: 'bold',
  textDecoration: 'none',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  transition: 'background-color 0.3s, color 0.3s',
};

const App = () => {
  // Dummy appointment details
  const dummyElectricityDetails: ElectricityDetails = {
    address1: '123 Main St',
    address2: 'Apt 101',
    address3: 'Building C',
    address4: 'Floor 3',
    city: 'New York',
    country: 'USA',
    postCode: '10001',
    noAcPoints: 2,
    noDcPoints: 1,
    makeOfChargePoint: 'ABC',
    ampsPerCp: '10',
    kwPerCp: '5',
    wallMountSingle: 1,
    wallMountDual: 0,
    floorMountSingle: 1,
    floorMountDual: 0,
    phaseType: 'Single',
    mainsFuseSize: '20A',
    mainsIsolation: 'Yes',
    earthingSetup: 'TT System',
    mobileSignal: 'Good',
    signalStrength: 'Strong',
    consumerUnitMake: 'XYZ',
    consumerUnitModel: '123',
    totalSpareWays: '4',
    totalAmpsInUse: '30',
    cableSizeRead: '10mm²',
    cableLengthTotal: '50m',
    totalCableRuns: '2',
    internalCableAttachment: 'Wall-mounted',
    dataCableRun: 'Cat6',
    cableRunDescription: 'From main unit to charge points',
    selectOptions: 'Option A',
    gwLength: '10m',
    gwWidth: '5m',
    gwDepth: '2m',
    ductingSize: '50mm',
    ductingLength: '20m',
    groundWorksDescription: 'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit voluptate velit esse cillum dolore fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt culpa qui officia deserunt mollit anim id est laborum laborum',
    installationEarthingSetup: 'TT System',
  };
  

  const appStyle = {
    backgroundColor: 'white',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
  };

  return (
    <div style={appStyle}>
      <PDFDownloadLink document={<ElectricityPDF electricityDetails={dummyElectricityDetails} />} fileName="electricity_details.pdf">
        {({  }) => (
          <button style={buttonStyle}>
            Download
          </button>
        )}
      </PDFDownloadLink>
    </div>
  );
};

export default App;
