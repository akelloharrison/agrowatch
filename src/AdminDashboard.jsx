import SystemOverview from './components/SystemOverview';
import DataMonitoringPanel from './components/DataMonitoringPanel';
import ModelManagement from './components/ModelManagement';
import AlertManagement from './components/AlertManagement';
import FarmerFeedbackPanel from './components/FarmerFeedbackPanel';

function AdminDashboard() {
  return (
    <div className="p-4 space-y-4">
      <SystemOverview />
      <DataMonitoringPanel />
      <ModelManagement />
      <AlertManagement />
      <FarmerFeedbackPanel />
    </div>
  );
}

export default AdminDashboard;